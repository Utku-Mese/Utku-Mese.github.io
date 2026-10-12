import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  const reduceMotion = typeof window !== "undefined"
    && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (process.env.NODE_ENV === "test" || reduceMotion) {
    return <div id="tsparticles" aria-hidden="true" />;
  }

  const isSmallScreen = window.matchMedia("(max-width: 767px)").matches;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: false },
        fpsLimit: 40,
        particles: {
          color: { value: "#9af7db" },
          links: { enable: false },
          move: {
            direction: "top",
            enable: true,
            outModes: { default: "out" },
            random: true,
            speed: 0.22,
          },
          number: {
            density: { enable: true, area: 1200 },
            value: isSmallScreen ? 14 : 28,
          },
          opacity: { value: 0.22 },
          size: { random: true, value: 1.6 },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Particle;
