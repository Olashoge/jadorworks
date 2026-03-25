import { ComputerIcon, GlobeIcon, MagnifyingGlassIcon, ShieldCheckIcon } from "./Icons";

const services = [
  {
    title: "Professional Website",
    description:
      "Clean, mobile-friendly, fast-loading, and built to turn visitors into calls or inquiries.",
    Icon: ComputerIcon,
  },
  {
    title: "Google Business Profile Support",
    description:
      "Setup or cleanup so your business is easier to find and trust.",
    Icon: GlobeIcon,
  },
  {
    title: "Local SEO Foundation",
    description:
      "Page structure and setup designed to support visibility for the services you offer in your area.",
    Icon: MagnifyingGlassIcon,
  },
  {
    title: "Ongoing Support",
    description:
      "Hosting, maintenance, updates, and monitoring so the site does not get neglected after launch.",
    Icon: ShieldCheckIcon,
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
              <service.Icon className="w-7 h-7 text-navy/60" />
              <h3 className="mt-3 text-lg font-semibold text-navy">
                {service.title}
              </h3>
              <p className="mt-2 text-slate/80 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Packages Line */}
        <p className="mt-10 text-center text-slate/70 text-sm">
          Starter packages available · Growth packages available · Custom quotes
          for larger businesses
        </p>
      </div>
    </section>
  );
}
