import { EXPERIENCES } from "@/constants/experience";
import { ExperienceContentItem, ExperienceItem } from "@/types/common";

export default function Experience() {
  const experiences: ExperienceItem[] = EXPERIENCES;

  return (
    <div className="flex flex-col text-white">
      <h1 className="text-2xl">Work Experiences</h1>
      <div className="flex flex-col gap-3">
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
    </div>
  );
}

function Card({ title, content, period, position }: Readonly<ExperienceItem>) {
  return (
    <div className="flex flex-col rounded-lg gap-2">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-sm md:text-lg font-bold">{title}</h1>
          <p className="text-xs bg-slate-500 h-fit w-fit rounded-lg">
            {position}
          </p>
        </div>
        <p className="">{period}</p>
      </div>
      <hr />
      <div className="overflow-clip text-xs flex flex-col gap-y-4">
        {content.map((content, i) => {
          return <ExperienceContent key={i} content={content} />;
        })}
      </div>
    </div>
  );
}

function ExperienceContent({
  content,
}: Readonly<{ content: ExperienceContentItem }>) {
  return (
    <div className="flex flex-col gap-3 text-sm">
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
