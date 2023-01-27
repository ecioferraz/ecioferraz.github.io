import About from '../../templates/About';
import Footer from '../../templates/Footer';
import Header from '../../templates/Header';
import Projects from '../../templates/Projects';
import Skills from '../../templates/Skills';

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}
