import { motion } from 'framer-motion';

export default function Navigation() {
  return (
    <motion.nav
      className="bg-white shadow-md fixed top-0 left-0 w-full z-50 flex justify-center space-x-6 py-4"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <a href="#hero" className="text-gray-800 font-semibold hover:text-blue-600">
        Home
      </a>
      <a href="#about" className="text-gray-800 font-semibold hover:text-blue-600">
        About
      </a>
       <a href="#skills" className="text-gray-800 font-semibold hover:text-blue-600">Skills</a>
       <a href="#resume" className="text-gray-800 font-semibold hover:text-blue-600">Resume</a>
      <a href="#projects" className="text-gray-800 font-semibold hover:text-blue-600">Projects</a>
    <a href="#contact" className="text-gray-800 font-semibold hover:text-blue-600">Contact</a>
    </motion.nav>
  );
}