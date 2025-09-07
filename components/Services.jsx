"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaBrain, FaRobot, FaMobileAlt } from "react-icons/fa";
import Particles from "react-tsparticles";

const services = [
  { icon: <FaCode />, title: "Web Development", description: "Modern, responsive, dynamic websites." },
  { icon: <FaPaintBrush />, title: "UI/UX Design", description: "Futuristic user-friendly interfaces." },
  { icon: <FaBrain />, title: "AI & Chatbots", description: "Intelligent AI-driven apps." },
  { icon: <FaRobot />, title: "Automation", description: "Business automation & workflow optimization." },
  { icon: <FaMobileAlt />, title: "Mobile Apps", description: "Cross-platform mobile applications." },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="services" className="py-20 relative z-10">
      <h2 className="text-4xl font-bold text-center mb-12">
        🛠️ My <span className="text-blue-400">Services</span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className={`relative glass-card p-6 rounded-xl text-center flex flex-col items-center overflow-hidden transition-transform duration-300 ${
              hoveredIndex === i ? "scale-105 shadow-[0_0_40px_rgba(59,130,246,0.7)]" : "glow-hover"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Neon Particle Glow */}
            {hoveredIndex === i && (
              <Particles
                className="absolute inset-0 z-0 pointer-events-none"
                options={{
                  fpsLimit: 60,
                  particles: {
                    number: { value: 30 },
                    color: { value: ["#06b6d4", "#3b82f6", "#8b5cf6"] },
                    shape: { type: "circle" },
                    opacity: { value: 0.9, random: true },
                    size: { value: { min: 1, max: 3 } },
                    move: {
                      enable: true,
                      speed: 2,
                      direction: "none",
                      random: true,
                      straight: false,
                      outModes: "bounce",
                      trail: { enable: true, length: 12, fillColor: "#0b0b0c" },
                    },
                    links: {
                      enable: true,
                      distance: 70,
                      color: "#06b6d4",
                      opacity: 0.3,
                      width: 1,
                    },
                  },
                  interactivity: {
                    events: { onHover: { enable: false }, onClick: { enable: false } },
                  },
                  detectRetina: true,
                  background: { color: "transparent" },
                }}
              />
            )}

            <span className="text-5xl text-blue-400 mb-4 z-10">{service.icon}</span>
            <h3 className="text-xl font-semibold mb-2 z-10">{service.title}</h3>
            <p className="text-gray-300 text-sm z-10">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
