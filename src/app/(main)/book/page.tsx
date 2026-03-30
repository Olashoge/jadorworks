import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Book a Free Consultation | JadorWorks Web Studio",
  description:
    "Book a free 15-minute consultation with JadorWorks Web Studio. Pick a time that works for you — we will talk through what your business needs. No pressure, no commitment. Indianapolis, Indiana.",
  openGraph: {
    title: "Book a Free Consultation | JadorWorks Web Studio",
    description:
      "Book a free 15-minute consultation with JadorWorks Web Studio. Pick a time that works for you — we will talk through what your business needs.",
    url: "https://jadorworks.com/book",
    siteName: "JadorWorks Web Studio",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Free Consultation | JadorWorks Web Studio",
    description:
      "Book a free 15-minute consultation with JadorWorks Web Studio. No pressure, no commitment.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://jadorworks.com/book",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://jadorworks.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Book a Consultation",
      item: "https://jadorworks.com/book",
    },
  ],
};

export default function BookPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb */}
      <div
        style={{
          paddingTop: 86,
          paddingBottom: 14,
          paddingLeft: 56,
          paddingRight: 56,
          borderBottom: "1px solid rgba(13,27,42,0.10)",
          background: "#EDEAE4",
          fontSize: 12,
          color: "rgba(13,27,42,0.42)",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <Link
          href="/"
          style={{ color: "rgba(13,27,42,0.42)", textDecoration: "none" }}
          className="hover:text-navy transition-colors"
        >
          Home
        </Link>
        <span style={{ opacity: 0.4 }}>›</span>
        <span>Book a Consultation</span>
      </div>

      {/* Page Header */}
      <ScrollReveal>
        <div
          style={{
            padding: "72px 56px 64px",
            borderBottom: "1px solid rgba(13,27,42,0.10)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
          className="book-header"
        >
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase" as const,
                color: "rgba(13,27,42,0.42)",
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span
                style={{
                  width: 24,
                  height: 1.5,
                  background: "rgba(13,27,42,0.42)",
                  flexShrink: 0,
                }}
              />
              Free Consultation · JadorWorks Web Studio
            </div>
            <h1
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                marginBottom: 18,
              }}
            >
              Book your free 15-minute consultation.
            </h1>
            <p
              style={{
                fontSize: 17,
                fontWeight: 300,
                lineHeight: 1.7,
                color: "rgba(13,27,42,0.68)",
              }}
            >
              Pick a time that works for you. We will review your business
              before the call so the conversation is specific — not a generic
              pitch.
            </p>
          </div>

          <div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase" as const,
                color: "rgba(13,27,42,0.42)",
                marginBottom: 20,
              }}
            >
              What happens on the call
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {[
                {
                  num: "01",
                  title: "We talk about your business",
                  body: "Your services, your service area, and what you need online. No jargon, no pressure.",
                },
                {
                  num: "02",
                  title: "We recommend the right package",
                  body: "Based on what you tell us, we map out the right service combination and give you a clear scope.",
                },
                {
                  num: "03",
                  title: "You decide — no commitment",
                  body: "No obligation to move forward. If it is not the right fit, we will tell you honestly.",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  style={{
                    background: "#EDEAE4",
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 16,
                    border: "1px solid rgba(13,27,42,0.10)",
                    marginBottom: 1,
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 800,
                      color: "rgba(13,27,42,0.28)",
                      letterSpacing: "0.1em",
                      flexShrink: 0,
                      marginTop: 1,
                      width: 24,
                    }}
                  >
                    {item.num}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        letterSpacing: "-0.01em",
                        marginBottom: 3,
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 300,
                        color: "rgba(13,27,42,0.68)",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.body}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Trust Strip */}
      <div
        style={{
          padding: "20px 56px",
          borderBottom: "1px solid rgba(13,27,42,0.10)",
          display: "flex",
          alignItems: "center",
          gap: 48,
          flexWrap: "wrap" as const,
          background: "#EDEAE4",
        }}
        className="book-trust-strip"
      >
        <TrustItem
          icon={
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              style={{ width: 15, height: 15, opacity: 0.5, flexShrink: 0 }}
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          }
          label="15 minutes"
        />
        <TrustDivider />
        <TrustItem
          icon={
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              style={{ width: 15, height: 15, opacity: 0.5, flexShrink: 0 }}
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 4.9 2 2 0 0 1 3.6 2.7h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          }
          label="No pressure"
        />
        <TrustDivider />
        <TrustItem
          icon={
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              style={{ width: 15, height: 15, opacity: 0.5, flexShrink: 0 }}
            >
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
          }
          label="No commitment"
        />
        <TrustDivider />
        <TrustItem
          icon={
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              style={{ width: 15, height: 15, opacity: 0.5, flexShrink: 0 }}
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          }
          label="Instant confirmation"
        />
      </div>

      {/* Calendly Embed Section */}
      <div
        style={{
          padding: "0 56px 88px",
          borderBottom: "1px solid rgba(13,27,42,0.10)",
        }}
        className="book-calendly-section"
      >
        <div
          style={{
            padding: "32px 0 28px",
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
          Select a date and time
          <span
            style={{
              flex: 1,
              height: 1,
              background: "rgba(13,27,42,0.10)",
            }}
          />
        </div>
        <div
          style={{
            border: "1px solid rgba(13,27,42,0.10)",
            overflow: "hidden",
            minHeight: 700,
          }}
        >
          {/* Calendly inline widget */}
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/jadorworks/consultations?hide_event_type_details=1&hide_gdpr_banner=1"
            style={{ minWidth: 320, height: 700 }}
          />
        </div>
      </div>

      {/* Post Booking Section — always visible */}
      <div style={{ background: "#0D1B2A", padding: "72px 56px" }} className="book-post-booking">
        <ScrollReveal>
          <div
            style={{
              maxWidth: 640,
              margin: "0 auto",
              textAlign: "center" as const,
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                border: "1.5px solid rgba(250,249,246,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 28px",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(250,249,246,0.6)"
                strokeWidth="1.5"
                strokeLinecap="round"
                style={{ width: 24, height: 24 }}
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
                color: "rgba(250,249,246,0.3)",
                marginBottom: 16,
              }}
            >
              After you book
            </div>
            <div
              style={{
                fontSize: "clamp(26px, 3.5vw, 40px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "#FAF9F6",
                marginBottom: 14,
              }}
            >
              Your consultation is booked.
            </div>
            <p
              style={{
                fontSize: 16,
                fontWeight: 300,
                color: "rgba(250,249,246,0.5)",
                lineHeight: 1.7,
                marginBottom: 10,
              }}
            >
              You will receive a confirmation email with the call details.{" "}
              <strong
                style={{
                  fontWeight: 600,
                  color: "rgba(250,249,246,0.8)",
                }}
              >
                One more step before we speak:
              </strong>{" "}
              complete the intake form so we can prepare for your call and make
              the most of your 15 minutes.
            </p>
            <div
              style={{
                width: 40,
                height: 1,
                background: "rgba(250,249,246,0.12)",
                margin: "28px auto",
              }}
            />
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                color: "rgba(250,249,246,0.3)",
                marginBottom: 20,
              }}
            >
              Complete the intake form
            </div>
            <Link
              href="/onboarding"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                fontSize: 15,
                fontWeight: 700,
                color: "#0D1B2A",
                background: "#FAF9F6",
                border: "none",
                padding: "20px 44px",
                letterSpacing: "0.04em",
                textTransform: "uppercase" as const,
                textDecoration: "none",
                marginBottom: 16,
                width: "100%",
                justifyContent: "center",
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
                <polyline points="10 9 9 9 8 9" />
              </svg>
              Complete the Intake Form
              <span style={{ marginLeft: 4 }}>→</span>
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
        </ScrollReveal>
      </div>

      {/* Calendly Widget Script — loaded only on this page */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      {/* Mobile responsive styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media (max-width: 767px) {
              .book-header {
                grid-template-columns: 1fr !important;
                gap: 40px !important;
                padding: 48px 24px 40px !important;
              }
              .book-trust-strip {
                padding: 16px 24px !important;
                gap: 16px !important;
                flex-direction: column !important;
                align-items: flex-start !important;
              }
              .book-trust-strip .trust-divider-el {
                display: none !important;
              }
              .book-calendly-section {
                padding: 0 24px 48px !important;
              }
              .book-post-booking {
                padding: 48px 24px !important;
              }
            }
            @media (min-width: 768px) and (max-width: 1023px) {
              .book-header {
                grid-template-columns: 1fr !important;
                gap: 48px !important;
                padding: 56px 40px 48px !important;
              }
              .book-trust-strip {
                padding: 16px 40px !important;
                gap: 24px !important;
              }
              .book-calendly-section {
                padding: 0 40px 64px !important;
              }
              .book-post-booking {
                padding: 56px 40px !important;
              }
            }
          `,
        }}
      />
    </>
  );
}

function TrustItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: "0.06em",
        textTransform: "uppercase" as const,
        color: "rgba(13,27,42,0.42)",
      }}
    >
      {icon}
      {label}
    </div>
  );
}

function TrustDivider() {
  return (
    <div
      className="trust-divider-el"
      style={{
        width: 1,
        height: 18,
        background: "rgba(13,27,42,0.10)",
        flexShrink: 0,
      }}
    />
  );
}
