import { motion } from "framer-motion";
import { FaGitAlt, FaGithub } from "react-icons/fa";
import { SiDbeaver } from "react-icons/si";

const tools = [
  { name: "Git", icon: <FaGitAlt className="text-orange-600 w-10 h-10" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-800 w-10 h-10" /> },
  { name: "DBeaver", icon: <SiDbeaver className="text-blue-600 w-10 h-10" /> },
];

export default function Tools() {
  return (
    <section id="tools" className="py-20 bg-white text-center">
      <motion.h2
        className="text-4xl font-bold mb-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Tools & Platforms
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="mb-3">{tool.icon}</div>
            <span className="text-gray-800 font-medium">{tool.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
