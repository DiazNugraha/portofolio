import { MainLayout } from "@/components";
import {
  AboutSection,
  BlogSection,
  ExperienceSection,
  HeaderSection,
  ProjectSection,
  SkillSection,
} from "./sections";

export default function Home() {
  return (
    <MainLayout>
      <HeaderSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <SkillSection />
      <BlogSection />
    </MainLayout>
  );
}
