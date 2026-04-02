import { redirect } from "next/navigation";

// Permanent redirect — intake form moved from /onboarding to /intake.
// This catches bookmarks, cached links, and Calendly confirmation emails.
export default function OnboardingRedirect() {
  redirect("/intake");
}
