import { NextRequest, NextResponse } from "next/server";

// =============================================
// Onboarding Intake Form API Route
// Sends structured intake email via Resend
// =============================================

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = process.env.CONTACT_EMAIL || "hello@jadorworks.com";
const FROM_EMAIL =
  process.env.FROM_EMAIL || "JadorWorks Web Studio <noreply@jadorworks.com>";

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
    return NextResponse.json({ success: true, id: result.id });
  } catch (error) {
    console.error("Onboarding form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
