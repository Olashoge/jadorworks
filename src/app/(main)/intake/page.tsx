import type { Metadata } from "next";
import { IntakeForm } from "@/components/IntakeForm";

export const metadata: Metadata = {
  title: "Project Intake Form | JadorWorks Web Studio",
  description:
    "Start your project with JadorWorks. Fill out our intake form to share your business details, goals, and branding preferences so we can build the perfect website for you.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function IntakePage() {
  return <IntakeForm />;
}
