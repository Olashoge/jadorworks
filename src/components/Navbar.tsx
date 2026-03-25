"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { brand } from "@/lib/brand";

const navLinks = [
  { label: "What\u2019s Included", href: "/#included" },
  { label: "Demo Sites", href: "/demos" },
  { label: "How It Works", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm"
          : "bg-transparent"
      }`}
      style={{ borderBottom: scrolled ? "1px solid rgba(13,27,42,0.10)" : "none" }}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-base font-semibold text-navy tracking-tight">
          {brand.name}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-normal text-navy-45 hover:text-navy transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="text-sm font-medium bg-navy text-cream px-5 py-2.5 rounded-lg hover:bg-cream hover:text-navy border border-navy transition-all duration-300"
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
          <div className="w-5 flex flex-col gap-1.5">
            <span
              className={`block h-px bg-navy transition-transform duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block h-px bg-navy transition-opacity duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px bg-navy transition-transform duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="bg-cream/95 backdrop-blur-sm px-6 py-6 space-y-4" style={{ borderTop: "1px solid rgba(13,27,42,0.10)" }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-light text-navy-45 hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-medium bg-navy text-cream px-5 py-3 rounded-lg text-center hover:bg-cream hover:text-navy border border-navy transition-all duration-300"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
