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

 const backendUrl = window.location.hostname === "localhost"
  ? "http://localhost:5000"
  : "https://portfolio-backend-5aat.onrender.com";


useEffect(() => {
  fetch(`${backendUrl}/api/hello`)
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