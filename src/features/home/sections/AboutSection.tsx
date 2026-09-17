import { MotionSection } from "@/components";

export default function AboutSection() {
  return (
    <MotionSection className="flex flex-col gap-2">
      <div className="bg-transparent w-full rounded-xl flex flex-col gap-2">
        <p className="text-justify text-xs lg:text-sm">
          Hi there 👋 thanks for visiting, I&lsquo;m a Full Stack Software
          Developer and I also share my knowledge about programming mostly about
          web development and the programming language I use mostly Typescript,
          Python and Golang.
        </p>
      </div>
    </MotionSection>
  );
}
