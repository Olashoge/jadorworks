"use client";

import { useState } from "react";
import Link from "next/link";
import { brand, nav } from "@/lib/brand";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ivory/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-navy tracking-tight">
          {brand.name}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate hover:text-navy transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="text-sm font-medium bg-navy text-white px-5 py-2.5 rounded-lg hover:bg-navy-light transition-colors"
          >
            Book a Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span
              className={`block h-0.5 bg-navy transition-transform ${
                mobileOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-navy transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-navy transition-transform ${
                mobileOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-ivory border-t border-gray-100 px-6 py-4 space-y-3">
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-slate hover:text-navy py-2"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-medium bg-navy text-white px-5 py-2.5 rounded-lg text-center hover:bg-navy-light transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
