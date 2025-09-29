import { motion } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaDocker 
} from "react-icons/fa";
import { 
  SiMongodb, SiExpress, SiFirebase, SiTailwindcss, SiPostgresql 
} from "react-icons/si";

const skills = [
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 w-10 h-10" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-700 w-10 h-10" /> },
  { name: "React", icon: <FaReact className="text-blue-500 w-10 h-10" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-700 w-10 h-10" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-600 w-10 h-10" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600 w-10 h-10" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 w-10 h-10" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500 w-10 h-10" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700 w-10 h-10" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400 w-10 h-10" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400 w-10 h-10" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white text-center">
      <motion.h2
        className="text-4xl font-bold mb-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Tech Stack
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="mb-3">{skill.icon}</div>
            <span className="text-gray-800 font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
