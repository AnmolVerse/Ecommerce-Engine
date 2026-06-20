import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useOrders } from "../../context/OrderContext";
import { useNavigate } from "react-router-dom";

function Orders() {
  const { orders } = useOrders();
 const navigate = useNavigate();
  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "50px",
          minHeight: "70vh",
        }}
      >
        <h1 style={{fontWeight:"bolder",
            fontSize:"20px",
        }}>📦 My Orders</h1>

        {orders.length === 0 ? (
          <div
  style={{
    textAlign: "center",
    padding: "80px 20px",
  }}
>
  <h1>📦</h1>

  <h2>No Orders Yet</h2>

  <p>
    Place your first order and
    track it here.
  </p>

  <button
    onClick={() => navigate("/products")}
    style={buttonStyle}
  >
    Shop Now
  </button>
</div>
        ) : (
          orders.map((order) => (
            <div
              key={order.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "25px",
                padding: "20px",
                marginTop: "20px",
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={order.image}
                alt={order.name}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              <div style={{ flex: 1 }}>
                <h2>{order.name}</h2>

                <p>
                  <strong>Order ID:</strong> #{order.id}
                </p>

                <p>
                  <strong>Quantity:</strong> {order.quantity}
                </p>

                <p>
                  <strong>Amount:</strong> ₹
                  {order.price * order.quantity}
                </p>

                <p
                  style={{
                    color: "#ff9900",
                    fontWeight: "bold",
                  }}
                >
                  🚚 Processing
                </p>

                <div
                  style={{
                    marginTop: "10px",
                    fontSize: "14px",
                    color: "#666",
                  }}
                >
                  ✓ Ordered → ✓ Shipped → ○ Delivered
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
<button
  onClick={() =>
  navigate(`/track-order/${order.id}`)
}
  style={{
    backgroundColor: "#0d6efd",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  }}
>
  Track Order
</button>

            <button
  onClick={() =>
    navigate(`/order-details/${order.id}`)
  }
  style={{
    backgroundColor: "#ff9900",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  }}
>
  View Details
</button>
              </div>
            </div>
          ))
        )}
      </div>

      <Footer />
    </>
  );
}
const buttonStyle = {
  padding: "12px 25px",
  backgroundColor: "#ff9900",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
};
export default Orders;