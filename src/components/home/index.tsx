import { MainLayout } from "../layout";
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
