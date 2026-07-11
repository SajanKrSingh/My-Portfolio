import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./preloader.css";

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const duration = 1600;
    let raf;

    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 250);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!done) return;
    const timer = setTimeout(onComplete, 650);
    return () => clearTimeout(timer);
  }, [done, onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="preloader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            className="preloader__inner"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.5 }}
          >
            <span className="preloader__name">Sajan Kumar Singh</span>
            <span className="preloader__role">Full Stack Developer</span>
            <div className="preloader__bar">
              <motion.div
                className="preloader__bar-fill"
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.15 }}
              />
            </div>
            <span className="preloader__percent">{progress}%</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
