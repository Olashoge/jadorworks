// =============================================
// Pixel J Mark — The JadorWorks Logo
// Concept P — "The Pixel" by Cael Voss
// 5 equal square pixel blocks forming a J
// =============================================

interface PixelJMarkProps {
  size?: number;
  color?: string;
  className?: string;
}

export function PixelJMark({
  size = 24,
  color = "#0D1B2A",
  className = "",
}: PixelJMarkProps) {
  return (
    <svg
      width={size}
      height={size * (44 / 28)}
      viewBox="0 0 28 44"
      fill="none"
      className={className}
      aria-label="JadorWorks logo"
    >
      <rect x="0" y="0" width="12" height="12" fill={color} />
      <rect x="16" y="0" width="12" height="12" fill={color} />
      <rect x="16" y="16" width="12" height="12" fill={color} />
      <rect x="16" y="32" width="12" height="12" fill={color} />
      <rect x="0" y="32" width="12" height="12" fill={color} />
    </svg>
  );
}

interface LogoLockupProps {
  size?: number;
  color?: string;
  variant?: "horizontal" | "stacked";
  className?: string;
}

export function LogoLockup({
  size = 20,
  color = "#0D1B2A",
  variant = "horizontal",
  className = "",
}: LogoLockupProps) {
  const textColor = color;
  const fontSize = variant === "horizontal" ? size * 0.9 : size * 0.75;

  if (variant === "stacked") {
    return (
      <div
        className={className}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: size * 0.5,
          userSelect: "none",
        }}
      >
        <PixelJMark size={size * 1.2} color={color} />
        <span
          style={{
            fontSize,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            color: textColor,
            fontFamily: "var(--font-inter), Inter, sans-serif",
          }}
        >
          <span style={{ fontWeight: 300 }}>Jador</span>Works
        </span>
      </div>
    );
  }

  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        gap: size * 0.6,
        userSelect: "none",
      }}
    >
      <PixelJMark size={size} color={color} />
      <span
        style={{
          fontSize,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          lineHeight: 1,
          color: textColor,
          fontFamily: "var(--font-inter), Inter, sans-serif",
        }}
      >
        <span style={{ fontWeight: 300 }}>Jador</span>Works
      </span>
    </div>
  );
}
