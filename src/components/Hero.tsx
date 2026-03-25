import Link from "next/link";
import { brand } from "@/lib/brand";

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
      </div>
    </section>
  );
}
