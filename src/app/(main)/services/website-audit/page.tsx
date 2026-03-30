import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Website Audit & Redesign for Indiana Small Businesses | JadorWorks Web Studio",
  description:
    "Already have a website that is not performing? We audit what is broken and rebuild on a foundation that works. Slow load times, missing trust signals, poor mobile experience, weak local SEO — we fix it all.",
  openGraph: {
    title: "Website Audit & Redesign for Indiana Small Businesses | JadorWorks Web Studio",
    description:
      "Already have a website that is not performing? We audit what is broken and rebuild on a foundation that works.",
    url: "https://jadorworks.com/services/website-audit",
    siteName: "JadorWorks Web Studio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Website Audit & Redesign — JadorWorks Web Studio" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Audit & Redesign for Indiana Small Businesses | JadorWorks Web Studio",
    description: "Already have a website that is not performing? We audit what is broken and rebuild on a foundation that works.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteAuditPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div
        className="px-6 md:px-14 py-3.5"
        style={{ paddingTop: 86, background: "#EDEAE4", borderBottom: "1px solid rgba(13,27,42,0.10)" }}
      >
        <div className="flex items-center gap-2 text-xs" style={{ color: "rgba(13,27,42,0.42)" }}>
          <Link href="/" className="hover:text-navy transition-colors">Home</Link>
          <span style={{ opacity: 0.4 }}>›</span>
          <Link href="/services" className="hover:text-navy transition-colors">Services</Link>
          <span style={{ opacity: 0.4 }}>›</span>
          <span>Website Audit & Redesign</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 px-6 md:px-14" style={{ borderBottom: "1px solid rgba(13,27,42,0.10)" }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_400px] gap-16 lg:gap-20 items-center">
          <div>
            <ScrollReveal>
              <div
                className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] uppercase mb-5"
                style={{ color: "rgba(13,27,42,0.45)" }}
              >
                <span className="w-6 h-[1.5px] flex-shrink-0" style={{ backgroundColor: "rgba(13,27,42,0.45)" }} />
                Website Audit · Indiana
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <h1
                className="font-extrabold leading-[1.05] tracking-[-0.03em]"
                style={{ fontSize: "clamp(36px, 4.5vw, 58px)" }}
              >
                Website Audit &<br />Redesign for Indiana<br />Small Businesses.
              </h1>
            </ScrollReveal>
            <ScrollReveal>
              <p className="mt-6 text-[17px] font-light leading-[1.7] max-w-[520px]" style={{ color: "rgba(13,27,42,0.62)" }}>
                Already have a website but it is not performing? We audit what is broken — slow load times, missing trust signals, poor mobile experience, weak local SEO — and rebuild on a foundation that actually works. A clear diagnosis first, then a plan to fix it.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="inline-block text-sm font-bold tracking-[0.04em] uppercase bg-navy text-cream px-8 py-4 hover:opacity-90 transition-opacity"
                >
                  Request an Audit
                </Link>
                <Link
                  href="/demos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-medium text-navy px-8 py-4 transition-colors"
                  style={{ border: "1.5px solid rgba(13,27,42,0.20)" }}
                >
                  See Demo Sites
                </Link>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <div className="p-8" style={{ border: "1px solid rgba(13,27,42,0.10)", background: "rgba(13,27,42,0.02)" }}>
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(13,27,42,0.42)" }}>What we audit</p>
              {["Page speed and performance", "Mobile responsiveness", "Trust signals and credibility", "Local SEO structure", "Google Business Profile consistency", "Conversion path clarity"].map((item) => (
                <div key={item} className="flex items-center gap-3 py-3" style={{ borderTop: "1px solid rgba(13,27,42,0.08)" }}>
                  <svg viewBox="0 0 16 16" fill="none" stroke="rgba(13,27,42,0.45)" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4 flex-shrink-0">
                    <polyline points="3 8 7 12 13 4" />
                  </svg>
                  <span className="text-[13px] font-medium" style={{ color: "rgba(13,27,42,0.68)" }}>{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 md:px-14 bg-navy">
        <div className="max-w-[680px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.03em] leading-[1.05] text-cream mb-4">
              Ready to find out what is holding your website back?
            </h2>
            <p className="text-[16px] font-light leading-[1.7] mb-11" style={{ color: "rgba(250,249,246,0.50)" }}>
              Book a free consultation. We will review your current site and tell you exactly what needs fixing — no pressure, no commitment.
            </p>
            <Link
              href="/#contact"
              className="inline-block text-[14px] font-bold tracking-[0.06em] uppercase text-navy bg-cream px-10 py-[18px] hover:opacity-90 transition-opacity"
            >
              Book a Free Consultation
            </Link>
            <p className="mt-5 text-[11px] font-light tracking-[0.04em]" style={{ color: "rgba(250,249,246,0.40)" }}>
              No pressure · No commitment · Response within one business day
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
