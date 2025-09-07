"use client";

import { motion } from "framer-motion";
import Particles from "react-tsparticles";

const projects = [
  {
    title: "AI Chatbot Assistant",
    description: "An AI-powered chatbot integrated with OpenAI API to handle real-time conversations.",
    tech: ["Next.js", "OpenAI", "Tailwind"],
    link: "#",
    image: "https://source.unsplash.com/600x400/?ai,chatbot",
  },
  {
    title: "E-Commerce Platform",
    description: "A full-stack MERN e-commerce website with authentication and payment integration.",
    tech: ["MongoDB", "Express", "React", "Node"],
    link: "#",
    image: "https://source.unsplash.com/600x400/?ecommerce,technology",
  },
  {
    title: "Portfolio Website",
    description: "Glassmorphism-themed personal portfolio showcasing services and projects.",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    link: "#",
    image: "https://source.unsplash.com/600x400/?portfolio,web",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative z-10">
      <h2 className="text-4xl font-bold text-center mb-12">
        🚀 Featured <span className="text-blue-400">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative p-6 rounded-2xl overflow-hidden cursor-pointer glass-card animate-glow"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: [0, 1, 0.6, 1],
              scale: [0.95, 1, 0.97, 1],
              transition: {
                duration: 6,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              },
            }}
          >
            {/* Particles overlay */}
            <Particles
              className="absolute inset-0 z-0 pointer-events-none"
              options={{
                fpsLimit: 60,
                interactivity: {
                  events: {
                    onHover: { enable: true, mode: "repulse" },
                    resize: true,
                  },
                  modes: { repulse: { distance: 80, duration: 0.5 } },
                },
                particles: {
                  number: { value: 15 },
                  color: { value: ["#06b6d4", "#3b82f6", "#8b5cf6", "#f472b6"] },
                  shape: { type: "circle" },
                  opacity: { value: 0.7, random: true },
                  size: { value: { min: 1, max: 3 } },
                  move: { enable: true, speed: 0.8, random: true, straight: false, outModes: "bounce" },
                  links: { enable: true, distance: 60, color: "#06b6d4", opacity: 0.3, width: 1 },
                },
                detectRetina: true,
                background: { color: "transparent" },
              }}
            />

            <div className="overflow-hidden rounded-xl mb-4 z-10">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2 z-10">{project.title}</h3>
            <p className="text-gray-300 mb-4 z-10">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4 z-10">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition z-10"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
