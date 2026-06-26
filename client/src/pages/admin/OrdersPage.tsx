import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminNavbar from "../../components/admin/AdminNavbar";
import { adminOrders } from "../../data/adminOrders";
import { useState } from "react";

function Orders() {
  const [search, setSearch] = useState("");

  const filteredOrders = adminOrders.filter(
    (order) =>
      order.customer
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      order.id.toString().includes(search)
  );

  return (
  <div
  style={{
    marginLeft: "220px",
    flex: 1,
    background: "#f4f7fc",
    minHeight: "100vh",
  }}
>
      <AdminSidebar />

      <div
        style={{
          flex: 1,
          background: "#f4f7fc",
          minHeight: "100vh",
        }}
      >
        <AdminNavbar />

        <div
          style={{
            padding: "30px",
          }}
        >
          <h1>📦 Orders Management</h1>

          <p
            style={{
              color: "gray",
              marginBottom: "25px",
            }}
          >
            Manage customer orders.
          </p>

          <input
            type="text"
            placeholder="Search Order..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            style={{
              width: "280px",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              marginBottom: "25px",
            }}
          />

          {/* Table comes next */}

          <div
  style={{
    background: "white",
    borderRadius: "12px",
    padding: "20px",
    overflowX: "auto",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  }}
>
  <table
    style={{
      width: "100%",
      borderCollapse: "collapse",
    }}
  >
    <thead>
      <tr>
        <th style={{ padding: "15px", textAlign: "left" }}>Order ID</th>
        <th style={{ padding: "15px", textAlign: "left" }}>Customer</th>
        <th style={{ padding: "15px", textAlign: "left" }}>Date</th>
        <th style={{ padding: "15px", textAlign: "left" }}>Amount</th>
        <th style={{ padding: "15px", textAlign: "left" }}>Status</th>
        <th style={{ padding: "15px", textAlign: "center" }}>Action</th>
      </tr>
    </thead>

    <tbody>
      {filteredOrders.map((order) => (
        <tr
          key={order.id}
          style={{
            borderBottom: "1px solid #eee",
          }}
        >
          <td style={{ padding: "15px" }}>
            #{order.id}
          </td>

          <td>{order.customer}</td>

          <td>{order.date}</td>

          <td>₹{order.amount}</td>

          <td>
            <span
              style={{
                padding: "6px 12px",
                borderRadius: "20px",
                color: "white",
                background:
                  order.status === "Delivered"
                    ? "green"
                    : order.status === "Pending"
                    ? "orange"
                    : order.status === "Processing"
                    ? "#2196F3"
                    : "red",
              }}
            >
              {order.status}
            </span>
          </td>

          <td
            style={{
              textAlign: "center",
            }}
          >
            <button
              style={{
                background: "#ff9800",
                color: "white",
                border: "none",
                padding: "8px 16px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Update
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


        </div>
      </div>
    </div>
  );
}

export default Orders;