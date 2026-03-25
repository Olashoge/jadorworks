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
    highlight: true,
  },
];

export function Process() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
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
        <ScrollReveal className="mt-16">
          <div className="grid md:grid-cols-4 border border-slate/10 rounded-xl overflow-hidden">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`p-8 md:p-8 border-b md:border-b-0 md:border-r border-slate/10 last:border-r-0 last:border-b-0 ${
                  step.highlight ? "bg-navy text-white" : ""
                }`}
              >
                <p
                  className={`text-xs font-medium tracking-[0.15em] ${
                    step.highlight ? "text-white/40" : "text-slate/30"
                  }`}
                >
                  {step.number}
                </p>
                <h3
                  className={`mt-4 text-base font-semibold ${
                    step.highlight ? "text-white" : "text-navy"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`mt-2 text-sm font-light leading-relaxed ${
                    step.highlight ? "text-white/50" : "text-slate/50"
                  }`}
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
