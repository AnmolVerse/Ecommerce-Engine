import electronics from "../../assets/categories/Electronic.jpg";
import fashion from "../../assets/categories/Fashion.jpg";
import home from "../../assets/categories/Home.jpg";
import beauty from "../../assets/categories/Beauty.jpg";

function CategorySection() {
return (
    <div
    style={{
        backgroundColor: "#811515",
        padding: "50px 30px",
        }}
    >
    <h2
        style={{
            textAlign: "center",
            fontSize: "35px",
            marginBottom: "40px",
            color: "white",
        }}>
        Shop by Category
    </h2>

    <div
        style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "20px",
            flexWrap: "wrap",
        }}>
        <div style={cardStyle}>
<img
    src={electronics}
    alt="Electronics"
    style={{
        width: "100%",
        height: "150px",
        objectFit: "cover",
        borderRadius: "10px",
    }}/>

    <h3>Electronics</h3>
</div>

        <div style={cardStyle}>
            <img
    src={fashion} alt="Fashion"
    style={{
        width: "100%",
        height: "150px",
        objectFit: "cover",
        borderRadius: "10px",
    }}/>
            <h3>👕 Fashion</h3>
        </div>

        <div style={cardStyle}>
            <img
    src={home} alt="home"
    style={{
        width: "100%",
        height: "150px",
        objectFit: "cover",
        borderRadius: "10px",
    }}/>
            <h3>🏠 Home</h3>
        </div>

        <div style={cardStyle}>
        <img
    src={beauty} alt="Beauty"
    style={{
        width: "100%",
        height: "150px",
        objectFit: "cover",
        borderRadius: "10px",
    }}/>
            <h3>💄 Beauty</h3>
        </div>
        </div>
    </div>
    );
}

const cardStyle = {
    width: "250px",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center" as const,
    boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
    cursor: "pointer",
};

export default CategorySection;