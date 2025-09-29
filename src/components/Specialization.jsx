import { motion } from "framer-motion";
import { SiReact, SiLeetcode, SiCodeforces } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";

const specializations = [
  {
    name: "Data Structures & Algorithms",
    icon: <SiLeetcode className="text-orange-500 w-12 h-12" />,
    desc: "Strong foundation in DSA concepts including arrays, trees, graphs, and dynamic programming. Able to solve complex algorithmic problems efficiently."
  },
  {
    name: "Problem Solving",
    icon: <SiCodeforces className="text-blue-600 w-12 h-12" />,
    desc: "Actively solving competitive programming problems on platforms like Codechef, Codeforces and LeetCode  consistently improving logic and speed."
  },
  {
    name: "Web Development",
    icon: <FaLaptopCode className="text-purple-500 w-12 h-12" />,
    desc: "Proficient in building responsive and interactive websites using MERN stack, TailwindCSS, Mantine, Material UI, and other modern web technologies."
  },
];

export default function Specialization() {
  return (
    <section id="specialization" className="py-20 bg-white text-center">
      <motion.h2
        className="text-4xl font-bold mb-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Specializations
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {specializations.map((spec, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-4">{spec.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{spec.name}</h3>
            <p className="text-gray-700 leading-relaxed">{spec.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
