function Reviews() {
return (
    <div
    style={{
        padding: "50px 30px",
        backgroundColor: "#ffffff",
    }}
    >
    <h2
        style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize : "25px",
            
        }}>
        ⭐ Customer Reviews
    </h2>

    <div
        style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "20px",
            flexWrap: "wrap",
        }}
>
        <div style={reviewCard}>
            <h3>👩 Priya Sharma</h3>
            <p>⭐⭐⭐⭐⭐</p>
            <p>Amazing quality products and fast delivery!</p>
        </div>

        <div style={reviewCard}>
            <h3>👨 Rahul Verma</h3>
            <p>⭐⭐⭐⭐⭐</p>
            <p>Very good shopping experience.</p>
        </div>

        <div style={reviewCard}>
            <h3>👩 Anjali Gupta</h3>
            <p>⭐⭐⭐⭐☆</p>
            <p>Beautiful UI and easy ordering process.</p>
        </div>
    </div>
    </div>
);
}

const reviewCard = {
width: "300px",
backgroundColor: "#f5f5f5",
padding: "20px",
borderRadius: "10px",
textAlign: "center" as const,
boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
};

export default Reviews;