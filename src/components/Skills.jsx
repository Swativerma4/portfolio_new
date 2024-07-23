import React from 'react';

import html from "../assets/skills/html.png"
import js from "../assets/skills/js.png"
import css from "../assets/skills/css.png"
import react from "../assets/skills/react.png"
import tailwind from "../assets/skills/tailwind.png"
import Figma from "../assets/skills/figma.png"
import git from "../assets/skills/git.png"
import c from "../assets/skills/c.png"
import sql from "../assets/skills/sql.png"
import "./Skill.css"


const skillsData = [
  { id: 1, icon: html, name: 'HTML', percentage: 90 },
  { id: 2, icon: css, name: 'CSS', percentage: 85 },
  { id: 3, icon: js, name: 'JavaScript', percentage: 80 },
  { id: 3, icon: react, name: 'React', percentage: 80 },
  { id: 3, icon: tailwind, name: 'Tailwind css', percentage: 80 },
  { id: 3, icon: Figma, name: 'Figma', percentage: 80 },
  { id: 3, icon: git, name: 'Git', percentage: 80 },
  { id: 3, icon: sql, name: 'SQL', percentage: 80 },
  { id: 3, icon: c, name: 'C++', percentage: 80 },
  
  // Add more skills as needed
];

export default function Skills() {
  return (
    <section className="skills-section" id='Skill'>
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title" >My Skills</h2>
          <p className='section-title-1'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</p>
        </div>

        <div className="skills-widget grid6">
          {skillsData.map((skill) => (
            <div className="skill-item" key={skill.id}>
              <div className="skill-inner">
                <div className="icon-box">
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <div className="number">{skill.percentage}%</div>
              </div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
