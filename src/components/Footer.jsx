import React from "react";
import "../App.css";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer" data-aos="fade-up">
      <p>&copy; {new Date().getFullYear()} Brendon Harrisson Avelino. {t.footer.text}</p>
      <div className="footer-links">
        <a href="https://github.com/BrendonAvelino" target="_blank" rel="noopener noreferrer">GitHub</a> | 
        <a href="https://www.linkedin.com/in/brendon-harrisson-avelino-50969b2a4/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}
