import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Web Design & Digital Services for Indiana Small Businesses | JadorWorks Web Studio",
  description:
    "Professional website design, Google Business Profile setup, local SEO, and ongoing support for any local service business in Indiana. Free consultation. JadorWorks Web Studio.",
  openGraph: {
    title: "Web Design & Digital Services for Indiana Small Businesses | JadorWorks Web Studio",
    description:
      "Professional website design, Google Business Profile setup, local SEO, and ongoing support for any local service business in Indiana. Free consultation.",
    url: "https://jadorworks.com/services",
    siteName: "JadorWorks Web Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Web Design & Digital Services for Indiana Small Businesses — JadorWorks Web Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & Digital Services for Indiana Small Businesses | JadorWorks Web Studio",
    description:
      "Professional website design, Google Business Profile setup, local SEO, and ongoing support for any local service business in Indiana. Free consultation.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://jadorworks.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://jadorworks.com/services" },
  ],
};

const standardServices = [
  {
    num: "02",
    cat: "Redesign & Improvement",
    title: "Website Audit & Redesign",
    body: "Already have a website but it is not performing? We audit what is broken — slow load times, missing trust signals, poor mobile experience, weak local SEO — and rebuild on a foundation that actually works. A clear diagnosis first, then a plan to fix it.",
    href: "/services/website-audit",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="#0D1B2A" strokeWidth="1.5" strokeLinecap="round" className="w-9 h-9">
        <circle cx="18" cy="18" r="14" />
        <path d="M18 10v8l5 3" />
        <path d="M8 8l3 3M28 8l-3 3" />
      </svg>
    ),
  },
  {
    num: "03",
    cat: "Local Visibility",
    title: "Google Business Profile Setup",
    body: "Most local businesses in Indiana are invisible on Google Maps because their Business Profile is missing, incomplete, or full of errors. We create, verify, and fully optimise your GBP so customers can find you, trust you, and call you.",
    href: "/services/gbp-setup",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="#0D1B2A" strokeWidth="1.5" strokeLinecap="round" className="w-9 h-9">
        <circle cx="18" cy="18" r="14" />
        <path d="M18 4s-6 5-6 14 6 14 6 14M18 4s6 5 6 14-6 14-6 14M4 18h28" />
      </svg>
    ),
  },
  {
    num: "04",
    cat: "Search Visibility",
    title: "Local SEO & Search Visibility",
    body: "Local SEO connects your website to customers already searching for what you offer in your area. We build the right page structure, schema markup, service area pages, and AEO foundations — so your business shows up in search and in AI-generated answers.",
    href: "/services/local-seo",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="#0D1B2A" strokeWidth="1.5" strokeLinecap="round" className="w-9 h-9">
        <circle cx="16" cy="16" r="11" />
        <path d="M25 25l8 8" />
        <path d="M12 16h8M16 12v8" />
      </svg>
    ),
  },
  {
    num: "05",
    cat: "Post-Launch Support",
    title: "Ongoing Maintenance & Support",
    body: "Monthly care plans covering hosting, uptime monitoring, content updates, Google Business Profile management, and performance checks — so your site keeps working as hard as your business does long after launch.",
    href: "/services/ongoing-support",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="#0D1B2A" strokeWidth="1.5" strokeLinecap="round" className="w-9 h-9">
        <path d="M18 3l2.5 7.5H28l-6.5 4.5 2.5 7.5L18 18l-6 4.5 2.5-7.5L8 10.5h7.5L18 3z" />
      </svg>
    ),
  },
];

const comingSoonServices = [
  {
    title: "AI Integrations",
    cat: "Future Capability",
    body: "Intelligent features built into your website — appointment booking, lead qualification, customer chat, and automated follow-up. Built specifically for local service businesses.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="#0D1B2A" strokeWidth="1.5" strokeLinecap="round" className="w-9 h-9 opacity-40">
        <rect x="4" y="8" width="28" height="20" rx="3" />
        <path d="M12 18h12M12 13h6M12 23h8" />
      </svg>
    ),
  },
  {
    title: "Reporting & Analytics",
    cat: "Future Capability",
    body: "Clear, plain-language reporting on how your website and Google presence are performing — traffic, leads, rankings, and what is actually driving results for your business.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="#0D1B2A" strokeWidth="1.5" strokeLinecap="round" className="w-9 h-9 opacity-40">
        <path d="M4 28V16M12 28V8M20 28v-8M28 28V12" />
      </svg>
    ),
  },
];

