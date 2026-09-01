import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  imageUrl?: string;
  subtitle?: string;
  description?: string;
  link?: string;
  industryDomain?: string;
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    y: -6,
    scale: 1.01,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const buttonVariants = {
  initial: {
    opacity: 0,
    x: -20,
    width: "24px",
    height: "24px",
  },
  hover: {
    opacity: 1,
    x: 0,
    backgroundColor: "#1E293B",
    color: "white",
    borderRadius: "50%",
    width: "24px",
    height: "24px",
  },
};

export default function ExperienceCard({
  title,
  imageUrl,
  subtitle,
  description,
  link,
  industryDomain,
}: ExperienceCardProps) {
  return (
    <motion.a
      href={link ?? "#"}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="w-full border border-slate-800 hover:border-slate-600 hover:cursor-pointer rounded-3xl p-5 text-white flex flex-col gap-5"
    >
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-sm lg:text-base">{title}</span>
          <span className="font-medium text-xs lg:text-sm">{subtitle}</span>
        </div>

        <motion.button
          variants={buttonVariants}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          className="w-fit flex items-center justify-center rounded-full p-2"
        >
          <ChevronRight width={16} />
        </motion.button>
      </div>

      <p className="text-xs text-justify text-slate-500">{description}</p>

      <h3 className="text-sm text-slate-500">{industryDomain}</h3>
    </motion.a>
  );
}
