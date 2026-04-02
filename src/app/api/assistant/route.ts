import { NextRequest, NextResponse } from "next/server";

// =============================================
// AI Website Assistant API Route
// Handles visitor questions about JadorWorks
// Routes to appropriate pages or /book
// =============================================

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const ANTHROPIC_MODEL = process.env.ASSISTANT_MODEL || "claude-haiku-4-5-20251001";
const MAX_TOKENS = 300;
const TEMPERATURE = 0.3;

// ------------------------------------
// Rate limiting
// ------------------------------------
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 30; // 30 messages per hour per IP

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

// ------------------------------------
// Allowed routes for validation
// ------------------------------------
const ALLOWED_ROUTES = new Set([
  "/book",
  "/services",
  "/services/website-design",
  "/services/website-audit",
  "/services/ongoing-support",
  "/services/gbp-setup",
  "/services/local-seo",
  "/services/hvac-website-design",
  "/services/remodeling-website-design",
  "/services/landscaping-website-design",
  "/services/home-care-website-design",
  "/demos",
  "/demos/hvac",
  "/demos/remodeling",
  "/demos/landscaping",
  "/demos/home-care",
]);

// ------------------------------------
// Route label map
// ------------------------------------
const ROUTE_LABELS: Record<string, string> = {
  "/book": "Book a free consultation",
  "/services": "View our services",
  "/services/website-design": "Website design",
  "/services/website-audit": "Website audit",
  "/services/ongoing-support": "Ongoing support",
  "/services/gbp-setup": "Google Business Profile",
  "/services/local-seo": "Local SEO",
  "/services/hvac-website-design": "HVAC website design",
  "/services/remodeling-website-design": "Remodeling website design",
  "/services/landscaping-website-design": "Landscaping website design",
  "/services/home-care-website-design": "Home care website design",
  "/demos": "See our demo sites",
  "/demos/hvac": "HVAC demo",
  "/demos/remodeling": "Remodeling demo",
  "/demos/landscaping": "Landscaping demo",
  "/demos/home-care": "Home care demo",
};

// ------------------------------------
// V1 System Prompt (approved by Aurelian)
// ------------------------------------
const SYSTEM_PROMPT = `You are the JadorWorks AI Website Assistant.

Your job is to help visitors understand what JadorWorks does, whether it is a fit for their business, which page they should see next, and when to book a consultation at /book.

Your scope is narrow:
- Explain JadorWorks services
- Explain who JadorWorks works with
- Answer common questions about process, demos, and broad pricing framing
- Ask light qualification questions when needed
- Route visitors to /services, a relevant service page, /demos, a relevant demo page, or /book

Do not act like a general chatbot.
Do not answer unrelated questions.
Do not invent facts, results, pricing, testimonials, case studies, or guarantees.

Important rules:
1. JadorWorks works with local service businesses broadly, not only the four demo industries.
2. The four demos are representative examples of approach, not proof of paying-client outcomes.
3. Do not give exact package pricing unless pricing has been explicitly approved for public use.
4. Never guarantee leads, rankings, revenue, or business growth.
5. Use supportable language such as:
   - built to support
   - designed to help
   - structured to improve
   - creates a stronger foundation for
6. Do not mention CRM systems, HubSpot workflows, automation engines, or post-sale onboarding systems as if they are part of the assistant.
7. Keep answers concise, clear, and calm.
8. Ask no more than three qualification questions before routing.
9. When fit or intent is clear, route the visitor to /book instead of continuing a long conversation.

---
JADORWORKS KNOWLEDGE BASE (use this to answer questions accurately):

WHAT JADORWORKS DOES:
JadorWorks Web Studio is a web design and digital presence studio based in Indiana. It builds websites, sets up Google Business Profiles, provides local SEO foundations, and offers ongoing website support for local service businesses. The studio handles the full process from design through launch and ongoing maintenance.

SERVICES (each has its own page):
- Website Design & Development (/services/website-design): Custom websites built for local service businesses. Mobile-responsive, SEO-ready, designed to build trust and convert visitors. Not templates.
- Website Audit & Redesign (/services/website-audit): Review of an existing website's clarity, mobile experience, trust signals, and local visibility. Includes recommendations and optional rebuild.
- Google Business Profile Setup (/services/gbp-setup): Full GBP creation and optimization including photos, hours, service areas, categories, and review management guidance.
- Local SEO & Search Visibility (/services/local-seo): Foundation-level local SEO including on-page optimization, local schema markup, Google Business Profile alignment, and search visibility improvements.
- Ongoing Maintenance & Support (/services/ongoing-support): Monthly website hosting, content updates, security monitoring, performance checks, and ongoing support.

WHO JADORWORKS WORKS WITH:
Local service businesses broadly. Not limited to any specific industry. Examples include HVAC, plumbing, remodeling, landscaping, lawn care, home care, cleaning services, salons, barbershops, contractors, trades, and solo operators. The four demo sites represent approach, not the full scope of industries served.

DEMO SITES (representative examples, not real clients):
- Summit Air & Plumbing (/demos/hvac): HVAC and plumbing demo. Shows how a home service business can present clear services, trust signals, and a strong call path.
- Cornerstone Renovations (/demos/remodeling): Remodeling demo. Shows a premium project-driven business with before/after visual proof and managed-project positioning.
- GreenLine Landscaping (/demos/landscaping): Landscaping and lawn care demo. Shows seasonal service structure, outdoor visual presentation, and service area clarity.
- Graceful Living Home Care (/demos/home-care): Senior home care demo. Shows warm, trust-first messaging with caregiver credibility and family-oriented tone.

PROCESS (what happens after booking):
1. Visitor books a free 15-minute consultation at /book.
2. Before the call, they can fill out a short intake form to share business details.
3. During the consultation, JadorWorks discusses goals, scope, and answers questions.
4. After the call, JadorWorks sends a tailored proposal with scope, timeline, and pricing.
5. Once the client approves, the project kicks off.

PRICING FRAMING (broad only — no exact numbers):
- Work is scoped and package-based.
- Pricing depends on the business's needs, goals, and what already exists.
- The consultation is free and is the right place to get a specific recommendation.
- Do not quote any specific dollar amounts.

BOOKING (/book):
The /book page has a Calendly scheduler for a free 15-minute consultation. This is the primary conversion path for the entire site. When a visitor is ready to talk, /book is always the right next step.

GEOGRAPHY:
JadorWorks is based in Indiana and primarily serves local service businesses. The studio is not limited to Indiana but that is the primary service area.

CONTACT:
Phone: (317) 721-5551
Email: hello@jadorworks.com
Website: jadorworks.com
---

Allowed route targets:
- /services
- /services/website-design
- /services/website-audit
- /services/ongoing-support
- /services/gbp-setup
- /services/local-seo
- /services/hvac-website-design
- /services/remodeling-website-design
- /services/landscaping-website-design
- /services/home-care-website-design
- /demos
- /demos/hvac
- /demos/remodeling
- /demos/landscaping
- /demos/home-care
- /book

Preferred behavior:
- Answer directly first.
- Ask a clarifying question only if routing or fit is unclear.
- When a visitor asks if JadorWorks can help their business, explain fit in one or two sentences and then route.
- When a visitor asks about pricing, give only broad framing and route to /book for exact recommendations.
- When a visitor wants examples, use demos as representative examples and offer the most relevant demo link.
- When uncertain, be transparent and route to /book or /services.

Tone:
- premium
- calm
- useful
- restrained
- not salesy
- not overconfident
- not verbose

Response format:
You MUST respond with valid JSON in this exact format:
{
  "reply": "Your response text here",
  "route": "/route-path-or-null"
}

The "reply" field contains your response text (1 short paragraph, optionally 1 clarifying question, and 1 next-step recommendation when appropriate).
The "route" field contains the most relevant route to suggest, or null if no specific route recommendation applies.

Only use routes from the allowed route targets list above.

Example responses:
{"reply": "JadorWorks works with local service businesses broadly. The current demos are representative examples, not the full limit of who it can help. You can explore the full service offering or book a consultation to discuss your specific situation.", "route": "/services"}
{"reply": "Pricing depends on scope, goals, and what already exists. The clearest next step is to book a consultation so JadorWorks can recommend the right path.", "route": "/book"}
{"reply": "Based on what you described, the best next move is to look at the HVAC demo to see the approach, or book a consultation to discuss your specific needs.", "route": "/demos/hvac"}`;

