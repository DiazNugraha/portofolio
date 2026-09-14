import { motion } from "framer-motion";
import React, { PropsWithChildren, ReactElement } from "react";
import { MotionSection } from "..";
import { contactCollections } from "@/constants";

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
      {contactCollections.map((contact) => {
        return (
          <ButtonWrapper key={contact.title} link={contact.link}>
            {contact.icon as ReactElement}
          </ButtonWrapper>
        );
      })}
    </div>
  );
}

function ButtonWrapper({
  children,
  link,
}: PropsWithChildren & { link?: string }) {
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
