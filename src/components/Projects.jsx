import React from "react";
import ProjectsCard from "./ProjectCards";
import './styles/Projects.css';

import pixelArt from '../images/pixel-art.png';
import starWars from '../images/star-wars.png'

export default function Projects () {
  return (
    <section className="projects">
      <h1>Projetos</h1>
      <section className="project-cards">
        <ProjectsCard
          projectURL="https://ecioferraz.github.io/trybe-pixel-art-project/"
          src={ pixelArt }
          title="Pixel Art"
          githubURL="https://github.com/ecioferraz/trybe-pixel-art-project"
        />
        <ProjectsCard
          projectURL="https://ecioferraz.github.io/trybe-star-wars-project/"
          src={ starWars }
          title="Star Wars: Planet Search"
          githubURL="https://github.com/ecioferraz/trybe-star-wars-project"
        />
      </section>
    </section>
  );
}
