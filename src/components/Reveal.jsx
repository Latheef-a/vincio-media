import { motion } from "framer-motion";

export default function Reveal({ children }) {
  return (
    <div style={{ overflow: "hidden" }}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: "0%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}