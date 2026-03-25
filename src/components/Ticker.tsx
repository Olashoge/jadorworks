const items = [
  "LOCAL SEO",
  "ONGOING SUPPORT",
  "LAUNCH IN 1\u20132 WEEKS",
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
            className="text-xs font-normal tracking-[0.15em] mx-8 flex items-center gap-8"
            style={{ color: "rgba(250,249,246,0.45)" }}
          >
            {item}
            <span style={{ color: "rgba(250,249,246,0.20)" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
