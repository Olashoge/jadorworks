import Link from "next/link";

const demos = [
  {
    title: "HVAC / Plumbing Company",
    description: "A professional site for heating, cooling, and plumbing services.",
    slug: "hvac-plumbing",
  },
  {
    title: "Remodeling / Home Improvement",
    description: "Showcase renovation work with a clean, trustworthy design.",
    slug: "remodeling",
  },
  {
    title: "Home Care",
    description: "A warm, reliable site for home care and senior services.",
    slug: "home-care",
  },
  {
    title: "Landscaping Company",
    description: "Highlight outdoor projects with a fresh, modern layout.",
    slug: "landscaping",
  },
];

export function DemoSites() {
  return (
    <section className="py-20 px-6" id="demos">
      <div className="max-w-5xl mx-auto">
        {/* Headline */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            See what we build.
          </h2>
          <p className="mt-4 text-lg text-slate/70">
            Real examples of clean, modern websites built for local service
            businesses. Click any site to explore it live.
          </p>
        </div>

        {/* Demo Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {demos.map((demo) => (
            <Link
              key={demo.slug}
              href={`/demos#${demo.slug}`}
              className="group block p-6 rounded-xl border border-gray-100 hover:border-gold/40 hover:shadow-md transition-all"
            >
              {/* Placeholder thumbnail */}
              <div className="aspect-video bg-gray-50 rounded-lg mb-4 flex items-center justify-center border border-gray-100">
                <span className="text-sm text-slate/40">Preview coming soon</span>
              </div>

              <h3 className="text-lg font-semibold text-navy group-hover:text-gold transition-colors">
                {demo.title}
              </h3>
              <p className="mt-1 text-sm text-slate/60">{demo.description}</p>
              <span className="inline-block mt-3 text-sm font-medium text-gold">
                View Live Site →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
