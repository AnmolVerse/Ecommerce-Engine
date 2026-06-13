import deal1 from "../../assets/deal/deal1.webp";
import deal2 from "../../assets/deal/deal2.jpg";
import deal3 from "../../assets/deal/deal3.webp";
import deal4 from "../../assets/deal/deal4.png";
function Deals() {
return (
    <div
        style={{
        padding: "50px 30px",
        backgroundColor: "#efe4fb",
    }}
    >
        <h2
        style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize : "25px",
            fontWeight : "bold" ,
        }}
    >
        🔥 Deals of the Day
    </h2>

    <div
        style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "20px",
            flexWrap: "wrap",
        }}>
        <div style={cardStyle}>
            <img src={deal1} style={imgStyle} />
            <h3>Shark Flex Fusion Hair Straightener</h3>
            <p>40% OFF</p>
            <h2>INR 28,533</h2>
            
            <button style={buttonStyle}>Buy Now</button>
        </div>

        <div style={cardStyle}>
            <img src={deal2} style={imgStyle} />
            <h3>Instant Pot Duo 7-in-1 Electric Pressure Cooker</h3>
            <p>50% OFF</p>
            <h2>INR 6,181.</h2>
            <button style={buttonStyle}>Buy Now</button>
        </div>

        <div style={cardStyle}>
            <img src={deal3} style={imgStyle} />
            <h3>Shark Stratos | 2-in-1 Robot Vacuum & Mop for Carpets & Hard Floors</h3>
            <p>60% OFF</p>
            <h2> INR 40,898</h2>
            <button style={buttonStyle}>Buy Now</button>
        </div>

        <div style={cardStyle}>
            <img src={deal4} style={imgStyle} />
            <h3>Google Pixel Watch 4 (45mm)</h3>
            <p>20% OFF</p>
            <h2>INR 41,849</h2>
            <button style={buttonStyle}>Buy Now</button>
        </div>
    </div>
    </div>
);
}

const cardStyle = {
    
    width: "250px",
    backgroundColor: "white",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center" as const,
    boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
    
};

const imgStyle = {
    width: "100%",
    height: "180px",
    objectFit: "cover" as const,
    borderRadius: "10px",
};

const buttonStyle = {
    backgroundColor: "#FF9D00",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
};

export default Deals;