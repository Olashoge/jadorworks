import { ScrollReveal } from "./ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Book a Free Consultation",
    description: "Tell us about your business, your services, and what you need.",
  },
  {
    number: "02",
    title: "We Build Your Site",
    description: "We create your website, organize your core information, and set up the right foundation for search and visibility.",
  },
  {
    number: "03",
    title: "Review and Launch",
    description: "You review the site, request any final adjustments, and approve the launch.",
  },
  {
    number: "04",
    title: "Stay Supported",
    description: "We keep your site maintained, updated, and running smoothly after it goes live.",
  },
];

export function Process() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12 lg:px-20" id="process" style={{ backgroundColor: "rgba(13,27,42,0.03)" }}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="section-label mb-8">The Process</p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-navy leading-[1.1] max-w-4xl">
            From first call to live site in as little as two weeks.
          </h2>
        </ScrollReveal>

        {/* Steps */}
        <ScrollReveal className="mt-12">
          <div className="grid md:grid-cols-4 rounded-xl overflow-hidden" style={{ border: "1px solid rgba(13,27,42,0.10)" }}>
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="p-8 bg-cream hover:bg-navy group transition-colors duration-300"
                style={{
                  borderRight: i < 3 ? "1px solid rgba(13,27,42,0.10)" : "none",
                }}
              >
                <p
                  className="text-xs font-medium tracking-[0.15em] text-navy-42 group-hover:text-cream-28 transition-colors duration-300"
                >
                  {step.number}
                </p>
                <h3
                  className="mt-4 text-base font-semibold text-navy group-hover:text-cream transition-colors duration-300"
                >
                  {step.title}
                </h3>
                <p
                  className="mt-2 text-sm font-light leading-relaxed text-navy-62 group-hover:text-cream-62 transition-colors duration-300"
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
