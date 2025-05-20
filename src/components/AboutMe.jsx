import React from "react";
import "../App.css";
import eu from "../assets/img/eu.jpg";
import { useLanguage } from "../context/LanguageContext";

export default function AboutMe() {
  const { t } = useLanguage();

  return (
    <section className="about-me" data-aos="fade-up">
      <div
        className="about-me-photo"
        style={{ backgroundImage: `url(${eu})` }}
      ></div>
      <div className="about-me-content">
        <h2 className="about-me-title">{t.about.title}</h2>
        <p className="about-me-description">{t.about.text1}</p>
        <p className="about-me-description">{t.about.text2}</p>
        <p className="about-me-description">{t.about.text3}</p>
      </div>
    </section>
  );
}
