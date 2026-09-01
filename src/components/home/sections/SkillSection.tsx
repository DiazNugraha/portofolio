import { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function SkillSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex flex-col gap-3 w-full"
    >
      <h1 className="text-lg lg:text-xl font-semibold">Skills</h1>
      <Wrapper title="Frontend">
        <SkillItem name="React" />
        <SkillItem name="Next.js" />
        <SkillItem name="Typescript" />
        <SkillItem name="Javascript" />
        <SkillItem name="Vite" />
        <SkillItem name="Tailwind" />
      </Wrapper>
      <Wrapper title="Backend">
        <SkillItem name="Nest.js" />
        <SkillItem name="Node.js" />
        <SkillItem name="Laravel Lumen" />
        <SkillItem name="REST APIs" />
        <SkillItem name="WebSockets" />
      </Wrapper>
      <Wrapper title="Database & Messaging">
        <SkillItem name="PostgreSQL" />
        <SkillItem name="Redis" />
        <SkillItem name="RabbitMQ" />
      </Wrapper>
      <Wrapper title="Cloud & Architecture">
        <SkillItem name="AWS S3" />
        <SkillItem name="Vite Plugin Federation" />
      </Wrapper>
    </motion.section>
  );
}

interface IWrapperProps {
  title: string;
}

function Wrapper({ title, children }: IWrapperProps & PropsWithChildren) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm lg:text-base font-medium">{title}</h3>
      <div className="grid grid-cols-3 gap-x-3 gap-y-2">{children}</div>
    </div>
  );
}

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

interface ISkillItemProps {
  name: string;
  imageUrl?: string;
  url?: string;
}

function SkillItem({ name, imageUrl, url }: ISkillItemProps) {
  return (
    <motion.a
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
        className="flex-1 cursor-pointer border-[1px] border-slate-800 hover:boder-slate-600 flex py-2 px-3 justify-between items-center rounded-xl"
      >
        <div className="flex gap-2">
          <h3 className="text-[10px] lg:text-xs">{name}</h3>
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
    </motion.a>
  );
}
