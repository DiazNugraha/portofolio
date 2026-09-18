import { MotionSection } from "@/components";
import { ExperienceCard } from "@/components/cards";
import { experienceCollections } from "@/constants";

export default function ExperienceSection() {
  return (
    <MotionSection className="flex flex-col gap-2">
      <h1 className="text-lg lg:text-xl font-semibold">Work Experience</h1>
      <div className="flex flex-col gap-3">
        {experienceCollections.map((experience, index) => (
          <ExperienceCard {...experience} key={index} />
        ))}
      </div>
    </MotionSection>
  );
}
