import { CommonItem } from "@/types/common";
import { useEffect, useState } from "react";
import { HoverEffect } from "../ui/card-hover-effect";
import { Footer } from "../home";

const itemCollections: CommonItem[] = [
  {
    title: "Next Js",
    description:
      "React framework that enables server-side rendering and static site generation",
    link: "https://nextjs.org/",
  },
  {
    title: "React Js",
    description: "JavaScript library for building user interfaces",
    link: "https://reactjs.org/",
  },
  {
    title: "Vue Js",
    description:
      "Progressive JavaScript framework used for building user interfaces",
    link: "https://vuejs.org/",
  },
  {
    title: "Tailwind CSS",
    description: "The utility-first CSS Framework",
    link: "https://tailwindcss.com/",
  },
  {
    title: "Nest Js",
    description:
      "Node.js framework using TypeScript and inspired by Angular's architecture",
    link: "https://vitejs.dev/",
  },
  {
    title: "Flask",
    description: "lightweight and flexible Python web framework",
    link: "https://www.djangoproject.com/",
  },
  {
    title: "Fiber",
    description: "Golang Backend Framework inspired by Express.js",
    link: "https://fibergo.com/",
  },
  {
    title: "Laravel",
    description: "PHP Backend Framework",
    link: "https://laravel.com/",
  },
  {
    title: "MySQL",
    description: "Open-source relational database management system",
    link: "https://www.mysql.com/",
  },
  {
    title: "PostgreSQL",
    description: "Robust open source relational database management system",
    link: "https://www.postgresql.org/",
  },
  {
    title: "MongoDB",
    description: "Document base database for modern application",
    link: "https://www.mongodb.com/",
  },
  {
    title: "Redis",
    description: "In-memory data structure store",
    link: "https://redis.io/",
  },
  {
    title: "RabbitMQ",
    description: "Message broker for message queueing",
    link: "https://www.rabbitmq.com/",
  },
  {
    title: "Docker",
    description: "Containerization platform",
    link: "https://www.docker.com/",
  },
  {
    title: "Git",
    description: "Version control system",
    link: "https://git-scm.com/",
  },
];

export default function TechnologiesPage() {
  const [items, setItems] = useState<CommonItem[]>([]);

  useEffect(() => {
    setItems(itemCollections);
  }, []);
  return (
    <div className="text-white w-full h-full flex justify-center">
      <div className="lg:w-[45%] h-full p-10">
        <h1 className="text-[30px] lg:text-[60px]">
          Technologies I mostly use as <br /> A Full Stack Developer
        </h1>
        <HoverEffect className="lg:grid-cols-2" showLink items={items} />

        <Footer />
      </div>
    </div>
  );
}
