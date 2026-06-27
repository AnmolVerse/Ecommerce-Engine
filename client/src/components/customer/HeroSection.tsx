import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import herosection from "../../assets/herosection.jpg";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import "./HeroSection.css";

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
<div
className="hero-section"
style={{
    backgroundImage: `url(${banners[currentBanner]})`,
}}
>
        {/* <img src={herosection} alt="herosection"  width="100%"/> */}
   <h1 className="hero-title">
        Welcome to ShopVerse
    </h1>

   <p className="hero-subtitle">
        Smart Shopping Powered by AI
    </p>
<Link
  to="/products"
  style={{
    textDecoration: "none",
  }}
>
  <button className="hero-button">
        Shop Now
    </button></Link>
    </div>
    );
}

export default HeroSection;