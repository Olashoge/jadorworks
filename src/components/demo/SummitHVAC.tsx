"use client";

import { useEffect, useRef } from "react";

/* ------------------------------------------------------------------ */
/*  Summit Air & Plumbing — Full One-Page HVAC Demo                   */
/*  Built by JadorWorks Web Studio                                    */
/* ------------------------------------------------------------------ */

// ── colour tokens ────────────────────────────────────────────────────
const C = {
  navy: "#0C2340",
  navy2: "#163355",
  navyDark: "#081A2E",
  orange: "#E8712B",
  orange2: "#F08040",
  offWhite: "#F7F8FA",
  white: "#FFFFFF",
};

// ── font helpers (inline style objects) ──────────────────────────────
const barlow = (
  weight: number,
  extra?: React.CSSProperties
): React.CSSProperties => ({
  fontFamily: "'Barlow', sans-serif",
  fontWeight: weight,
  ...extra,
});

const barlowC = (
  weight: number,
  extra?: React.CSSProperties
): React.CSSProperties => ({
  fontFamily: "'Barlow Condensed', sans-serif",
  fontWeight: weight,
  ...extra,
});

// ── reusable tiny components ─────────────────────────────────────────
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block tracking-[0.18em] uppercase text-xs mb-3"
      style={{ color: C.orange, ...barlow(700) }}
    >
      {children}
    </span>
  );
}

function SectionTitle({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <h2
      className="text-3xl md:text-4xl uppercase leading-tight"
      style={{
        ...barlowC(800),
        color: light ? C.white : C.navy,
      }}
    >
      {children}
    </h2>
  );
}

