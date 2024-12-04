import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
 

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_gldd8zw",
        "template_75m65p5",
        formData,
        "8eVAfqoTNsjCQEOWs"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSubmitted(true);
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Contact Me
      </motion.h2>
      {!isSubmitted ? (
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.div
            className="form-group"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </motion.div>
          <motion.div
            className="form-group"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </motion.div>
          <motion.div
            className="form-group"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </motion.div>
          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.1, backgroundColor: "#007BFF", color: "#fff" }}
            whileTap={{ scale: 0.9 }}
          >
            Send Message
          </motion.button>
          {/* use email if you want to */}
           <motion.p 
           className="email-text"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            or use my email: <a href="mailto:nashnashivy@gmail.com">nashnashivy@gmail.com</a>
          </motion.p>
        </motion.form>
      ) : (
        <motion.div
          className="thank-you"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3>Thank you for reaching out!</h3>
          <p>I’ll get back to you as soon as possible.</p>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Contact;
