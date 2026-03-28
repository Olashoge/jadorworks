import type { Metadata } from "next";
import { SummitHVAC } from "@/components/demo/SummitHVAC";
import { ExploreMoreDemos } from "@/components/demo/ExploreMoreDemos";

export const metadata: Metadata = {
  title: "HVAC Website Demo for Indianapolis Businesses | JadorWorks",
  description:
    "A modern HVAC and plumbing website demo built by JadorWorks Web Studio. See how local service businesses build trust, showcase expertise, and generate leads online.",
};

export default function HVACDemoPage() {
  return (
    <>
      <SummitHVAC />
      <ExploreMoreDemos currentHref="/demos/hvac" />
    </>
  );
}
