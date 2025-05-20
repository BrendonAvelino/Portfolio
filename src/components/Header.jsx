import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "../App.css";

export default function Header() {
  const { t, language } = useLanguage();

  const resumeUrl =
    language === "pt" ? "/curriculo-pt.pdf" : "/curriculo-en.pdf";

  return (
    <header className="header" data-aos="fade-down">
      <h1 className="title">{t.header.name}</h1>
      <p className="subtitle">{t.header.bio}</p>
      <div className="cta-buttons">
        <Link to="/contato">
          <button className="contact-btn">{t.header.contact}</button>
        </Link>

        <a
          href="https://www.linkedin.com/in/brendon-harrisson-avelino-50969b2a4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="linkedin-btn">LinkedIn</button>
        </a>

        <a
          href="https://github.com/BrendonAvelino"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="linkedin-btn">GitHub</button>
        </a>

        {/* Botão de currículo */}
        <a href={resumeUrl} download>
          <button className="contact-btn">
            📄 {language === "pt" ? "Currículo" : "Resume"}
          </button>
        </a>
      </div>
    </header>
  );
}
