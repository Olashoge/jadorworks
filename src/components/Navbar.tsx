"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogoLockup } from "@/components/PixelJMark";

const serviceLinks = [
  { label: "Website Design & Development", href: "/services/website-design" },
  { label: "Website Audit & Redesign", href: "/services/website-audit" },
  { label: "Google Business Profile Setup", href: "/services/gbp-setup" },
  { label: "Local SEO & Search Visibility", href: "/services/local-seo" },
  { label: "Ongoing Maintenance & Support", href: "/services/ongoing-support" },
];

const comingSoonLinks = [
  { label: "AI Integrations" },
  { label: "Reporting & Analytics" },
];

const demoLinks = [
  { label: "HVAC & Plumbing", href: "/demos/hvac" },
  { label: "Remodeling", href: "/demos/remodeling" },
  { label: "Landscaping", href: "/demos/landscaping" },
  { label: "Home Care", href: "/demos/home-care" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [demosOpen, setDemosOpen] = useState(false);
  const servicesTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const demosTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Handle anchor links (/#process, /#contact) without blue flash
  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
      e.preventDefault();
      setMobileOpen(false);

      if (pathname === "/") {
        // Already on homepage — smooth scroll directly
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        // On another page — navigate home, then instant-scroll after load
        // Temporarily disable smooth scroll so there is no visible pan
        const html = document.documentElement;
        html.style.scrollBehavior = "auto";
        router.push("/#" + hash);

        // After Next.js finishes navigation and the DOM updates, scroll instantly
        const scrollAfterNav = () => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: "auto" });
            // Restore smooth scroll after a tick so future in-page scrolls stay smooth
            requestAnimationFrame(() => {
              html.style.scrollBehavior = "";
            });
          } else {
            // Element not found yet — retry briefly
            requestAnimationFrame(scrollAfterNav);
          }
        };
        // Start checking once the navigation begins
        requestAnimationFrame(scrollAfterNav);
      }
    },
    [pathname, router]
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change (resize)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleServicesEnter = () => {
    if (servicesTimeout.current) clearTimeout(servicesTimeout.current);
    setServicesOpen(true);
    setDemosOpen(false);
  };
  const handleServicesLeave = () => {
    servicesTimeout.current = setTimeout(() => setServicesOpen(false), 150);
  };
  const handleDemosEnter = () => {
    if (demosTimeout.current) clearTimeout(demosTimeout.current);
    setDemosOpen(true);
    setServicesOpen(false);
  };
  const handleDemosLeave = () => {
    demosTimeout.current = setTimeout(() => setDemosOpen(false), 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
      style={{ borderBottom: scrolled ? "1px solid rgba(13,27,42,0.10)" : "none" }}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <LogoLockup size={18} color="#0D1B2A" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <Link
              href="/services"
              className="text-sm font-normal text-navy-68 hover:text-navy transition-colors flex items-center gap-1"
            >
              Services
              <svg
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              >
                <path d="M3 5l3 3 3-3" />
              </svg>
            </Link>

            {/* Dropdown Panel */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                servicesOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-1"
              }`}
            >
              <div
                className="w-[300px] py-2"
                style={{
                  backgroundColor: "#FAF9F6",
                  border: "1px solid rgba(13,27,42,0.10)",
                  boxShadow: "0 8px 24px rgba(13,27,42,0.08)",
                }}
              >
                {/* Live service links */}
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-5 py-2.5 text-[13px] font-normal transition-colors duration-150"
                    style={{ color: "rgba(13,27,42,0.62)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(13,27,42,0.03)";
                      e.currentTarget.style.color = "#0D1B2A";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "rgba(13,27,42,0.62)";
                    }}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Divider */}
                <div
                  className="mx-4 my-2"
                  style={{ borderTop: "1px solid rgba(13,27,42,0.08)" }}
                />

                {/* Coming Soon items — not clickable */}
                {comingSoonLinks.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between px-5 py-2.5 text-[13px] font-normal select-none"
                    style={{ color: "rgba(13,27,42,0.35)", cursor: "default" }}
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] font-medium tracking-[0.06em] uppercase" style={{ color: "rgba(13,27,42,0.28)" }}>Soon</span>
                  </div>
                ))}

                {/* Divider */}
                <div
                  className="mx-4 my-2"
                  style={{ borderTop: "1px solid rgba(13,27,42,0.08)" }}
                />

                {/* View all */}
                <Link
                  href="/services"
                  className="block px-5 py-2.5 text-[13px] font-semibold transition-colors duration-150"
                  style={{ color: "#0D1B2A" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(13,27,42,0.03)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  View all services
                </Link>
              </div>
            </div>
          </div>

          {/* Demo Sites Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleDemosEnter}
            onMouseLeave={handleDemosLeave}
          >
            <Link
              href="/demos"
              className="text-sm font-normal text-navy-68 hover:text-navy transition-colors flex items-center gap-1"
            >
              Demo Sites
              <svg
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`w-3 h-3 transition-transform duration-200 ${demosOpen ? "rotate-180" : ""}`}
              >
                <path d="M3 5l3 3 3-3" />
              </svg>
            </Link>

            {/* Dropdown Panel */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                demosOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-1"
              }`}
            >
              <div
                className="w-[240px] py-2"
                style={{
                  backgroundColor: "#FAF9F6",
                  border: "1px solid rgba(13,27,42,0.10)",
                  boxShadow: "0 8px 24px rgba(13,27,42,0.08)",
                }}
              >
                {demoLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-5 py-2.5 text-[13px] font-normal transition-colors duration-150"
                    style={{ color: "rgba(13,27,42,0.62)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(13,27,42,0.03)";
                      e.currentTarget.style.color = "#0D1B2A";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "rgba(13,27,42,0.62)";
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                <div
                  className="mx-4 my-2"
                  style={{ borderTop: "1px solid rgba(13,27,42,0.08)" }}
                />
                <Link
                  href="/demos"
                  className="block px-5 py-2.5 text-[13px] font-semibold transition-colors duration-150"
                  style={{ color: "#0D1B2A" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(13,27,42,0.03)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  View all demos
                </Link>
              </div>
            </div>
          </div>

          {/* Simple Links */}
          <Link
            href="/blog"
            className="text-sm font-normal text-navy-68 hover:text-navy transition-colors"
          >
            Blog
          </Link>
          <a
            href="/#process"
            onClick={(e) => handleAnchorClick(e, "process")}
            className="text-sm font-normal text-navy-68 hover:text-navy transition-colors"
          >
            How It Works
          </a>
          {/* CTA */}
          <Link
            href="/book"
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
          mobileOpen ? "max-h-[700px]" : "max-h-0"
        }`}
      >
        <div className="bg-cream/95 backdrop-blur-sm px-6 py-6 space-y-1" style={{ borderTop: "1px solid rgba(13,27,42,0.10)" }}>
          {/* Services Accordion */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full flex items-center justify-between py-2.5 text-sm font-light text-navy-68 hover:text-navy transition-colors"
            >
              <span>Services</span>
              <svg
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              >
                <path d="M3 5l3 3 3-3" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                servicesOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-4 pb-2 space-y-0.5">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-[13px] font-light transition-colors"
                    style={{ color: "rgba(13,27,42,0.62)" }}
                  >
                    {link.label}
                  </Link>
                ))}
                {/* Divider */}
                <div className="my-1.5" style={{ borderTop: "1px solid rgba(13,27,42,0.08)" }} />
                {/* Coming Soon */}
                {comingSoonLinks.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between py-2 text-[13px] font-light"
                    style={{ color: "rgba(13,27,42,0.35)" }}
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] font-medium tracking-[0.06em] uppercase" style={{ color: "rgba(13,27,42,0.28)" }}>Soon</span>
                  </div>
                ))}
                {/* Divider */}
                <div className="my-1.5" style={{ borderTop: "1px solid rgba(13,27,42,0.08)" }} />
                <Link
                  href="/services"
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-[13px] font-medium text-navy"
                >
                  View all services
                </Link>
              </div>
            </div>
          </div>

          {/* Demo Sites Accordion */}
          <div>
            <button
              onClick={() => setDemosOpen(!demosOpen)}
              className="w-full flex items-center justify-between py-2.5 text-sm font-light text-navy-68 hover:text-navy transition-colors"
            >
              <span>Demo Sites</span>
              <svg
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`w-3 h-3 transition-transform duration-200 ${demosOpen ? "rotate-180" : ""}`}
              >
                <path d="M3 5l3 3 3-3" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                demosOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-4 pb-2 space-y-0.5">
                {demoLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-[13px] font-light transition-colors"
                    style={{ color: "rgba(13,27,42,0.62)" }}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/demos"
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-[13px] font-medium text-navy"
                >
                  View all demos
                </Link>
              </div>
            </div>
          </div>

          {/* Simple Links */}
          <Link
            href="/blog"
            onClick={() => setMobileOpen(false)}
            className="block py-2.5 text-sm font-light text-navy-68 hover:text-navy"
          >
            Blog
          </Link>
          <a
            href="/#process"
            onClick={(e) => handleAnchorClick(e, "process")}
            className="block py-2.5 text-sm font-light text-navy-68 hover:text-navy"
          >
            How It Works
          </a>
          {/* CTA */}
          <div className="pt-3">
            <Link
              href="/book"
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium bg-navy text-cream px-5 py-3 rounded-lg text-center hover:bg-cream hover:text-navy border border-navy transition-all duration-300"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
