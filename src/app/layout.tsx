import type { Metadata } from "next";
import { Inter, Barlow, Barlow_Condensed, Cormorant_Garamond, DM_Sans, Outfit, Lora } from "next/font/google";
import { brand } from "@/lib/brand";
import { CustomCursor } from "@/components/CustomCursor";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${brand.serviceLine} — ${brand.tagline}`,
  description:
    "Launch a clean, mobile-friendly website with Google-ready setup and ongoing support. Built for local service businesses that need credibility, visibility, and more customer inquiries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable} ${barlowCondensed.variable} ${cormorant.variable} ${dmSans.variable} ${outfit.variable} ${lora.variable}`}>
      <body className="font-sans">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
