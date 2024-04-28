import { Meteors } from "../ui/meteors";
import Card from "../ui/card";
import { TextGenerateEffect } from "../ui/text-generate-effect.";

export default function Banner() {
  return (
    <div className="h-screen md:h-screen w-full flex">
      <MainScreen />
    </div>
  );
}

function MainScreen() {
  return (
    <div className="w-full h-[100vh] pl-5 pr-5 pt-5 flex flex-col justify-between z-10 absolute">
      <div className="flex flex-col md:flex-row w-full h-full">
        <div className="flex-1 h-full flex flex-col justify-around md:ml-40">
          <div className="">
            <h1 className="text-[50px] md:text-[100px] text-white font-bold flex flex-col">
              <span>Hello, I'm</span>
              <span className="-mt-3 md:-mt-12">Diaz Nugraha</span>
            </h1>
            <TextGenerateEffect
              words="I'm a a dynamic and results-driven Computer Science graduate from Politeknik Negeri Indramayu. With a deep passion for software engineering, I am constantly seeking new challenges and opportunities to grow in the field."
              className="text-[#CCCCCC] text-[12px] md:text-[20px] w-[80%] text-justify mb-2"
            />
            <TextGenerateEffect
              words="My mission is to collaborate with forward-thinking teams and organizations to tackle complex challenges and deliver solutions that make a difference. I am excited to explore opportunities where I can apply my skills and passion for software engineering to create meaningful impact."
              className="text-[#CCCCCC] text-[12px] md:text-[20px] w-[80%] text-justify"
            />
          </div>

          {/* <div className="mt-3 md:mt-5 flex flex-col gap-2 md:gap-4 text-white text-[12px] md:text-[18px]">
            <a className="" href="#">
              #1 ----------- HOME
            </a>
            <a className="" href="#">
              #2 ----------- EXPERIENCES
            </a>
            <a className="" href="#">
              #3 ----------- SKILLS
            </a>
          </div> */}
        </div>
        <div className="flex-1 h-full flex flex-col gap-y-8 items-center md:items-end justify-center md:mr-40 mt-4 md:mt-0">
          <Card
            title="LinkedIn"
            name="Diaz Nugraha"
            description="Connect with me on LinkedIn to stay updated on my professional journey, explore my skills and experiences, and discover opportunities for collaboration and networking."
            link="https://www.linkedin.com/in/diaz-nugraha-820342246/"
            className="w-[350px] h-[100px] md:w-[586px] md:h-[188px]"
          />
          <Card
            title="Github"
            name="@DiazNugraha"
            description="Discover more about my projects and contributions by visiting my GitHub profile."
            link="https://github.com/DiazNugraha"
            className="w-[350px] h-[100px] md:w-[586px] md:h-[188px]"
          />
          <Card
            title="App"
            name="Save Clips"
            description="App I've developed specifically for efficiently managing and organizing notes."
            link="https://save-clips.vercel.app/"
            className="w-[350px] h-[100px] md:w-[586px] md:h-[188px]"
          />
        </div>
      </div>
    </div>
  );
}
