import {
  HomeIcon,
  KeyboardIcon,
  LucideIcon,
  NotebookPenIcon,
  SquareKanbanIcon,
  UserIcon,
} from "lucide-react";
import { motion } from "framer-motion";

type INavigation = {
  icon: LucideIcon;
  url: string;
  label: string;
};

const navigations: INavigation[] = [
  {
    icon: HomeIcon,
    url: "",
    label: "Home",
  },
  {
    icon: UserIcon,
    url: "",
    label: "About",
  },
  {
    icon: SquareKanbanIcon,
    url: "",
    label: "Projects",
  },
  {
    icon: KeyboardIcon,
    url: "",
    label: "Toolstack",
  },
  {
    icon: NotebookPenIcon,
    url: "",
    label: "Blog",
  },
];

const labelVariants = {
  initial: {
    opacity: 0,
    x: -10,
  },
  hover: {
    opacity: 1,
    x: 0,
  },
};

const buttonVariants = {
  rest: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: -6,
    scale: 1.01,
    backgroundColor: "#1F2937",
    borderRadius: "12px",
    color: "white",
    paddingLeft: "12px",
    paddingRight: "12px",
  },
};

export default function Sidebar() {
  return (
    <div className="fixed z-50 left-10 top-1/2 -translate-y-1/2 text-white">
      <motion.div
        initial="initial"
        whileHover="hover"
        className="
        fixed
        left-10
        top-1/2
        -translate-y-1/2
        z-50

        w-16
        hover:w-48

        rounded-full
        hover:rounded-[30px]
        border
        border-slate-800
        p-5

        flex
        flex-col
        gap-5

        overflow-hidden

        transition-[width]
        duration-300
        ease-out
      "
      >
        {navigations.map((navigation, index) => {
          const Icon = navigation.icon;

          return (
            <motion.a
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              key={index}
              href={navigation.url}
              className="
              flex
              items-center
              gap-3
              w-full
              text-slate-600
              py-2
            "
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <Icon width={24} height={24} className="shrink-0 text-inherit" />

              <motion.span
                variants={labelVariants}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="
                whitespace-nowrap
                text-inherit
                text-sm
                font-medium
              "
              >
                {navigation.label}
              </motion.span>
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
