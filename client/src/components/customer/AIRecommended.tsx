import { aiProducts } from "../../data/aiProducts";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "../../styles/ProductGrid.css";
function AIRecommended() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  return (
    <div
      style={{
        padding: "50px 30px",
        backgroundColor: "#e4daf8",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        🤖 AI Recommends For You
      </h2>

     <div className="product-grid">
        {aiProducts.map((product) => (
<Link
  key={product.id}
  to={`/product-details/${product.id}`}
  style={{
    textDecoration: "none",
    color: "inherit",
  }}
>
 <div className="product-card">
              <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <h3>{product.name}</h3>

            <p>⭐⭐⭐⭐⭐ ({product.rating})</p>

            <h2>₹{product.price.toLocaleString()}</h2>
<button
  style={buttonStyle}
  onClick={(e) => {
    e.preventDefault();

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      rating: product.rating,
    });

    navigate("/checkout");
  }}
>
  Buy Now
</button>
          </div>
</Link>
        ))}
      </div>
    </div>
  );
}

// const productCard = {
//   width: "250px",
//   backgroundColor: "white",
//   padding: "15px",
//   borderRadius: "10px",
//   textAlign: "center" as const,
//   boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
// };

const buttonStyle = {
  backgroundColor: "#f61212",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
};

export default AIRecommended;