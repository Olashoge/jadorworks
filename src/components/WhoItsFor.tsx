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
            Local service businesses ready to grow.
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
          <div className="grid grid-cols-2 md:grid-cols-4 rounded-xl overflow-hidden bg-cream" style={{ border: "1px solid rgba(13,27,42,0.10)" }}>
            {businessTypes.map((biz, i) => {
              // 2-col mobile: last row is items 6,7. 4-col desktop: last row is items 4-7.
              const isLastRowMobile = i >= 6;
              const isLastRowDesktop = i >= 4;
              const isRightColMobile = i % 2 === 1;
              const isRightColDesktop = (i + 1) % 4 === 0;

              return (
                <div
                  key={biz.name}
                  className={[
                    "p-6 md:p-8",
                    // Bottom border: show on mobile unless last row, show on desktop unless last row
                    !isLastRowMobile ? "border-b border-b-[rgba(13,27,42,0.10)]" : "",
                    isLastRowMobile && !isLastRowDesktop ? "md:border-b md:border-b-[rgba(13,27,42,0.10)]" : "",
                    isLastRowDesktop && !isLastRowMobile ? "border-b-0 md:border-b-0" : "",
                    // Right border: show on mobile unless right col, show on desktop unless right col
                    !isRightColMobile ? "border-r border-r-[rgba(13,27,42,0.10)]" : "",
                    isRightColMobile && !isRightColDesktop ? "border-r-0 md:border-r md:border-r-[rgba(13,27,42,0.10)]" : "",
                  ].filter(Boolean).join(" ")}
                >
                  <biz.Icon className="w-6 h-6 text-navy-45 mb-3" />
                  <p className="text-sm font-medium text-navy">{biz.name}</p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
