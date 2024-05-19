import Image from "next/image";
import { BackgroundGradient } from "../ui/background-gradient";
import CardShimmer from "../ui/card-shimmer";
import { HoverEffect } from "../ui/card-hover-effect";
import GithubIcon from "../ui/icons/github-icon";
import LinkedinIcon from "../ui/icons/linkedin-icon";
import TwitterIcon from "../ui/icons/twitter-icon";
import { Meteors } from "../ui/meteors";
import { useRouter } from "next/router";

export default function HomePage() {
  const items: {
    title: string;
    description: string;
    link?: string;
    img?: string;
  }[] = [
    {
      title: "Apps",
      description: "A collection of service and apps I use for day to day",
      link: "/apps",
      img: "",
    },
    {
      title: "Cheatsheets",
      description: "Note books and cheat sheets for different technologies",
      link: "/apps",
      img: "",
    },
    {
      title: "Save clips",
      description: "App I made for saving notes",
      link: "/apps",
      img: "",
    },
    {
      title: "Projects",
      description: "My projects and projects I am working on",
      link: "/apps",
      img: "",
    },
    {
      title: "Algorithm",
      description: "My notes on algorithms and data structures",
      link: "/apps",
      img: "",
    },
    {
      title: "Wiki",
      description: "A collection of online resources and notes",
      link: "/apps",
      img: "",
    },
  ];

  return (
    <div className="w-full h-full flex justify-center relative">
      <div className="absolute w-full h-full overflow-hidden">
        <Meteors number={11} className="" />
      </div>
      <div className="w-[45%] h-[100vh]">
        <div className="flex p-10 text-white flex-col items-center gap-y-9">
          <div className="flex flex-col gap-6 w-full justify-start">
            <div className="flex gap-x-3">
              <BackgroundGradient roundedFull>
                <Image
                  src={"/assets/profile.png"}
                  className="rounded-full"
                  width={100}
                  height={200}
                  alt={"profile"}
                />
              </BackgroundGradient>
              <div className="flex flex-col justify-center">
                <span className="text-3xl">Diaz Nugraha</span>
                <span className="text-lg">Software Engineer</span>
              </div>
            </div>
          </div>

          <div className="bg-transparent border-[1px] w-full p-7 rounded-md text-justify">
            Hi there 👋 thanks for visiting, I'm a Full Stack Software Developer
            and I also share my knowledge about programming mostly about web
            development and the programming language I use mostly Typescript,
            Python and Golang.
          </div>

          <div className="flex gap-x-4 justify-start w-full">
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
          </div>

          <HoverEffect
            className="lg:grid-cols-2"
            items={items}
            isContentCentered={true}
          />

          <Footer />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  const route = useRouter();
  return (
    <div className="w-full border-t-[0.5px] border-t-[#6f6f6f] flex flex-col text-[#CCCCCC] gap-6 pt-3">
      <div className="flex gap-2">
        <a href="https://github.com/DiazNugraha" target="_blank">
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/diaz-nugraha-820342246/"
          target="_blank"
        >
          Linkedin
        </a>
        <a href="https://twitter.com/NugrahaDiaz_" target="_blank">
          Twitter
        </a>
        <a href={`${route.basePath}/portfolio`} target="_blank">
          Portfolio
        </a>
      </div>
      <div className="w-full flex justify-between">
        <span>Built with Next.Js, Tailwind and Vercel</span>
        <span>&copy;2024 All rights reserved.</span>
      </div>
    </div>
  );
}
