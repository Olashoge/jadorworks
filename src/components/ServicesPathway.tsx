import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

const services = [
  {
    title: "Website Design & Development",
    href: "/services/website-design",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Website Audit & Redesign",
    href: "/services/website-audit",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
        <path d="M5 5l2 2M19 5l-2 2" />
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
    title: "Local SEO & Search Visibility",
    href: "/services/local-seo",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    title: "Ongoing Maintenance & Support",
    href: "/services/ongoing-support",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5">
        <path d="M12 2l2 6h6l-5 3.5 2 6.5L12 14l-5 4 2-6.5L4 8h6z" />
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
                Website design, local SEO, and ongoing support for any local service business in Indiana.
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
                  style={{ color: "rgba(250,249,246,0.45)" }}
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
