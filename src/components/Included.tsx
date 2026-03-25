const services = [
  {
    title: "Professional Website",
    description:
      "Clean, mobile-friendly, fast-loading, and built to turn visitors into calls or inquiries.",
    icon: "💻",
  },
  {
    title: "Google Business Profile Support",
    description:
      "Setup or cleanup so your business is easier to find and trust.",
    icon: "📍",
  },
  {
    title: "Local SEO Foundation",
    description:
      "Page structure and setup designed to support visibility for the services you offer in your area.",
    icon: "🔎",
  },
  {
    title: "Ongoing Support",
    description:
      "Hosting, maintenance, updates, and monitoring so the site does not get neglected after launch.",
    icon: "🛡️",
  },
];

export function Included() {
  return (
    <section className="py-20 px-6 bg-white" id="included">
      <div className="max-w-5xl mx-auto">
        {/* Headline */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            Everything you need to get found online.
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-xl border border-gray-100"
            >
              <span className="text-2xl">{service.icon}</span>
              <h3 className="mt-3 text-lg font-semibold text-navy">
                {service.title}
              </h3>
              <p className="mt-2 text-slate/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Packages Line */}
        <p className="mt-10 text-center text-slate/60 text-sm">
          Starter packages available · Growth packages available · Custom quotes
          for larger businesses
        </p>
      </div>
    </section>
  );
}
