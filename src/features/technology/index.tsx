import { ButtonLink, MainLayout, MotionSection } from "@/components";
import { skillCollections } from "@/constants";
import { PropsWithChildren } from "react";

export default function Technology() {
  return (
    <MainLayout>
      <MotionSection className="w-full flex flex-col gap-2">
        <h1 className="text-start text-lg lg:text-3xl">Technologies</h1>
        <p className="text-xs lg:text-sm text-slate-400">
          These are the technologies I usually use or at least have some
          experience with as a Full Stack Web Developer.
        </p>
      </MotionSection>

      <MotionSection className="w-full flex flex-col gap-5">
        {skillCollections.map((skill) => {
          return (
            <Wrapper title={skill.name} key={skill.name}>
              {skill.items.map((item) => {
                return (
                  <ButtonLink
                    name={item.title}
                    description={item.description}
                    key={item.title}
                    url={item.link}
                  />
                );
              })}
            </Wrapper>
          );
        })}
      </MotionSection>
    </MainLayout>
  );
}

interface IWrapperProps {
  title: string;
}

function Wrapper({ title, children }: IWrapperProps & PropsWithChildren) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm lg:text-base font-medium">{title}</h3>
      <div className="grid grid-cols-2 gap-2">{children}</div>
    </div>
  );
}
