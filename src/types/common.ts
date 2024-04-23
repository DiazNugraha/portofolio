export interface ExperienceItem {
  title: string;
  period: string;
  content: ExperienceContentItem[];
  position: string;
}

export interface ExperienceContentItem {
  projectName: string;
  descriptions: string[] | string;
  responsibilities: string[];
  technologies: string[];
}
