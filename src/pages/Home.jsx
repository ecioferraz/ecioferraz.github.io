import React from 'react';
import { Footer } from '../components';
import { About, Projects, Skills }from '../templates';

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
