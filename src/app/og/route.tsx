import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0D1B2A",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "80px 96px",
          fontFamily: "Inter, sans-serif",
          position: "relative",
        }}
      >
        {/* Top row — Pixel J mark + label */}
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "flex-start" }}>

          {/* Pixel J Mark — correct construction */}
          <div style={{ display: "flex", gap: "16px" }}>
            {/* Left column — top filled, middle empty, bottom filled */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ width: 40, height: 40, background: "#FAF9F6" }} />
              <div style={{ width: 40, height: 40, background: "transparent" }} />
              <div style={{ width: 40, height: 40, background: "#FAF9F6" }} />
            </div>
            {/* Right column — all three filled */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ width: 40, height: 40, background: "#FAF9F6" }} />
              <div style={{ width: 40, height: 40, background: "#FAF9F6" }} />
              <div style={{ width: 40, height: 40, background: "#FAF9F6" }} />
            </div>
          </div>

          <span style={{ fontSize: 14, fontWeight: 500, color: "rgba(250,249,246,0.28)", letterSpacing: "3px", textTransform: "uppercase" as const }}>
            Web Studio
          </span>
        </div>

        {/* Middle — wordmark + headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <span style={{ fontSize: 86, fontWeight: 200, color: "#FAF9F6", letterSpacing: "-3px", lineHeight: 1 }}>Jador</span>
            <span style={{ fontSize: 86, fontWeight: 800, color: "#FAF9F6", letterSpacing: "-3px", lineHeight: 1 }}>Works</span>
          </div>
          <span style={{ fontSize: 22, fontWeight: 300, color: "rgba(250,249,246,0.6)", maxWidth: "700px", lineHeight: 1.5 }}>
            Websites, webapps &amp; digital solutions for Indiana&apos;s local service businesses.
          </span>
        </div>

        {/* Bottom row — CTA + URL + Indiana */}
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {/* CTA pill */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              background: "rgba(250,249,246,0.10)",
              border: "1.5px solid rgba(250,249,246,0.25)",
              padding: "12px 24px",
            }}>
              <span style={{ fontSize: 15, fontWeight: 600, color: "#FAF9F6", letterSpacing: "2px", textTransform: "uppercase" as const }}>
                Get a Free Consultation
              </span>
              <span style={{ fontSize: 15, color: "rgba(250,249,246,0.6)" }}>→</span>
            </div>
            <span style={{ fontSize: 13, fontWeight: 500, color: "rgba(250,249,246,0.25)", letterSpacing: "3px", textTransform: "uppercase" as const }}>
              jadorworks.com
            </span>
          </div>
          <span style={{ fontSize: 13, fontWeight: 500, color: "rgba(250,249,246,0.25)", letterSpacing: "3px", textTransform: "uppercase" as const }}>
            Indiana
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
