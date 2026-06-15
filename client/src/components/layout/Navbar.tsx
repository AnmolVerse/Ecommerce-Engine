import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Navbar() {
    return (
        <>
    <nav
        style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "4px 15px",
        backgroundColor: "#00043D",
        
        }}>
      {/* Logo Section */}
    <div
        style={{
        display: "flex",
        alignItems: "center",
        // gap: "0px",

        }}>
        <img src={logo} alt="ShopVerse Logo" width="60" />

        <h1
            style={{
            color: "white",
            margin: 0,
            fontSize: "20px" ,
            fontFamily:"font-serif",
            fontWeight:"800",}}>
            ShopVerse
        </h1>
    </div>
     {/* Center */}
    <input
        type="text"
        
        placeholder="🔍 Search products..."
        style={{
        width: "500px",
        padding: "10px",
        color: "white",
        borderRadius: "5px",
        border: "none",
        outline: "none",
        }}/>
      {/* Right Section */}
    <div
        style={{
            display: "flex",
            gap: "20px",
            color: "white",
            fontSize: "18px",
            fontFamily:"font-serif",
        }}>
            <Link
  to="/ai-search"
  style={{
    textDecoration: "none",
  }}
>
    <button
    style={{
        padding: "4px 10px",
        backgroundColor: "#faa112",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "bold",
    }}>
    🤖 AI Search
    </button></Link>
       <Link
  to="/wishlist"
  style={{
    textDecoration: "none",
    color: "inherit",
  }}
> <span>❤️ Wishlist</span></Link>
        <Link
  to="/wishlist"
  style={{
    textDecoration: "none",
    color: "inherit",
  }}
><span>🛒 Cart</span></Link>
       <Link
  to="/wishlist"
  style={{
    textDecoration: "none",
    color: "inherit",
  }}
> <span>👤 Login</span></Link>
    </div>
    </nav>

    {/* // 2nd nav--- */}
    <div
    style={{
        display: "flex",
        gap: "30px",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#10204F",
        color: "white",
        fontWeight: "bold",
        }}>
        <span>☰ All</span>
        <span>Categories</span>
        <span>Today's Deals</span>
        <span>New Arrivals</span>
        <span>Best Sellers</span>
        <span>🤖 AI Picks</span>
        <span>Orders</span>
        <span>Contact</span>
    </div>
    </>
    );
}

export default Navbar;