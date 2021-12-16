import React from 'react';
import hero from '../images/perfil.jpg';
import './styles/Home.css';

export default function Home () {
  return (
    <section className="home-page" id="about">
      <img className="hero" src={ hero } alt="Foto de perfil"></img>
      <div>
        <h1 className="home-title">Olá! <i className="fab fa-angellist"></i></h1>
        <p className="about">Me chamo Écio, sou de Recife, Pernambuco, e tenho 30 anos. Sempre fui curioso e gostei de procurar soluções para os problemas que me apareciam com tecnologia, então decidi me tornar <strong>desenvolvedor web</strong> através da <a href="https://www.betrybe.com/">Trybe</a>. Esse é meu portfólio, e aqui você pode conferir os projetos e habilidades que desenvolvi desde então.</p>
      </div>
    </section>
  );
}
