import type { Metadata } from "next";
import { SummitHVAC } from "@/components/demo/SummitHVAC";

export const metadata: Metadata = {
  title: "Summit Air & Plumbing — Indianapolis HVAC & Plumbing Experts",
  description:
    "Licensed HVAC and plumbing professionals serving Indianapolis and surrounding areas. Fast response, honest pricing, no surprises. 24/7 Emergency Service.",
};

export default function HVACDemoPage() {
  return <SummitHVAC />;
}
