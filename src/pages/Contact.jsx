import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const email = "brendonharrissonavelino@gmail.com";
  const subject = "Contato via portfólio";
  const body = "Olá, Brendon! Gostaria de falar sobre um trabalho.";
  const { t } = useLanguage();

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div className="portfolio-container">
      <h2 className="section-title" data-aos="fade-down">{t.contact.title}</h2>
      <p style={{ textAlign: "center", marginBottom: "30px", color: "#6c757d" }} data-aos="fade-up">
        {t.contact.description}
      </p>

      <div
        style={{
          maxWidth: 600,
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
        data-aos="fade-up"
      >
        <a
          href="https://wa.me/5511965155653?text=Olá%2C%20Brendon!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          📱 {t.contact.whatsapp}
        </a>

        <button
          className="linkedin-btn"
          onClick={() => {
            navigator.clipboard.writeText(email);
            alert("📧 E-mail copiado para área de transferência!");
          }}
        >
          📧 {t.contact.copyEmail}
        </button>

        <a href={mailtoLink} className="contact-btn" style={{ textDecoration: "none" }}>
          ✉️ {t.contact.sendEmail}
        </a>

        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="linkedin-btn">{t.contact.back}</button>
        </Link>
      </div>
    </div>
  );
}
