import Link from "next/link";
import { brand } from "@/lib/brand";

const trustPoints = [
  "Mobile-Friendly",
  "Google Business Profile Support",
  "Launch in 1–2 Weeks",
  "Ongoing Support",
];

export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Eyebrow */}
        <p className="text-sm font-medium text-gold tracking-widest uppercase mb-4">
          {brand.serviceLine}
        </p>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
          Professional websites for local service businesses
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg md:text-xl text-slate/80 max-w-2xl mx-auto leading-relaxed">
          Launch a clean, mobile-friendly website with Google-ready setup and
          ongoing support — built for businesses that need credibility,
          visibility, and more customer inquiries.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/demos"
            className="w-full sm:w-auto px-8 py-3.5 bg-navy text-white font-medium rounded-lg hover:bg-navy-light transition-colors text-center"
          >
            View Demo Sites
          </Link>
          <Link
            href="/#contact"
            className="w-full sm:w-auto px-8 py-3.5 border-2 border-navy text-navy font-medium rounded-lg hover:bg-navy hover:text-white transition-colors text-center"
          >
            Book a Free Consultation
          </Link>
        </div>

        {/* Trust Row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {trustPoints.map((point, i) => (
            <div key={point} className="flex items-center gap-2">
              {i > 0 && (
                <span className="hidden sm:inline text-gray-300 -ml-3 mr-1">·</span>
              )}
              <svg
                className="w-4 h-4 text-gold flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              <span className="text-sm text-slate/70">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
