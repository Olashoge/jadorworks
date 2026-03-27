import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CustomCursor } from "@/components/CustomCursor";
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
  title: "JadorWorks Web Studio — Websites & Digital Solutions",
  description:
    "Professional websites, webapps, and digital solutions for Indiana service businesses. Google Business Profile setup and ongoing support included.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "JadorWorks Web Studio — Websites, Webapps & Digital Solutions",
    description:
      "Professional websites, webapps, and digital solutions for Indiana service businesses. Google Business Profile setup and ongoing support included.",
    url: "https://jadorworks.com",
    siteName: "JadorWorks Web Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JadorWorks Web Studio — Websites, Webapps & Digital Solutions · Indiana",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JadorWorks Web Studio — Websites, Webapps & Digital Solutions",
    description:
      "Professional websites, webapps, and digital solutions for Indiana service businesses. Google Business Profile setup and ongoing support included.",
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does JadorWorks Web Studio build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JadorWorks Web Studio builds professional websites, webapps, and digital solutions for local service businesses in Indiana. Every project includes Google Business Profile setup and ongoing support.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to launch a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most websites built by JadorWorks Web Studio go live in 1 to 2 weeks from the initial consultation.",
      },
    },
    {
      "@type": "Question",
      name: "Does JadorWorks Web Studio serve businesses outside Indianapolis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. JadorWorks Web Studio serves local service businesses across Indiana, with roots in Indianapolis and the surrounding areas.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in a JadorWorks website package?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every package includes a professional website, Google Business Profile setup or cleanup, local SEO foundation, and ongoing hosting and support. Starter, Growth, and Custom tiers are available.",
      },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <CustomCursor />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
