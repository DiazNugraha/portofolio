import { MainLayout } from "@/components";
import {
  AboutSection,
  ExperienceSection,
  HeaderSection,
  ProjectSection,
  SkillSection,
} from "./sections";

export default function HomePage() {
  return (
    <MainLayout>
      <HeaderSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <SkillSection />
    </MainLayout>
  );
}
