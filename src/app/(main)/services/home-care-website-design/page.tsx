import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PixelJMark } from "@/components/PixelJMark";

export const metadata: Metadata = {
  title:
    "Website Design for Home Care Businesses in Indianapolis | JadorWorks Web Studio",
  description:
    "Professional website design for home care and senior service businesses in Indianapolis. Build trust with families, showcase your caregivers, and get found in local search. Launch in 1-2 weeks.",
  openGraph: {
    title:
      "Website Design for Home Care Businesses in Indianapolis | JadorWorks Web Studio",
    description:
      "Professional website design for home care and senior service businesses in Indianapolis. Build trust with families, showcase your caregivers, and get found in local search.",
    url: "https://jadorworks.com/services/home-care-website-design",
    siteName: "JadorWorks Web Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Home Care Website Design for Indianapolis Businesses — JadorWorks Web Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Website Design for Home Care Businesses in Indianapolis | JadorWorks Web Studio",
    description:
      "Professional website design for home care and senior service businesses in Indianapolis. Build trust with families, showcase your caregivers, and get found in local search.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Home Care Website Design",
  provider: {
    "@type": "ProfessionalService",
    name: "JadorWorks Web Studio",
    url: "https://jadorworks.com",
    telephone: "+13177215551",
    email: "hello@jadorworks.com",
  },
  description:
    "Professional website design for home care and senior service businesses in Indianapolis and across Indiana. Build trust with families and get found in local search.",
  areaServed: {
    "@type": "City",
    name: "Indianapolis",
    containedInPlace: {
      "@type": "State",
      name: "Indiana",
    },
  },
  serviceType: "Website Design",
};

const proofItems = [
  {
    label: "Professional Website",
    note: "Clean, mobile-friendly, built to convert visitors into calls.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    label: "Google Business Profile",
    note: "Setup or cleanup so customers can find and trust you.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2s-4 4-4 10 4 10 4 10M12 2s4 4 4 10-4 10-4 10M2 12h20" />
      </svg>
    ),
  },
  {
    label: "Local SEO Foundation",
    note: "Built to rank for the services you offer in your area.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    label: "Ongoing Support",
    note: "Hosting, maintenance, and updates after launch.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const included = [
  {
    num: "01",
    title: "Professional Home Care Website",
    description:
      "A warm, trustworthy site built around your services, caregivers, and service area — designed to give families the confidence they need to reach out and make that first call.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-9 h-9">
        <rect x="2" y="5" width="32" height="22" rx="2" />
        <path d="M12 31h12M18 27v4" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Google Business Profile",
    description:
      "We set up or clean up your GBP with service descriptions, coverage areas, and reviews so families searching for in-home care find your business on Google Maps.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-9 h-9">
        <circle cx="18" cy="18" r="14" />
        <path d="M18 4s-6 5-6 14 6 14 6 14M18 4s6 5 6 14-6 14-6 14M4 18h28" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Local SEO Foundation",
    description:
      "Your site is built to rank for searches like 'home care Indianapolis' and 'senior care near me' — with compassionate copy, proper page structure, and schema markup.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-9 h-9">
        <circle cx="16" cy="16" r="10" />
        <path d="M24 24l7 7" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Ongoing Support",
    description:
      "New caregiver profiles, service area expansions, family resource updates, and technical maintenance — we keep your home care site trustworthy and current.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-9 h-9">
        <path d="M18 3l2.5 7.5H28l-6.5 4.5 2.5 7.5L18 18l-6 4.5 2.5-7.5L8 10.5h7.5L18 3z" />
      </svg>
    ),
  },
];

