"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Page load overlay */}
      <div className="fixed inset-0 bg-navy z-[100] pointer-events-none animate-overlay-out" />

      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-20">
        <div className="max-w-6xl mx-auto w-full">
          {/* Eyebrow */}
          <p
            className={`section-label mb-8 transition-all duration-700 delay-500 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            JadorWorks Web Studio
          </p>

          {/* Headline — staggered line reveal */}
          <h1 className="overflow-hidden">
            {["Professional websites", "for local service", "businesses."].map(
              (line, i) => (
                <span
                  key={i}
                  className={`block text-4xl md:text-6xl lg:text-7xl font-bold text-navy leading-[1.1] transition-all duration-700 ${
                    loaded
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-full"
                  }`}
                  style={{ transitionDelay: `${600 + i * 150}ms` }}
                >
                  {line}
                </span>
              )
            )}
          </h1>

          {/* Subheadline */}
          <p
            className={`mt-8 text-lg md:text-xl font-light text-navy-62 max-w-xl leading-relaxed transition-all duration-700 delay-[1200ms] ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Launch a clean, mobile-friendly website with Google-ready setup and
            ongoing support — built for businesses that need credibility,
            visibility, and more customer inquiries.
          </p>

          {/* CTAs */}
          <div
            className={`mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-[1400ms] ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link
              href="/demos"
              className="px-8 py-3.5 bg-navy text-cream text-sm font-medium rounded-lg hover:bg-cream hover:text-navy border border-navy transition-all duration-300 text-center"
            >
              View Demo Sites
            </Link>
            <Link
              href="/#contact"
              className="px-8 py-3.5 text-navy text-sm font-medium rounded-lg border border-navy-10 hover:border-navy hover:bg-navy hover:text-cream transition-all duration-300 text-center"
            >
              Book a Free Consultation
            </Link>
          </div>

          {/* Proof markers */}
          <div
            className={`mt-16 flex flex-wrap gap-10 md:gap-14 transition-all duration-700 delay-[1600ms] ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex items-baseline gap-3">
              <span className="text-2xl md:text-3xl font-semibold text-navy">1–2 wk</span>
              <span className="text-xs font-medium tracking-[0.12em] uppercase text-navy-42">Average Launch Time</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-2xl md:text-3xl font-semibold text-navy">Mobile</span>
              <span className="text-xs font-medium tracking-[0.12em] uppercase text-navy-42">First Design</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-2xl md:text-3xl font-semibold text-navy">Local</span>
              <span className="text-xs font-medium tracking-[0.12em] uppercase text-navy-42">SEO Ready</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
