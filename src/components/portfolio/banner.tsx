import Card from "../ui/card";
import { TextGenerateEffect } from "../ui/text-generate-effect.";
import CardShimmer from "../ui/card-shimmer";
import GithubIcon from "../ui/icons/github-icon";
import LinkedinIcon from "../ui/icons/linkedin-icon";
import TwitterIcon from "../ui/icons/twitter-icon";
import GmailIcon from "../ui/icons/gmail-icons";

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
              <span>Hello, I&lsquo;m</span>
              <span className="-mt-3 md:-mt-12">Diaz Nugraha</span>
            </h1>
            <TextGenerateEffect
              words="I'm a a dynamic and results-driven Computer Science graduate from Politeknik Negeri Indramayu. With a deep passion for software engineering, I am constantly seeking new challenges and opportunities to grow in the field."
              className="text-[#CCCCCC] text-[12px] md:text-[20px] w-[80%] text-justify mb-2"
            />
            <div className="flex gap-x-4">
              <CardShimmer className="p-4 md:p-6">
                <a
                  href="https://github.com/DiazNugraha"
                  className="rounded-full bg-slate-300 p-0"
                >
                  <GithubIcon className="" />
                </a>
              </CardShimmer>
              <CardShimmer className="p-4 md:p-6">
                <a
                  href="https://www.linkedin.com/in/diaz-nugraha-820342246/"
                  className="rounded-full bg-slate-300 p-0"
                >
                  <LinkedinIcon className="" />
                </a>
              </CardShimmer>
              <CardShimmer className="p-4 md:p-6">
                <a
                  href="https://twitter.com/NugrahaDiaz_"
                  className="rounded-full bg-slate-300 p-0"
                >
                  <TwitterIcon className="" />
                </a>
              </CardShimmer>
              <CardShimmer className="p-4 md:p-6 z-10">
                <a
                  href="mailto:diaznugraha00@gmail.com"
                  className="rounded-full bg-slate-300 p-1"
                >
                  <GmailIcon className="" />
                </a>
              </CardShimmer>
            </div>
          </div>
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
