import React, { useState } from "react";
import { motion } from "framer-motion";

import "./Skills.css";

const skills = [
    "JavaScript",
    "React",
    "Vue.js",
    "Angular",
    "Node.js",
    "Django",
    "Flask",
    "GraphQL",
  ];
  

const Skills = () => {
  const [clickedSkills, setClickedSkills] = useState([]);

  const handleClick = (skill) => {
    setClickedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((item) => item !== skill)
        : [...prev, skill]
    );
  };

  const resetSkills = () => setClickedSkills([]);

  const skillVariants = {
    initial: (index) => ({
      x: Math.cos((index / skills.length) * 2 * Math.PI) * 100,
      y: Math.sin((index / skills.length) * 2 * Math.PI) * 100,
      backgroundColor: "#f0f0f0",
      transition: { duration: 0.5 },
    }),
    moving: (index) => ({
      x: [0, Math.cos((index / skills.length) * 2 * Math.PI) * 100, 0],
      y: [0, Math.sin((index / skills.length) * 2 * Math.PI) * 100, 0],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear",
      },
    }),
    clicked: {
      x: 0,
      y: 150,
      backgroundColor: "#007bff",
      scale: 1.2,
      transition: { duration: 0.5 },
    },
    reset: (index) => ({
      x: Math.cos((index / skills.length) * 2 * Math.PI) * 100,
      y: Math.sin((index / skills.length) * 2 * Math.PI) * 100,
      scale: 1,
      backgroundColor: "#f0f0f0",
      transition: { duration: 0.5 },
    }),
  };

  return (
    <motion.section
      id="skills"
      className="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="skills-title" onClick={resetSkills}>Skills</h2>
      <div className="skills-container">
        <div className="skill-list">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="skill-card"
              onClick={() => handleClick(skill)}
              variants={skillVariants}
              initial="initial"
              animate={
                clickedSkills.includes(skill)
                  ? "clicked"
                  : clickedSkills.length === 0
                  ? "moving"
                  : "reset"
              }
              custom={index}
              whileHover={{ scale: 1.3 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>

        {/* Reset Button */}
      
      </div>
    </motion.section>
  );
};

export default Skills;
