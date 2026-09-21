import { PropsWithChildren } from "react";
import { ButtonLink, MotionSection } from "@/components";
import { skillCollections } from "@/constants";

export default function SkillSection() {
  return (
    <MotionSection className="flex flex-col gap-3 w-full">
      <h1 className="text-lg lg:text-xl font-semibold">Skills</h1>
      {skillCollections.map((skill) => {
        if (skill.isAdditional) return;
        return (
          <Wrapper title={skill.name} key={skill.name}>
            {skill.items.map((item) => {
              if (item.isAdditional) return;
              return (
                <ButtonLink
                  name={item.title}
                  key={item.title}
                  url={item.link}
                />
              );
            })}
          </Wrapper>
        );
      })}
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
