import { CommonItem, IMenuNavigation } from "@/types/common";
import {
  CpuIcon,
  HomeIcon,
  KeyboardIcon,
  NotebookPenIcon,
  SquareKanbanIcon,
} from "lucide-react";

export const menuNavigations: IMenuNavigation[] = [
  {
    icon: HomeIcon,
    url: "/",
    label: "Home",
  },
  {
    icon: SquareKanbanIcon,
    url: "/projects",
    label: "Projects",
  },
  {
    icon: CpuIcon,
    url: "/technology",
    label: "Tech Stack",
  },
  {
    icon: KeyboardIcon,
    url: "/tool",
    label: "Toolstack",
  },
  {
    icon: NotebookPenIcon,
    url: "/blog",
    label: "Blog",
  },
];

export const menuNavigations2: CommonItem[] = [
  {
    title: "Apps",
    description: "A collection of service and apps I use for day to day",
    link: "/apps",
  },
  {
    title: "Technologies",
    description: "List of technologies I use",
    link: "/technologies",
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
    link: "/portfolio",
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
