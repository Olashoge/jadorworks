import type { Metadata } from "next";
import Link from "next/link";
import { SummitHVAC } from "@/components/demo/SummitHVAC";
import { ExploreMoreDemos } from "@/components/demo/ExploreMoreDemos";

export const metadata: Metadata = {
  title: "HVAC Website Demo for Indianapolis Businesses | JadorWorks",
  description:
    "A modern HVAC and plumbing website demo built by JadorWorks Web Studio. See how local service businesses build trust, showcase expertise, and generate leads online.",
};

export default function HVACDemoPage() {
  return (
    <>
      <SummitHVAC />

      {/* CTA — Link to HVAC service page */}
      <section
        className="py-14 px-6 md:px-12 lg:px-20"
        style={{
          backgroundColor: "#FAF9F6",
          borderTop: "1px solid rgba(13,27,42,0.08)",
          borderBottom: "1px solid rgba(13,27,42,0.08)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-xl md:text-2xl font-bold leading-tight"
            style={{ color: "#0D1B2A", fontFamily: "var(--font-inter), Inter, sans-serif" }}
          >
            Want a site like this for your HVAC business?
          </h2>
          <p
            className="mt-3 text-sm font-light leading-relaxed"
            style={{ color: "rgba(13,27,42,0.62)", fontFamily: "var(--font-inter), Inter, sans-serif" }}
          >
            See what&apos;s included in our HVAC website package.
          </p>
          <Link
            href="/services/hvac-website-design"
            className="inline-block mt-6 px-7 py-3 text-sm font-medium rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            style={{
              backgroundColor: "#0D1B2A",
              color: "#FAF9F6",
              fontFamily: "var(--font-inter), Inter, sans-serif",
            }}
          >
            View HVAC Packages →
          </Link>
        </div>
      </section>

      <ExploreMoreDemos currentHref="/demos/hvac" />
    </>
  );
}
