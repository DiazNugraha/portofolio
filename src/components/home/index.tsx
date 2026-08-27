import { FooterLayout } from "../layout";
import { Meteors } from "../ui/meteors";
import { AboutSection, HeaderSection, NavigationSection } from "./sections";

export default function HomePage() {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="absolute w-full h-full overflow-hidden">
        <Meteors number={11} className="" />
      </div>
      <div className="lg:w-[45%] h-[100vh]">
        <div className="flex p-10 text-white flex-col items-center gap-y-9">
          <HeaderSection />
          <AboutSection />
          <NavigationSection />
          <FooterLayout />
        </div>
      </div>
    </div>
  );
}
