import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "../App.css";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="contact" data-aos="fade-up">
      <h2 className="section-title">{t.contact.title}</h2>
      <p className="contact-description">{t.contact.description}</p>

      <form action="https://formspree.io/f/mldbkddv" method="POST" className="contact-form">
        <input type="text" name="name" placeholder={t.contact.name} required />
        <input type="email" name="email" placeholder={t.contact.email} required />
        <textarea name="message" placeholder={t.contact.message} rows="5" required></textarea>
        <button type="submit" className="contact-btn">📩 {t.contact.sendEmail}</button>
      </form>

      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="linkedin-btn">{t.contact.back}</button>
        </Link>
      </div>
    </section>
  );
}
