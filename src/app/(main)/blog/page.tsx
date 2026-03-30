import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BlogList } from "@/components/BlogList";
import { blogArticles } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Web Design & Local SEO Tips for Indiana Businesses | JadorWorks",
  description:
    "Practical advice on websites, Google Business Profile, and local SEO for HVAC, remodeling, landscaping, and home care businesses in Indiana.",
  openGraph: {
    title: "Blog — Web Design & Local SEO Tips for Indiana Businesses | JadorWorks",
    description:
      "Practical advice on websites, Google Business Profile, and local SEO for HVAC, remodeling, landscaping, and home care businesses in Indiana.",
    url: "https://jadorworks.com/blog",
    siteName: "JadorWorks Web Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JadorWorks Blog — Web Design Tips for Indiana Businesses",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Web Design & Local SEO Tips | JadorWorks",
    description:
      "Practical advice on websites, Google Business Profile, and local SEO for Indiana service businesses.",
    images: ["/og-image.png"],
  },
};

// Get unique categories
const categories = Array.from(new Set(blogArticles.map((a) => a.category)));

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-cream">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <span
              className="text-xs font-medium tracking-widest uppercase"
              style={{ color: "rgba(13,27,42,0.42)" }}
            >
              Blog
            </span>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight text-navy mt-4 mb-4">
              Practical advice for Indiana service businesses.
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <p
              className="text-base md:text-lg max-w-2xl"
              style={{ color: "rgba(13,27,42,0.62)" }}
            >
              Websites, Google Business Profile, local SEO — what actually works
              for HVAC, remodeling, landscaping, and home care companies.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter + Articles (client component) */}
      <BlogList articles={blogArticles} categories={categories} />

      {/* Newsletter CTA */}
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: "rgba(13,27,42,0.03)" }}
      >
        <div className="max-w-2xl mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-navy mb-3">
              Get practical tips in your inbox.
            </h2>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(13,27,42,0.62)" }}
            >
              Advice on websites, local SEO, and Google Business Profile for
              Indiana service businesses. No spam, no fluff.
            </p>
            <p
              className="text-xs"
              style={{ color: "rgba(13,27,42,0.42)" }}
            >
              Newsletter coming soon — follow us for updates.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 bg-navy">
        <div className="max-w-2xl mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-light text-cream mb-4">
              Ready to get your business found online?
            </h2>
            <p
              className="text-sm leading-relaxed mb-8 max-w-lg mx-auto"
              style={{ color: "rgba(250,249,246,0.62)" }}
            >
              Free consultation. No commitment. We will tell you exactly what
              your business needs and how we can help.
            </p>
            <Link
              href="/#contact"
              className="inline-block text-sm font-medium bg-cream text-navy px-6 py-3 rounded-lg hover:bg-navy hover:text-cream border border-cream hover:border-cream-28 transition-all duration-300"
            >
              Book a Consultation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
