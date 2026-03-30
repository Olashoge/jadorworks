import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PixelJMark } from "@/components/PixelJMark";

export const metadata: Metadata = {
  title:
    "Website Design & Development for Local Service Businesses in Indiana | JadorWorks Web Studio",
  description:
    "Professional website design for any local service business in Indiana — HVAC, landscaping, cleaning, electrical, salons, and more. Google Business Profile setup and local SEO included. Live in 1-2 weeks. JadorWorks Web Studio.",
  openGraph: {
    title:
      "Website Design & Development for Local Service Businesses in Indiana | JadorWorks Web Studio",
    description:
      "Professional website design for any local service business in Indiana — HVAC, landscaping, cleaning, electrical, salons, and more. Google Business Profile setup and local SEO included.",
    url: "https://jadorworks.com/services/website-design",
    siteName: "JadorWorks Web Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Website Design & Development for Local Service Businesses — JadorWorks Web Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Website Design & Development for Local Service Businesses in Indiana | JadorWorks Web Studio",
    description:
      "Professional website design for any local service business in Indiana — HVAC, landscaping, cleaning, electrical, salons, and more. Google Business Profile setup and local SEO included.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Design & Development",
  provider: {
    "@type": "ProfessionalService",
    name: "JadorWorks Web Studio",
    url: "https://jadorworks.com",
    telephone: "+13177215551",
    email: "hello@jadorworks.com",
  },
  description:
    "Professional website design and development for local service businesses in Indiana. Google Business Profile setup and local SEO included.",
  areaServed: {
    "@type": "State",
    name: "Indiana",
  },
  serviceType: "Website Design",
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
      name: "Website Design & Development",
      item: "https://jadorworks.com/services/website-design",
    },
  ],
};

const proofItems = [
  {
    label: "Professional Website",
    note: "Clean, fast, mobile-first. Built to convert visitors into calls.",
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
    note: "Built to rank for your services in your area from day one.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    label: "Domain & Go-Live Support",
    note: "We handle domain registration and everything needed to launch.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: "Ongoing Support",
    note: "Hosting, maintenance, and updates handled after launch.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4">
        <path d="M18 4l2 6h7l-5.5 4 2 6L18 17l-5.5 3.5 2-6L9 10h7z" />
      </svg>
    ),
  },
];

const included = [
  {
    num: "01",
    title: "Professional Website",
    description:
      "Clean, fast, mobile-first design built to show your services, build trust, and turn visitors into calls or quote requests. Built for your specific industry.",
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
      "We set up or clean up your GBP so your business appears correctly on Google Search and Maps — with accurate categories, service area, hours, and photos.",
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
      "Your site is structured to rank for the services and service areas that matter to your business — from page titles and headings to schema markup and AEO.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-9 h-9">
        <circle cx="16" cy="16" r="10" />
        <path d="M24 24l7 7" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Domain & Launch Support",
    description:
      "We handle domain registration, DNS configuration, and the technical go-live process. You review and approve before anything goes public.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-9 h-9">
        <path d="M18 4l2 6h7l-5.5 4 2 6L18 17l-5.5 3.5 2-6L9 10h7z" />
      </svg>
    ),
  },
];

const industries = [
  {
    name: "HVAC & Plumbing",
    sub: "Demo site available",
    href: "/services/hvac-website-design",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5 opacity-50 flex-shrink-0">
        <rect x="1" y="10" width="22" height="10" rx="2" />
        <path d="M6 10V7a6 6 0 0 1 12 0v3" />
        <circle cx="12" cy="15" r="2" />
      </svg>
    ),
  },
  {
    name: "Remodeling",
    sub: "Demo site available",
    href: "/services/remodeling-website-design",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5 opacity-50 flex-shrink-0">
        <path d="M3 22V13l9-7 9 7v9" />
        <path d="M9 22v-7h6v7" />
      </svg>
    ),
  },
  {
    name: "Landscaping",
    sub: "Demo site available",
    href: "/services/landscaping-website-design",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5 opacity-50 flex-shrink-0">
        <path d="M12 22V12M5 15s2-8 7-8 7 8 7 8" />
        <path d="M3 22h18" />
      </svg>
    ),
  },
  {
    name: "Home Care",
    sub: "Demo site available",
    href: "/services/home-care-website-design",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5 opacity-50 flex-shrink-0">
        <path d="M12 4l-2 6H4l5.5 3.5-2 6.5L12 16l4.5 3.5-2-6.5L20 10h-6z" />
      </svg>
    ),
  },
  {
    name: "Cleaning Services",
    sub: "We build for this",
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5 opacity-50 flex-shrink-0">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
  },
  {
    name: "Electrical & Handyman",
    sub: "We build for this",
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5 opacity-50 flex-shrink-0">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    name: "Salons & Barbershops",
    sub: "We build for this",
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5 opacity-50 flex-shrink-0">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    name: "Local Shops",
    sub: "We build for this",
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5 opacity-50 flex-shrink-0">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
];

