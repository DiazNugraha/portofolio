import { ButtonLink, MainLayout, MotionSection } from "@/components";
import { CommonItem } from "@/types/common";
import { PropsWithChildren } from "react";

const osCollections: CommonItem[] = [
  {
    title: "Arch Linux",
    description: "Linux distribution I use as my main OS",
    link: "https://www.archlinux.org/",
  },
  {
    title: "Windows",
    description:
      "I use windows as my secondary OS. Mostly only used for gaming.",
    link: "https://www.microsoft.com/en-us/windows",
  },
  {
    title: "I3 Window Manager",
    description: "popular tiling window manager that I use for Arch Linux",
    link: "https://i3wm.org/",
  },
];

const editorCollections: CommonItem[] = [
  {
    title: "Visual Studio Code",
    description: "Open Source text editor provided by microsoft",
    link: "https://github.com/microsoft/vscode",
  },
  {
    title: "LazyVim",
    description: "NeoVim based text editor with pre-configured features",
    link: "https://www.lazyvim.org/",
  },
];

const gitCollections: CommonItem[] = [
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
    title: "Azure DevOps",
    description: "Code hosting platform",
    link: "https://azure.microsoft.com/en-us/products/devops",
  },
];

const configCollections: CommonItem[] = [
  {
    title: "LazyVim Config",
    description: "My usual lazyvim config",
    link: "https://github.com/DiazNugraha/nvim-config",
  },
  {
    title: "I3 Status Rust",
    description: "I3 status bar config",
    link: "https://github.com/DiazNugraha/i3status-rust-config",
  },
  {
    title: "I3 Config",
    description: "Latest I3 config I use",
    link: "https://github.com/DiazNugraha/i3-config",
  },
];

export default function Tool() {
  return (
    <MainLayout>
      <MotionSection className="w-full flex flex-col gap-2">
        <h1 className="text-start text-lg lg:text-3xl">Software</h1>
        <p className="text-xs lg:text-sm text-slate-400">
          These are the software I usually use to support my casual and working
          activities.
        </p>
      </MotionSection>

      <MotionSection className="w-full flex flex-col gap-5">
        <Wrapper title="Config Collections">
          {configCollections.map((collection) => (
            <ButtonLink
              name={collection.title}
              description={collection.description}
              key={collection.title}
              url={collection.link}
            />
          ))}
        </Wrapper>
        <Wrapper title="Operating System">
          {osCollections.map((collection) => (
            <ButtonLink
              name={collection.title}
              description={collection.description}
              key={collection.title}
              url={collection.link}
            />
          ))}
        </Wrapper>
        <Wrapper title="Code Editor">
          {editorCollections.map((collection) => (
            <ButtonLink
              name={collection.title}
              description={collection.description}
              key={collection.title}
              url={collection.link}
            />
          ))}
        </Wrapper>
        <Wrapper title="Git Platforms">
          {gitCollections.map((collection) => (
            <ButtonLink
              name={collection.title}
              description={collection.description}
              key={collection.title}
              url={collection.link}
            />
          ))}
        </Wrapper>
      </MotionSection>
    </MainLayout>
  );
}

interface IWrapperProps {
  title: string;
}

function Wrapper({ title, children }: IWrapperProps & PropsWithChildren) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm lg:text-base font-medium">{title}</h3>
      <div className="grid grid-cols-2 gap-2">{children}</div>
    </div>
  );
}
