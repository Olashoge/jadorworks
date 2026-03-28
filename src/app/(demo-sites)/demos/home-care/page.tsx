import type { Metadata } from "next";
import { GracefulLivingHomeCare } from "@/components/demo/GracefulLivingHomeCare";
import { ExploreMoreDemos } from "@/components/demo/ExploreMoreDemos";

export const metadata: Metadata = {
  title: "Graceful Living Home Care — Indianapolis Senior & Home Care Services",
  description:
    "Compassionate, dependable in-home care for seniors and adults in Indianapolis. Background-checked caregivers, personalized care plans, and 7-day availability.",
};

export default function HomeCareDemoPage() {
  return (
    <>
      <GracefulLivingHomeCare />
      <ExploreMoreDemos currentHref="/demos/home-care" />
    </>
  );
}
