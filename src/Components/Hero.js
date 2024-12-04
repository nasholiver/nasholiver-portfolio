import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import "./Hero.css";

const Hero = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Transparent background
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create the bouncing ball
    const ballGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const ballMaterial = new THREE.MeshStandardMaterial({ color: 0xff5733 });
    const ball = new THREE.Mesh(ballGeometry, ballMaterial);
    scene.add(ball);

    // Add lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(10, 10, 10).normalize();
    scene.add(light);

    // Ball animation variables
    let xDirection = 0.05;
    let yDirection = 0.05;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Bouncing logic
      ball.position.x += xDirection;
      ball.position.y += yDirection;

      if (ball.position.x > 3 || ball.position.x < -3) {
        xDirection *= -1;
      }
      if (ball.position.y > 2 || ball.position.y < -2) {
        yDirection *= -1;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle cleanup on unmount
    return () => {
      while (mountRef.current.firstChild) {
        mountRef.current.removeChild(mountRef.current.firstChild);
      }
    };
  }, []);

  return (
    <motion.section
    id="hero"
      className="hero"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Gradient Background */}
      <div className="hero-background"></div>

      {/* Hero Content */}
      <div className="hero-content">
        <motion.div
          className="hero-circle"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Hello, I'm <span className="highlight">NashOliver</span>
          </motion.h2>
          <motion.p
          className="hero-description"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            A passionate Web Developer dedicated to crafting responsive and dynamic web experiences. Let's build something amazing together!
          </motion.p>
          {/* Call-to-Actions */}
       
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            
          >
            <motion.button
              className="cta-btn"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#007bff",
                color: "#fff",
              }}
              //onclick go to id contact
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contact Me
            </motion.button>
            <motion.button
              className="cta-btn-1"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#fff",
                color: "#282c34",
              }}
              onClick={() => {
                const projectSection = document.getElementById("projects");
                if (projectSection) {
                  projectSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              View My Work
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Three.js Animation */}
      <div ref={mountRef} className="three-container"></div>
    </motion.section>
  );
};

export default Hero;
