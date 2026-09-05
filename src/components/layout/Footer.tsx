import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { GithubIcon, GmailIcon, LinkedinIcon, TwitterIcon } from "../ui";

export default function Footer() {
  const route = useRouter();
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full border-t-[0.5px] border-t-[#6f6f6f] flex flex-col text-[#CCCCCC] gap-6 pt-3"
    >
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
    </motion.footer>
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
      className="rounded-full bg-slate-300  h-5 w-5 flex items-center justify-center"
    >
      {children}
    </motion.a>
  );
}
