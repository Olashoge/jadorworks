import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Small Business Website Examples | JadorWorks Web Studio",
  description:
    "Real website examples built for HVAC, remodeling, landscaping, and home care businesses. See how JadorWorks Web Studio designs professional sites for local service companies.",
  openGraph: {
    title: "Small Business Website Examples | JadorWorks Web Studio",
    description:
      "Real website examples built for HVAC, remodeling, landscaping, and home care businesses. See how JadorWorks Web Studio designs professional sites for local service companies.",
    url: "https://jadorworks.com/demos",
    siteName: "JadorWorks Web Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Small Business Website Examples — JadorWorks Web Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Business Website Examples | JadorWorks Web Studio",
    description:
      "Real website examples built for HVAC, remodeling, landscaping, and home care businesses. See how JadorWorks Web Studio designs professional sites for local service companies.",
    images: ["/og-image.png"],
  },
};

const demos = [
  {
    title: "HVAC & Plumbing",
    business: "Summit Air & Plumbing",
    description:
      "A professional site for heating, cooling, and plumbing services. Features emergency contact, service area coverage, and trust indicators.",
    slug: "hvac",
    color: "#1B3A5C",
    accent: "#1B6CA8",
    status: "Live",
    linkText: "Explore the HVAC website demo",
  },
  {
    title: "Remodeling & Home Improvement",
    business: "Cornerstone Renovations",
    description:
      "Showcase renovation work with a project gallery, before/after highlights, and customer inquiry form.",
    slug: "remodeling",
    color: "#2C2C2C",
    accent: "#B8875A",
    status: "Live",
    linkText: "Explore the remodeling website demo",
  },
  {
    title: "Landscaping & Lawn Care",
    business: "GreenLine Landscaping",
    description:
      "Highlight outdoor projects with seasonal services, a portfolio gallery, and easy quote request.",
    slug: "landscaping",
    color: "#2D5A3D",
    accent: "#8B6F47",
    status: "Live",
    linkText: "Explore the landscaping website demo",
  },
  {
    title: "Home Care & Senior Services",
    business: "Graceful Living Home Care",
    description:
      "A warm, trustworthy site for home care services. Emphasizes family trust, caregiver quality, and personal care.",
    slug: "home-care",
    color: "#2A3D54",
    accent: "#7FA868",
    status: "Live",
    linkText: "Explore the home care website demo",
  },
];

export default function DemosPage() {
  return (
    <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-14">
            <p className="section-label mb-8">Demo Sites</p>
            <h1 className="text-3xl md:text-5xl font-bold text-navy leading-[1.1]">
              Small business website examples.
            </h1>
            <p className="mt-4 text-base md:text-lg font-light text-navy-62 leading-relaxed">
              Real website demos built for local service businesses. Each site
              is fully functional and designed for a specific industry — HVAC,
              remodeling, landscaping, and home care.
            </p>
          </div>
        </ScrollReveal>

        {/* Demo Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {demos.map((demo) => (
            <ScrollReveal key={demo.slug}>
              <Link
                href={
                  demo.status === "Live"
                    ? `/demos/${demo.slug}`
                    : "#"
                }
                className={`group block rounded-xl overflow-hidden transition-all duration-300 ${
                  demo.status === "Live"
                    ? "hover:-translate-y-1 hover:shadow-lg"
                    : "opacity-80"
                }`}
                style={{
                  border: "1px solid rgba(13,27,42,0.10)",
                }}
              >
                {/* Preview area */}
                <div
                  className="aspect-[16/10] relative overflow-hidden"
                  style={{ backgroundColor: demo.color }}
                >
                  <Image
                    src={`/images/demos/${demo.slug}-preview.jpg`}
                    alt={`${demo.business} website demo — ${demo.title} website example built by JadorWorks`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Status badge */}
                  <div
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium z-10"
                    style={{
                      backgroundColor:
                        demo.status === "Live"
                          ? "rgba(255,255,255,0.15)"
                          : "rgba(255,255,255,0.08)",
                      color:
                        demo.status === "Live"
                          ? "rgba(255,255,255,0.85)"
                          : "rgba(255,255,255,0.35)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {demo.status}
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6 bg-cream">
                  <p className="text-xs font-medium text-navy-42 tracking-wide uppercase">
                    {demo.title}
                  </p>
                  <h2 className="mt-1.5 text-lg font-semibold text-navy">
                    {demo.business}
                  </h2>
                  <p className="mt-2 text-sm font-light text-navy-62 leading-relaxed">
                    {demo.description}
                  </p>
                  {demo.status === "Live" ? (
                    <span className="inline-block mt-4 text-sm font-medium text-navy group-hover:underline underline-offset-4">
                      {demo.linkText} →
                    </span>
                  ) : (
                    <span
                      className="inline-block mt-4 text-sm font-light"
                      style={{ color: "rgba(13,27,42,0.30)" }}
                    >
                      Coming soon
                    </span>
                  )}
                </div>
              </Link>

              {/* Service page links */}
              {demo.slug === "hvac" && (
                <Link
                  href="/services/hvac-website-design"
                  className="inline-block mt-3 text-xs font-medium text-navy-42 hover:text-navy hover:underline underline-offset-4 transition-colors duration-200"
                >
                  See HVAC website packages →
                </Link>
              )}
              {demo.slug === "remodeling" && (
                <Link
                  href="/services/remodeling-website-design"
                  className="inline-block mt-3 text-xs font-medium text-navy-42 hover:text-navy hover:underline underline-offset-4 transition-colors duration-200"
                >
                  See remodeling website packages →
                </Link>
              )}
              {demo.slug === "landscaping" && (
                <Link
                  href="/services/landscaping-website-design"
                  className="inline-block mt-3 text-xs font-medium text-navy-42 hover:text-navy hover:underline underline-offset-4 transition-colors duration-200"
                >
                  See landscaping website packages →
                </Link>
              )}
              {demo.slug === "home-care" && (
                <Link
                  href="/services/home-care-website-design"
                  className="inline-block mt-3 text-xs font-medium text-navy-42 hover:text-navy hover:underline underline-offset-4 transition-colors duration-200"
                >
                  See home care website packages →
                </Link>
              )}
            </ScrollReveal>
          ))}
        </div>

        {/* Back CTA */}
        <ScrollReveal>
          <div className="mt-14 text-center">
            <Link
              href="/#contact"
              className="inline-block px-8 py-3.5 bg-navy text-cream font-medium rounded-lg hover:bg-cream hover:text-navy border border-navy transition-all duration-300"
            >
              Book a Free Website Consultation
            </Link>
            <p className="mt-4 text-sm font-light text-navy-42">
              Want something similar for your business? Let&apos;s talk.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
