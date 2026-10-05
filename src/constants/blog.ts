export const blogCollections: {
  title: string;
  imageUrl?: string;
  subtitle?: string;
  description?: string;
  badges?: string[];
  link?: string;
}[] = [
  {
    title: "PDFMake TS",
    subtitle: "22 November 2023",
    description: "A tutorial of PDFMake installation for Typescript.",
    badges: ["Nest JS", "Typescript", "Document", "Tutorial"],
    link: "blog/pdfmake-ts",
  },
  {
    title: "Setup BullMQ Nest JS",
    subtitle: "22 November 2023",
    description: "Tutorial for Setting up Bull Message Queue from Nest JS.",
    badges: ["Nest JS", "Typescript", "Message Queue", "Tutorial"],
    link: "blog/setup-bullmq-nest",
  },
  {
    title: "Node JS Smart Contract",
    subtitle: "20 May 2023",
    description: "My Learning Note of Node JS Smart Contract Implementation.",
    badges: ["Node JS", "Smart Contract", "Note"],
    link: "blog/nodejs-smart-contract",
  },
  {
    title: "React JS Tolgee Integration",
    subtitle: "20 May 2026",
    description:
      "Implementation of Tolgee localization platform with React JS.",
    badges: ["React JS", "Tolgee", "Tutorial"],
    link: "blog/reactjs-tolgee",
  },
];
