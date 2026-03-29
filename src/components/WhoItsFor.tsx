import { ScrollReveal } from "./ScrollReveal";
import {
  WrenchScrewdriverIcon,
  HomeIcon,
  HeartIcon,
  LeafIcon,
  SparklesIcon,
  BoltIcon,
  ScissorsIcon,
  BuildingStorefrontIcon,
} from "./Icons";

const businessTypes = [
  { name: "HVAC & Plumbing", Icon: WrenchScrewdriverIcon },
  { name: "Remodeling & Home Improvement", Icon: HomeIcon },
  { name: "Home Care & Senior Services", Icon: HeartIcon },
  { name: "Landscaping & Lawn Care", Icon: LeafIcon },
  { name: "Cleaning Services", Icon: SparklesIcon },
  { name: "Electrical & Handyman", Icon: BoltIcon },
  { name: "Salons & Barbershops", Icon: ScissorsIcon },
  { name: "Local Shops & Solo Operators", Icon: BuildingStorefrontIcon },
];

export function WhoItsFor() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12 lg:px-20" style={{ backgroundColor: "rgba(13,27,42,0.03)" }}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="section-label mb-8">Built For</p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-navy leading-[1.1] max-w-3xl">
            Website design for Indiana service businesses.
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <p className="mt-6 text-lg font-light text-navy-62 max-w-xl leading-relaxed">
            Designed for businesses that depend on reputation, referrals, and
            local trust — but need a stronger online presence.
          </p>
        </ScrollReveal>

        {/* Business Types Grid */}
        <ScrollReveal className="mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {businessTypes.map((biz) => (
              <div
                key={biz.name}
                className="group p-6 md:p-8 rounded-xl bg-cream transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-navy cursor-default"
                style={{ border: "1px solid rgba(13,27,42,0.10)" }}
              >
                <biz.Icon className="w-6 h-6 text-navy-45 group-hover:text-cream-62 transition-colors duration-300 mb-3" />
                <p className="text-sm font-medium text-navy group-hover:text-cream transition-colors duration-300">
                  {biz.name}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
