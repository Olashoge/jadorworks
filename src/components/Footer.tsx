import Link from "next/link";
import { brand, nav } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold text-white">{brand.name}</p>
            <p className="text-sm mt-1 text-white/60">{brand.serviceLine}</p>
            <p className="text-sm mt-4">{brand.tagline}</p>
          </div>

          {/* Links */}
          <div>
            <p className="text-sm font-semibold text-white mb-3">Navigation</p>
            <div className="space-y-2">
              {nav.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-white mb-3">Contact</p>
            <p className="text-sm">{brand.email}</p>
            <p className="text-sm mt-1">{brand.phone}</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-sm text-white/40 text-center">
          &copy; {new Date().getFullYear()} {brand.serviceLine}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
