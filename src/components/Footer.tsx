import Link from "next/link";
import { brand, nav } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="bg-cream border-t border-slate/10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <p className="text-base font-bold text-navy">{brand.name}</p>
            <p className="mt-4 text-sm text-slate/40 font-light leading-relaxed">
              Professional websites for local service businesses. We help local
              businesses get found online with professional websites, Google
              Business Profile support, and ongoing care.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-slate/40 mb-4">
              Navigation
            </p>
            <div className="space-y-3">
              {nav.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-slate/60 hover:text-navy transition-colors font-light"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-slate/40 mb-4">
              Get in Touch
            </p>
            <div className="space-y-3 text-sm text-slate/60 font-light">
              <p>{brand.email}</p>
              <p>{brand.phone}</p>
            </div>
          </div>

          {/* Service Area */}
          <div>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-slate/40 mb-4">
              Service Area
            </p>
            <div className="space-y-3 text-sm text-slate/60 font-light">
              <p>Nationwide</p>
              <p>Local SEO</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate/10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate/30 font-light">
            &copy; {new Date().getFullYear()} {brand.serviceLine}. All rights
            reserved.
          </p>
          <Link
            href="/#contact"
            className="text-xs text-slate/40 hover:text-navy transition-colors font-light"
          >
            Book a Free Consultation →
          </Link>
        </div>
      </div>
    </footer>
  );
}
