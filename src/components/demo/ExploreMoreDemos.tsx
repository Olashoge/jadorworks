import Link from "next/link";

// =============================================
// Explore More Demos — Cross-linking strip
// Shows other demo sites + link back to /demos
// Placed at the bottom of each demo page
// =============================================

const DEMO_SITES = [
  { name: "Summit Air & Plumbing", industry: "HVAC & Plumbing", href: "/demos/hvac" },
  { name: "Cornerstone Renovations", industry: "Remodeling", href: "/demos/remodeling" },
  { name: "GreenLine Landscaping", industry: "Landscaping", href: "/demos/landscaping" },
  { name: "Graceful Living Home Care", industry: "Home Care", href: "/demos/home-care" },
];

interface ExploreMoreDemosProps {
  /** The href of the current demo page (e.g. "/demos/hvac") — used to exclude it from the list */
  currentHref: string;
}

export function ExploreMoreDemos({ currentHref }: ExploreMoreDemosProps) {
  const otherDemos = DEMO_SITES.filter((d) => d.href !== currentHref);

  return (
    <section
      className="py-10 px-6 md:px-12 lg:px-20"
      style={{
        backgroundColor: "#0D1B2A",
        borderTop: "1px solid rgba(250,249,246,0.06)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <p
          className="text-[11px] font-medium tracking-[0.22em] uppercase mb-5 text-center"
          style={{ color: "rgba(250,249,246,0.30)" }}
        >
          Explore More Demo Sites
        </p>

        <div className="grid sm:grid-cols-3 gap-3">
          {otherDemos.map((demo) => (
            <Link
              key={demo.href}
              href={demo.href}
              className="group flex items-center justify-between p-4 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
              style={{
                border: "1px solid rgba(250,249,246,0.08)",
                backgroundColor: "rgba(250,249,246,0.03)",
              }}
            >
              <div>
                <p
                  className="text-sm font-medium group-hover:underline underline-offset-2"
                  style={{ color: "rgba(250,249,246,0.85)" }}
                >
                  {demo.name}
                </p>
                <p
                  className="text-xs font-light mt-0.5"
                  style={{ color: "rgba(250,249,246,0.40)" }}
                >
                  {demo.industry}
                </p>
              </div>
              <span
                className="text-sm transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: "rgba(250,249,246,0.25)" }}
              >
                →
              </span>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-5">
          <Link
            href="/demos"
            className="text-[11px] font-medium tracking-[0.15em] uppercase transition-colors hover:opacity-80"
            style={{ color: "rgba(250,249,246,0.35)" }}
          >
            All Demos
          </Link>
          <span style={{ color: "rgba(250,249,246,0.15)" }}>·</span>
          <Link
            href="/"
            className="text-[11px] font-medium tracking-[0.15em] uppercase transition-colors hover:opacity-80"
            style={{ color: "rgba(250,249,246,0.35)" }}
          >
            JadorWorks Web Studio →
          </Link>
        </div>
      </div>
    </section>
  );
}
