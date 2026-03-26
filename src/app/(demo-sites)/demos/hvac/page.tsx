import type { Metadata } from "next";
import { DemoSite } from "@/components/demo/DemoSite";
import type { DemoConfig } from "@/lib/demo-config";

export const metadata: Metadata = {
  title: "Summit Air & Plumbing — Reliable Comfort, Guaranteed",
  description:
    "Licensed HVAC and plumbing professionals serving Indianapolis and surrounding areas. Fast response, honest pricing, no surprises.",
};

const hvacConfig: DemoConfig = {
  businessName: "Summit Air & Plumbing",
  tagline: "Reliable comfort, guaranteed.",
  phone: "(555) 802-4100",
  email: "service@summitairandplumbing.com",
  area: "Indianapolis, IN · Serving Marion County & surrounding areas",
  hours: "24/7 Emergency · Mon–Sat 7am–7pm",
  tone: "Reliable · Urgent · Practical",

  colors: {
    primary: "#1A2E44",
    accent: "#2980B9",
    background: "#FAFAFA",
    primaryRgb: "26,46,68",
    accentRgb: "41,128,185",
  },

  hero: {
    headline: "Your home's comfort shouldn't be a gamble.",
    subheadline:
      "Licensed HVAC and plumbing professionals serving Indianapolis and surrounding areas. Fast response, honest pricing, no surprises.",
    cta: "Call Now — (555) 802-4100",
    ctaHref: "tel:5558024100",
  },

  services: [
    {
      name: "AC Installation & Repair",
      description:
        "Central air, ductless mini-splits, and full system replacements. We size it right, install it clean, and make sure it runs efficiently.",
    },
    {
      name: "Heating Systems",
      description:
        "Furnace repair, heat pump installation, and seasonal tune-ups. Stay warm all winter with a system you can rely on.",
    },
    {
      name: "Plumbing Repairs",
      description:
        "Leaks, clogs, pipe repairs, and fixture replacements. Fast diagnosis, honest pricing, and work that lasts.",
    },
    {
      name: "Water Heater Installation",
      description:
        "Tank and tankless water heaters. We help you choose the right size, install it properly, and remove the old unit.",
    },
    {
      name: "Drain Cleaning",
      description:
        "Professional drain clearing for kitchens, bathrooms, and main lines. No guesswork — we find the problem and fix it.",
    },
  ],

  about:
    "Summit Air & Plumbing has served Indianapolis-area homeowners for over 12 years. We believe every service call should end with a clear explanation, a fair price, and a system that works. Our technicians are licensed, background-checked, and trained to treat your home like their own.",

  trustBadges: [
    "Licensed & Insured",
    "24/7 Emergency Service",
    "Same-Day Availability",
    "Background-Checked Technicians",
  ],

  serviceArea: {
    regions: [
      "Indianapolis",
      "Carmel",
      "Fishers",
      "Noblesville",
      "Westfield",
      "Zionsville",
      "Greenwood",
      "Brownsburg",
    ],
  },

  testimonials: [
    {
      quote:
        "They came out within an hour on a Saturday. Fixed our AC and explained everything. No upsell, just honest work.",
      name: "Marcus T.",
      location: "Carmel, IN",
    },
    {
      quote:
        "We've used Summit for plumbing twice now. Always on time, always fair. They're our go-to.",
      name: "Angela R.",
      location: "Fishers, IN",
    },
    {
      quote:
        "Emergency pipe burst at 2am. They answered the phone, showed up fast, and handled it. Can't ask for more.",
      name: "David L.",
      location: "Indianapolis, IN",
    },
  ],

  cta: {
    headline: "Need service? We're ready.",
    subheadline:
      "Whether it's an emergency or a routine check, we'll get back to you fast. No pressure, no hidden fees.",
    buttonText: "Request Service",
  },

  showEmergencyCta: true,
};

export default function HVACDemoPage() {
  return <DemoSite config={hvacConfig} />;
}
