import React from 'react';
import { HashLink } from 'react-router-hash-link';
import '../styles/Header.css'

export default function Header() {
  return (
    <header>
      <nav>
        <h4>.</h4>
        <ul className="menu">
          <li>
            <HashLink smooth to="/#about">
              <button type="button">
                <a href="#about">Quem sou eu</a>
              </button>
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#skills">
              <button>
                <a href="#skills">Habilidades</a>
              </button>
            </HashLink> 
          </li>
          <li>
            <HashLink smooth to="/#projects">
              <button>
                <a href="#projects">Projetos</a>
              </button>
            </HashLink>
          </li>
        </ul>
        <ul className="contacts">
          <li>
            <a
              href="https://www.linkedin.com/in/ecioferraz/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ecioferraz"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
