import { motion } from 'framer-motion';

const projects = [
  {
    title: "DevOps Portfolio Site",
    description: "Personal website built with React, Flask, Docker, and CI/CD pipelines. Showcases DevOps & fullstack skills.",
    link: "https://github.com/sivanmarom/portfolio-project",
  },
  {
    title: "🚀 FlaskOps – CI/CD for Flask on Kubernetes",
    description: "Fullstack app using Django, React, and AI APIs to deliver personalized learning experiences.",
    link: "https://github.com/sivanmarom/FlaskOps-CI-CD-for-Flask-on-Kubernetes",
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
      className="py-16 px-6 w-full bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-white/10"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
            <p className="text-white/90 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-400 font-medium transition"
            >
              View on GitHub →
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}