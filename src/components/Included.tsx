import { ScrollReveal } from "./ScrollReveal";
import { ComputerIcon, GlobeIcon, MagnifyingGlassIcon, ShieldCheckIcon } from "./Icons";

const services = [
  {
    title: "Professional Website",
    description: "Clean, mobile-friendly, fast-loading, and built to turn visitors into calls or inquiries.",
    Icon: ComputerIcon,
  },
  {
    title: "Google Business Profile Support",
    description: "Setup or cleanup so your business is easier to find and trust on Google Maps and Search.",
    Icon: GlobeIcon,
  },
  {
    title: "Local SEO Foundation",
    description: "Page structure and setup designed to support visibility for the services you offer in your area.",
    Icon: MagnifyingGlassIcon,
  },
  {
    title: "Ongoing Support",
    description: "Hosting, maintenance, updates, and monitoring so the site does not get neglected after launch.",
    Icon: ShieldCheckIcon,
  },
];

export function Included() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12 lg:px-20" id="included">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="section-label mb-8">What&apos;s Included</p>
        </ScrollReveal>

        {/* Split layout */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-navy leading-[1.1] max-w-xl">
              Everything you need to get found online.
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-sm font-light text-navy-62 md:text-right md:max-w-xs md:mt-4">
              Starter packages · Growth packages · Custom quotes for larger
              businesses
            </p>
          </ScrollReveal>
        </div>

        {/* Service Grid */}
        <ScrollReveal>
          <div className="grid md:grid-cols-2 rounded-xl overflow-hidden" style={{ border: "1px solid rgba(13,27,42,0.10)" }}>
            {services.map((service, i) => (
              <div
                key={service.title}
                className="p-8 md:p-10"
                style={{
                  borderBottom: i < 2 ? "1px solid rgba(13,27,42,0.10)" : "none",
                  borderRight: i % 2 === 0 ? "1px solid rgba(13,27,42,0.10)" : "none",
                }}
              >
                <service.Icon className="w-7 h-7 text-navy-45" />
                <h3 className="mt-4 text-base font-semibold text-navy">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm font-light text-navy-62 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
