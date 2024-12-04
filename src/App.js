import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import ContactForm from "./Components/Contact";

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Services />
      <ContactForm/>
      <Footer />
    </div>
  );
}

export default App;
