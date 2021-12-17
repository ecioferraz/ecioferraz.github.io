import React from 'react';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Content () {
  return (
    <>
      <Home />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}
