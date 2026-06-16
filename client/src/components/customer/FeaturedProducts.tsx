import { Link } from "react-router-dom";
import { featuredProducts } from "../../data/featuredProducts";

function FeaturedProducts() {
  return (
    <div
      style={{
        padding: "50px 30px",
        backgroundColor: "#cbcaf5",
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
        Featured Products
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {featuredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product-details/${product.id}`}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div style={productCard}>
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              <h3>{product.name}</h3>

              <p>⭐⭐⭐⭐⭐ ({product.rating})</p>

              <h2>₹{product.price}</h2>

              <button style={buttonStyle}>
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const productCard = {
  width: "250px",
  backgroundColor: "white",
  padding: "15px",
  borderRadius: "10px",
  textAlign: "center" as const,
  boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
};

const buttonStyle = {
  backgroundColor: "#FF9D00",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
};

export default FeaturedProducts;