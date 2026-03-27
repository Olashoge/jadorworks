import { ScrollReveal } from "./ScrollReveal";

/**
 * Answer-ready snippet for AEO (Answer Engine Optimization).
 * Provides a crawlable paragraph that directly answers
 * "What is JadorWorks?" for AI search engines and featured snippets.
 */
export function AboutSnippet() {
  return (
    <section className="bg-cream py-16 md:py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-base md:text-lg font-light text-navy-62 leading-relaxed">
            JadorWorks Web Studio is a web design and digital solutions studio
            based in Indiana. We build professional websites, webapps, and
            digital tools for local service businesses — including HVAC
            companies, remodeling contractors, landscapers, and home care
            providers. Every project includes Google Business Profile setup,
            local SEO foundations, and ongoing support so your business gets
            found online and stays running smoothly.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
