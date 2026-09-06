import { ProjectCard } from "@/components/cards";
import { motion } from "framer-motion";

const selectedProjects: {
  title: string;
  imageUrl?: string;
  subtitle?: string;
  description?: string;
  badges?: string[];
}[] = [
  {
    title: "Readiness Index",
    subtitle: "Professional · Full Stack @ INCIT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    badges: ["Next.js", "Nest.js", "PostgreSQL"],
  },
  {
    title: "Prioritise+ Marketplace",
    subtitle: "Professional · Full Stack @ INCIT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    badges: ["Next.js", "Nest.js", "PostgreSQL"],
  },
  {
    title: "Medqlab",
    subtitle: "Professional · Full Stack @ PT. Applimetis Parama Solusi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    badges: ["Next.js", "Nest.js", "PostgreSQL"],
  },
];

export default function ProjectSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex flex-col gap-2"
    >
      <h1 className="text-lg lg:text-xl font-semibold">Selected Projects</h1>
      <div className="flex flex-col gap-3">
        {selectedProjects.map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </div>
    </motion.section>
  );
}
