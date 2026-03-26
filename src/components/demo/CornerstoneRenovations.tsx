"use client";

import { useEffect, useRef } from "react";

/* ------------------------------------------------------------------ */
/*  Cornerstone Renovations — Full One-Page Remodeling Demo            */
/*  Built by JadorWorks Web Studio                                     */
/*  Design: Cael Voss                                                  */
/* ------------------------------------------------------------------ */

// -- colour tokens ---------------------------------------------------
const C = {
  charcoal: "#2C2C2C",
  charcoal2: "#1A1A1A",
  wood: "#B8875A",
  woodLt: "#CFA070",
  cream: "#FAF8F5",
  cream2: "#F0EDE7",
  white: "#FFFFFF",
  gray: "#6B6B6B",
  lightgray: "#E8E4DF",
};

// -- font helpers (inline style objects) ------------------------------
const serif = (
  weight: number,
  extra?: React.CSSProperties
): React.CSSProperties => ({
  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
  fontWeight: weight,
  ...extra,
});

const sans = (
  weight: number,
  extra?: React.CSSProperties
): React.CSSProperties => ({
  fontFamily: "var(--font-dm-sans), 'DM Sans', system-ui, sans-serif",
  fontWeight: weight,
  ...extra,
});

// -- reusable tiny components -----------------------------------------
function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className="reveal flex items-center gap-3.5 mb-3.5"
      style={{
        ...sans(600),
        fontSize: 11,
        letterSpacing: ".24em",
        textTransform: "uppercase",
        color: C.wood,
      }}
    >
      <span
        style={{
          width: 28,
          height: 1,
          background: C.wood,
          flexShrink: 0,
        }}
      />
      {children}
    </div>
  );
}

function SectionTitle({
  children,
  light = false,
  className = "",
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <h2
      className={`reveal d1 ${className}`}
      style={{
        ...serif(300),
        fontSize: "clamp(36px, 4vw, 58px)",
        lineHeight: 1.08,
        letterSpacing: "-.01em",
        color: light ? C.white : C.charcoal,
        marginBottom: 18,
      }}
    >
      {children}
    </h2>
  );
}

