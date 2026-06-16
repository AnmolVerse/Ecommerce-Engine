import { aiProducts } from "../../data/aiProducts";

function AIRecommended() {
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

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {aiProducts.map((product) => (
          <div
            key={product.id}
            style={productCard}
          >
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

            <button style={buttonStyle}>
              Buy Now
            </button>
          </div>
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
  backgroundColor: "#f61212",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
};

export default AIRecommended;