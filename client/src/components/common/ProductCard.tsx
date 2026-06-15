import { Link } from "react-router-dom";
type ProductCardProps = {
image: string;
name: string;
price: number;
rating: number;
};

function ProductCard({
image,
name,
price,

}: ProductCardProps) {
return (
  <Link
  to="/product-details"
  style={{
    textDecoration: "none",
    color: "inherit",
  }}
>
  <div
    style={{
      width: "220px",
      backgroundColor: "white",
      padding: "15px",
      borderRadius: "10px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
      cursor: "pointer",
    }}
  >
    <img
      src={image}
      alt={name}
      style={{
        width: "100%",
        height: "180px",
        objectFit: "cover",
      }}
    />

    <h3>{name}</h3>

    <p>⭐⭐⭐⭐⭐</p>

    <h2>₹{price}</h2>

    <button
      style={{
        backgroundColor: "#ff9900",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
      }}
    >
      View Details
    </button>
      </div>
    </Link>
  );
}

export default ProductCard;