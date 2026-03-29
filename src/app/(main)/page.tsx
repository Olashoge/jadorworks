import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { AboutSnippet } from "@/components/AboutSnippet";
import { Problem } from "@/components/Problem";
import { DemoSites } from "@/components/DemoSites";
import { ServicesPathway } from "@/components/ServicesPathway";
import { Included } from "@/components/Included";
import { Packages } from "@/components/Packages";
import { WhoItsFor } from "@/components/WhoItsFor";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <AboutSnippet />
      <Problem />
      <DemoSites />
      <ServicesPathway />
      <Included />
      <Packages />
      <WhoItsFor />
      <Process />
      <Contact />
    </>
  );
}
