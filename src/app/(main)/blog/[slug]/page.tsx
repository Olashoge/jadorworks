import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/ScrollReveal";
import { blogArticles, getArticleBySlug, getAllSlugs } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://jadorworks.com/blog/${article.slug}`,
      siteName: "JadorWorks Web Studio",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: article.headline,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  // Find mid and bottom CTAs
  const midCta = article.ctas.find((c) => c.position === "mid");
  const bottomCta = article.ctas.find((c) => c.position === "bottom");

  // Get related articles (other articles in same category, or just others)
  const relatedArticles = blogArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  // Find the mid-point for CTA insertion
  const contentSections = article.sections.filter((s) => s.heading !== "");
  const midPoint = Math.ceil(contentSections.length / 2);

  // JSON-LD BlogPosting schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.headline,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: "JadorWorks Web Studio",
      url: "https://jadorworks.com",
    },
    publisher: {
      "@type": "Organization",
      name: "JadorWorks Web Studio",
      logo: {
        "@type": "ImageObject",
        url: "https://jadorworks.com/favicon.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://jadorworks.com/blog/${article.slug}`,
    },
  };

  let sectionIndex = 0;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-xs font-medium tracking-wide uppercase px-3 py-1 rounded-full"
                style={{
                  backgroundColor: "rgba(13,27,42,0.06)",
                  color: "rgba(13,27,42,0.62)",
                }}
              >
                {article.category}
              </span>
              <span
                className="text-xs"
                style={{ color: "rgba(13,27,42,0.42)" }}
              >
                {article.readTime} read
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h1 className="text-3xl md:text-4xl lg:text-[42px] font-light leading-tight tracking-tight text-navy mb-6">
              {article.headline}
            </h1>
          </ScrollReveal>

          <ScrollReveal>
            <p
              className="text-sm"
              style={{ color: "rgba(13,27,42,0.42)" }}
            >
              {article.dateLabel}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Article Body */}
      <section className="pb-20 md:pb-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="flex-1 max-w-3xl">
              {/* Intro (no heading) */}
              {article.sections[0] && article.sections[0].heading === "" && (
                <ScrollReveal>
                  <div
                    className="blog-prose mb-10"
                    dangerouslySetInnerHTML={{ __html: article.sections[0].content }}
                  />
                </ScrollReveal>
              )}

              {/* Key Points */}
              <ScrollReveal>
                <div
                  className="mb-12 p-6 md:p-8 rounded-lg"
                  style={{
                    backgroundColor: "rgba(13,27,42,0.03)",
                    border: "1px solid rgba(13,27,42,0.06)",
                  }}
                >
                  <h2
                    className="text-sm font-semibold uppercase tracking-wide mb-4"
                    style={{ color: "rgba(13,27,42,0.45)" }}
                  >
                    What you'll learn
                  </h2>
                  <ul className="space-y-2">
                    {article.keyPoints.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[15px] leading-relaxed text-navy"
                      >
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          className="w-4 h-4 mt-1 flex-shrink-0"
                          style={{ color: "rgba(13,27,42,0.42)" }}
                        >
                          <path
                            d="M3 8h10M9 4l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Content Sections with mid-CTA */}
              {contentSections.map((section, i) => {
                sectionIndex++;
                const showMidCta = sectionIndex === midPoint && midCta;

                return (
                  <div key={i}>
                    <ScrollReveal>
                      <div className="mb-10">
                        <h2 className="text-xl md:text-2xl font-light tracking-tight text-navy mb-5">
                          {section.heading}
                        </h2>
                        <div
                          className="blog-prose"
                          dangerouslySetInnerHTML={{ __html: section.content }}
                        />
                      </div>
                    </ScrollReveal>

                    {/* Mid-article CTA */}
                    {showMidCta && (
                      <ScrollReveal>
                        <div
                          className="my-12 p-6 md:p-8 rounded-lg"
                          style={{
                            backgroundColor: "#0D1B2A",
                          }}
                        >
                          <h3 className="text-lg font-light text-cream mb-2">
                            {midCta.headline}
                          </h3>
                          <p
                            className="text-sm leading-relaxed mb-5"
                            style={{ color: "rgba(250,249,246,0.62)" }}
                          >
                            {midCta.body}
                          </p>
                          <Link
                            href={midCta.primaryHref}
                            className="inline-block text-sm font-medium bg-cream text-navy px-5 py-2.5 rounded-lg hover:bg-navy hover:text-cream border border-cream hover:border-cream-28 transition-all duration-300"
                          >
                            {midCta.primaryLabel}
                          </Link>
                        </div>
                      </ScrollReveal>
                    )}
                  </div>
                );
              })}

              {/* Bottom CTA */}
              {bottomCta && (
                <ScrollReveal>
                  <div
                    className="mt-12 pt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                    style={{ borderTop: "1px solid rgba(13,27,42,0.10)" }}
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-light text-navy mb-1">
                        {bottomCta.headline}
                      </h3>
                      <p
                        className="text-sm"
                        style={{ color: "rgba(13,27,42,0.62)" }}
                      >
                        {bottomCta.body}
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={bottomCta.primaryHref}
                        target={bottomCta.primaryHref.startsWith("/demos/") ? "_blank" : undefined}
                        rel={bottomCta.primaryHref.startsWith("/demos/") ? "noopener noreferrer" : undefined}
                        className="text-sm font-medium bg-navy text-cream px-5 py-2.5 rounded-lg hover:bg-cream hover:text-navy border border-navy transition-all duration-300 text-center whitespace-nowrap"
                      >
                        {bottomCta.primaryLabel}
                      </Link>
                      {bottomCta.secondaryLabel && bottomCta.secondaryHref && (
                        <Link
                          href={bottomCta.secondaryHref}
                          className="text-sm font-medium text-navy px-5 py-2.5 rounded-lg border border-navy-10 hover:border-navy hover:bg-navy hover:text-cream transition-all duration-300 text-center whitespace-nowrap"
                        >
                          {bottomCta.secondaryLabel}
                        </Link>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </div>

            {/* Sidebar — desktop only */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-28 space-y-6">
                {/* Consultation CTA */}
                <div
                  className="p-6 rounded-lg"
                  style={{
                    backgroundColor: "#0D1B2A",
                  }}
                >
                  <h3 className="text-[15px] font-medium text-cream mb-2">
                    Free consultation
                  </h3>
                  <p
                    className="text-[13px] leading-relaxed mb-4"
                    style={{ color: "rgba(250,249,246,0.62)" }}
                  >
                    Talk to us about your project. No commitment required.
                  </p>
                  <Link
                    href="/#contact"
                    className="block text-[13px] font-medium bg-cream text-navy px-4 py-2.5 rounded-lg text-center hover:bg-navy hover:text-cream border border-cream hover:border-cream-28 transition-all duration-300"
                  >
                    Book a Consultation
                  </Link>
                </div>

                {/* Related Service */}
                {article.relatedService && (
                  <Link
                    href={article.relatedService.href}
                    className="block p-5 rounded-lg transition-all duration-200 group"
                    style={{
                      backgroundColor: "rgba(13,27,42,0.03)",
                      border: "1px solid rgba(13,27,42,0.06)",
                    }}
                  >
                    <span
                      className="text-xs font-medium uppercase tracking-wide"
                      style={{ color: "rgba(13,27,42,0.42)" }}
                    >
                      Related service
                    </span>
                    <span className="block text-sm font-medium text-navy mt-1 group-hover:translate-x-0.5 transition-transform duration-200">
                      {article.relatedService.label} →
                    </span>
                  </Link>
                )}

                {/* Related Demo */}
                {article.relatedDemo && (
                  <Link
                    href={article.relatedDemo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-5 rounded-lg transition-all duration-200 group"
                    style={{
                      backgroundColor: "rgba(13,27,42,0.03)",
                      border: "1px solid rgba(13,27,42,0.06)",
                    }}
                  >
                    <span
                      className="text-xs font-medium uppercase tracking-wide"
                      style={{ color: "rgba(13,27,42,0.42)" }}
                    >
                      See it live
                    </span>
                    <span className="block text-sm font-medium text-navy mt-1 group-hover:translate-x-0.5 transition-transform duration-200">
                      {article.relatedDemo.label} →
                    </span>
                  </Link>
                )}

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                  <div>
                    <h4
                      className="text-xs font-medium uppercase tracking-wide mb-3"
                      style={{ color: "rgba(13,27,42,0.42)" }}
                    >
                      More articles
                    </h4>
                    <div className="space-y-3">
                      {relatedArticles.map((related) => (
                        <Link
                          key={related.slug}
                          href={`/blog/${related.slug}`}
                          className="block p-4 rounded-lg transition-all duration-200 group"
                          style={{
                            backgroundColor: "rgba(13,27,42,0.03)",
                            border: "1px solid rgba(13,27,42,0.06)",
                          }}
                        >
                          <span
                            className="text-xs"
                            style={{ color: "rgba(13,27,42,0.42)" }}
                          >
                            {related.category} · {related.readTime}
                          </span>
                          <span className="block text-[13px] font-medium text-navy mt-1 leading-snug group-hover:translate-x-0.5 transition-transform duration-200">
                            {related.headline}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Mobile-only: Related articles (sidebar content collapsed into main flow) */}
      <section className="lg:hidden pb-16 bg-cream">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          {relatedArticles.length > 0 && (
            <div>
              <h4
                className="text-xs font-medium uppercase tracking-wide mb-4"
                style={{ color: "rgba(13,27,42,0.42)" }}
              >
                More articles
              </h4>
              <div className="space-y-3">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="block p-4 rounded-lg transition-all duration-200"
                    style={{
                      backgroundColor: "rgba(13,27,42,0.03)",
                      border: "1px solid rgba(13,27,42,0.06)",
                    }}
                  >
                    <span
                      className="text-xs"
                      style={{ color: "rgba(13,27,42,0.42)" }}
                    >
                      {related.category} · {related.readTime}
                    </span>
                    <span className="block text-[13px] font-medium text-navy mt-1 leading-snug">
                      {related.headline}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA Section */}
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
