import { motion } from "framer-motion";

export const RevealBlock = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 34, scale: 0.98, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2, margin: "-40px 0px -40px 0px" }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};
