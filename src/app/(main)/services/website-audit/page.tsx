import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title:
    "Website Audit & Redesign for Indiana Small Businesses | JadorWorks Web Studio",
  description:
    "Is your website losing leads? We audit Indiana small business websites — performance, mobile, local SEO, trust signals, and conversion flow — then rebuild what is broken. JadorWorks Web Studio.",
  openGraph: {
    title:
      "Website Audit & Redesign for Indiana Small Businesses | JadorWorks Web Studio",
    description:
      "Is your website losing leads? We audit Indiana small business websites — performance, mobile, local SEO, trust signals, and conversion flow — then rebuild what is broken.",
    url: "https://jadorworks.com/services/website-audit",
    siteName: "JadorWorks Web Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Website Audit & Redesign for Indiana Small Businesses — JadorWorks Web Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Website Audit & Redesign for Indiana Small Businesses | JadorWorks Web Studio",
    description:
      "Is your website losing leads? We audit Indiana small business websites — performance, mobile, local SEO, trust signals, and conversion flow — then rebuild what is broken.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Audit & Redesign",
  provider: {
    "@type": "ProfessionalService",
    name: "JadorWorks Web Studio",
    url: "https://jadorworks.com",
    telephone: "+13177215551",
    email: "hello@jadorworks.com",
  },
  description:
    "Website audit and redesign service for Indiana small businesses. We diagnose performance, mobile, local SEO, trust signals, and conversion issues — then rebuild what is broken.",
  areaServed: {
    "@type": "State",
    name: "Indiana",
  },
  serviceType: "Website Audit & Redesign",
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
      name: "Website Audit & Redesign",
      item: "https://jadorworks.com/services/website-audit",
    },
  ],
};

const problemSignals = [
  {
    label: "Slow load times",
    note: "Visitors leave before your page finishes loading.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-3.5 h-3.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    label: "Broken on mobile",
    note: "More than half of your potential customers search on a phone.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-3.5 h-3.5">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M9 7h6M9 11h4" />
      </svg>
    ),
  },
  {
    label: "Invisible in search",
    note: "No local SEO structure means Google does not know what you offer or where.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-3.5 h-3.5">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    label: "Losing leads silently",
    note: "No error message — just customers leaving and calling your competitor.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-3.5 h-3.5">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    num: "01",
    title: "Free consultation",
    description:
      "Tell us about your business and your current site. We review it before the call so the conversation is specific to your actual situation — not a generic sales pitch.",
  },
  {
    num: "02",
    title: "Full audit",
    description:
      "We run a complete audit — performance, mobile experience, local SEO structure, trust signals, conversion flow, GBP consistency, and brand compliance. Every issue is documented.",
  },
  {
    num: "03",
    title: "Audit report & proposal",
    description:
      "We present every issue found, ranked by impact. Then we propose a fix plan — whether that is targeted repairs or a full redesign — with a clear scope and timeline.",
  },
  {
    num: "04",
    title: "Redesign & rebuild",
    description:
      "We rebuild your site on a clean foundation — correcting every structural issue, implementing local SEO properly, and redesigning sections that are hurting conversion.",
  },
  {
    num: "05",
    title: "You review & approve",
    description:
      "You see the rebuilt site before it goes live. We make any final adjustments and you approve the launch. Nothing is published without your sign-off.",
  },
  {
    num: "06",
    title: "Launch & support",
    description:
      "We handle the technical launch. Monthly care plans are available if you want ongoing hosting, maintenance, and GBP management after the rebuild goes live.",
  },
];

