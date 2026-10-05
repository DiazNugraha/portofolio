import { BlogCard, MotionSection } from "@/components";
import { blogCollections } from "@/constants";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const MotionLink = motion(Link);

const hoverVariants = {
  rest: {
    x: 0,
    scale: 1,
  },
  hover: {
    x: 6,
    scale: 1.01,
  },
};

export default function BlogSection() {
  return (
    <MotionSection className="flex flex-col gap-2">
      <h1 className="text-lg lg:text-xl font-semibold">My Blogs</h1>
      <div className="flex flex-col gap-3">
        {blogCollections.slice(0, 3).map((blog, index) => (
          <BlogCard {...blog} key={index} />
        ))}
        <MotionLink
          variants={hoverVariants}
          initial="rest"
          whileHover="hover"
          whileTap={{ scale: 0.98 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          href={"/blog"}
          className="flex gap-2 items-center text-slate-600 hover:text-white"
        >
          <span className="text-inherit">View More</span>
          <ArrowRightIcon width={14} className="text-inherit" />
        </MotionLink>
      </div>
    </MotionSection>
  );
}
