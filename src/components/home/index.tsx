import { FooterLayout, Sidebar } from "../layout";
import { Meteors } from "../ui/meteors";
import {
  AboutSection,
  ExperienceSection,
  HeaderSection,
  NavigationSection,
  ProjectSection,
  SkillSection,
} from "./sections";

export default function HomePage() {
  return (
    <div className="w-full h-full flex justify-center relative">
      {/* <div className="absolute w-full h-full overflow-hidden"> */}
      {/*   <Meteors number={11} className="" /> */}
      {/* </div> */}
      <div className="lg:w-[30%] h-full">
        <div className="flex px-5 py-36 text-white flex-col items-center gap-y-16">
          <HeaderSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectSection />
          <SkillSection />
          {/* <NavigationSection /> */}
          <FooterLayout />
        </div>
      </div>
      <Sidebar />
    </div>
  );
}
