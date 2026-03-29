import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Web Design Services for Local Businesses | JadorWorks Web Studio",
  description:
    "Professional website design, Google Business Profile setup, and local SEO services for home service businesses in Indianapolis and across Indiana. Everything you need to get found online.",
  openGraph: {
    title: "Web Design Services for Local Businesses | JadorWorks Web Studio",
    description:
      "Professional website design, Google Business Profile setup, and local SEO services for home service businesses in Indianapolis and across Indiana.",
    url: "https://jadorworks.com/services",
    siteName: "JadorWorks Web Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Web Design Services for Local Businesses — JadorWorks Web Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Services for Local Businesses | JadorWorks Web Studio",
    description:
      "Professional website design, Google Business Profile setup, and local SEO services for home service businesses in Indianapolis and across Indiana.",
    images: ["/og-image.png"],
  },
};

const services = [
  {
    title: "HVAC Website Design",
    tag: "Website Design",
    description:
      "A professional website built specifically for HVAC, heating, cooling, and plumbing businesses in Indianapolis. Designed to generate calls, build trust, and rank in local search.",
    href: "/services/hvac-website-design",
    linkText: "View HVAC website packages",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="w-5 h-5"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Google Business Profile Setup",
    tag: "GBP Setup",
    description:
      "Complete Google Business Profile setup and cleanup for Indiana small businesses. Get verified, optimized, and visible in Google Maps and local search results.",
    href: "/services/gbp-setup",
    linkText: "View GBP setup details",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="w-5 h-5"
      >
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Local SEO for Home Service Businesses",
    tag: "Local SEO",
    description:
      "A local SEO foundation built into your website from day one. On-page optimization, keyword targeting, and technical structure designed to help your business rank in Indiana.",
    href: "/services/local-seo",
    linkText: "View local SEO details",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="w-5 h-5"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    title: "Remodeling Website Design",
    tag: "Website Design",
    description:
      "Showcase your projects, earn trust from homeowners, and turn browsers into booked consultations with a website built specifically for remodeling contractors.",
    href: "/services/remodeling-website-design",
    linkText: "View remodeling website packages",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
  },
  {
    title: "Landscaping Website Design",
    tag: "Website Design",
    description:
      "A visual, mobile-friendly website for your landscaping company — designed to showcase your work, target your service area, and turn homeowners into paying clients.",
    href: "/services/landscaping-website-design",
    linkText: "View landscaping website packages",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="w-5 h-5"
      >
        <path d="M12 22V8" />
        <path d="M5 12s2-5 7-5 7 5 7 5" />
        <path d="M7 17s1.5-3 5-3 5 3 5 3" />
        <path d="M2 22h20" />
      </svg>
    ),
  },
  {
    title: "Home Care Website Design",
    tag: "Website Design",
    description:
      "A warm, trustworthy website for your home care business — built to earn the trust of families searching for care and make it easy for them to reach out.",
    href: "/services/home-care-website-design",
    linkText: "View home care website packages",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="w-5 h-5"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

const industries = [
  {
    title: "HVAC & Plumbing",
    business: "Summit Air & Plumbing",
    slug: "hvac",
    color: "#1B3A5C",
  },
  {
    title: "Remodeling",
    business: "Cornerstone Renovations",
    slug: "remodeling",
    color: "#2C2C2C",
  },
  {
    title: "Landscaping",
    business: "GreenLine Landscaping",
    slug: "landscaping",
    color: "#2D5A3D",
  },
  {
    title: "Home Care",
    business: "Graceful Living Home Care",
    slug: "home-care",
    color: "#2A3D54",
  },
];

const included = [
  {
    title: "Google Business Profile",
    description:
      "Setup or cleanup so your business shows up in Google Maps and local search with accurate info, photos, and reviews.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Local SEO Foundation",
    description:
      "On-page optimization, keyword targeting, meta tags, and technical structure built into every page from day one.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    title: "Ongoing Support",
    description:
      "Content updates, technical maintenance, and performance monitoring so your site stays fast, secure, and up to date.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

const steps = [
  {
    number: "01",
    title: "Free consultation",
    description:
      "We talk about your business, your goals, and what you need from a website. No commitments, no pressure.",
  },
  {
    number: "02",
    title: "Design and build",
    description:
      "We design and develop your website, set up your Google Business Profile, and build in local SEO from the start.",
  },
  {
    number: "03",
    title: "Launch and grow",
    description:
      "Your site goes live in 1-2 weeks. We handle ongoing updates, performance monitoring, and support.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div
        style={{
          paddingTop: 86,
          backgroundColor: "#EDEAE4",
          borderBottom: "1px solid rgba(13,27,42,0.10)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-3">
          <nav className="flex items-center gap-1.5 text-[11px]" style={{ color: "rgba(13,27,42,0.45)" }}>
            <Link
              href="/"
              className="hover:underline underline-offset-2"
              style={{ color: "rgba(13,27,42,0.45)" }}
            >
              Home
            </Link>
            <span>/</span>
            <span style={{ color: "rgba(13,27,42,0.62)" }}>Services</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section
        className="py-20 md:py-24 px-6 md:px-12 lg:px-20"
        style={{ backgroundColor: "#FAF9F6" }}
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p
                className="flex items-center gap-3 mb-6 text-[10px] font-semibold tracking-[0.22em] uppercase"
                style={{ color: "rgba(13,27,42,0.42)" }}
              >
                Our Services
                <span
                  className="block h-px flex-shrink-0"
                  style={{
                    width: 56,
                    maxWidth: 56,
                    backgroundColor: "rgba(13,27,42,0.18)",
                  }}
                />
              </p>
              <h1
                className="font-extrabold leading-[1.05] tracking-[-0.03em]"
                style={{
                  fontSize: "clamp(36px, 4.5vw, 58px)",
                  color: "#0D1B2A",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                }}
              >
                Everything a local business needs to get found online.
              </h1>
              <p
                className="mt-5 text-[17px] font-light leading-[1.7]"
                style={{ color: "rgba(13,27,42,0.62)" }}
              >
                Website design, Google Business Profile setup, and local SEO — built
                specifically for home service businesses in Indianapolis and across Indiana.
              </p>
              <div className="mt-8">
                <Link
                  href="/#contact"
                  className="text-sm font-bold tracking-[0.04em] uppercase px-8 py-4 transition-all duration-300 inline-block"
                  style={{
                    backgroundColor: "#0D1B2A",
                    color: "#FAF9F6",
                  }}
                >
                  Book a Free Consultation
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Cards */}
      <section
        className="pb-20 md:pb-24 px-6 md:px-12 lg:px-20"
        style={{ backgroundColor: "#FAF9F6" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <ScrollReveal key={service.href}>
                <Link
                  href={service.href}
                  className="group block h-full transition-all duration-300 hover:-translate-y-1"
                  style={{
                    border: "1px solid rgba(13,27,42,0.10)",
                    backgroundColor: "#FAF9F6",
                  }}
                >
                  <div className="p-8 flex flex-col h-full">
                    {/* Number + Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className="text-[11px] font-bold tracking-[0.18em]"
                        style={{ color: "rgba(13,27,42,0.28)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span style={{ color: "rgba(13,27,42,0.45)" }}>
                        {service.icon}
                      </span>
                    </div>

                    {/* Tag */}
                    <p
                      className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-3"
                      style={{ color: "rgba(13,27,42,0.42)" }}
                    >
                      {service.tag}
                    </p>

                    {/* Title */}
                    <h2
                      className="text-[18px] font-bold tracking-[-0.01em] mb-3"
                      style={{ color: "#0D1B2A" }}
                    >
                      {service.title}
                    </h2>

                    {/* Description */}
                    <p
                      className="text-[13px] font-light leading-[1.7] mb-6 flex-grow"
                      style={{ color: "rgba(13,27,42,0.62)" }}
                    >
                      {service.description}
                    </p>

                    {/* Link */}
                    <span
                      className="text-sm font-bold tracking-[0.04em] uppercase group-hover:underline underline-offset-4"
                      style={{ color: "#0D1B2A" }}
                    >
                      {service.linkText} →
                    </span>
                  </div>

                  {/* Bottom accent bar */}
                  <div
                    className="h-[3px] w-0 group-hover:w-full transition-all duration-500"
                    style={{ backgroundColor: "#0D1B2A" }}
                  />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Always Included */}
      <section
        className="py-20 md:py-24 px-6 md:px-12 lg:px-20"
        style={{ backgroundColor: "#EDEAE4" }}
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="max-w-2xl mb-14">
              <p
                className="flex items-center gap-3 mb-6 text-[10px] font-semibold tracking-[0.22em] uppercase"
                style={{ color: "rgba(13,27,42,0.42)" }}
              >
                Always Included
                <span
                  className="block h-px flex-shrink-0"
                  style={{
                    width: 56,
                    maxWidth: 56,
                    backgroundColor: "rgba(13,27,42,0.18)",
                  }}
                />
              </p>
              <h2
                className="font-extrabold leading-[1.05] tracking-[-0.03em]"
                style={{
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  color: "#0D1B2A",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                }}
              >
                Every website comes with the full package.
              </h2>
              <p
                className="mt-5 text-[17px] font-light leading-[1.7]"
                style={{ color: "rgba(13,27,42,0.62)" }}
              >
                No add-ons, no surprise fees. Google Business Profile setup, local SEO, and ongoing support are built into every project.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {included.map((item, i) => (
              <ScrollReveal key={item.title}>
                <div
                  className="p-8 h-full"
                  style={{
                    backgroundColor: "#FAF9F6",
                    border: "1px solid rgba(13,27,42,0.10)",
                  }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="text-[11px] font-bold tracking-[0.18em]"
                      style={{ color: "rgba(13,27,42,0.28)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span style={{ color: "rgba(13,27,42,0.45)" }}>
                      {item.icon}
                    </span>
                  </div>
                  <h3
                    className="text-[18px] font-bold tracking-[-0.01em] mb-3"
                    style={{ color: "#0D1B2A" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[13px] font-light leading-[1.7]"
                    style={{ color: "rgba(13,27,42,0.62)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section
        className="py-20 md:py-24 px-6 md:px-12 lg:px-20"
        style={{ backgroundColor: "#FAF9F6" }}
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="max-w-2xl mb-14">
              <p
                className="flex items-center gap-3 mb-6 text-[10px] font-semibold tracking-[0.22em] uppercase"
                style={{ color: "rgba(13,27,42,0.42)" }}
              >
                Industries We Serve
                <span
                  className="block h-px flex-shrink-0"
                  style={{
                    width: 56,
                    maxWidth: 56,
                    backgroundColor: "rgba(13,27,42,0.18)",
                  }}
                />
              </p>
              <h2
                className="font-extrabold leading-[1.05] tracking-[-0.03em]"
                style={{
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  color: "#0D1B2A",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                }}
              >
                Built for the businesses that keep homes running.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((industry) => (
              <ScrollReveal key={industry.slug}>
                <Link
                  href={`/demos/${industry.slug}`}
                  className="group block overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{ border: "1px solid rgba(13,27,42,0.10)" }}
                >
                  <div
                    className="aspect-[16/10] relative overflow-hidden"
                    style={{ backgroundColor: industry.color }}
                  >
                    <Image
                      src={`/images/demos/${industry.slug}-preview.jpg`}
                      alt={`${industry.business} website demo — ${industry.title} website example`}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-5" style={{ backgroundColor: "#FAF9F6" }}>
                    <p
                      className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-1.5"
                      style={{ color: "rgba(13,27,42,0.42)" }}
                    >
                      {industry.title}
                    </p>
                    <p
                      className="text-[15px] font-bold tracking-[-0.01em]"
                      style={{ color: "#0D1B2A" }}
                    >
                      {industry.business}
                    </p>
                    <span
                      className="inline-block mt-3 text-[12px] font-semibold tracking-[0.04em] uppercase group-hover:underline underline-offset-4"
                      style={{ color: "#0D1B2A" }}
                    >
                      View demo →
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        className="py-20 md:py-24 px-6 md:px-12 lg:px-20"
        style={{ backgroundColor: "rgba(13,27,42,0.03)" }}
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="max-w-2xl mb-14">
              <p
                className="flex items-center gap-3 mb-6 text-[10px] font-semibold tracking-[0.22em] uppercase"
                style={{ color: "rgba(13,27,42,0.42)" }}
              >
                How It Works
                <span
                  className="block h-px flex-shrink-0"
                  style={{
                    width: 56,
                    maxWidth: 56,
                    backgroundColor: "rgba(13,27,42,0.18)",
                  }}
                />
              </p>
              <h2
                className="font-extrabold leading-[1.05] tracking-[-0.03em]"
                style={{
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  color: "#0D1B2A",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                }}
              >
                Three steps to a website that works for your business.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {steps.map((step) => (
              <ScrollReveal key={step.number}>
                <div
                  className="p-8 h-full"
                  style={{
                    backgroundColor: "#FAF9F6",
                    border: "1px solid rgba(13,27,42,0.10)",
                  }}
                >
                  <span
                    className="text-[32px] font-extrabold tracking-[-0.03em] block mb-6"
                    style={{ color: "rgba(13,27,42,0.10)" }}
                  >
                    {step.number}
                  </span>
                  <h3
                    className="text-[18px] font-bold tracking-[-0.01em] mb-3"
                    style={{ color: "#0D1B2A" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[13px] font-light leading-[1.7]"
                    style={{ color: "rgba(13,27,42,0.62)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="py-20 md:py-24 px-6 md:px-12 lg:px-20"
        style={{
          backgroundColor: "#0D1B2A",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p
              className="flex items-center justify-center gap-3 mb-6 text-[10px] font-semibold tracking-[0.22em] uppercase"
              style={{ color: "rgba(250,249,246,0.45)" }}
            >
              Get Started
              <span
                className="block h-px flex-shrink-0"
                style={{
                  width: 56,
                  maxWidth: 56,
                  backgroundColor: "rgba(250,249,246,0.18)",
                }}
              />
            </p>
            <h2
              className="font-extrabold leading-[1.05] tracking-[-0.03em]"
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                color: "rgba(250,249,246,0.85)",
                fontFamily: "var(--font-inter), Inter, sans-serif",
              }}
            >
              Ready to get your business online?
            </h2>
            <p
              className="mt-5 text-[17px] font-light leading-[1.7] max-w-xl mx-auto"
              style={{ color: "rgba(250,249,246,0.55)" }}
            >
              Every project starts with a free consultation. No commitments, no pressure — just a conversation about what your business needs.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="text-sm font-bold tracking-[0.04em] uppercase px-8 py-4 transition-all duration-300"
                style={{
                  backgroundColor: "#FAF9F6",
                  color: "#0D1B2A",
                }}
              >
                Book a Free Consultation
              </Link>
              <Link
                href="/demos"
                className="text-sm font-bold tracking-[0.04em] uppercase px-8 py-4 transition-all duration-300"
                style={{
                  backgroundColor: "transparent",
                  color: "rgba(250,249,246,0.85)",
                  border: "1px solid rgba(250,249,246,0.20)",
                }}
              >
                View Website Examples
              </Link>
            </div>
            <p
              className="mt-8 text-[12px] font-light"
              style={{ color: "rgba(250,249,246,0.25)" }}
            >
              Free consultation. No contracts required. Cancel anytime.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
