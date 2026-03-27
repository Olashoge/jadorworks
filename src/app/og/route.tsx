import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0D1B2A",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Subtle grid texture */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.04,
            backgroundImage:
              "linear-gradient(rgba(250,249,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(250,249,246,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            display: "flex",
          }}
        />

        {/* Pixel J Mark — 5-square pattern */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            marginBottom: "32px",
          }}
        >
          {/* Row 1: single square top-right */}
          <div style={{ display: "flex", gap: "4px", justifyContent: "flex-end" }}>
            <div style={{ width: "20px", height: "20px", backgroundColor: "#FAF9F6", borderRadius: "2px", display: "flex" }} />
          </div>
          {/* Row 2: single square top-right */}
          <div style={{ display: "flex", gap: "4px", justifyContent: "flex-end" }}>
            <div style={{ width: "20px", height: "20px", backgroundColor: "#FAF9F6", borderRadius: "2px", display: "flex" }} />
          </div>
          {/* Row 3: two squares — hook */}
          <div style={{ display: "flex", gap: "4px" }}>
            <div style={{ width: "20px", height: "20px", backgroundColor: "#FAF9F6", borderRadius: "2px", display: "flex" }} />
            <div style={{ width: "20px", height: "20px", backgroundColor: "#FAF9F6", borderRadius: "2px", display: "flex" }} />
          </div>
          {/* Row 4: single square bottom-left — tail */}
          <div style={{ display: "flex", gap: "4px" }}>
            <div style={{ width: "20px", height: "20px", backgroundColor: "#FAF9F6", borderRadius: "2px", display: "flex" }} />
          </div>
        </div>

        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            fontSize: "48px",
            color: "#FAF9F6",
            letterSpacing: "-0.02em",
            marginBottom: "16px",
          }}
        >
          <span style={{ fontWeight: 300 }}>Jador</span>
          <span style={{ fontWeight: 700 }}>Works</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: "20px",
            color: "rgba(250,249,246,0.6)",
            fontWeight: 300,
            textAlign: "center",
            maxWidth: "700px",
            lineHeight: 1.5,
          }}
        >
          Websites, webapps, and digital solutions for local service businesses — built in Indiana.
        </div>

        {/* URL + Location */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginTop: "40px",
            fontSize: "14px",
            color: "rgba(250,249,246,0.3)",
            fontWeight: 400,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          <span style={{ display: "flex" }}>jadorworks.com</span>
          <span style={{ display: "flex" }}>·</span>
          <span style={{ display: "flex" }}>Indiana</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
