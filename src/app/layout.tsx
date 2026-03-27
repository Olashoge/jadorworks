import type { Metadata } from "next";
import { Inter, Barlow, Barlow_Condensed, Cormorant_Garamond, DM_Sans, Outfit, Lora, Nunito_Sans, Playfair_Display } from "next/font/google";
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

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-nunito",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jadorworks.com"),
  title: "JadorWorks Web Studio — Websites, Webapps & Digital Solutions · Indiana",
  description:
    "Professional websites, webapps, and digital solutions for local service businesses in Indiana. Google Business Profile setup and ongoing support included. Launch in 1–2 weeks.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "JadorWorks Web Studio — Websites, Webapps & Digital Solutions",
    description:
      "We build professional websites, webapps, and digital solutions for local service businesses — with Google setup and ongoing support included.",
    url: "https://jadorworks.com",
    siteName: "JadorWorks Web Studio",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "JadorWorks Web Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JadorWorks Web Studio — Websites, Webapps & Digital Solutions",
    description:
      "We build professional websites, webapps, and digital solutions for local service businesses — with Google setup and ongoing support included.",
    images: ["/og"],
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
  areaServed: { "@type": "State", name: "Indiana" },
  serviceType: [
    "Website Design",
    "Web Application Development",
    "Digital Solutions",
    "Google Business Profile Setup",
    "Local SEO",
  ],
  priceRange: "$",
  sameAs: [],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does JadorWorks Web Studio do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JadorWorks Web Studio builds professional websites, webapps, and digital solutions for local service businesses. We handle everything from design and development to Google Business Profile setup and ongoing support.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to launch a website with JadorWorks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most websites launch in 1–2 weeks. We keep the process simple: a short consultation, a design phase, and a fast build so your business gets online quickly.",
      },
    },
    {
      "@type": "Question",
      name: "What types of businesses does JadorWorks work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in local service businesses — HVAC companies, remodeling contractors, landscapers, home care providers, and similar trades that need a professional online presence to attract local customers.",
      },
    },
    {
      "@type": "Question",
      name: "Does JadorWorks help with Google and local SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every project includes Google Business Profile setup and local SEO foundations so your business shows up when nearby customers search for your services.",
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
    <html lang="en" className={`${inter.variable} ${barlow.variable} ${barlowCondensed.variable} ${cormorant.variable} ${dmSans.variable} ${outfit.variable} ${lora.variable} ${nunitoSans.variable} ${playfairDisplay.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="font-sans">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
