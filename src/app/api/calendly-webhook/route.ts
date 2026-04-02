import { NextRequest, NextResponse } from "next/server";

// =============================================
// Calendly Webhook — Deal Creation on Booking
// Creates a HubSpot Deal at "New Booking" stage
// when a Calendly invitee.created event fires.
// =============================================

const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;
const CALENDLY_WEBHOOK_SIGNING_KEY = process.env.CALENDLY_WEBHOOK_SIGNING_KEY;
const HUBSPOT_API = "https://api.hubapi.com";

// Pipeline and stage IDs (from HubSpot portal 245754448)
const PIPELINE_ID = "default";
const NEW_BOOKING_STAGE_ID = "appointmentscheduled";

// Only deals in active sales-cycle stages count as "open"
// Post-sale stages (Won, Active Build, Hosting) should NOT block new deal creation
// for returning clients starting a new project.
const ACTIVE_SALES_STAGES = new Set([
  "appointmentscheduled",  // New Booking
  "contractsent",          // Intake Received
  "qualifiedtobuy",        // Discovery Completed
  "presentationscheduled", // Proposal / Quote Sent
]);

// ------------------------------------
// Calendly webhook signature verification
// ------------------------------------
async function verifyCalendlySignature(
  payload: string,
  signature: string | null,
  signingKey: string
): Promise<boolean> {
  if (!signature) return false;

  try {
    // Calendly uses HMAC-SHA256 for webhook signatures
    // Header format: v1,t=<timestamp>,v1=<signature>
    const parts = signature.split(",");
    const timestamp = parts.find((p) => p.startsWith("t="))?.slice(2);
    const sig = parts.find((p) => p.startsWith("v1="))?.slice(3);

    if (!timestamp || !sig) return false;

    // Verify timestamp is within 5 minutes
    const now = Math.floor(Date.now() / 1000);
    if (Math.abs(now - parseInt(timestamp)) > 300) return false;

    // Compute expected signature
    const data = `${timestamp}.${payload}`;
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      "raw",
      encoder.encode(signingKey),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );
    const signatureBytes = await crypto.subtle.sign(
      "HMAC",
      key,
      encoder.encode(data)
    );
    const expectedSig = Array.from(new Uint8Array(signatureBytes))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    return sig === expectedSig;
  } catch {
    console.error("Calendly signature verification failed");
    return false;
  }
}

