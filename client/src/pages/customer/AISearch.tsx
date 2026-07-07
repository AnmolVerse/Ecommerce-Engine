import { useState } from "react";
import { aiProducts } from "../../data/aiProducts";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useNavigate } from "react-router-dom";

function AISearch() {
  const [searchTerm, setSearchTerm] =
    useState("");
const navigate = useNavigate();
  const filteredProducts =
    aiProducts.filter((product) =>
      product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

  return (
  <>
    <Navbar />

    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
<div
  style={{
    textAlign: "center",
    marginBottom: "30px",
  }}
>
  <h1>🤖 AI Powered Search</h1>

  <p
    style={{
      color: "gray",
      fontSize: "18px",
    }}
  >
    Discover products recommended by AI
  </p>

  <input
    type="text"
    placeholder="Search Products..."
    value={searchTerm}
    onChange={(e) =>
      setSearchTerm(e.target.value)
    }
    style={{
      width: "400px",
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      marginTop: "20px",
    }}
  />
</div>


      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              width: "250px",
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "15px",
              boxShadow:
                "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <h3>{product.name}</h3>

            <p>⭐ {product.rating}</p>

            <h2>₹{product.price}</h2>

<button
 onClick={() =>
  navigate(`/product-details/${product.id}`)
}
  style={{
    width: "100%",
    padding: "10px",
    backgroundColor: "#ff9900",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  }}
>
  View Product
</button>
          </div>
        ))}
      </div>
    </div>
    <Footer />
 </> );
}

export default AISearch;