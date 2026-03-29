import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

const services = [
  {
    title: "HVAC Website Design",
    href: "/services/hvac-website-design",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Remodeling Website Design",
    href: "/services/remodeling-website-design",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
  },
  {
    title: "Landscaping Website Design",
    href: "/services/landscaping-website-design",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5">
        <path d="M12 22V8" />
        <path d="M5 12s2-5 7-5 7 5 7 5" />
        <path d="M7 17s1.5-3 5-3 5 3 5 3" />
        <path d="M2 22h20" />
      </svg>
    ),
  },
  {
    title: "Home Care Website Design",
    href: "/services/home-care-website-design",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Google Business Profile Setup",
    href: "/services/gbp-setup",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Local SEO",
    href: "/services/local-seo",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
];

export function ServicesPathway() {
  return (
    <section
      className="py-20 md:py-24 px-6 md:px-12 lg:px-20"
      id="services"
      style={{ backgroundColor: "#0D1B2A" }}
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <p className="section-label mb-4" style={{ color: "rgba(250,249,246,0.45)" }}>
                Our Services
              </p>
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.1]"
                style={{ color: "rgba(250,249,246,0.85)" }}
              >
                Website design, GBP setup, and local SEO for home service businesses.
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm font-medium underline-offset-4 hover:underline transition-colors flex-shrink-0"
              style={{ color: "rgba(250,249,246,0.55)" }}
            >
              View all services →
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <ScrollReveal key={service.href}>
              <Link
                href={service.href}
                className="group flex items-center gap-4 p-5 transition-all duration-200 hover:translate-x-1"
                style={{
                  border: "1px solid rgba(250,249,246,0.08)",
                  backgroundColor: "rgba(250,249,246,0.04)",
                }}
              >
                <span
                  className="flex-shrink-0"
                  style={{ color: "rgba(250,249,246,0.35)" }}
                >
                  {service.icon}
                </span>
                <span
                  className="text-[14px] font-medium group-hover:underline underline-offset-4"
                  style={{ color: "rgba(250,249,246,0.75)" }}
                >
                  {service.title}
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
