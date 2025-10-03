import React from "react";
import "../App.css";
import { useLanguage } from "../context/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section className="skills" data-aos="fade-up">
      <h2 className="section-title">{t.skills.title}</h2>
      <ul className="skills-list">
        {t.skills.list.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
