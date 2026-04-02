import { NextRequest, NextResponse } from "next/server";

// =============================================
// Pre-Discovery Intake Form API Route
// Sends structured intake email via Resend
// Then syncs data to HubSpot CRM (awaited)
// =============================================

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = process.env.CONTACT_EMAIL || "hello@jadorworks.com";
const FROM_EMAIL =
  process.env.FROM_EMAIL || "JadorWorks Web Studio <noreply@jadorworks.com>";

const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;
const HUBSPOT_API = "https://api.hubapi.com";

// Pipeline and stage IDs (from HubSpot portal 245754448)
const PIPELINE_ID = "default";
const INTAKE_STAGE_ID = "contractsent"; // Intake Received

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
// Rate limiting (same pattern as contact)
// ------------------------------------
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 3;

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

// ------------------------------------
// Types
// ------------------------------------
interface IntakeFormData {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  businessType: string;
  existingWebsite?: string;
  existingGBP?: string;
  services: string;
  serviceArea: string;
  mainGoal: string;
  idealCustomer?: string;
  visualStyle?: string;
  brandColors?: string;
  inspirationUrls?: string;
  businessStory: string;
  featuresWanted?: string[];
  timeline?: string;
  contactMethod?: string;
  website?: string; // honeypot
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildRow(label: string, value: string | undefined): string {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:10px 16px;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:rgba(13,27,42,0.4);vertical-align:top;white-space:nowrap;width:140px;">${label}</td>
      <td style="padding:10px 16px;font-size:14px;font-weight:400;color:#0D1B2A;line-height:1.6;">${escapeHtml(value)}</td>
    </tr>`;
}

function buildEmailHTML(data: IntakeFormData): string {
  const featuresStr =
    data.featuresWanted && data.featuresWanted.length > 0
      ? data.featuresWanted.join(", ")
      : undefined;

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#FAF9F6;font-family:'Inter',Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:40px 24px;">

    <!-- Header -->
    <div style="text-align:center;margin-bottom:32px;">
      <div style="font-size:18px;color:#0D1B2A;letter-spacing:-0.02em;">
        <span style="font-weight:300;">Jador</span><span style="font-weight:700;">Works</span>
      </div>
      <p style="margin:6px 0 0;font-size:11px;font-weight:500;letter-spacing:0.2em;text-transform:uppercase;color:rgba(13,27,42,0.4);">NEW PROJECT INTAKE</p>
    </div>

    <!-- Section 1: Business Basics -->
    <div style="background:#ffffff;border:1px solid rgba(13,27,42,0.08);border-radius:8px;padding:24px 0;margin-bottom:16px;">
      <p style="margin:0 0 12px 16px;font-size:12px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#0D1B2A;">Business Basics</p>
      <table style="width:100%;border-collapse:collapse;">
        ${buildRow("Business", data.businessName)}
        ${buildRow("Contact", data.contactName)}
        ${buildRow("Email", data.email)}
        ${buildRow("Phone", data.phone)}
        ${buildRow("Type", data.businessType)}
        ${buildRow("Website", data.existingWebsite)}
        ${buildRow("GBP URL", data.existingGBP)}
      </table>
    </div>

    <!-- Section 2: Services & Goals -->
    <div style="background:#ffffff;border:1px solid rgba(13,27,42,0.08);border-radius:8px;padding:24px 0;margin-bottom:16px;">
      <p style="margin:0 0 12px 16px;font-size:12px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#0D1B2A;">Services & Goals</p>
      <table style="width:100%;border-collapse:collapse;">
        ${buildRow("Services", data.services)}
        ${buildRow("Service Area", data.serviceArea)}
        ${buildRow("Main Goal", data.mainGoal)}
        ${buildRow("Ideal Customer", data.idealCustomer)}
      </table>
    </div>

    <!-- Section 3: Branding & Style -->
    <div style="background:#ffffff;border:1px solid rgba(13,27,42,0.08);border-radius:8px;padding:24px 0;margin-bottom:16px;">
      <p style="margin:0 0 12px 16px;font-size:12px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#0D1B2A;">Branding & Style</p>
      <table style="width:100%;border-collapse:collapse;">
        ${buildRow("Visual Style", data.visualStyle)}
        ${buildRow("Brand Colors", data.brandColors)}
        ${buildRow("Inspiration", data.inspirationUrls)}
      </table>
    </div>

    <!-- Section 4: Project Notes -->
    <div style="background:#ffffff;border:1px solid rgba(13,27,42,0.08);border-radius:8px;padding:24px 0;margin-bottom:16px;">
      <p style="margin:0 0 12px 16px;font-size:12px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#0D1B2A;">Project Notes</p>
      <table style="width:100%;border-collapse:collapse;">
        ${buildRow("Story", data.businessStory)}
        ${buildRow("Features", featuresStr)}
        ${buildRow("Timeline", data.timeline)}
        ${buildRow("Contact Pref", data.contactMethod)}
      </table>
    </div>

    <!-- Reply CTA -->
    <div style="text-align:center;margin-top:24px;">
      <a href="mailto:${escapeHtml(data.email)}?subject=Re: Project Intake — ${escapeHtml(data.businessName)}"
         style="display:inline-block;padding:12px 32px;background:#0D1B2A;color:#FAF9F6;font-size:13px;font-weight:500;text-decoration:none;border-radius:6px;letter-spacing:0.03em;">
        Reply to ${escapeHtml(data.contactName)}
      </a>
    </div>

    <!-- Footer -->
    <p style="text-align:center;margin-top:32px;font-size:11px;color:rgba(13,27,42,0.25);font-weight:300;">
      JadorWorks Web Studio &middot; jadorworks.com
    </p>
  </div>
</body>
</html>`;
}

// ------------------------------------
// HubSpot CRM Sync (non-blocking)
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

async function syncToHubSpot(data: IntakeFormData): Promise<void> {
  // 1. Search for existing contact by email
  const searchRes = await hubspotFetch("/crm/v3/objects/contacts/search", {
    method: "POST",
    body: JSON.stringify({
      filterGroups: [
        {
          filters: [
            { propertyName: "email", operator: "EQ", value: data.email },
          ],
        },
      ],
      properties: ["email"],
      limit: 1,
    }),
  });

  let contactId: string | null = null;

  if (searchRes.ok) {
    const searchData = await searchRes.json();
    if (searchData.total > 0) {
      contactId = searchData.results[0].id;
    }
  }

  // 2. Update or create contact with onboarding data
  const contactProperties: Record<string, string> = {
    email: data.email,
    phone: data.phone,
    company: data.businessName,
    preferred_contact_method: data.contactMethod || "",
  };

  // Split contact name into first/last
  const nameParts = data.contactName.split(" ");
  contactProperties.firstname = nameParts[0] || "";
  contactProperties.lastname = nameParts.slice(1).join(" ") || "";

  if (contactId) {
    // Update existing contact
    await hubspotFetch(`/crm/v3/objects/contacts/${contactId}`, {
      method: "PATCH",
      body: JSON.stringify({ properties: contactProperties }),
    });
  } else {
    // Create new contact
    const createRes = await hubspotFetch("/crm/v3/objects/contacts", {
      method: "POST",
      body: JSON.stringify({ properties: contactProperties }),
    });
    if (createRes.ok) {
      const created = await createRes.json();
      contactId = created.id;
    } else {
      console.error("Failed to create HubSpot contact for:", data.email);
      return;
    }
  }

  // 3. Find existing active deal for this contact
  let dealId: string | null = null;

  if (contactId) {
    const assocRes = await hubspotFetch(
      `/crm/v3/objects/contacts/${contactId}/associations/deals`
    );
    if (assocRes.ok) {
      const assocData = await assocRes.json();
      if (assocData.results && assocData.results.length > 0) {
        // Find a deal in active sales-cycle stages only.
        // Won / Active Build / Hosting / Lost are terminal — intake for
        // a returning client should create a new deal, not update an old one.
        for (const assoc of assocData.results) {
          const dealRes = await hubspotFetch(
            `/crm/v3/objects/deals/${assoc.id}?properties=dealstage`
          );
          if (dealRes.ok) {
            const deal = await dealRes.json();
            if (ACTIVE_SALES_STAGES.has(deal.properties?.dealstage)) {
              dealId = deal.id;
              break;
            }
          }
        }
      }
    }
  }

  // 4. Build deal properties from onboarding data
  // Build Description field with overflow properties
  const descriptionParts: string[] = [];
  if (data.existingGBP) descriptionParts.push(`Existing GBP: ${data.existingGBP}`);
  if (data.visualStyle) descriptionParts.push(`Visual Style: ${data.visualStyle}`);
  if (data.brandColors) descriptionParts.push(`Brand Colors: ${data.brandColors}`);
  if (data.inspirationUrls) descriptionParts.push(`Inspiration URLs: ${data.inspirationUrls}`);
  if (data.idealCustomer) descriptionParts.push(`Ideal Customer: ${data.idealCustomer}`);
  if (data.services) descriptionParts.push(`Services Offered: ${data.services}`);
  if (data.businessStory) descriptionParts.push(`Business Story: ${data.businessStory}`);
  if (data.featuresWanted && data.featuresWanted.length > 0) {
    descriptionParts.push(`Features Wanted: ${data.featuresWanted.join(", ")}`);
  }

  const dealProperties: Record<string, string> = {
    // Move deal to Intake Received stage
    dealstage: INTAKE_STAGE_ID,
    intake_status: "Submitted",
    intake_submitted_date: new Date().toISOString().split("T")[0],
    service_area: data.serviceArea || "",
    main_goals: data.mainGoal || "",
    business_type: data.businessType || "",
    existing_website: data.existingWebsite || "",
    timeline: data.timeline || "",
    description: descriptionParts.join("\n"),
  };

  if (dealId) {
    // 5a. Update existing deal
    await hubspotFetch(`/crm/v3/objects/deals/${dealId}`, {
      method: "PATCH",
      body: JSON.stringify({ properties: dealProperties }),
    });
    console.log(`HubSpot: Updated deal ${dealId} with intake data for ${data.email}`);
  } else {
    // 5b. Fallback: Create deal if none exists (edge case — intake before booking)
    dealProperties.dealname = `${data.contactName} — JadorWorks Project`;
    dealProperties.pipeline = PIPELINE_ID;

    const createDealRes = await hubspotFetch("/crm/v3/objects/deals", {
      method: "POST",
      body: JSON.stringify({ properties: dealProperties }),
    });

    if (createDealRes.ok && contactId) {
      const newDeal = await createDealRes.json();
      dealId = newDeal.id;

      // Associate deal with contact
      await hubspotFetch(
        `/crm/v3/objects/deals/${newDeal.id}/associations/contacts/${contactId}/deal_to_contact`,
        { method: "PUT" }
      );
      console.log(
        `HubSpot: Created fallback deal ${newDeal.id} for ${data.email} (no prior booking deal found)`
      );
    } else {
      console.error("HubSpot: Failed to create fallback deal for:", data.email);
    }
  }
}

export async function POST(req: NextRequest) {
  try {
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = (await req.json()) as IntakeFormData;

    // Honeypot
    if (body.website) {
      return NextResponse.json({ success: true });
    }

    // Validate required fields
    if (
      !body.businessName ||
      typeof body.businessName !== "string" ||
      body.businessName.length > 200
    ) {
      return NextResponse.json(
        { error: "Business name is required (max 200 characters)" },
        { status: 400 }
      );
    }

    if (
      !body.contactName ||
      typeof body.contactName !== "string" ||
      body.contactName.length > 100
    ) {
      return NextResponse.json(
        { error: "Your name is required (max 100 characters)" },
        { status: 400 }
      );
    }

    if (
      !body.email ||
      typeof body.email !== "string" ||
      body.email.length > 200
    ) {
      return NextResponse.json(
        { error: "Email is required (max 200 characters)" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    if (
      !body.phone ||
      typeof body.phone !== "string" ||
      body.phone.length > 30
    ) {
      return NextResponse.json(
        { error: "Phone number is required (max 30 characters)" },
        { status: 400 }
      );
    }

    if (!body.businessType || typeof body.businessType !== "string") {
      return NextResponse.json(
        { error: "Business type is required" },
        { status: 400 }
      );
    }

    if (
      !body.services ||
      typeof body.services !== "string" ||
      body.services.length > 2000
    ) {
      return NextResponse.json(
        { error: "Services are required (max 2000 characters)" },
        { status: 400 }
      );
    }

    if (
      !body.serviceArea ||
      typeof body.serviceArea !== "string" ||
      body.serviceArea.length > 500
    ) {
      return NextResponse.json(
        { error: "Service area is required (max 500 characters)" },
        { status: 400 }
      );
    }

    if (!body.mainGoal || typeof body.mainGoal !== "string") {
      return NextResponse.json(
        { error: "Main goal is required" },
        { status: 400 }
      );
    }

    if (
      !body.businessStory ||
      typeof body.businessStory !== "string" ||
      body.businessStory.length > 5000
    ) {
      return NextResponse.json(
        { error: "Business story is required (max 5000 characters)" },
        { status: 400 }
      );
    }

    // Optional field length limits
    if (
      body.idealCustomer &&
      (typeof body.idealCustomer !== "string" ||
        body.idealCustomer.length > 500)
    ) {
      return NextResponse.json(
        { error: "Ideal customer too long (max 500 characters)" },
        { status: 400 }
      );
    }

    if (
      body.brandColors &&
      (typeof body.brandColors !== "string" || body.brandColors.length > 200)
    ) {
      return NextResponse.json(
        { error: "Brand colors too long (max 200 characters)" },
        { status: 400 }
      );
    }

    if (
      body.inspirationUrls &&
      (typeof body.inspirationUrls !== "string" ||
        body.inspirationUrls.length > 1000)
    ) {
      return NextResponse.json(
        { error: "Inspiration URLs too long (max 1000 characters)" },
        { status: 400 }
      );
    }

    // Send email via Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: body.email,
        subject: `New Project Intake — ${body.businessName}`,
        html: buildEmailHTML(body),
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Resend API error:", errorData);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    const result = await response.json();

    // HubSpot CRM sync — awaited so Vercel doesn't kill the function
    // Email is the safety net; HubSpot failure does NOT block the response
    if (HUBSPOT_ACCESS_TOKEN) {
      try {
        await syncToHubSpot(body);
      } catch (err) {
        console.error("HubSpot sync error (non-blocking):", err);
      }
    }

    return NextResponse.json({ success: true, id: result.id });
  } catch (error) {
    console.error("Onboarding form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
