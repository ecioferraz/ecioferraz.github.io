import React from 'react';
import '../styles/Skills.css';

export default function Skills () {
  return (
    <section className='skills' id="skills">
        <h1 className="skills-title">Habilidades</h1>
        <div className="skills-lists">
          <div className="hard-skills">
            <h3>Hard Skills</h3>
            <div className="inner-skills">
              <ul>
                <li><i className="fab fa-git-alt" /></li>
                <li><i className="fab fa-js" /></li>
                <li><i className="fab fa-html5" /></li>
                <li><i className="fab fa-css3-alt" /></li>
                <li><i className="fab fa-react" /></li>
                <li><i className="fab fa-node" /></li>
                <li><span className="iconify" data-icon="simple-icons:typescript" data-width="12"></span></li>
                <li><span class="iconify" data-icon="simple-icons:express" data-width="16"></span></li>
                <li><i className="fas fa-flask" /></li>
                <li><span class="iconify" data-icon="file-icons:eslint" data-width="16"></span></li>
                <li><i className="fas fa-database" /></li>
                <li><span class="iconify" data-icon="file-icons:sequelize" data-width="16"></span></li>
                <li><span class="iconify" data-icon="bxl:mongodb" data-width="16"></span></li>
                <li><i className="fab fa-docker" /></li>
              </ul>
              <ul className="skill">
                <li>Git & GitHub</li>
                <li>JavaScript ES6</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>Node Js</li>
                <li>Typescript</li>
                <li>Express</li>
                <li>Unit Tests</li>
                <li>ESLint</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>MongoDB</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>
          <div className="soft-skills">
            <h3>Soft Skills</h3>
            <div className="inner-skills">
              <ul>
                <li><i className="fas fa-hands-helping" /></li>
                <li><i className="fas fa-users" /></li>
                <li><i className="fas fa-sitemap" /></li>
                <li><i className="fas fa-code" /></li>
                <li><i className="fas fa-hand-holding-heart" /></li>
                <li><i className="fas fa-bullseye" /></li>
              </ul>
              <ul className="skill">
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
