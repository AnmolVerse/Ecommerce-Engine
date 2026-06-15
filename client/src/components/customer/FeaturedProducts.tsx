import { Link } from "react-router-dom";
import earbuds from "../../assets/products/earbud.jpg";
import smartwatch from "../../assets/products/smartwatch.jpg";
import shoes from "../../assets/products/shoes.jpg";
import mouse from "../../assets/products/mouse.jpg";
function FeaturedProducts() {
return (
    <div
        style={{
        padding: "50px 30px",
        backgroundColor: " #cbcaf5",
        }}
    >
        <h2
        style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize : "20px",
            fontWeight : "bold" ,
        }}>
        Featured Products
        </h2>

        <div
        style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "20px",
            flexWrap: "wrap",
        }}>
            <Link
  to="/product-details"
  style={{
    textDecoration: "none",
    color: "inherit",
  }}
>
        <div style={productCard}>
<img
    src={earbuds}
    alt="Earbuds"
    style={{
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "10px",
    }}
/>

<h3>Wireless Earbuds</h3>

<p>⭐⭐⭐⭐⭐</p>

<h2>₹1,999</h2>

<button style={buttonStyle}>
    Add to Cart
</button>
</div></Link>
<Link
  to="/product-details"
  style={{
    textDecoration: "none",
    color: "inherit",
  }}
>
        <div style={productCard}>
<img
    src={smartwatch}
    alt="Smart Watch"
    style={{
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "10px",
    }}
/>

<h3>Smart Watch</h3>

<p>⭐⭐⭐⭐⭐</p>

<h2>₹3,499</h2>

<button style={buttonStyle}>
    Add to Cart
</button>
</div></Link>
<Link
  to="/product-details"
  style={{
    textDecoration: "none",
    color: "inherit",
  }}
>
        <div style={productCard}>
<img
    src={shoes}
    alt="Shoes"
    style={{
    width: "100%",
    height: "180px",
    
    objectFit: "cover",
    borderRadius: "10px",
    }}/>

<h3>Sports Shoes</h3>

<p>⭐⭐⭐⭐⭐</p>

<h2>₹2,799</h2>

<button style={buttonStyle}>
    Add to Cart
</button>
</div></Link>
<Link
  to="/product-details"
  style={{
    textDecoration: "none",
    color: "inherit",
  }}
>
        <div style={productCard}>
<img
    src={mouse}
    alt="Gaming Mouse"
    style={{
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "10px",
    }}
/>

<h3>Gaming Mouse</h3>

<p>⭐⭐⭐⭐⭐</p>

<h2>₹1,299</h2>

<button style={buttonStyle}>
    Add to Cart
</button>
</div></Link>
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