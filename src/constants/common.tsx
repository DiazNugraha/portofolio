import { CommonItem } from "@/types";
import LinkedinIcon from "@/components/ui/icons/linkedin-icon";
import GithubIcon from "@/components/ui/icons/github-icon";
import XIcon from "@/components/ui/icons/x-icon";
import GmailIcon from "@/components/ui/icons/gmail-icons";

export const contactCollections: CommonItem[] = [
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
    icon: <XIcon />,
  },
  {
    title: "Email",
    description: "mailto:diaznugraha00@gmail.com",
    link: "mailto:diaznugraha00@gmail.com",
    icon: <GmailIcon />,
  },
];
