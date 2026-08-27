import { HoverEffect } from "@/components/ui/card-hover-effect";
import CardShimmer from "@/components/ui/card-shimmer";
import GithubIcon from "@/components/ui/icons/github-icon";
import GmailIcon from "@/components/ui/icons/gmail-icons";
import LinkedinIcon from "@/components/ui/icons/linkedin-icon";
import TwitterIcon from "@/components/ui/icons/twitter-icon";
import { MenuNavigations } from "@/constants";
import { Fragment } from "react";

export default function NavigationSection() {
  return (
    <Fragment>
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

      <HoverEffect className="lg:grid-cols-2" items={MenuNavigations} />
    </Fragment>
  );
}
