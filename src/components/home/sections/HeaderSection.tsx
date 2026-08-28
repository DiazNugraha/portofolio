import Image from "next/image";
import { Globe } from "lucide-react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Link from "next/link";
import GithubIcon from "@/components/ui/icons/github-icon";
import GmailIcon from "@/components/ui/icons/gmail-icons";
import LinkedinIcon from "@/components/ui/icons/linkedin-icon";
import TwitterIcon from "@/components/ui/icons/twitter-icon";
import { PropsWithChildren } from "react";

export default function HeaderSection() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row lg:justify-between lg:items-center">
        <div className="flex flex-col gap-1 text-white ">
          <span className="text-xl font-bold">Diaz Nugraha</span>
          <span className="text-xs">
            Software Engineer / Full Stack Developer focused on Web and Mobile
            App.
          </span>
          <div className="flex text-xs items-center gap-2">
            <Globe width={20} />
            <Link
              href={"https://maps.app.goo.gl/vANraJaTNSCMxQ376"}
              className="hover:underline"
            >
              Indramayu, West Java, Indonesia
            </Link>
          </div>
          <ContactButtons />
        </div>
        <div className="flex">
          <BackgroundGradient roundedFull>
            <Image
              src={"/assets/profile.png"}
              className="rounded-full"
              width={100}
              height={200}
              alt={"profile"}
            />
          </BackgroundGradient>
        </div>
      </div>
    </div>
  );
}

function ContactButtons() {
  return (
    <div className="flex gap-x-4 justify-start w-full">
      <ButtonWrapper link="https://github.com/DiazNugraha">
        <GithubIcon width={12} />
      </ButtonWrapper>
      <ButtonWrapper link="https://www.linkedin.com/in/diaz-nugraha-820342246/">
        <LinkedinIcon width={12} />
      </ButtonWrapper>
      <ButtonWrapper link="https://twitter.com/NugrahaDiaz_">
        <TwitterIcon width={12} />
      </ButtonWrapper>
      <ButtonWrapper link="mailto:diaznugraha00@gmail.com">
        <GmailIcon width={12} />
      </ButtonWrapper>
    </div>
  );
}

function ButtonWrapper({
  children,
  link,
}: PropsWithChildren & { link: string }) {
  return (
    <a
      href={link}
      className="rounded-full bg-slate-300  h-5 w-5 flex items-center justify-center"
    >
      {children}
    </a>
  );
}
