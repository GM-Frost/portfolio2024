"use client";
import { motion } from "framer-motion";
//importing hooks
import useScrollProgress from "@/hooks/useScrollProgress";

//variants for animation
const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

interface TemplateProps {
  children: React.ReactNode;
}

const Template: React.FC<TemplateProps> = ({ children }) => {
  const completion = useScrollProgress();
  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.3, duration: 0.4 }}
      >
        {children}
      </motion.main>
      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700"
      >
        <div className="h-[400px]"></div>
      </span>
    </>
  );
};

export default Template;
