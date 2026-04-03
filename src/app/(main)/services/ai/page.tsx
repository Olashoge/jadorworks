import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PixelJMark } from "@/components/PixelJMark";

export const metadata: Metadata = {
  title: "AI Services for Local Businesses | JadorWorks Web Studio",
  description:
    "JadorWorks builds focused AI assistants for websites, lead handling, customer questions, intake, and operations. Practical AI tools for local service businesses.",
  openGraph: {
    title: "AI Services for Local Businesses | JadorWorks Web Studio",
    description:
      "JadorWorks builds focused AI assistants for websites, lead handling, customer questions, intake, and operations. Practical AI tools for local service businesses.",
    url: "https://jadorworks.com/services/ai",
    siteName: "JadorWorks Web Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Services for Local Businesses — JadorWorks Web Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Services for Local Businesses | JadorWorks Web Studio",
    description:
      "JadorWorks builds focused AI assistants for websites, lead handling, customer questions, intake, and operations. Practical AI tools for local service businesses.",
    images: ["/og-image.png"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://jadorworks.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://jadorworks.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "AI Services",
      item: "https://jadorworks.com/services/ai",
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Services for Local Businesses",
  provider: {
    "@type": "ProfessionalService",
    name: "JadorWorks Web Studio",
    url: "https://jadorworks.com",
    telephone: "+13177215551",
    email: "hello@jadorworks.com",
  },
  description:
    "JadorWorks builds focused AI assistants for websites, lead handling, customer questions, intake, and operations. Practical AI tools for local service businesses.",
  serviceType: "AI Services",
};

const heroStats = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Capture opportunities faster",
    description:
      "AI assistants that respond, qualify, and route visitors around the clock — not just during business hours.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Reduce repetitive admin work",
    description:
      "Handle common questions, collect project information, and draft follow-ups without manual effort every time.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Improve customer response quality",
    description:
      "Better intake, more consistent communication, and stronger first impressions with less manual work.",
  },
];

const whatToolsDo = [
  {
    num: "01",
    title: "Respond faster, miss less",
    description:
      "When someone visits your site at 9pm with a real question, a capable AI assistant can answer it, qualify intent, and keep them moving toward a booking — instead of waiting until morning.",
  },
  {
    num: "02",
    title: "Handle repetitive work automatically",
    description:
      "Common customer questions, intake collection, review responses, and FAQ handling take time every time they happen manually. AI handles the pattern so you can focus on the work that needs you.",
  },
  {
    num: "03",
    title: "Build a more credible first impression",
    description:
      "An AI assistant that is calm, accurate, and useful signals that the business is organised and responsive — before a single human interaction takes place.",
  },
];

const conversionServices = [
  {
    title: "AI Website Assistant",
    tag: "Front-end",
    description:
      "An on-site AI assistant that answers visitor questions, explains services, qualifies intent, and guides people toward booking or the right next page.",
    fit: "Best for: websites, lead capture, visitor qualification",
  },
  {
    title: "AI Lead Qualification Assistant",
    tag: "Front-end",
    description:
      "An AI assistant that asks the right pre-sales questions, filters weak inquiries, and helps serious leads reach the next step faster.",
    fit: "Best for: lead handling, qualification, pre-sales filtering",
  },
  {
    title: "AI After-Hours Lead Responder",
    tag: "Always-on",
    description:
      "An AI assistant that responds when the business is closed, captures lead details, answers first questions, and protects opportunities that would otherwise be missed.",
    fit: "Best for: after-hours coverage, lead capture, missed calls",
  },
  {
    title: "AI Booking Assistant",
    tag: "Front-end",
    description:
      "An AI assistant that helps visitors understand what to book, routes them to the right appointment path, and reduces booking friction.",
    fit: "Best for: reducing booking abandonment, appointment flow",
  },
];

const intakeServices = [
  {
    title: "AI Client Intake Assistant",
    tag: "Operations",
    description:
      "An intake assistant that collects the information needed before work begins, reducing back-and-forth and making kickoff smoother.",
    fit: "Best for: project intake, kickoff prep, client onboarding",
  },
  {
    title: "AI Proposal & Follow-Up Assistant",
    tag: "Sales",
    description:
      "An internal sales assistant that helps draft proposals, summarize discovery calls, and create follow-up messages so sales momentum does not die in admin work.",
    fit: "Best for: proposal drafting, follow-up, sales admin reduction",
  },
];

