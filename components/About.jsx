"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaBrain,
  FaPaintBrush,
  FaDownload,
  FaProjectDiagram,
  FaUsers,
  FaClock,
} from "react-icons/fa";
import { useEffect, useState } from "react";

function Counter({ end, label, icon }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2s
    const step = end / (duration / 16);

    const counter = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end]);

  return (
    <motion.div
      className="flex flex-col items-center neon-card p-6 rounded-xl shadow-lg relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {/* Neon Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-2xl animate-pulse"></div>

      <span className="text-blue-400 text-4xl mb-2 relative z-10 drop-shadow-[0_0_10px_#3b82f6]">
        {icon}
      </span>
      <h3 className="text-4xl font-extrabold text-white relative z-10 drop-shadow-[0_0_20px_#60a5fa]">
        {count}+
      </h3>
      <p className="text-gray-300 mt-2 relative z-10">{label}</p>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 relative z-10 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        👨‍💻 About <span className="text-blue-400">Me</span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
        {/* Left: Profile */}
        <motion.div
          className="flex flex-col items-center text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src="Naptile-Peter.jpg"
            alt="Naptile Peter"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-blue-500 shadow-lg shadow-blue-500/40 mb-6 object-cover"
          />
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Hi, I’m{" "}
            <span className="text-blue-400 font-semibold">Naptile Peter</span>, a passionate{" "}
            <span className="text-purple-400">Full Stack MERN Developer</span> and{" "}
            <span className="text-green-400">AI Enthusiast</span>.  
            I love building futuristic, user-friendly applications that merge
            design with intelligence.
          </p>

          {/* Download CV Button */}
          <a
            href="/Naptile-peter-cv.html"/*"Naptile-Peter-CV.pdf"*/
            download
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass-card border border-blue-500 text-blue-400 font-semibold hover:bg-blue-500 hover:text-white transition shadow-lg shadow-blue-500/30"
          >
            <FaDownload /> Download CV
          </a>
        </motion.div>

        {/* Right: Skills */}
        <motion.div
          className="grid gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {[
            { icon: <FaReact />, label: "React & MERN", percent: "90%" },
            { icon: <FaBrain />, label: "AI & Chatbots", percent: "80%" },
            { icon: <FaNodeJs />, label: "Backend (Node.js)", percent: "85%" },
            { icon: <FaDatabase />, label: "Databases (MongoDB)", percent: "80%" },
            { icon: <FaPaintBrush />, label: "UI/UX & Design", percent: "75%" },
          ].map((skill, i) => (
            <div key={i} className="glass-card p-4 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-blue-400 text-2xl">{skill.icon}</span>
                <h4 className="text-lg font-semibold">{skill.label}</h4>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                  style={{ width: skill.percent }}
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.percent }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Neon Counters */}
      <div className="max-w-4xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        <Counter end={5} label="Years of Experience" icon={<FaClock />} />
        <Counter end={50} label="Projects Completed" icon={<FaProjectDiagram />} />
        <Counter end={30} label="Happy Clients" icon={<FaUsers />} />
        <Counter end={10} label="Tech Stacks Mastered" icon={<FaReact />} />
      </div>
    </section>
  );
}
