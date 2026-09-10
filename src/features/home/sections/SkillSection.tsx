import { PropsWithChildren } from "react";
import { ButtonLink, MotionSection } from "@/components";

export default function SkillSection() {
  return (
    <MotionSection className="flex flex-col gap-3 w-full">
      <h1 className="text-lg lg:text-xl font-semibold">Skills</h1>
      <Wrapper title="Frontend">
        <ButtonLink name="React" />
        <ButtonLink name="Next.js" />
        <ButtonLink name="Typescript" />
        <ButtonLink name="Javascript" />
        <ButtonLink name="Vite" />
        <ButtonLink name="Tailwind" />
      </Wrapper>
      <Wrapper title="Backend">
        <ButtonLink name="Nest.js" />
        <ButtonLink name="Node.js" />
        <ButtonLink name="Laravel Lumen" />
        <ButtonLink name="REST APIs" />
        <ButtonLink name="WebSockets" />
      </Wrapper>
      <Wrapper title="Database & Messaging">
        <ButtonLink name="PostgreSQL" />
        <ButtonLink name="Redis" />
        <ButtonLink name="RabbitMQ" />
      </Wrapper>
      <Wrapper title="Cloud & Architecture">
        <ButtonLink name="AWS S3" />
        <ButtonLink name="Vite Plugin Federation" />
      </Wrapper>
    </MotionSection>
  );
}

interface IWrapperProps {
  title: string;
}

function Wrapper({ title, children }: IWrapperProps & PropsWithChildren) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm lg:text-base font-medium">{title}</h3>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-2">
        {children}
      </div>
    </div>
  );
}
