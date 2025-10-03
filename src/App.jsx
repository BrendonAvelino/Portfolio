import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

import { LanguageProvider } from "./context/LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-out", once: true });
  }, []);

  return (
    <LanguageProvider>
      <Router>
        {/* Tema fixo */}
        <div className="theme-bar">
          <ThemeToggle />
        </div>

        {/* Idioma fixo */}
        <div className="language-bar">
          <LanguageSwitcher />
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <div className="portfolio-container">
                <Header />
                <AboutMe />
                <Projects />
                <Skills />
                <Footer />
              </div>
            }
          />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}
