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
];
