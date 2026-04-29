import React, { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiArrowDown, FiDownload } from 'react-icons/fi';
import './Hero.css';

const roles = ['Front-end Developer', 'MERN Stack Developer', 'UI/UX Enthusiast', 'React.js Developer'];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__badge">Available for Opportunities</div>
          <h1 className="hero__name">Hi, I'm <span className="hero__name-accent">Mavia Abbas</span></h1>
          <p className="hero__role"><span className="typewriter">{displayed}</span><span className="cursor">|</span></p>
          <p className="hero__summary">
            Professional Trainee at NAVTTC with hands-on experience in the MERN stack
            and UI/UX principles — building responsive, user-friendly web applications.
          </p>
          <div className="hero__ctas">
            <a href="#contact" className="btn btn--primary">Get In Touch</a>
            <a href="/Mavia_Abbas_CV.pdf" download className="btn btn--outline"><FiDownload size={16} /> Download CV</a>
          </div>
        </div>

        <div className="hero__graphic">
          <div className="avatar-ring">
            <img src={process.env.PUBLIC_URL + '/pic.jpeg'} alt="Mavia Abbas" className="avatar-inner-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;