const industries = [
  {
    label: "Industry Example",
    title: "HVAC & Plumbing",
    body: "Trust signals, emergency CTAs, service area coverage, and licensed contractor credibility.",
    href: "/services/hvac-website-design",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="#0D1B2A" strokeWidth="1.5" strokeLinecap="round" className="w-8 h-8">
        <rect x="2" y="14" width="28" height="12" rx="2" />
        <path d="M8 14v-4a8 8 0 0 1 16 0v4" />
        <circle cx="16" cy="20" r="2.5" />
      </svg>
    ),
  },
  {
    label: "Industry Example",
    title: "Remodeling & Home Improvement",
    body: "Project galleries, before-and-after photos, and estimate request flows for high-trust purchases.",
    href: "/services/remodeling-website-design",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="#0D1B2A" strokeWidth="1.5" strokeLinecap="round" className="w-8 h-8">
        <path d="M6 28V18l10-8 10 8v10" />
        <path d="M12 28v-8h8v8" />
      </svg>
    ),
  },
  {
    label: "Industry Example",
    title: "Landscaping & Lawn Care",
    body: "Seasonal positioning, project photography, service area targeting, and quote CTAs.",
    href: "/services/landscaping-website-design",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="#0D1B2A" strokeWidth="1.5" strokeLinecap="round" className="w-8 h-8">
        <path d="M16 28V16M6 18s3-10 10-10 10 10 10 10" />
        <path d="M4 28h24" />
      </svg>
    ),
  },
  {
    label: "Industry Example",
    title: "Home Care & Senior Services",
    body: "Warmth, caregiver credibility, family trust signals, and low-pressure consultation CTAs.",
    href: "/services/home-care-website-design",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="#0D1B2A" strokeWidth="1.5" strokeLinecap="round" className="w-8 h-8">
        <path d="M16 5l-2 6H7l6 4.5-2 6.5L16 18l5 3.5-2-6.5L25 11h-7z" />
      </svg>
    ),
  },
];

