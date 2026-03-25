import { ScrollReveal } from "./ScrollReveal";

const painPoints = [
  {
    title: "No website, no credibility",
    description: "Customers are less likely to trust a business they cannot verify online.",
  },
  {
    title: "No Google presence, less visibility",
    description: "If you do not show up clearly in search, you lose attention to competitors who do.",
  },
  {
    title: "A bad website hurts more than helps",
    description: "Broken pages, old information, and weak design create doubt in potential customers.",
  },
  {
    title: "No support means it goes stale",
    description: "A website needs updates, maintenance, and follow-through to stay useful after launch.",
  },
];

export function Problem() {
  return (
    <section className="bg-navy py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="section-label !text-cream/30 mb-8 after:!bg-cream/20">
            The Problem
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] max-w-3xl">
            Your customers are searching for you online — and finding nothing.
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <p className="mt-6 text-lg text-white/50 font-light max-w-xl">
            Trust starts before the first phone call. If customers can&apos;t
            find you online, they move on.
          </p>
        </ScrollReveal>

        {/* Pain Point Grid */}
        <ScrollReveal className="mt-16">
          <div className="grid md:grid-cols-2 border border-white/10 rounded-xl overflow-hidden">
            {painPoints.map((point, i) => (
              <div
                key={point.title}
                className={`p-8 md:p-10 ${
                  i < 2 ? "border-b border-white/10" : ""
                } ${i % 2 === 0 ? "md:border-r border-white/10" : ""}`}
              >
                <h3 className="text-base font-semibold text-white">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-white/40 font-light leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
