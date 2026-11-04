import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { SelectedWorkSection } from "@/components/sections/selected-work";
import { SkillsSection } from "@/components/sections/skills";
import { StudiesSection } from "@/components/sections/studies";
import { PersonStructuredData } from "@/components/site/structured-data";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <PersonStructuredData />
      <Hero />
      <AboutSection />
      <SelectedWorkSection />
      <ExperienceSection />
      <SkillsSection />
      <StudiesSection />
      <ContactSection />
    </>
  );
}
