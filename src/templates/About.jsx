import React from 'react';
import hero from '../images/perfil.jpg';
import '../styles/About.css';

export default function About() {
  return (
    <section className="home-page" id="about">
      <img className="hero" src={ hero } alt="Foto de perfil"></img>
      <div className="about-container">
        <h1 className="home-title">
          Olá! 
          <i className="fab fa-angellist"></i>
        </h1>
        <p className="about">
          Me chamo Écio, sou de Recife, Pernambuco. Sempre fui curioso e gostei de procurar soluções para os problemas que me apareciam com tecnologia, então decidi me tornar <strong>desenvolvedor web</strong> através da <a href="https://www.betrybe.com/">Trybe</a>. Esse é meu portfólio, e aqui você pode conferir os projetos e habilidades que tenho desenvolvido.
        </p>
      </div>
    </section>
  );
}
