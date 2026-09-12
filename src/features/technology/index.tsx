import { ButtonLink, MainLayout, MotionSection } from "@/components";
import { CommonItem } from "@/types/common";
import { PropsWithChildren } from "react";

const frontendCollections: CommonItem[] = [
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
];

const backendCollections: CommonItem[] = [
  {
    title: "Nest Js",
    description:
      "Node.js framework using TypeScript and inspired by Angular's architecture",
    link: "https://nestjs.com/",
  },
  {
    title: "Flask",
    description: "lightweight and flexible Python web framework",
    link: "https://flask.palletsprojects.com/en/3.0.x/",
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
];

const databaseCollections: CommonItem[] = [
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
];

const toolCollections: CommonItem[] = [
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

const otherCollections: CommonItem[] = [
  {
    title: "Rasa AI",
    description: "Conversational Chatbot Framework based on NLP",
    link: "https://rasa.com/",
  },
];

export default function Technology() {
  return (
    <MainLayout>
      <MotionSection className="w-full flex flex-col gap-2">
        <h1 className="text-start text-lg lg:text-3xl">Technologies</h1>
        <p className="text-xs lg:text-sm text-slate-400">
          These are the technologies I usually use or at least have some
          experience with as a Full Stack Web Developer.
        </p>
      </MotionSection>

      <MotionSection className="w-full flex flex-col gap-5">
        <Wrapper title="Frontend">
          {frontendCollections.map((collection) => (
            <ButtonLink
              name={collection.title}
              description={collection.description}
              key={collection.title}
              url={collection.link}
            />
          ))}
        </Wrapper>
        <Wrapper title="Backend">
          {backendCollections.map((collection) => (
            <ButtonLink
              name={collection.title}
              description={collection.description}
              key={collection.title}
              url={collection.link}
            />
          ))}
        </Wrapper>
        <Wrapper title="Databasse & Messaging">
          {databaseCollections.map((collection) => (
            <ButtonLink
              name={collection.title}
              description={collection.description}
              key={collection.title}
              url={collection.link}
            />
          ))}
        </Wrapper>
        <Wrapper title="Tools">
          {toolCollections.map((collection) => (
            <ButtonLink
              name={collection.title}
              description={collection.description}
              key={collection.title}
              url={collection.link}
            />
          ))}
        </Wrapper>
        <Wrapper title="Other Framework">
          {otherCollections.map((collection) => (
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
