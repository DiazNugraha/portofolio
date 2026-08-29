import { ExperienceCard } from "@/components/cards";

const experiences: {
  title: string;
  imageUrl?: string;
  subtitle?: string;
  description?: string;
  badges?: string[];
}[] = [
  {
    title: "PT APPLIMETIS PARAMA SOLUTION",
    subtitle: "Full Stack Developer · Aug 2024 — Jun 2026",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    badges: ["Next.js", "Nest.js", "PostgreSQL"],
  },
  {
    title: "PT APPLIMETIS PARAMA SOLUTION",
    subtitle: "Full Stack Developer · Aug 2024 — Jun 2026",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    badges: ["Next.js", "Nest.js", "PostgreSQL"],
  },
];

export default function ExperienceSection() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl">Work Experience</h1>
      <div className="flex flex-col gap-3">
        {experiences.map((experience, index) => (
          <ExperienceCard {...experience} key={index} />
        ))}
      </div>
    </div>
  );
}
