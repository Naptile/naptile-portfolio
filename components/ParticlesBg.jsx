"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBg() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        fpsLimit: 120,
        particles: {
          number: { value: 100, density: { enable: true, area: 800 } },
          color: { value: ["#00ffff", "#ff00ff", "#00ff88", "#ffaa00"] }, // neon multicolors
          shape: { type: "circle" },
          opacity: {
            value: 0.8,
            anim: { enable: true, speed: 1, opacity_min: 0.3 },
          },
          size: {
            value: { min: 1, max: 4 },
            anim: { enable: true, speed: 2, size_min: 0.5 },
          },
          links: {
            enable: true,
            distance: 150,
            color: "#00ffff",
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            outModes: { default: "out" },
            attract: { enable: true, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: { enable: true, mode: ["grab", "bubble"] },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            grab: { distance: 200, links: { opacity: 0.7 } },
            bubble: { distance: 250, size: 6, duration: 2, opacity: 0.8 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
