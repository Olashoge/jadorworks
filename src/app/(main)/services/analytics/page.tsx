import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PixelJMark } from "@/components/PixelJMark";

export const metadata: Metadata = {
  title:
    "Reporting, Analytics & Business Intelligence | JadorWorks Web Studio",
  description:
    "JadorWorks helps businesses organise data, build reporting systems, and turn information into clear insight — across operations, performance, customers, sales, and digital channels.",
  openGraph: {
    title:
      "Reporting, Analytics & Business Intelligence | JadorWorks Web Studio",
    description:
      "JadorWorks helps businesses organise data, build reporting systems, and turn information into clear insight — across operations, performance, customers, sales, and digital channels.",
    url: "https://jadorworks.com/services/analytics",
    siteName: "JadorWorks Web Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Reporting, Analytics & Business Intelligence — JadorWorks Web Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Reporting, Analytics & Business Intelligence | JadorWorks Web Studio",
    description:
      "JadorWorks helps businesses organise data, build reporting systems, and turn information into clear insight — across operations, performance, customers, sales, and digital channels.",
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
      name: "Reporting, Analytics & Business Intelligence",
      item: "https://jadorworks.com/services/analytics",
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Reporting, Analytics & Business Intelligence",
  provider: {
    "@type": "ProfessionalService",
    name: "JadorWorks Web Studio",
    url: "https://jadorworks.com",
    telephone: "+13177215551",
    email: "hello@jadorworks.com",
  },
  description:
    "JadorWorks helps businesses organise data, build reporting systems, and turn information into clear insight — across operations, performance, customers, sales, and digital channels.",
  serviceType: "Reporting, Analytics & Business Intelligence",
};

const heroCapabilities = [
  "Business data analysis and performance reporting",
  "Custom dashboards and KPI tracking systems",
  "Business intelligence and decision-support analysis",
  "Operational, customer, sales and marketing analysis",
  "Website and digital analytics where relevant",
  "Custom analytics for specific business questions",
];

const serviceCards = [
  {
    title: "Custom Reporting & Dashboards",
    description:
      "Design and build reporting systems that give the business a clear view of performance — on demand, not on request. Dashboards built around the questions the business actually needs to answer.",
    examples: "KPI dashboards \u00B7 executive reporting \u00B7 operational summaries",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-9 h-9">
        <rect x="4" y="4" width="12" height="12" rx="1" />
        <rect x="20" y="4" width="12" height="12" rx="1" />
        <rect x="4" y="20" width="12" height="12" rx="1" />
        <rect x="20" y="20" width="12" height="12" rx="1" />
      </svg>
    ),
  },
  {
    title: "Business Performance Analysis",
    description:
      "Structured analysis of business performance across revenue, operations, customers, or teams. Identify what is driving results, what is creating drag, and where the clearest opportunities sit.",
    examples: "revenue analysis \u00B7 growth tracking \u00B7 variance analysis",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
        <path d="M4 18h4v14H4zM14 10h4v22h-4zM24 14h4v18h-4z" />
        <path d="M2 28c6-8 10-12 16-16s10-6 14-8" />
      </svg>
    ),
  },
  {
    title: "Customer & Sales Analysis",
    description:
      "Understand customer behaviour, sales patterns, conversion flow, and retention dynamics. Build a clearer picture of who buys, when, and why — and where the pipeline loses momentum.",
    examples: "customer segmentation \u00B7 sales funnel \u00B7 retention tracking",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
        <path d="M25 31v-3a5 5 0 0 0-5-5H16a5 5 0 0 0-5 5v3" />
        <circle cx="18" cy="14" r="5" />
        <path d="M31 31v-2a4 4 0 0 0-3-3.87" />
        <path d="M24 9.13a4 4 0 0 1 0 7.75" />
        <path d="M5 31v-2a4 4 0 0 1 3-3.87" />
        <path d="M12 9.13a4 4 0 0 0 0 7.75" />
      </svg>
    ),
  },
  {
    title: "KPI Design & Tracking Systems",
    description:
      "Define the right metrics for the business and build systems to track them consistently. Not every number matters — the work is identifying which ones do and making them visible without manual effort.",
    examples: "metric selection \u00B7 tracking frameworks \u00B7 automated reporting",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-9 h-9">
        <rect x="4" y="4" width="28" height="28" rx="2" />
        <rect x="4" y="14" width="28" height="8" rx="0" />
        <line x1="18" y1="4" x2="18" y2="32" />
      </svg>
    ),
  },
  {
    title: "Operational & Process Analysis",
    description:
      "Analyse how the business operates day to day — where time is being spent, where capacity is being lost, and where process changes would create the most meaningful improvement.",
    examples: "operational efficiency \u00B7 capacity analysis \u00B7 process mapping",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
        <circle cx="18" cy="18" r="14" />
        <polyline points="18 8 18 18 24 24" />
      </svg>
    ),
  },
  {
    title: "Website & Digital Analytics",
    description:
      "When digital performance is part of the picture — website traffic, search visibility, content performance, conversion tracking — this connects the online presence to the business outcomes it is meant to support.",
    examples: "search visibility \u00B7 traffic analysis \u00B7 conversion tracking",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
        <rect x="4" y="8" width="28" height="22" rx="2" />
        <path d="M10 22v-6M16 22v-10M22 22v-4M28 22v-8" />
      </svg>
    ),
  },
];

