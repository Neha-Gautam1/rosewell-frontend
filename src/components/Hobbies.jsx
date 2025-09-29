import { motion } from "framer-motion";
import { GiRunningShoe, GiPencilBrush, GiMicrophone, GiEarthAsiaOceania } from "react-icons/gi";

const hobbies = [
  {
    title: "Taekwondo",
    desc: "I practice Taekwondo regularly in the early mornings and have achieved a yellow belt. It keeps me disciplined, focused, and physically active.",
    icon: <GiRunningShoe className="text-red-500 w-10 h-10" />
  },
  {
    title: "Sketching",
    desc: "I enjoy creating ink and pencil sketches, especially when I feel frustrated or bored. Sketching helps me relax and channel my creativity.",
    icon: <GiPencilBrush className="text-green-500 w-10 h-10" />
  },
  {
    title: "Singing",
    desc: "Singing is one of my favorite ways to express myself. I sing whenever I feel like it and love listening to music of all genres.",
    icon: <GiMicrophone className="text-purple-500 w-10 h-10" />
  },
  {
    title: "Travel",
    desc: "I love exploring new places to gain experiences and learn about different cultures. Traveling broadens my perspective and inspires creativity.",
    icon: <GiEarthAsiaOceania className="text-blue-500 w-10 h-10" />
  },
];


export default function Hobbies() {
  return (
    <section id="hobbies" className="py-20 bg-white text-center">
      <motion.h2
        className="text-4xl font-bold mb-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hobbies & Interests
      </motion.h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {hobbies.map((hobby, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Icon */}
            <div className="mb-4">{hobby.icon}</div>
            {/* Title */}
            <h3 className="text-xl font-bold text-gray-800 mb-2">{hobby.title}</h3>
            {/* Description */}
            <p className="text-gray-700 leading-relaxed">{hobby.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
