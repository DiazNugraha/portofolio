import { twMerge } from "tailwind-merge";

interface CardProps {
  className?: string;
  title: string;
  name: string;
  description: string;
  link: string;
}

export default function Card(props: Readonly<CardProps>) {
  return (
    <div
      className={twMerge(
        "bg-[#363636]/30 hover:bg-[#363636] hover:scale-110 hover:scale-x transform transition duration-y flex flex-col justify-around w-full h-full p-5 cursor-pointer",
        props.className
      )}
    >
      <div className="flex flex-col">
        <span className="text-white text-[8px] md:text-[15px] font-bold">
          {props.title}
        </span>
        <span className="text-white text-[15px] md:text-[36px]">
          {props.name}
        </span>
        <p className="text-[#BBBBBB] text-[8px] md:text-[15px]">
          {props.description}
        </p>
      </div>
      <div className="flex gap-3 mt-2 md:mt-4">
        <a
          href={props.link}
          target="_blank"
          className="text-[#BBBBBB] text-[8px] md:text-[15px] hover:text-blue-400"
        >
          go to link
        </a>
      </div>
    </div>
  );
}
