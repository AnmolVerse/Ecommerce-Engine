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
rating,
}: ProductCardProps) {
return (
    <div
    style={{
        width: "250px",
        backgroundColor: "white",
        padding: "15px",
        borderRadius: "10px",
        textAlign: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
        cursor: "pointer",
        transition: "0.3s",
    }}
    >
    <img
        src={image}
        alt={name}
        style={{
        width: "100%",
        height: "180px",
        objectFit: "cover",
        borderRadius: "10px",
        transition: "0.3s",
        }}
    />

    <h3>{name}</h3>

    <p>⭐⭐⭐⭐⭐ ({rating})</p>

    <h2>₹{price}</h2>

<button
    style={{
    backgroundColor: "#ff9900",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    }}
>
    Add to Cart
</button>
    </div>
);
}

export default ProductCard;