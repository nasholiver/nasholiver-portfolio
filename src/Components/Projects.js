import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";
import project4 from "../assets/images/project4.jpg";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.jpg";

const projects = [
  {
    title: "Portfolio Website",
    description: "A React-based portfolio site.",
    image: project1,
    link: "https://myportfolio.com",
  },
  {
    title: "E-Commerce App",
    description: "An online shopping platform.",
    image: project2,
    link: "https://ecommerceapp.com",
  },
  {
    title: "Chat Application",
    description: "A real-time messaging app.",
    image: project3,
    link: "https://chatapp.com",
  },
  {
    title: "Task Manager",
    description: "An app to organize tasks and boost productivity.",
    image: project4,
    link: "https://taskmanager.com",
  },
  {
    title: "Weather Dashboard",
    description: "A weather forecasting web app.",
    image:project5,
    link: "https://weatherdashboard.com",
  },
  {
    title: "Blog Platform",
    description: "A platform for publishing and sharing blogs.",
    image: project6,
    link: "https://blogplatform.com",
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.1, boxShadow: "0px 8px 20px rgba(0,0,0,0.2)" }}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
