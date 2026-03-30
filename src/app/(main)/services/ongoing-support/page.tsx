import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title:
    "Website Maintenance & Ongoing Support for Indiana Small Businesses | JadorWorks Web Studio",
  description:
    "Monthly care plans for Indiana small business websites — hosting, content updates, Google Business Profile management, uptime monitoring, and priority support. JadorWorks Web Studio.",
  openGraph: {
    title:
      "Website Maintenance & Ongoing Support for Indiana Small Businesses | JadorWorks Web Studio",
    description:
      "Monthly care plans for Indiana small business websites — hosting, content updates, Google Business Profile management, uptime monitoring, and priority support.",
    url: "https://jadorworks.com/services/ongoing-support",
    siteName: "JadorWorks Web Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ongoing Maintenance & Support for Indiana Small Businesses — JadorWorks Web Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Website Maintenance & Ongoing Support for Indiana Small Businesses | JadorWorks Web Studio",
    description:
      "Monthly care plans for Indiana small business websites — hosting, content updates, Google Business Profile management, uptime monitoring, and priority support.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ongoing Maintenance & Support",
  provider: {
    "@type": "ProfessionalService",
    name: "JadorWorks Web Studio",
    url: "https://jadorworks.com",
    telephone: "+13177215551",
    email: "hello@jadorworks.com",
  },
  description:
    "Monthly care plans for Indiana small business websites — hosting, content updates, Google Business Profile management, uptime monitoring, and priority support.",
  areaServed: {
    "@type": "State",
    name: "Indiana",
  },
  serviceType: "Website Maintenance & Support",
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
      name: "Ongoing Maintenance & Support",
      item: "https://jadorworks.com/services/ongoing-support",
    },
  ],
};

const planItems = [
  {
    label: "Hosting & uptime",
    note: "Fast, reliable hosting with uptime monitoring.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="rgba(250,249,246,0.6)" strokeWidth="1.5" strokeLinecap="round" className="w-3.5 h-3.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: "Content updates",
    note: "Service changes, hours, staff, new photos — handled for you.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="rgba(250,249,246,0.6)" strokeWidth="1.5" strokeLinecap="round" className="w-3.5 h-3.5">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
  {
    label: "GBP management",
    note: "Your Google Business Profile kept current and monitored.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="rgba(250,249,246,0.6)" strokeWidth="1.5" strokeLinecap="round" className="w-3.5 h-3.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2s-4 4-4 10 4 10 4 10M12 2s4 4 4 10-4 10-4 10M2 12h20" />
      </svg>
    ),
  },
  {
    label: "Performance checks",
    note: "Regular checks to catch issues before they affect visitors.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="rgba(250,249,246,0.6)" strokeWidth="1.5" strokeLinecap="round" className="w-3.5 h-3.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    label: "Priority support",
    note: "Something breaks — you reach out, we respond first.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="rgba(250,249,246,0.6)" strokeWidth="1.5" strokeLinecap="round" className="w-3.5 h-3.5">
        <path d="M4 4h16v12H5.17L4 17.17V4z" />
        <path d="M8 9h8M8 13h4" />
      </svg>
    ),
  },
];

const included = [
  {
    num: "01",
    title: "Hosting & Uptime Monitoring",
    description:
      "Your site lives on fast, reliable infrastructure. We monitor uptime continuously — if something goes down, we catch it and fix it before your customers notice.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-9 h-9">
        <path d="M18 4l2 6h7l-5.5 4 2 6L18 17l-5.5 3.5 2-6L9 10h7z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Content Updates",
    description:
      "Services change. Staff changes. Hours change. Prices change. Send us the update and we handle it — no logging into a CMS, no fumbling with a website editor.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-9 h-9">
        <path d="M14 4H7a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3v-9" />
        <path d="M24 4l8 8-14 14H10v-8L24 4z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Google Business Profile Management",
    description:
      "Your GBP is monitored and kept current — hours, photos, service descriptions, and Q&A. Google rewards actively maintained profiles with better local visibility.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-9 h-9">
        <circle cx="18" cy="18" r="14" />
        <path d="M18 4s-6 5-6 14 6 14 6 14M18 4s6 5 6 14-6 14-6 14M4 18h28" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Performance Monitoring",
    description:
      "Regular checks on page speed, mobile experience, and core web vitals. We catch performance degradation early and fix it before it starts affecting your search ranking or visitor experience.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-9 h-9">
        <polyline points="28 14 18 14 14 28 10 8 6 14 4 14" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Technical Maintenance",
    description:
      "Framework updates, dependency patches, and security checks — handled in the background. Your site stays current and secure without you having to think about it.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-9 h-9">
        <path d="M18 4l2 6h7l-5.5 4.5 2 7-5.5-4-5.5 4 2-7L9 10h7z" />
        <circle cx="18" cy="28" r="4" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Priority Support",
    description:
      "Something breaks or needs to change quickly — reach out and we respond as a priority. Care plan clients come first, not behind a general enquiry queue.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-9 h-9">
        <path d="M4 4h28v22H4z" />
        <path d="M10 30h16M18 26v4" />
        <path d="M10 12h16M10 18h8" />
      </svg>
    ),
  },
];

