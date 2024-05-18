import { EXPERIENCES } from "@/constants/experience";
import { ExperienceContentItem, ExperienceItem } from "@/types/common";
import { Suspense } from "react";

export default function Experience() {
  const experiences: ExperienceItem[] = EXPERIENCES;

  return (
    <div className="flex flex-col items-center justify-center text-white gap-4">
      <h1 className="text-4xl">Experiences</h1>
      {experiences.map((experience, i) => {
        return (
          <Card
            key={i}
            title={experience.title}
            content={experience.content}
            period={experience.period}
            position={experience.position}
          />
        );
      })}
    </div>
  );
}

function Card({ title, content, period, position }: Readonly<ExperienceItem>) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col rounded-lg p-4 w-[90%] md:w-[50%] gap-2">
        <div className="flex justify-between">
          <div className="flex gap-x-2 flex-col md:flex-row">
            <h1 className="text-md md:text-2xl font-bold">{title}</h1>
            <p className="text-sm bg-slate-500 h-fit p-1 rounded-lg">
              {position}
            </p>
          </div>
          <p className="">{period}</p>
        </div>
        <hr />
        <div className="overflow-clip text-sm flex flex-col gap-y-4">
          {content.map((content, i) => {
            return <ExperienceContent key={i} content={content} />;
          })}
        </div>
      </div>
    </Suspense>
  );
}

function ExperienceContent({
  content,
}: Readonly<{ content: ExperienceContentItem }>) {
  return (
    <div className="flex flex-col gap-3 text-lg">
      <div className="flex flex-col">
        <p>
          <b>Project Name</b> : {content.projectName}
        </p>

        {Array.isArray(content.descriptions) ? (
          <ul className="list-inside">
            {content.descriptions.map((description) => {
              return <li key={description}>{description}</li>;
            })}
          </ul>
        ) : (
          <p>{content.descriptions}</p>
        )}
      </div>

      <div className="flex flex-col">
        <p className="font-bold">Responsibilities :</p>
        <ul className="list-inside">
          {content.responsibilities.map((responsibility) => (
            <li key={responsibility}>{responsibility}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col">
        <p className="font-bold">Technologies :</p>
        <ul className="list-inside">
          {content.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
