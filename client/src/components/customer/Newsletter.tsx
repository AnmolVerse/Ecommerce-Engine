function Newsletter() {
return (
    <div
    style={{
        backgroundColor: "#001540",
        color: "white",
        textAlign: "center",
        padding: "60px 20px",
    }}
    >
        <h2>📩 Subscribe to ShopVerse</h2>

        <p>
        Get the latest offers, AI recommendations, and exclusive deals.
        </p>

    <div
        style={{
            marginTop: "20px",
            display: "flex",
                justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
        }}>
        <input
            type="email"
            placeholder="Enter your email"
            style={{
            padding: "12px",
            width: "300px",
            borderRadius: "5px",
            border: "none",
    }}
        />

        <button
            style={{
            backgroundColor: "#FF9D00",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "5px",
            cursor: "pointer",
        }}
        >
            Subscribe
        </button>
        </div>
    </div>
);
}

export default Newsletter;