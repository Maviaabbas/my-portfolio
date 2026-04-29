import React from 'react';
import { FiCode, FiLayers, FiTrendingUp } from 'react-icons/fi';
import './About.css';
 
const highlights = [
  { icon: <FiCode size={24} />, label: 'Front-end Dev', text: 'React.js, HTML, CSS, JS' },
  { icon: <FiLayers size={24} />, label: 'MERN Stack', text: 'MongoDB, Express, Node' },
  { icon: <FiTrendingUp size={24} />, label: 'Digital Marketing', text: 'SEO, SMM, Content' },
];
 
function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Side */}
          <div className="col-lg-6">
            <h6 className="text-primary text-uppercase fw-bold">Who I Am</h6>
            <h2 className="display-5 fw-bold mb-4">About <span className="text-primary">Me</span></h2>
            <p className="lead mb-4">
              I'm <strong>Mavia Abbas</strong>, a passionate Web Developer currently sharpening my 
              skills in MERN stack and UI/UX principles.
            </p>
            <p className="mb-4">
              I focus on building responsive, user-friendly web applications. My background in BBA 
              helps me blend business strategy with technical execution to build meaningful products.
            </p>
            
            <div className="d-flex gap-4 pt-3 border-top border-secondary">
              <div><h3 className="text-primary">4+</h3><small>Projects</small></div>
              <div><h3 className="text-primary">3</h3><small>Certifications</small></div>
              <div><h3 className="text-primary">2+</h3><small>Years Exp</small></div>
            </div>
          </div>
 
          {/* Right Side */}
          <div className="col-lg-6">
            {highlights.map((item, index) => (
              <div key={index} className="card p-3 mb-3 bg-dark border-secondary about-card shadow-sm">
                <div className="d-flex align-items-center gap-3">
                  <div className="icon-box p-3 bg-primary bg-opacity-10 text-primary rounded">{item.icon}</div>
                  <div>
                    <h5 className="mb-0 text-light">{item.label}</h5>
                    <small className="text-secondary">{item.text}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> 
    </section>
  );
}
 
export default About;