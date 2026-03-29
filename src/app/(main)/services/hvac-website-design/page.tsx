import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  ComputerIcon,
  GlobeIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  BoltIcon,
} from "@/components/Icons";
import { PixelJMark } from "@/components/PixelJMark";

export const metadata: Metadata = {
  title:
    "Website Design for HVAC Companies in Indianapolis | JadorWorks Web Studio",
  description:
    "Professional HVAC website design for Indianapolis heating, cooling, and plumbing businesses. Mobile-first, Google-ready websites built to generate calls, quotes, and trust. Launch in 2 weeks.",
  openGraph: {
    title:
      "Website Design for HVAC Companies in Indianapolis | JadorWorks Web Studio",
    description:
      "Professional HVAC website design for Indianapolis heating, cooling, and plumbing businesses. Mobile-first, Google-ready websites built to generate calls, quotes, and trust.",
    url: "https://jadorworks.com/services/hvac-website-design",
    siteName: "JadorWorks Web Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HVAC Website Design for Indianapolis Businesses — JadorWorks Web Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Website Design for HVAC Companies in Indianapolis | JadorWorks Web Studio",
    description:
      "Professional HVAC website design for Indianapolis heating, cooling, and plumbing businesses. Mobile-first, Google-ready websites built to generate calls, quotes, and trust.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "HVAC Website Design",
  provider: {
    "@type": "ProfessionalService",
    name: "JadorWorks Web Studio",
    url: "https://jadorworks.com",
    telephone: "+13177215551",
    email: "hello@jadorworks.com",
  },
  description:
    "Professional website design for HVAC, heating, cooling, and plumbing companies in Indianapolis and across Indiana.",
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

const trustAnchors = [
  { label: "Mobile-first design", value: "Mobile" },
  { label: "Google-ready setup", value: "Google" },
  { label: "Launch in 2 weeks", value: "2 wk" },
  { label: "Ongoing support", value: "Support" },
];

const included = [
  {
    title: "Professional HVAC Website",
    description:
      "Clean, fast-loading, mobile-friendly site designed specifically for heating, cooling, and plumbing businesses. Built to turn visitors into service calls.",
    Icon: ComputerIcon,
  },
  {
    title: "Google Business Profile Setup",
    description:
      "Complete GBP setup or cleanup so your HVAC business shows up correctly on Google Maps and Search with accurate service areas and categories.",
    Icon: GlobeIcon,
  },
  {
    title: "Local SEO Foundation",
    description:
      "Page structure, meta tags, and schema markup designed to help your HVAC business rank for the services you offer in Indianapolis.",
    Icon: MagnifyingGlassIcon,
  },
  {
    title: "Ongoing Maintenance & Support",
    description:
      "Hosting, updates, performance monitoring, and content changes handled for you. Your site stays fast, secure, and current after launch.",
    Icon: ShieldCheckIcon,
  },
];

const whyReasons = [
  {
    title: "Built for Service Businesses",
    description:
      "We specialize in websites for local service companies. Every design decision is made with your customers in mind — homeowners searching for HVAC help.",
    Icon: WrenchScrewdriverIcon,
  },
  {
    title: "Speed Without Shortcuts",
    description:
      "Most sites launch in 1 to 2 weeks. Fast does not mean rushed — it means we have a proven process that eliminates unnecessary delays.",
    Icon: BoltIcon,
  },
];

const faqs = [
  {
    question: "How long does it take to build an HVAC website?",
    answer:
      "Most HVAC websites launch in 1 to 2 weeks from the initial consultation. We handle design, content setup, and Google Business Profile configuration during that time.",
  },
  {
    question: "What does a professional HVAC website cost?",
    answer:
      "Our packages start with a Starter tier for straightforward builds and scale to Growth and Custom tiers for businesses that need more pages, features, or ongoing content. Contact us for a free quote.",
  },
  {
    question:
      "Will my HVAC website show up on Google?",
    answer:
      "Every website we build includes a local SEO foundation — proper page structure, meta tags, schema markup, and Google Business Profile setup. This gives your site the best starting position for local search visibility.",
  },
  {
    question: "Do you handle Google Business Profile setup?",
    answer:
      "Yes. Every package includes Google Business Profile setup or cleanup. We make sure your business information, service areas, categories, and hours are correct and optimized.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "We can redesign and rebuild your existing site on a modern, mobile-first platform. We will also audit your current Google Business Profile and fix any issues.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. Every package includes hosting, maintenance, updates, and support. Your site does not get abandoned after it goes live.",
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

export default function HVACWebsiteDesignPage() {
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

      {/* ===== HERO ===== */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="section-label mb-8">HVAC Website Design</p>
          </ScrollReveal>

          <ScrollReveal>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-navy leading-[1.1] max-w-4xl">
              Website design for HVAC companies in Indianapolis.
            </h1>
          </ScrollReveal>

          <ScrollReveal>
            <p className="mt-6 text-lg md:text-xl font-light text-navy-62 max-w-2xl leading-relaxed">
              Built to earn trust, drive calls, and turn traffic into booked
              jobs. A professional HVAC website designed for the way homeowners
              actually search for service.
            </p>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="#quote"
                className="px-8 py-3.5 bg-navy text-cream text-sm font-medium rounded-lg hover:bg-cream hover:text-navy border border-navy transition-all duration-300 text-center"
              >
                Get a Free HVAC Website Quote
              </Link>
              <Link
                href="/#contact"
                className="px-8 py-3.5 text-navy text-sm font-medium rounded-lg border border-navy-10 hover:border-navy hover:bg-navy hover:text-cream transition-all duration-300 text-center"
              >
                Book a Free Consultation
              </Link>
            </div>
          </ScrollReveal>

          {/* Trust Anchors */}
          <ScrollReveal>
            <div className="mt-16 flex flex-wrap gap-10 md:gap-14">
              {trustAnchors.map((anchor) => (
                <div key={anchor.label} className="flex items-baseline gap-3">
                  <span className="text-2xl md:text-3xl font-semibold text-navy">
                    {anchor.value}
                  </span>
                  <span className="text-xs font-medium tracking-[0.12em] uppercase text-navy-42">
                    {anchor.label.replace(anchor.value, "").trim()}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== WHAT'S INCLUDED ===== */}
      <section
        className="py-20 md:py-24 px-6 md:px-12 lg:px-20"
        style={{ backgroundColor: "rgba(13,27,42,0.03)" }}
      >
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="section-label mb-8">
              What You Get
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-navy leading-[1.1] max-w-3xl">
              Everything an HVAC business needs to get found and get hired
              online.
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-12 grid md:grid-cols-2 gap-5">
              {included.map((item) => (
                <div
                  key={item.title}
                  className="p-8 md:p-10 rounded-xl bg-cream transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ border: "1px solid rgba(13,27,42,0.10)" }}
                >
                  <item.Icon className="w-7 h-7 text-navy-45" />
                  <h3 className="mt-4 text-base font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-light text-navy-62 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== WHY JADORWORKS ===== */}
      <section className="py-20 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="section-label mb-8">Why JadorWorks</p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-navy leading-[1.1] max-w-3xl">
              We build websites for businesses like yours every day.
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p className="mt-6 text-lg font-light text-navy-62 max-w-xl leading-relaxed">
              JadorWorks Web Studio specializes in websites for local service
              businesses in Indiana. We understand what HVAC customers look for
              and how to build sites that convert.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-12 grid md:grid-cols-2 gap-5">
              {whyReasons.map((reason) => (
                <div
                  key={reason.title}
                  className="p-8 md:p-10 rounded-xl bg-cream transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ border: "1px solid rgba(13,27,42,0.10)" }}
                >
                  <reason.Icon className="w-7 h-7 text-navy-45" />
                  <h3 className="mt-4 text-base font-semibold text-navy">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm font-light text-navy-62 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== DEMO CALLOUT ===== */}
      <section className="py-20 md:py-24 px-6 md:px-12 lg:px-20 bg-navy">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <div className="flex justify-center mb-8">
              <PixelJMark size={32} color="#FAF9F6" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2
              className="text-3xl md:text-5xl font-bold leading-[1.1] max-w-3xl mx-auto"
              style={{ color: "rgba(250,249,246,0.85)" }}
            >
              See what an HVAC website from JadorWorks looks like.
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p
              className="mt-6 text-lg font-light max-w-xl mx-auto leading-relaxed"
              style={{ color: "rgba(250,249,246,0.65)" }}
            >
              Summit Air & Plumbing is a fully functional HVAC demo site —
              designed, built, and hosted by JadorWorks Web Studio. Explore it to
              see exactly what your business could have.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-10">
              <Link
                href="/demos/hvac"
                className="inline-block px-8 py-3.5 text-sm font-medium rounded-lg border transition-all duration-300 text-center"
                style={{
                  color: "#FAF9F6",
                  borderColor: "rgba(250,249,246,0.25)",
                  backgroundColor: "rgba(250,249,246,0.06)",
                }}
              >
                See the HVAC demo site →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SERVICE AREA ===== */}
      <section
        className="py-20 md:py-24 px-6 md:px-12 lg:px-20"
        style={{ backgroundColor: "rgba(13,27,42,0.03)" }}
      >
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="section-label mb-8">
              Built for HVAC Businesses in Indianapolis
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-navy leading-[1.1] max-w-3xl">
              Serving HVAC companies across Indianapolis and Indiana.
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p className="mt-6 text-lg font-light text-navy-62 max-w-2xl leading-relaxed">
              Whether your HVAC company serves Indianapolis, Carmel, Fishers,
              Greenwood, or anywhere across Indiana — we build websites that
              target your specific service areas and help local homeowners find
              you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="section-label mb-8">
              Common Questions About HVAC Website Design
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-navy leading-[1.1] max-w-3xl mb-12">
              Frequently asked questions.
            </h2>
          </ScrollReveal>

          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i}>
                <div
                  className="py-8"
                  style={{
                    borderBottom: "1px solid rgba(13,27,42,0.10)",
                  }}
                >
                  <h3 className="text-base md:text-lg font-semibold text-navy">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-sm font-light text-navy-62 leading-relaxed max-w-3xl">
                    {faq.answer}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section
        className="py-20 md:py-24 px-6 md:px-12 lg:px-20 bg-navy"
        id="quote"
      >
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <p
              className="text-[11px] font-medium tracking-[0.22em] uppercase mb-8"
              style={{ color: "rgba(250,249,246,0.30)" }}
            >
              Ready to get started?
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2
              className="text-3xl md:text-5xl font-bold leading-[1.1] max-w-3xl mx-auto"
              style={{ color: "rgba(250,249,246,0.85)" }}
            >
              Get a professional HVAC website that works as hard as you do.
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p
              className="mt-6 text-lg font-light max-w-xl mx-auto leading-relaxed"
              style={{ color: "rgba(250,249,246,0.65)" }}
            >
              Tell us about your HVAC business and we will put together a free,
              no-pressure quote for a website built specifically for your
              company.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-block px-8 py-3.5 text-sm font-medium rounded-lg transition-all duration-300 text-center"
                style={{
                  backgroundColor: "#FAF9F6",
                  color: "#0D1B2A",
                }}
              >
                Get a Free HVAC Website Quote
              </Link>
              <Link
                href="/demos/hvac"
                className="inline-block px-8 py-3.5 text-sm font-medium rounded-lg border transition-all duration-300 text-center"
                style={{
                  color: "rgba(250,249,246,0.85)",
                  borderColor: "rgba(250,249,246,0.20)",
                }}
              >
                See the HVAC demo site →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
