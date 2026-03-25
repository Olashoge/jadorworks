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
          <p className="section-label section-label-dark mb-8">
            The Problem
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-cream leading-[1.1] max-w-3xl">
            Your customers are searching for you online — and finding nothing.
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <p className="mt-6 text-lg font-light max-w-xl leading-relaxed" style={{ color: "rgba(250,249,246,0.45)" }}>
            Trust starts before the first phone call. If customers can&apos;t
            find you online, they move on.
          </p>
        </ScrollReveal>

        {/* Pain Point Grid */}
        <ScrollReveal className="mt-16">
          <div className="grid md:grid-cols-2 rounded-xl overflow-hidden" style={{ border: "1px solid rgba(250,249,246,0.08)" }}>
            {painPoints.map((point, i) => (
              <div
                key={point.title}
                className={`p-8 md:p-10`}
                style={{
                  backgroundColor: "rgba(250,249,246,0.04)",
                  borderBottom: i < 2 ? "1px solid rgba(250,249,246,0.08)" : "none",
                  borderRight: i % 2 === 0 ? "1px solid rgba(250,249,246,0.08)" : "none",
                }}
              >
                <h3 className="text-base font-semibold text-cream">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm font-light leading-relaxed" style={{ color: "rgba(250,249,246,0.45)" }}>
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
