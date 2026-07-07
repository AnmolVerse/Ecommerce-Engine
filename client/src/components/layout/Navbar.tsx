import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { motion } from "framer-motion";
import "./Navbar.css";

function Navbar() {
  const isLoggedIn =
  localStorage.getItem("isLoggedIn") === "true";
  const { wishlistItems } = useWishlist();
  const { cartItems } = useCart();
  const [search, setSearch] = useState("");
  const [showMenu, setShowMenu] = useState(false);
const navigate = useNavigate();

const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === "Enter") {
    navigate(`/products?search=${search}`);
  }
};
    return (
        <>
<motion.nav
  className="navbar"
  initial={{ y: -80, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
>      {/* Logo Section */}
   <motion.div
  className="logo-section"
  initial={{ x: -80, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{
    delay: 0.3,
    duration: 0.7,
  }}
>
<motion.img
  src={logo}
  alt="ShopVerse Logo"
  width="60"
  animate={{
    y: [0, -4, 0],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
        <h1
            style={{
            color: "white",
            margin: 0,
            fontSize: "20px" ,
            fontFamily:"font-serif",
            fontWeight:"800",}}>
            ShopVerse
        </h1>
   </motion.div>
     {/* Center */}
<motion.input
initial={{ opacity: 0, y: -20 }}
animate={{ opacity: 1, y: 0 }}
transition={{
  delay: 0.5,
  duration: 0.6,
}}
  type="text"
  className="search-box"
  placeholder="🔍 Search products..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  onKeyDown={handleSearch}
/>
      {/* Right Section */}
<motion.div
  className="nav-links"
  initial={{ x: 80, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{
    delay: 0.7,
    duration: 0.7,
  }}>
{/* >            <Link
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
    </button></Link> */}
       <Link
  to="/wishlist"
  style={{
    textDecoration: "none",
    color: "inherit",
  }}
> <span>
  ❤️ Wishlist ({wishlistItems.length})
</span></Link>
        <Link
  to="/cart"
  style={{
    textDecoration: "none",
    color: "inherit",
  }}
><span>
  🛒 Cart ({cartItems.length})
</span></Link>
{isLoggedIn ? (
  <div
    style={{
      position: "relative",
      cursor: "pointer",
    }}
  >
    <span
      onClick={() =>
        setShowMenu(!showMenu)
      }
    >
      👤 {localStorage.getItem("profileName") || "User"} ▼
    </span>

    {showMenu && (
      <div
        style={{
          position: "absolute",
          top: "35px",
          right: 0,
          backgroundColor: "white",
          color: "black",
          borderRadius: "8px",
          minWidth: "150px",
          boxShadow:
            "0 2px 10px rgba(0,0,0,0.2)",
          zIndex: 1000,
        }}
      >
        <div
          onClick={() =>
            navigate("/profile")
          }
          style={menuItemStyle}
        >
          👤 Profile
        </div>

        <div
          onClick={() =>
            navigate("/orders")
          }
          style={menuItemStyle}
        >
          📦 Orders
        </div>

        <div
          onClick={() => {
            localStorage.removeItem(
              "isLoggedIn"
            );

            navigate("/login");

            window.location.reload();
          }}
          style={menuItemStyle}
        >
          🚪 Logout
        </div>
      </div>
    )}
  </div>
) : (
  <Link
    to="/login"
    style={{
      color: "white",
      textDecoration: "none",
    }}
  >
    👤 Login
  </Link>
)}
</motion.div>   </motion.nav>

    {/* // 2nd nav--- */}
<motion.div
  className="category-nav"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    delay: 1,
    duration: 0.6,
  }}
>
       <Link to="/" style={{ textDecoration: "none", color: "white" }}>
  <span>☰ Home</span>
</Link>
<a href="/#categories">Categories</a>
<a href="/#deals">Today's Deals</a>
<a href="/#featured">New Arrivals</a>
<a href="/#featured">Best Sellers</a>
<a href="/#aipicks">AI Picks</a>
<a href="/#contact">Contact</a>
</motion.div>    </>
    );
}

const menuItemStyle = {
  padding: "12px",
  cursor: "pointer",
  borderBottom: "1px solid #eee",
};

export default Navbar;