import React from "react";
import pixelArt from '../images/pixel-art.png';
import './styles/ProjectCards.css';

export default function ProjectsCard () {
  return (
    <div className="project-card">
      <a
        href="https://ecioferraz.github.io/trybe-pixel-art-project/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={ pixelArt }
          alt="Estática da home-page do projeto Pixels Art"
          className="project-card-image"
        />
      </a>
      <div className="project-card-body">
        <h4 className="project-card-title">Pixel Art</h4>
        <a
          href="https://github.com/ecioferraz/trybe-pixel-art-project"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fas fa-code"></i>
        </a>
      </div>
    </div>
  );
}
