import type { Metadata } from "next";
import { GreenLineLandscaping } from "@/components/demo/GreenLineLandscaping";
import { ExploreMoreDemos } from "@/components/demo/ExploreMoreDemos";

export const metadata: Metadata = {
  title: "Landscaping Website Demo | JadorWorks Web Studio",
  description:
    "A modern landscaping and lawn care website demo built by JadorWorks Web Studio. See how landscaping companies can attract homeowners and grow their business online.",
};

export default function LandscapingDemoPage() {
  return (
    <>
      <GreenLineLandscaping />
      <ExploreMoreDemos currentHref="/demos/landscaping" />
    </>
  );
}
