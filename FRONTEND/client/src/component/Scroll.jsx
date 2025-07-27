// ScrollProgressBar.jsx
import { motion, useScroll } from "framer-motion";
import React from "react";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "5px",
        zIndex: 9999,
        background: "linear-gradient(90deg, #00C9FF, #92FE9D)",
        transformOrigin: "0%",
        scaleX: scrollYProgress,
      }}
    />
  );
};

export default ScrollProgressBar;
