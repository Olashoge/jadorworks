import type { Metadata } from "next";
import { OnboardingForm } from "@/components/OnboardingForm";

export const metadata: Metadata = {
  title: "Project Intake Form | JadorWorks Web Studio",
  description:
    "Start your project with JadorWorks. Fill out our intake form to share your business details, goals, and branding preferences so we can build the perfect website for you.",
};

export default function OnboardingPage() {
  return <OnboardingForm />;
}
