import { motion } from 'framer-motion';

const projects = [
  {
    title: "DevOps Portfolio Site",
    description: "Personal website built with React, Flask, Docker, and CI/CD pipelines. Showcases DevOps & fullstack skills.",
    link: "https://github.com/sivanmarom/portfolio-project",
  },
  {
    title: "AI-Powered Education Platform",
    description: "Fullstack app using Django, React, and AI APIs to deliver personalized learning experiences.",
    link: "https://github.com/sivanmarom/ai-edu-platform",
  },
  {
    title: "Cloud Infrastructure Automation",
    description: "Infrastructure-as-Code using Terraform, deployed to AWS with monitoring via Prometheus & Grafana.",
    link: "https://github.com/sivanmarom/devops-infra-project",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="p-8 bg-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a href={project.link} target="_blank" className="text-blue-600 font-medium hover:underline">
              View on GitHub →
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}