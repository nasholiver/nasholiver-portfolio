import React from "react";
import { motion } from "framer-motion";
import "./Services.css";

const services = [
  { title: "Web Development", description: "Building responsive websites." },
  { title: "UI/UX Design", description: "Crafting user-friendly interfaces." },
  { title: "Consultation", description: "Providing expert advice on projects." },
  { title: "SEO Optimization", description: "Enhancing website visibility." },
  { title: "E-Commerce Solutions", description: "Developing online stores." },
  { title: "Custom Integrations", description: "Tailored solutions for your needs." },
];

const Services = () => {
  return (
    <motion.section
      id="services"
      className="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            whileHover={{ rotateY: 180 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="card-front">
              <h3>{service.title}</h3>
            </div>
            <div className="card-back">
              <p>{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
