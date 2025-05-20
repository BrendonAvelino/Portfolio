import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "../App.css";

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <button
        onClick={() => toggleLanguage("pt")}
        className={language === "pt" ? "active-lang" : ""}
      >
        PT
      </button>
      <button
        onClick={() => toggleLanguage("en")}
        className={language === "en" ? "active-lang" : ""}
      >
        EN
      </button>
    </div>
  );
}
