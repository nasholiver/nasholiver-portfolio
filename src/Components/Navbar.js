import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const navLinks = [
    { id: "hero", name: "About", href: "#hero" },
    { id: "skills", name: "Skills", href: "#skills" },
    { id: "projects", name: "Projects", href: "#projects" },
    { id: "services", name: "Services", href: "#services" },
    { id: "contact", name: "Contact", href: "#contact" },
  ];

  const handleMenuClick = (targetId) => {
    // Smooth scroll to the section
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // Close the dropdown if open
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">NashOliver</div>
      <div className={`	navbar-toggle `} onClick={toggleMenu}>
        <span className="menu-icon">&#9776;</span>
      </div>
      <ul
            className={`navbar-links ${isMobileMenuOpen ? "open" : "closed"}`}
            >
            {navLinks.map((link) => (
                <li
                key={link.id}
                onClick={() => {
                    setMobileMenuOpen(false); // Close menu when clicked
                    document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to section
                }}
                >
                <a href={link.href}>{link.name}</a>
                </li>
            ))}
            </ul>



    </nav>
  );
};

export default Navbar;
