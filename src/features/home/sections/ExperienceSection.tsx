import { ExperienceCard } from "@/components/cards";
import { motion } from "framer-motion";

const experiences: {
  title: string;
  imageUrl?: string;
  subtitle?: string;
  description?: string;
  industryDomain?: string;
}[] = [
  {
    title: "International Centre for Industrial Transformation (INCIT)",
    subtitle: "Full Stack Developer · Aug 2024 — Jun 2026",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    industryDomain: "Enterprise Software · Full-time",
  },
  {
    title: "PT APPLIMETIS PARAMA SOLUTION",
    subtitle: "Full Stack Developer · Nov 2022 — Mar 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    industryDomain: "Healthcare Information Technology · Full-time",
  },
];

export default function ExperienceSection() {
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
      <h1 className="text-lg lg:text-xl font-semibold">Work Experience</h1>
      <div className="flex flex-col gap-3">
        {experiences.map((experience, index) => (
          <ExperienceCard {...experience} key={index} />
        ))}
      </div>
    </motion.section>
  );
}
