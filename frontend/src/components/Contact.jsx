import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [cfg, setCfg] = useState(null); // ← נשמר כאן הקונפיג מהשרת

  const backendUrl =
    window.location.hostname === 'localhost'
      ? 'http://localhost:5000'
      : 'https://portfolio-backend-5aat.onrender.com';

  // טוענים את ההגדרות מה־Backend
  useEffect(() => {
    fetch(`${backendUrl}/api/emailjs`)
      .then((res) => res.json())
      .then(setCfg)
      .catch((err) => console.error('Failed to load EmailJS config', err));
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setSent(false);
    setError(false);

    if (!cfg) {
      console.error("EmailJS config not loaded");
      setError(true);
      return;
    }

    try {
      // שליחת המייל
      await emailjs.sendForm(
        cfg.serviceId,
        cfg.templateId,
        form.current,
        cfg.publicKey
      );

      // שמירה ב־DB
      const formData = new FormData(form.current);
      const payload = {
        name: formData.get('user_name'),
        email: formData.get('user_email'),
        message: formData.get('message'),
      };

      await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      setSent(true);
    } catch (err) {
      console.error('Error sending contact form:', err);
      setError(true);
    }

    e.target.reset();
  };

  return (
    <motion.section
      id="contact"
      className="py-16 px-6 w-full bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-8">
          Want to collaborate, offer an opportunity, or just say hi? Feel free to reach out!
        </p>

        <div className="flex justify-center gap-8 mb-10 text-white text-2xl">
          <a href="mailto:sivmarom@gmail.com" className="hover:text-blue-300 transition">
            <MdEmail />
          </a>
          <a href="https://github.com/sivanmarom" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sivan-marom/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
            <FaLinkedin />
          </a>
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-4 max-w-xl mx-auto">
          <input
            type="text"
            name="user_name"
            required
            placeholder="Your Name"
            className="w-full bg-white/10 text-white placeholder-white/70 border border-white/30 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="user_email"
            required
            placeholder="Your Email"
            className="w-full bg-white/10 text-white placeholder-white/70 border border-white/30 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Your Message"
            className="w-full bg-white/10 text-white placeholder-white/70 border border-white/30 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            
            className="bg-[#145174] text-white px-6 py-2 rounded-xl shadow hover:bg-[#0b2e42] transition disabled:opacity-50"
          >
            Send Message
          </button>
        </form>

        {sent && <p className="text-green-400 mt-4">✅ Your message has been sent!</p>}
        {error && <p className="text-red-400 mt-4">❌ Failed to send. Please try again.</p>}
      </div>
    </motion.section>
  );
}