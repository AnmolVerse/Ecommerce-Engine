import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import herosection from "../../assets/herosection.jpg";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";

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
    style={{
        height: "400px",
        backgroundImage: `url(${banners[currentBanner]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
    }}
    >
        {/* <img src={herosection} alt="herosection"  width="100%"/> */}
    <h1 style={{ fontSize: "50px", margin: 0 }}>
        Welcome to ShopVerse
    </h1>

    <p
        style={{
        fontSize: "22px",
        marginTop: "20px",
        }}>
        Smart Shopping Powered by AI
    </p>
<Link
  to="/products"
  style={{
    textDecoration: "none",
  }}
>
    <button
        style={{
        marginTop: "30px",
        padding: "12px 30px",
        border: "none",
        borderRadius: "8px",
        backgroundColor: "#FF9D00",
        color: "white",
        fontSize: "18px",
        fontWeight: "bold",
        cursor: "pointer",
        }}>
        Shop Now
    </button></Link>
    </div>
    );
}

export default HeroSection;