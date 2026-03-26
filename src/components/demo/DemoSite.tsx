"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { DemoConfig } from "@/lib/demo-config";
import { ScrollReveal } from "@/components/ScrollReveal";

// =============================================
// DemoSite — Full one-page demo site renderer
// Same structure, same studio feel, different content
// =============================================

export function DemoSite({ config }: { config: DemoConfig }) {
  const { colors } = config;

  // Fix 5: Hide custom cursor on demo sites
  useEffect(() => {
    document.body.style.cursor = "auto";
    const dot = document.querySelector(".cursor-dot") as HTMLElement;
    const ring = document.querySelector(".cursor-ring") as HTMLElement;
    if (dot) dot.style.display = "none";
    if (ring) ring.style.display = "none";
    return () => {
      document.body.style.cursor = "";
      if (dot) dot.style.display = "";
      if (ring) ring.style.display = "";
    };
  }, []);

  return (
    <div style={{ backgroundColor: colors.background, color: colors.primary }}>
      <DemoNav config={config} />
      <DemoHero config={config} />
      <DemoTrust config={config} />
      <DemoServices config={config} />
      {config.gallery && <DemoGallery config={config} />}
      <DemoAbout config={config} />
      <DemoServiceArea config={config} />
      <DemoTestimonials config={config} />
      <DemoCTA config={config} />
      <DemoFooter config={config} />
    </div>
  );
}

// =============================================
// NAVBAR
// =============================================
function DemoNav({ config }: { config: DemoConfig }) {
  const { colors } = config;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? `${colors.background}f2` : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled
          ? `1px solid rgba(${colors.primaryRgb},0.10)`
          : "none",
      }}
    >
      {/* Back to JadorWorks bar */}
      <div
        className="text-center py-1.5 text-xs font-light"
        style={{
          backgroundColor: `rgba(${colors.primaryRgb},0.04)`,
          color: `rgba(${colors.primaryRgb},0.45)`,
        }}
      >
        This is a demo site built by{" "}
        <Link
          href="/"
          className="font-medium underline underline-offset-2 hover:opacity-80 transition-opacity"
          style={{ color: `rgba(${colors.primaryRgb},0.65)` }}
        >
          JadorWorks Web Studio
        </Link>
      </div>

      <nav className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-base font-semibold tracking-tight"
          style={{ color: colors.primary }}
        >
          {config.businessName}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-normal transition-colors hover:opacity-100"
              style={{ color: `rgba(${colors.primaryRgb},0.62)` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-medium px-5 py-2.5 rounded-lg transition-all duration-300 hover:opacity-90"
            style={{
              backgroundColor: colors.accent,
              color: colors.background,
            }}
          >
            {config.hero.cta}
          </a>
        </div>

        {/* Mobile: phone CTA */}
        <a
          href={`tel:${config.phone.replace(/[^\d+]/g, "")}`}
          className="md:hidden text-sm font-medium px-4 py-2 rounded-lg"
          style={{
            backgroundColor: colors.accent,
            color: colors.background,
          }}
        >
          {config.showEmergencyCta ? "Call Now" : "Contact"}
        </a>
      </nav>
    </header>
  );
}

