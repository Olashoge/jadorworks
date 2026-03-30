"use client";

import { ScrollReveal } from "./ScrollReveal";

const packages = [
  {
    name: "Starter",
    best: "Best for businesses that need a professional online presence quickly.",
    features: [
      "Core website (up to 5 pages)",
      "Google Business Profile setup or cleanup",
      "Local SEO foundation",
      "Mobile-first, fast-loading design",
      "Launch support and handoff",
    ],
  },
  {
    name: "Growth",
    best: "Best for businesses that want stronger visibility and more lead generation.",
    features: [
      "Everything in Starter",
      "Expanded service and location pages",
      "Enhanced Google profile optimization",
      "Deeper content structure for search",
      "Priority support and refinement",
    ],
    highlighted: true,
  },
  {
    name: "Custom",
    best: "Best for larger businesses or more specific needs.",
    features: [
      "Custom scope and strategy",
      "Expanded page structure",
      "Advanced integrations and features",
      "Tailored build based on your business",
      "Dedicated project support",
    ],
  },
];

export function Packages() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12 lg:px-20" id="packages">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="section-label mb-8">Packages</p>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-navy leading-[1.1] max-w-xl">
              Simple options, no guesswork.
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-sm font-light text-navy-62 md:text-right md:max-w-xs">
              Every package includes a professional website, Google support, and
              a foundation built for local visibility.
            </p>
          </ScrollReveal>
        </div>

        {/* Package Cards */}
        <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-5">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`group p-8 md:p-10 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default ${
                  pkg.highlighted ? "bg-navy" : "bg-cream"
                }`}
                style={{
                  border: `1px solid ${
                    pkg.highlighted
                      ? "rgba(250,249,246,0.12)"
                      : "rgba(13,27,42,0.10)"
                  }`,
                }}
              >
                <p
                  className={`text-xs font-bold tracking-[0.15em] uppercase ${
                    pkg.highlighted ? "text-cream-45" : "text-navy-42"
                  }`}
                >
                  {pkg.name}
                </p>
                <p
                  className={`mt-4 text-lg font-semibold leading-snug ${
                    pkg.highlighted ? "text-cream" : "text-navy"
                  }`}
                >
                  {pkg.best}
                </p>
                <div
                  className="my-6 h-px"
                  style={{
                    backgroundColor: pkg.highlighted
                      ? "rgba(250,249,246,0.10)"
                      : "rgba(13,27,42,0.08)",
                  }}
                />
                <ul className="space-y-3.5">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className={`text-sm leading-relaxed flex items-start gap-2.5 ${
                        pkg.highlighted
                          ? "text-cream font-light"
                          : "text-navy-62 font-light"
                      }`}
                      style={
                        pkg.highlighted
                          ? { color: "rgba(250,249,246,0.78)" }
                          : undefined
                      }
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{
                          backgroundColor: pkg.highlighted
                            ? "rgba(250,249,246,0.40)"
                            : "rgba(13,27,42,0.42)",
                        }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p
            className="mt-8 text-sm font-light text-center"
            style={{ color: "rgba(13,27,42,0.50)" }}
          >
            Monthly care plans available for hosting, updates, and ongoing
            support.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
