import React, { useState } from 'react';
import { FiBriefcase, FiCalendar, FiMapPin, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import './Experience.css';

const experiences = [
  { role: 'Professional Trainee — Full Stack Web Dev', company: 'NAVTTC', period: 'Feb 2026 – Present', location: 'Lahore', bullets: ['MERN stack projects', 'Industry-standard workflows', 'Component-driven UIs'] },
  { role: 'Trainee — Freelancing', company: 'DigiSkills', period: '2025 – Present', location: 'Remote', bullets: ['Freelancing strategies', 'Proposal writing', 'Client communication'] },
  { role: 'Certified Trainee — Digital Marketing', company: 'PFTP', period: '2024 – 2025', location: 'Lahore', bullets: ['SEO & SMM', 'Campaign planning', 'Analytics'] },
];

function Experience() {
  const [expanded, setExpanded] = useState(0);

  return (
    <section id="experience" className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">My <span className="text-primary">Experience</span></h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {experiences.map((exp, index) => (
              <div key={index} className="card bg-dark border-secondary mb-3 shadow-sm">
                <div className="card-header bg-transparent border-0 d-flex justify-content-between align-items-center py-3" onClick={() => setExpanded(expanded === index ? null : index)}>
                  <div>
                    <h5 className="text-light mb-1">{exp.role}</h5>
                    <p className="text-primary mb-1 fw-bold">{exp.company}</p>
                    <small className="text-secondary"><FiCalendar/> {exp.period} | <FiMapPin/> {exp.location}</small>
                  </div>
                  <button className="btn btn-sm btn-outline-secondary">{expanded === index ? <FiChevronUp/> : <FiChevronDown/>}</button>
                </div>
                {expanded === index && (
                  <div className="card-body border-top border-secondary pt-3">
                    <ul className="text-secondary">
                      {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;