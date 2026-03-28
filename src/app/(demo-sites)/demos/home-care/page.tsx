import type { Metadata } from "next";
import { GracefulLivingHomeCare } from "@/components/demo/GracefulLivingHomeCare";
import { ExploreMoreDemos } from "@/components/demo/ExploreMoreDemos";

export const metadata: Metadata = {
  title: "Home Care Website Demo | JadorWorks Web Studio",
  description:
    "A compassionate home care website demo built by JadorWorks Web Studio. See how senior care and in-home service providers can build trust and connect with families online.",
};

export default function HomeCareDemoPage() {
  return (
    <>
      <GracefulLivingHomeCare />
      <ExploreMoreDemos currentHref="/demos/home-care" />
    </>
  );
}
