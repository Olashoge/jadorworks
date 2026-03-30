"use client";

import { useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { BlogArticle } from "@/lib/blog";

interface BlogListProps {
  articles: BlogArticle[];
  categories: string[];
}

export function BlogList({ articles, categories }: BlogListProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? articles.filter((a) => a.category === activeCategory)
    : articles;

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      {/* Category Filter */}
      <section className="bg-cream">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          <div
            className="flex items-center gap-2 pb-8 flex-wrap"
            style={{ borderBottom: "1px solid rgba(13,27,42,0.08)" }}
          >
            <button
              onClick={() => setActiveCategory(null)}
              className="text-xs font-medium px-3 py-1.5 rounded-full transition-colors cursor-pointer"
              style={
                activeCategory === null
                  ? { backgroundColor: "#0D1B2A", color: "#FAF9F6" }
                  : {
                      backgroundColor: "rgba(13,27,42,0.05)",
                      color: "rgba(13,27,42,0.62)",
                    }
              }
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() =>
                  setActiveCategory(activeCategory === cat ? null : cat)
                }
                className="text-xs font-medium px-3 py-1.5 rounded-full transition-colors cursor-pointer"
                style={
                  activeCategory === cat
                    ? { backgroundColor: "#0D1B2A", color: "#FAF9F6" }
                    : {
                        backgroundColor: "rgba(13,27,42,0.05)",
                        color: "rgba(13,27,42,0.62)",
                      }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="py-12 md:py-16 bg-cream">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
            <ScrollReveal>
              <Link
                href={`/blog/${featured.slug}`}
                className="block group"
              >
                <div
                  className="p-8 md:p-10 rounded-lg transition-all duration-300"
                  style={{
                    backgroundColor: "rgba(13,27,42,0.03)",
                    border: "1px solid rgba(13,27,42,0.06)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-xs font-medium tracking-wide uppercase px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: "rgba(13,27,42,0.06)",
                        color: "rgba(13,27,42,0.62)",
                      }}
                    >
                      {featured.category}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: "rgba(13,27,42,0.42)" }}
                    >
                      {featured.readTime} read · {featured.dateLabel}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-light tracking-tight text-navy mb-3 group-hover:translate-x-0.5 transition-transform duration-200">
                    {featured.headline}
                  </h2>
                  <p
                    className="text-sm md:text-base leading-relaxed max-w-2xl"
                    style={{ color: "rgba(13,27,42,0.62)" }}
                  >
                    {featured.description}
                  </p>
                  <span className="inline-block mt-5 text-sm font-medium text-navy group-hover:translate-x-1 transition-transform duration-200">
                    Read article →
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Article Grid */}
      {rest.length > 0 && (
        <section className="pb-16 md:pb-24 bg-cream">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid md:grid-cols-2 gap-6">
              {rest.map((article) => (
                <ScrollReveal key={article.slug}>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="block group h-full"
                  >
                    <div
                      className="p-6 md:p-8 rounded-lg h-full transition-all duration-300"
                      style={{
                        backgroundColor: "rgba(13,27,42,0.03)",
                        border: "1px solid rgba(13,27,42,0.06)",
                      }}
                    >
                      <div className="flex items-center gap-3 mb-3">
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
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-light tracking-tight text-navy mb-2 group-hover:translate-x-0.5 transition-transform duration-200">
                        {article.headline}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "rgba(13,27,42,0.62)" }}
                      >
                        {article.description}
                      </p>
                      <span className="inline-block mt-4 text-sm font-medium text-navy group-hover:translate-x-1 transition-transform duration-200">
                        Read article →
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty state */}
      {!featured && (
        <section className="py-16 md:py-24 bg-cream">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 text-center">
            <p
              className="text-sm"
              style={{ color: "rgba(13,27,42,0.45)" }}
            >
              No articles in this category yet.
            </p>
          </div>
        </section>
      )}
    </>
  );
}
