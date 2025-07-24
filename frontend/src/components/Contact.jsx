import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSent(false);
    setError(false);

    emailjs.sendForm(
  process.env.REACT_APP_EMAILJS_SERVICE_ID,
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  form.current,
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY
)
      .then(() => setSent(true))
      .catch(() => setError(true));

    e.target.reset();
  };

  return (
    <motion.section
      id="contact"
      className="p-8 max-w-3xl mx-auto text-center bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p className="text-lg mb-6">
        Want to collaborate, offer an opportunity, or just say hi? Feel free to reach out!
      </p>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-4 mb-8">
        <a href="mailto:sivmarom@gmail.com" className="text-blue-600 hover:underline">
          📧 Email
        </a>
        <a href="https://github.com/sivanmarom" target="_blank" className="text-blue-600 hover:underline">
          🐙 GitHub
        </a>
        <a href="https://www.linkedin.com/in/sivan-marom/" target="_blank" className="text-blue-600 hover:underline">
          💼 LinkedIn
        </a>
      </div>

      {/* Contact Form */}
      <form ref={form} onSubmit={sendEmail} className="space-y-4 max-w-xl mx-auto">
        <input
          type="text"
          name="user_name"
          required
          placeholder="Your Name"
          className="w-full border border-gray-300 p-3 rounded"
        />
        <input
          type="email"
          name="user_email"
          required
          placeholder="Your Email"
          className="w-full border border-gray-300 p-3 rounded"
        />
        <textarea
          name="message"
          rows="5"
          required
          placeholder="Your Message"
          className="w-full border border-gray-300 p-3 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>

      {/* Feedback messages */}
      {sent && <p className="text-green-600 mt-4">✅ Your message has been sent!</p>}
      {error && <p className="text-red-600 mt-4">❌ Failed to send. Please try again.</p>}
    </motion.section>
  );
}