function StarGroup() {
  return (
    <div className="flex gap-[3px]">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={C.wood}
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

/* ==================================================================== */
/*  MAIN COMPONENT                                                       */
/* ==================================================================== */
export function CornerstoneRenovations() {
  const mainRef = useRef<HTMLDivElement>(null);

  // -- scroll-reveal via Intersection Observer -------------------------
  useEffect(() => {
    const els = mainRef.current?.querySelectorAll(".reveal");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("on");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.07 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={mainRef} style={{ background: C.white, color: C.charcoal }}>
      {/* Injected styles */}
      <style>{`
        .reveal{opacity:0;transform:translateY(24px);transition:opacity .85s cubic-bezier(.22,1,.36,1),transform .85s cubic-bezier(.22,1,.36,1)}
        .reveal.on{opacity:1;transform:translateY(0)}
        .d1{transition-delay:.08s}.d2{transition-delay:.16s}.d3{transition-delay:.24s}
        .d4{transition-delay:.32s}.d5{transition-delay:.40s}
        .svc-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:${C.wood};transform:scaleX(0);transform-origin:left;transition:transform .35s cubic-bezier(.22,1,.36,1)}
        .svc-card:hover::before{transform:scaleX(1)}
        .svc-card:hover{background:${C.charcoal}!important;transform:translateY(-4px);box-shadow:0 12px 40px rgba(44,44,44,.15)}
        .svc-card:hover .svc-num{color:rgba(255,255,255,.06)!important}
        .svc-card:hover .svc-title{color:${C.white}!important}
        .svc-card:hover .svc-body{color:rgba(255,255,255,.5)!important}
        .svc-card:hover .svc-link{color:${C.wood}!important}
        .testi-card::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:${C.wood};transform:scaleX(0);transition:transform .4s cubic-bezier(.22,1,.36,1)}
        .testi-card:hover::after{transform:scaleX(1)}
        .testi-card:hover{transform:translateY(-4px);box-shadow:0 12px 40px rgba(44,44,44,.08)}
        .gallery-item img{transition:transform .6s cubic-bezier(.22,1,.36,1)}
        .gallery-item:hover img{transform:scale(1.05)}
        .process-step:hover{background:rgba(255,255,255,.05)!important}
        .area-city:hover{background:${C.charcoal}!important;color:${C.white}!important;border-color:${C.charcoal}!important}
      `}</style>

      {/* ============================================================ */}
      {/* DEMO BANNER                                                   */}
      {/* ============================================================ */}
      <div
        style={{
          background: C.charcoal2,
          textAlign: "center",
          padding: "8px 16px",
          ...sans(500),
          fontSize: 12,
          letterSpacing: ".08em",
          color: "rgba(255,255,255,.45)",
        }}
      >
        This is a demo site built by{" "}
        <a
          href="/"
          style={{
            color: C.wood,
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          JadorWorks Web Studio
        </a>
      </div>

      {/* ============================================================ */}
      {/* TOP BAR                                                       */}
      {/* ============================================================ */}
      <div
        style={{
          background: C.cream2,
          padding: "10px 56px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: `1px solid ${C.lightgray}`,
        }}
      >
        <div
          className="flex gap-7"
          style={{ ...sans(400), fontSize: 12, color: C.gray }}
        >
          <span>Indianapolis, IN &middot; Serving the Greater Indianapolis Metro</span>
          <span>Mon&ndash;Fri 8am&ndash;6pm &middot; Sat by Appointment</span>
        </div>
        <a
          href="tel:5556102385"
          className="flex items-center gap-1.5 hover:text-[#B8875A] transition-colors"
          style={{
            ...sans(600),
            fontSize: 13,
            color: C.charcoal,
            textDecoration: "none",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          (555) 610-2385
        </a>
      </div>

      {/* ============================================================ */}
      {/* NAV                                                           */}
      {/* ============================================================ */}
      <nav
        style={{
          background: C.white,
          padding: "0 56px",
          height: 78,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 100,
          borderBottom: `1px solid ${C.lightgray}`,
        }}
      >
        <a
          href="#"
          style={{
            textDecoration: "none",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <div
            style={{
              ...serif(600),
              fontSize: 22,
              letterSpacing: ".04em",
              color: C.charcoal,
              lineHeight: 1,
            }}
          >
            Cornerstone Renovations
          </div>
          <div
            style={{
              ...sans(500),
              fontSize: 9,
              letterSpacing: ".22em",
              textTransform: "uppercase",
              color: C.wood,
            }}
          >
            Indianapolis &middot; Est. 2009
          </div>
        </a>
        <ul className="flex gap-9 list-none">
          {["Services", "Our Work", "About", "Reviews", "Contact"].map(
            (label) => (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase().replace(/\s/g, "")}`}
                  className="hover:text-[#B8875A] transition-colors"
                  style={{
                    ...sans(500),
                    fontSize: 13,
                    color: C.charcoal,
                    textDecoration: "none",
                    letterSpacing: ".04em",
                    textTransform: "uppercase",
                  }}
                >
                  {label}
                </a>
              </li>
            )
          )}
        </ul>
        <button
          className="hover:bg-[#B8875A] transition-colors"
          style={{
            ...sans(600),
            fontSize: 12,
            letterSpacing: ".1em",
            textTransform: "uppercase",
            color: C.white,
            background: C.charcoal,
            border: "none",
            padding: "14px 28px",
            cursor: "pointer",
          }}
        >
          Get a Free Estimate
        </button>
      </nav>

      {/* ============================================================ */}
      {/* HERO                                                          */}
      {/* ============================================================ */}
      <section
        style={{
          position: "relative",
          height: "92vh",
          minHeight: 620,
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-end",
          padding: 0,
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/images/demos/remodeling/REMODEL5b.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(26,26,26,.92) 0%, rgba(26,26,26,.6) 45%, rgba(26,26,26,.2) 100%)",
          }}
        />
        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "0 56px 72px",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "flex-end",
          }}
        >
          <div>
            <div
              style={{
                ...sans(600),
                fontSize: 11,
                letterSpacing: ".28em",
                textTransform: "uppercase",
                color: C.wood,
                marginBottom: 20,
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <span
                style={{
                  width: 32,
                  height: 1,
                  background: C.wood,
                  flexShrink: 0,
                }}
              />
              Indianapolis Remodeling Experts
            </div>
            <h1
              style={{
                ...serif(300),
                fontSize: "clamp(48px, 6vw, 82px)",
                lineHeight: 1.08,
                letterSpacing: "-.01em",
                color: C.white,
                marginBottom: 24,
              }}
            >
              Your home deserves
              <br />
              better than
              <br />
              <em style={{ fontStyle: "italic", color: C.woodLt }}>
                &ldquo;good enough.&rdquo;
              </em>
            </h1>
            <p
              style={{
                ...sans(300),
                fontSize: 16,
                lineHeight: 1.7,
                color: "rgba(255,255,255,.65)",
                maxWidth: 460,
                marginBottom: 40,
              }}
            >
              Full-service remodeling for homeowners who want it done right the
              first time. Design, build, and finish &mdash; all under one roof.
            </p>
            <div className="flex gap-4 items-center">
              <button
                className="hover:bg-[#CFA070] hover:-translate-y-0.5 transition-all"
                style={{
                  ...sans(600),
                  fontSize: 12,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: C.white,
                  background: C.wood,
                  border: "none",
                  padding: "18px 36px",
                  cursor: "pointer",
                }}
              >
                Get a Free Estimate
              </button>
              <button
                className="hover:border-[#B8875A] hover:text-[#CFA070] transition-all"
                style={{
                  ...sans(600),
                  fontSize: 12,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: C.white,
                  background: "none",
                  border: "1.5px solid rgba(255,255,255,.4)",
                  padding: "16px 32px",
                  cursor: "pointer",
                }}
              >
                See Our Work
              </button>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div className="flex gap-12 justify-end">
              {[
                { num: "15+", label: "Years of Craftsmanship" },
                { num: "400+", label: "Projects Completed" },
                { num: "4.9\u2605", label: "Average Rating" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex gap-12">
                  {i > 0 && (
                    <div
                      style={{
                        width: 1,
                        background: "rgba(255,255,255,.15)",
                        alignSelf: "stretch",
                      }}
                    />
                  )}
                  <div style={{ textAlign: "right" }}>
                    <div
                      style={{
                        ...serif(300),
                        fontSize: 56,
                        letterSpacing: "-.02em",
                        color: C.white,
                        lineHeight: 1,
                      }}
                    >
                      {stat.num}
                    </div>
                    <div
                      style={{
                        ...sans(500),
                        fontSize: 10,
                        letterSpacing: ".16em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,.5)",
                        marginTop: 6,
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* TRUST BAR                                                     */}
      {/* ============================================================ */}
      <div
        style={{
          background: C.wood,
          padding: "20px 56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 48,
          flexWrap: "wrap",
        }}
      >
        {[
          {
            icon: (
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
            ),
            label: "Fully Managed Projects",
          },
          {
            icon: (
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
            ),
            label: "Design-to-Build Service",
          },
          {
            icon: (
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            ),
            label: "Licensed & Insured",
          },
          {
            icon: (
              <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
            ),
            label: "Free Estimates",
          },
        ].map((item, i) => (
          <div key={item.label} className="flex items-center gap-10">
            {i > 0 && (
              <div
                style={{
                  width: 1,
                  height: 20,
                  background: "rgba(255,255,255,.3)",
                }}
              />
            )}
            <div
              className="flex items-center gap-2.5"
              style={{
                ...sans(600),
                fontSize: 12,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: C.white,
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="rgba(255,255,255,.85)"
                style={{ flexShrink: 0 }}
              >
                {item.icon}
              </svg>
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* ============================================================ */}
      {/* GALLERY                                                       */}
      {/* ============================================================ */}
      <section
        id="ourwork"
        style={{ background: C.charcoal2, padding: 0 }}
      >
        <div
          style={{
            padding: "80px 56px 56px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "end",
          }}
        >
          <div>
            <Eyebrow>Our Portfolio</Eyebrow>
            <SectionTitle light>
              Craftsmanship that
              <br />
              <em style={{ fontStyle: "italic", color: C.wood }}>
                speaks for itself.
              </em>
            </SectionTitle>
          </div>
          <p
            className="reveal d2"
            style={{
              ...sans(300),
              fontSize: 16,
              lineHeight: 1.75,
              color: "rgba(255,255,255,.5)",
              maxWidth: 560,
            }}
          >
            Every project is a collaboration. We design it with you, build it
            to last, and finish it to a standard that exceeds expectations.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 2,
          }}
        >
          {/* Gallery Item 1 - Kitchen */}
          <div
            className="gallery-item reveal d1"
            style={{ position: "relative", overflow: "hidden", cursor: "pointer" }}
          >
            <img
              src="/images/demos/remodeling/REMODEL5b.png"
              alt="Kitchen Remodeling"
              style={{
                width: "100%",
                height: 360,
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "28px 24px 24px",
                background:
                  "linear-gradient(to top, rgba(26,26,26,.85) 0%, transparent 100%)",
              }}
            >
              <div
                style={{
                  ...sans(600),
                  fontSize: 10,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: C.wood,
                  marginBottom: 4,
                }}
              >
                Kitchen
              </div>
              <div
                style={{
                  ...serif(400),
                  fontSize: 20,
                  color: C.white,
                }}
              >
                Modern Kitchen Remodel
              </div>
            </div>
          </div>

          {/* Gallery Item 2 - Before/After (spans 2 cols) */}
          <div
            className="gallery-item reveal d2"
            style={{
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              gridColumn: "span 2",
            }}
          >
            <img
              src="/images/demos/remodeling/REMODEL2.png"
              alt="Basement Before & After"
              style={{
                width: "100%",
                height: 480,
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "28px 24px 24px",
                background:
                  "linear-gradient(to top, rgba(26,26,26,.85) 0%, transparent 100%)",
              }}
            >
              <div
                style={{
                  ...sans(600),
                  fontSize: 10,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: C.wood,
                  marginBottom: 4,
                }}
              >
                Before & After
              </div>
              <div style={{ ...serif(400), fontSize: 20, color: C.white }}>
                Full Basement Transformation
              </div>
            </div>
          </div>

          {/* Gallery Item 3 - Master Bath */}
          <div
            className="gallery-item reveal d1"
            style={{ position: "relative", overflow: "hidden", cursor: "pointer" }}
          >
            <img
              src="/images/demos/remodeling/REMODEL3.png"
              alt="Bathroom Renovation"
              style={{
                width: "100%",
                height: 360,
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "28px 24px 24px",
                background:
                  "linear-gradient(to top, rgba(26,26,26,.85) 0%, transparent 100%)",
              }}
            >
              <div
                style={{
                  ...sans(600),
                  fontSize: 10,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: C.wood,
                  marginBottom: 4,
                }}
              >
                Bathroom
              </div>
              <div style={{ ...serif(400), fontSize: 20, color: C.white }}>
                Master Bath Renovation
              </div>
            </div>
          </div>

          {/* Gallery Item 4 - Entertainment Basement */}
          <div
            className="gallery-item reveal d2"
            style={{ position: "relative", overflow: "hidden", cursor: "pointer" }}
          >
            <img
              src="/images/demos/remodeling/REMODEL1.png"
              alt="Basement Finishing"
              style={{
                width: "100%",
                height: 360,
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "28px 24px 24px",
                background:
                  "linear-gradient(to top, rgba(26,26,26,.85) 0%, transparent 100%)",
              }}
            >
              <div
                style={{
                  ...sans(600),
                  fontSize: 10,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: C.wood,
                  marginBottom: 4,
                }}
              >
                Basement
              </div>
              <div style={{ ...serif(400), fontSize: 20, color: C.white }}>
                Entertainment Basement
              </div>
            </div>
          </div>

          {/* Gallery Item 5 - Spa Bathroom */}
          <div
            className="gallery-item reveal d3"
            style={{ position: "relative", overflow: "hidden", cursor: "pointer" }}
          >
            <img
              src="/images/demos/remodeling/REMODEL4a.png"
              alt="Spa Bathroom"
              style={{
                width: "100%",
                height: 360,
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "28px 24px 24px",
                background:
                  "linear-gradient(to top, rgba(26,26,26,.85) 0%, transparent 100%)",
              }}
            >
              <div
                style={{
                  ...sans(600),
                  fontSize: 10,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: C.wood,
                  marginBottom: 4,
                }}
              >
                Bathroom
              </div>
              <div style={{ ...serif(400), fontSize: 20, color: C.white }}>
                Spa Bathroom Remodel
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "40px 56px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            className="hover:bg-[#CFA070] hover:-translate-y-0.5 transition-all"
            style={{
              ...sans(600),
              fontSize: 11,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: C.white,
              background: C.wood,
              border: "none",
              padding: "16px 40px",
              cursor: "pointer",
            }}
          >
            View Full Portfolio
          </button>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SERVICES                                                      */}
      {/* ============================================================ */}
      <section id="services" style={{ background: C.cream, padding: "100px 56px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "end",
            marginBottom: 64,
          }}
        >
          <div>
            <Eyebrow>What We Build</Eyebrow>
            <SectionTitle>
              Every room.
              <br />
              <em style={{ fontStyle: "italic", color: C.wood }}>
                Transformed.
              </em>
            </SectionTitle>
          </div>
          <p
            className="reveal d2"
            style={{
              ...sans(300),
              fontSize: 16,
              lineHeight: 1.75,
              color: C.gray,
              maxWidth: 560,
            }}
          >
            From a single bathroom to a full home renovation &mdash; we bring
            the same attention to detail, the same craftsmanship, and the same
            commitment to every project.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 1,
            background: C.lightgray,
            border: `1px solid ${C.lightgray}`,
          }}
        >
          {[
            {
              num: "01",
              title: "Kitchen Remodeling",
              body: "Custom cabinets, countertops, islands, and complete kitchen transformations that balance beauty with function.",
            },
            {
              num: "02",
              title: "Bathroom Renovations",
              body: "From powder rooms to master suites \u2014 tile, fixtures, vanities, showers, and complete bathroom redesigns.",
            },
            {
              num: "03",
              title: "Basement Finishing",
              body: "Turn unused space into your favorite room. Entertainment areas, home offices, bars, gyms \u2014 we build it all.",
            },
            {
              num: "04",
              title: "Room Additions",
              body: "Expand your living space with seamlessly integrated additions that match your home\u2019s existing style and structure.",
            },
            {
              num: "05",
              title: "Full Home Renovations",
              body: "Whole-home transformations managed from design through final walkthrough. One team, one vision, zero stress.",
            },
          ].map((svc, i) => (
            <div
              key={svc.num}
              className={`svc-card reveal d${i + 1}`}
              style={{
                background: C.white,
                padding: "36px 28px",
                position: "relative",
                overflow: "hidden",
                transition:
                  "background .25s, transform .25s cubic-bezier(.22,1,.36,1)",
                cursor: "pointer",
              }}
            >
              <div
                className="svc-num"
                style={{
                  ...serif(300),
                  fontSize: 52,
                  color: "rgba(44,44,44,.06)",
                  lineHeight: 1,
                  marginBottom: 20,
                  transition: "color .25s",
                }}
              >
                {svc.num}
              </div>
              <div
                className="svc-title"
                style={{
                  ...serif(500),
                  fontSize: 20,
                  color: C.charcoal,
                  marginBottom: 10,
                  lineHeight: 1.2,
                  transition: "color .25s",
                }}
              >
                {svc.title}
              </div>
              <div
                className="svc-body"
                style={{
                  ...sans(300),
                  fontSize: 13,
                  lineHeight: 1.65,
                  color: C.gray,
                  marginBottom: 18,
                  transition: "color .25s",
                }}
              >
                {svc.body}
              </div>
              <a
                href="#contact"
                className="svc-link"
                style={{
                  ...sans(600),
                  fontSize: 11,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: C.wood,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  transition: "gap .2s, color .25s",
                }}
              >
                Get Estimate &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* ABOUT                                                         */}
      {/* ============================================================ */}
      <section id="about" style={{ background: C.white, padding: "100px 56px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          <div
            className="reveal"
            style={{ position: "relative", height: 600 }}
          >
            <img
              src="/images/demos/remodeling/REMODEL4b.png"
              alt="Cornerstone project manager reviewing plans"
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "70%",
                height: "78%",
                objectFit: "cover",
              }}
            />
            <img
              src="/images/demos/remodeling/REMODEL5a.png"
              alt="Cornerstone craftsman at work"
              style={{
                position: "absolute",
                right: 0,
                bottom: 0,
                width: "52%",
                height: "52%",
                objectFit: "cover",
                border: `8px solid ${C.white}`,
                boxShadow: "0 8px 40px rgba(44,44,44,.12)",
              }}
            />
          </div>
          <div>
            <Eyebrow>About Cornerstone</Eyebrow>
            <SectionTitle>
              Built on integrity.
              <br />
              <em style={{ fontStyle: "italic", color: C.wood }}>
                Finished with pride.
              </em>
            </SectionTitle>
            <p
              className="reveal d2"
              style={{
                ...sans(300),
                fontSize: 16,
                lineHeight: 1.75,
                color: C.gray,
                maxWidth: 560,
              }}
            >
              Cornerstone Renovations has been transforming homes across the
              Indianapolis metro for over 15 years. From single-room
              renovations to full-scale additions, we manage every phase of the
              project &mdash; so you never have to coordinate multiple
              contractors.
            </p>
            <blockquote
              className="reveal d3"
              style={{
                ...serif(300),
                fontSize: 26,
                fontStyle: "italic",
                lineHeight: 1.5,
                color: C.charcoal,
                borderLeft: `2px solid ${C.wood}`,
                paddingLeft: 24,
                margin: "32px 0",
              }}
            >
              We don&apos;t just build what you ask for. We build what you
              actually want &mdash; and we don&apos;t stop until it&apos;s
              right.
            </blockquote>
            <div
              className="reveal d4"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 2,
                marginTop: 40,
              }}
            >
              {[
                { num: "15+", label: "Years in Business" },
                { num: "400+", label: "Projects Completed" },
                { num: "4.9\u2605", label: "Average Review Rating" },
                { num: "100%", label: "Satisfaction Guaranteed" },
              ].map((cred) => (
                <div
                  key={cred.label}
                  style={{ background: C.cream, padding: 24 }}
                >
                  <div
                    style={{
                      ...serif(300),
                      fontSize: 38,
                      color: C.wood,
                      lineHeight: 1,
                    }}
                  >
                    {cred.num}
                  </div>
                  <div
                    style={{
                      ...sans(600),
                      fontSize: 11,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: C.charcoal,
                      marginTop: 6,
                    }}
                  >
                    {cred.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PROCESS                                                       */}
      {/* ============================================================ */}
      <section style={{ background: C.charcoal, padding: "100px 56px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "end",
          }}
        >
          <div>
            <Eyebrow light>How It Works</Eyebrow>
            <SectionTitle light>
              Simple process.
              <br />
              <em style={{ fontStyle: "italic", color: C.wood }}>
                Exceptional results.
              </em>
            </SectionTitle>
          </div>
          <p
            className="reveal d2"
            style={{
              ...sans(300),
              fontSize: 16,
              lineHeight: 1.75,
              color: "rgba(255,255,255,.45)",
              maxWidth: 560,
            }}
          >
            We&apos;ve refined our process over 15 years to make your
            renovation as smooth and stress-free as possible &mdash; from the
            first conversation to the final walkthrough.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
            background: "rgba(255,255,255,.08)",
            border: "1px solid rgba(255,255,255,.08)",
            marginTop: 60,
          }}
        >
          {[
            {
              num: "01",
              title: "Free Consultation",
              body: "We meet at your home, listen to your vision, and assess the space. No pressure, no commitment.",
            },
            {
              num: "02",
              title: "Design & Estimate",
              body: "We create a detailed design plan and a transparent, itemized estimate. You know exactly what you\u2019re getting and what it costs.",
            },
            {
              num: "03",
              title: "We Build It",
              body: "Our team handles everything \u2014 permits, materials, trades, timelines. You get weekly updates and full transparency throughout.",
            },
            {
              num: "04",
              title: "Final Walkthrough",
              body: "We walk through every detail with you. Nothing is finished until you\u2019re completely satisfied with the result.",
            },
          ].map((step, i) => (
            <div
              key={step.num}
              className={`process-step reveal d${i + 1}`}
              style={{
                background: C.charcoal,
                padding: "40px 32px",
                transition: "background .25s",
              }}
            >
              <div
                style={{
                  ...serif(300),
                  fontSize: 64,
                  color: C.wood,
                  opacity: 0.5,
                  lineHeight: 1,
                  marginBottom: 24,
                }}
              >
                {step.num}
              </div>
              <div
                style={{
                  ...serif(500),
                  fontSize: 22,
                  color: C.white,
                  marginBottom: 10,
                }}
              >
                {step.title}
              </div>
              <div
                style={{
                  ...sans(300),
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,.45)",
                }}
              >
                {step.body}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* SERVICE AREA                                                  */}
      {/* ============================================================ */}
      <section style={{ background: C.cream2, padding: "100px 56px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          <div>
            <Eyebrow>Where We Work</Eyebrow>
            <SectionTitle>
              Serving Indianapolis
              <br />
              &amp;{" "}
              <em style={{ fontStyle: "italic", color: C.wood }}>
                surrounding communities.
              </em>
            </SectionTitle>
            <p
              className="reveal d2"
              style={{
                ...sans(300),
                fontSize: 16,
                lineHeight: 1.75,
                color: C.gray,
                maxWidth: 560,
              }}
            >
              We serve homeowners throughout the greater Indianapolis metro.
              Not sure if we cover your area? Give us a call.
            </p>
            <div
              className="reveal d3 flex flex-wrap gap-2 mt-7"
            >
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
                "Plainfield",
                "Mooresville",
                "Geist",
              ].map((city) => (
                <div
                  key={city}
                  className="area-city"
                  style={{
                    ...sans(500),
                    fontSize: 12,
                    letterSpacing: ".06em",
                    color: C.charcoal,
                    background: C.white,
                    border: `1px solid ${C.lightgray}`,
                    padding: "8px 16px",
                    transition: "all .2s",
                    cursor: "pointer",
                  }}
                >
                  {city}
                </div>
              ))}
            </div>
          </div>
          <div className="reveal d2" style={{ paddingTop: 8 }}>
            <div
              style={{
                background: C.white,
                padding: 40,
                border: `1px solid ${C.lightgray}`,
              }}
            >
              <div
                style={{
                  ...sans(600),
                  fontSize: 11,
                  letterSpacing: ".24em",
                  textTransform: "uppercase",
                  color: C.wood,
                  marginBottom: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <span
                  style={{
                    width: 28,
                    height: 1,
                    background: C.wood,
                    flexShrink: 0,
                  }}
                />
                Hours
              </div>
              <div
                style={{
                  ...sans(400),
                  fontSize: 14,
                  color: C.charcoal,
                  lineHeight: 2,
                }}
              >
                Monday &ndash; Friday: 8:00am &ndash; 6:00pm
                <br />
                Saturday: By Appointment
                <br />
                Sunday: Closed
              </div>
            </div>
            <div
              style={{
                background: C.charcoal,
                padding: 48,
                marginTop: 32,
              }}
            >
              <div
                style={{
                  ...serif(300),
                  fontSize: 30,
                  color: C.white,
                  marginBottom: 12,
                }}
              >
                Ready to start your project?
              </div>
              <div
                style={{
                  ...sans(400),
                  fontSize: 14,
                  color: "rgba(255,255,255,.5)",
                  lineHeight: 1.65,
                  marginBottom: 28,
                }}
              >
                Free estimates with no pressure and no obligation. We come to
                you, assess the space, and give you a clear picture of
                what&apos;s possible.
              </div>
              <a
                href="tel:5556102385"
                style={{
                  ...serif(300),
                  fontSize: 36,
                  color: C.wood,
                  textDecoration: "none",
                  display: "block",
                  marginBottom: 6,
                }}
              >
                (555) 610-2385
              </a>
              <div
                style={{
                  ...sans(500),
                  fontSize: 11,
                  color: "rgba(255,255,255,.35)",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                }}
              >
                Call or text anytime during business hours
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* TESTIMONIALS                                                  */}
      {/* ============================================================ */}
      <section
        id="testimonials"
        style={{ background: C.white, padding: "100px 56px" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 56,
          }}
        >
          <div>
            <Eyebrow>Client Stories</Eyebrow>
            <SectionTitle>
              What our clients
              <br />
              <em style={{ fontStyle: "italic", color: C.wood }}>
                say about us.
              </em>
            </SectionTitle>
          </div>
          <div className="reveal d2" style={{ textAlign: "right" }}>
            <div
              style={{
                ...serif(300),
                fontSize: 52,
                color: C.charcoal,
                lineHeight: 1,
              }}
            >
              4.9 &#9733;
            </div>
            <div
              style={{
                ...sans(400),
                fontSize: 13,
                color: C.gray,
                marginTop: 4,
              }}
            >
              Based on 300+ verified reviews
            </div>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {[
            {
              quote:
                "Our kitchen renovation exceeded every expectation. The team communicated with us every step of the way \u2014 we always knew what was happening and why. The end result is absolutely stunning. We get compliments every time someone visits.",
              name: "Jennifer & Paul M.",
              loc: "Carmel, IN \u00b7 Kitchen Remodel",
              initial: "J",
            },
            {
              quote:
                "We had our basement finished from a raw concrete space to a full entertainment area. The quality is exceptional \u2014 it looks like something out of a magazine. Cornerstone treated our home like it was their own.",
              name: "Robert K.",
              loc: "Noblesville, IN \u00b7 Basement Finishing",
              initial: "R",
            },
            {
              quote:
                "My master bathroom is now my favorite room in the house. I was nervous about the process but Cornerstone made it simple. The estimate was accurate, the timeline was kept, and the workmanship is impeccable.",
              name: "Tanya S.",
              loc: "Indianapolis, IN \u00b7 Bathroom Renovation",
              initial: "T",
            },
          ].map((t, i) => (
            <div
              key={t.name}
              className={`testi-card reveal d${i + 1}`}
              style={{
                background: C.cream,
                padding: "40px 36px",
                border: `1px solid ${C.lightgray}`,
                transition:
                  "transform .25s cubic-bezier(.22,1,.36,1), box-shadow .25s",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div className="mb-5">
                <StarGroup />
              </div>
              <p
                style={{
                  ...serif(300),
                  fontSize: 18,
                  fontStyle: "italic",
                  lineHeight: 1.65,
                  color: C.charcoal,
                  marginBottom: 28,
                }}
              >
                <span
                  style={{
                    ...serif(300),
                    fontSize: 56,
                    lineHeight: 0,
                    verticalAlign: -22,
                    color: C.wood,
                    opacity: 0.3,
                    marginRight: 2,
                  }}
                >
                  &ldquo;
                </span>
                {t.quote}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  borderTop: `1px solid ${C.lightgray}`,
                  paddingTop: 20,
                }}
              >
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: "50%",
                    background: C.charcoal,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    ...serif(500),
                    fontSize: 18,
                    color: C.white,
                    flexShrink: 0,
                  }}
                >
                  {t.initial}
                </div>
                <div>
                  <div
                    style={{
                      ...sans(600),
                      fontSize: 14,
                      color: C.charcoal,
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      ...sans(400),
                      fontSize: 11,
                      color: C.gray,
                      marginTop: 2,
                      letterSpacing: ".04em",
                    }}
                  >
                    {t.loc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA / CONTACT                                                 */}
      {/* ============================================================ */}
      <section
        id="contact"
        style={{ background: C.charcoal2, padding: 0 }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            minHeight: 500,
          }}
        >
          {/* Left - image with overlay */}
          <div style={{ position: "relative", overflow: "hidden" }}>
            <img
              src="/images/demos/remodeling/REMODEL1.png"
              alt="Completed renovation"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.45,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(105deg, rgba(26,26,26,.95) 0%, rgba(26,26,26,.7) 60%, transparent 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                padding: "64px 56px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  ...sans(600),
                  fontSize: 11,
                  letterSpacing: ".24em",
                  textTransform: "uppercase",
                  color: C.wood,
                  marginBottom: 16,
                }}
              >
                Start Your Project
              </div>
              <div
                style={{
                  ...serif(300),
                  fontSize: "clamp(36px, 4vw, 56px)",
                  lineHeight: 1.08,
                  color: C.white,
                  marginBottom: 20,
                }}
              >
                Ready to transform
                <br />
                your{" "}
                <em style={{ fontStyle: "italic", color: C.woodLt }}>
                  home?
                </em>
              </div>
              <p
                style={{
                  ...sans(300),
                  fontSize: 15,
                  color: "rgba(255,255,255,.55)",
                  lineHeight: 1.7,
                  marginBottom: 40,
                  maxWidth: 420,
                }}
              >
                Get a free, no-pressure estimate. We come to you, assess the
                space, and give you a clear, detailed quote within 48 hours.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  {
                    icon: (
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    ),
                    text: "(555) 610-2385",
                    href: "tel:5556102385",
                  },
                  {
                    icon: (
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    ),
                    text: "hello@cornerstonerenovations.com",
                    href: "mailto:hello@cornerstonerenovations.com",
                  },
                  {
                    icon: (
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    ),
                    text: "Indianapolis, IN \u00b7 Serving Greater Indianapolis Metro",
                  },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-2.5"
                    style={{
                      ...sans(400),
                      fontSize: 13,
                      color: "rgba(255,255,255,.5)",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill={C.wood}
                      style={{ opacity: 0.7, flexShrink: 0 }}
                    >
                      {item.icon}
                    </svg>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="hover:text-[#B8875A] transition-colors"
                        style={{
                          color: "rgba(255,255,255,.5)",
                          textDecoration: "none",
                        }}
                      >
                        {item.text}
                      </a>
                    ) : (
                      item.text
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - form */}
          <div
            style={{
              padding: "64px 56px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                ...serif(400),
                fontSize: 28,
                color: C.white,
                marginBottom: 8,
              }}
            >
              Request a Free Estimate
            </div>
            <div
              style={{
                ...sans(400),
                fontSize: 13,
                color: "rgba(255,255,255,.4)",
                marginBottom: 28,
              }}
            >
              We&apos;ll respond within one business day.
            </div>
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="First Name"
                  className="focus:border-[#B8875A] transition-colors outline-none"
                  style={{
                    ...sans(300),
                    fontSize: 13,
                    background: "rgba(255,255,255,.06)",
                    border: "1px solid rgba(255,255,255,.12)",
                    color: C.white,
                    padding: "14px 18px",
                  }}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="focus:border-[#B8875A] transition-colors outline-none"
                  style={{
                    ...sans(300),
                    fontSize: 13,
                    background: "rgba(255,255,255,.06)",
                    border: "1px solid rgba(255,255,255,.12)",
                    color: C.white,
                    padding: "14px 18px",
                  }}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="focus:border-[#B8875A] transition-colors outline-none"
                  style={{
                    ...sans(300),
                    fontSize: 13,
                    background: "rgba(255,255,255,.06)",
                    border: "1px solid rgba(255,255,255,.12)",
                    color: C.white,
                    padding: "14px 18px",
                  }}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="focus:border-[#B8875A] transition-colors outline-none"
                  style={{
                    ...sans(300),
                    fontSize: 13,
                    background: "rgba(255,255,255,.06)",
                    border: "1px solid rgba(255,255,255,.12)",
                    color: C.white,
                    padding: "14px 18px",
                  }}
                />
              </div>
              <select
                className="focus:border-[#B8875A] transition-colors outline-none"
                style={{
                  ...sans(300),
                  fontSize: 13,
                  background: "rgba(255,255,255,.06)",
                  border: "1px solid rgba(255,255,255,.12)",
                  color: "rgba(255,255,255,.28)",
                  padding: "14px 18px",
                  appearance: "none",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='rgba(255,255,255,.4)' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 16px center",
                }}
                defaultValue=""
              >
                <option value="" disabled>
                  Project Type
                </option>
                <option>Kitchen Remodeling</option>
                <option>Bathroom Renovation</option>
                <option>Basement Finishing</option>
                <option>Room Addition</option>
                <option>Full Home Renovation</option>
                <option>Other</option>
              </select>
              <input
                type="text"
                placeholder="General Location (City / Neighborhood)"
                className="focus:border-[#B8875A] transition-colors outline-none"
                style={{
                  ...sans(300),
                  fontSize: 13,
                  background: "rgba(255,255,255,.06)",
                  border: "1px solid rgba(255,255,255,.12)",
                  color: C.white,
                  padding: "14px 18px",
                }}
              />
              <textarea
                placeholder="Tell us about your project — what are you hoping to achieve?"
                className="focus:border-[#B8875A] transition-colors outline-none"
                style={{
                  ...sans(300),
                  fontSize: 13,
                  background: "rgba(255,255,255,.06)",
                  border: "1px solid rgba(255,255,255,.12)",
                  color: C.white,
                  padding: "14px 18px",
                  resize: "none",
                  height: 100,
                }}
              />
              <button
                className="hover:bg-[#CFA070] transition-colors"
                style={{
                  ...sans(700),
                  fontSize: 12,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: C.charcoal,
                  background: C.wood,
                  border: "none",
                  padding: 18,
                  cursor: "pointer",
                }}
              >
                Request My Free Estimate
              </button>
              <p
                style={{
                  ...sans(400),
                  fontSize: 11,
                  color: "rgba(255,255,255,.28)",
                  marginTop: 10,
                  textAlign: "center",
                  letterSpacing: ".04em",
                }}
              >
                No pressure &middot; No commitment &middot; Estimates delivered
                within 48 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FOOTER                                                        */}
      {/* ============================================================ */}
      <footer style={{ background: "#111111", padding: "64px 56px 32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 48,
          }}
        >
          <div>
            <div
              style={{
                ...serif(400),
                fontSize: 22,
                color: C.white,
                marginBottom: 6,
                letterSpacing: ".04em",
              }}
            >
              Cornerstone Renovations
            </div>
            <div
              style={{
                ...sans(500),
                fontSize: 11,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: C.wood,
                marginBottom: 16,
              }}
            >
              Indianapolis &middot; Est. 2009
            </div>
            <div
              style={{
                ...sans(300),
                fontSize: 13,
                lineHeight: 1.7,
                color: "rgba(255,255,255,.35)",
                maxWidth: 260,
              }}
            >
              Full-service remodeling and home improvement for
              Indianapolis-area homeowners. Licensed, insured, and trusted
              for over 15 years.
            </div>
          </div>
          {[
            {
              title: "Services",
              links: [
                "Kitchen Remodeling",
                "Bathroom Renovations",
                "Basement Finishing",
                "Room Additions",
                "Full Home Renovations",
              ],
            },
            {
              title: "Company",
              links: [
                "About Us",
                "Our Portfolio",
                "Client Reviews",
                "Service Area",
                "Contact",
              ],
            },
            {
              title: "Contact",
              links: [
                "(555) 610-2385",
                "hello@cornerstonerenovations.com",
                "Indianapolis, IN",
                "Mon\u2013Fri 8am\u20136pm",
                "Sat by Appointment",
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <div
                style={{
                  ...sans(600),
                  fontSize: 10,
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: C.wood,
                  marginBottom: 18,
                }}
              >
                {col.title}
              </div>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors"
                      style={{
                        ...sans(300),
                        fontSize: 13,
                        color: "rgba(255,255,255,.4)",
                        textDecoration: "none",
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,.08)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div
            style={{
              ...sans(300),
              fontSize: 12,
              color: "rgba(255,255,255,.28)",
            }}
          >
            &copy; 2026 Cornerstone Renovations. All rights reserved.
            &middot; Licensed &amp; Insured &middot; BBB Accredited
          </div>
          <div
            style={{
              ...sans(400),
              fontSize: 12,
              color: "rgba(255,255,255,.2)",
            }}
          >
            Built by{" "}
            <a
              href="/"
              className="hover:text-[#B8875A] transition-colors"
              style={{
                color: "rgba(255,255,255,.35)",
                textDecoration: "none",
              }}
            >
              JadorWorks Web Studio &rarr;
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
