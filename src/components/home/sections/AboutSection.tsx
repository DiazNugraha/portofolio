import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex flex-col gap-2"
    >
      {/* <h1 className="text-lg lg:text-2xl">About</h1> */}
      <div className="bg-transparent w-full rounded-xl flex flex-col gap-2">
        <p className="text-justify text-xs lg:text-sm">
          Hi there 👋 thanks for visiting, I&lsquo;m a Full Stack Software
          Developer and I also share my knowledge about programming mostly about
          web development and the programming language I use mostly Typescript,
          Python and Golang.
        </p>
      </div>
    </motion.section>
  );
}
