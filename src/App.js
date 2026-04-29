import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css'; // Yahan hum custom dark styling daalenge

function App() {
  return (
    <div className="bg-dark text-light min-vh-100">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about" className="py-5 bg-secondary bg-opacity-10"><About /></section>
        <section id="skills" className="py-5"><Skills /></section>
        <section id="experience" className="py-5 bg-secondary bg-opacity-10"><Experience /></section>
        <section id="projects" className="py-5"><Projects /></section>
        <section id="education" className="py-5 bg-secondary bg-opacity-10"><Education /></section>
        <section id="contact" className="py-5"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;