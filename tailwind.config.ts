import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF9F6",
        navy: "#0D1B2A",
        // Opacity variants for light backgrounds
        "navy-68": "rgba(13,27,42,0.68)",
        "navy-62": "rgba(13,27,42,0.62)",
        "navy-45": "rgba(13,27,42,0.45)",
        "navy-42": "rgba(13,27,42,0.42)",
        "navy-10": "rgba(13,27,42,0.10)",
        "navy-03": "rgba(13,27,42,0.03)",
        // Opacity variants for dark backgrounds
        "cream-62": "rgba(250,249,246,0.62)",
        "cream-45": "rgba(250,249,246,0.45)",
        "cream-28": "rgba(250,249,246,0.28)",
        "cream-08": "rgba(250,249,246,0.08)",
        "cream-07": "rgba(250,249,246,0.07)",
        "cream-04": "rgba(250,249,246,0.04)",
        "gl-green": "#2D5A3D",
        "gl-green2": "#1E3D2A",
        "gl-green-lt": "#3D7A52",
        "gl-brown": "#8B6F47",
        "gl-brown-lt": "#A88458",
        "gl-stone": "#F5F3EF",
        "gl-stone2": "#EAE6DF",
        "hc-navy": "#2A3D54",
        "hc-navy2": "#1C2B3C",
        "hc-navy-lt": "#3A5470",
        "hc-sage": "#7FA868",
        "hc-sage-lt": "#95C07D",
        "hc-sage-dk": "#5D8A4A",
        "hc-warm": "#FBF9F6",
        "hc-warm2": "#F2EEE8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        barlow: ["var(--font-barlow)", "system-ui", "sans-serif"],
        condensed: ["var(--font-barlow-condensed)", "system-ui", "sans-serif"],
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        "dm-sans": ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        nunito: ["var(--font-nunito)", "system-ui", "sans-serif"],
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "overlay-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-up": "slide-up 0.8s ease-out forwards",
        ticker: "ticker 25s linear infinite",
        "overlay-out": "overlay-out 1.2s ease-out 0.3s forwards",
      },
    },
  },
  plugins: [],
};

export default config;
