import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useParams } from "react-router-dom";
import { useOrders } from "../../context/OrderContext";

function OrderDetails() {
  const { id } = useParams();
  const { orders } = useOrders();

  const order = orders.find(
    (item) => item.id === Number(id)
  );
  console.log(order);

  if (!order) {
    return <h1>Order Not Found</h1>;
  }

  return (
    <>
      <Navbar />

<div
  style={{
    display: "flex",
    gap: "40px",
    alignItems: "flex-start",
    flexWrap: "wrap",
    marginTop: "20px",
  }}
>
  {/* Product Details */}
  <div
    style={{
      flex: 1,
      backgroundColor: "white",
      padding: "25px",
      borderRadius: "10px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      minWidth: "350px",
    }}
  >
    <img
      src={order.image}
      alt={order.name}
      style={{
        width: "250px",
        borderRadius: "10px",
      }}
    />

    <h2>{order.name}</h2>

    <p>
      <strong>Order ID:</strong> #{order.id}
    </p>

    <p>
      <strong>Quantity:</strong> {order.quantity}
    </p>

    <p>
      <strong>Price:</strong> ₹{order.price}
    </p>

    <p>
      <strong>Total:</strong> ₹
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
  </div>

  {/* Delivery Information */}
  <div
    style={{
      width: "350px",
      backgroundColor: "#f8f9fa",
      padding: "25px",
      borderRadius: "10px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    }}
  >
    <h3>🚚 Delivery Information</h3>

    <p>
      <strong>Name:</strong>
      <br />
      {order.fullName}
    </p>

    <p>
      <strong>Phone:</strong>
      <br />
      {order.phone}
    </p>

    <p>
      <strong>Email:</strong>
      <br />
      {order.email}
    </p>

    <p>
      <strong>Address:</strong>
      <br />
      {order.address}
    </p>

    <p>
      <strong>City:</strong>
      <br />
      {order.city}
    </p>

    <p>
      <strong>Pincode:</strong>
      <br />
      {order.pincode}
    </p>

    <p
      style={{
        marginTop: "20px",
        color: "green",
        fontWeight: "bold",
      }}
    >
      📦 Estimated Delivery: 6-7 Days
    </p>
  </div>
</div>

      <Footer />
    </>
  );
}

export default OrderDetails;