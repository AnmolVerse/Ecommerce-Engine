import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
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
   <nav className="navbar">
      {/* Logo Section */}
   <div className="logo-section">
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
  className="search-box"
  placeholder="🔍 Search products..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  onKeyDown={handleSearch}
/>
      {/* Right Section */}
  <div className="nav-links">
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
    </div>
    </nav>

    {/* // 2nd nav--- */}
 <div className="category-nav">

       <Link to="/" style={{ textDecoration: "none", color: "white" }}>
  <span>☰ Home</span>
</Link>
<a href="/#categories">Categories</a>
<a href="/#deals">Today's Deals</a>
<a href="/#featured">New Arrivals</a>
<a href="/#featured">Best Sellers</a>
<a href="/#aipicks">AI Picks</a>
<a href="/#contact">Contact</a>
    </div>
    </>
    );
}

const menuItemStyle = {
  padding: "12px",
  cursor: "pointer",
  borderBottom: "1px solid #eee",
};

export default Navbar;