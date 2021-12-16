import React from "react";
import ProjectsCard from "./ProjectCards";
import './styles/Projects.css';

export default function Projects () {
  return (
    <section className="projects">
      <h1>Projetos</h1>
      <section className="project-cards">
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
      </section>
    </section>
  );
}
