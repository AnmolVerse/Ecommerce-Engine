import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useNavigate } from "react-router-dom";

function OrderSuccess() {
    
  const navigate = useNavigate();

  const orderId =
    "ORD" + Math.floor(Math.random() * 100000);

  return (
    <>
<style>
{`
@keyframes pop {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}
`}
</style>
      <Navbar />

      <div
        style={{
          minHeight: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "15px",
            textAlign: "center",
            boxShadow:
              "0 5px 20px rgba(0,0,0,0.15)",
            maxWidth: "500px",
            width: "100%",
          }}
        >
<div
  style={{
    fontSize: "70px",
    marginBottom: "15px",
    animation: "pop 2s infinite",
  }}
>
  🎉
</div>

          <h1
            style={{
              color: "#28a745",
              marginBottom: "10px",
            }}
          >
            Order Placed Successfully!
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "#555",
            }}
          >
            Thank you for shopping with ShopVerse.
          </p>

          <p
            style={{
              marginTop: "15px",
              fontWeight: "bold",
            }}
          >
            Order ID: #{orderId}
          </p>

          <div
            style={{
              backgroundColor: "#f5f5f5",
              padding: "15px",
              borderRadius: "8px",
              marginTop: "20px",
            }}
          >
            🚚 Estimated Delivery:
            <strong> 6 - 7 Days</strong>
          </div>

          <div
            style={{
              display: "flex",
              gap: "15px",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <button
              onClick={() => navigate("/")}
              style={{
                backgroundColor: "#ff9900",
                color: "white",
                border: "none",
                padding: "12px 20px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Continue Shopping
            </button>

            <button
              onClick={() => navigate("/orders")}
              style={{
                backgroundColor: "#0d6efd",
                color: "white",
                border: "none",
                padding: "12px 20px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              View Orders
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default OrderSuccess;