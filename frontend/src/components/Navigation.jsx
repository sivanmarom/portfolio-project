import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { BsMoon, BsSun } from "react-icons/bs";
import useActiveSection from "../hooks/useActiveSection";
import useDarkMode from "../hooks/useDarkMode";

export default function Navigation() {
  const sectionIds = ["hero", "about", "skills", "resume", "projects", "contact"];
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <motion.nav
  className="bg-white/10 dark:bg-gradient-to-br 
             dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364]
             backdrop-blur-md border-b border-white/20 shadow-md 
             fixed top-0 left-0 w-full z-50 px-6 py-4 
             text-white flex items-center justify-center"
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
>
      <div className="flex items-center justify-between w-full max-w-5xl">
        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 mx-auto">
          {sectionIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`transition font-medium ${
                active === id
                  ? "text-blue-400 underline underline-offset-4"
                  : "text-white dark:text-white hover:text-blue-400"
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>

        {/* Toggle & Hamburger */}
        <div className="flex items-center gap-4">
          {/* Dark/Light Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="transition hover:text-yellow-300"
            title="Toggle dark mode"
          >
            {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
          </button>

          {/* Hamburger Icon (mobile only) */}
          <div className="md:hidden z-[60]">
            <button onClick={() => setOpen(!open)}>
              {open ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white p-6 flex flex-col gap-6 z-50"
          >
            <button onClick={() => setOpen(false)} className="self-end">
              <FiX size={28} />
            </button>
            {sectionIds.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`text-lg font-medium ${
                  active === id
                    ? "text-blue-400 underline underline-offset-4"
                    : "hover:text-blue-400"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}