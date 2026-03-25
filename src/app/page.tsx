import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Problem } from "@/components/Problem";
import { DemoSites } from "@/components/DemoSites";
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
      <Problem />
      <DemoSites />
      <Included />
      <Packages />
      <WhoItsFor />
      <Process />
      <Contact />
    </>
  );
}
