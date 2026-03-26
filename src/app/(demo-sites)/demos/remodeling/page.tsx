import type { Metadata } from "next";
import { CornerstoneRenovations } from "@/components/demo/CornerstoneRenovations";

export const metadata: Metadata = {
  title: "Cornerstone Renovations — Indianapolis Remodeling & Home Improvement",
  description:
    "Full-service remodeling for Indianapolis-area homeowners. Kitchen, bathroom, basement, and whole-home renovations. Licensed, insured, and trusted for over 15 years.",
};

export default function RemodelingDemoPage() {
  return <CornerstoneRenovations />;
}
