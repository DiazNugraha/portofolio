import { MainLayout } from ".";
import { motion } from "framer-motion";
import { MotionSection } from "..";
import { ChevronLeftIcon } from "lucide-react";
import { PropsWithChildren } from "react";
import { useRouter } from "next/router";

export default function MarkdownContentLayout({ children }: PropsWithChildren) {
  return (
    <MainLayout>
      <MotionSection className="w-full justify-start">
        <BackButton />
      </MotionSection>
      <MotionSection className="w-full">{children}</MotionSection>
    </MainLayout>
  );
}

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

function BackButton() {
  const router = useRouter();

  return (
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
      onClick={() => router.back()}
      className="flex gap-2 items-center cursor-pointer text-slate-600 hover:text-white"
    >
      <ChevronLeftIcon width={14} className="text-inherit" />
      <span className="text-inherit">Back</span>
    </motion.div>
  );
}