const withoutSupport = [
  "Service information goes stale and confuses visitors",
  "Performance degrades as the framework ages",
  "GBP falls behind competitors who are actively managing theirs",
  "Small issues become large problems before anyone notices",
  "No one to call when something breaks",
  "Search visibility slowly erodes as the site falls out of date",
];

const withCarePlan = [
  "Content stays accurate — updates handled within 48 hours",
  "Performance maintained and monitored continuously",
  "GBP actively managed for consistent local visibility",
  "Issues caught early and fixed before they impact visitors",
  "Priority support when you need something done quickly",
  "Your site stays current with technical best practices",
];

const whyReasons = [
  {
    num: "01",
    title: "We know your site",
    description:
      "We built it. We know the codebase, the content, the structure, and the decisions behind every section. No ramp-up time when something needs fixing or updating.",
  },
  {
    num: "02",
    title: "Updates handled within 48 hours",
    description:
      "Send us the change — new service, updated hours, a photo to swap, a new team member. We handle it within 48 hours on business days. No back-and-forth, no tickets, no waiting.",
  },
  {
    num: "03",
    title: "GBP included, not optional",
    description:
      "Most maintenance plans ignore Google Business Profile. We include it because we know how much your GBP affects your local visibility — and how quickly it falls behind if no one is watching it.",
  },
];

const cities = [
  "Indianapolis",
  "Carmel",
  "Fishers",
  "Noblesville",
  "Westfield",
  "Zionsville",
  "Brownsburg",
  "Avon",
  "Greenwood",
  "Lawrence",
  "Speedway",
  "Beech Grove",
  "Plainfield",
  "Whitestown",
];

