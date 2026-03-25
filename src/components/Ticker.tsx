const items = [
  "LOCAL SEO",
  "ONGOING SUPPORT",
  "LAUNCH IN 1–2 WEEKS",
  "PROFESSIONAL DESIGN",
  "MOBILE-FRIENDLY",
  "GOOGLE BUSINESS PROFILE",
];

export function Ticker() {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-navy py-3 ticker-strip">
      <div className="ticker-content">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="text-xs font-medium tracking-[0.15em] text-cream/60 mx-8 flex items-center gap-8"
          >
            {item}
            <span className="text-cream/30">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
