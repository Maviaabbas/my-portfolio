import React, { useState } from 'react';
import {  FiServer, FiStar, FiUsers } from 'react-icons/fi';
import { SiHtml5, SiCss, SiJavascript, SiReact, SiBootstrap, SiTailwindcss, SiNodedotjs, SiMongodb, SiGit, SiFigma } from 'react-icons/si';
import { FaFileExcel } from 'react-icons/fa';
import './Skills.css';

const categories = [
  { id: 'frontend', label: 'Frontend', icon: <FiCode />, skills: [
      { name: 'HTML5', icon: <SiHtml5 />, level: 90, color: '#e34f26' },
      { name: 'CSS3', icon: <SiCss />, level: 85, color: '#264de4' },
      { name: 'JavaScript', icon: <SiJavascript />, level: 80, color: '#f7df1e' },
      { name: 'React.js', icon: <SiReact />, level: 78, color: '#61dafb' },
      { name: 'Bootstrap', icon: <SiBootstrap />, level: 85, color: '#7952b3' },
      { name: 'Tailwind', icon: <SiTailwindcss />, level: 75, color: '#38bdf8' },
    ]
  },
  { id: 'backend', label: 'Backend & Tools', icon: <FiServer />, skills: [
      { name: 'Node.js', icon: <SiNodedotjs />, level: 65, color: '#68a063' },
      { name: 'MongoDB', icon: <SiMongodb />, level: 60, color: '#4db33d' },
      { name: 'Git/GitHub', icon: <SiGit />, level: 78, color: '#f05032' },
      { name: 'MS Office', icon: <FaFileExcel />, level: 80, color: '#217346' },
    ]
  },
  { id: 'other', label: 'Other', icon: <FiStar />, skills: [
      { name: 'Graphic Design', icon: <SiFigma />, level: 70, color: '#ff7262' },
      { name: 'Digital Marketing', icon: <FiStar />, level: 75, color: '#ff9900' },
    ]
  }
];

function Skills() {
  const [active, setActive] = useState('frontend');
  const currentCat = categories.find((c) => c.id === active);

  return (
    <section id="skills" className="py-5 bg-dark text-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">My <span className="text-primary">Skills</span></h2>
        
        <div className="d-flex justify-content-center gap-2 mb-5 flex-wrap">
          {categories.map((cat) => (
            <button 
              key={cat.id} 
              className={`btn ${active === cat.id ? 'btn-primary' : 'btn-outline-secondary'}`}
              onClick={() => setActive(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {currentCat.skills.map((skill) => (
            <div key={skill.name} className="col-md-4">
              <div className="card p-3 bg-secondary bg-opacity-10 border-0 h-100 skill-card">
                <div className="d-flex justify-content-between mb-2">
                  <span style={{ color: skill.color, fontSize: '1.5rem' }}>{skill.icon}</span>
                  <span className="fw-bold">{skill.level}%</span>
                </div>
                <h6 className="mb-3">{skill.name}</h6>
                <div className="progress" style={{ height: '6px' }}>
                  <div className="progress-bar" style={{ width: `${skill.level}%`, background: skill.color }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
