import { MainLayout, MotionSection, ProjectCard } from "@/components";
import { projectCollections } from "@/constants";

export default function Project() {
  return (
    <MainLayout>
      <MotionSection className="w-full flex flex-col gap-2">
        <h1 className="text-start text-lg lg:text-3xl">Project</h1>
        <p className="text-xs lg:text-sm text-slate-400">My projects.</p>
      </MotionSection>
      <MotionSection className="flex flex-col gap-3">
        {projectCollections.map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </MotionSection>
    </MainLayout>
  );
}
