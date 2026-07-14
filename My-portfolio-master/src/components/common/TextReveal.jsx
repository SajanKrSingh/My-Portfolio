import React from "react";
import { motion } from "framer-motion";
import "./textReveal.css";

const containerVariants = {
  hidden: {},
  visible: (delay = 0) => ({
    transition: { staggerChildren: 0.07, delayChildren: delay },
  }),
};

const wordVariants = {
  hidden: { y: "115%", rotate: 6, filter: "blur(8px)", opacity: 0.4 },
  visible: {
    y: 0,
    rotate: 0,
    filter: "blur(0px)",
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Word-by-word typography reveal: each word rises out of a mask with a
 * slight rotation and un-blurs as it lands. `highlight` words get the
 * gradient treatment.
 */
const TextReveal = ({
  text,
  highlight = [],
  className = "",
  as = "h2",
  delay = 0,
  amount = 0.5,
}) => {
  const MotionTag = motion[as] || motion.h2;
  const highlightSet = highlight.map((w) => w.toLowerCase());
  const isHighlighted = (word) =>
    highlightSet.includes(word.toLowerCase().replace(/[^\w']/g, ""));

  return (
    <MotionTag
      className={`text-reveal ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      custom={delay}
      aria-label={text}
    >
      {text.split(" ").map((word, i) => (
        <span className="text-reveal__mask" key={`${word}-${i}`} aria-hidden="true">
          <motion.span
            className={`text-reveal__word ${isHighlighted(word) ? "gradient-text" : ""}`}
            variants={wordVariants}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
};

export default TextReveal;
