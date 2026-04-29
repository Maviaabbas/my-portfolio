import React from 'react';
import { FiBook, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';
import './Education.css';

const education = [
  { degree: 'Bachelor of Business Administration (BBA)', institution: 'University of the Punjab', period: '2024 – Present', location: 'Lahore' },
  { degree: 'Intermediate (FSc / FA)', institution: 'Govt. Graduate College for Women', period: '2022 – 2024', location: 'Lahore' },
];

const certifications = [
  { title: 'Full Stack Web Dev (MERN)', issuer: 'NAVTTC', year: '2026' },
  { title: 'Freelancing & Digital Skills', issuer: 'DigiSkills', year: '2025' },
  { title: 'Digital Marketing', issuer: 'PFTP', year: '2025' },
];

function Education() {
  return (
    <section id="education" className="py-5 bg-dark text-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Education & <span className="text-primary">Certifications</span></h2>
        <div className="row g-4">
          <div className="col-lg-6">
            <h4 className="mb-4 text-secondary"><FiBook/> Academic Education</h4>
            {education.map((edu, i) => (
              <div key={i} className="card p-4 bg-secondary bg-opacity-10 border-0 mb-3 edu-card">
                <h5>{edu.degree}</h5>
                <p className="text-primary fw-bold">{edu.institution}</p>
                <small className="text-secondary"><FiCalendar/> {edu.period} | <FiMapPin/> {edu.location}</small>
              </div>
            ))}
          </div>
          <div className="col-lg-6">
            <h4 className="mb-4 text-secondary"><FiAward/> Certifications</h4>
            {certifications.map((cert, i) => (
              <div key={i} className="card p-3 bg-secondary bg-opacity-10 border-0 mb-3 cert-card">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="mb-1">{cert.title}</h6>
                    <small className="text-primary fw-bold">{cert.issuer}</small>
                  </div>
                  <span className="text-secondary"><FiCalendar/> {cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;