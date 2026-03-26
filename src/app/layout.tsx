import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import { CustomCursor } from "@/components/CustomCursor";
import "./globals.css";

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
    <html lang="en">
      <head>
        {/* Barlow + Barlow Condensed for demo sites */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,700&family=Barlow+Condensed:wght@600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
