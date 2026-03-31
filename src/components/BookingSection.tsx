"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export function BookingSection() {
  const [booked, setBooked] = useState(false);
  const intakeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (e.data?.event === "calendly.event_scheduled") {
        setBooked(true);
        // Auto-scroll to intake section after 700ms
        setTimeout(() => {
          intakeRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 700);
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <>
      {/* CALENDLY SECTION -- stacked on top */}
      <div
        className="book-calendly-section"
        style={{
          padding: "0 56px 64px",
          borderBottom: "1px solid rgba(13,27,42,0.10)",
          transition:
            "opacity 0.7s cubic-bezier(0.22,1,0.36,1), max-height 0.7s cubic-bezier(0.22,1,0.36,1)",
          overflow: "hidden",
          maxHeight: booked ? 120 : 900,
          opacity: booked ? 0.2 : 1,
          pointerEvents: booked ? "none" : "auto",
        }}
      >
        <div
          style={{
            padding: "28px 0 24px",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase" as const,
            color: "rgba(13,27,42,0.42)",
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          Step 1 — Select a date and time
          <span
            style={{ flex: 1, height: 1, background: "rgba(13,27,42,0.10)" }}
          />
        </div>
        <div
          style={{
            border: "1px solid rgba(13,27,42,0.10)",
            overflow: "hidden",
          }}
        >
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/jadorworks/consultations?hide_event_type_details=1&hide_gdpr_banner=1"
            style={{ minWidth: 320, height: 700 }}
          />
        </div>
      </div>

      {/* INTAKE SECTION -- below calendar, always present */}
      <div
        ref={intakeRef}
        style={{
          background: "#0D1B2A",
          padding: "88px 56px",
          borderBottom: "1px solid rgba(250,249,246,0.08)",
        }}
        className="book-intake-section"
      >
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          {/* Step indicator */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 52,
            }}
          >
            <div
              style={{
                width: 28,
                height: 28,
                border: `1px solid ${booked ? "rgba(250,249,246,0.10)" : "rgba(250,249,246,0.35)"}`,
                background: booked
                  ? "transparent"
                  : "rgba(250,249,246,0.10)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
                fontWeight: 700,
                color: booked
                  ? "rgba(250,249,246,0.20)"
                  : "rgba(250,249,246,0.75)",
                flexShrink: 0,
                transition: "all 0.4s ease",
              }}
            >
              1
            </div>
            <div
              style={{
                flex: 1,
                height: 1,
                background: "rgba(250,249,246,0.08)",
              }}
            />
            <div
              style={{
                width: 28,
                height: 28,
                border: `1px solid ${booked ? "rgba(250,249,246,0.35)" : "rgba(250,249,246,0.15)"}`,
                background: booked
                  ? "rgba(250,249,246,0.10)"
                  : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
                fontWeight: 700,
                color: booked
                  ? "rgba(250,249,246,0.75)"
                  : "rgba(250,249,246,0.25)",
                flexShrink: 0,
                transition: "all 0.4s ease",
              }}
            >
              2
            </div>
            <div
              style={{
                flex: 1,
                height: 1,
                background: "rgba(250,249,246,0.08)",
              }}
            />
            <span
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase" as const,
                color: booked
                  ? "rgba(250,249,246,0.55)"
                  : "rgba(250,249,246,0.22)",
                transition: "color 0.4s ease",
              }}
            >
              Complete intake form
            </span>
          </div>

          {/* BEFORE STATE -- default, shown before booking */}
          {!booked && (
            <div>
              <div
                style={{
                  width: 48,
                  height: 48,
                  border: "1.5px solid rgba(250,249,246,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(250,249,246,0.45)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  style={{ width: 22, height: 22 }}
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase" as const,
                  color: "rgba(250,249,246,0.45)",
                  marginBottom: 14,
                }}
              >
                Step 1 of 2
              </div>
              <div
                style={{
                  fontSize: "clamp(24px, 3vw, 36px)",
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.1,
                  color: "#FAF9F6",
                  marginBottom: 14,
                }}
              >
                Select a date and time above to get started.
              </div>
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 300,
                  color: "rgba(250,249,246,0.65)",
                  lineHeight: 1.7,
                  marginBottom: 0,
                }}
              >
                The booking takes just a few seconds. You will receive a
                confirmation email immediately after.
              </p>

              <div
                style={{
                  width: 40,
                  height: 1,
                  background: "rgba(250,249,246,0.12)",
                  margin: "32px 0",
                }}
              />

              <div
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase" as const,
                  color: "rgba(250,249,246,0.35)",
                  marginBottom: 16,
                }}
              >
                Once you book you will receive
              </div>
              {[
                {
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      style={{ width: 15, height: 15, opacity: 0.4, flexShrink: 0 }}
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  text: "A confirmation email with your call details",
                },
                {
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      style={{ width: 15, height: 15, opacity: 0.4, flexShrink: 0 }}
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  ),
                  text: "A calendar invite to accept",
                },
                {
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      style={{ width: 15, height: 15, opacity: 0.4, flexShrink: 0 }}
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6" />
                    </svg>
                  ),
                  text: "A prompt to complete the intake form before your call",
                },
              ].map((item) => (
                <div
                  key={item.text}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "14px 0",
                    borderTop: "1px solid rgba(250,249,246,0.07)",
                    fontSize: 14,
                    fontWeight: 300,
                    color: "rgba(250,249,246,0.55)",
                  }}
                >
                  {item.icon}
                  {item.text}
                </div>
              ))}
              <div
                style={{
                  borderBottom: "1px solid rgba(250,249,246,0.07)",
                }}
              />
            </div>
          )}

          {/* AFTER STATE -- shown only after booking fires */}
          {booked && (
            <div>
              <div
                style={{
                  width: 48,
                  height: 48,
                  border: "1.5px solid rgba(250,249,246,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(250,249,246,0.8)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  style={{ width: 22, height: 22 }}
                >
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase" as const,
                  color: "rgba(250,249,246,0.45)",
                  marginBottom: 14,
                }}
              >
                Booked — Step 2 of 2
              </div>
              <div
                style={{
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                  color: "#FAF9F6",
                  marginBottom: 16,
                }}
              >
                Your consultation is booked.
              </div>
              <p
                style={{
                  fontSize: 17,
                  fontWeight: 300,
                  color: "rgba(250,249,246,0.6)",
                  lineHeight: 1.7,
                  marginBottom: 0,
                }}
              >
                <strong
                  style={{
                    fontWeight: 600,
                    color: "rgba(250,249,246,0.88)",
                  }}
                >
                  Next step: complete the intake form
                </strong>{" "}
                so we can prepare for your call. It takes 3-5 minutes and helps
                us make the most of your 15 minutes together.
              </p>

              <div
                style={{
                  width: 40,
                  height: 1,
                  background: "rgba(250,249,246,0.15)",
                  margin: "36px 0",
                }}
              />

              <div
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase" as const,
                  color: "rgba(250,249,246,0.35)",
                  marginBottom: 18,
                }}
              >
                Complete the intake form now
              </div>
              <Link
                href="/onboarding"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#0D1B2A",
                  background: "#FAF9F6",
                  border: "none",
                  padding: "20px 48px",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase" as const,
                  textDecoration: "none",
                  width: "100%",
                  maxWidth: 480,
                  marginBottom: 14,
                }}
                className="hover:opacity-[0.88] transition-opacity"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  style={{ width: 16, height: 16, flexShrink: 0 }}
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                Complete the Intake Form →
              </Link>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 300,
                  color: "rgba(250,249,246,0.28)",
                  letterSpacing: "0.04em",
                }}
              >
                Takes 3-5 minutes · Helps us prepare for your call
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