const faqs = [
  {
    question: "Do I need a care plan if JadorWorks built my site?",
    answer:
      "It is not required — but it is strongly recommended. Without ongoing maintenance, your site will gradually fall behind: stale content, performance degradation, an unmanaged GBP, and no one to call when something breaks. A care plan keeps everything running the way it was designed to.",
  },
  {
    question: "Can I get a care plan for a site JadorWorks did not build?",
    answer:
      "In some cases, yes. We review the site first to understand the codebase and confirm we can support it effectively. Contact us with details about your current site and we will let you know what is possible.",
  },
  {
    question: "What counts as a \"content update\"?",
    answer:
      "Anything that involves changing existing content on the site — updating service descriptions, changing hours, swapping a photo, adding a new team member, updating pricing language, or correcting any information. New pages or major structural changes are scoped separately.",
  },
  {
    question: "How quickly do you respond to requests?",
    answer:
      "Standard content updates are handled within 48 hours on business days. Urgent issues — something broken or affecting customers — are treated as priority and addressed as quickly as possible.",
  },
  {
    question: "What is the minimum commitment?",
    answer:
      "Care plans are month-to-month with no long-term lock-in. We earn your continued business by being useful and responsive — not by trapping you in a contract.",
  },
  {
    question: "Is hosting included?",
    answer:
      "Yes — all JadorWorks-built sites are hosted on Vercel's infrastructure, which is included in the care plan. There is no separate hosting bill to manage.",
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

export default function OngoingSupportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
        <span style={{ opacity: 0.4 }}>&#8250;</span>
        <Link href="/services" className="hover:text-navy transition-colors">
          Services
        </Link>
        <span style={{ opacity: 0.4 }}>&#8250;</span>
        <span>Ongoing Maintenance &amp; Support</span>
      </div>

      {/* ===== HERO (navy background) ===== */}
      <section
        className="py-20 md:py-[88px] px-6 md:px-14 bg-navy"
        style={{ borderBottom: "1px solid rgba(250,249,246,0.08)" }}
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_380px] gap-16 lg:gap-20 items-center">
          {/* Hero left */}
          <div>
            <ScrollReveal>
              <div
                className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] uppercase mb-5"
                style={{ color: "rgba(250,249,246,0.35)" }}
              >
                <span
                  className="w-6 h-[1.5px] flex-shrink-0"
                  style={{ backgroundColor: "rgba(250,249,246,0.35)" }}
                />
                Ongoing Maintenance &amp; Support &middot; Indiana
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <h1
                className="font-extrabold leading-[1.05] tracking-[-0.03em]"
                style={{
                  fontSize: "clamp(36px, 4.5vw, 56px)",
                  color: "#FAF9F6",
                }}
              >
                We build your site.
                <br />
                Then we stick around.
              </h1>
            </ScrollReveal>

            <ScrollReveal>
              <p
                className="mt-6 text-[17px] font-light leading-[1.7] max-w-[520px]"
                style={{ color: "rgba(250,249,246,0.55)" }}
              >
                Most web studios build a website and disappear.{" "}
                <strong
                  className="font-semibold"
                  style={{ color: "rgba(250,249,246,0.85)" }}
                >
                  We don&apos;t.
                </strong>{" "}
                Monthly care plans keep your site fast, accurate, secure, and
                working — so you can focus on running your business, not managing
                a website.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="mt-10 flex flex-wrap gap-3.5">
                <Link
                  href="/#contact"
                  className="px-8 py-4 text-sm font-bold tracking-[0.04em] uppercase bg-cream text-navy border-none hover:opacity-[0.88] transition-opacity"
                >
                  Ask About a Care Plan
                </Link>
                <Link
                  href="#included"
                  className="px-7 py-4 text-sm font-medium border-[1.5px] transition-colors"
                  style={{
                    color: "rgba(250,249,246,0.6)",
                    borderColor: "rgba(250,249,246,0.2)",
                  }}
                >
                  See what&apos;s included &#8594;
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Hero right — plan overview card */}
          <ScrollReveal>
            <div
              className="flex flex-col"
              style={{ border: "1px solid rgba(250,249,246,0.12)" }}
            >
              <div
                className="px-9 pt-10 pb-0 text-[10px] font-semibold tracking-[0.22em] uppercase"
                style={{ color: "rgba(250,249,246,0.3)" }}
              >
                What a care plan covers
              </div>
              {planItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3.5 px-9 py-[18px]"
                  style={{ borderTop: "1px solid rgba(250,249,246,0.08)" }}
                >
                  <div
                    className="w-7 h-7 flex items-center justify-center flex-shrink-0"
                    style={{ border: "1.5px solid rgba(250,249,246,0.15)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      className="text-[13px] font-semibold mb-0.5"
                      style={{ color: "#FAF9F6" }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-xs font-light leading-[1.5]"
                      style={{ color: "rgba(250,249,246,0.45)" }}
                    >
                      {item.note}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== WHAT'S INCLUDED ===== */}
      <section
        id="included"
        className="py-20 md:py-[88px] px-6 md:px-14"
        style={{ borderBottom: "1px solid rgba(13,27,42,0.10)" }}
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div
              className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] uppercase mb-2"
              style={{ color: "rgba(13,27,42,0.45)" }}
            >
              What&apos;s Included
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
              Everything that keeps your site
              <br />
              working after launch.
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p
              className="text-base font-light leading-[1.7] max-w-[560px]"
              style={{ color: "rgba(13,27,42,0.68)" }}
            >
              A website is not a one-time project. It needs maintenance, updates,
              and monitoring to stay accurate and effective. Here is what every
              care plan covers.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div
              className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              style={{
                gap: "1px",
                backgroundColor: "rgba(13,27,42,0.10)",
                border: "1px solid rgba(13,27,42,0.10)",
              }}
            >
              {included.map((item) => (
                <div
                  key={item.num}
                  className="relative overflow-hidden px-9 py-11 transition-colors group"
                  style={{ backgroundColor: "#FAF9F6" }}
                >
                  <div className="absolute bottom-0 left-9 right-9 h-0.5 bg-navy origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />
                  <div
                    className="text-[11px] font-bold tracking-[0.18em] mb-7"
                    style={{ color: "rgba(13,27,42,0.28)" }}
                  >
                    {item.num}
                  </div>
                  <div className="text-navy mb-[18px]">{item.icon}</div>
                  <h3 className="text-base font-bold tracking-[-0.01em] text-navy mb-2.5">
                    {item.title}
                  </h3>
                  <p
                    className="text-[13px] font-light leading-[1.7]"
                    style={{ color: "rgba(13,27,42,0.68)" }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PROBLEM SPLIT ===== */}
      <section
        className="py-20 md:py-[88px] px-6 md:px-14"
        style={{
          backgroundColor: "rgba(13,27,42,0.02)",
          borderBottom: "1px solid rgba(13,27,42,0.10)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div
              className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] uppercase mb-2"
              style={{ color: "rgba(13,27,42,0.45)" }}
            >
              The Difference
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
              What happens when you build
              <br />
              and walk away.
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div
              className="mt-12 grid grid-cols-1 md:grid-cols-2"
              style={{
                gap: "1px",
                backgroundColor: "rgba(13,27,42,0.10)",
                border: "1px solid rgba(13,27,42,0.10)",
              }}
            >
              {/* Without Support — stone */}
              <div
                className="p-10 md:p-12"
                style={{ backgroundColor: "#EDEAE4" }}
              >
                <div
                  className="text-[10px] font-bold tracking-[0.16em] uppercase mb-5"
                  style={{ color: "rgba(13,27,42,0.42)" }}
                >
                  Without ongoing support
                </div>
                <h3
                  className="text-xl font-extrabold tracking-[-0.015em] mb-6"
                  style={{ color: "#0D1B2A" }}
                >
                  A website that slowly stops working
                </h3>
                <div className="flex flex-col gap-3">
                  {withoutSupport.map((item, i) => (
                    <div
                      key={i}
                      className="text-sm font-light leading-[1.65] flex items-start gap-2.5"
                      style={{ color: "rgba(13,27,42,0.68)" }}
                    >
                      <span
                        className="w-[5px] h-[5px] flex-shrink-0 mt-2"
                        style={{
                          backgroundColor: "rgba(13,27,42,0.42)",
                          borderRadius: "50%",
                        }}
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* With Care Plan — navy */}
              <div className="p-10 md:p-12 bg-navy">
                <div
                  className="text-[10px] font-bold tracking-[0.16em] uppercase mb-5"
                  style={{ color: "rgba(250,249,246,0.35)" }}
                >
                  With a JadorWorks care plan
                </div>
                <h3
                  className="text-xl font-extrabold tracking-[-0.015em] mb-6"
                  style={{ color: "#FAF9F6" }}
                >
                  A website that keeps working as hard as you do
                </h3>
                <div className="flex flex-col gap-3">
                  {withCarePlan.map((item, i) => (
                    <div
                      key={i}
                      className="text-sm font-light leading-[1.65] flex items-start gap-2.5"
                      style={{ color: "rgba(250,249,246,0.6)" }}
                    >
                      <span
                        className="w-[5px] h-[5px] flex-shrink-0 mt-2"
                        style={{
                          backgroundColor: "rgba(250,249,246,0.4)",
                          borderRadius: "50%",
                        }}
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== WHY JADORWORKS ===== */}
      <section
        className="py-20 md:py-[88px] px-6 md:px-14"
        style={{ borderBottom: "1px solid rgba(13,27,42,0.10)" }}
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <div className="pt-2">
            <ScrollReveal>
              <div
                className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] uppercase mb-2"
                style={{ color: "rgba(13,27,42,0.45)" }}
              >
                Why JadorWorks
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
                The studio that built
                <br />
                your site stays on it.
              </h2>
            </ScrollReveal>

            <ScrollReveal>
              <p
                className="text-base font-light leading-[1.7] max-w-[560px] mt-3.5"
                style={{ color: "rgba(13,27,42,0.68)" }}
              >
                We are not a third-party maintenance service taking over someone
                else&apos;s work. We built your site. We know every decision that
                went into it. That makes maintenance faster, cleaner, and more
                reliable.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="mt-10">
                <Link
                  href="/#contact"
                  className="inline-block px-8 py-4 text-sm font-bold tracking-[0.04em] uppercase bg-navy text-cream hover:opacity-[0.82] transition-opacity"
                >
                  Ask About a Care Plan
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <div className="flex flex-col" style={{ gap: "1px" }}>
            {whyReasons.map((reason) => (
              <ScrollReveal key={reason.num}>
                <div
                  className="flex gap-5 items-start p-8 md:px-9 md:py-8 transition-all duration-200 hover:translate-x-1"
                  style={{
                    backgroundColor: "#FAF9F6",
                    border: "1px solid rgba(13,27,42,0.10)",
                  }}
                >
                  <div
                    className="text-[11px] font-extrabold tracking-[0.1em] flex-shrink-0 w-7 mt-0.5"
                    style={{ color: "rgba(13,27,42,0.28)" }}
                  >
                    {reason.num}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold tracking-[-0.01em] text-navy mb-1.5">
                      {reason.title}
                    </h3>
                    <p
                      className="text-[13px] font-light leading-[1.7]"
                      style={{ color: "rgba(13,27,42,0.68)" }}
                    >
                      {reason.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICE AREA ===== */}
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
              Service Area
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
              Supporting Indiana
              <br />
              service businesses.
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            <div>
              <ScrollReveal>
                <div className="flex flex-wrap gap-2">
                  {cities.map((city) => (
                    <span
                      key={city}
                      className="text-xs font-semibold tracking-[0.06em] uppercase px-4 py-2 transition-all duration-200 cursor-default hover:bg-navy hover:text-cream hover:border-navy"
                      style={{
                        color: "rgba(13,27,42,0.68)",
                        backgroundColor: "#EDEAE4",
                        border: "1px solid rgba(13,27,42,0.10)",
                      }}
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <p
                  className="mt-6 text-[13px] font-light leading-[1.65]"
                  style={{ color: "rgba(13,27,42,0.68)" }}
                >
                  Care plans are available for any JadorWorks-built site in
                  Indiana.{" "}
                  <strong className="font-semibold text-navy">
                    Site built by someone else?
                  </strong>{" "}
                  Contact us — in some cases we can take over support after a
                  brief review.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal>
              <div
                className="p-9 md:p-10"
                style={{
                  backgroundColor: "#EDEAE4",
                  border: "1px solid rgba(13,27,42,0.10)",
                }}
              >
                <div
                  className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-3.5"
                  style={{ color: "rgba(13,27,42,0.45)" }}
                >
                  Ready to stop worrying about your site?
                </div>
                <h3 className="text-[22px] font-extrabold tracking-[-0.02em] text-navy mb-2.5 leading-[1.2]">
                  Ask about a monthly care plan.
                </h3>
                <p
                  className="text-sm font-light leading-[1.65] mb-7"
                  style={{ color: "rgba(13,27,42,0.68)" }}
                >
                  No pressure. No commitment. We will walk you through what a care
                  plan covers and recommend the right level of support for your
                  business.
                </p>
                <Link
                  href="/#contact"
                  className="block w-full py-4 text-sm font-bold tracking-[0.04em] uppercase bg-navy text-cream hover:opacity-[0.82] transition-opacity text-center"
                >
                  Ask About a Care Plan
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section
        className="py-20 md:py-[88px] px-6 md:px-14"
        style={{
          backgroundColor: "rgba(13,27,42,0.02)",
          borderBottom: "1px solid rgba(13,27,42,0.10)",
        }}
      >
        <div className="max-w-6xl mx-auto">
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
              Common questions about
              <br />
              ongoing maintenance &amp; support.
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div
              className="mt-12 grid grid-cols-1 md:grid-cols-2"
              style={{
                gap: "2px",
                backgroundColor: "rgba(13,27,42,0.10)",
                border: "1px solid rgba(13,27,42,0.10)",
              }}
            >
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="p-9 md:p-10 transition-colors hover:bg-[rgba(13,27,42,0.03)]"
                  style={{ backgroundColor: "#FAF9F6" }}
                >
                  <h3 className="text-[15px] font-bold tracking-[-0.01em] text-navy mb-3 leading-[1.3]">
                    {faq.question}
                  </h3>
                  <p
                    className="text-[13px] font-light leading-[1.75]"
                    style={{ color: "rgba(13,27,42,0.68)" }}
                  >
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <div className="py-20 md:py-[88px] px-6 md:px-14 bg-navy">
        <div className="max-w-[680px] mx-auto text-center">
          <ScrollReveal>
            <div
              className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-5"
              style={{ color: "rgba(250,249,246,0.28)" }}
            >
              Get Started &middot; JadorWorks Web Studio
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
              We build it. Then we
              <br />
              keep it running.
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p
              className="text-base font-light leading-[1.7] mb-10"
              style={{ color: "rgba(250,249,246,0.5)" }}
            >
              Book a free 15-minute consultation. We will walk you through care
              plan options and recommend the right level of support for your
              business and budget.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
              <Link
                href="/#contact"
                className="inline-block px-10 py-[18px] text-sm font-bold tracking-[0.06em] uppercase bg-cream text-navy hover:opacity-[0.88] transition-opacity text-center"
              >
                Ask About a Care Plan
              </Link>
              <Link
                href="/services"
                className="inline-block px-8 py-[17px] text-sm font-medium border-[1.5px] transition-colors text-center"
                style={{
                  color: "rgba(250,249,246,0.6)",
                  borderColor: "rgba(250,249,246,0.2)",
                }}
              >
                View all services &#8594;
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p
              className="mt-5 text-[11px] font-light tracking-[0.04em]"
              style={{ color: "rgba(250,249,246,0.22)" }}
            >
              No pressure &middot; No long-term commitment &middot; Month-to-month
              plans
            </p>
          </ScrollReveal>
        </div>
      </div>
    </>
  );
}
