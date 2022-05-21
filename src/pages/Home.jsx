import React from 'react';
import Footer from '../components/Footer';
import About from '../templates/About';
import Projects from '../templates/Projects';
import Skills from '../templates/Skills';

export default function Home() {
  return (
    <>
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}
