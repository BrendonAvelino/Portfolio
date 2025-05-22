import React from "react";
import ProjectCard from "./ProjectCard";
import "../App.css";
import { useLanguage } from "../context/LanguageContext";
import Sesi from "../assets/img/Sesi.png";
import PrevisaoTempo from "../assets/img/PrevisaoTempo.jpeg";
import Requinte from "../assets/img/Requinte.png";
import Augebit from "../assets/img/Augebit.png";

export default function Projects() {
  const { t } = useLanguage();

  const images = [Sesi, PrevisaoTempo, Requinte, Augebit];

  return (
    <section className="projects" data-aos="fade-up">
      <h2 className="section-title">{t.projects.title}</h2>
      <div className="projects-grid">
        {t.projects.list.map((proj, idx) => (
          <ProjectCard
            key={idx}
            title={proj.title}
            description={proj.desc}
            image={images[idx]}
            link={proj.link} // ✅ agora pega o link correto
          />
        ))}
      </div>
    </section>
  );
}
