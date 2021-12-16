import React from 'react';
import Contacts from '../components/Contacts';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Content () {
  return (
    <>
      <Home />
      <Skills />
      <Projects />
      <Contacts />
    </>
  );
}
