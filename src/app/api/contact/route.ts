import { NextRequest, NextResponse } from "next/server";

// =============================================
// Contact Form API Route
// Sends email via Resend to hello@jadorworks.com
// =============================================

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = process.env.CONTACT_EMAIL || "hello@jadorworks.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "JadorWorks Web Studio <noreply@jadorworks.com>";

// ------------------------------------
// Lightweight rate limiting (best-effort)
// Resets on cold start, does not coordinate
// across serverless instances. This is temporary
// anti-spam friction, not durable rate limiting.
// ------------------------------------
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 3; // max submissions per IP per window

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
// Types & validation
// ------------------------------------
interface ContactFormData {
  name: string;
  business: string;
  email: string;
  phone?: string;
  message?: string;
  source?: string; // "main" | "hvac" | "remodeling" | "landscaping" | "home-care"
  website?: string; // honeypot — should always be empty
}

function buildEmailHTML(data: ContactFormData): string {
  const sourceLabel = data.source && data.source !== "main"
    ? `<p style="margin:0 0 4px;font-size:12px;color:#7FA868;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;">VIA DEMO SITE: ${data.source.toUpperCase()}</p>`
    : "";

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#FAF9F6;font-family:'Inter',Arial,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:40px 24px;">

    <!-- Header -->
    <div style="text-align:center;margin-bottom:32px;">
      <div style="font-size:18px;color:#0D1B2A;letter-spacing:-0.02em;">
        <span style="font-weight:300;">Jador</span><span style="font-weight:700;">Works</span>
      </div>
      <p style="margin:6px 0 0;font-size:11px;font-weight:500;letter-spacing:0.2em;text-transform:uppercase;color:rgba(13,27,42,0.4);">NEW CONSULTATION REQUEST</p>
    </div>

    <!-- Card -->
    <div style="background:#ffffff;border:1px solid rgba(13,27,42,0.08);border-radius:8px;padding:32px;">
      ${sourceLabel}

      <!-- Name -->
      <p style="margin:0 0 4px;font-size:11px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:rgba(13,27,42,0.4);">NAME</p>
      <p style="margin:0 0 20px;font-size:16px;font-weight:600;color:#0D1B2A;">${escapeHtml(data.name)}</p>

      <!-- Business -->
      <p style="margin:0 0 4px;font-size:11px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:rgba(13,27,42,0.4);">BUSINESS</p>
      <p style="margin:0 0 20px;font-size:16px;font-weight:400;color:#0D1B2A;">${escapeHtml(data.business)}</p>

      <!-- Contact -->
      <div style="display:flex;gap:24px;margin-bottom:20px;">
        <div style="flex:1;">
          <p style="margin:0 0 4px;font-size:11px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:rgba(13,27,42,0.4);">EMAIL</p>
          <p style="margin:0;font-size:14px;color:#0D1B2A;"><a href="mailto:${escapeHtml(data.email)}" style="color:#0D1B2A;text-decoration:none;">${escapeHtml(data.email)}</a></p>
        </div>
        ${data.phone ? `
        <div style="flex:1;">
          <p style="margin:0 0 4px;font-size:11px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:rgba(13,27,42,0.4);">PHONE</p>
          <p style="margin:0;font-size:14px;color:#0D1B2A;"><a href="tel:${escapeHtml(data.phone)}" style="color:#0D1B2A;text-decoration:none;">${escapeHtml(data.phone)}</a></p>
        </div>
        ` : ""}
      </div>

      ${data.message ? `
      <!-- Message -->
      <div style="border-top:1px solid rgba(13,27,42,0.08);padding-top:20px;">
        <p style="margin:0 0 4px;font-size:11px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:rgba(13,27,42,0.4);">MESSAGE</p>
        <p style="margin:0;font-size:14px;font-weight:300;color:rgba(13,27,42,0.7);line-height:1.7;">${escapeHtml(data.message)}</p>
      </div>
      ` : ""}
    </div>

    <!-- Reply CTA -->
    <div style="text-align:center;margin-top:24px;">
      <a href="mailto:${escapeHtml(data.email)}?subject=Re: Consultation Request — ${escapeHtml(data.business)}"
         style="display:inline-block;padding:12px 32px;background:#0D1B2A;color:#FAF9F6;font-size:13px;font-weight:500;text-decoration:none;border-radius:6px;letter-spacing:0.03em;">
        Reply to ${escapeHtml(data.name)}
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

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    // Validate API key exists
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Rate limiting (best-effort, per-instance)
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

    // Parse form data
    const body = (await req.json()) as ContactFormData;

    // Honeypot — bots fill hidden fields, real users don't
    if (body.website) {
      // Silent success — don't reveal it's a trap
      return NextResponse.json({ success: true });
    }

    // Validate required fields with length limits
    if (!body.name || typeof body.name !== "string" || body.name.length > 100) {
      return NextResponse.json(
        { error: "Name is required (max 100 characters)" },
        { status: 400 }
      );
    }

    if (!body.business || typeof body.business !== "string" || body.business.length > 200) {
      return NextResponse.json(
        { error: "Business name is required (max 200 characters)" },
        { status: 400 }
      );
    }

    if (!body.email || typeof body.email !== "string" || body.email.length > 200) {
      return NextResponse.json(
        { error: "Email is required (max 200 characters)" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Optional field length limits
    if (body.phone && (typeof body.phone !== "string" || body.phone.length > 30)) {
      return NextResponse.json(
        { error: "Phone number too long (max 30 characters)" },
        { status: 400 }
      );
    }

    if (body.message && (typeof body.message !== "string" || body.message.length > 2000)) {
      return NextResponse.json(
        { error: "Message too long (max 2000 characters)" },
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
        subject: `New Consultation: ${body.name} — ${body.business}`,
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
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
