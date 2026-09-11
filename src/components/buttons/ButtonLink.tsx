import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const hoverVariants = {
  rest: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: -6,
    scale: 1.01,
  },
};

const buttonVariants = {
  rest: {
    opacity: 0,
    x: -20,
  },
  hover: {
    opacity: 1,
    x: 0,
    backgroundColor: "#1E293B",
    color: "white",
    borderRadius: "50%",
  },
};

interface IButtonLinkProps {
  name: string;
  imageUrl?: string;
  url?: string;
  description?: string;
}

const MotionLink = motion(Link);

export default function ButtonLink({
  name,
  imageUrl,
  url,
  description,
}: IButtonLinkProps) {
  return (
    <MotionLink
      href={url ?? "#"}
      initial="hidden"
      whileInView="visible"
      variants={cardVariants}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <motion.div
        variants={hoverVariants}
        initial="rest"
        whileHover="hover"
        whileTap={{ scale: 0.98 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="flex-1 cursor-pointer border-[1px] border-slate-800 hover:border-slate-600 flex py-2 px-3 justify-between items-center rounded-xl"
      >
        <div className="flex flex-col gap-2">
          <h3 className="text-[10px] lg:text-xs font-medium">{name}</h3>
          {description && (
            <p className="text-[8px] lg:text-[10px] text-slate-500">
              {description}
            </p>
          )}
        </div>

        <motion.button
          variants={buttonVariants}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          className="flex items-center justify-center rounded-full p-2 h-7 w-7"
        >
          <ChevronRight width={16} />
        </motion.button>
      </motion.div>
    </MotionLink>
  );
}
