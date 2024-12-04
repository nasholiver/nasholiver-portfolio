import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section 
      className="hero"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Hello, I'm <span>NashOliver</span></h2>
      <p>
        A passionate Web Developer dedicated to crafting responsive and dynamic web experiences. Let's build something amazing together!
      </p>
    </motion.section>
  );
};

export default Hero;
