import type { Metadata } from "next";
import { CornerstoneRenovations } from "@/components/demo/CornerstoneRenovations";
import { ExploreMoreDemos } from "@/components/demo/ExploreMoreDemos";

export const metadata: Metadata = {
  title: "Remodeling Contractor Website Demo | JadorWorks Web Studio",
  description:
    "A professional remodeling and home improvement website demo built by JadorWorks Web Studio. See how renovation contractors can showcase projects and win more clients online.",
};

export default function RemodelingDemoPage() {
  return (
    <>
      <CornerstoneRenovations />
      <ExploreMoreDemos currentHref="/demos/remodeling" />
    </>
  );
}
