"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

export function ProofBlock() {
  return (
    <section
      className="proof-block-section bg-navy py-20 md:py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden"
      aria-label="Case study — Summit Air & Plumbing"
    >
      {/* Subtle pixel grid texture — brand motif */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250,249,246,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(250,249,246,.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* HEADER */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-12 mb-16 md:mb-18">
            <div>
              <p
                className="text-[11px] font-semibold tracking-[0.22em] uppercase flex items-center gap-3 mb-5"
                style={{ color: "rgba(250,249,246,0.35)" }}
              >
                <span
                  className="w-6 h-px shrink-0"
                  style={{ backgroundColor: "rgba(250,249,246,0.25)" }}
                />
                A representative example — HVAC & Plumbing
              </p>
              <h2 className="text-3xl md:text-5xl lg:text-[52px] font-extrabold tracking-[-0.035em] leading-[1.05] text-cream max-w-[560px]">
                From easy to overlook
                <br />
                to ready for action.
              </h2>
            </div>
            <p
              className="text-base font-light leading-[1.7] max-w-[400px] md:pt-2 shrink-0"
              style={{ color: "rgba(250,249,246,0.5)" }}
            >
              This is how JadorWorks approaches a local service business website
              — using Summit Air & Plumbing as the example.
            </p>
          </div>
        </ScrollReveal>

        {/* THREE COLUMNS */}
        <ScrollReveal stagger>
          <div
            className="grid md:grid-cols-3 mb-16 md:mb-18"
            style={{
              gap: "1px",
              background: "rgba(250,249,246,0.08)",
              border: "1px solid rgba(250,249,246,0.08)",
            }}
          >
            {/* BEFORE */}
            <div
              className="p-8 md:p-10 flex flex-col gap-4 transition-colors duration-300"
              style={{ backgroundColor: "rgba(13,27,42,0.55)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "rgba(13,27,42,0.35)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "rgba(13,27,42,0.55)")
              }
            >
              <p
                className="text-[11px] font-extrabold tracking-[0.18em] mb-2"
                style={{ color: "rgba(250,249,246,0.2)" }}
              >
                01
              </p>
              <p
                className="text-[13px] font-bold tracking-[0.04em] uppercase pb-4 mb-1"
                style={{
                  color: "rgba(250,249,246,0.45)",
                  borderBottom: "1px solid rgba(250,249,246,0.08)",
                }}
              >
                Before
              </p>
              <p
                className="text-[15px] font-light leading-[1.75]"
                style={{ color: "rgba(250,249,246,0.7)" }}
              >
                Many local HVAC and plumbing businesses do good work but look
                unclear online. No clear service list. No obvious service area.
                Hard to trust quickly on a phone screen. Without a clear next
                step, visitors may leave without calling.
              </p>
            </div>

            {/* WHAT CHANGED — accent column */}
            <div
              className="p-8 md:p-10 flex flex-col gap-4 transition-colors duration-300"
              style={{ backgroundColor: "rgba(250,249,246,0.04)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(250,249,246,0.07)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(250,249,246,0.04)")
              }
            >
              <p
                className="text-[11px] font-extrabold tracking-[0.18em] mb-2"
                style={{ color: "rgba(250,249,246,0.2)" }}
              >
                02
              </p>
              <p
                className="text-[13px] font-bold tracking-[0.04em] uppercase pb-4 mb-1"
                style={{
                  color: "rgba(250,249,246,0.65)",
                  borderBottom: "1px solid rgba(250,249,246,0.08)",
                }}
              >
                What changed
              </p>
              <p
                className="text-[15px] font-light leading-[1.75]"
                style={{ color: "rgba(250,249,246,0.8)" }}
              >
                JadorWorks rebuilt the online presence with a clearer service
                structure, stronger trust signals, a more visible call path, and
                a cleaner mobile experience. The business is easier to
                understand, easier to trust, and easier to contact within the
                first few seconds.
              </p>
            </div>

            {/* BUILT TO SUPPORT */}
            <div
              className="p-8 md:p-10 flex flex-col gap-4 transition-colors duration-300"
              style={{ backgroundColor: "rgba(13,27,42,0.55)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "rgba(13,27,42,0.35)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "rgba(13,27,42,0.55)")
              }
            >
              <p
                className="text-[11px] font-extrabold tracking-[0.18em] mb-2"
                style={{ color: "rgba(250,249,246,0.2)" }}
              >
                03
              </p>
              <p
                className="text-[13px] font-bold tracking-[0.04em] uppercase pb-4 mb-1"
                style={{
                  color: "rgba(250,249,246,0.45)",
                  borderBottom: "1px solid rgba(250,249,246,0.08)",
                }}
              >
                Built to support
              </p>
              <p
                className="text-[15px] font-light leading-[1.75]"
                style={{ color: "rgba(250,249,246,0.7)" }}
              >
                A clearer first impression. Faster trust at the moment a
                customer is deciding who to call. A stronger foundation for
                local visibility and lead-readiness.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* PROMISE + DEMO PREVIEW */}
        <ScrollReveal>
          <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">
            {/* Promise text + CTA */}
            <div className="max-w-[600px]">
              <div
                className="w-10 h-px mb-8"
                style={{ backgroundColor: "rgba(250,249,246,0.1)" }}
              />
              <p
                className="text-lg md:text-xl lg:text-[26px] font-light leading-[1.6] tracking-[-0.01em] mb-9"
                style={{ color: "rgba(250,249,246,0.75)" }}
              >
                For local service businesses, JadorWorks builds websites that
                are{" "}
                <strong className="font-bold text-cream">
                  clearer, more trustworthy, and better structured
                </strong>{" "}
                to turn attention into action.
              </p>
              <Link
                href="/book"
                className="inline-flex items-center gap-3 text-[13px] font-bold tracking-[0.08em] uppercase text-navy bg-cream border-none px-8 py-4 transition-opacity duration-200 hover:opacity-[0.88]"
              >
                See how this applies to your business
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3.5 h-3.5 shrink-0"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Demo preview card */}
            <div className="w-full md:w-80 shrink-0">
              <p
                className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-3"
                style={{ color: "rgba(250,249,246,0.25)" }}
              >
                The demo
              </p>
              <div
                className="overflow-hidden"
                style={{ border: "1px solid rgba(250,249,246,0.1)" }}
              >
                <div
                  className="relative w-full"
                  style={{
                    height: "200px",
                    borderBottom: "1px solid rgba(250,249,246,0.08)",
                  }}
                >
                  <Image
                    src="/images/demos/hvac-preview.jpg"
                    alt="Summit Air & Plumbing demo site — built by JadorWorks Web Studio"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="320px"
                  />
                </div>
                <div className="px-5 py-4 flex items-center justify-between">
                  <span
                    className="text-[13px] font-semibold"
                    style={{ color: "rgba(250,249,246,0.55)" }}
                  >
                    Summit Air & Plumbing
                  </span>
                  <Link
                    href="/demos/hvac"
                    target="_blank"
                    rel="noopener"
                    className="text-[11px] font-semibold tracking-[0.08em] uppercase transition-colors duration-200"
                    style={{ color: "rgba(250,249,246,0.35)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "rgba(250,249,246,0.7)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(250,249,246,0.35)")
                    }
                  >
                    View demo &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
