import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function Hero() {
  return (
    <motion.div
      className="hero"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="hero-title" variants={itemVariants}>
        Hi, my name is
      </motion.h1>
      <motion.h2 className="hero-title-large" variants={itemVariants}>
        Sathwik Acharya.
      </motion.h2>
      <motion.h3
        className="hero-title-large hero-title-sub"
        variants={itemVariants}
      >
        I build scalable, AI-driven digital products.
      </motion.h3>
      <motion.p className="hero-text" variants={itemVariants}>
        I'm a full-stack developer and AI engineer specializing in building
        scalable applications and AI-integrated systems. Currently pursuing my
        MCA at{" "}
        <a
          href="https://nitte.edu.in"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          NMAM Institute of Technology, Nitte
        </a>
        , I focus on crafting solutions that are performant, accessible, and
        genuinely useful.
      </motion.p>
      <motion.div className="hero-button" variants={itemVariants}>
        <Button text="View My Work" link="#work" />
      </motion.div>
    </motion.div>
  );
}

export default Hero;
