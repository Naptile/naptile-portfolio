"use client";

import { motion } from "framer-motion";
import Particles from "react-tsparticles";

const projects = [
  {
    title: "Hospital dashboard",
    description: "A modern responsive hospital admin dashboard built with React + Tailwind CSS.",
    tech: ["Vite", "React", "Tailwind","Javascript (ES6)"],
    link: "https://hospital-dashboard-kappa-taupe.vercel.app/",
    image: "/medicare.png",
  },
  {
    title: "Notes App",
    description: "A full-stack Notes application built using the MERN stack. Users can register, log in, and manage personal notes securely.",
    tech: ["MongoDB", "Express", "React", "Node"],
    link: " https://new-notes-app-beta.vercel.app",
    image: "/image.png",
  },
  {
    title: "Portfolio Website",
    description: "Glassmorphism-themed personal portfolio showcasing services and projects.",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    link: "https://naptile-portfolio.vercel.app/",
    image: "/portfolio.png",
  },
  {
    title:"Chat-App",
    description:"A full-stack real-time chat application built with the MERN stack,",
    tech:["React (Vite)",
    "Socket.io-client",
    "Node.js",
    "Express.js",
    "MongoDB (Mongoose)",
    "Socket.io",
    "Cloudinary (image uploads)"],
    link:"https://chat-app-lyart-nine-76.vercel.app/",
    image: "/chatApp.png",
      },

      {
    title: "Soil Health Analyzer",

    description:"Soil Health Analyzer is a web application that helps users assess and monitor soil health through an intuitive interface, providing soil insights and actionable recommendations for farmers, gardeners, and researchers.",
    tech:["React.js",
      " Express",
      " Tailwind",
      "MongoDB",
      "Weather API",      
      ] ,
    link: "https://soil-health-analyzer-4-nd9o.onrender.com",
    image: "/soilAnalizer.png",
  },


  {
    title: "Blog App",
    description: "A full-stack Blog application built from scratch using modern web technologies. Users can create, view, search, and delete blog posts with real-time interaction between frontend and backend.",
    tech: ["Vite", "React", "Tailwind","MongoDb","Express","Node"],
    link: "https://blogapp-lac-phi.vercel.app/ ",
    image: "/BlogApp.png",
  },

   {
    title: "Eccomerce Website",
    description: " a fully functional E-commerce web application built using modern frontend technologies. The app allows users to browse products, view details, add items to cart, and manage their shopping experience.",
    tech: ["React js", "Express", "Tailwind","MongoDb","Node"],
    link: "https://e-commerce-delta-five-66.vercel.app/",
    image: "/ecommerce.png",
  },


   {
    title: "Saasify Website",
    description: "A modern responsive SaaS landing page built with React and Tailwind CSS. ",
    tech: ["React js",  "Tailwind"],
    link: "https://saa-sify-orpin.vercel.app/",
    image: "/saasify.png",
  },


   {
    title: "Social Feed Website",
    description: " a dynamic Social Feed web application built using React. It fetches real-time data from an external API and displays posts in a clean, interactive UI.",
    tech: ["React js", "Fetch API", "Tailwind","VITE",],
    link: "https://social-feed-app-blue.vercel.app/ ",
    image: "/socialFeed.png",
  },


  {
    title: "Student Mangement System",
    description: "A simple and scalable RESTful API built with Node.js, Express, and MongoDB for managing student records.",
    tech: ["React js", "Express", "Tailwind","VITE","Node","MongoDB"],
    link: "https://github.com/Naptile/studentDashboard.git ",
    image: "/studentDash.png",
  },

   {
    title: "Shambasphere",
    description: "Led a team in the development of ShambaSphere, a web-based agricultural platform connecting farmers, buyers, and institutions, enabling produce trading, farming insights, weather updates, and role-based dashboards to improve agricultural access and decision-making.",
    tech: ["HTML", "CSS", "Javascript ","Django","sql"],
    link: "https://shambaspherefinal.onrender.com/",
    image: "/shambaSphere.png",
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
