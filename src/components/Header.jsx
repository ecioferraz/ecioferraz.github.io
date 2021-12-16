import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './styles/Header.css'

export default function Header () {
  return (
    <header>
      <nav>
        <ul>
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
          <li>
            <HashLink smooth to="/#contact">
              <button>
                <a href="#contact">Contato</a>
              </button>
            </HashLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
