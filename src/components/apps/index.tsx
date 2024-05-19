import { HoverEffect } from "../ui/card-hover-effect";
import { CommonItem } from "@/types/common";
import { Footer } from "../home";

export default function AppsPage() {
  const items: CommonItem[] = [
    {
      title: "Arch Linux",
      description: "Linux distribution I use as my main OS",
      link: "https://www.archlinux.org/",
    },

    {
      title: "Visual Studio Code",
      description: "Open Source text editor provided by microsoft",
      link: "https://github.com/microsoft/vscode",
    },
    {
      title: "NeoVim",
      description: "Vim-fork focused on extensibility and usability",
      link: "https://neovim.io/",
    },
    {
      title: "Figma",
      description: "Web base graphics design for UI, UX and prototyping",
      link: "https://www.figma.com/",
    },
    {
      title: "Github",
      description: "Code hosting platform",
      link: "https://github.com/",
    },
    {
      title: "Gitlab",
      description: "Code hosting platform",
      link: "https://gitlab.com/",
    },
    {
      title: "Firefox",
      description: "Web browser",
      link: "https://www.mozilla.org/en-US/firefox/new/",
    },
    {
      title: "Google Chrome",
      description: "Powerfull web browser provided by Chromium",
      link: "https://www.google.com/chrome/",
    },
    {
      title: "Postman",
      description: "API testing tool",
      link: "https://www.postman.com/",
    },
    {
      title: "MongoDB Compass",
      description: "MongoDB UI",
      link: "https://www.mongodb.com/products/compass",
    },
    {
      title: "DBeaver",
      description: "Database management tool",
      link: "https://dbeaver.io/",
    },
    {
      title: "Notion",
      description:
        "The All-in-one workkspace for your notes, tasks, and databases",
      link: "https://www.notion.so/",
    },
    {
      title: "Trello",
      description: "Task management tool",
      link: "https://trello.com/",
    },
  ];

  return (
    <div className="text-white w-full h-full flex justify-center">
      <div className="w-[45%] h-full p-10">
        <h1 className="text-[70px]">
          Software I use as <br /> A Full Stack Developer
        </h1>
        <HoverEffect className="lg:grid-cols-2" showLink items={items} />

        <Footer />
      </div>
    </div>
  );
}