const fitItems = [
  "Businesses making decisions without clean, reliable reporting to back them up",
  "Teams that track numbers but lack a coherent view of what those numbers mean together",
  "Owners who want better visibility into performance, customers, or operations without hiring a full-time analyst",
  "Businesses preparing for growth that need better operational and financial insight before scaling",
  "Service businesses that want to understand which clients, services, or channels are actually most profitable",
  "Any business that needs a specific analytical question answered and does not have the internal capacity to answer it cleanly",
];

const processSteps = [
  {
    num: "01",
    title: "Discovery & question definition",
    description:
      "Understand the business, the data that exists, and the specific question or visibility gap that needs to be addressed. Good analytics starts with a clear question, not a pile of data.",
  },
  {
    num: "02",
    title: "Scope and approach",
    description:
      "Define what data sources are available, what analysis is needed, and what the output should look like. Agree on the format — dashboard, report, analysis document, or briefing.",
  },
  {
    num: "03",
    title: "Analysis and build",
    description:
      "Perform the analysis, build the reporting system, or design the dashboard. Work is reviewed before final delivery to make sure it answers the original question clearly.",
  },
  {
    num: "04",
    title: "Handoff and ongoing support",
    description:
      "Deliver the output with enough context to use it. Ongoing support, refinement, and expanded analysis available where the relationship continues beyond the initial engagement.",
  },
];

const deliverables = [
  {
    num: "01",
    title: "Performance dashboards",
    description:
      "Built around the metrics that matter most to the business — refreshable, readable, and designed for the people who will actually use them.",
  },
  {
    num: "02",
    title: "Custom analytical reports",
    description:
      "Structured reports that answer a specific business question with evidence — what happened, what drove it, and what the data suggests.",
  },
  {
    num: "03",
    title: "KPI tracking frameworks",
    description:
      "A defined set of the right metrics for the business, with a clear system for tracking them consistently without starting from scratch each time.",
  },
  {
    num: "04",
    title: "Analytical briefings",
    description:
      "For decisions that need data support — a concise, well-structured briefing that frames the situation, the evidence, and the options clearly.",
  },
  {
    num: "05",
    title: "Data models and structures",
    description:
      "When the underlying data needs to be organised better before analysis is possible — clean data models and structures that make future reporting faster and more reliable.",
  },
  {
    num: "06",
    title: "Ongoing reporting support",
    description:
      "For businesses that need analytical support on a recurring basis — regular reporting, monitoring, and insight generation as the business evolves.",
  },
];

