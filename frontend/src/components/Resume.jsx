import { motion } from "framer-motion";
import { FaDownload, FaBriefcase, FaGraduationCap } from "react-icons/fa";

export default function Resume() {
  return (
    <motion.section
      id="resume"
      className="py-16 px-6 w-full bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">My Resume</h2>

        {/* Download Button */}
        <div className="mb-10">
          <a 
            href="/sivan marom CV.pdf"
            download
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-6 py-3 rounded-full hover:bg-white/20 transition text-white border border-white"
          >
            <FaDownload /> Download Full Resume (PDF)
          </a>
        </div>

        {/* Work Experience */}
        <div className="mb-12 text-left bg-white/10 backdrop-blur p-6 rounded-lg shadow text-white">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FaBriefcase /> Work Highlights
          </h3>
          <ul className="space-y-4 list-disc list-inside">
            <li>
              <strong>Fullstack & DevOps Developer – Analiza</strong> (Jan 2024 – Present)<br />
              Built scalable AI-based educational platform with React, Django & AWS; led CI/CD, Docker/Kubernetes, Terraform and monitoring (Grafana, Prometheus).
            </li>
            <li>
              <strong>DevOps Engineer – Israeli Standards Institute</strong> (Nov 2023 – Jan 2024)<br />
              Led infrastructure modernization, CI/CD automation, and QA integration into cloud deployments.
            </li>
            <li>
              <strong>Technical Team Lead – Aman Group</strong> (2020 – 2022)<br />
              Managed cross-functional teams and optimized automated lab systems and robotic calibration workflows.
            </li>
          </ul>
        </div>

        {/* Education */}
        <div className="text-left bg-white/10 backdrop-blur p-6 rounded-lg shadow text-white">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FaGraduationCap /> Education
          </h3>
          <ul className="space-y-4 list-disc list-inside">
            <li>
              <strong>Cloud-Native DevOps Program</strong> – SQLabs (2023) – Graduated with Excellence
            </li>
            <li>
              <strong>B.Sc. in Biotechnology</strong> – Hadassah Academic College (2017–2020)<br />
              GPA: 96 | Dean’s List 2019
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}