import Link from "next/link";
import { brand, nav } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="bg-cream" style={{ borderTop: "1px solid rgba(13,27,42,0.10)" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <p className="text-base font-semibold text-navy">{brand.name}</p>
            <p className="mt-5 text-sm font-light text-navy-62 leading-relaxed">
              Professional websites for local service businesses. We help local
              businesses get found online with professional websites, Google
              Business Profile support, and ongoing care.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-navy mb-5">
              Navigation
            </p>
            <div className="space-y-4">
              {nav.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm font-light text-navy-62 hover:text-navy transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-navy mb-5">
              Get in Touch
            </p>
            <div className="space-y-4 text-sm font-light text-navy-62">
              <p>{brand.email}</p>
              <p>{brand.phone}</p>
            </div>
          </div>

          {/* Service Area */}
          <div>
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-navy mb-5">
              Service Area
            </p>
            <div className="space-y-4 text-sm font-light text-navy-62">
              <p>Nationwide</p>
              <p>Local SEO</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(13,27,42,0.10)" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-light" style={{ color: "rgba(13,27,42,0.30)" }}>
            &copy; {new Date().getFullYear()} {brand.serviceLine}. All rights
            reserved.
          </p>
          <Link
            href="/#contact"
            className="text-xs font-light text-navy-62 hover:text-navy transition-colors"
          >
            Book a Free Consultation →
          </Link>
        </div>
      </div>
    </footer>
  );
}
