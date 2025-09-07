"use client";

import Navbar from "../components/Navbar"; // import 
import { ReactTyped } from "react-typed";
import ParticlesBg from "../components/ParticlesBg";
import Chatbot from "../components/Chatbot";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import BackToTop from "../components/BackToTop";
import SectionWrapper from "../components/SectionWrapper";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0b0b0c] text-white overflow-x-hidden">
      
      {/* Navbar */}
      <Navbar /> 

      {/* Particle Background */}
      <ParticlesBg />

      {/* Hero Section */}
      <section
        id="hero"
        className="h-screen flex flex-col justify-center items-center text-center relative z-10 px-4"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Naptile Peter
        </h1>
        <ReactTyped
          strings={[
            "🚀 Full Stack MERN Developer",
            "💡 AI Enthusiast",
            "🎨 Creative Designer",
            "⚡ Tech Professional",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
          className="text-2xl md:text-3xl text-gray-300"
        />
        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          I build modern web applications, AI-driven tools, and stunning digital
          experiences with a futuristic touch.
        </p>
        <a
          href="#projects"
          className="mt-8 px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/30 transition"
        >
          Explore My Work
        </a>
      </section>

      {/* Sections with animations */}
      <SectionWrapper><About /></SectionWrapper>
      <SectionWrapper delay={0.2}><Services /></SectionWrapper>
      <SectionWrapper delay={0.3}><Projects /></SectionWrapper>
      <SectionWrapper delay={0.4}><Testimonials /></SectionWrapper>
      <SectionWrapper delay={0.5}><Contact /></SectionWrapper>

      {/* Chatbot */}
      <div className="fixed bottom-8 right-8 z-50">
        <Chatbot />
      </div>

      {/* Back to Top Button */}
      <BackToTop />
    </main>
  );
}