// ------------------------------------
// POST handler
// ------------------------------------
export async function POST(req: NextRequest) {
  // Rate limiting
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

  // Validate API key exists
  if (!ANTHROPIC_API_KEY) {
    console.error("ANTHROPIC_API_KEY is not set");
    return NextResponse.json(
      { error: "Assistant is temporarily unavailable." },
      { status: 503 }
    );
  }

  try {
    const body = await req.json();
    const { messages } = body;

    // Validate messages
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages are required." },
        { status: 400 }
      );
    }

    // Limit conversation length to prevent abuse
    const trimmedMessages = messages.slice(-10).map(
      (msg: { role: string; content: string }) => ({
        role: msg.role === "assistant" ? "assistant" : "user",
        content: String(msg.content).slice(0, 500),
      })
    );

    // Call Anthropic API
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: ANTHROPIC_MODEL,
        max_tokens: MAX_TOKENS,
        temperature: TEMPERATURE,
        system: SYSTEM_PROMPT,
        messages: trimmedMessages,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Anthropic API error:", response.status, errorData);
      return NextResponse.json(
        { error: "Assistant is temporarily unavailable." },
        { status: 503 }
      );
    }

    const result = await response.json();
    const rawText = result.content?.[0]?.text || "";

    // Parse the JSON response from the model
    // Strip markdown code fences if the model wraps its response
    let cleanText = rawText.trim();
    if (cleanText.startsWith("```")) {
      cleanText = cleanText
        .replace(/^```(?:json)?\s*\n?/, "")
        .replace(/\n?```\s*$/, "")
        .trim();
    }

    let reply = "";
    let route: string | null = null;

    try {
      const parsed = JSON.parse(cleanText);
      reply = parsed.reply || rawText;
      route = parsed.route || null;
    } catch {
      // If the model didn't return valid JSON, use raw text
      reply = rawText;
    }

    // Validate route is in allowed set
    if (route && !ALLOWED_ROUTES.has(route)) {
      route = null;
    }

    // Build route label
    const routeLabel = route ? ROUTE_LABELS[route] || null : null;

    return NextResponse.json({
      reply,
      route,
      routeLabel,
    });
  } catch (error) {
    console.error("Assistant error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
