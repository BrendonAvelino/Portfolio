import React from "react";
import "../App.css";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer" data-aos="fade-up">
      <p>
        &copy; {new Date().getFullYear()} Brendon Harrisson Avelino. {t.footer.text}
      </p>
    </footer>
  );
}
