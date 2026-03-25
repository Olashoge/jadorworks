import Link from "next/link";
import { brand, nav } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="bg-navy text-white/80 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold text-white">{brand.name}</p>
            <p className="text-sm mt-1 text-white/60">{brand.serviceLine}</p>
            <p className="text-sm mt-4 text-white/70 leading-relaxed">
              {brand.tagline}. We help local businesses get found online with
              professional websites, Google Business Profile support, and
              ongoing care.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-sm font-semibold text-white mb-3">Navigation</p>
            <div className="space-y-2">
              {nav.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-white mb-3">Get in Touch</p>
            <div className="space-y-2 text-sm text-white/70">
              <p>{brand.email}</p>
              <p>{brand.phone}</p>
              <p className="pt-2 text-white/50 text-xs">
                Serving local service businesses nationwide
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>
            &copy; {new Date().getFullYear()} {brand.serviceLine}. All rights
            reserved.
          </p>
          <Link
            href="/#contact"
            className="text-gold/60 hover:text-gold transition-colors"
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </footer>
  );
}
