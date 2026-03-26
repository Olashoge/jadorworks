import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

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
  },
  {
    title: "Remodeling & Home Improvement",
    business: "Cornerstone Renovations",
    description:
      "Showcase renovation work with a project gallery, before/after highlights, and customer inquiry form.",
    slug: "remodeling",
    color: "#2C2C2C",
    accent: "#B8875A",
    status: "Coming Soon",
  },
  {
    title: "Landscaping & Lawn Care",
    business: "GreenLine Landscaping",
    description:
      "Highlight outdoor projects with seasonal services, a portfolio gallery, and easy quote request.",
    slug: "landscaping",
    color: "#2D5A3D",
    accent: "#8B6F47",
    status: "Coming Soon",
  },
  {
    title: "Home Care & Senior Services",
    business: "Graceful Living Home Care",
    description:
      "A warm, trustworthy site for home care services. Emphasizes family trust, caregiver quality, and personal care.",
    slug: "home-care",
    color: "#2A3D54",
    accent: "#7FA868",
    status: "Coming Soon",
  },
];

export function DemoSites() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12 lg:px-20" id="demos" style={{ backgroundColor: "rgba(13,27,42,0.03)" }}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="section-label mb-8">See What We Build</p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-navy leading-[1.1] max-w-4xl">
            Real examples. Clean, modern sites built for local service businesses.
          </h2>
        </ScrollReveal>

        {/* Demo Cards */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {demos.map((demo) => (
            <ScrollReveal key={demo.slug}>
              <Link
                href={
                  demo.status === "Live"
                    ? `/demos/${demo.slug}`
                    : "/demos"
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
                  className="aspect-[16/10] flex flex-col items-center justify-center relative"
                  style={{ backgroundColor: demo.color }}
                >
                  {/* Wireframe mockup */}
                  <div className="w-3/4 max-w-xs">
                    <div className="flex gap-1 mb-3">
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "rgba(255,255,255,0.20)" }}
                      />
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "rgba(255,255,255,0.20)" }}
                      />
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "rgba(255,255,255,0.20)" }}
                      />
                    </div>
                    <div
                      className="h-2 w-2/3 rounded mb-2"
                      style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                    />
                    <div
                      className="h-1.5 w-full rounded mb-1.5"
                      style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                    />
                    <div
                      className="h-1.5 w-4/5 rounded mb-3"
                      style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                    />
                    <div
                      className="h-6 w-24 rounded"
                      style={{ backgroundColor: demo.accent }}
                    />
                  </div>

                  {/* Status badge */}
                  <div
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor:
                        demo.status === "Live"
                          ? "rgba(255,255,255,0.15)"
                          : "rgba(255,255,255,0.08)",
                      color:
                        demo.status === "Live"
                          ? "rgba(255,255,255,0.85)"
                          : "rgba(255,255,255,0.35)",
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
                  <h3 className="mt-1.5 text-lg font-semibold text-navy">
                    {demo.business}
                  </h3>
                  <p className="mt-2 text-sm font-light text-navy-62 leading-relaxed">
                    {demo.description}
                  </p>
                  {demo.status === "Live" ? (
                    <span className="inline-block mt-4 text-sm font-medium text-navy group-hover:underline underline-offset-4">
                      Explore Demo →
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
