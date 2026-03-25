import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

const demos = [
  {
    title: "HVAC / Plumbing Company",
    description: "A professional site for heating, cooling, and plumbing services.",
    slug: "hvac-plumbing",
  },
  {
    title: "Remodeling / Home Improvement",
    description: "Showcase renovation work with a clean, trustworthy design.",
    slug: "remodeling",
  },
  {
    title: "Home Care",
    description: "A warm, reliable site for home care and senior services.",
    slug: "home-care",
  },
  {
    title: "Landscaping Company",
    description: "Highlight outdoor projects with a fresh, modern layout.",
    slug: "landscaping",
  },
];

export function DemoSites() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20" id="demos">
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
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {demos.map((demo) => (
            <ScrollReveal key={demo.slug}>
              <Link
                href={`/demos#${demo.slug}`}
                className="group block border border-slate/10 rounded-xl overflow-hidden hover:border-slate/25 transition-all duration-300"
              >
                {/* Thumbnail placeholder */}
                <div className="aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                  <span className="text-xs tracking-[0.15em] uppercase text-slate/30 font-medium">
                    Demo in Progress
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-base font-semibold text-navy group-hover:underline underline-offset-4 transition-all">
                    {demo.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate/50 font-light">
                    {demo.description}
                  </p>
                  <span className="inline-block mt-4 text-sm font-medium text-navy">
                    Preview Demo →
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
