import { useEffect, useState } from "react";
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Resume from './components/Resume';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
  const apiUrl = `http://${window.location.hostname}:5000/api/hello`;
  fetch(apiUrl)
    .then(res => res.json())
    .then(data => setMessage(data.message))
    .catch(err => console.error("API Error:", err));
}, []);

  return (
    <>
      <Navigation />
      <Hero apiMessage={message} />
      <About />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
    </>
  );
}

export default App;