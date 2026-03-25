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
          <p className="mt-4 text-lg text-slate/80">
            From first call to live site in as little as two weeks.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative p-6 rounded-xl border border-gray-100 bg-ivory"
            >
              {/* Step number badge */}
              <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center mb-4">
                <span className="text-sm font-bold text-white">
                  {step.number}
                </span>
              </div>
              <h3 className="text-base font-semibold text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline Note */}
        <p className="mt-10 text-center text-sm text-slate/60">
          Most Starter sites launch in 1–2 weeks once content is received.
          Growth sites typically launch in 2–3 weeks.
        </p>
      </div>
    </section>
  );
}
