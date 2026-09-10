import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { GithubIcon, GmailIcon, LinkedinIcon, TwitterIcon } from "../ui";
import { MotionSection } from "..";

export default function Footer() {
  return (
    <MotionSection className="w-full flex flex-col gap-4">
      <div className="w-full flex gap-4 justify-center items-center">
        <div className="w-full bg-slate-600 h-[1px]"></div>
        <ContactButtons />
        <div className="w-full bg-slate-600 h-[1px]"></div>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <span>Thanks for visiting.</span>
        <span className="text-slate-600">Next.js · Tailwind CSS · Vercel</span>
      </div>
    </MotionSection>
  );
}

function ContactButtons() {
  return (
    <div className="flex gap-x-4">
      <ButtonWrapper link="https://github.com/DiazNugraha">
        <GithubIcon width={20} />
      </ButtonWrapper>
      <ButtonWrapper link="https://www.linkedin.com/in/diaz-nugraha-820342246/">
        <LinkedinIcon width={20} />
      </ButtonWrapper>
      <ButtonWrapper link="https://twitter.com/NugrahaDiaz_">
        <TwitterIcon width={20} />
      </ButtonWrapper>
      <ButtonWrapper link="mailto:diaznugraha00@gmail.com">
        <GmailIcon width={20} />
      </ButtonWrapper>
    </div>
  );
}

function ButtonWrapper({
  children,
  link,
}: PropsWithChildren & { link: string }) {
  return (
    <motion.a
      whileHover={{
        scale: 1.5,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      href={link}
      target="_blank"
      className="rounded-full bg-slate-600  h-10 w-10 flex items-center justify-center"
    >
      {children}
    </motion.a>
  );
}
