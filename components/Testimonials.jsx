"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "CEO, TechCorp",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "Naptile is an exceptional developer! His web apps are futuristic, responsive, and user-friendly. Highly recommended.",
    rating: 5,
  },
  {
    name: "Michael Smith",
    role: "Founder, AI Solutions",
    photo: "https://randomuser.me/api/portraits/men/46.jpg",
    feedback:
      "His expertise in AI integration and full-stack development is unmatched. A pleasure to work with.",
    rating: 5,
  },
  {
    name: "Sofia Lee",
    role: "Product Manager, StartupHub",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    feedback:
      "Professional, creative, and efficient. The projects exceeded our expectations in both design and functionality.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        📝 Testimonials
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="glass-card p-6 rounded-xl shadow-lg relative overflow-hidden cursor-pointer hover:scale-105 hover:shadow-blue-500/50 transition-transform"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Star Rating */}
            <div className="flex mb-4">
              {Array.from({ length: t.rating }).map((_, idx) => (
                <FaStar key={idx} className="text-yellow-400 mr-1" />
              ))}
            </div>

            {/* Feedback */}
            <p className="text-gray-300 mb-6">{t.feedback}</p>

            {/* Client Info */}
            <div className="flex items-center gap-3">
              <img
                src={t.photo}
                alt={t.name}
                className="w-12 h-12 rounded-full border-2 border-blue-500 object-cover"
              />
              <div>
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-gray-400 text-sm">{t.role}</p>
              </div>
            </div>

            {/* Neon Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-50 animate-pulse rounded-xl"></div>
          </motion.div>
        ))}
      </div>

      {/* Trust Badges */}
      <div className="max-w-4xl mx-auto mt-16 flex flex-wrap justify-center items-center gap-8 px-6">
        {["React", "Node.js", "MongoDB", "AI", "Figma"].map((tech, i) => (
          <motion.div
            key={i}
            className="glass-card px-6 py-3 rounded-lg shadow-md text-blue-400 font-semibold hover:scale-110 hover:shadow-purple-500/50 transition-transform cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
