import { CommonItem } from "@/types";

interface ISkillCollection {
  name: string;
  isAdditional?: boolean;
  items: (CommonItem & { isAdditional?: boolean })[];
}

export const skillCollections: ISkillCollection[] = [
  {
    name: "Frontend",
    items: [
      {
        title: "React Js",
        description: "JavaScript library for building user interfaces",
        link: "https://reactjs.org/",
      },
      {
        title: "Next Js",
        description:
          "React framework that enables server-side rendering and static site generation",
        link: "https://nextjs.org/",
      },
      {
        title: "Vue Js",
        description:
          "Progressive JavaScript framework used for building user interfaces",
        link: "https://vuejs.org/",
      },
      {
        title: "Vite",
        description: "Frontend build tool designed to make development quicker",
        link: "https://vite.dev/",
      },
      {
        title: "Tailwind CSS",
        description: "The utility-first CSS Framework",
        link: "https://tailwindcss.com/",
      },
    ],
  },
  {
    name: "Backend",
    items: [
      {
        title: "Nest Js",
        description:
          "Node.js framework using TypeScript and inspired by Angular's architecture",
        link: "https://nestjs.com/",
      },
      {
        title: "Node Js",
        description:
          "Javascript runtime for execute javascript code outside of browser",
        link: "https://nodejs.org/en",
      },
      {
        title: "Flask",
        description: "lightweight and flexible Python web framework",
        link: "https://flask.palletsprojects.com/en/3.0.x/",
        isAdditional: true,
      },
      {
        title: "Fiber",
        description: "Golang Backend Framework inspired by Express.js",
        link: "https://fibergo.com/",
        isAdditional: true,
      },
      {
        title: "Laravel Lumen",
        description: "PHP Backend Framework",
        link: "https://lumen.laravel.com/docs/11.x",
      },
    ],
  },
  {
    name: "Database & Messaging",
    items: [
      {
        title: "PostgreSQL",
        description: "Robust open source relational database management system",
        link: "https://www.postgresql.org/",
      },
      {
        title: "MySQL",
        description: "Open-source relational database management system",
        link: "https://www.mysql.com/",
      },
      {
        title: "MongoDB",
        description: "Document base database for modern application",
        link: "https://www.mongodb.com/",
        isAdditional: true,
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
    ],
  },
  {
    name: "Tools",
    isAdditional: true,
    items: [
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
    ],
  },
  {
    name: "Cloud & Architecture",
    items: [
      {
        title: "AWS S3",
        description: "Containerization platform",
        link: "https://aws.amazon.com/",
      },
      {
        title: "Vite Plugin Federation",
        description: "Version control system",
        link: "https://github.com/originjs/vite-plugin-federation",
      },
    ],
  },
  {
    name: "Other",
    isAdditional: true,
    items: [
      {
        title: "Rasa AI",
        description: "Conversational Chatbot Framework based on NLP",
        link: "https://rasa.com/",
      },
    ],
  },
];
