import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import herosection from "../../assets/herosection.jpg";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import "./HeroSection.css";
import { motion } from "framer-motion";

function HeroSection() {
    const banners = [herosection,banner1, banner2, banner3];

const [currentBanner, setCurrentBanner] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
}, []);
return (
<motion.div
className="hero-section"
style={{
  backgroundImage: `url(${banners[currentBanner]})`,
}}
initial={{ scale: 1.1, opacity: 0 }}
animate={{ scale: 1, opacity: 1 }}
transition={{
  duration: 1.5,
}}
>
        {/* <img src={herosection} alt="herosection"  width="100%"/> */}
<motion.h1
className="hero-title"
initial={{
  opacity: 0,
  y: 60,
}}
animate={{
  opacity: 1,
  y: 0,
}}
transition={{
  delay: 0.5,
  duration: 0.8,
}}
>        Welcome to ShopVerse
</motion.h1>
<motion.p
className="hero-subtitle"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{
  delay: 1,
  duration: 0.8,
}}
>        Smart Shopping Powered by AI
</motion.p><Link
  to="/products"
  style={{
    textDecoration: "none",
  }}
>
<motion.button
className="hero-button"
whileHover={{
  scale: 1.08,
  boxShadow: "0 0 30px #ff9800",
}}
whileTap={{
  scale: 0.95,
}}
animate={{
  y: [0, -4, 0],
}}
transition={{
  y: {
    repeat: Infinity,
    duration: 2,
    ease: "easeInOut",
  },
}}
>        Shop Now
   </motion.button></Link>
    </motion.div>
    );
}

export default HeroSection;