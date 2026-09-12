import {
  ButtonLink,
  GithubIcon,
  GmailIcon,
  LinkedinIcon,
  MainLayout,
  MotionSection,
  TwitterIcon,
} from "@/components";
import { CommonItem } from "@/types";
import { PropsWithChildren } from "react";

const contactItems: CommonItem[] = [
  {
    title: "Github",
    description: "https://github.com/DiazNugraha",
    link: "https://github.com/DiazNugraha",
    icon: <GithubIcon />,
  },
  {
    title: "LinkedIn",
    description: "https://www.linkedin.com/in/diaz-nugraha-820342246/",
    link: "https://www.linkedin.com/in/diaz-nugraha-820342246/",
    icon: <LinkedinIcon />,
  },
  {
    title: "X",
    description: "https://twitter.com/NugrahaDiaz_",
    link: "https://twitter.com/NugrahaDiaz_",
    icon: <TwitterIcon />,
  },
  {
    title: "Email",
    description: "mailto:diaznugraha00@gmail.com",
    link: "mailto:diaznugraha00@gmail.com",
    icon: <GmailIcon />,
  },
];

export default function Contact() {
  return (
    <MainLayout hideFooter>
      <MotionSection className="w-full flex flex-col gap-2">
        <h1 className="text-start text-lg lg:text-3xl">Contact Me!</h1>
        <p className="text-xs lg:text-sm text-slate-400">
          Here is my contact list and social media.
        </p>
      </MotionSection>
      <MotionSection className="w-full flex flex-col gap-5">
        {contactItems.map((contact) => (
          <ButtonLink
            name={contact.title}
            description={contact.description}
            url={contact.link}
            key={contact.title}
            icon={
              contact.icon ? (
                <ButtonWrapper>{contact.icon as JSX.Element}</ButtonWrapper>
              ) : undefined
            }
          />
        ))}
      </MotionSection>
    </MainLayout>
  );
}

function ButtonWrapper({ children }: PropsWithChildren) {
  return (
    <div className="rounded-full bg-slate-600  h-10 w-10 flex items-center justify-center">
      {children}
    </div>
  );
}
