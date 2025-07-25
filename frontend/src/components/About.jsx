import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="w-full py-16 px-6 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-7">
          I'm a Fullstack Developer and DevOps Engineer with experience in building scalable web applications, automating infrastructure in the cloud, and managing containers. 
          I enjoy working end-to-end — from modern Frontend to secure and efficient Back-End. 
          Skilled in CI/CD, Docker, Kubernetes, Terraform, Flask, React, and more.
        </p>
        <p className="text-lg leading-7 mt-4">
          I'm passionate about clean code, structured documentation, and continuous learning. Every project I build is an opportunity to grow, share, and deliver real value.
        </p>
      </div>
    </motion.section>
  );
}