import { motion } from "framer-motion";
import { useEffect } from "react";
import logo from "../../assets/logo.png";
import "./SplashScreen.css";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

type SplashProps = {
  onFinish: () => void;
};

function SplashScreen({ onFinish }: SplashProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  const particlesInit = async (engine: Engine) => {
  await loadSlim(engine);
};
  return (
    <>
    <Particles
  id="tsparticles"
  init={particlesInit}
  options={{
    fullScreen: {
      enable: true,
      zIndex: -1,
    },

    background: {
      color: {
        value: "#03071E",
      },
    },

    fpsLimit: 60,

    particles: {
      number: {
        value: 90,
      },

      color: {
        value: "#4FC3F7",
      },

      links: {
        enable: true,
        color: "#3B82F6",
        distance: 160,
        opacity: 0.4,
        width: 1,
      },

      move: {
        enable: true,
        speed: 1,
      },

      opacity: {
        value: 0.6,
      },

      size: {
        value: {
          min: 2,
          max: 4,
        },
      },
    },

    detectRetina: true,
  }}
/>
    <div className="splash-container">
      <motion.img
        src={logo}
        alt="ShopVerse"
        className="splash-logo"
        initial={{ scale: 0, rotate: -180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        ShopVerse
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        Smart Shopping Powered by AI
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="loading"
      >
        Loading...
      </motion.div>
    </div></>
  );
}

export default SplashScreen;