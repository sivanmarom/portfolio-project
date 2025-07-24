import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Resume from './components/Resume'
function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Resume/>
      <Projects />
      <Contact />
    </>
  );
}

export default App