const whyReasons = [
  {
    num: "01",
    title: "Industry-informed design",
    description:
      "We understand what trust signals, service area structure, and conversion flow local service businesses need — because we have built across multiple industries, not just made a template and called it done.",
  },
  {
    num: "02",
    title: "SEO and AEO built in from day one",
    description:
      "Every site we build has correct heading structure, schema markup, service area pages, and AEO foundations — so your business shows up in search results and in AI-generated answers, not just on a generic homepage.",
  },
  {
    num: "03",
    title: "You review before anything goes live",
    description:
      "Nothing is published without your approval. You see the site, request any final changes, and sign off before we launch. Most Starter sites are live within 1-2 weeks of receiving your content.",
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
    question: "Do you only build websites for the four industries in your demos?",
    answer:
      "No — the demos show four industries we have built specifically for, but we work with any local service business in Indiana. Cleaning companies, electricians, salons, barbershops, local shops, solo operators — book a consultation and we will tell you exactly what we can build.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Most Starter sites are live in 1-2 weeks from when we receive your content. Growth sites typically take 2-3 weeks. We will give you a clear timeline at the start of the project.",
  },
  {
    question: "Do you handle domain registration?",
    answer:
      "Yes — domain registration and DNS configuration are included in every website package. We handle the technical go-live process so you do not have to figure out nameservers or hosting setup on your own.",
  },
  {
    question: "Will my site show up on Google?",
    answer:
      "We build local SEO and AEO foundations into every site — correct page structure, schema markup, service area signals, and Google Business Profile setup. Results build over time, but you start in the right position from day one.",
  },
  {
    question: "What do I need to provide to get started?",
    answer:
      "Your services, your service area, your contact details, and photos if you have them. We handle the copywriting, structure, and design. You review and approve before anything goes live.",
  },
  {
    question: "What packages do you offer?",
    answer:
      "We offer Starter, Growth, and Custom packages. Starter covers a core website of up to five pages. Growth adds expanded service and location pages and deeper SEO structure. Custom is for more specific needs. A free consultation will help us recommend the right fit.",
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

export default function WebsiteDesignPage() {
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
        <span>Website Design &amp; Development</span>
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
                Website Design &amp; Development &middot; Indiana
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <h1
                className="font-extrabold leading-[1.05] tracking-[-0.03em]"
                style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}
              >
                Professional websites for
                <br />
                local service businesses
                <br />
                in Indiana.
              </h1>
            </ScrollReveal>

            <ScrollReveal>
              <p
                className="mt-6 text-[17px] font-light leading-[1.7] max-w-[520px]"
                style={{ color: "rgba(13,27,42,0.68)" }}
              >
                We build websites for{" "}
                <strong className="font-semibold text-navy">
                  any local service business
                </strong>{" "}
                — HVAC, remodeling, landscaping, home care, cleaning, electrical,
                salons, and more. Clean, mobile-first, and built to get you found
                and get the call.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="mt-10 flex flex-wrap gap-3.5">
                <Link
                  href="/book"
                  className="px-8 py-4 text-sm font-bold tracking-[0.04em] uppercase bg-navy text-cream border-none hover:opacity-[0.82] transition-opacity"
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="/demos"
                  className="px-7 py-4 text-sm font-medium text-navy border-[1.5px] hover:border-navy transition-colors"
                  style={{ borderColor: "rgba(13,27,42,0.10)" }}
                >
                  See Demo Sites &#8594;
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Hero right — proof card */}
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
            label: "Any Industry",
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
            label: "Launch Support Included",
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
              Everything included.
              <br />
              Nothing added on later.
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p
              className="text-base font-light leading-[1.7] max-w-[560px]"
              style={{ color: "rgba(13,27,42,0.68)" }}
            >
              Every website package includes these four things from day one. No
              surprises, no hidden fees, no upsells after launch.
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
                    style={{ color: "rgba(13,27,42,0.28)" }}
                  >
                    {item.num}
                  </div>
                  <div className="text-navy mb-[18px]">{item.icon}</div>
                  <h3 className="text-[15px] font-bold tracking-[-0.01em] text-navy mb-2.5">
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

      {/* ===== INDUSTRIES ===== */}
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
              Industries
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
              We build for any local service business.
              <br />
              Not just the four in our demos.
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p
              className="text-base font-light leading-[1.7] max-w-[560px]"
              style={{ color: "rgba(13,27,42,0.68)" }}
            >
              Our demo sites cover four industries — but we build for many more. If
              you serve local customers in Indiana, we can build for you.
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
              {industries.map((ind) => {
                const inner = (
                  <>
                    {ind.icon}
                    <div>
                      <div className="text-sm font-semibold tracking-[-0.01em] text-navy">
                        {ind.name}
                      </div>
                      <div
                        className="text-xs font-light mt-0.5"
                        style={{ color: "rgba(13,27,42,0.68)" }}
                      >
                        {ind.sub}
                      </div>
                    </div>
                  </>
                );
                return ind.href ? (
                  <Link
                    key={ind.name}
                    href={ind.href}
                    className="flex items-center gap-3.5 px-7 py-8 transition-colors no-underline text-navy hover:bg-[rgba(13,27,42,0.04)]"
                    style={{ backgroundColor: "#FAF9F6" }}
                  >
                    {inner}
                  </Link>
                ) : (
                  <div
                    key={ind.name}
                    className="flex items-center gap-3.5 px-7 py-8 transition-colors cursor-default hover:bg-[rgba(13,27,42,0.04)]"
                    style={{ backgroundColor: "#FAF9F6" }}
                  >
                    {inner}
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div
              className="mt-px px-7 py-5 text-sm font-light"
              style={{
                backgroundColor: "#EDEAE4",
                border: "1px solid rgba(13,27,42,0.10)",
                borderTop: "none",
                color: "rgba(13,27,42,0.68)",
              }}
            >
              <strong className="font-bold text-navy">Not in the list?</strong>{" "}
              We work with any local service business in Indiana — solo operators,
              trades, specialists, and more. Book a free consultation and we will
              tell you exactly what we can build for you.
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
                Built for service businesses.
                <br />
                Not just websites.
              </h2>
            </ScrollReveal>

            <ScrollReveal>
              <p
                className="text-base font-light leading-[1.7] max-w-[560px] mt-3.5"
                style={{ color: "rgba(13,27,42,0.68)" }}
              >
                Most web studios build a site and walk away. We build a complete
                digital presence — and stick around after launch to make sure it
                keeps working.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="mt-10">
                <Link
                  href="/book"
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
                  Live Demo Sites &middot; JadorWorks Web Studio
                </div>
                <h2
                  className="font-extrabold tracking-[-0.02em] leading-[1.1] mb-3"
                  style={{
                    fontSize: "clamp(22px, 3vw, 34px)",
                    color: "#FAF9F6",
                  }}
                >
                  See what we build before
                  <br />
                  you commit to anything.
                </h2>
                <p
                  className="text-[15px] font-light leading-[1.65]"
                  style={{ color: "rgba(250,249,246,0.55)" }}
                >
                  We have built four full demo sites — HVAC, remodeling,
                  landscaping, and home care — so you can see exactly what your
                  site could look and feel like before a single conversation
                  happens.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:items-end flex-shrink-0">
              <Link
                href="/demos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 text-[13px] font-bold tracking-[0.06em] uppercase bg-cream text-navy hover:opacity-[0.88] transition-opacity text-center"
              >
                View All Demo Sites &#8594;
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
              and all of Indiana.
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
                  We work with service businesses across Indiana.{" "}
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
                  Ready to start?
                </div>
                <h3 className="text-[22px] font-extrabold tracking-[-0.02em] text-navy mb-2.5 leading-[1.2]">
                  Get a free quote for your business website.
                </h3>
                <p
                  className="text-sm font-light leading-[1.65] mb-7"
                  style={{ color: "rgba(13,27,42,0.68)" }}
                >
                  No pressure. No commitment. We will talk through what your
                  business needs and map out the right package.
                </p>
                <Link
                  href="/book"
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
              our website design service.
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
              Ready to get your
              <br />
              business online?
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p
              className="text-base font-light leading-[1.7] mb-10"
              style={{ color: "rgba(250,249,246,0.5)" }}
            >
              Book a free 15-minute consultation. We will talk through what your
              business needs and map out the right package — no pressure, no
              commitment.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
              <Link
                href="/book"
                className="inline-block px-10 py-[18px] text-sm font-bold tracking-[0.06em] uppercase bg-cream text-navy hover:opacity-[0.88] transition-opacity text-center"
              >
                Book a Free Consultation
              </Link>
              <Link
                href="/demos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-[17px] text-sm font-medium border-[1.5px] transition-colors text-center"
                style={{
                  color: "rgba(250,249,246,0.6)",
                  borderColor: "rgba(250,249,246,0.2)",
                }}
              >
                See Demo Sites &#8594;
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
