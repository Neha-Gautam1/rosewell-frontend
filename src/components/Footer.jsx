import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-white border-t border-gray-200 text-center">
      {/* Message */}
      <motion.p
        className="mb-6 text-lg text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Let’s make something amazing together ✨
      </motion.p>

      {/* Quick Links */}
      <div className="mb-6 flex justify-center flex-wrap gap-4">
        {sections.map((sec, i) => (
          <motion.button
            key={i}
            onClick={() => handleScroll(sec.id)}
            className="text-gray-700 hover:text-indigo-500 font-medium transition"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            {sec.label}
          </motion.button>
        ))}
      </div>

      {/* Call to Action Buttons */}
      <div className="mb-6 flex justify-center gap-4">
        <motion.a
          href="https://www.linkedin.com/in/neha-gautam-4a80a4257/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-md hover:opacity-90 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaLinkedin /> LinkedIn
        </motion.a>
        <motion.a
          href="https://github.com/Neha-Gautam1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-md hover:opacity-90 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub /> GitHub
        </motion.a>
      </div>

      {/* Copyright */}
      <p className="mt-6 text-sm text-gray-500">
        © 2025 <span className="font-semibold text-gray-700">Neha</span>. All rights reserved.
      </p>
    </footer>
  );
}
