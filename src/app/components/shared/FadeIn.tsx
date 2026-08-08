import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  y = 24,
  className = "",
}: FadeInProps) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-60px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.88,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}