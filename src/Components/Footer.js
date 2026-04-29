import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import './Footer.css';
 
const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
];
 
function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };
 
  return (
    <footer className="footer">
      <div className="container footer__inner">
        {/* Logo */}
        <div className="footer__logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Mavia</span>
          <span className="logo-bracket">/&gt;</span>
        </div>
 
        {/* Nav links */}
        <ul className="footer__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="footer__link"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
 
        {/* Socials */}
        <div className="footer__socials">
          <a href="https://github.com/Maviaabbas" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
            <FiGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/Maviaabbas" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
            <FiLinkedin size={18} />
          </a>
          <a href="mailto:mavia2007@gmail.com" className="social-link" aria-label="Email">
            <FiMail size={18} />
          </a>
        </div>
 
        {/* Divider */}
        <div className="footer__divider" />
 
        {/* Copyright */}
        <p className="footer__copy">
          © {new Date().getFullYear()} Mavia Abbas. Built with{' '}
          <FiHeart size={13} className="footer__heart" /> using React.js
        </p>
      </div>
    </footer>
  );
}
 
export default Footer;
 