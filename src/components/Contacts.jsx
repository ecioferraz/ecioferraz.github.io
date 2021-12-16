import React from 'react';
import './styles/Contacts.css';

export default function Contacts () {
  return (
    <footer id="contact">
      <h2>Contato</h2>
      <ul>
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
    </footer>
  );
}