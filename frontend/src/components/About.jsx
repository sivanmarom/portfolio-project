import { motion } from 'framer-motion';
import { FaCode, FaCogs, FaCloud, FaBook } from 'react-icons/fa';

export default function About() {
  return (
    <motion.section
      id="about"
      className="w-full py-20 px-6 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT - Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg mb-4 leading-relaxed">
            I'm a <span className="text-blue-300 font-semibold">Fullstack Developer</span> and <span className="text-blue-300 font-semibold">DevOps Engineer</span> passionate about automation, infrastructure, and clean architecture.
          </p>
          <p className="text-lg leading-relaxed">
            With a strong background in cloud-native tools, I love creating robust, scalable solutions and learning new technologies that drive impact.
          </p>
        </div>

        {/* RIGHT - Highlights with icons */}
        <div className="flex flex-col gap-5">
          <div className="flex items-start gap-4">
            <FaCode className="text-2xl text-blue-400 mt-1" />
            <p className="text-lg">Building fullstack apps using <strong>React</strong>, <strong>Flask</strong>, and <strong>Django</strong>.</p>
          </div>
          <div className="flex items-start gap-4">
            <FaCogs className="text-2xl text-blue-400 mt-1" />
            <p className="text-lg">Automating CI/CD pipelines with <strong>Docker</strong>, <strong>Kubernetes</strong> & <strong>Terraform</strong>.</p>
          </div>
          <div className="flex items-start gap-4">
            <FaCloud className="text-2xl text-blue-400 mt-1" />
            <p className="text-lg">Deploying and monitoring cloud services on <strong>AWS</strong>.</p>
          </div>
          <div className="flex items-start gap-4">
            <FaBook className="text-2xl text-blue-400 mt-1" />
            <p className="text-lg">Lifelong learner with a passion for <strong>documentation</strong> and <strong>clean delivery</strong>.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}