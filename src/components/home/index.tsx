import Image from "next/image";
import { BackgroundGradient } from "../ui/background-gradient";
import CardShimmer from "../ui/card-shimmer";
import { HoverEffect } from "../ui/card-hover-effect";
import GithubIcon from "../ui/icons/github-icon";
import LinkedinIcon from "../ui/icons/linkedin-icon";
import TwitterIcon from "../ui/icons/twitter-icon";
import { Meteors } from "../ui/meteors";
import { useRouter } from "next/router";
import { CommonItem } from "@/types/common";
import GmailIcon from "../ui/icons/gmail-icons";

export default function HomePage() {
  const route = useRouter();
  const items: CommonItem[] = [
    {
      title: "Apps",
      description: "A collection of service and apps I use for day to day",
      link: route.basePath + "/apps",
    },
    {
      title: "Technologies",
      description: "List of technologies I use",
      link: route.basePath + "/technologies",
    },
    {
      title: "Cheatsheets",
      description: "Note books and cheat sheets for different technologies",
      link: "/#",
    },
    {
      title: "Algorithm",
      description: "My notes on algorithms and data structures",
      link: "/#",
    },
    {
      title: "Portfolio",
      description: "My portfolio",
      link: route.basePath + "/portfolio",
    },
    {
      title: "Save clips",
      description: "App I made for saving notes",
      link: "https://save-clips.vercel.app/",
    },
    {
      title: "Markdown to pages Converter",
      description: "App I made for converting markdown to svelte pages",
      link: "https://github.com/DiazNugraha/markdown-to-pages-converter-fe",
    },
  ];

  return (
    <div className="w-full h-full flex justify-center">
      <div className="absolute w-full h-full overflow-hidden">
        <Meteors number={11} className="" />
      </div>
      <div className="lg:w-[45%] h-[100vh]">
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

          <div className="bg-transparent border-[1px] border-slate-800 w-full p-7 rounded-md">
            <p className="text-justify">
              Hi there 👋 thanks for visiting, I&lsquo;m a Full Stack Software
              Developer and I also share my knowledge about programming mostly
              about web development and the programming language I use mostly
              Typescript, Python and Golang.
            </p>
          </div>

          <div className="flex gap-x-4 justify-start w-full">
            <CardShimmer className="p-4 md:p-6 z-10">
              <a
                href="https://github.com/DiazNugraha"
                className="rounded-full bg-slate-300 p-0"
              >
                <GithubIcon className="" />
              </a>
            </CardShimmer>
            <CardShimmer className="p-4 md:p-6 z-10">
              <a
                href="https://www.linkedin.com/in/diaz-nugraha-820342246/"
                className="rounded-full bg-slate-300 p-0"
              >
                <LinkedinIcon className="" />
              </a>
            </CardShimmer>
            <CardShimmer className="p-4 md:p-6 z-10">
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

          <HoverEffect className="lg:grid-cols-2" items={items} />

          <Footer />
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  const route = useRouter();
  return (
    <div className="w-full border-t-[0.5px] border-t-[#6f6f6f] flex flex-col text-[#CCCCCC] gap-6 pt-3">
      <div className="flex justify-center lg:justify-start gap-2">
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
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-baseline justify-center lg:justify-between">
        <span>Built with Next.Js, Tailwind and Vercel</span>
        <span>&copy;2024 All rights reserved.</span>
      </div>
    </div>
  );
}
