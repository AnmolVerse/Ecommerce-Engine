import ai1 from "../../assets/ai/ai1.jpg";
import ai2 from "../../assets/ai/ai2.jpg";
import ai3 from "../../assets/ai/ai3.jpg";
import ai4 from "../../assets/ai/ai4.jpg";
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
            fontSize : "20px",
            fontWeight : "bold" ,
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
        }}>
        <div style={productCard}>
<img
    src={ai1}
    alt="AI Product"
    style={{
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "10px",
    }}
/>

<h3>Samsung Galaxy S26</h3>

<p>⭐⭐⭐⭐⭐ (4.7)</p>

<h2>₹74,703</h2>

<button style={buttonStyle}>
    Buy Now
</button>
</div>
        <div style={productCard}>
<img
    src={ai2}
    alt="AI Product"
    style={{
        width: "100%",
        height: "180px",
        objectFit: "cover",
        borderRadius: "10px",
    }}
/>

<h3>Levoit Tower Fan</h3>

<p>⭐⭐⭐⭐⭐ (4.6)</p>

<h2>₹5,229</h2>

<button style={buttonStyle}>
Buy Now
</button>
</div>

<div style={productCard}>
<img
    src={ai3}
    alt="AI Product"
    style={{
        width: "100%",
        height: "180px",
        objectFit: "cover",
        borderRadius: "10px",
    }}
/>

<h3>Ninja Blast Max Blender</h3>

<p>⭐⭐⭐⭐⭐ (4.3)</p>

<h2>₹6,656</h2>

<button style={buttonStyle}>
Buy Now
</button>
</div>

<div style={productCard}>
<img
    src={ai4}
    alt="AI Product"
    style={{
        width: "100%",
        height: "180px",
        objectFit: "cover",
        borderRadius: "10px",
    }}
/>

    <h3>Women's Maxi Dress</h3>

<p>⭐⭐⭐⭐⭐ (4.3)</p>

<h2>₹3,329</h2>

<button style={buttonStyle}>
    Buy Now
</button>
</div>


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