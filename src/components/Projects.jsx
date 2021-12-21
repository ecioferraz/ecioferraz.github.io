import React from "react";
import ProjectsCard from "./ProjectCards";
import './styles/Projects.css';

import pixelArt from '../images/pixel-art.png';
import starWars from '../images/star-wars.png';
import trivia from '../images/trivia.png';
import trybeWallet from '../images/trybewallet.png';

export default function Projects () {
  return (
    <section className="projects" id="projects">
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
        <ProjectsCard
          projectURL="https://ecioferraz.github.io/trybe-trivia-project/"
          src={ trivia }
          title="Trivia"
          githubURL="https://github.com/ecioferraz/trybe-trivia-project"
        />
        <ProjectsCard
          projectURL="https://ecioferraz.github.io/trybe-trybewallet-project/"
          src={ trybeWallet }
          title="TrybeWallet"
          githubURL="https://github.com/ecioferraz/trybe-trybewallet-project"
        />
      </section>
    </section>
  );
}
