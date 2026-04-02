import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CustomCursor } from "@/components/CustomCursor";
import { AssistantWidget } from "@/components/AssistantWidget";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jadorworks.com"),
  title: "Web Design for Small Businesses in Indiana | JadorWorks Web Studio",
  description:
    "Web design for local service businesses in Indiana. Professional websites with Google Business Profile setup, local SEO, and ongoing support. Built for HVAC, remodeling, landscaping, and home care companies.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Web Design for Small Businesses in Indiana | JadorWorks Web Studio",
    description:
      "Web design for local service businesses in Indiana. Professional websites with Google Business Profile setup, local SEO, and ongoing support. Built for HVAC, remodeling, landscaping, and home care companies.",
    url: "https://jadorworks.com",
    siteName: "JadorWorks Web Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JadorWorks Web Studio — Web Design for Small Businesses in Indiana",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design for Small Businesses in Indiana | JadorWorks Web Studio",
    description:
      "Web design for local service businesses in Indiana. Professional websites with Google Business Profile setup, local SEO, and ongoing support. Built for HVAC, remodeling, landscaping, and home care companies.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "JadorWorks Web Studio",
  description:
    "Websites, webapps, and digital solutions for local service businesses in Indiana.",
  url: "https://jadorworks.com",
  telephone: "+13177215551",
  email: "hello@jadorworks.com",
  logo: "https://jadorworks.com/favicon.svg",
  foundingDate: "2026",
  areaServed: {
    "@type": "State",
    name: "Indiana",
    sameAs: "https://en.wikipedia.org/wiki/Indiana",
  },
  image: "https://jadorworks.com/og-image.png",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web & Digital Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Design and Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Application Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Business Profile Setup",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Local SEO",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ongoing Website Support",
        },
      },
    ],
  },
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Credit Card, Bank Transfer",
  sameAs: ["https://jadorworks.com"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <script
          dangerouslySetInnerHTML={{
            __html: `document.body.classList.add('js-enabled');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CustomCursor />
        <AssistantWidget />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
