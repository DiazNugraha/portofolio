import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/router";

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
    x: 0,
    backgroundColor: "transparent",
  },
  hover: {
    x: -15,
    backgroundColor: "white",
  },
};

const buttonVariants = {
  rest: {
    x: 0,
    color: "white",
  },
  hover: {
    x: -3,
    color: "black", //#1E293B
    borderRadius: "50%",
  },
};

export default function BackButton() {
  const router = useRouter();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={cardVariants}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      onClick={() => router.back()}
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
        className="cursor-pointer flex justify-center items-center rounded-full w-10 h-10"
      >
        <motion.button
          variants={buttonVariants}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          className="flex items-center justify-center gap-2"
        >
          <ChevronLeft width={16} />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
