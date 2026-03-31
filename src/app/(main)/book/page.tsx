import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BookingSection } from "@/components/BookingSection";

export const metadata: Metadata = {
  title: "Book a Free Consultation | JadorWorks Web Studio",
  description:
    "Book a free 15-minute consultation with JadorWorks Web Studio. Pick a time, get an instant confirmation, and complete the short intake form before your call. Indianapolis, Indiana.",
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
        className="book-breadcrumb"
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
            padding: "56px 56px 48px",
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
                marginBottom: 14,
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
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                marginBottom: 14,
              }}
            >
              Book your free 15-minute consultation.
            </h1>
            <p
              style={{
                fontSize: 16,
                fontWeight: 300,
                lineHeight: 1.7,
                color: "rgba(13,27,42,0.68)",
              }}
            >
              Pick a time that works for you. We review your business before the
              call so the conversation is specific — not a generic pitch.
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
                marginBottom: 16,
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
                    padding: "18px 22px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
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
                        fontSize: 13,
                        fontWeight: 700,
                        letterSpacing: "-0.01em",
                        marginBottom: 2,
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
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
          padding: "18px 56px",
          borderBottom: "1px solid rgba(13,27,42,0.10)",
          display: "flex",
          alignItems: "center",
          gap: 40,
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
              style={{ width: 14, height: 14, opacity: 0.5, flexShrink: 0 }}
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
              style={{ width: 14, height: 14, opacity: 0.5, flexShrink: 0 }}
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
              style={{ width: 14, height: 14, opacity: 0.5, flexShrink: 0 }}
            >
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
          }
          label="Instant confirmation"
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
              style={{ width: 14, height: 14, opacity: 0.5, flexShrink: 0 }}
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          }
          label="No commitment"
        />
      </div>

      {/* Side-by-side Booking Layout */}
      <BookingSection />

      {/* Calendly Widget Script -- loaded only on this page */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      {/* Responsive styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media (max-width: 900px) {
              .book-breadcrumb {
                padding-left: 24px !important;
                padding-right: 24px !important;
              }
              .book-header {
                grid-template-columns: 1fr !important;
                gap: 32px !important;
                padding: 40px 24px !important;
              }
              .book-trust-strip {
                padding: 16px 24px !important;
              }
              .book-layout {
                grid-template-columns: 1fr !important;
              }
              .book-calendly-col {
                border-right: none !important;
                border-bottom: 1px solid rgba(13,27,42,0.10) !important;
              }
              .book-calendly-col > div:first-child {
                padding: 20px 24px 16px !important;
              }
              .book-calendly-col > div:last-child {
                padding: 0 24px 32px !important;
              }
              .book-intake-col {
                position: static !important;
                min-height: auto !important;
                padding: 48px 24px !important;
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
        gap: 9,
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
      className="book-trust-divider"
      style={{
        width: 1,
        height: 16,
        background: "rgba(13,27,42,0.10)",
        flexShrink: 0,
      }}
    />
  );
}
