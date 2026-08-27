import { useRouter } from "next/router";

export default function FooterLayout() {
  const route = useRouter();
  return (
    <div className="w-full border-t-[0.5px] border-t-[#6f6f6f] flex flex-col text-[#CCCCCC] gap-6 pt-3">
      <div className="flex justify-center lg:justify-start gap-2">
        <a href="https://github.com/DiazNugraha" target="_blank">
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/diaz-nugraha-820342246/"
          target="_blank"
        >
          Linkedin
        </a>
        <a href="https://twitter.com/NugrahaDiaz_" target="_blank">
          Twitter
        </a>
        <a href={`${route.basePath}/portfolio`} target="_blank">
          Portfolio
        </a>
      </div>
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-baseline justify-center lg:justify-between">
        <span>Built with Next.Js, Tailwind and Vercel</span>
        <span>&copy;2024 All rights reserved.</span>
      </div>
    </div>
  );
}
