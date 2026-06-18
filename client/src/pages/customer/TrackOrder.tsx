import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useParams } from "react-router-dom";
import { useOrders } from "../../context/OrderContext";

function TrackOrder() {
    const { id } = useParams();
const { orders } = useOrders();

const order = orders.find(
  (item) => item.id === Number(id)
);

if (!order) {
  return <h1>Order Not Found</h1>;
}
  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "50px",
          minHeight: "70vh",
        }}
      >
        <h1>🚚 Track Order</h1>

        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            marginTop: "20px",
          }}
        >
         Order #{order.id}
            
          <p>
            Product: {order.name}
          </p>
        ₹{order.price * order.quantity}
          <p>
            Estimated Delivery:
            <strong> 6-7 Days</strong>
          </p>
<div
  style={{
    marginTop: "15px",
    display: "inline-block",
    backgroundColor: "#fff3cd",
    color: "#856404",
    padding: "8px 15px",
    borderRadius: "20px",
    fontWeight: "bold",
  }}
>
  🚚 Out For Delivery
</div>


          <div
            style={{
              marginTop: "40px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={circleStyle}>✓</div>
              <p>Ordered</p>
            </div>

            <div style={lineStyle}></div>

            <div style={{ textAlign: "center" }}>
              <div style={circleStyle}>✓</div>
              <p>Shipped</p>
            </div>

            <div style={lineStyle}></div>

            <div style={{ textAlign: "center" }}>
              <div style={pendingCircle}>
                🚚
              </div>
              <p>Out For Delivery</p>
            </div>

            <div style={lineStyle}></div>

            <div style={{ textAlign: "center" }}>
              <div style={grayCircle}>📦</div>
              <p>Delivered</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

const circleStyle = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  backgroundColor: "#28a745",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "bold",
};

const pendingCircle = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  backgroundColor: "#ff9900",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const grayCircle = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  backgroundColor: "#ccc",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const lineStyle = {
  flex: 1,
  height: "4px",
  backgroundColor: "#28a745",
};

export default TrackOrder;