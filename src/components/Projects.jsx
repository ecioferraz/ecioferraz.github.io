import React from "react";
import ProjectsCard from "./ProjectCards";
import './styles/Projects.css';

import pixelArt from '../images/pixel-art.png';

export default function Projects () {
  return (
    <section className="projects">
      <h1>Projetos</h1>
      <section className="project-cards">
        <ProjectsCard
          projectURL="https://ecioferraz.github.io/trybe-pixel-art-project/"
          src={ pixelArt }
          alt="Print de tela do projeto"
          title="Pixel Art"
          githubURL="https://github.com/ecioferraz/trybe-pixel-art-project"
        />
      </section>
    </section>
  );
}
