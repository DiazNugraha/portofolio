import { ExperienceItem } from "@/types/common";

export const EXPERIENCES: ExperienceItem[] = [
  {
    title: "PT Applimetis Parama Solusi",
    position: "Full Time - Full Stack Junior Developer",
    period: "March 2022 - Present",
    content: [
      {
        projectName: "Medqlab Version 1 - Lab Information System Application",
        descriptions: [
          "Utilizing Laravel Lumen for the backend, it seamlessly connects with the frontend via REST API and WebSocket for instantaneous communication.",
          "Utilizing Vue.js for the frontend.",
          "Integrate Redis to facilitate seamless communcation with third-party applications.",
        ],
        responsibilities: [
          "Develop new features and maintain old features of the application",
          "Bug fixes",
        ],
        technologies: [
          "Vue Js",
          "Laravel Lumen",
          "Postgresql",
          "MongoDB",
          "Redis",
        ],
      },
      {
        projectName: "Medqlab Version 2 - Lab Information System Application",
        descriptions: [
          "Utilizing Nest.js for the backend, it seamlessly connects with the frontend via REST API and WebSocket for instantaneous communication.",
          "Utilizing Next.js for the frontend, implement best practices by creating components to streamline the development cycle.",
          "Integrate RabbitMQ message queue to facilitate seamless communication with third-party applications.",
          "Implement websocket for real-time communication.",
        ],
        responsibilities: [
          "Develop new features and maintain old features of the application.",
          "Developing the application from the ground up.",
          "Bug fixes.",
        ],
        technologies: [
          "Next Js",
          "Nest Js",
          "Postgresql",
          "MongoDB",
          "RabbitMQ",
        ],
      },
    ],
  },
  {
    title: "PT Sangkuriang International",
    position: "Internship - System Analyst",
    period: "July 2021 - December 2021",
    content: [
      {
        projectName: "Aplikasi AHU (Administrasi Hukum Umum)",
        descriptions: [],
        responsibilities: [
          "Draft a Software Requirements Specification document for the projects.",
          "Review use cases derived from user stories.",
          "Collaborate on the project using Git on Github.",
        ],
        technologies: [
          "Google Docs",
          "Microsoft Office",
          "Git, Github",
          "PHP YII",
          ".Net Core",
        ],
      },
    ],
  },
];

export const experienceCollections: {
  title: string;
  imageUrl?: string;
  subtitle?: string;
  description?: string;
  industryDomain?: string;
  link?: string;
}[] = [
  {
    title: "International Centre for Industrial Transformation (INCIT)",
    subtitle: "Full Stack Developer · Aug 2024 — Jun 2026",
    description:
      "Developed and maintained enterprise web applications, contributing to frontend and backend development accross multiple platform modules.",
    industryDomain: "Enterprise Software · Full-time",
    link: "https://incit.org/",
  },
  {
    title: "PT APPLIMETIS PARAMA SOLUTION",
    subtitle: "Full Stack Developer · Nov 2022 — Mar 2024",
    description:
      "Developed and maintained enterprise web applications, contributing to frontend and backend development across multiple services and third-party integrations.",
    industryDomain: "Healthcare Information Technology · Full-time",
    link: "https://applimetis.id/",
  },
];
