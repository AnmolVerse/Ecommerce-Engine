import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Cart() {
  const navigate = useNavigate();
 const {
  cartItems,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = useCart();
   const totalPrice = cartItems.reduce(
  (total, item) =>
    total + item.price * item.quantity,
  0
);
  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "50px",
          minHeight: "60vh",
          fontSize: "20px",
        }}
      >
        <h1>🛒 My Cart</h1>

        {cartItems.length === 0 ? (
          <h2>Your Cart is Empty</h2>
        ) : (
          <>
            {cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  marginTop: "20px",
                  padding: "15px",
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />

               <div>
  <h3>{item.name}</h3>

  <p>
    ₹{item.price} × {item.quantity}
  </p>

  <p>
    Subtotal: ₹{item.price * item.quantity}
  </p>

  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginTop: "10px",
    }}
  >
    <button
  onClick={() => decreaseQuantity(item.id)}
  style={{
    width: "30px",
    height: "30px",
    border: "none",
    backgroundColor: "#ff9900",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  }}
>
  -
</button>

<span
  style={{
    fontWeight: "bold",
    fontSize: "18px",
  }}
>
  {item.quantity}
</span>

<button
  onClick={() => increaseQuantity(item.id)}
  style={{
    width: "30px",
    height: "30px",
    border: "none",
    backgroundColor: "#ff9900",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  }}
>
  +
</button>
  </div>

  <p>⭐ {item.rating}</p>
</div>

               <div
  style={{
    marginLeft: "auto",
    display: "flex",
    gap: "15px",
    alignItems: "center",
  }}
>
  <Link to={`/product-details/${item.id}`}>
    <button
      style={{
        backgroundColor: "#190463",
        color: "white",
        border: "none",
        padding: "10px 15px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      View Product
    </button>
  </Link>

  <button
    onClick={() => removeFromCart(item.id)}
    style={{
      backgroundColor: "#ff3333",
      color: "white",
      border: "none",
      padding: "10px 15px",
      borderRadius: "5px",
      cursor: "pointer",
    }}
  >
    Remove
  </button>
</div>
              </div>
            ))}
           <div
  style={{
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
  }}
>
  <div
    style={{
      width: "350px",
      backgroundColor: "white",
      padding: "25px",
      borderRadius: "10px",
      boxShadow: "0 10px 50px rgba(0,0,0,0.15)",
      textAlign: "center",
    }}
  >
    <h2
      style={{
        marginBottom: "15px",
      }}
    >
      Order Summary
    </h2>

    <h1
      style={{
        color: "#0c0c0c",
        marginBottom: "20px",
        fontWeight:"bold",
      }}
    >
      Total : ₹{totalPrice}
    </h1>

    <button
      onClick={() => navigate("/checkout")}
      style={{
        width: "100%",
        backgroundColor: "#ff9900",
        color: "white",
        border: "none",
        padding: "14px",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "18px",
        fontWeight: "bold",
      }}
    >
      Proceed to Checkout
    </button>
  </div>
</div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Cart;