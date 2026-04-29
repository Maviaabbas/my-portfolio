import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

function Navbar({ darkMode, toggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container">
        {/* Updated Logo Section */}
        <a href="#home" className="navbar-brand">
          <img 
            src={process.env.PUBLIC_URL + '/logo.png'} 
            alt="Mavia Abbas" 
            className="brand-logo" 
          />
        </a>

        {/* Mobile Toggle */}
        <button className="btn btn-outline-primary d-lg-none" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Links */}
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-center">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.href}>
                <a className="nav-link text-light px-3" href={link.href}>{link.label}</a>
              </li>
            ))}
            {/* Dark Mode Toggle */}
            <li className="nav-item ms-lg-3">
              <button className="btn btn-dark border-secondary" onClick={toggleDarkMode}>
                {darkMode ? <FiSun /> : <FiMoon />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;