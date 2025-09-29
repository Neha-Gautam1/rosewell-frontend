import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-lg text-gray-700 leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          I am a passionate <span className="font-semibold text-indigo-600">MERN Stack Developer</span> 
          with hands-on experience in building dynamic, responsive, and user-friendly web applications. 
          During my internships, I worked on both <span className="font-semibold text-purple-600">frontend and full-stack projects</span>, 
          gaining practical exposure to real-world development practices.
        </motion.p>

        <motion.p
          className="text-lg text-gray-700 leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Along with the MERN stack, I have working knowledge of 
          <span className="font-semibold text-pink-600"> PostgreSQL</span> and 
          <span className="font-semibold text-pink-600"> Docker</span>, enabling me to build scalable and efficient applications. 
          I am also skilled in modern UI libraries like 
          <span className="font-semibold text-indigo-600"> Shadcn/UI, Material UI, Mantine,</span> and 
          <span className="font-semibold text-indigo-600"> Tailwind CSS</span>, which help me craft clean and intuitive interfaces.
        </motion.p>

        <motion.p
          className="text-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          With a strong command over <span className="font-semibold text-purple-600">Data Structures & Algorithms in C++</span>, 
          I bring problem-solving skills that strengthen my development journey. 
          I enjoy turning ideas into impactful applications that balance functionality with great user experience 🚀.
        </motion.p>
      </div>
    </section>
  );
}
