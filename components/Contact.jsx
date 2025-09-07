"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Particles from "react-tsparticles";

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = new FormData(form);
    const action = form.action;

    try {
      await fetch(action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      setSuccess(true);       // Show success message
      form.reset();           // Clear form

      setTimeout(() => setSuccess(false), 5000); // Hide after 5s
    } catch (err) {
      console.error("Form submission error:", err);
    }
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      {/* Particle Background */}
      <Particles
        options={{
          fpsLimit: 60,
          particles: {
            number: { value: 40, density: { enable: true, area: 800 } },
            color: { value: ["#06b6d4", "#3b82f6", "#8b5cf6"] },
            shape: { type: "circle" },
            opacity: { value: 0.6, random: true },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 1, random: true, straight: false, outModes: "bounce" },
            links: { enable: true, distance: 90, color: "#3b82f6", opacity: 0.2, width: 1 },
          },
          detectRetina: true,
          background: { color: "transparent" },
        }}
        className="absolute inset-0 -z-10"
      />

      <h2 className="text-4xl font-bold text-center mb-12 relative z-10">
        📩 Get in <span className="text-blue-400">Touch</span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 relative z-10">
        {/* Contact Info */}
        <motion.div
          className="glass-card p-8 rounded-2xl flex flex-col gap-6 shadow-lg shadow-blue-500/20"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">Reach Me</h3>
          <div className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition">
            <FaEnvelope className="text-xl" />
            <span>naptilepeterson71@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition">
            <FaPhone className="text-xl" />
            <span>+254 718439373</span>
          </div>
          <div className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition">
            <FaMapMarkerAlt className="text-xl" />
            <span>Nairobi, Kenya</span>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          method="POST"
          action="https://formsubmit.co/naptilepeterson71@gmail.com"
          onSubmit={handleSubmit}
          className="glass-card p-8 rounded-2xl shadow-lg shadow-purple-500/20 flex flex-col gap-6 relative z-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="bg-white/5 border border-blue-400/30 placeholder-gray-400 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="bg-white/5 border border-blue-400/30 placeholder-gray-400 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="bg-white/5 border border-blue-400/30 placeholder-gray-400 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold hover:from-purple-500 hover:to-blue-400 transition shadow-lg shadow-purple-500/30"
          >
            Send Message
          </button>

          {/* Success Message */}
          {success && (
            <motion.div
              className="mt-4 p-3 bg-green-500/20 border border-green-400 text-green-200 rounded-lg text-center font-semibold"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              ✅ Message sent successfully!
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
