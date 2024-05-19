import { CommonItem } from "@/types/common";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export const HoverEffect = ({
  items,
  className,
  isContentCentered = false,
  showLink = false,
}: {
  items: CommonItem[];
  className?: string;
  isContentCentered?: boolean;
  showLink?: boolean;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card isContentCentered={isContentCentered} link={item.link}>
            {item.img && (
              <div className="w-[50px] h-[50px] border-[1px] border-white bg-transparent rounded-full"></div>
            )}
            <CardTitle>{item.title}</CardTitle>
            {showLink && item.link && <CardLink link={item.link} />}
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  isContentCentered,
  link,
}: {
  className?: string;
  children: React.ReactNode;
  isContentCentered: boolean;
  link?: string;
}) => {
  const content: JSX.Element = (
    <div
      className={twMerge(
        "p-4",
        isContentCentered && "flex flex-col justify-center items-center"
      )}
    >
      {children}
    </div>
  );
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      {link ? (
        <a href={link} target="_blank" className="relative z-50">
          {content}
        </a>
      ) : (
        <div className="relative z-50">{content}</div>
      )}
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardLink = ({
  className,
  link,
}: {
  className?: string;
  link: string;
}) => {
  return (
    <a
      className={cn("text-zinc-600 font-bold tracking-wide text-sm", className)}
      href={link}
    >
      {link}
    </a>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-5 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
