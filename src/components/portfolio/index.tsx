import { Meteors } from "../ui/meteors";
import Banner from "./banner";
import Experience from "./experience";
import Information from "./information";
import Profile from "./profile";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col relative">
      <div className="absolute w-full h-full overflow-hidden">
        <Meteors number={11} className="" />
      </div>
      <Banner />
      <Profile />
      <Experience />
      <Information />
    </div>
  );
}