// ------------------------------------
// HubSpot API helpers
// ------------------------------------
async function hubspotFetch(
  endpoint: string,
  options: RequestInit = {}
): Promise<Response> {
  return fetch(`${HUBSPOT_API}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
      ...options.headers,
    },
  });
}

async function searchContactByEmail(
  email: string
): Promise<{ id: string } | null> {
  const res = await hubspotFetch("/crm/v3/objects/contacts/search", {
    method: "POST",
    body: JSON.stringify({
      filterGroups: [
        {
          filters: [
            { propertyName: "email", operator: "EQ", value: email },
          ],
        },
      ],
      properties: ["email", "firstname", "lastname"],
      limit: 1,
    }),
  });

  if (!res.ok) return null;
  const data = await res.json();
  return data.total > 0 ? { id: data.results[0].id } : null;
}

async function findOpenDealForContact(
  contactId: string
): Promise<{ id: string } | null> {
  // Get deals associated with this contact
  const res = await hubspotFetch(
    `/crm/v3/objects/contacts/${contactId}/associations/deals`
  );

  if (!res.ok) return null;
  const data = await res.json();

  if (!data.results || data.results.length === 0) return null;

  // Only match deals in active sales-cycle stages.
  // Won / Active Build / Hosting / Lost are all terminal — a returning
  // client booking a new consultation should get a fresh deal.
  for (const assoc of data.results) {
    const dealRes = await hubspotFetch(
      `/crm/v3/objects/deals/${assoc.id}?properties=dealstage,pipeline`
    );
    if (!dealRes.ok) continue;

    const deal = await dealRes.json();
    const stage = deal.properties?.dealstage;

    if (ACTIVE_SALES_STAGES.has(stage)) {
      return { id: deal.id };
    }
  }

  return null;
}

async function createDeal(
  contactId: string,
  dealName: string,
  consultationDate: string
): Promise<{ id: string } | null> {
  // Create the deal
  const dealRes = await hubspotFetch("/crm/v3/objects/deals", {
    method: "POST",
    body: JSON.stringify({
      properties: {
        dealname: dealName,
        pipeline: PIPELINE_ID,
        dealstage: NEW_BOOKING_STAGE_ID,
        consultation_date: consultationDate,
      },
    }),
  });

  if (!dealRes.ok) {
    const err = await dealRes.json();
    console.error("HubSpot create deal error:", err);
    return null;
  }

  const deal = await dealRes.json();

  // Associate deal with contact
  await hubspotFetch(
    `/crm/v3/objects/deals/${deal.id}/associations/contacts/${contactId}/deal_to_contact`,
    { method: "PUT" }
  );

  return { id: deal.id };
}

async function updateDealConsultationDate(
  dealId: string,
  consultationDate: string
): Promise<void> {
  await hubspotFetch(`/crm/v3/objects/deals/${dealId}`, {
    method: "PATCH",
    body: JSON.stringify({
      properties: {
        consultation_date: consultationDate,
      },
    }),
  });
}

// ------------------------------------
// Main handler
// ------------------------------------
export async function POST(req: NextRequest) {
  try {
    if (!HUBSPOT_ACCESS_TOKEN) {
      console.error("HUBSPOT_ACCESS_TOKEN is not configured");
      return NextResponse.json(
        { error: "HubSpot not configured" },
        { status: 500 }
      );
    }

    // Read raw body for signature verification
    const rawBody = await req.text();

    // Verify Calendly webhook signature (skip if no signing key configured — dev mode)
    if (CALENDLY_WEBHOOK_SIGNING_KEY) {
      const signature = req.headers.get("calendly-webhook-signature");
      const isValid = await verifyCalendlySignature(
        rawBody,
        signature,
        CALENDLY_WEBHOOK_SIGNING_KEY
      );

      if (!isValid) {
        console.error("Invalid Calendly webhook signature");
        return NextResponse.json(
          { error: "Invalid signature" },
          { status: 401 }
        );
      }
    }

    const payload = JSON.parse(rawBody);

    // Only process invitee.created events
    if (payload.event !== "invitee.created") {
      return NextResponse.json({ received: true, skipped: true });
    }

    const invitee = payload.payload;
    const email = invitee?.email;
    const name = invitee?.name || "Unknown";

    if (!email) {
      console.error("No email in Calendly webhook payload");
      return NextResponse.json(
        { error: "No email in payload" },
        { status: 400 }
      );
    }

    // Extract consultation date from the scheduled event
    const eventStartTime = invitee?.scheduled_event?.start_time;
    const consultationDate = eventStartTime
      ? new Date(eventStartTime).toISOString().split("T")[0]
      : new Date().toISOString().split("T")[0];

    // 1. Search for existing contact
    let contact = await searchContactByEmail(email);

    // If no contact exists yet (Calendly native sync may not have fired yet),
    // wait briefly and retry, or create one
    if (!contact) {
      // Brief wait for Calendly native sync to create the contact
      await new Promise((resolve) => setTimeout(resolve, 2000));
      contact = await searchContactByEmail(email);
    }

    if (!contact) {
      // Create contact if native sync hasn't created it yet
      const nameParts = name.split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";

      const createRes = await hubspotFetch("/crm/v3/objects/contacts", {
        method: "POST",
        body: JSON.stringify({
          properties: {
            email,
            firstname: firstName,
            lastname: lastName,
          },
        }),
      });

      if (createRes.ok) {
        const created = await createRes.json();
        contact = { id: created.id };
      } else {
        // Contact might have been created by Calendly native sync in the meantime
        // Try one more search
        contact = await searchContactByEmail(email);
        if (!contact) {
          console.error("Failed to find or create contact for:", email);
          return NextResponse.json(
            { error: "Failed to resolve contact" },
            { status: 500 }
          );
        }
      }
    }

    // 2. Check for existing open deal (duplicate prevention)
    const existingDeal = await findOpenDealForContact(contact.id);

    if (existingDeal) {
      // Reschedule or repeat booking — update consultation date on existing deal
      await updateDealConsultationDate(existingDeal.id, consultationDate);
      console.log(
        `Updated consultation date on existing deal ${existingDeal.id} for ${email}`
      );
      return NextResponse.json({
        received: true,
        action: "updated_existing_deal",
        dealId: existingDeal.id,
      });
    }

    // 3. Create new deal at "New Booking" stage
    const deal = await createDeal(
      contact.id,
      `${name} — JadorWorks Project`,
      consultationDate
    );

    if (!deal) {
      console.error("Failed to create deal for:", email);
      return NextResponse.json(
        { error: "Failed to create deal" },
        { status: 500 }
      );
    }

    console.log(`Created deal ${deal.id} for ${email} at New Booking stage`);
    return NextResponse.json({
      received: true,
      action: "created_deal",
      dealId: deal.id,
    });
  } catch (error) {
    console.error("Calendly webhook error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