const fixes = [
  {
    num: "01",
    title: "Slow load times",
    description:
      "Unoptimised images, excessive scripts, and poor hosting choices make sites load slowly. We rebuild on a fast, optimised stack — Next.js on Vercel — so pages load in under two seconds on any connection.",
  },
  {
    num: "02",
    title: "Broken mobile experience",
    description:
      "Template sites that looked fine on desktop often break on phones — text too small, buttons too close, layouts that overflow the screen. We rebuild mobile-first so the experience is right on every device.",
  },
  {
    num: "03",
    title: "No local SEO structure",
    description:
      "City names buried in paragraphs, missing schema markup, no service area pages, page titles that say \"Home\" instead of what you do and where you do it. We rebuild the structure Google needs to rank you locally.",
  },
  {
    num: "04",
    title: "Weak or missing trust signals",
    description:
      "Years in business, licensed and insured status, review count, certifications — if these are buried or missing, visitors leave without calling. We surface them in the right places at the right time.",
  },
  {
    num: "05",
    title: "No clear call to action",
    description:
      "A phone number that requires hunting. A contact form buried at the bottom. Visitors who were ready to call but could not find the next step. We make the conversion path obvious on every page.",
  },
  {
    num: "06",
    title: "GBP inconsistency",
    description:
      "Your website and your Google Business Profile telling different stories — different phone numbers, different service areas, different business names. Google loses confidence. We align everything.",
  },
  {
    num: "07",
    title: "Vague service descriptions",
    description:
      "\"We offer quality services\" is not a services page. Visitors need to know exactly what you do, what is included, and what happens when they contact you. We rewrite every service description to convert.",
  },
  {
    num: "08",
    title: "Outdated or unprofessional design",
    description:
      "A site that looks like it was built a decade ago signals that the business behind it may not be keeping up. Design is trust. We rebuild to a current, professional standard that matches the quality of your work.",
  },
];

