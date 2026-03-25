import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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
      <body className="font-sans">
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
