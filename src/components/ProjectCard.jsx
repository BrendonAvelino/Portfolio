import React from "react";
import "../App.css";

export default function ProjectCard({ title, description, link, image }) {
  return (
    <div className="card" data-aos="zoom-in">
      <img
        src={image}
        alt={`Imagem do projeto ${title}`}
        className="card-image"
      />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >
          Ver no GitHub ↗
        </a>
      </div>
    </div>
  );
}
