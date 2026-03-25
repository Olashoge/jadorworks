const businessTypes = [
  { name: "HVAC & Plumbing", icon: "🔧" },
  { name: "Remodeling & Home Improvement", icon: "🏠" },
  { name: "Home Care & Senior Services", icon: "❤️" },
  { name: "Landscaping & Lawn Care", icon: "🌿" },
  { name: "Cleaning Services", icon: "✨" },
  { name: "Electrical & Handyman", icon: "⚡" },
  { name: "Salons & Barbershops", icon: "✂️" },
  { name: "Local Shops & Solo Operators", icon: "🏪" },
];

export function WhoItsFor() {
  return (
    <section className="py-20 px-6 bg-ivory">
      <div className="max-w-5xl mx-auto">
        {/* Headline */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            Built for local service businesses ready to grow.
          </h2>
          <p className="mt-4 text-lg text-slate/70">
            This is designed for businesses that depend on reputation, referrals,
            and local trust — but need a stronger online presence.
          </p>
        </div>

        {/* Business Type Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {businessTypes.map((biz) => (
            <div
              key={biz.name}
              className="flex flex-col items-center text-center p-5 rounded-xl border border-gray-100 bg-white"
            >
              <span className="text-2xl mb-2">{biz.icon}</span>
              <p className="text-sm font-medium text-navy">{biz.name}</p>
            </div>
          ))}
        </div>

        {/* Qualifier */}
        <p className="mt-10 text-center text-slate/60 text-sm italic">
          If your business runs on local trust and customer referrals, this is
          built for you.
        </p>
      </div>
    </section>
  );
}
