import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "../App.css";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="portfolio-container">
      <h2 className="section-title" data-aos="fade-down">
        {t.contact.title}
      </h2>
      <p
        style={{ textAlign: "center", marginBottom: "30px", color: "#6c757d" }}
        data-aos="fade-up"
      >
        {t.contact.description}
      </p>

      <form
        action="https://formspree.io/f/mldbkddv"
        method="POST"
        className="contact-form"
        data-aos="fade-up"
      >
        <input
          type="text"
          name="name"
          placeholder={t.contact.name || "Seu nome"}
          required
        />
        <input
          type="email"
          name="email"
          placeholder={t.contact.email || "Seu e-mail"}
          required
        />
        <textarea
          name="message"
          placeholder={t.contact.message || "Sua mensagem"}
          rows="5"
          required
        ></textarea>
        <button type="submit" className="contact-btn">
          📩 {t.contact.sendEmail}
        </button>
      </form>

      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="linkedin-btn">{t.contact.back}</button>
        </Link>
      </div>
    </div>
  );
}
