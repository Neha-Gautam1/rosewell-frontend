import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "projects", label: "Projects" },
  { id: "hobbies", label: "Hobbies" },
  { id: "contact", label: "Contact" },
  {id: "specialization", label: "Specialization"},
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md z-50 flex justify-between items-center px-6 py-4"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo / Name */}
      <h1 className="text-2xl font-bold bg-white bg-clip-text text-transparent">
        Neha
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-white font-medium">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleScroll(item.id)}
              className="cursor-pointer hover:text-yellow-200 transition"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile Toggle */}
      <div className="md:hidden text-white">
        {isOpen ? (
          <FiX className="text-2xl cursor-pointer" onClick={() => setIsOpen(false)} />
        ) : (
          <FiMenu className="text-2xl cursor-pointer" onClick={() => setIsOpen(true)} />
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute top-16 left-0 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg flex flex-col items-center gap-4 py-6 md:hidden"
        >
          {navItems.map((item) => (
            <li key={item.id} className="w-full text-center">
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(item.id);
                }}
                className="block w-full px-4 py-2 text-lg text-white hover:bg-white hover:text-indigo-600 rounded-md transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
}
