import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { DemoSites } from "@/components/DemoSites";
import { Included } from "@/components/Included";
import { WhoItsFor } from "@/components/WhoItsFor";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <DemoSites />
      <Included />
      <WhoItsFor />
      <Process />
      <Contact />
    </>
  );
}
