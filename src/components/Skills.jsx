import React from 'react';
import './styles/Skills.css';

export default function Skills () {
  return (
    <section className='skills' id="skills">
        <h1 className="skills-title">Habilidades</h1>
        <div className="skills-lists">
          <div className="hard-skills">
            <h3>Hard Skills</h3>
            <div className="inner-skills">
              <ul>
                <li><i className="fab fa-git-alt"></i></li>
                <li><i className="fab fa-js"></i></li>
                <li><i className="fab fa-html5"></i></li>
                <li><i className="fab fa-css3-alt"></i></li>
                <li><i className="fab fa-react"></i></li>
                <li><i className="fas fa-flask"></i></li>
                <li><i className="fas fa-database"></i></li>
                <li><i className="fab fa-docker"></i></li>
              </ul>
              <ul>
                <li>Git & GitHub</li>
                <li>JavaScript ES6</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>Unit Tests</li>
                <li>MySQL</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>
          <div className="soft-skills">
            <h3>Soft Skills</h3>
            <div className="inner-skills">
              <ul>
                <li><i className="fas fa-hands-helping"></i></li>
                <li><i className="fas fa-users"></i></li>
                <li><i className="fas fa-sitemap"></i></li>
                <li><i className="fas fa-code"></i></li>
                <li><i className="fas fa-hand-holding-heart"></i></li>
                <li><i className="fas fa-bullseye"></i></li>
              </ul>
              <ul>
                <li>Colaboração</li>
                <li>Teamwork</li>
                <li>Organização</li>
                <li>Clean code</li>
                <li>Empatia</li>
                <li>Assertividade</li>
              </ul>
            </div>
          </div>
        </div>
    </section>
  );
}
