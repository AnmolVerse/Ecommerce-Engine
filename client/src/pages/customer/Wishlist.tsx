import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Wishlist() {
  const navigate = useNavigate();
  const [showMovePopup, setShowMovePopup] = useState(false);
  const { wishlistItems, removeFromWishlist } = useWishlist();
const { addToCart } = useCart();
  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "50px",
          minHeight: "60vh",
        }}
      >
        <h1 style={{ 
    fontSize:"20px",
  }}>❤️ My Wishlist</h1>

        {wishlistItems.length === 0 ? (
          <div
  style={{
    textAlign: "center",
    marginTop: "100px",
  }}
>
  <h1 style={{ color: "#ff4d6d" ,
    fontSize:"20px",
  }}>
    ❤️ Your Wishlist is Empty
  </h1>

  <p
    style={{
      color: "#666",
      fontSize: "18px",
    }}
  >
    Browse products and save your favorites.
  </p>
</div>
        ) : (
          wishlistItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginTop: "20px",
                padding: "15px",
                border: "1px solid #ddd",
                borderRadius: "10px",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                }}
              />

<div>
  <h3>{item.name}</h3>
  <p>₹{item.price}</p>
  <p>⭐ {item.rating}</p>
</div>

<div
  style={{
    marginLeft: "auto",
    display: "flex",
    fontSize:"20px",
    gap: "20px",
  }}
>
<button
  onClick={() =>
    navigate(`/product-details/${item.id}`)
  }
  style={{
    backgroundColor: "#10204F",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  }}
>
  View Product
</button>
  <button
  onClick={() => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      rating: item.rating,
    });

    removeFromWishlist(item.id);

    setShowMovePopup(true);

    setTimeout(() => {
      setShowMovePopup(false);
    }, 2000);
  }}
  style={{
    backgroundColor: "#ff9900",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "15px", // ← add this
  }}
>
  Move To Cart
</button>

  <button
    onClick={() => removeFromWishlist(item.id)}
    style={{
      backgroundColor: "#ff3333",
      color: "white",
      border: "none",
      padding: "10px 15px",
      borderRadius: "5px",
      cursor: "pointer",
    }}
  >
    Remove
  </button>
</div>
            </div>
          ))
        )}
      </div>
      {showMovePopup && (
  <div
    style={{
      position: "fixed",
      top: "20px",
      right: "20px",
      backgroundColor: "#057e1f",
      color: "white",
      padding: "15px 25px",
      borderRadius: "8px",
      fontSize:"18px",
      fontWeight: "bold",
      boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
      zIndex: 1000,
    }}
  >
    🛒 Product Moved To Cart!
  </div>
)}
      <Footer />
    </>
  );
}

export default Wishlist;