import React from "react";
import '../styles/ProjectCards.css';

export default function ProjectsCard ({ projectURL, src, title, githubURL }) {
  return (
    <div className="project-card">
      <a
        href={ projectURL }
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={ src }
          alt="Print de tela do projeto"
          className="project-card-image"
        />
      </a>
      <div className="project-card-body">
        <h4 className="project-card-title">{ title }</h4>
        <a
          href={ githubURL }
          target="_blank"
          rel="noreferrer"
        >
          <i class="fas fa-code"></i>
        </a>
      </div>
    </div>
  );
}
