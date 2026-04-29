import React, { useState } from 'react';
import { FiGithub } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'ChronosFlow Clock',
    description: 'A dynamic Digital to Analog converter clock, showing real-time updates with smooth transitions and accurate time tracking.',
    tags: ['JavaScript', 'CSS', 'DOM'],
    category: 'javascript',
    github: 'https://github.com/Maviaabbas',
    image: 'clock.png',
  },
  {
    id: 2,
    title: 'TechLab Solutions',
    description: 'A professional business website for TechLab, featuring clean UI/UX, responsive navigation, and a modern corporate layout.',
    tags: ['HTML5', 'CSS3', 'Layout'],
    category: 'frontend',
    github: 'https://github.com/Maviaabbas',
    image: 'techs.png',
  },
  {
    id: 3,
    title: 'EduPortal Hub',
    description: 'A student-centric website built using Astra theme, customized for educational management and user-friendly navigation.',
    tags: ['WordPress', 'Astra', 'Customization'],
    category: 'wordpress',
    github: 'https://github.com/Maviaabbas',
    image: 'astra.png',
  },
  {
    id: 4,
    title: 'Shapely Reimagined',
    description: 'A customized recreation of the Shapely theme, focusing on modern aesthetics, modular sections, and fully responsive design.',
    tags: ['WordPress', 'CSS', 'Design'],
    category: 'wordpress',
    github: 'https://github.com/Maviaabbas',
    image: 'shapely.png',
  },
  {
    id: 5,
    title: 'DataStream UI',
    description: 'A clean, high-performance fixed table header component designed for managing and displaying financial data efficiently.',
    tags: ['HTML', 'CSS', 'Tables'],
    category: 'frontend',
    github: 'https://github.com/Maviaabbas',
    image: 'table.png',
  },
];

const filters = ['all', 'frontend', 'javascript', 'wordpress'];

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const filtered = activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="section-title">My <span className="accent-dot">Projects</span></h2>
          <p className="section-subtitle">Showcasing my technical journey through these selected works.</p>
        </div>

        <div className="projects__filters text-center mb-5">
          {filters.map((f) => (
            <button key={f} className={`filter-btn ${activeFilter === f ? 'filter-btn--active' : ''}`} onClick={() => setActiveFilter(f)}>
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filtered.map((proj) => (
            <div key={proj.id} className="project-card">
              <div className="project-card__thumb">
                <img src={process.env.PUBLIC_URL + '/' + proj.image} alt={proj.title} />
                <div className="project-card__overlay">
                  <a href={proj.github} target="_blank" rel="noreferrer" className="btn-overlay">View Code</a>
                </div>
              </div>
              <div className="project-card__body">
                <h3 className="project-card__title">{proj.title}</h3>
                <p className="project-card__desc">{proj.description}</p>
                <div className="project-card__tags">
                  {proj.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;