const whyReasons = [
  {
    num: "01",
    title: "We understand the trust families need to feel",
    description:
      "Home care is not a commodity purchase — it is a deeply personal decision made under stress. We build sites that lead with warmth and credibility, answer the questions families are actually asking, and make it easy to take the next step without pressure.",
  },
  {
    num: "02",
    title: "No hidden fees for caregiver pages or service areas",
    description:
      "Website, caregiver section, GBP setup, local SEO foundation, and ongoing support are all included. No upsells for family resource pages or testimonial sections.",
  },
  {
    num: "03",
    title: "Live in 1-2 weeks — families are searching now",
    description:
      "Families looking for care do not wait. Most home care sites launch in 1-2 weeks so you can start building trust and generating inquiries right away.",
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
    question: "What should a home care website include?",
    answer:
      "Your services, your caregivers' credentials and background-check process, your service area, pricing transparency if applicable, and a clear, low-pressure way to get in touch. We build all of this into a site that feels trustworthy from the first visit.",
  },
  {
    question: "How do families typically find home care services online?",
    answer:
      "Most families search by service type and location — \"in-home care Indianapolis\" or \"senior care Carmel IN.\" We structure your site to rank for these searches and answer the questions families have before they are ready to call.",
  },
  {
    question:
      "Can my website help families feel comfortable reaching out?",
    answer:
      "That is its primary purpose. The copy, layout, and calls to action are all designed to reduce anxiety and make it easy to take the first step — whether that is filling out a form, calling, or scheduling a consultation.",
  },
  {
    question:
      "Do you have experience with home care and senior services?",
    answer:
      "Yes — we built a full home care demo site specifically to understand how families evaluate providers online. The trust signals, language, and conversion flow are all tailored to how this audience searches and decides.",
  },
  {
    question:
      "Will the site explain our caregiver screening process?",
    answer:
      "Absolutely. Families want to know their loved one is safe. We include a clear section on your caregiver vetting, background checks, training, and licensing — because transparency is one of the most powerful trust signals in this industry.",
  },
  {
    question: "How long does it take and what does it cost?",
    answer:
      "Most Starter sites are live in 1\u20132 weeks from when we receive your content. A free consultation will help us identify the right package for your business and answer any questions about the process.",
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

export default function HomeCareWebsiteDesignPage() {
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
        <span>Home Care Website Design</span>
      </div>

      {/* ===== HERO ===== */}
      <section
        className="py-20 px-6 md:px-14"
        style={{ borderBottom: "1px solid rgba(13,27,42,0.10)" }}
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_400px] gap-16 lg:gap-20 items-center">
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
                Website Design &middot; Indianapolis, IN
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <h1
                className="font-extrabold leading-[1.05] tracking-[-0.03em]"
                style={{ fontSize: "clamp(36px, 4.5vw, 58px)" }}
              >
                Website Design for
                <br />
                Home Care Businesses
                <br />
                in Indianapolis.
              </h1>
            </ScrollReveal>

            <ScrollReveal>
              <p
                className="mt-6 text-[17px] font-light leading-[1.7] max-w-[520px]"
                style={{ color: "rgba(13,27,42,0.45)" }}
              >
                Families searching for home care are making one of the most
                personal decisions they will ever face. Your website needs to
                earn their trust immediately — with warmth, clarity, and the
                right information. We build home care websites that do exactly
                that.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="mt-10 flex flex-wrap gap-3.5">
                <Link
                  href="#quote"
                  className="px-8 py-4 text-sm font-bold tracking-[0.04em] uppercase bg-navy text-cream border-none hover:opacity-[0.82] transition-opacity"
                >
                  Get a Free Home Care Website Quote
                </Link>
                <Link
                  href="/demos/home-care"
                  className="px-7 py-4 text-sm font-medium text-navy border-[1.5px] hover:border-navy transition-colors"
                  style={{ borderColor: "rgba(13,27,42,0.10)" }}
                >
                  See the Home Care Demo &rarr;
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div
              className="flex flex-col"
              style={{ border: "1px solid rgba(13,27,42,0.10)" }}
            >
              <div
                className="px-9 pt-10 pb-0 text-[10px] font-semibold tracking-[0.22em] uppercase"
                style={{ color: "rgba(13,27,42,0.45)" }}
              >
                What you get
              </div>
              {proofItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 px-9 py-5"
                  style={{ borderTop: "1px solid rgba(13,27,42,0.10)" }}
                >
                  <div
                    className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-navy"
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
                      style={{ color: "rgba(13,27,42,0.45)" }}
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
            label: "Google-Ready Setup",
            icon: (
              <svg viewBox="0 0 24 24" fill="rgba(250,249,246,0.6)" stroke="none" className="w-4 h-4 opacity-60 flex-shrink-0">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
              </svg>
            ),
          },
          {
            label: "Mobile-First Design",
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="rgba(250,249,246,0.6)" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4 opacity-60 flex-shrink-0">
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <path d="M9 7h6M9 11h4" />
              </svg>
            ),
          },
          {
            label: "Live in 1-2 Weeks",
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="rgba(250,249,246,0.6)" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4 opacity-60 flex-shrink-0">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            ),
          },
          {
            label: "Ongoing Support Included",
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

      {/* ===== WHAT'S INCLUDED ===== */}
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
              Everything a home care business
              <br />
              needs to get found online.
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p
              className="text-base font-light leading-[1.7] max-w-[560px]"
              style={{ color: "rgba(13,27,42,0.45)" }}
            >
              Every package includes these four things. No add-ons, no surprises
              — just a complete digital presence for your business.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div
              className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              style={{
                gap: "1px",
                backgroundColor: "rgba(13,27,42,0.10)",
                border: "1px solid rgba(13,27,42,0.10)",
              }}
            >
              {included.map((item) => (
                <div
                  key={item.num}
                  className="relative overflow-hidden px-8 py-10 transition-colors group"
                  style={{ backgroundColor: "#FAF9F6" }}
                >
                  <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-navy origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />
                  <div
                    className="text-[11px] font-bold tracking-[0.18em] mb-7"
                    style={{ color: "rgba(13,27,42,0.42)" }}
                  >
                    {item.num}
                  </div>
                  <div className="text-navy mb-[18px]">{item.icon}</div>
                  <h3 className="text-[15px] font-bold tracking-[-0.01em] text-navy mb-2.5">
                    {item.title}
                  </h3>
                  <p
                    className="text-[13px] font-light leading-[1.7]"
                    style={{ color: "rgba(13,27,42,0.45)" }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== WHY JADORWORKS ===== */}
      <section
        className="py-20 md:py-[88px] px-6 md:px-14"
        style={{
          backgroundColor: "rgba(13,27,42,0.02)",
          borderBottom: "1px solid rgba(13,27,42,0.10)",
        }}
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
                Built for service businesses.
                <br />
                Not just websites.
              </h2>
            </ScrollReveal>

            <ScrollReveal>
              <p
                className="text-base font-light leading-[1.7] max-w-[560px] mt-3.5"
                style={{ color: "rgba(13,27,42,0.45)" }}
              >
                Most web agencies build a site and walk away. We build a
                complete online presence — and stick around to make sure it
                keeps working for you.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="mt-10">
                <Link
                  href="#quote"
                  className="inline-block px-8 py-4 text-sm font-bold tracking-[0.04em] uppercase bg-navy text-cream hover:opacity-[0.82] transition-opacity"
                >
                  Get a Free Quote
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
                    borderColor: "rgba(13,27,42,0.10)",
                  }}
                >
                  <div
                    className="text-[11px] font-extrabold tracking-[0.1em] flex-shrink-0 w-7 mt-0.5"
                    style={{ color: "rgba(13,27,42,0.42)" }}
                  >
                    {reason.num}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold tracking-[-0.01em] text-navy mb-1.5">
                      {reason.title}
                    </h3>
                    <p
                      className="text-[13px] font-light leading-[1.7]"
                      style={{ color: "rgba(13,27,42,0.45)" }}
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

      {/* ===== DEMO CALLOUT ===== */}
      <ScrollReveal>
        <div className="py-[72px] px-6 md:px-14 bg-navy">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_auto] gap-16 items-center">
            <div className="flex items-start gap-7">
              <div className="flex-shrink-0 mt-1">
                <PixelJMark size={22} color="rgba(250,249,246,0.45)" />
              </div>
              <div>
                <div
                  className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-3"
                  style={{ color: "rgba(250,249,246,0.45)" }}
                >
                  Live Demo &middot; JadorWorks Web Studio
                </div>
                <h2
                  className="font-extrabold tracking-[-0.02em] leading-[1.1] mb-3"
                  style={{
                    fontSize: "clamp(24px, 3vw, 36px)",
                    color: "#FAF9F6",
                  }}
                >
                  See what a home care
                  <br />
                  website looks like.
                </h2>
                <p
                  className="text-[15px] font-light leading-[1.65]"
                  style={{ color: "rgba(250,249,246,0.55)" }}
                >
                  We built a full demo site for Graceful Living Home Care — a
                  fictional Indianapolis home care provider — so you can see how
                  services, caregiver trust signals, and family-focused copy work
                  together.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:items-end flex-shrink-0">
              <Link
                href="/demos/home-care"
                className="inline-block px-8 py-4 text-[13px] font-bold tracking-[0.06em] uppercase bg-cream text-navy hover:opacity-[0.88] transition-opacity text-center"
              >
                View the Home Care Demo &rarr;
              </Link>
              <span
                className="text-[11px] font-light tracking-[0.04em]"
                style={{ color: "rgba(250,249,246,0.3)" }}
              >
                No account needed &middot; Opens in browser
              </span>
            </div>
          </div>
        </div>
      </ScrollReveal>

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
              Serving Indianapolis
              <br />
              and surrounding Indiana.
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
                        color: "rgba(13,27,42,0.45)",
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
                  style={{ color: "rgba(13,27,42,0.45)" }}
                >
                  We work with home care businesses across Indiana.{" "}
                  <strong className="font-semibold text-navy">
                    Not sure if we serve your area?
                  </strong>{" "}
                  Reach out — we&apos;ll let you know right away.
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
                  Ready to start?
                </div>
                <h3 className="text-[22px] font-extrabold tracking-[-0.02em] text-navy mb-2.5 leading-[1.2]">
                  Get a free quote for your home care website.
                </h3>
                <p
                  className="text-sm font-light leading-[1.65] mb-7"
                  style={{ color: "rgba(13,27,42,0.45)" }}
                >
                  No pressure. No commitment. We&apos;ll talk through what your
                  business needs and map out the right package.
                </p>
                <Link
                  href="/#contact"
                  className="block w-full py-4 text-sm font-bold tracking-[0.04em] uppercase bg-navy text-cream hover:opacity-[0.82] transition-opacity text-center"
                >
                  Get a Free Quote
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
              home care website design.
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
                    style={{ color: "rgba(13,27,42,0.45)" }}
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
      <div className="py-20 md:py-[88px] px-6 md:px-14 bg-navy" id="quote">
        <div className="max-w-[680px] mx-auto text-center">
          <ScrollReveal>
            <div
              className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-5"
              style={{ color: "rgba(250,249,246,0.3)" }}
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
              Ready to reach more
              <br />
              families in Indiana?
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p
              className="text-base font-light leading-[1.7] mb-10"
              style={{ color: "rgba(250,249,246,0.55)" }}
            >
              Book a free 15-minute consultation. We&apos;ll talk through what
              your business needs and map out the right package — no pressure,
              no commitment.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
              <Link
                href="/#contact"
                className="inline-block px-10 py-[18px] text-sm font-bold tracking-[0.06em] uppercase bg-cream text-navy hover:opacity-[0.88] transition-opacity text-center"
              >
                Get a Free Home Care Website Quote
              </Link>
              <Link
                href="/demos/home-care"
                className="inline-block px-8 py-[17px] text-sm font-medium border-[1.5px] transition-colors text-center"
                style={{
                  color: "rgba(250,249,246,0.65)",
                  borderColor: "rgba(250,249,246,0.2)",
                }}
              >
                See the Home Care Demo &rarr;
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p
              className="mt-5 text-[11px] font-light tracking-[0.04em]"
              style={{ color: "rgba(250,249,246,0.40)" }}
            >
              No pressure &middot; No commitment &middot; We&apos;ll get back to
              you within one business day
            </p>
          </ScrollReveal>
        </div>
      </div>
    </>
  );
}