const faqs = [
  {
    question: "Is this only for website data?",
    answer:
      "No. Website analytics is one subset of what this service covers. JadorWorks can work with business performance data, sales data, customer data, operational data, financial data, and any other area where the business needs clearer visibility or better analysis. The starting point is always the business question, not the data source.",
  },
  {
    question: "What kind of businesses does this apply to?",
    answer:
      "Any business that generates data and wants to use it better. Local service businesses, small teams, growing operations, businesses preparing for scale — the common thread is having information that is not being used as effectively as it could be. The service is scoped to what is actually useful for each business, not a fixed template applied to everyone.",
  },
  {
    question: "Do I need to have a lot of data for this to be worth it?",
    answer:
      "Not necessarily. Some of the most useful analytical work happens for businesses that do not have enormous data volumes but are making important decisions without adequate visibility. Even a modest amount of well-organised data can produce meaningful insight when the right questions are asked of it.",
  },
  {
    question: "What tools or platforms do you work with?",
    answer:
      "The engagement is tool-agnostic. The focus is on the analysis and the output — what platform or tool makes most sense depends on the business\u2019s current setup, what data exists, and what the output needs to be. This is discussed and agreed during the scoping conversation.",
  },
  {
    question:
      "Can this be an ongoing relationship or is it project-by-project?",
    answer:
      "Both. Some engagements are scoped as one-off analytical projects — answer this question, build this dashboard, produce this report. Others develop into ongoing support relationships where reporting and analysis continue as the business evolves. The structure is defined based on what actually makes sense for the business.",
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

export default function AnalyticsPage() {
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
        <span style={{ opacity: 0.4 }}>&rsaquo;</span>
        <Link href="/services" className="hover:text-navy transition-colors">
          Services
        </Link>
        <span style={{ opacity: 0.4 }}>&rsaquo;</span>
        <span>Reporting, Analytics &amp; Business Intelligence</span>
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
                Reporting, Analytics &amp; Business Intelligence
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <h1
                className="font-extrabold leading-[1.05] tracking-[-0.03em]"
                style={{ fontSize: "clamp(36px, 4.5vw, 58px)" }}
              >
                Turn your business data
                <br />
                into clarity and better
                <br />
                decisions.
              </h1>
            </ScrollReveal>

            <ScrollReveal>
              <p
                className="mt-6 text-[17px] font-light leading-[1.7] max-w-[520px]"
                style={{ color: "rgba(13,27,42,0.45)" }}
              >
                JadorWorks helps businesses organise data, build clearer
                reporting systems, and turn information into useful insight —
                across operations, performance, customer activity, sales, and
                digital channels.
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
                  href="#what-this-includes"
                  className="px-7 py-4 text-sm font-medium text-navy border-[1.5px] hover:border-navy transition-colors"
                  style={{ borderColor: "rgba(13,27,42,0.10)" }}
                >
                  See what this includes &rarr;
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Hero right — capability signals */}
          <ScrollReveal>
            <div
              className="flex flex-col"
              style={{ border: "1px solid rgba(13,27,42,0.10)" }}
            >
              {heroCapabilities.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 px-9 py-5"
                  style={{ borderBottom: "1px solid rgba(13,27,42,0.10)" }}
                >
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "rgba(13,27,42,0.25)" }}
                  />
                  <div
                    className="text-[13px] font-light leading-[1.5]"
                    style={{ color: "rgba(13,27,42,0.68)" }}
                  >
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SECTION 2 — WHAT THIS MEANS (navy background) ===== */}
      <section className="py-20 md:py-[88px] px-6 md:px-14 bg-navy">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div
              className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] uppercase mb-2"
              style={{ color: "rgba(250,249,246,0.45)" }}
            >
              What this actually means
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
              Most businesses have data.
              <br />
              Very few have clarity.
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: "rgba(250,249,246,0.08)" }}>
              <div className="p-8 md:p-9 bg-navy">
                <div
                  className="text-[11px] font-bold tracking-[0.18em] uppercase mb-5"
                  style={{ color: "rgba(250,249,246,0.3)" }}
                >
                  The problem
                </div>
                <p
                  className="text-[14px] font-light leading-[1.75]"
                  style={{ color: "rgba(250,249,246,0.55)" }}
                >
                  Data exists in spreadsheets, systems, reports, and dashboards
                  that were never designed to work together. Decisions get made
                  on gut feeling, incomplete numbers, or reports that take too
                  long to produce and are often wrong by the time they arrive.
                </p>
              </div>
              <div className="p-8 md:p-9 bg-navy">
                <div
                  className="text-[11px] font-bold tracking-[0.18em] uppercase mb-5"
                  style={{ color: "rgba(250,249,246,0.3)" }}
                >
                  What changes
                </div>
                <p
                  className="text-[14px] font-light leading-[1.75]"
                  style={{ color: "rgba(250,249,246,0.55)" }}
                >
                  JadorWorks brings analytical depth to the problem — building
                  reporting systems, dashboards, and analysis frameworks that
                  give businesses real visibility into what is happening, what is
                  working, and what needs attention.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p
              className="mt-10 text-[14px] font-light leading-[1.75] max-w-[720px]"
              style={{ color: "rgba(250,249,246,0.55)" }}
            >
              <strong style={{ color: "#FAF9F6", fontWeight: 700 }}>
                This is not website reporting.
              </strong>{" "}
              This is analytics applied wherever the business needs it —
              operations, customer behaviour, sales performance, financial
              tracking, team activity, digital presence, or any other area where
              better data visibility would lead to better decisions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SECTION 3 — WHAT THIS INCLUDES ===== */}
      <section
        id="what-this-includes"
        className="py-20 md:py-[88px] px-6 md:px-14"
        style={{ borderBottom: "1px solid rgba(13,27,42,0.10)" }}
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div
              className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] uppercase mb-2"
              style={{ color: "rgba(13,27,42,0.45)" }}
            >
              What this includes
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
              Reporting and analytics across
              <br />
              the business — not just the website.
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p
              className="text-base font-light leading-[1.7] max-w-[560px] mb-12"
              style={{ color: "rgba(13,27,42,0.45)" }}
            >
              Six core capability areas. Each one can be scoped as a standalone
              engagement or as part of a broader analytics build.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
              style={{ backgroundColor: "rgba(13,27,42,0.10)" }}
            >
              {serviceCards.map((card) => (
                <div
                  key={card.title}
                  className="p-8 md:p-9 flex flex-col transition-colors hover:bg-[rgba(13,27,42,0.02)]"
                  style={{
                    backgroundColor: "#FAF9F6",
                    border: "1px solid rgba(13,27,42,0.10)",
                  }}
                >
                  <div
                    className="mb-5 text-navy"
                    style={{ opacity: 0.35 }}
                  >
                    {card.icon}
                  </div>
                  <h3 className="text-[17px] font-bold tracking-[-0.01em] text-navy mb-2.5 leading-[1.2]">
                    {card.title}
                  </h3>
                  <p
                    className="text-[13px] font-light leading-[1.7] mb-4 flex-1"
                    style={{ color: "rgba(13,27,42,0.45)" }}
                  >
                    {card.description}
                  </p>
                  <p
                    className="text-[11px] font-medium leading-[1.5]"
                    style={{ color: "rgba(13,27,42,0.35)" }}
                  >
                    {card.examples}
                  </p>
                </div>
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
              Businesses with data
              <br />
              but not enough clarity.
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p
              className="text-base font-light leading-[1.7] max-w-[560px] mb-12"
              style={{ color: "rgba(13,27,42,0.45)" }}
            >
              This service is most useful when the business has information but
              is not using it effectively — or when decisions are being made
              without the right visibility.
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

      {/* ===== SECTION 5 — HOW IT WORKS ===== */}
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
              How it works
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
              A structured analytical engagement,
              <br />
              not an open-ended retainer.
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p
              className="text-base font-light leading-[1.7] max-w-[560px] mb-12"
              style={{ color: "rgba(13,27,42,0.45)" }}
            >
              Every engagement starts with understanding the business question.
              The work is scoped from there — not the other way around.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px"
              style={{ backgroundColor: "rgba(13,27,42,0.10)" }}
            >
              {processSteps.map((step) => (
                <div
                  key={step.num}
                  className="p-8 md:p-9 flex flex-col transition-colors hover:bg-[rgba(13,27,42,0.02)]"
                  style={{
                    backgroundColor: "#FAF9F6",
                    border: "1px solid rgba(13,27,42,0.10)",
                  }}
                >
                  <div
                    className="text-[11px] font-bold tracking-[0.18em] mb-5"
                    style={{ color: "rgba(13,27,42,0.25)" }}
                  >
                    {step.num}
                  </div>
                  <h3 className="text-[15px] font-bold tracking-[-0.01em] text-navy mb-2.5">
                    {step.title}
                  </h3>
                  <p
                    className="text-[13px] font-light leading-[1.7]"
                    style={{ color: "rgba(13,27,42,0.45)" }}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SECTION 6 — WHAT YOU GET (navy background) ===== */}
      <section className="py-20 md:py-[88px] px-6 md:px-14 bg-navy">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div
              className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] uppercase mb-2"
              style={{ color: "rgba(250,249,246,0.45)" }}
            >
              What you get
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
              Decision-ready outputs, not raw data.
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p
              className="text-base font-light leading-[1.7] max-w-[560px]"
              style={{ color: "rgba(250,249,246,0.55)" }}
            >
              The deliverable is always something the business can act on — not
              a spreadsheet that needs interpreting.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div
              className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px"
              style={{ backgroundColor: "rgba(250,249,246,0.08)" }}
            >
              {deliverables.map((item) => (
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

      {/* ===== SECTION 7 — FAQ (stone background) ===== */}
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
                about analytics services.
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

      {/* ===== SECTION 8 — FINAL CTA (navy background) ===== */}
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
              Not sure where to start
              <br />
              with your data?
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p
              className="text-base font-light leading-[1.7] mb-10"
              style={{ color: "rgba(250,249,246,0.55)" }}
            >
              Book a free consultation. We will talk through what data you have,
              what decisions you are trying to make, and what kind of analytical
              support would actually be useful.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <Link
              href="/book"
              className="inline-block px-10 py-[18px] text-sm font-bold tracking-[0.06em] uppercase bg-cream text-navy hover:opacity-[0.88] transition-opacity text-center"
            >
              Book a free consultation &rarr;
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </>
  );
}