const visibilityServices = [
  {
    title: "AI FAQ & Customer Questions Assistant",
    tag: "Support",
    description:
      "A customer-facing assistant that handles common questions about services, policies, timing, and next steps without requiring staff involvement every time.",
    fit: "Best for: FAQ handling, customer communication, support reduction",
  },
  {
    title: "AI Review & Reputation Assistant",
    tag: "Trust",
    description:
      "An AI system that helps businesses respond to reviews, manage GBP Q&A, and maintain a stronger, more consistent trust presence online.",
    fit: "Best for: review responses, GBP management, trust building",
  },
];

const fitItems = [
  "Local service businesses that miss leads when the office is closed or staff are in the field",
  "Businesses with repetitive customer questions that take time to answer manually every time",
  "Service providers who want stronger intake and follow-up without more admin overhead",
  "Business owners who want better front-end responsiveness without hiring more staff",
  "Teams that need clearer project information before work begins to reduce back-and-forth",
  "Any business that wants AI embedded into real operations — not a generic chatbot bolted on",
];

const approachTags = [
  "Lead capture",
  "Intake",
  "FAQs",
  "Reviews",
  "Booking",
  "Workflow clarity",
];

const principles = [
  {
    title: "Narrow intelligence beats broad nonsense",
    description:
      "Every assistant is constrained to what it does well. It will not hallucinate, overclaim, or wander off topic.",
  },
  {
    title: "Built around approved content",
    description:
      "Each assistant is grounded in the actual business — its services, its tone, its process. Not a generic template.",
  },
  {
    title: "Premium feel is not optional",
    description:
      "An assistant that feels cheap or robotic undermines the business it represents. Every assistant is designed to feel calm, useful, and on-brand.",
  },
  {
    title: "Handoff is the goal",
    description:
      "The assistant's job is to move qualified visitors toward the right next step — not keep them in chat. Conversion clarity over conversation volume.",
  },
];

const packages = [
  {
    name: "AI Starter",
    description: "One focused AI tool solving one clear business problem.",
    includes: [
      "One AI assistant",
      "Business-specific setup and configuration",
      "Core prompt and logic design",
      "Brand-aligned responses",
      "Launch support",
    ],
    best: "Website assistant · FAQ assistant · Booking assistant",
    accent: false,
  },
  {
    name: "AI Growth",
    description:
      "AI tied more directly to lead handling and operational flow.",
    includes: [
      "One primary assistant",
      "One supporting workflow",
      "Deeper qualification logic",
      "Stronger routing and handoff behaviour",
      "Ongoing refinement",
    ],
    best: "Lead qualification · Intake · After-hours response · Review support",
    accent: true,
  },
  {
    name: "AI System",
    description:
      "Multiple AI layers working together across conversion, intake, and operations.",
    includes: [
      "Multiple assistants",
      "Cross-workflow design",
      "Deeper business logic",
      "Internal process support",
      "Ongoing optimisation and expansion",
    ],
    best: "Service businesses with staff · Higher lead volume · AI across multiple stages",
    accent: false,
  },
];

const useCases = [
  "Answer website questions and guide visitors toward booking — without staff involvement every time",
  "Respond to after-hours leads instead of losing them to a competitor who replied first",
  "Collect cleaner project information before kickoff so the first conversation is productive, not preparatory",
  "Handle common customer questions consistently without a staff member spending 10 minutes on the same answer each time",
  "Draft professional review responses that match the business tone without starting from scratch every time",
  "Qualify leads before they reach the sales conversation — so time is spent on serious enquiries, not tyre-kickers",
];

