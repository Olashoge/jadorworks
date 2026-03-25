const steps = [
  {
    number: "01",
    title: "Book a Free Consultation",
    description:
      "Tell us about your business, your services, and what you need.",
  },
  {
    number: "02",
    title: "We Build Your Site",
    description:
      "We create your website, organize your core information, and set up the right foundation for search and visibility.",
  },
  {
    number: "03",
    title: "Review and Launch",
    description:
      "You review the site, request any final adjustments, and approve the launch.",
  },
  {
    number: "04",
    title: "Stay Supported",
    description:
      "We keep your site maintained, updated, and running smoothly after it goes live.",
  },
];

export function Process() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Headline */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            How it works
          </h2>
          <p className="mt-4 text-lg text-slate/70">
            From first call to live site in as little as two weeks.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-px bg-gray-200 -translate-x-4" />
              )}
              <div className="text-3xl font-bold text-gold/30 mb-3">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm text-slate/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline Note */}
        <p className="mt-12 text-center text-sm text-slate/50">
          Most Starter sites can launch in 1–2 weeks once content is received.
          Growth sites typically launch in 2–3 weeks.
        </p>
      </div>
    </section>
  );
}
