import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import card1 from "../../assets/productDetails/card1.jpg";
import card2 from "../../assets/productDetails/card2.jpg";
import card3 from "../../assets/productDetails/card3.jpg";
import { productDetails } from "../../data/productDetails";
function ProductDetails() {

const [selectedImage, setSelectedImage] =
  useState(productDetails.images[0]);
return (
    <>
        <Navbar />

        <div
        style={{
            padding: "50px",
            display: "flex",
            gap: "50px",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
        }}
>
        {/* Product Image */}

       {/* Product Image */}

<div>

    <img
    src={selectedImage}
    alt="product"
    style={{
        width: "350px",
        borderRadius: "10px",
}}
/>

<div
    style={{
        display: "flex",
        gap: "10px",
        marginTop: "15px",
    }}
>
    <img
src={productDetails.images[0]}       onClick={() => setSelectedImage(productDetails.images[0])}
        style={{ width: "70px", cursor: "pointer" }}
    />

    <img
src={productDetails.images[1]}        onClick={() => setSelectedImage(productDetails.images[1])}
        style={{ width: "70px", cursor: "pointer" }}
    />

    <img
src={productDetails.images[2]}        onClick={() => setSelectedImage(productDetails.images[2])}
        style={{ width: "70px", cursor: "pointer" }}
    />

    <img
src={productDetails.images[3]}        onClick={() => setSelectedImage(productDetails.images[3])}
        style={{ width: "70px", cursor: "pointer" }}
    />
    </div>

</div>

        {/* Product Information */}

        <div style={{ maxWidth: "500px" }}>
            <h1>{productDetails.name}</h1>

            <p style={{ fontSize: "20px", color: "gold" }}>
            ⭐⭐⭐⭐⭐ ({productDetails.rating})
            </p>

            <h2 style={{ color: "#ff9900" }}>
            ₹{productDetails.price}
            </h2>

            <p>
            {productDetails.description}
            </p>
            
            <button
            style={{
                backgroundColor: "#ff9900",
                color: "white",
                border: "none",
                padding: "12px 25px",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "15px",
            }}
        >
            
            Add to Cart
        </button>

        <button
            style={{
                backgroundColor: "#ff3333",
                color: "white",
                border: "none",
                padding: "12px 25px",
                borderRadius: "5px",
                cursor: "pointer",
            }}
>
            Buy Now
            </button>
            <div
    style={{
    marginTop: "25px",
    lineHeight: "1.8",
    }}
>
    <h3>Product Details</h3>

    <p><strong>Brand:</strong> {productDetails.brand}</p>

<p><strong>Category:</strong> {productDetails.category}</p>
<p><strong>Availability:</strong> {productDetails.availability}</p>
<p><strong>Free Delivery:</strong> {productDetails.delivery}</p>
<p><strong>Return Policy:</strong> {productDetails.returnPolicy}</p></div>
        </div>
    </div>
<div
  style={{
    padding: "50px",
    textAlign: "center",
  }}
>
  <h2>🛍️ Similar Products</h2>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
      marginTop: "30px",
    }}
  >
    {/* Card 1 */}

    <div
      style={{
        width: "220px",
        backgroundColor: "white",
        padding: "15px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
      }}
    >
      <img
        src={card1}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />

      <h3>Gaming Headset</h3>

      <p>⭐⭐⭐⭐⭐</p>

      <h2>₹2,499</h2>

      <button
        style={{
          backgroundColor: "#ff9900",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        View
      </button>
    </div>

    {/* Card 2 */}

    <div
      style={{
        width: "220px",
        backgroundColor: "white",
        padding: "15px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
      }}
    >
      <img
        src={card2}
        style={{
          width: "100%",
          height: "240px",
          objectFit: "cover",
        }}
      />

      <h3>Smart Watch</h3>

      <p>⭐⭐⭐⭐⭐</p>

      <h2>₹1,999</h2>

      <button
        style={{
          backgroundColor: "#ff9900",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        View
      </button>
    </div>

    {/* Card 3 */}

    <div
      style={{
        width: "220px",
        backgroundColor: "white",
        padding: "15px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
      }}
    >
      <img
        src={card3}
        style={{
          width: "100%",
          height: "270px",
          objectFit: "cover",
        }}
      />

      <h3>Speaker</h3>

      <p>⭐⭐⭐⭐⭐</p>

      <h2>₹3,499</h2>

      <button
        style={{
          backgroundColor: "#ff9900",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        View
      </button>
    </div>
  </div>
</div>

<Footer />


</>
);
}

export default ProductDetails;