import React from "react";
import "../App.css";
import { useLanguage } from "../context/LanguageContext";

const skillLevels = {
  HTML: 90,
  CSS: 85,
  "JavaScript": 85,
  React: 80,
  "Node.js": 75,
  "Git/GitHub": 85,
  Figma: 70
};

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section className="skills" data-aos="fade-up">
      <h2 className="section-title">{t.skills.title}</h2>
      <ul className="skills-list">
        {t.skills.list.map((skill, i) => (
          <li key={i}>
            {skill}
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ width: `${skillLevels[skill]}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
