# DevOps Portfolio Site

[![Build Status](https://img.shields.io/badge/CI-GitHub%20Actions-success)]()
[![Dockerized](https://img.shields.io/badge/Docker-multi--service-blue)]()
[![License](https://img.shields.io/badge/license-MIT-lightgrey)]()

A personal **DevOps + Full-Stack** portfolio built with **React (frontend)** and **Flask (backend)**, containerized with **Docker**, and deployed via a **CI/CD pipeline**.

---

## ✨ Features
- Containerized frontend and backend (Docker)
- Automated **build → test → push → deploy** with GitHub Actions
- SEO-friendly project pages with tags & highlights
- Clean data model for projects (title, slug, tags, highlights, status)
- Ready for deployment on Render/any Docker-friendly host
- **🔢 Visitor Tracking** – Counts and stores total site visits in a database and displays the counter in the UI
- **📩 Contact Form Storage** – Sends messages via EmailJS **and** stores them securely in the backend database for later viewing

---

## 🧰 Tech Stack
- **Frontend:** React
- **Backend:** Flask (Python)
- **Web:** Nginx (optional)
- **Containers:** Docker / Docker Compose
- **CI/CD:** GitHub Actions (build, docker push, deploy)
- **Hosting:** Render (example)
- **Database:** PostgreSQL (Render Cloud Database)

---

## 🚀 CI/CD Workflow

Current pipeline: **build-and-test → docker-push → deploy-to-render**

![WhatsApp Image 2025-08-08 at 12 29 45](https://github.com/user-attachments/assets/c976ef9c-b6a7-4aa0-af3c-bdc6b7107ad3)

---

## 🧱 Folder Structure (suggested)
```text
portfolio-project/
├── frontend/                 # React app
├── backend/                  # Flask app
├── docker/                   # Dockerfiles, Nginx (if used)
├── .github/workflows/        # ci.yml (build → push → deploy)
├── public/ or docs/          # assets (images for README / Pages)
├── src/                      # shared utilities (if any)
├── scripts/                  # helper scripts (deploy, cleanup)
├── README.md
└── docker-compose.yml

---

## 🗂️ Project Cards Data

```js
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
```

---

## 🧪 Local Development

**Docker Compose (recommended)**
```bash
docker compose up --build
# Frontend -> http://localhost:3000
# Backend  -> http://localhost:5000
```

**Or, run separately**
```bash
# Frontend
cd frontend && npm install && npm start

# Backend
cd backend && pip install -r requirements.txt && flask run
```

---

## 📦 Deployment (Render example)
- GitHub Actions builds images and pushes to registry.
- The `deploy-to-render` job triggers the Render deploy hook.

---

## 🗺️ Roadmap
- Lighthouse checks in CI for performance/SEO
- Visual regression tests for the portfolio grid
- Add project detail pages (route per `slug`)
- Dark mode toggle + keyboard nav

---

## 📄 License
MIT

## 💬 Contact

For suggestions, improvements, or collaboration:
- 📧 [Sivmarom@gmail.com](mailto:Sivmarom@gmail.com)
- 🔗 [LinkedIn](https://www.linkedin.com/in/sivan-marom/)
- 💻 [GitHub](https://github.com/sivanmarom)

---