const whyReasons = [
  {
    num: "01",
    title: "Documented audit — not a sales pitch",
    description:
      "Every finding is documented with a clear explanation of what the problem is, why it matters, and what fixing it will do for your business. You decide what to act on.",
  },
  {
    num: "02",
    title: "Local SEO is our foundation",
    description:
      "We have built local SEO into every site we have ever made. We know exactly what Indiana service businesses need to rank locally — and exactly what is stopping your current site from doing it.",
  },
  {
    num: "03",
    title: "You see everything before launch",
    description:
      "Every redesign is reviewed and approved by you before it goes live. No surprises, no publish-and-hope. You have final say on everything.",
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
    question: "Do I need a full rebuild or just targeted fixes?",
    answer:
      "That depends on what the audit finds. If your site has structural problems — wrong page architecture, bad mobile foundation, missing SEO structure throughout — a rebuild is usually more efficient than patching individually. We will tell you honestly which applies to your situation.",
  },
  {
    question: "How long does an audit take?",
    answer:
      "The audit itself typically takes 3-5 business days. We then present the findings and a proposed fix plan. If you approve a rebuild, most projects launch within 2-3 weeks from that point.",
  },
  {
    question: "Can you work with my existing domain and content?",
    answer:
      "Yes. We work with your existing domain and use your existing content as a starting point — improving and restructuring it as needed. You keep everything you already have. We just make it work properly.",
  },
  {
    question: "Will the redesign hurt my existing Google ranking?",
    answer:
      "A correctly done redesign should improve your ranking, not hurt it. We preserve your existing URL structure where possible, implement proper redirects where needed, and improve the SEO foundation throughout — so you come out stronger, not weaker.",
  },
  {
    question: "What if I just want the audit report without the rebuild?",
    answer:
      "That is a valid option. We can deliver the full audit report as a standalone deliverable — a documented list of every issue found with clear explanations and recommendations. You can then act on it yourself or with another developer.",
  },
  {
    question: "Do you offer ongoing support after the rebuild?",
    answer:
      "Yes — monthly care plans covering hosting, maintenance, content updates, and Google Business Profile management are available after the rebuild launches. See our Ongoing Maintenance & Support service for details.",
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

export default function WebsiteAuditPage() {
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
        <span>Website Audit &amp; Redesign</span>
      </div>

      {/* ===== HERO (ivory background) ===== */}
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
                Website Audit &amp; Redesign &middot; Indiana
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <h1
                className="font-extrabold leading-[1.05] tracking-[-0.03em]"
                style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}
              >
                Your website exists.
                <br />
                But is it actually working
                <br />
                for your business?
              </h1>
            </ScrollReveal>

            <ScrollReveal>
              <p
                className="mt-6 text-[17px] font-light leading-[1.7] max-w-[520px]"
                style={{ color: "rgba(13,27,42,0.68)" }}
              >
                Most small business websites in Indiana look fine on the surface —
                but they are quietly losing leads every day.{" "}
                <strong className="font-semibold text-navy">
                  Slow load times, weak trust signals, no local SEO structure,
                  broken mobile experience.
                </strong>{" "}
                We find every problem and fix it.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="mt-10 flex flex-wrap gap-3.5">
                <Link
                  href="/book"
                  className="px-8 py-4 text-sm font-bold tracking-[0.04em] uppercase bg-navy text-cream border-none hover:opacity-[0.82] transition-opacity"
                >
                  Get a Free Audit Quote
                </Link>
                <Link
                  href="#process"
                  className="px-7 py-4 text-sm font-medium text-navy border-[1.5px] hover:border-navy transition-colors"
                  style={{ borderColor: "rgba(13,27,42,0.10)" }}
                >
                  See what we check &#8594;
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Hero right — problem signals card */}
          <ScrollReveal>
            <div
              className="flex flex-col"
              style={{ border: "1px solid rgba(13,27,42,0.10)" }}
            >
              <div
                className="px-9 pt-10 pb-0 text-[10px] font-semibold tracking-[0.22em] uppercase"
                style={{ color: "rgba(13,27,42,0.45)" }}
              >
                Signs your site needs an audit
              </div>
              {problemSignals.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3.5 px-9 py-[18px]"
                  style={{ borderTop: "1px solid rgba(13,27,42,0.10)" }}
                >
                  <div
                    className="w-7 h-7 flex items-center justify-center flex-shrink-0 text-navy"
                    style={{ border: "1.5px solid rgba(13,27,42,0.10)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-navy mb-0.5">
                      {item.label}
                    </div>
                    <div
                      className="text-xs font-light leading-[1.5]"
                      style={{ color: "rgba(13,27,42,0.68)" }}
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

      {/* ===== TRUST STRIP ===== */}
      <div className="px-6 md:px-14 py-5 bg-navy flex flex-wrap items-center gap-8 md:gap-12">
        {[
          {
            label: "Diagnosis First",
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="rgba(250,249,246,0.6)" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4 opacity-60 flex-shrink-0">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            ),
          },
          {
            label: "Mobile-First Rebuild",
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="rgba(250,249,246,0.6)" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4 opacity-60 flex-shrink-0">
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <path d="M9 7h6M9 11h4" />
              </svg>
            ),
          },
          {
            label: "Local SEO Fixed",
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="rgba(250,249,246,0.6)" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4 opacity-60 flex-shrink-0">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            ),
          },
          {
            label: "You Approve Before Launch",
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="rgba(250,249,246,0.6)" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4 opacity-60 flex-shrink-0">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            ),
          },
        ].map((item, i, arr) => (
          <div key={item.label} className="contents">
            <div
              className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.08em] uppercase"
              style={{ color: "rgba(250,249,246,0.55)" }}
            >
              {item.icon}
              {item.label}
            </div>
            {i < arr.length - 1 && (
              <div
                className="w-px h-5 flex-shrink-0 hidden md:block"
                style={{ backgroundColor: "rgba(250,249,246,0.12)" }}
              />
            )}
          </div>
        ))}
      </div>

      {/* ===== THE PROCESS ===== */}
      <section
        id="process"
        className="py-20 md:py-[88px] px-6 md:px-14"
        style={{ borderBottom: "1px solid rgba(13,27,42,0.10)" }}
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div
              className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] uppercase mb-2"
              style={{ color: "rgba(13,27,42,0.45)" }}
            >
              The Process
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
              A clear diagnosis first.
              <br />
              Then a plan. Then a fix.
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p
              className="text-base font-light leading-[1.7] max-w-[560px]"
              style={{ color: "rgba(13,27,42,0.68)" }}
            >
              We do not guess. We audit your site against a documented checklist —
              then we tell you exactly what is wrong, what it is costing you, and
              what we propose to do about it.
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
              {processSteps.map((step) => (
                <div
                  key={step.num}
                  className="px-9 py-11 transition-colors duration-300 group"
                  style={{ backgroundColor: "#FAF9F6" }}
                >
                  <div
                    className="text-[11px] font-bold tracking-[0.18em] mb-7 transition-colors duration-300"
                    style={{ color: "rgba(13,27,42,0.28)" }}
                  >
                    {step.num}
                  </div>
                  <h3 className="text-lg font-extrabold tracking-[-0.015em] mb-3 transition-colors duration-300 text-navy">
                    {step.title}
                  </h3>
                  <p
                    className="text-sm font-light leading-[1.7] transition-colors duration-300"
                    style={{ color: "rgba(13,27,42,0.68)" }}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== WHAT WE FIX ===== */}
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
              What We Fix
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
              Every issue on your site.
              <br />
              In priority order.
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p
              className="text-base font-light leading-[1.7] max-w-[560px]"
              style={{ color: "rgba(13,27,42,0.68)" }}
            >
              These are the most common problems we find in Indiana small business
              websites. Most sites have three or more. Some have all of them.
            </p>
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
              {fixes.map((fix) => (
                <div
                  key={fix.num}
                  className="flex gap-5 items-start p-9 md:p-10 transition-colors hover:bg-[rgba(13,27,42,0.03)]"
                  style={{ backgroundColor: "#FAF9F6" }}
                >
                  <div
                    className="text-[11px] font-extrabold tracking-[0.1em] flex-shrink-0 w-7 mt-0.5"
                    style={{ color: "rgba(13,27,42,0.28)" }}
                  >
                    {fix.num}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold tracking-[-0.01em] text-navy mb-2">
                      {fix.title}
                    </h3>
                    <p
                      className="text-[13px] font-light leading-[1.7]"
                      style={{ color: "rgba(13,27,42,0.68)" }}
                    >
                      {fix.description}
                    </p>
                  </div>
                </div>
              ))}
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
                Honest diagnosis.
                <br />
                No unnecessary rebuild.
              </h2>
            </ScrollReveal>

            <ScrollReveal>
              <p
                className="text-base font-light leading-[1.7] max-w-[560px] mt-3.5"
                style={{ color: "rgba(13,27,42,0.68)" }}
              >
                We tell you what is actually wrong and what is actually worth
                fixing. If your site only needs targeted repairs, we say that. If
                it needs a full rebuild, we explain exactly why.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="mt-10">
                <Link
                  href="/book"
                  className="inline-block px-8 py-4 text-sm font-bold tracking-[0.04em] uppercase bg-navy text-cream hover:opacity-[0.82] transition-opacity"
                >
                  Get a Free Audit Quote
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
              Serving Indiana
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
                  We audit and rebuild websites for service businesses across
                  Indiana.{" "}
                  <strong className="font-semibold text-navy">
                    Not sure if we serve your area?
                  </strong>{" "}
                  Reach out — we will let you know right away.
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
                  Ready to find out what&apos;s wrong?
                </div>
                <h3 className="text-[22px] font-extrabold tracking-[-0.02em] text-navy mb-2.5 leading-[1.2]">
                  Get a free audit consultation for your website.
                </h3>
                <p
                  className="text-sm font-light leading-[1.65] mb-7"
                  style={{ color: "rgba(13,27,42,0.68)" }}
                >
                  No pressure. No commitment. We look at your current site, tell
                  you what we find, and explain what we would do to fix it.
                </p>
                <Link
                  href="/book"
                  className="block w-full py-4 text-sm font-bold tracking-[0.04em] uppercase bg-navy text-cream hover:opacity-[0.82] transition-opacity text-center"
                >
                  Get a Free Audit Quote
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
              website audits and redesigns.
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
              Find out what your website
              <br />
              is costing you.
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p
              className="text-base font-light leading-[1.7] mb-10"
              style={{ color: "rgba(250,249,246,0.5)" }}
            >
              Book a free 15-minute consultation. We review your current site
              before the call and come prepared with specific observations — not a
              generic pitch.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
              <Link
                href="/book"
                className="inline-block px-10 py-[18px] text-sm font-bold tracking-[0.06em] uppercase bg-cream text-navy hover:opacity-[0.88] transition-opacity text-center"
              >
                Get a Free Audit Quote
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
              No pressure &middot; No commitment &middot; Response within one
              business day
            </p>
          </ScrollReveal>
        </div>
      </div>
    </>
  );
}
