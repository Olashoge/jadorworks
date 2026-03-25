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
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="section-label mb-8">Built For</p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-navy leading-[1.1] max-w-3xl">
            Local service businesses ready to grow.
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <p className="mt-6 text-lg text-slate/50 font-light max-w-xl">
            Designed for businesses that depend on reputation, referrals, and
            local trust — but need a stronger online presence.
          </p>
        </ScrollReveal>

        {/* Business Types Grid */}
        <ScrollReveal className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 border border-slate/10 rounded-xl overflow-hidden">
            {businessTypes.map((biz, i) => (
              <div
                key={biz.name}
                className={`p-6 md:p-8 ${
                  i < 4 ? "border-b border-slate/10" : ""
                } ${(i + 1) % 4 !== 0 ? "border-r border-slate/10" : ""} ${
                  // Mobile: every other item gets right border
                  (i + 1) % 2 !== 0 ? "max-md:border-r" : "max-md:border-r-0"
                } ${i < 6 ? "max-md:border-b" : ""}`}
              >
                <biz.Icon className="w-6 h-6 text-slate/30 mb-3" />
                <p className="text-sm font-medium text-navy">{biz.name}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