const faqs = [
  {
    question: "Does my business actually need AI?",
    answer:
      "Not every business does. AI tools make the most sense where there is a specific repeating friction — missed leads, common questions, slow intake, manual follow-up. If the problem is real and recurring, an AI tool can help. A consultation will tell you whether it is worth it for your situation.",
  },
  {
    question: "Can this work with my current website?",
    answer:
      "In most cases, yes. AI website assistants and booking assistants can be added to an existing site without a full rebuild. Some integrations work better with the JadorWorks website infrastructure, but the starting conversation is always what you currently have and what you are trying to improve.",
  },
  {
    question: "Is this only for certain types of businesses?",
    answer:
      "No. The six public AI offers work for any local service business — HVAC, cleaning, landscaping, home care, remodeling, personal services, trades, and others. The setup is specific to the business, not a generic template applied to every client.",
  },
  {
    question: "Can the assistant match my business tone?",
    answer:
      "Yes. Each assistant is configured around the business — its services, its language, and the tone it wants to present. A warm, personal tone for a home care business will feel different from a direct, practical tone for a trades business.",
  },
  {
    question: "What happens after setup?",
    answer:
      "After launch, the assistant is monitored for quality and accuracy. Responses can be refined over time based on real visitor interactions. Ongoing support and optimisation is available as part of the AI Growth and AI System packages.",
  },
  {
    question: "Can this later connect to other systems?",
    answer:
      "Yes. V1 tools are standalone. Future expansion can include CRM integration, lead tagging, HubSpot connection, and multi-assistant workflows as the business grows. The tools are designed to expand without requiring a full rebuild.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

function ServiceCard({
  title,
  tag,
  description,
  fit,
}: {
  title: string;
  tag: string;
  description: string;
  fit: string;
}) {
  return (
    <div
      className="p-8 md:p-9 flex flex-col transition-colors hover:bg-[rgba(13,27,42,0.02)]"
      style={{
        backgroundColor: "#FAF9F6",
        border: "1px solid rgba(13,27,42,0.10)",
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <span
          className="text-[9px] font-bold tracking-[0.16em] uppercase px-2.5 py-1"
          style={{
            color: "rgba(13,27,42,0.45)",
            border: "1px solid rgba(13,27,42,0.10)",
          }}
        >
          {tag}
        </span>
      </div>
      <h3 className="text-[17px] font-bold tracking-[-0.01em] text-navy mb-2.5 leading-[1.2]">
        {title}
      </h3>
      <p
        className="text-[13px] font-light leading-[1.7] mb-4 flex-1"
        style={{ color: "rgba(13,27,42,0.45)" }}
      >
        {description}
      </p>
      <p
        className="text-[11px] font-medium leading-[1.5] mb-5"
        style={{ color: "rgba(13,27,42,0.35)" }}
      >
        {fit}
      </p>
      <Link
        href="/book"
        className="flex items-center gap-1.5 text-[12px] font-bold tracking-[0.08em] uppercase text-navy hover:gap-2.5 transition-all"
      >
        Ask about this <span>→</span>
      </Link>
    </div>
  );
}

export default function AIServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ===== BREADCRUMB ===== */}
      <div
        className="px-6 md:px-14 pb-3.5 flex items-center gap-2 text-xs"
        style={{
          paddingTop: 86,
          backgroundColor: "#EDEAE4",
          borderBottom: "1px solid rgba(13,27,42,0.10)",
          color: "rgba(13,27,42,0.45)",
        }}
      >
        <Link href="/" className="hover:text-navy transition-colors">
          Home
        </Link>
        <span style={{ opacity: 0.4 }}>›</span>
        <Link href="/services" className="hover:text-navy transition-colors">
          Services
        </Link>
        <span style={{ opacity: 0.4 }}>›</span>
        <span>AI Services</span>
      </div>

      {/* ===== SECTION 1 — HERO ===== */}
      <section
        className="py-20 px-6 md:px-14"
        style={{ borderBottom: "1px solid rgba(13,27,42,0.10)" }}
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_400px] gap-16 lg:gap-20 items-center">
          {/* Hero left */}
          <div>
            <ScrollReveal>
              <div
                className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] uppercase mb-5"
                style={{ color: "rgba(13,27,42,0.45)" }}
              >
                <span
                  className="w-6 h-[1.5px] flex-shrink-0"
                  style={{ backgroundColor: "rgba(13,27,42,0.45)" }}
                />
                AI Services · JadorWorks Web Studio
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <h1
                className="font-extrabold leading-[1.05] tracking-[-0.03em]"
                style={{ fontSize: "clamp(36px, 4.5vw, 58px)" }}
              >
                Practical AI tools
                <br />
                for real business work.
              </h1>
            </ScrollReveal>

            <ScrollReveal>
              <p
                className="mt-6 text-[17px] font-light leading-[1.7] max-w-[520px]"
                style={{ color: "rgba(13,27,42,0.45)" }}
              >
                JadorWorks builds focused AI assistants for websites, lead
                handling, customer questions, intake, and business operations —
                designed to be useful now, not theoretical later.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="mt-10 flex flex-wrap gap-3.5">
                <Link
                  href="/book"
                  className="px-8 py-4 text-sm font-bold tracking-[0.04em] uppercase bg-navy text-cream border-none hover:opacity-[0.82] transition-opacity"
                >
                  Book a Consultation
                </Link>
                <Link
                  href="#ai-services"
                  className="px-7 py-4 text-sm font-medium text-navy border-[1.5px] hover:border-navy transition-colors"
                  style={{ borderColor: "rgba(13,27,42,0.10)" }}
                >
                  Explore AI Services →
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Hero right — stat cards */}
          <ScrollReveal>
            <div
              className="flex flex-col"
              style={{ border: "1px solid rgba(13,27,42,0.10)" }}
            >
              {heroStats.map((stat) => (
                <div
                  key={stat.title}
                  className="flex items-start gap-4 px-9 py-6"
                  style={{ borderBottom: "1px solid rgba(13,27,42,0.10)" }}
                >
                  <div
                    className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-navy"
                    style={{ border: "1.5px solid rgba(13,27,42,0.10)" }}
                  >
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-navy mb-0.5">
                      {stat.title}
                    </div>
                    <div
                      className="text-xs font-light leading-[1.5]"
                      style={{ color: "rgba(13,27,42,0.45)" }}
                    >
                      {stat.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SECTION 2 — WHAT THESE TOOLS DO (navy background) ===== */}
      <section className="py-20 md:py-[88px] px-6 md:px-14 bg-navy">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div
              className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] uppercase mb-2"
              style={{ color: "rgba(250,249,246,0.45)" }}
            >
              What these AI tools actually do
              <span
                className="h-px flex-1 max-w-[56px]"
                style={{ backgroundColor: "rgba(250,249,246,0.15)" }}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2
              className="font-extrabold leading-[1.05] tracking-[-0.03em] mb-3.5"
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                color: "#FAF9F6",
              }}
            >
              Built around real business friction.
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p
              className="text-base font-light leading-[1.7] max-w-[560px]"
              style={{ color: "rgba(250,249,246,0.55)" }}
            >
              Not a generic chatbot. Not an AI experiment. Each tool is designed
              around a specific problem that costs local service businesses time,
              leads, or credibility.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(250,249,246,0.08)" }}>
              {whatToolsDo.map((item) => (
                <div
                  key={item.num}
                  className="p-8 md:p-9 bg-navy"
                >
                  <div
                    className="text-[11px] font-bold tracking-[0.18em] mb-5"
                    style={{ color: "rgba(250,249,246,0.3)" }}
                  >
                    {item.num}
                  </div>
                  <h3
                    className="text-[15px] font-bold tracking-[-0.01em] mb-2.5"
                    style={{ color: "#FAF9F6" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[13px] font-light leading-[1.7]"
                    style={{ color: "rgba(250,249,246,0.55)" }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SECTION 3 — SERVICE MENU ===== */}
      <section
        id="ai-services"
        className="py-20 md:py-[88px] px-6 md:px-14"
        style={{ borderBottom: "1px solid rgba(13,27,42,0.10)" }}
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div
              className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] uppercase mb-2"
              style={{ color: "rgba(13,27,42,0.45)" }}
            >
              AI service menu
              <span
                className="h-px flex-1 max-w-[56px]"
                style={{ backgroundColor: "rgba(13,27,42,0.10)" }}
              />
            </div>
          </ScrollReveal>

          {/* Category A — Conversion & Lead Capture */}
          <ScrollReveal>
            <h3
              className="text-[11px] font-bold tracking-[0.18em] uppercase mt-12 mb-6"
              style={{ color: "rgba(13,27,42,0.42)" }}
            >
              Conversion & Lead Capture
            </h3>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: "rgba(13,27,42,0.10)" }}>
              {conversionServices.map((svc) => (
                <ServiceCard key={svc.title} {...svc} />
              ))}
            </div>
          </ScrollReveal>

          {/* Category B — Intake & Operations */}
          <ScrollReveal>
            <h3
              className="text-[11px] font-bold tracking-[0.18em] uppercase mt-12 mb-6"
              style={{ color: "rgba(13,27,42,0.42)" }}
            >
              Intake & Operations
            </h3>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: "rgba(13,27,42,0.10)" }}>
              {intakeServices.map((svc) => (
                <ServiceCard key={svc.title} {...svc} />
              ))}
            </div>
          </ScrollReveal>

          {/* Category C — Visibility & Support */}
          <ScrollReveal>
            <h3
              className="text-[11px] font-bold tracking-[0.18em] uppercase mt-12 mb-6"
              style={{ color: "rgba(13,27,42,0.42)" }}
            >
              Visibility & Support
            </h3>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: "rgba(13,27,42,0.10)" }}>
              {visibilityServices.map((svc) => (
                <ServiceCard key={svc.title} {...svc} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SECTION 4 — WHO THIS IS FOR (stone background) ===== */}
      <section
        className="py-20 md:py-[88px] px-6 md:px-14"
        style={{
          backgroundColor: "#EDEAE4",
          borderBottom: "1px solid rgba(13,27,42,0.10)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div
              className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] uppercase mb-2"
              style={{ color: "rgba(13,27,42,0.45)" }}
            >
              Who this is for
              <span
                className="h-px flex-1 max-w-[56px]"
                style={{ backgroundColor: "rgba(13,27,42,0.10)" }}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2
              className="font-extrabold leading-[1.05] tracking-[-0.03em] mb-3.5"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
            >
              Built for local service businesses
              <br />
              that want to operate with more clarity.
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p
              className="text-base font-light leading-[1.7] max-w-[560px] mb-12"
              style={{ color: "rgba(13,27,42,0.45)" }}
            >
              Not every business needs AI. These tools are built for specific
              situations where the friction is real and the fix is practical.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {fitItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-6"
                  style={{
                    backgroundColor: "#FAF9F6",
                    border: "1px solid rgba(13,27,42,0.10)",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0D1B2A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <p
                    className="text-[14px] font-light leading-[1.65]"
                    style={{ color: "rgba(13,27,42,0.68)" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SECTION 5 — APPROACH ===== */}
      <section
        className="py-20 md:py-[88px] px-6 md:px-14"
        style={{ borderBottom: "1px solid rgba(13,27,42,0.10)" }}
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div
              className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] uppercase mb-2"
              style={{ color: "rgba(13,27,42,0.45)" }}
            >
              How JadorWorks approaches AI
              <span
                className="h-px flex-1 max-w-[56px]"
                style={{ backgroundColor: "rgba(13,27,42,0.10)" }}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2
              className="font-extrabold leading-[1.05] tracking-[-0.03em] mb-3.5"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
            >
              Focused assistants built around
              <br />
              real friction. Not generic bots.
            </h2>
          </ScrollReveal>

          <div className="mt-8 grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            <div>
              <ScrollReveal>
                <p
                  className="text-[15px] font-light leading-[1.75] mb-5"
                  style={{ color: "rgba(13,27,42,0.45)" }}
                >
                  JadorWorks does not sell off-the-shelf AI products. Every
                  assistant is designed around a specific friction point in the
                  business — a moment where time is being lost, a lead is being
                  missed, or a process is creating unnecessary manual work.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <p
                  className="text-[15px] font-light leading-[1.75] mb-8"
                  style={{ color: "rgba(13,27,42,0.45)" }}
                >
                  The tools are narrow by design. A focused assistant that does
                  one thing well is more useful — and more trustworthy — than a
                  broad assistant that can do anything vaguely.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <div className="flex flex-wrap gap-2">
                  {approachTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold tracking-[0.06em] uppercase px-4 py-2"
                      style={{
                        color: "rgba(13,27,42,0.45)",
                        backgroundColor: "#EDEAE4",
                        border: "1px solid rgba(13,27,42,0.10)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <div className="flex flex-col" style={{ gap: "1px" }}>
              {principles.map((principle, i) => (
                <ScrollReveal key={i}>
                  <div
                    className="flex gap-5 items-start p-8 md:px-9 md:py-8 transition-all duration-200 hover:translate-x-1"
                    style={{
                      backgroundColor: "#FAF9F6",
                      border: "1px solid rgba(13,27,42,0.10)",
                    }}
                  >
                    <div
                      className="text-[11px] font-extrabold tracking-[0.1em] flex-shrink-0 w-7 mt-0.5"
                      style={{ color: "rgba(13,27,42,0.42)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="text-[15px] font-bold tracking-[-0.01em] text-navy mb-1.5">
                        {principle.title}
                      </h3>
                      <p
                        className="text-[13px] font-light leading-[1.7]"
                        style={{ color: "rgba(13,27,42,0.45)" }}
                      >
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6 — PACKAGES (navy background) ===== */}
      <section className="py-20 md:py-[88px] px-6 md:px-14 bg-navy">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div
              className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] uppercase mb-2"
              style={{ color: "rgba(250,249,246,0.45)" }}
            >
              Packages
              <span
                className="h-px flex-1 max-w-[56px]"
                style={{ backgroundColor: "rgba(250,249,246,0.15)" }}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2
              className="font-extrabold leading-[1.05] tracking-[-0.03em] mb-3.5"
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                color: "#FAF9F6",
              }}
            >
              Three ways to start.
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p
              className="text-base font-light leading-[1.7] max-w-[560px]"
              style={{ color: "rgba(250,249,246,0.55)" }}
            >
              Pricing depends on scope, business needs, and which assistant is
              the right starting point. A consultation is the clearest path to a
              recommendation.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(250,249,246,0.08)" }}>
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="p-8 md:p-9 flex flex-col"
                  style={{
                    backgroundColor: pkg.accent
                      ? "rgba(250,249,246,0.08)"
                      : "rgba(250,249,246,0.03)",
                    border: pkg.accent
                      ? "1px solid rgba(250,249,246,0.15)"
                      : "1px solid rgba(250,249,246,0.06)",
                  }}
                >
                  <h3
                    className="text-[20px] font-extrabold tracking-[-0.02em] mb-2"
                    style={{ color: "#FAF9F6" }}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className="text-[14px] font-light leading-[1.65] mb-6"
                    style={{ color: "rgba(250,249,246,0.55)" }}
                  >
                    {pkg.description}
                  </p>

                  <div
                    className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-3"
                    style={{ color: "rgba(250,249,246,0.35)" }}
                  >
                    Includes
                  </div>
                  <ul className="space-y-2 mb-6 flex-1">
                    {pkg.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[13px] font-light leading-[1.5]"
                        style={{ color: "rgba(250,249,246,0.65)" }}
                      >
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                          style={{ color: "rgba(250,249,246,0.35)" }}
                        >
                          <polyline points="3 8 6.5 11.5 13 5" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div
                    className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-2"
                    style={{ color: "rgba(250,249,246,0.35)" }}
                  >
                    Best for
                  </div>
                  <p
                    className="text-[12px] font-light leading-[1.6] mb-6"
                    style={{ color: "rgba(250,249,246,0.45)" }}
                  >
                    {pkg.best}
                  </p>

                  <div
                    className="mt-auto pt-5 text-[11px] font-light"
                    style={{
                      color: "rgba(250,249,246,0.3)",
                      borderTop: "1px solid rgba(250,249,246,0.08)",
                    }}
                  >
                    Pricing based on scope and business needs
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SECTION 7 — USE CASES ===== */}
      <section
        className="py-20 md:py-[88px] px-6 md:px-14"
        style={{ borderBottom: "1px solid rgba(13,27,42,0.10)" }}
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div
              className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] uppercase mb-2"
              style={{ color: "rgba(13,27,42,0.45)" }}
            >
              Example use cases
              <span
                className="h-px flex-1 max-w-[56px]"
                style={{ backgroundColor: "rgba(13,27,42,0.10)" }}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2
              className="font-extrabold leading-[1.05] tracking-[-0.03em] mb-12"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
            >
              What these tools help businesses do.
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div
              className="grid grid-cols-1 md:grid-cols-2"
              style={{
                gap: "2px",
                backgroundColor: "rgba(13,27,42,0.10)",
                border: "1px solid rgba(13,27,42,0.10)",
              }}
            >
              {useCases.map((useCase, i) => (
                <div
                  key={i}
                  className="p-9 md:p-10 transition-colors hover:bg-[rgba(13,27,42,0.03)]"
                  style={{ backgroundColor: "#FAF9F6" }}
                >
                  <div
                    className="text-[28px] font-serif leading-none mb-3"
                    style={{ color: "rgba(13,27,42,0.12)" }}
                  >
                    &ldquo;
                  </div>
                  <p
                    className="text-[14px] font-light leading-[1.7]"
                    style={{ color: "rgba(13,27,42,0.68)" }}
                  >
                    {useCase}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SECTION 8 — FAQ (stone background) ===== */}
      <section
        className="py-20 md:py-[88px] px-6 md:px-14"
        style={{
          backgroundColor: "#EDEAE4",
          borderBottom: "1px solid rgba(13,27,42,0.10)",
        }}
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[300px_1fr] gap-16 lg:gap-20 items-start">
          {/* Left column */}
          <div className="pt-2">
            <ScrollReveal>
              <div
                className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] uppercase mb-2"
                style={{ color: "rgba(13,27,42,0.45)" }}
              >
                Questions
                <span
                  className="h-px flex-1 max-w-[56px]"
                  style={{ backgroundColor: "rgba(13,27,42,0.10)" }}
                />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <h2
                className="font-extrabold leading-[1.05] tracking-[-0.03em]"
                style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
              >
                Common questions
                <br />
                about AI services.
              </h2>
            </ScrollReveal>
          </div>

          {/* Right column — FAQ items */}
          <div className="flex flex-col" style={{ gap: "1px" }}>
            {faqs.map((faq, i) => (
              <ScrollReveal key={i}>
                <div
                  className="p-8 md:p-9 transition-colors hover:bg-[rgba(13,27,42,0.03)]"
                  style={{
                    backgroundColor: "#FAF9F6",
                    border: "1px solid rgba(13,27,42,0.10)",
                  }}
                >
                  <h3 className="text-[15px] font-bold tracking-[-0.01em] text-navy mb-3 leading-[1.3]">
                    {faq.question}
                  </h3>
                  <p
                    className="text-[13px] font-light leading-[1.75]"
                    style={{ color: "rgba(13,27,42,0.45)" }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 9 — FINAL CTA (navy background) ===== */}
      <div className="py-20 md:py-[88px] px-6 md:px-14 bg-navy">
        <div className="max-w-[680px] mx-auto text-center">
          <ScrollReveal>
            <div
              className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-5"
              style={{ color: "rgba(250,249,246,0.3)" }}
            >
              Get started
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2
              className="font-extrabold tracking-[-0.03em] leading-[1.05] mb-4"
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                color: "#FAF9F6",
              }}
            >
              Not sure which AI tool
              <br />
              fits your business?
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p
              className="text-base font-light leading-[1.7] mb-10"
              style={{ color: "rgba(250,249,246,0.55)" }}
            >
              Book a free consultation and we will help you identify the right
              starting point — based on your actual business, not a generic
              recommendation.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <Link
              href="/book"
              className="inline-block px-10 py-[18px] text-sm font-bold tracking-[0.06em] uppercase bg-cream text-navy hover:opacity-[0.88] transition-opacity text-center"
            >
              Book a free consultation →
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </>
  );
}
