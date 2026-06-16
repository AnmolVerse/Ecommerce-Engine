
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import { similarProducts } from "../../data/similarProducts";
import { productDetails } from "../../data/productDetails";
function ProductDetails() {
const { id } = useParams();



const product = productDetails.find(
  (item) => item.id === Number(id)
);

const [selectedImage, setSelectedImage] = useState(
  product?.images[0] || ""
);

if (!product) {
  return <h1>Product Not Found</h1>;
}
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
        width: "450px",
        height : "450px",
        borderRadius: "10px",
       
                   

}}
/>

<div
    style={{
        display: "flex",
        gap: "10px",
        marginTop: "15px",
        height: "200px",
    }}
>
    <img
src={product?.images[0]}
onClick={() => setSelectedImage(product?.images[0])}
    />

    <img
src={product?.images[1]}
onClick={() => setSelectedImage(product?.images[1])}
    />

    <img
src={product?.images[2]}
onClick={() => setSelectedImage(product?.images[2])}
    />

    <img
src={product?.images[3]}
onClick={() => setSelectedImage(product?.images[3])}
    />
    </div>

</div>

        {/* Product Information */}

        <div style={{ maxWidth: "800px",
          fontSize:"20px",
         }}>
            <h1>{product?.name}</h1>

            <p style={{ fontSize: "30px", color: "gold" }}>
            ⭐⭐⭐⭐⭐ ({product?.rating})
            </p>

            <h2 style={{ color: "#ff9900" }}>
            ₹{product?.price}
            </h2>

            <p>
            {product?.description}
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
    fontSize:"20px",
    }}
>
    <h3>Product Details</h3>

    <p><strong>Brand:</strong> {product?.brand}</p>

<p><strong>Category:</strong> {product?.category}</p>
<p><strong>Availability:</strong> {product?.availability}</p>
<p><strong>Free Delivery:</strong> {product?.delivery}</p>
<p><strong>Return Policy:</strong> {product?.returnPolicy}</p></div>
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
   {similarProducts.map((item) => (
  <div
    key={item.id}
    style={{
      width: "220px",
      backgroundColor: "white",
      padding: "15px",
      borderRadius: "10px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
    }}
  >
    <img
      src={item.image}
      alt={item.name}
      style={{
        width: "100%",
        height: "220px",
        objectFit: "cover",
      }}
    />

    <h3>{item.name}</h3>

    <p>⭐⭐⭐⭐⭐ ({item.rating})</p>

    <h2>₹{item.price}</h2>

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
))}
    
  </div>
</div>

<Footer />


</>
);
}

export default ProductDetails;