/* ================================================================== */
/*  MAIN COMPONENT                                                    */
/* ================================================================== */
export function SummitHVAC() {
  const mainRef = useRef<HTMLDivElement>(null);

  /* ── scroll-reveal via Intersection Observer ────────────────────── */
  useEffect(() => {
    const els = mainRef.current?.querySelectorAll(".reveal");
    if (!els) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={mainRef}>
      {/* reveal animation styles */}
      <style>{`
        .reveal{opacity:0;transform:translateY(32px);transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1)}
        .revealed{opacity:1!important;transform:translateY(0)!important}
        @keyframes pulseDot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.45;transform:scale(1.35)}}
      `}</style>

      {/* ─────────── 1. DEMO BANNER ─────────── */}
      <div
        className="w-full py-2.5 text-center text-xs tracking-wide"
        style={{ background: C.navy, color: "rgba(255,255,255,.7)", ...barlow(500) }}
      >
        This is a demo site built by{" "}
        <a
          href="https://jadorworks.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:no-underline"
          style={{ color: C.orange }}
        >
          JadorWorks Web Studio
        </a>
      </div>

      {/* ─────────── 2. TOP BAR ─────────── */}
      <div
        className="w-full py-2 text-[11px] tracking-wide hidden md:block"
        style={{ background: C.navy2, color: "rgba(255,255,255,.65)", ...barlow(500) }}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-5">
            <span>Indianapolis, IN</span>
            <span className="opacity-40">|</span>
            <span>Mon – Sat: 7 AM – 9 PM &middot; Sun: Emergency Only</span>
          </div>
          <div className="flex gap-5 items-center">
            <span>Licensed &amp; Insured &middot; BBB Accredited</span>
            <a
              href="tel:5558024100"
              className="hover:underline"
              style={{ color: C.orange }}
            >
              (555) 802-4100
            </a>
          </div>
        </div>
      </div>

      {/* ─────────── 3. NAVIGATION ─────────── */}
      <nav
        className="sticky top-0 z-50 w-full bg-white shadow-sm"
        style={{ ...barlow(700) }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[70px]">
          {/* logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 flex items-center justify-center"
              style={{ background: C.navy }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 10.5L12 3l9 7.5V21a1 1 0 01-1 1H4a1 1 0 01-1-1V10.5z"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 22V12h6v10"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span
              className="text-lg tracking-tight"
              style={{ ...barlowC(800), color: C.navy }}
            >
              Summit Air &amp; Plumbing
            </span>
          </div>

          {/* links */}
          <div className="hidden lg:flex items-center gap-8 text-[14px] uppercase tracking-wider">
            {["Services", "About", "Reviews", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="hover:opacity-70 transition-opacity"
                style={{ color: C.navy }}
              >
                {l}
              </a>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-block border px-5 py-2 text-[13px] uppercase tracking-wider hover:bg-gray-50 transition-colors"
              style={{ borderColor: C.navy, color: C.navy, ...barlow(700) }}
            >
              Request Service
            </a>
            <a
              href="tel:5558024100"
              className="inline-block px-5 py-2 text-[13px] uppercase tracking-wider text-white hover:brightness-110 transition"
              style={{ background: C.orange, ...barlow(700) }}
            >
              Call Now &mdash; (555) 802-4100
            </a>
          </div>
        </div>
      </nav>

      {/* ─────────── 4. HERO ─────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: C.navy, minHeight: "88vh" }}
      >
        {/* bg image */}
        <div className="absolute inset-0">
          <img
            src="/images/demos/hvac/HVAC1.png"
            alt=""
            className="w-full h-full object-cover"
            style={{ opacity: 0.35 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg, ${C.navy} 45%, transparent 100%)`,
            }}
          />
        </div>

        {/* right panel image */}
        <div
          className="absolute top-0 right-0 h-full hidden lg:block"
          style={{ width: "42%" }}
        >
          <img
            src="/images/demos/hvac/HVAC2.png"
            alt=""
            className="w-full h-full object-cover"
            style={{ opacity: 0.55 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, ${C.navy} 0%, transparent 50%)`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-36 flex items-center min-h-[88vh]">
          <div className="max-w-2xl reveal">
            {/* badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-7 text-[12px] tracking-widest uppercase text-white"
              style={{ background: "rgba(232,113,43,.18)", border: `1px solid ${C.orange}`, ...barlow(600) }}
            >
              <span
                className="w-2 h-2 rounded-full inline-block"
                style={{
                  background: C.orange,
                  animation: "pulseDot 2s ease-in-out infinite",
                }}
              />
              24/7 Emergency Service Available
            </div>

            {/* headline */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.05] mb-5"
              style={{ ...barlowC(900), color: C.white }}
            >
              Your Home&rsquo;s
              <br />
              <span style={{ color: C.orange }}>Comfort</span> Starts
              <br />
              Here.
            </h1>

            {/* sub headline */}
            <p
              className="text-lg md:text-xl uppercase tracking-[0.15em] mb-4"
              style={{ color: "rgba(255,255,255,.55)", ...barlowC(700) }}
            >
              Indianapolis HVAC &amp; Plumbing
            </p>

            {/* description */}
            <p
              className="text-base md:text-lg leading-relaxed mb-8 max-w-lg"
              style={{ color: "rgba(255,255,255,.65)", ...barlow(400) }}
            >
              From emergency repairs to full system installations, Summit Air &amp;
              Plumbing keeps Indianapolis homes comfortable year-round with
              flat-rate pricing and certified technicians.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#contact"
                className="inline-block px-8 py-3.5 text-sm uppercase tracking-widest text-white hover:brightness-110 transition"
                style={{ background: C.orange, ...barlow(700) }}
              >
                Schedule Service
              </a>
              <a
                href="#services"
                className="inline-block px-8 py-3.5 text-sm uppercase tracking-widest text-white border border-white/30 hover:border-white/60 transition"
                style={barlow(700)}
              >
                Our Services
              </a>
            </div>

            {/* phone block */}
            <div className="flex items-center gap-4">
              <div
                className="w-11 h-11 flex items-center justify-center"
                style={{ background: C.orange }}
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.68 2.34a2 2 0 01-.45 2.11L8.09 9.41a16 16 0 006.5 6.5l1.24-1.24a2 2 0 012.11-.45c.74.32 1.53.55 2.34.68a2 2 0 011.72 2.03z"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div
                  className="text-xs uppercase tracking-widest mb-0.5"
                  style={{ color: "rgba(255,255,255,.45)", ...barlow(600) }}
                >
                  Emergency Line — 24/7
                </div>
                <a
                  href="tel:5558024100"
                  className="text-xl hover:underline"
                  style={{ color: C.white, ...barlowC(800) }}
                >
                  (555) 802-4100
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── 5. TRUST BAR ─────────── */}
      <div style={{ background: C.orange }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap justify-between items-center gap-y-4">
          {[
            {
              icon: (
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              text: "Licensed & Insured",
            },
            {
              icon: (
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="9"
                    cy="7"
                    r="4"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <path
                    d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              text: "Background-Checked Technicians",
            },
            {
              icon: (
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" />
                  <path
                    d="M12 6v6l4 2"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              text: "Same-Day Availability",
            },
            {
              icon: (
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              text: "Flat-Rate Honest Pricing",
            },
          ].map((item, i, arr) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex items-center gap-3">
                {item.icon}
                <span
                  className="text-white text-[13px] uppercase tracking-wider"
                  style={barlow(700)}
                >
                  {item.text}
                </span>
              </div>
              {i < arr.length - 1 && (
                <div className="hidden md:block w-px h-5 bg-white/30 ml-6" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ─────────── 6. REVIEWS STRIP ─────────── */}
      <div style={{ background: C.navy }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-y-4">
          {/* left — stars */}
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="18"
                  height="18"
                  fill="#F5A623"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span
              className="text-white text-xl"
              style={barlowC(800)}
            >
              4.9
            </span>
            <span
              className="text-white/50 text-[13px] uppercase tracking-wider"
              style={barlow(600)}
            >
              800+ Reviews
            </span>
          </div>

          {/* center — platforms */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { platform: "Google Reviews", score: "4.9", count: "620 Reviews" },
              { platform: "Facebook", score: "4.8", count: "185 Reviews" },
              { platform: "BBB Rating", score: "A+", count: "Accredited" },
            ].map((p) => (
              <div key={p.platform} className="flex items-center gap-2">
                <span
                  className="text-white text-[13px] uppercase tracking-wider"
                  style={barlow(600)}
                >
                  {p.platform}
                </span>
                <span
                  className="text-sm px-2 py-0.5"
                  style={{ background: "rgba(255,255,255,.1)", color: C.orange, ...barlow(700) }}
                >
                  {p.score} &middot; {p.count}
                </span>
              </div>
            ))}
          </div>

          {/* right — button */}
          <a
            href="#reviews"
            className="border border-white/30 text-white px-5 py-2 text-[12px] uppercase tracking-widest hover:border-white/60 transition"
            style={barlow(700)}
          >
            See All Reviews
          </a>
        </div>
      </div>

      {/* ─────────── 7. SERVICES ─────────── */}
      <section
        id="services"
        className="py-20 md:py-28"
        style={{ background: C.offWhite }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* intro */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 reveal">
            <div>
              <Eyebrow>What We Do</Eyebrow>
              <SectionTitle>Our Services.</SectionTitle>
            </div>
            <p
              className="text-base leading-relaxed self-end"
              style={{ color: "#5A6B7E", ...barlow(400) }}
            >
              Whether it&rsquo;s a broken furnace in January or a backed-up drain on a
              Sunday, Summit Air &amp; Plumbing has you covered. We offer a full
              range of residential HVAC and plumbing services — always at
              flat-rate pricing with no hidden fees.
            </p>
          </div>

          {/* grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Heating Systems",
                body: "Furnace repair, installation, and maintenance. We service all major brands and keep your home warm when it matters most.",
                icon: (
                  <svg width="30" height="30" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M12 22c1.66 0 3-1.34 3-3H9c0 1.66 1.34 3 3 3zM13 2.05v1.02c2.83.48 5 2.94 5 5.93v5l2 2H4l2-2V9c0-2.99 2.17-5.45 5-5.93V2.05A1 1 0 0112 1a1 1 0 011 1.05z"
                      stroke={C.orange}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                num: "02",
                title: "Air Conditioning",
                body: "AC repair, replacement, and seasonal tune-ups. Stay cool and energy-efficient all summer long with our certified technicians.",
                icon: (
                  <svg width="30" height="30" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"
                      stroke={C.orange}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
              {
                num: "03",
                title: "Plumbing Services",
                body: "From leaky faucets to full re-pipes. Our licensed plumbers handle drain cleaning, water heaters, sump pumps, and more.",
                icon: (
                  <svg width="30" height="30" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M6 6h1v4a4 4 0 008 0V6h1M4 6h4M15 6h4M9 20h6M12 14v6"
                      stroke={C.orange}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                num: "04",
                title: "Indoor Air Quality",
                body: "Air purification, humidifiers, and duct cleaning. Breathe easier with our comprehensive indoor air quality solutions.",
                icon: (
                  <svg width="30" height="30" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M8 2s3 0 3 4-3 4-3 8M12 2s3 0 3 4-3 4-3 8M16 2s3 0 3 4-3 4-3 8"
                      stroke={C.orange}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
              {
                num: "05",
                title: "Maintenance Plans",
                body: "Annual service agreements that extend equipment life, reduce breakdowns, and keep your system running at peak efficiency.",
                icon: (
                  <svg width="30" height="30" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.57 6.57a2 2 0 01-2.83-2.83l6.57-6.57a6 6 0 017.94-7.94L14.7 6.3z"
                      stroke={C.orange}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
            ].map((card) => (
              <div
                key={card.num}
                className="reveal group relative bg-white p-8 transition-all duration-300 hover:-translate-y-1"
                style={{
                  boxShadow: "0 1px 3px rgba(0,0,0,.06)",
                }}
              >
                {/* orange top border */}
                <div
                  className="absolute top-0 left-0 h-[3px] w-12 group-hover:w-full transition-all duration-500"
                  style={{ background: C.orange }}
                />
                {/* faint number */}
                <span
                  className="absolute top-5 right-6 text-5xl select-none"
                  style={{ color: "rgba(12,35,64,.06)", ...barlowC(900) }}
                >
                  {card.num}
                </span>
                <div className="mb-5">{card.icon}</div>
                <h3
                  className="text-lg uppercase mb-3"
                  style={{ ...barlowC(800), color: C.navy }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "#5A6B7E", ...barlow(400) }}
                >
                  {card.body}
                </p>
                <a
                  href="#contact"
                  className="text-[13px] uppercase tracking-wider hover:underline"
                  style={{ color: C.orange, ...barlow(700) }}
                >
                  Get a Quote &rarr;
                </a>
              </div>
            ))}

            {/* card 6 — Emergency */}
            <div
              className="reveal group relative p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              style={{ background: C.navy }}
            >
              <div
                className="absolute top-0 left-0 h-[3px] w-12 group-hover:w-full transition-all duration-500"
                style={{ background: C.orange }}
              />
              <div>
                <div className="mb-5">
                  <svg width="30" height="30" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                      stroke={C.orange}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  className="text-lg uppercase mb-3"
                  style={{ ...barlowC(800), color: C.white }}
                >
                  Emergency Service
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "rgba(255,255,255,.55)", ...barlow(400) }}
                >
                  No heat in January? Burst pipe at 2 AM? Our 24/7 emergency
                  team is ready to respond — fast, reliable, and always flat-rate.
                </p>
              </div>
              <a
                href="tel:5558024100"
                className="text-2xl hover:underline"
                style={{ color: C.orange, ...barlowC(800) }}
              >
                (555) 802-4100
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── 8. WHY CHOOSE US ─────────── */}
      <section className="py-20 md:py-28" style={{ background: C.navy }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* left — image */}
          <div className="relative reveal">
            <img
              src="/images/demos/hvac/HVAC4.png"
              alt="Summit HVAC technician"
              className="w-full object-cover"
              style={{ height: 540 }}
            />
            <div
              className="absolute bottom-6 right-6 px-6 py-4"
              style={{ background: C.orange }}
            >
              <span
                className="text-white text-[13px] uppercase tracking-wider block"
                style={barlow(700)}
              >
                12+ Years
              </span>
              <span
                className="text-white/70 text-[11px] uppercase tracking-wider"
                style={barlow(500)}
              >
                Serving Indianapolis
              </span>
            </div>
          </div>

          {/* right — content */}
          <div className="reveal">
            <Eyebrow>Why Summit</Eyebrow>
            <SectionTitle light>
              The Summit
              <br />
              Difference.
            </SectionTitle>
            <div className="mt-8 space-y-0">
              {[
                "Upfront Flat-Rate Pricing",
                "100% Background-Checked Technicians",
                "Same-Day & Emergency Response",
                "Satisfaction Guaranteed",
              ].map((item) => (
                <div
                  key={item}
                  className="group flex items-center gap-4 py-4 border-l-2 border-transparent hover:border-orange-400 pl-4 transition-all"
                >
                  <div
                    className="w-9 h-9 flex items-center justify-center shrink-0"
                    style={{ background: C.orange }}
                  >
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="#fff"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span
                    className="text-white text-base"
                    style={barlow(500)}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── 9. ABOUT / TEAM ─────────── */}
      <section id="about" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          {/* left — overlapping images */}
          <div className="relative reveal" style={{ minHeight: 480 }}>
            <img
              src="/images/demos/hvac/HVAC3.png"
              alt="Summit Air team"
              className="relative z-10 object-cover"
              style={{ width: "72%", height: 420 }}
            />
            <img
              src="/images/demos/hvac/HVAC5.png"
              alt="Summit Air work"
              className="absolute bottom-0 right-0 z-20 object-cover border-4 border-white"
              style={{ width: "55%", height: 300 }}
            />
          </div>

          {/* right — content */}
          <div className="reveal">
            <Eyebrow>About Us</Eyebrow>
            <SectionTitle>Built on Trust.</SectionTitle>
            <p
              className="mt-5 text-base leading-relaxed mb-8"
              style={{ color: "#5A6B7E", ...barlow(400) }}
            >
              Summit Air &amp; Plumbing was founded with one simple mission: deliver
              honest, high-quality home comfort services to Indianapolis families.
              Over 12 years later, that mission hasn&rsquo;t changed. Every technician on
              our team is background-checked, drug-tested, and factory-trained — so
              you can feel safe and confident every time we knock on your door.
            </p>

            {/* stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "12+", label: "Years" },
                { value: "800+", label: "Reviews" },
                { value: "24/7", label: "Emergency" },
                { value: "100%", label: "Satisfaction" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="p-5"
                  style={{ background: C.offWhite }}
                >
                  <div
                    className="text-3xl mb-1"
                    style={{ ...barlowC(800), color: C.navy }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-[12px] uppercase tracking-wider"
                    style={{ color: "#5A6B7E", ...barlow(600) }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── 10. SERVICE AREA ─────────── */}
      <section className="py-20 md:py-28" style={{ background: C.navy2 }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          {/* left */}
          <div className="reveal">
            <Eyebrow>Service Area</Eyebrow>
            <SectionTitle light>
              Proudly Serving
              <br />
              Indianapolis &amp; Beyond.
            </SectionTitle>
            <div className="flex flex-wrap gap-2 mt-8">
              {[
                "Indianapolis",
                "Carmel",
                "Fishers",
                "Noblesville",
                "Westfield",
                "Zionsville",
                "Greenwood",
                "Brownsburg",
                "Avon",
                "Lawrence",
                "Speedway",
                "Beech Grove",
              ].map((city) => (
                <span
                  key={city}
                  className="px-4 py-2 text-[12px] uppercase tracking-wider border border-white/20 text-white/70 hover:text-white cursor-default transition-all"
                  style={{
                    ...barlow(600),
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.background = C.orange;
                    (e.target as HTMLElement).style.borderColor = C.orange;
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.background = "transparent";
                    (e.target as HTMLElement).style.borderColor =
                      "rgba(255,255,255,.2)";
                  }}
                >
                  {city}
                </span>
              ))}
            </div>
          </div>

          {/* right — map placeholder */}
          <div
            className="reveal w-full flex items-center justify-center"
            style={{
              background: "rgba(255,255,255,.04)",
              border: "1px solid rgba(255,255,255,.1)",
              minHeight: 380,
            }}
          >
            <div className="text-center">
              <svg
                width="48"
                height="48"
                fill="none"
                viewBox="0 0 24 24"
                className="mx-auto mb-4"
              >
                <path
                  d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                  stroke={C.orange}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="10"
                  r="3"
                  stroke={C.orange}
                  strokeWidth="1.5"
                />
              </svg>
              <span
                className="text-white/40 text-xs uppercase tracking-widest"
                style={barlow(600)}
              >
                Interactive Map
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── 11. TESTIMONIALS ─────────── */}
      <section
        id="reviews"
        className="py-20 md:py-28"
        style={{ background: C.offWhite }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* header */}
          <div className="flex flex-wrap items-end justify-between mb-14 reveal">
            <div>
              <Eyebrow>Testimonials</Eyebrow>
              <SectionTitle>What Our Customers Say.</SectionTitle>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="text-4xl"
                style={{ ...barlowC(800), color: C.navy }}
              >
                4.9
              </span>
              <svg width="26" height="26" fill="#F5A623" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
              </svg>
            </div>
          </div>

          {/* cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Our furnace died on the coldest night of the year. Summit had a tech at our door in under an hour. Incredible service.",
                name: "Michael R.",
                loc: "Indianapolis, IN",
                initial: "M",
              },
              {
                quote:
                  "Transparent pricing, clean work, and genuinely friendly people. They replaced our entire AC system and it was a seamless experience.",
                name: "Sarah T.",
                loc: "Carmel, IN",
                initial: "S",
              },
              {
                quote:
                  "I've tried three other companies. Summit is the only one that showed up on time, explained everything clearly, and didn't try to upsell me.",
                name: "David L.",
                loc: "Fishers, IN",
                initial: "D",
              },
            ].map((review, idx) => (
              <div
                key={idx}
                className="reveal group relative bg-white p-8 transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,.06)" }}
              >
                {/* Google badge */}
                <div
                  className="absolute top-6 right-6 flex items-center gap-1 text-[11px] uppercase tracking-wider px-2 py-1"
                  style={{
                    background: C.offWhite,
                    color: "#5A6B7E",
                    ...barlow(600),
                  }}
                >
                  Google{" "}
                  <svg width="12" height="12" fill="#F5A623" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                  </svg>
                </div>

                {/* stars */}
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="16"
                      height="16"
                      fill="#F5A623"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* quote */}
                <p
                  className="italic leading-relaxed mb-6 text-[15px]"
                  style={{ color: "#3A4A5E", ...barlow(400) }}
                >
                  <span
                    className="not-italic text-2xl leading-none mr-1"
                    style={{ color: C.orange, ...barlowC(800) }}
                  >
                    &ldquo;
                  </span>
                  {review.quote}
                </p>

                {/* author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 flex items-center justify-center text-white text-sm"
                    style={{ background: C.navy, ...barlow(700) }}
                  >
                    {review.initial}
                  </div>
                  <div>
                    <div
                      className="text-sm"
                      style={{ color: C.navy, ...barlow(700) }}
                    >
                      {review.name}
                    </div>
                    <div
                      className="text-[11px] uppercase tracking-wider"
                      style={{ color: "#8A97A8", ...barlow(500) }}
                    >
                      {review.loc}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── 12. CTA / CONTACT ─────────── */}
      <section id="contact" className="relative py-20 md:py-28 overflow-hidden" style={{ background: C.navy }}>
        {/* bg image */}
        <img
          src="/images/demos/hvac/HVAC3.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.15 }}
        />
        <div className="absolute inset-0" style={{ background: `${C.navy}e8` }} />

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14">
          {/* left — info */}
          <div className="reveal">
            <Eyebrow>Get In Touch</Eyebrow>
            <h2
              className="text-4xl md:text-5xl uppercase leading-tight mb-5"
              style={{ ...barlowC(900), color: C.white }}
            >
              Ready to Get
              <br />
              It <span style={{ color: C.orange }}>Fixed?</span>
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-md"
              style={{ color: "rgba(255,255,255,.6)", ...barlow(400) }}
            >
              Whether it&rsquo;s a routine tune-up or a midnight emergency, our team is
              ready. Call us directly or fill out the form — we respond to every
              request within the hour.
            </p>

            <a
              href="tel:5558024100"
              className="block mb-8 hover:underline"
              style={{ ...barlowC(900), fontSize: 52, color: C.orange }}
            >
              (555) 802-4100
            </a>

            <div className="space-y-4">
              {[
                { label: "Email", value: "service@summitairplumbing.com" },
                { label: "Location", value: "Indianapolis, IN 46204" },
                {
                  label: "Hours",
                  value: "Mon–Sat 7 AM – 9 PM · Sun: Emergency",
                },
              ].map((info) => (
                <div key={info.label} className="flex gap-3">
                  <span
                    className="text-[11px] uppercase tracking-wider w-16 shrink-0 pt-0.5"
                    style={{ color: "rgba(255,255,255,.35)", ...barlow(600) }}
                  >
                    {info.label}
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: "rgba(255,255,255,.75)", ...barlow(400) }}
                  >
                    {info.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* right — form */}
          <div className="reveal">
            <div className="bg-white p-8 md:p-10">
              <h3
                className="text-xl uppercase mb-6"
                style={{ ...barlowC(800), color: C.navy }}
              >
                Request Service Online
              </h3>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-4"
              >
                {/* name + phone row */}
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 text-sm border border-gray-200 outline-none focus:border-orange-400 transition"
                    style={barlow(400)}
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 text-sm border border-gray-200 outline-none focus:border-orange-400 transition"
                    style={barlow(400)}
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 text-sm border border-gray-200 outline-none focus:border-orange-400 transition"
                  style={barlow(400)}
                />

                <select
                  className="w-full px-4 py-3 text-sm border border-gray-200 outline-none focus:border-orange-400 transition text-gray-500"
                  style={barlow(400)}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Service Needed
                  </option>
                  <option>Heating / Furnace</option>
                  <option>Air Conditioning</option>
                  <option>Plumbing</option>
                  <option>Indoor Air Quality</option>
                  <option>Maintenance Plan</option>
                  <option>Emergency Service</option>
                  <option>Other</option>
                </select>

                <textarea
                  rows={4}
                  placeholder="Tell us about the issue..."
                  className="w-full px-4 py-3 text-sm border border-gray-200 outline-none focus:border-orange-400 transition resize-none"
                  style={barlow(400)}
                />

                <button
                  type="submit"
                  className="w-full py-3.5 text-white text-sm uppercase tracking-widest hover:brightness-110 transition"
                  style={{ background: C.orange, ...barlow(700) }}
                >
                  Submit Request
                </button>

                <p
                  className="text-[11px] text-center"
                  style={{ color: "#8A97A8", ...barlow(400) }}
                >
                  We respond to every request within 1 hour during business hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── 13. FOOTER ─────────── */}
      <footer style={{ background: C.navyDark }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* col 1 — brand */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div
                  className="w-9 h-9 flex items-center justify-center"
                  style={{ background: C.navy }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 10.5L12 3l9 7.5V21a1 1 0 01-1 1H4a1 1 0 01-1-1V10.5z"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 22V12h6v10"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span
                  className="text-base tracking-tight text-white"
                  style={barlowC(800)}
                >
                  Summit Air &amp; Plumbing
                </span>
              </div>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "rgba(255,255,255,.45)", ...barlow(400) }}
              >
                Indianapolis&rsquo;s trusted HVAC and plumbing professionals.
                Flat-rate pricing, 24/7 availability, 100% satisfaction guaranteed.
              </p>
              <div className="space-y-2">
                <a
                  href="tel:5558024100"
                  className="block text-sm hover:underline"
                  style={{ color: C.orange, ...barlow(600) }}
                >
                  (555) 802-4100
                </a>
                <span
                  className="block text-sm"
                  style={{ color: "rgba(255,255,255,.4)", ...barlow(400) }}
                >
                  service@summitairplumbing.com
                </span>
                <span
                  className="block text-sm"
                  style={{ color: "rgba(255,255,255,.4)", ...barlow(400) }}
                >
                  Indianapolis, IN 46204
                </span>
              </div>
            </div>

            {/* col 2 — Services */}
            <div>
              <h4
                className="text-[12px] uppercase tracking-widest mb-5"
                style={{ color: "rgba(255,255,255,.35)", ...barlow(700) }}
              >
                Services
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Heating Systems",
                  "Air Conditioning",
                  "Plumbing Services",
                  "Indoor Air Quality",
                  "Maintenance Plans",
                  "Emergency Service",
                ].map((s) => (
                  <li key={s}>
                    <a
                      href="#services"
                      className="text-sm hover:underline"
                      style={{ color: "rgba(255,255,255,.55)", ...barlow(400) }}
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* col 3 — Company */}
            <div>
              <h4
                className="text-[12px] uppercase tracking-widest mb-5"
                style={{ color: "rgba(255,255,255,.35)", ...barlow(700) }}
              >
                Company
              </h4>
              <ul className="space-y-2.5">
                {[
                  "About Us",
                  "Our Team",
                  "Careers",
                  "Reviews",
                  "Blog",
                  "Contact",
                ].map((s) => (
                  <li key={s}>
                    <a
                      href={`#${s.toLowerCase().replace(/\s+/g, "")}`}
                      className="text-sm hover:underline"
                      style={{ color: "rgba(255,255,255,.55)", ...barlow(400) }}
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* col 4 — Service Area */}
            <div>
              <h4
                className="text-[12px] uppercase tracking-widest mb-5"
                style={{ color: "rgba(255,255,255,.35)", ...barlow(700) }}
              >
                Service Area
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Indianapolis",
                  "Carmel",
                  "Fishers",
                  "Noblesville",
                  "Westfield",
                  "Zionsville",
                ].map((s) => (
                  <li key={s}>
                    <span
                      className="text-sm"
                      style={{ color: "rgba(255,255,255,.55)", ...barlow(400) }}
                    >
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div
          className="border-t"
          style={{ borderColor: "rgba(255,255,255,.07)" }}
        >
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-3">
            <span
              className="text-[11px]"
              style={{ color: "rgba(255,255,255,.3)", ...barlow(400) }}
            >
              &copy; {new Date().getFullYear()} Summit Air &amp; Plumbing. All rights reserved.
            </span>
            <a
              href="https://jadorworks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] hover:underline"
              style={{ color: "rgba(255,255,255,.35)", ...barlow(500) }}
            >
              Built by JadorWorks Web Studio &rarr;
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
