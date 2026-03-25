import type { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: `Demo Sites — ${brand.serviceLine}`,
  description:
    "Explore real examples of clean, modern websites built for local service businesses.",
};

const demos = [
  {
    title: "HVAC / Plumbing Company",
    description:
      "A professional site for heating, cooling, and plumbing services. Features service pages, emergency contact, and service area coverage.",
    slug: "hvac-plumbing",
    status: "Coming Soon",
  },
  {
    title: "Remodeling / Home Improvement",
    description:
      "Showcase renovation work with a project gallery, before/after photos, and customer inquiry form.",
    slug: "remodeling",
    status: "Coming Soon",
  },
  {
    title: "Home Care",
    description:
      "A warm, reliable site for home care and senior services. Emphasizes trust, certifications, and family-friendly tone.",
    slug: "home-care",
    status: "Coming Soon",
  },
  {
    title: "Landscaping Company",
    description:
      "Highlight outdoor projects with seasonal services, a portfolio gallery, and easy quote request.",
    slug: "landscaping",
    status: "Coming Soon",
  },
];

export default function DemosPage() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h1 className="text-3xl md:text-4xl font-bold text-navy">
            Demo Sites
          </h1>
          <p className="mt-4 text-lg text-slate/70">
            Real examples of what we build. Each site is a fully functional
            demo designed for a specific industry.
          </p>
        </div>

        {/* Demo Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {demos.map((demo) => (
            <div
              key={demo.slug}
              id={demo.slug}
              className="rounded-xl border border-gray-100 overflow-hidden"
            >
              {/* Placeholder thumbnail */}
              <div className="aspect-video bg-gray-50 flex items-center justify-center border-b border-gray-100">
                <span className="text-sm text-slate/30 font-medium">
                  {demo.status}
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-navy">
                  {demo.title}
                </h2>
                <p className="mt-2 text-sm text-slate/60 leading-relaxed">
                  {demo.description}
                </p>
                <span className="inline-block mt-4 text-sm font-medium text-gold/50">
                  Live link coming soon
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Back CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/#contact"
            className="inline-block px-8 py-3.5 bg-navy text-white font-medium rounded-lg hover:bg-navy-light transition-colors"
          >
            Book a Free Consultation
          </Link>
          <p className="mt-4 text-sm text-slate/40">
            Want something similar for your business? Let&apos;s talk.
          </p>
        </div>
      </div>
    </section>
  );
}
