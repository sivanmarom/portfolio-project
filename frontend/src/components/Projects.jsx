import { motion } from 'framer-motion';

const projects = [
  {
    title: "DevOps Portfolio Site",
    slug: "devops-portfolio-site",
    description: "Personal site built with React + Flask, containerized with Docker and deployed via CI/CD.",
    link: "https://github.com/sivanmarom/portfolio-project",
    tags: ["React","Flask","Docker","CI/CD","Nginx"],
    highlights: [
      "Containerized frontend and backend (Docker)",
      "Automated build & deploy pipeline (CI/CD)",
      "SEO-friendly project page templates"
    ],
    status: "In Progress"
  },
  {
    title: "FlaskOps – CI/CD for Flask on Kubernetes",
    slug: "flaskops-ci-cd",
    description: "Production-style CI/CD for a Flask app on Kubernetes (EKS) using Docker, Terraform, Helm, and Jenkins, with Prometheus/Grafana monitoring.",
    link: "https://github.com/sivanmarom/FlaskOps-CI-CD-for-Flask-on-Kubernetes",
    tags: ["Flask","Docker","Kubernetes","Helm","CI/CD","Jenkins","AWS","Terraform","Prometheus","Grafana"],
    highlights: [
      "Helm chart with Ingress for Flask service",
      "Pipeline: build → test → push → deploy",
      "Health checks and controlled rollouts"
    ],
    status: "Completed"
  },
  {
    title: "Kubernetes & Helm – AI Image Processing Pipeline",
    slug: "k8s-helm-image-pipeline",
    description: "K8s microservices with Helm, RabbitMQ, and PVCs. Web API → Queue → Consumer with E2E tests.",
    link: "https://github.com/sivanmarom/DevInsight-AI-Image-Analyzer",
    tags: ["Kubernetes","Helm","RabbitMQ","Docker","Python","DevOps"],
    highlights: [
      "Helm charts per service (web, queue, consumer)",
      "Persistent volumes and message durability",
      "RabbitMQ management UI and end-to-end testing flow"
    ],
    status: "Completed (Local: Minikube)"
  }
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