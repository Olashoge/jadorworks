import type { Metadata } from "next";
import Link from "next/link";
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
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
