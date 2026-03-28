import type { Metadata } from "next";
import { GreenLineLandscaping } from "@/components/demo/GreenLineLandscaping";
import { ExploreMoreDemos } from "@/components/demo/ExploreMoreDemos";

export const metadata: Metadata = {
  title: "GreenLine Landscaping — Indianapolis Lawn Care & Landscape Design",
  description:
    "Professional landscaping, lawn care, and hardscaping serving Indianapolis, Hendricks & Marion Counties. Licensed & insured for over 10 years.",
};

export default function LandscapingDemoPage() {
  return (
    <>
      <GreenLineLandscaping />
      <ExploreMoreDemos currentHref="/demos/landscaping" />
    </>
  );
}
