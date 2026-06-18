import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useOrders } from "../../context/OrderContext";
import { useState } from "react";

function Checkout() {
    const { addOrder } = useOrders();
    const { cartItems, clearCart } = useCart();
    const [fullName, setFullName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [address, setAddress] = useState("");
const [city, setCity] = useState("");
const [pincode, setPincode] = useState("");
const total = cartItems.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);
    const navigate = useNavigate();
  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "50px",
          minHeight: "70vh",
          display: "flex",
          gap: "40px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {/* Address Form */}
        <div
          style={{
            width: "500px",
            background: "white",
            padding: "25px",
            borderRadius: "10px",
            boxShadow: "0 10px 50px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{fontWeight:"bolder",
            fontSize:"20px",
          }}>Delivery Address</h2>

          <input
  type="text"
  placeholder="Full Name"
  value={fullName}
  onChange={(e) => setFullName(e.target.value)}
  style={inputStyle}
/>

         <input
  type="text"
  placeholder="Phone Number"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  style={inputStyle}
/>

         <input
  type="text"
  placeholder="Email Address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  style={inputStyle}
/>


         <textarea
  placeholder="Full Address"
  value={address}
  onChange={(e) => setAddress(e.target.value)}
  style={{
    ...inputStyle,
    height: "100px",
  }}
/>

        <input
  type="text"
  placeholder="City"
  value={city}
  onChange={(e) => setCity(e.target.value)}
  style={inputStyle}
/>

        <input
  type="text"
  placeholder="Pincode"
  value={pincode}
  onChange={(e) => setPincode(e.target.value)}
  style={inputStyle}
/>
        </div>

        {/* Order Summary */}
        <div
          style={{
            width: "350px",
            background: "white",
            padding: "25px",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            height: "fit-content",fontSize:"20px",
          }}
        >
          <h2 style={{fontWeight:"bolder",}}>
            Order Summary</h2>

<p>
  Items:{" "}
  {cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  )}
</p>          <p>Delivery: Free</p>

          <hr />

         <h3 style={{fontWeight:"bolder",}}>Total: ₹{total}</h3>

<button
 onClick={() => {
  const orderData = cartItems.map((item) => ({
    ...item,
    fullName,
    phone,
    email,
    address,
    city,
    pincode,
  }));

  addOrder(orderData);

  clearCart();

  navigate("/order-success");
}}
>
  <h2 style={{
  width: "100%",
  marginTop: "20px",
  padding: "15px",
  background: "linear-gradient(135deg,#ff9900,#ff7700)",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "18px",
  boxShadow: "0 4px 15px rgba(255,153,0,0.3)",
}}>  Place Order  </h2>
</button>
        </div>
      </div>

      <Footer />
    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "15px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  boxSizing: "border-box" as const,
};

export default Checkout;