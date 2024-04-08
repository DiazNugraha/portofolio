import { HoverEffect } from "../ui/card-hover-effect";
import { LampContainer } from "../ui/lamp-container";

export default function Information() {
  const items: {
    title: string;
    description: string;
    link?: string;
    img?: string;
  }[] = [
    {
      title: "FRONTEND",
      description: "Next Js + React Js + Vue Js",
      img: "test",
    },
    {
      title: "BACKEND",
      description: "Nest Js + Django + Express Js + Gin",
      img: "test",
    },
    {
      title: "DATABASE",
      description: "MySQL + PostgreSQL + MongoDB",
      img: "test",
    },
    {
      title: "PLATFORM",
      description: "Web + Android",
      img: "test",
    },
  ];
  return (
    <LampContainer className="w-full h-full flex flex-col justify-center items-center gap-4 mt-10">
      <h1 className="text-white md:text-3xl">SKILLS</h1>
      <HoverEffect items={items} isContentCentered={true} />
    </LampContainer>
  );
}