// =============================================
// HERO
// =============================================
function DemoHero({ config }: { config: DemoConfig }) {
  const { colors, hero } = config;

  return (
    <section
      className="pt-36 md:pt-44 pb-14 md:pb-16 px-6 md:px-12 lg:px-20 relative overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Subtle grid pattern for visual weight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(${colors.primaryRgb},0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(${colors.primaryRgb},0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Gradient fade at bottom so grid doesn't end abruptly */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${colors.background}, transparent)`,
        }}
      />
      <div className="max-w-5xl mx-auto relative">
        <ScrollReveal>
          <p
            className="text-xs font-medium tracking-[0.2em] uppercase mb-6"
            style={{ color: `rgba(${colors.primaryRgb},0.42)` }}
          >
            {config.tagline}
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] max-w-3xl"
            style={{ color: colors.primary }}
          >
            {hero.headline}
          </h1>
        </ScrollReveal>

        <ScrollReveal>
          <p
            className="mt-6 text-lg md:text-xl font-light leading-relaxed max-w-2xl"
            style={{ color: `rgba(${colors.primaryRgb},0.62)` }}
          >
            {hero.subheadline}
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={hero.ctaHref || "#contact"}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg transition-all duration-300 hover:opacity-90"
              style={{
                backgroundColor: colors.accent,
                color: colors.background,
              }}
            >
              {hero.cta}
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg transition-all duration-300"
              style={{
                border: `1px solid rgba(${colors.primaryRgb},0.15)`,
                color: `rgba(${colors.primaryRgb},0.62)`,
              }}
            >
              View Our Services
            </a>
          </div>
        </ScrollReveal>

        {/* Emergency CTA for HVAC */}
        {config.showEmergencyCta && (
          <ScrollReveal>
            <div
              className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-xl"
              style={{
                backgroundColor: `rgba(${colors.primaryRgb},0.04)`,
                border: `1px solid rgba(${colors.primaryRgb},0.08)`,
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: colors.accent }}
              />
              <span
                className="text-sm font-medium"
                style={{ color: `rgba(${colors.primaryRgb},0.65)` }}
              >
                24/7 Emergency Service Available —{" "}
                <a
                  href={`tel:${config.phone.replace(/[^\d+]/g, "")}`}
                  className="underline underline-offset-2"
                  style={{ color: colors.accent }}
                >
                  {config.phone}
                </a>
              </span>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}

// =============================================
// TRUST BADGES
// =============================================
function DemoTrust({ config }: { config: DemoConfig }) {
  const { colors } = config;

  return (
    <section
      className="py-6 px-6"
      style={{
        borderTop: `1px solid rgba(${colors.primaryRgb},0.08)`,
        borderBottom: `1px solid rgba(${colors.primaryRgb},0.08)`,
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-3">
        {config.trustBadges.map((badge) => (
          <div key={badge} className="flex items-center gap-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke={colors.accent}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span
              className="text-sm font-medium"
              style={{ color: `rgba(${colors.primaryRgb},0.55)` }}
            >
              {badge}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

// =============================================
// SERVICES
// =============================================
function DemoServices({ config }: { config: DemoConfig }) {
  const { colors } = config;

  return (
    <section className="py-20 md:py-24 px-6 md:px-12 lg:px-20" id="services">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p
            className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
            style={{ color: `rgba(${colors.primaryRgb},0.42)` }}
          >
            Our Services
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold leading-tight"
            style={{ color: colors.primary }}
          >
            What we do.
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {config.services.map((service, i) => (
            <ScrollReveal key={service.name}>
              <div
                className="group p-7 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default"
                style={{
                  border: `1px solid rgba(${colors.primaryRgb},0.10)`,
                  backgroundColor: colors.background,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.primary;
                  e.currentTarget.style.borderColor = colors.primary;
                  const texts =
                    e.currentTarget.querySelectorAll("[data-flip]");
                  texts.forEach((t) => {
                    (t as HTMLElement).style.color = colors.background;
                  });
                  const subs =
                    e.currentTarget.querySelectorAll("[data-flip-sub]");
                  subs.forEach((t) => {
                    (t as HTMLElement).style.color = `rgba(250,249,246,0.70)`;
                  });
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = colors.background;
                  e.currentTarget.style.borderColor = `rgba(${colors.primaryRgb},0.10)`;
                  const texts =
                    e.currentTarget.querySelectorAll("[data-flip]");
                  texts.forEach((t) => {
                    (t as HTMLElement).style.color = colors.primary;
                  });
                  const subs =
                    e.currentTarget.querySelectorAll("[data-flip-sub]");
                  subs.forEach((t) => {
                    (t as HTMLElement).style.color = `rgba(${colors.primaryRgb},0.62)`;
                  });
                }}
              >
                <h3
                  className="text-lg font-semibold transition-colors duration-300"
                  data-flip
                  style={{ color: colors.primary }}
                >
                  {service.name}
                </h3>
                <p
                  className="mt-2 text-sm font-light leading-relaxed transition-colors duration-300"
                  data-flip-sub
                  style={{ color: `rgba(${colors.primaryRgb},0.62)` }}
                >
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================
// GALLERY (optional — remodeling/landscaping)
// =============================================
function DemoGallery({ config }: { config: DemoConfig }) {
  const { colors, gallery } = config;
  if (!gallery) return null;

  return (
    <section
      className="py-20 md:py-24 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: `rgba(${colors.primaryRgb},0.03)` }}
      id="gallery"
    >
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p
            className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
            style={{ color: `rgba(${colors.primaryRgb},0.42)` }}
          >
            Our Work
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold leading-tight"
            style={{ color: colors.primary }}
          >
            {gallery.title}
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {gallery.items.map((item) => (
            <ScrollReveal key={item.label}>
              <div
                className="group rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  border: `1px solid rgba(${colors.primaryRgb},0.10)`,
                }}
              >
                {/* Placeholder for project photo */}
                <div
                  className="aspect-[4/3] flex items-center justify-center"
                  style={{
                    backgroundColor: `rgba(${colors.primaryRgb},0.06)`,
                  }}
                >
                  <div className="text-center">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={`rgba(${colors.primaryRgb},0.20)`}
                      strokeWidth="1.5"
                      className="mx-auto mb-2"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                    <span
                      className="text-xs font-light"
                      style={{
                        color: `rgba(${colors.primaryRgb},0.25)`,
                      }}
                    >
                      Project photo
                    </span>
                  </div>
                </div>
                <div
                  className="p-5"
                  style={{ backgroundColor: colors.background }}
                >
                  <p
                    className="text-sm font-semibold"
                    style={{ color: colors.primary }}
                  >
                    {item.label}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================
// ABOUT
// =============================================
function DemoAbout({ config }: { config: DemoConfig }) {
  const { colors } = config;

  return (
    <section className="py-20 md:py-24 px-6 md:px-12 lg:px-20" id="about">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl">
          <ScrollReveal>
            <p
              className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
              style={{ color: `rgba(${colors.primaryRgb},0.42)` }}
            >
              About Us
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight"
              style={{ color: colors.primary }}
            >
              Who we are.
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p
              className="mt-6 text-base md:text-lg font-light leading-relaxed"
              style={{ color: `rgba(${colors.primaryRgb},0.62)` }}
            >
              {config.about}
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-8 flex flex-col sm:flex-row gap-6">
              <div>
                <p
                  className="text-sm font-medium"
                  style={{ color: colors.primary }}
                >
                  Hours
                </p>
                <p
                  className="mt-1 text-sm font-light"
                  style={{ color: `rgba(${colors.primaryRgb},0.55)` }}
                >
                  {config.hours}
                </p>
              </div>
              <div
                className="hidden sm:block w-px"
                style={{
                  backgroundColor: `rgba(${colors.primaryRgb},0.10)`,
                }}
              />
              <div>
                <p
                  className="text-sm font-medium"
                  style={{ color: colors.primary }}
                >
                  Service Area
                </p>
                <p
                  className="mt-1 text-sm font-light"
                  style={{ color: `rgba(${colors.primaryRgb},0.55)` }}
                >
                  {config.area}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// =============================================
// SERVICE AREA
// =============================================
function DemoServiceArea({ config }: { config: DemoConfig }) {
  const { colors } = config;

  return (
    <section
      className="py-16 px-6 md:px-12 lg:px-20"
      style={{
        backgroundColor: `rgba(${colors.primaryRgb},0.03)`,
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <ScrollReveal>
          <p
            className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
            style={{ color: `rgba(${colors.primaryRgb},0.42)` }}
          >
            Service Area
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ color: colors.primary }}
          >
            Proudly serving {config.area.split("·")[0].trim()}.
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {config.serviceArea.regions.map((region) => (
              <span
                key={region}
                className="px-4 py-2 rounded-lg text-sm font-light"
                style={{
                  backgroundColor: `rgba(${colors.primaryRgb},0.05)`,
                  color: `rgba(${colors.primaryRgb},0.55)`,
                  border: `1px solid rgba(${colors.primaryRgb},0.08)`,
                }}
              >
                {region}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// =============================================
// TESTIMONIALS
// =============================================
function DemoTestimonials({ config }: { config: DemoConfig }) {
  const { colors } = config;

  return (
    <section
      className="py-20 md:py-24 px-6 md:px-12 lg:px-20"
      id="testimonials"
    >
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p
            className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
            style={{ color: `rgba(${colors.primaryRgb},0.42)` }}
          >
            Testimonials
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold leading-tight"
            style={{ color: colors.primary }}
          >
            What our customers say.
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {config.testimonials.map((testimonial, i) => (
            <ScrollReveal key={i}>
              <div
                className="p-7 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  border: `1px solid rgba(${colors.primaryRgb},0.10)`,
                  backgroundColor: colors.background,
                }}
              >
                {/* Quote mark */}
                <span
                  className="text-3xl font-serif leading-none"
                  style={{ color: `rgba(${colors.primaryRgb},0.12)` }}
                >
                  &ldquo;
                </span>
                <p
                  className="mt-2 text-sm font-light leading-relaxed"
                  style={{ color: `rgba(${colors.primaryRgb},0.65)` }}
                >
                  {testimonial.quote}
                </p>
                <div
                  className="mt-5 pt-4"
                  style={{
                    borderTop: `1px solid rgba(${colors.primaryRgb},0.08)`,
                  }}
                >
                  <p
                    className="text-sm font-medium"
                    style={{ color: colors.primary }}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className="text-xs font-light mt-0.5"
                    style={{ color: `rgba(${colors.primaryRgb},0.42)` }}
                  >
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================
// CTA / CONTACT
// =============================================
function DemoCTA({ config }: { config: DemoConfig }) {
  const { colors, cta } = config;

  return (
    <section
      className="py-20 md:py-24 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: colors.primary }}
      id="contact"
    >
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2
            className="text-3xl md:text-4xl font-bold leading-tight"
            style={{ color: colors.background }}
          >
            {cta.headline}
          </h2>
          <p
            className="mt-4 text-base md:text-lg font-light leading-relaxed"
            style={{ color: `rgba(250,249,246,0.65)` }}
          >
            {cta.subheadline}
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-10 max-w-md mx-auto">
            {/* Contact Form */}
            <div className="space-y-4">
              {["Name", "Phone", "Email"].map((field) => (
                <input
                  key={field}
                  type={
                    field === "Email"
                      ? "email"
                      : field === "Phone"
                      ? "tel"
                      : "text"
                  }
                  placeholder={field}
                  className="w-full px-4 py-3.5 rounded-lg text-sm font-light outline-none transition-colors placeholder:opacity-40"
                  style={{
                    backgroundColor: "rgba(250,249,246,0.10)",
                    border: "1px solid rgba(250,249,246,0.20)",
                    color: colors.background,
                  }}
                />
              ))}
              <textarea
                placeholder="How can we help?"
                rows={3}
                className="w-full px-4 py-3.5 rounded-lg text-sm font-light outline-none transition-colors placeholder:opacity-40 resize-none"
                style={{
                  backgroundColor: "rgba(250,249,246,0.10)",
                  border: "1px solid rgba(250,249,246,0.20)",
                  color: colors.background,
                }}
              />
              <button
                className="w-full py-4 rounded-lg text-base font-medium transition-all duration-300 hover:opacity-90"
                style={{
                  backgroundColor: colors.background,
                  color: colors.primary,
                }}
              >
                {cta.buttonText}
              </button>
            </div>

            <p
              className="mt-4 text-sm font-light"
              style={{ color: "rgba(250,249,246,0.35)" }}
            >
              We&apos;ll get back to you within one business day.
            </p>
          </div>
        </ScrollReveal>

        {/* Phone alternative */}
        <ScrollReveal>
          <div
            className="mt-8 pt-6"
            style={{
              borderTop: "1px solid rgba(250,249,246,0.08)",
            }}
          >
            <p
              className="text-sm font-light"
              style={{ color: "rgba(250,249,246,0.45)" }}
            >
              Prefer to call?{" "}
              <a
                href={`tel:${config.phone.replace(/[^\d+]/g, "")}`}
                className="font-medium underline underline-offset-2"
                style={{ color: `rgba(250,249,246,0.70)` }}
              >
                {config.phone}
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// =============================================
// FOOTER
// =============================================
function DemoFooter({ config }: { config: DemoConfig }) {
  const { colors } = config;

  return (
    <footer
      style={{
        backgroundColor: colors.background,
        borderTop: `1px solid rgba(${colors.primaryRgb},0.10)`,
      }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="text-base font-semibold" style={{ color: colors.primary }}>
              {config.businessName}
            </p>
            <p
              className="mt-3 text-sm font-light leading-relaxed"
              style={{ color: `rgba(${colors.primaryRgb},0.55)` }}
            >
              {config.tagline}
            </p>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-xs font-bold tracking-[0.15em] uppercase mb-4"
              style={{ color: colors.primary }}
            >
              Contact
            </p>
            <div
              className="space-y-2 text-sm font-light"
              style={{ color: `rgba(${colors.primaryRgb},0.55)` }}
            >
              <p>{config.phone}</p>
              <p>{config.email}</p>
              <p>{config.hours}</p>
            </div>
          </div>

          {/* Service Area */}
          <div>
            <p
              className="text-xs font-bold tracking-[0.15em] uppercase mb-4"
              style={{ color: colors.primary }}
            >
              Service Area
            </p>
            <p
              className="text-sm font-light"
              style={{ color: `rgba(${colors.primaryRgb},0.55)` }}
            >
              {config.area}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: `1px solid rgba(${colors.primaryRgb},0.08)`,
        }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-xs font-light"
            style={{ color: `rgba(${colors.primaryRgb},0.30)` }}
          >
            &copy; {new Date().getFullYear()} {config.businessName}. All rights
            reserved.
          </p>
          <Link
            href="/"
            className="text-xs font-light transition-colors hover:opacity-80"
            style={{ color: `rgba(${colors.primaryRgb},0.40)` }}
          >
            Built by JadorWorks Web Studio →
          </Link>
        </div>
      </div>
    </footer>
  );
}
