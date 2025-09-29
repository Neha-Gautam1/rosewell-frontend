import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-white text-center text-gray-800"
    >
      {/* Section Heading */}
      <motion.h2
        className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let’s Work Together
      </motion.h2>

      <motion.p
        className="mb-10 text-gray-600 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Have a project, idea, or just want to say hi?  
        Fill out the form below and I’ll get back to you as soon as possible 🚀
      </motion.p>

      {/* Contact Form */}
      <motion.form
        className="max-w-lg mx-auto bg-gray-50 p-8 rounded-2xl shadow-md text-left space-y-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        action="https://formspree.io/f/mdkwelvo"  // replace with your Formspree / backend API
        method="POST"
      >
        {/* Name */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          />
        </div>

        {/* Contact Number */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Contact Number
          </label>
          <input
            type="tel"
            name="contact"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 
          text-white rounded-lg shadow-lg hover:opacity-90 transition-all"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
}
