import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  if (process.env.NODE_ENV === "test") {
    return <div id="tsparticles" aria-hidden="true" />;
  }

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: false },
        fpsLimit: 45,
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
            density: { enable: true, area: 1000 },
            value: 38,
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
