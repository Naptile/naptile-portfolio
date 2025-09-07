"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add background when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Projects", to: "projects" },
    { name: "Testimonials", to: "testimonials" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/40 backdrop-blur-md border-b border-white/10 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with glow */}
        <Link
          to="hero"
          smooth={true}
          duration={600}
          offset={-70}
          className="relative text-2xl font-bold text-blue-400 cursor-pointer group"
        >
          Naptile
          <span className="absolute inset-0 rounded-lg blur-md opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition bg-blue-500"></span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          {navLinks.map((link, i) => (
            <li key={i} className="relative group">
              <Link
                to={link.to}
                smooth={true}
                duration={600}
                spy={true}
                offset={-70}
                activeClass="active-link"
                className="cursor-pointer relative transition hover:text-blue-400 hover:drop-shadow-[0_0_6px_#3b82f6]"
              >
                {link.name}
              </Link>

              {/* Underline effect */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md border-t border-white/10">
          <ul className="flex flex-col items-center space-y-6 py-6 text-gray-300">
            {navLinks.map((link, i) => (
              <li key={i} className="relative group">
                <Link
                  to={link.to}
                  smooth={true}
                  duration={600}
                  spy={true}
                  offset={-70}
                  activeClass="active-link"
                  className="cursor-pointer transition hover:text-blue-400 hover:drop-shadow-[0_0_6px_#3b82f6]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>

                {/* Underline effect */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