const steps = [
  { num: "01", title: "Free Consultation", body: "Tell us about your business, services, and service area. We recommend the right service combination and timeline." },
  { num: "02", title: "We Design & Build", body: "We design your site, set up your GBP, structure everything for local search, and handle domain setup and go-live." },
  { num: "03", title: "You Review & Approve", body: "You review everything before it goes live. We make final adjustments and handle the technical launch." },
  { num: "04", title: "Stay Supported", body: "Hosting, maintenance, content updates, and GBP management so your site keeps working after launch." },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div
        className="px-6 md:px-14 py-3.5"
        style={{
          paddingTop: 86,
          background: "#EDEAE4",
          borderBottom: "1px solid rgba(13,27,42,0.10)",
        }}
      >
        <div className="flex items-center gap-2 text-xs" style={{ color: "rgba(13,27,42,0.42)" }}>
          <Link href="/" className="hover:text-navy transition-colors">Home</Link>
          <span style={{ opacity: 0.4 }}>›</span>
          <span>Services</span>
        </div>
      </div>

      {/* Hero — Navy */}
      <section
        className="px-6 md:px-14 py-20 md:py-[88px] bg-navy"
        style={{ borderBottom: "1px solid rgba(250,249,246,0.08)" }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_380px] gap-16 md:gap-20 items-end">
          <div>
            <ScrollReveal>
              <div
                className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] uppercase mb-5"
                style={{ color: "rgba(250,249,246,0.35)" }}
              >
                <span className="w-6 h-[1.5px] flex-shrink-0" style={{ background: "rgba(250,249,246,0.35)" }} />
                Services · JadorWorks Web Studio
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <h1
                className="font-extrabold leading-[1.05] tracking-[-0.03em] text-cream mb-5"
                style={{ fontSize: "clamp(36px, 4.5vw, 58px)" }}
              >
                Everything your local business needs to get found and grow online.
              </h1>
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-[17px] font-light leading-[1.7] max-w-[520px] mb-11" style={{ color: "rgba(250,249,246,0.55)" }}>
                Websites, Google Business Profiles, local SEO, and ongoing support — for{" "}
                <strong className="font-semibold" style={{ color: "rgba(250,249,246,0.85)" }}>
                  any local service business in Indiana.
                </strong>{" "}
                Not just the four industries in our demos.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <Link
                href="/book"
                className="inline-block text-[13px] font-bold tracking-[0.06em] uppercase bg-cream text-navy px-8 py-4 hover:opacity-90 transition-opacity"
              >
                Book a Free Consultation
              </Link>
            </ScrollReveal>
          </div>

          {/* Stats */}
          <div className="flex flex-col">
            {[
              { val: "5", label: "Live services available now" },
              { val: "1\u20132 wk", label: "Average website launch time" },
              { val: "Any", label: "Industry — we build for all local businesses" },
            ].map((stat, i) => (
              <div
                key={i}
                className="py-5"
                style={{
                  borderTop: "1px solid rgba(250,249,246,0.10)",
                  borderBottom: i === 2 ? "1px solid rgba(250,249,246,0.10)" : undefined,
                }}
              >
                <div className="text-[36px] font-extralight tracking-[-0.04em] leading-none text-cream">
                  {stat.val}
                </div>
                <div
                  className="text-[11px] font-medium tracking-[0.12em] uppercase mt-1"
                  style={{ color: "rgba(250,249,246,0.35)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Services */}
      <section className="px-6 md:px-14 py-20 md:py-[88px]" style={{ borderBottom: "1px solid rgba(13,27,42,0.10)" }}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] uppercase mb-2" style={{ color: "rgba(13,27,42,0.42)" }}>
              What We Do
              <span className="h-px flex-1 max-w-[56px]" style={{ background: "rgba(13,27,42,0.10)" }} />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <h2
              className="font-extrabold leading-[1.05] tracking-[-0.03em] mb-3.5"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
            >
              Five services. One studio.<br />All working together.
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-[16px] font-light leading-[1.7] max-w-[560px]" style={{ color: "rgba(13,27,42,0.68)" }}>
              Every service is available now. We match the right combination to your business — starting with a free consultation.
            </p>
          </ScrollReveal>

          {/* Service Grid */}
          <div className="mt-13 grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(13,27,42,0.10)", border: "1px solid rgba(13,27,42,0.10)", marginTop: 52 }}>

            {/* Featured: Website Design & Development */}
            <ScrollReveal>
              <Link
                href="/services/website-design"
                className="md:col-span-2 bg-navy p-10 md:p-14 grid md:grid-cols-2 gap-10 md:gap-16 items-center group text-cream hover:opacity-95 transition-opacity"
                style={{ gridColumn: "1 / -1" }}
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-bold tracking-[0.18em] uppercase mb-5" style={{ color: "rgba(250,249,246,0.35)" }}>
                    <span>01 · Core Service</span>
                    <span className="text-[18px] opacity-40">→</span>
                  </div>
                  <div className="text-[48px] font-extralight tracking-[-0.04em] leading-none mb-4" style={{ color: "rgba(250,249,246,0.12)" }}>01</div>
                  <h3 className="text-[30px] font-extrabold tracking-[-0.025em] leading-[1.1] text-cream mb-3.5">Website Design & Development</h3>
                  <p className="text-[15px] font-light leading-[1.7]" style={{ color: "rgba(250,249,246,0.55)" }}>
                    A professional website for your local service business — clean, mobile-first, fast-loading, and built to turn visitors into calls. We build for any industry: HVAC, landscaping, remodeling, home care, cleaning, electrical, salons, local shops, and more.
                  </p>
                  <div className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.1em] uppercase text-cream mt-7 group-hover:gap-3.5 transition-all">
                    See what&apos;s included →
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(250,249,246,0.30)" }}>Every website includes</div>
                  {[
                    { label: "Mobile-first, fast-loading design", d: "M5 2h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2zM9 7h6M9 11h4" },
                    { label: "Google Business Profile setup", d: "M12 2s-4 4-4 10 4 10 4 10M12 2s4 4 4 10-4 10-4 10M2 12h20" },
                    { label: "Local SEO foundation built in", d: "M11 11a8 8 0 100-0M21 21l-4.35-4.35" },
                    { label: "Domain registration & go-live support", d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
                    { label: "Launch support and handoff", d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 py-3.5" style={{ borderTop: "1px solid rgba(250,249,246,0.08)" }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="rgba(250,249,246,0.6)" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4 flex-shrink-0 opacity-50">
                        <path d={item.d} />
                      </svg>
                      <span className="text-[13px] font-normal" style={{ color: "rgba(250,249,246,0.65)" }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </Link>
            </ScrollReveal>

            {/* Standard service cards */}
            {standardServices.map((svc) => (
              <ScrollReveal key={svc.num}>
                <Link
                  href={svc.href}
                  className="bg-cream p-10 md:p-11 flex flex-col group relative overflow-hidden hover:bg-[rgba(13,27,42,0.03)] transition-colors h-full"
                >
                  <div className="absolute bottom-0 left-11 right-11 h-0.5 bg-navy scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400" style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }} />
                  <div className="flex items-start justify-between mb-7">
                    <span className="text-[11px] font-bold tracking-[0.18em]" style={{ color: "rgba(13,27,42,0.42)" }}>{svc.num}</span>
                    {svc.icon}
                  </div>
                  <div className="text-[10px] font-bold tracking-[0.16em] uppercase mb-3" style={{ color: "rgba(13,27,42,0.42)" }}>{svc.cat}</div>
                  <h3 className="text-[22px] font-extrabold tracking-[-0.02em] leading-[1.1] mb-3">{svc.title}</h3>
                  <p className="text-[14px] font-light leading-[1.75] mb-8 flex-1" style={{ color: "rgba(13,27,42,0.68)" }}>{svc.body}</p>
                  <div className="flex items-center gap-1.5 text-[12px] font-bold tracking-[0.08em] uppercase text-navy mt-auto group-hover:gap-2.5 transition-all">
                    See what&apos;s included <span>→</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}

            {/* Coming Soon cards */}
            {comingSoonServices.map((svc) => (
              <ScrollReveal key={svc.title}>
                <div className="p-10 md:p-11 flex flex-col opacity-70" style={{ background: "#EDEAE4" }}>
                  <div className="flex items-start justify-between mb-7">
                    <span
                      className="text-[9px] font-bold tracking-[0.16em] uppercase px-2.5 py-1"
                      style={{ color: "rgba(13,27,42,0.42)", border: "1px solid rgba(13,27,42,0.10)" }}
                    >
                      Coming Soon
                    </span>
                    {svc.icon}
                  </div>
                  <div className="text-[10px] font-bold tracking-[0.16em] uppercase mb-3" style={{ color: "rgba(13,27,42,0.42)" }}>{svc.cat}</div>
                  <h3 className="text-[22px] font-extrabold tracking-[-0.02em] leading-[1.1] mb-3" style={{ color: "rgba(13,27,42,0.50)" }}>{svc.title}</h3>
                  <p className="text-[14px] font-light leading-[1.75]" style={{ color: "rgba(13,27,42,0.42)" }}>{svc.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="px-6 md:px-14 py-20 md:py-[88px]" style={{ borderBottom: "1px solid rgba(13,27,42,0.10)", background: "rgba(13,27,42,0.02)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start mb-13" style={{ marginBottom: 52 }}>
            <div>
              <ScrollReveal>
                <div className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] uppercase mb-2" style={{ color: "rgba(13,27,42,0.42)" }}>
                  Industries
                  <span className="h-px flex-1 max-w-[56px]" style={{ background: "rgba(13,27,42,0.10)" }} />
                </div>
              </ScrollReveal>
              <ScrollReveal>
                <h2
                  className="font-extrabold leading-[1.05] tracking-[-0.03em]"
                  style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
                >
                  We have built for these industries — and many others.
                </h2>
              </ScrollReveal>
              <ScrollReveal>
                <div
                  className="mt-4 text-[15px] font-light leading-[1.7] px-5 md:px-7 py-5 md:py-6"
                  style={{ color: "rgba(13,27,42,0.68)", borderLeft: "3px solid rgba(13,27,42,0.10)" }}
                >
                  These four are industries we have built full demo sites for. They are proof of capability — <strong className="font-semibold text-navy">not a closed list of who we work with.</strong> If you serve local customers in Indiana, we can build for you.
                </div>
              </ScrollReveal>
            </div>
            <div className="flex flex-col justify-end">
              <ScrollReveal>
                <div
                  className="p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
                  style={{ background: "#EDEAE4", border: "1px solid rgba(13,27,42,0.10)" }}
                >
                  <p className="text-[15px] font-light" style={{ color: "rgba(13,27,42,0.68)" }}>
                    <strong className="font-bold text-navy">Not in the list?</strong> We also work with cleaning companies, electricians, salons, barbershops, local shops, solo operators, and more. Let&apos;s talk about what your business needs.
                  </p>
                  <Link
                    href="/book"
                    className="flex-shrink-0 text-[13px] font-bold tracking-[0.06em] uppercase text-navy px-7 py-3.5 bg-transparent hover:border-navy transition-colors whitespace-nowrap"
                    style={{ border: "1.5px solid rgba(13,27,42,0.20)" }}
                  >
                    Book a Call
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Industry grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(13,27,42,0.10)", border: "1px solid rgba(13,27,42,0.10)" }}>
            {industries.map((ind) => (
              <ScrollReveal key={ind.title}>
                <Link
                  href={ind.href}
                  className="bg-cream p-8 group relative overflow-hidden hover:bg-[rgba(13,27,42,0.03)] transition-colors block h-full"
                >
                  <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-navy scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-[350ms]" style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }} />
                  <div className="mb-5">{ind.icon}</div>
                  <div className="text-[10px] font-semibold tracking-[0.16em] uppercase mb-2" style={{ color: "rgba(13,27,42,0.42)" }}>{ind.label}</div>
                  <h3 className="text-[16px] font-bold tracking-[-0.01em] leading-[1.2] mb-2">{ind.title}</h3>
                  <p className="text-[13px] font-light leading-[1.65] mb-5" style={{ color: "rgba(13,27,42,0.68)" }}>{ind.body}</p>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-[0.08em] uppercase text-navy group-hover:gap-2 transition-all">
                    See example <span>→</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 md:px-14 py-20 md:py-[88px]" style={{ borderBottom: "1px solid rgba(13,27,42,0.10)" }}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] uppercase mb-2" style={{ color: "rgba(13,27,42,0.42)" }}>
              The Process
              <span className="h-px flex-1 max-w-[56px]" style={{ background: "rgba(13,27,42,0.10)" }} />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <h2
              className="font-extrabold leading-[1.05] tracking-[-0.03em]"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
            >
              From first call to live site<br />in as little as two weeks.
            </h2>
          </ScrollReveal>

          <div className="mt-13 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(13,27,42,0.10)", border: "1px solid rgba(13,27,42,0.10)", marginTop: 52 }}>
            {steps.map((step) => (
              <ScrollReveal key={step.num}>
                <div className="bg-cream p-8 md:p-9 group hover:bg-navy transition-colors duration-300 h-full">
                  <div className="text-[11px] font-bold tracking-[0.18em] mb-7 transition-colors duration-300 group-hover:text-[rgba(250,249,246,0.35)]" style={{ color: "rgba(13,27,42,0.42)" }}>
                    {step.num}
                  </div>
                  <h3 className="text-[15px] font-bold tracking-[-0.01em] mb-2.5 transition-colors duration-300 group-hover:text-cream">
                    {step.title}
                  </h3>
                  <p className="text-[13px] font-light leading-[1.7] transition-colors duration-300 group-hover:text-[rgba(250,249,246,0.55)]" style={{ color: "rgba(13,27,42,0.68)" }}>
                    {step.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy px-6 md:px-14 py-24">
        <div className="max-w-[680px] mx-auto text-center">
          <ScrollReveal>
            <div className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "rgba(250,249,246,0.28)" }}>
              Get Started · JadorWorks Web Studio
            </div>
            <h2
              className="font-extrabold leading-[1.05] tracking-[-0.03em] text-cream mb-4"
              style={{ fontSize: "clamp(32px, 4vw, 54px)" }}
            >
              Ready to get your business found online?
            </h2>
            <p className="text-[16px] font-light leading-[1.7] mb-11" style={{ color: "rgba(250,249,246,0.50)" }}>
              Book a free 15-minute consultation. We will talk through what your business needs and map out the right service combination — no pressure, no commitment.
            </p>
            <div className="flex flex-wrap justify-center gap-3.5">
              <Link
                href="/book"
                className="text-[14px] font-bold tracking-[0.06em] uppercase text-navy bg-cream px-10 py-[18px] hover:opacity-90 transition-opacity"
              >
                Book a Free Consultation
              </Link>
              <Link
                href="/demos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-medium px-8 py-[17px] transition-colors inline-flex items-center hover:text-cream ghost-cta-btn"
                style={{ color: "rgba(250,249,246,0.60)", border: "1.5px solid rgba(250,249,246,0.20)" }}
              >
                See Demo Sites →
              </Link>
            </div>
            <p className="mt-5 text-[11px] font-light tracking-[0.04em]" style={{ color: "rgba(250,249,246,0.40)" }}>
              No pressure · No commitment · Response within one business day
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
