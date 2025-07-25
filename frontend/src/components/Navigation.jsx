import { motion } from 'framer-motion';

export default function Navigation() {
  return (
    <motion.nav
  className="bg-white/10 backdrop-blur-md border-b border-white/20 shadow-md fixed top-0 left-0 w-full z-50 flex justify-center space-x-6 py-4 text-white"
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  <a href="#hero" className="hover:text-blue-400 hover:border-b border-blue-400 pb-1 transition">Home</a>
  <a href="#about" className="hover:text-blue-400 hover:border-b border-blue-400 pb-1 transition">About</a>
  <a href="#skills" className="hover:text-blue-400 hover:border-b border-blue-400 pb-1 transition">Skills</a>
  <a href="#resume" className="hover:text-blue-400 hover:border-b border-blue-400 pb-1 transition">Resume</a>
  <a href="#projects" className="hover:text-blue-400 hover:border-b border-blue-400 pb-1 transition">Projects</a>
  <a href="#contact" className="hover:text-blue-400 hover:border-b border-blue-400 pb-1 transition">Contact</a>
</motion.nav>
  );
}