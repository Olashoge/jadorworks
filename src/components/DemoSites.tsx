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
                href={`/demos#${demo.slug}`}
                className="group block rounded-xl overflow-hidden bg-cream transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ border: "1px solid rgba(13,27,42,0.10)" }}
              >
                {/* Dark navy wireframe mockup */}
                <div className="aspect-[16/10] bg-navy relative overflow-hidden">
                  {/* Browser chrome bar */}
                  <div className="flex items-center gap-1.5 px-4 pt-3 pb-2">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "rgba(250,249,246,0.15)" }} />
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "rgba(250,249,246,0.15)" }} />
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "rgba(250,249,246,0.15)" }} />
                    <span className="ml-3 h-4 rounded-sm flex-1 max-w-[140px]" style={{ backgroundColor: "rgba(250,249,246,0.07)" }} />
                  </div>
                  {/* Wireframe content lines */}
                  <div className="px-4 pt-3 space-y-2">
                    <div className="h-3 rounded-sm w-3/4" style={{ backgroundColor: "rgba(250,249,246,0.10)" }} />
                    <div className="h-3 rounded-sm w-1/2" style={{ backgroundColor: "rgba(250,249,246,0.07)" }} />
                    <div className="h-2 rounded-sm w-5/6 mt-3" style={{ backgroundColor: "rgba(250,249,246,0.05)" }} />
                    <div className="h-2 rounded-sm w-2/3" style={{ backgroundColor: "rgba(250,249,246,0.05)" }} />
                    <div className="h-6 rounded-md w-1/3 mt-3" style={{ backgroundColor: "rgba(250,249,246,0.08)" }} />
                  </div>
                  {/* Coming soon label */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-medium tracking-[0.15em] uppercase text-cream-28">
                      Demo in Progress
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-base font-semibold text-navy group-hover:underline underline-offset-4 transition-all">
                    {demo.title}
                  </h3>
                  <p className="mt-1 text-sm font-light text-navy-62">
                    {demo.description}
                  </p>
                  <span className="inline-block mt-4 text-sm font-normal text-navy">
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
