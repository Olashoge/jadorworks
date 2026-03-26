// =============================================
// Demo Site Config — Type definition
// Each demo site passes one of these to render
// a complete one-page site
// =============================================

export interface DemoConfig {
  // Brand
  businessName: string;
  tagline: string;
  phone: string;
  email: string;
  area: string;
  hours: string;
  tone: string;

  // Colors
  colors: {
    primary: string;    // Main dark color (nav, headings, footer bg)
    accent: string;     // Accent color (CTAs, highlights)
    background: string; // Page background
    primaryRgb: string; // RGB values for opacity variants e.g. "27,58,92"
    accentRgb: string;  // RGB values for accent opacity
  };

  // Hero
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
    ctaHref?: string; // defaults to #contact
  };

  // Services
  services: {
    name: string;
    description: string;
  }[];

  // About
  about: string;

  // Trust Badges
  trustBadges: string[];

  // Service Area
  serviceArea: {
    regions: string[];
  };

  // Testimonials
  testimonials: {
    quote: string;
    name: string;
    location: string;
  }[];

  // CTA Section
  cta: {
    headline: string;
    subheadline: string;
    buttonText: string;
  };

  // Optional: Gallery (for remodeling/landscaping)
  gallery?: {
    title: string;
    items: { label: string }[];
  };

  // Industry-specific features
  showEmergencyCta?: boolean;
}
