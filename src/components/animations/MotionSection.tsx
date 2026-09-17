import { HTMLMotionProps, motion } from "framer-motion";

export default function MotionSection({
  children,
  ...rest
}: HTMLMotionProps<"section">) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...rest}
    >
      {children}
    </motion.section>
  );
}
