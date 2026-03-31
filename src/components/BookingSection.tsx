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
        // Scroll intake column into view on mobile
        if (window.innerWidth < 900 && intakeRef.current) {
          setTimeout(() => {
            intakeRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 400);
        }
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div
      className="book-layout"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 420px",
        gap: 0,
        borderBottom: "1px solid rgba(13,27,42,0.10)",
        alignItems: "start",
      }}
    >
      {/* LEFT -- Calendly embed */}
      <div
        style={{
          borderRight: "1px solid rgba(13,27,42,0.10)",
          transition: "opacity 0.6s cubic-bezier(0.22,1,0.36,1)",
          opacity: booked ? 0.28 : 1,
          pointerEvents: booked ? "none" : "auto",
        }}
        className="book-calendly-col"
      >
        <div
          style={{
            padding: "24px 56px 20px",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase" as const,
            color: "rgba(13,27,42,0.42)",
            borderBottom: "1px solid rgba(13,27,42,0.10)",
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          Step 1 — Select a date and time
          <span
            style={{
              flex: 1,
              height: 1,
              background: "rgba(13,27,42,0.10)",
            }}
          />
        </div>
        <div
          className="book-calendly-wrap"
          style={{ padding: "32px 40px 40px 56px" }}
        >
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/jadorworks/consultations?hide_event_type_details=1&hide_gdpr_banner=1"
            style={{ width: "100%", minWidth: 320, height: 700 }}
          />
        </div>
      </div>

      {/* RIGHT -- Intake col with two states */}
      <div
        ref={intakeRef}
        className="book-intake-col"
        style={{
          background: "#0D1B2A",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px 48px",
          position: "sticky",
          top: 72,
          minHeight: "calc(100vh - 72px)",
          transition: "box-shadow 0.6s cubic-bezier(0.22,1,0.36,1)",
          boxShadow: booked
            ? "inset 0 0 0 2px rgba(250,249,246,0.18)"
            : "none",
        }}
      >
        {/* Step indicator */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 48,
          }}
        >
          <div
            style={{
              width: 26,
              height: 26,
              border: `1px solid ${booked ? "rgba(250,249,246,0.15)" : "rgba(250,249,246,0.3)"}`,
              background: booked ? "transparent" : "rgba(250,249,246,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 11,
              fontWeight: 700,
              color: booked
                ? "rgba(250,249,246,0.25)"
                : "rgba(250,249,246,0.7)",
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
              width: 26,
              height: 26,
              border: `1px solid ${booked ? "rgba(250,249,246,0.3)" : "rgba(250,249,246,0.15)"}`,
              background: booked ? "rgba(250,249,246,0.08)" : "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 11,
              fontWeight: 700,
              color: booked
                ? "rgba(250,249,246,0.7)"
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
            {booked ? "Complete intake form" : "After booking"}
          </span>
        </div>

        {/* BEFORE STATE -- default, shown before booking */}
        {!booked && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* Calendar icon */}
            <div
              style={{
                width: 44,
                height: 44,
                border: "1.5px solid rgba(250,249,246,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 24,
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(250,249,246,0.35)"
                strokeWidth="1.5"
                strokeLinecap="round"
                style={{ width: 20, height: 20 }}
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
                color: "rgba(250,249,246,0.25)",
                marginBottom: 12,
              }}
            >
              Step 1 of 2
            </div>
            <div
              style={{
                fontSize: "clamp(20px, 2.5vw, 28px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                color: "#FAF9F6",
                marginBottom: 14,
              }}
            >
              Select a date and time on the left to get started.
            </div>
            <p
              style={{
                fontSize: 14,
                fontWeight: 300,
                color: "rgba(250,249,246,0.4)",
                lineHeight: 1.7,
              }}
            >
              Pick any available slot. The booking only takes a few seconds and
              you will receive a confirmation email immediately.
            </p>

            <div
              style={{
                width: 32,
                height: 1,
                background: "rgba(250,249,246,0.08)",
                margin: "28px 0",
              }}
            />

            <div
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase" as const,
                color: "rgba(250,249,246,0.2)",
                marginBottom: 14,
              }}
            >
              After you book you will receive
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
                    style={{
                      width: 13,
                      height: 13,
                      opacity: 0.25,
                      flexShrink: 0,
                    }}
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
                text: "A confirmation email with call details",
              },
              {
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    style={{
                      width: 13,
                      height: 13,
                      opacity: 0.25,
                      flexShrink: 0,
                    }}
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
                    style={{
                      width: 13,
                      height: 13,
                      opacity: 0.25,
                      flexShrink: 0,
                    }}
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
                  gap: 10,
                  padding: "10px 0",
                  borderTop: "1px solid rgba(250,249,246,0.05)",
                  fontSize: 13,
                  fontWeight: 300,
                  color: "rgba(250,249,246,0.28)",
                }}
              >
                {item.icon}
                {item.text}
              </div>
            ))}
          </div>
        )}

        {/* AFTER STATE -- shown only after booking fires */}
        {booked && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* Checkmark icon */}
            <div
              style={{
                width: 44,
                height: 44,
                border: "1.5px solid rgba(250,249,246,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 24,
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(250,249,246,0.7)"
                strokeWidth="1.5"
                strokeLinecap="round"
                style={{ width: 20, height: 20 }}
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
                color: "rgba(250,249,246,0.35)",
                marginBottom: 12,
              }}
            >
              Booked — Step 2 of 2
            </div>
            <div
              style={{
                fontSize: "clamp(22px, 2.8vw, 32px)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                color: "#FAF9F6",
                marginBottom: 14,
              }}
            >
              Your consultation is booked.
            </div>
            <p
              style={{
                fontSize: 14,
                fontWeight: 300,
                color: "rgba(250,249,246,0.55)",
                lineHeight: 1.7,
                marginBottom: 10,
              }}
            >
              <strong
                style={{
                  fontWeight: 600,
                  color: "rgba(250,249,246,0.85)",
                }}
              >
                Next step: complete the intake form
              </strong>{" "}
              so we can prepare for your call. It takes 3-5 minutes and helps us
              make the most of your 15 minutes together.
            </p>

            <div
              style={{
                width: 32,
                height: 1,
                background: "rgba(250,249,246,0.12)",
                margin: "28px 0",
              }}
            />

            <div
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase" as const,
                color: "rgba(250,249,246,0.28)",
                marginBottom: 16,
              }}
            >
              Complete the intake form
            </div>
            <Link
              href="/onboarding"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                fontSize: 14,
                fontWeight: 700,
                color: "#0D1B2A",
                background: "#FAF9F6",
                border: "none",
                padding: "18px 32px",
                letterSpacing: "0.04em",
                textTransform: "uppercase" as const,
                textDecoration: "none",
                width: "100%",
                marginBottom: 12,
              }}
              className="hover:opacity-[0.88] transition-opacity"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                style={{ width: 15, height: 15, flexShrink: 0 }}
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6" />
              </svg>
              Complete the Intake Form →
            </Link>
            <div
              style={{
                fontSize: 11,
                fontWeight: 300,
                color: "rgba(250,249,246,0.25)",
                letterSpacing: "0.04em",
                textAlign: "center" as const,
              }}
            >
              Takes 3-5 minutes · Helps us prepare for your call
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
