import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import AvatarViewer from "./AvatarViewer";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="min-h-screen h-full flex flex-col md:flex-row items-center justify-center px-6 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white gap-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* LEFT: Avatar */}
      <div className="w-[180px] h-[400px] flex items-center justify-center">
        <AvatarViewer />
      </div>

      {/* RIGHT: Text */}
      <div className="text-center md:text-left max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          Hi, I'm Sivan Marom 👋
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl h-[40px] mb-6"
        >
         <TypeAnimation
            sequence={[
              "Automation Lover 🤖",
                2000,
                "DevOps Engineer 🚀",
                2000,
                "Fullstack Developer 🧑‍💻",
                2000,
              "Cloud Enthusiast 🌐☁️", 
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
/>
        </motion.div>

        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <a
            href="https://github.com/sivanmarom"
            target="_blank"
            className="bg-white text-[#0f2027] px-6 py-2 rounded-xl hover:bg-gray-200 transition"
          >
            GitHub
          </a>
          <a
            href="#projects"
            className="bg-[#145174] text-white px-6 py-2 rounded-xl shadow hover:bg-[#0b2e42] transition"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="border border-white px-6 py-2 rounded-xl hover:bg-white hover:text-black transition"
          >
            Contact Me
          </a>
        </div>

        <p className="mt-8 text-white text-lg italic">
          "Building bridges between code, infrastructure & people."
        </p>
      </div>
    </motion.section>
  );
}