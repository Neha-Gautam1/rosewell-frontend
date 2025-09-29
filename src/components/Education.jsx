import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institute: "Institute of Engineering & Technology (IET), Lucknow",
      period: "2023 - 2027",
      details: "Currently pursuing B.Tech in CSE, maintaining a CGPA of 7.5+. Focusing on full-stack development, data structures, algorithms, and modern web technologies."
    },
    {
      degree: "12th Standard (PCM)",
      institute: "Swami Vivekanand Public School, Satwai, Meerut",
      period: "2021 - 2022",
      details: "Completed 12th with Physics, Chemistry, and Mathematics, securing 80%. Gained a strong foundation in core scientific and analytical concepts."
    },
    {
      degree: "10th Standard",
      institute: "Global Public School, Rasna, Meerut",
      period: "2019 - 2020",
      details: "Completed 10th grade with 90% marks, demonstrating consistent academic excellence and a strong grasp of fundamental subjects."
    }
  ];

  return (
    <section id="education" className="py-20 bg-white px-6">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>

      <div className="space-y-8 max-w-4xl mx-auto">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-indigo-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-800">{edu.degree}</h3>
            <p className="text-indigo-600 font-medium mt-1">{edu.institute}</p>
            <p className="text-sm text-gray-500">{edu.period}</p>
            <p className="mt-2 text-gray-700 leading-relaxed">{edu.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
