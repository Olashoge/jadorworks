const painPoints = [
  {
    title: "No website, no credibility",
    description:
      "Customers are less likely to trust a business they cannot verify online.",
    icon: "🔍",
  },
  {
    title: "No Google presence, less visibility",
    description:
      "If you do not show up clearly in search, you lose attention to competitors who do.",
    icon: "📍",
  },
  {
    title: "A bad website can hurt more than help",
    description:
      "Broken pages, old information, and weak design create doubt.",
    icon: "⚠️",
  },
  {
    title: "No support means it goes stale",
    description:
      "A website needs updates, maintenance, and follow-through to stay useful.",
    icon: "🔧",
  },
];

export function Problem() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            Your customers are searching for you online — and finding nothing.
          </h2>
          <p className="mt-4 text-lg text-slate/70">
            Trust starts before the first phone call. If customers can&apos;t
            find you online, they move on.
          </p>
        </div>

        {/* Pain Points */}
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="p-6 rounded-xl border border-gray-100 hover:border-gold/30 transition-colors"
            >
              <span className="text-2xl">{point.icon}</span>
              <h3 className="mt-3 text-lg font-semibold text-navy">
                {point.title}
              </h3>
              <p className="mt-2 text-slate/70 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
