import { motion } from "framer-motion";

export default function Experience() {
  const jobs = [
    {
      role: "Frontend Intern",
      company: "Serene Minds (Mental Health Startup)",
      period: "Aug 2024 - Oct 2024",
      description:
        "Contributed to front-end development, creating responsive UI components and improving user experience for the startup's web applications. Collaborated closely with the design team to implement accessible features."
    },
    {
      role: "Full Stack Developer Intern",
      company: "Codeshape IT Solution",
      period: "July 2025 - Aug 2025",
      description:
        "Built a School Management System and an Online Medical Store using the MERN stack. Developed RESTful APIs, implemented authentication, and optimized database queries for better performance."
    },
    {
      role: "Mentor",
      company: "GSSoC",
      period: "Aug 2025 - Present",
      description:
        "Guiding and mentoring contributors in open-source projects. Providing code reviews, technical guidance, and helping new contributors understand best practices in front-end and full-stack development."
    },
    {
      role: "Frontend Intern",
      company: "Stibium Tech",
      period: "Sep 2025 - Present",
      description:
        "Working on front-end development using React and TailwindCSS. Implementing responsive UI components, collaborating with the team to deliver scalable web solutions, and integrating APIs for dynamic content."
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white px-6">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      <div className="space-y-8 max-w-4xl mx-auto">
        {jobs.map((job, i) => (
          <motion.div
            key={i}
            className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-indigo-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-800">{job.role}</h3>
            <p className="text-indigo-600 font-medium mt-1">{job.company}</p>
            <p className="text-sm text-gray-500">{job.period}</p>
            <p className="mt-2 text-gray-700 leading-relaxed">{job.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
