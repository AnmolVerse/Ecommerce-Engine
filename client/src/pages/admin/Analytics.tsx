import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminNavbar from "../../components/admin/AdminNavbar";

function Analytics() {
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

        <div style={{ padding: "30px" }}>
          <h1>📈 Analytics</h1>

          <p
            style={{
              color: "gray",
              marginBottom: "30px",
            }}
          >
            Sales and business insights.
          </p>

          {/* Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",
              gap: "20px",
            }}
          >
            <Card
              title="Total Revenue"
              value="₹12.5 Lakh"
              icon="💰"
            />

            <Card
              title="Orders"
              value="1,240"
              icon="🛒"
            />

            <Card
              title="Customers"
              value="870"
              icon="👥"
            />

            <Card
              title="Products"
              value="120"
              icon="📦"
            />
          </div>

          {/* Chart Placeholder */}
          <div
            style={{
              marginTop: "40px",
              background: "white",
              borderRadius: "12px",
              padding: "30px",
              boxShadow:
                "0 2px 10px rgba(0,0,0,0.08)",
            }}
          >
            <h2>📊 Monthly Revenue</h2>

            <div
              style={{
                marginTop: "25px",
                height: "300px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#f5f5f5",
                borderRadius: "10px",
                color: "#777",
                fontSize: "20px",
              }}
            >
              Revenue Chart (Coming Soon)
            </div>
          </div>


{/* Top Selling Products & Recent Activity */}
          <div
  style={{
    display: "flex",
    gap: "20px",
    marginTop: "30px",
    flexWrap: "wrap",
  }}
>
  {/* Top Selling Products */}
  <div
    style={{
      flex: "1",
      background: "white",
      padding: "25px",
      borderRadius: "12px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      minWidth: "350px",
    }}
  >
    <h2>🏆 Top Selling Products</h2>

    <table
      style={{
        width: "100%",
        marginTop: "20px",
        borderCollapse: "collapse",
      }}
    >
      <thead>
        <tr>
          <th align="left">Product</th>
          <th align="left">Sold</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Wireless Earbuds</td>
          <td>540</td>
        </tr>

        <tr>
          <td>Gaming Mouse</td>
          <td>410</td>
        </tr>

        <tr>
          <td>Smart Watch</td>
          <td>385</td>
        </tr>

        <tr>
          <td>Sports Shoes</td>
          <td>320</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* Recent Activity */}
  <div
    style={{
      flex: "1",
      background: "white",
      padding: "25px",
      borderRadius: "12px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      minWidth: "350px",
    }}
  >
    <h2>🕒 Recent Activity</h2>

    <ul
      style={{
        marginTop: "20px",
        lineHeight: "2",
      }}
    >
      <li>✔ New Order #1025 received</li>
      <li>✔ Product "Gaming Mouse" updated</li>
      <li>✔ Inventory restocked</li>
      <li>✔ New customer registered</li>
      <li>✔ Order #1018 delivered</li>
    </ul>
  </div>
</div>


{/* weekly sales section */}
<div
  style={{
    display: "flex",
    gap: "20px",
    marginTop: "30px",
    flexWrap: "wrap",
  }}
>
  {/* Weekly Sales */}
  <div
    style={{
      flex: 1,
      background: "white",
      padding: "25px",
      borderRadius: "12px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      minWidth: "350px",
    }}
  >
    <h2>📈 Weekly Sales</h2>

    <div style={{ marginTop: "25px" }}>
      <p>Monday</p>
      <progress value={35} max={100} style={{ width: "100%" }}></progress>

      <p>Tuesday</p>
      <progress value={50} max={100} style={{ width: "100%" }}></progress>

      <p>Wednesday</p>
      <progress value={70} max={100} style={{ width: "100%" }}></progress>

      <p>Thursday</p>
      <progress value={60} max={100} style={{ width: "100%" }}></progress>

      <p>Friday</p>
      <progress value={90} max={100} style={{ width: "100%" }}></progress>

      <p>Saturday</p>
      <progress value={80} max={100} style={{ width: "100%" }}></progress>

      <p>Sunday</p>
      <progress value={55} max={100} style={{ width: "100%" }}></progress>
    </div>
  </div>

  {/* Business Insights */}
  <div
    style={{
      flex: 1,
      background: "white",
      padding: "25px",
      borderRadius: "12px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      minWidth: "350px",
    }}
  >
    <h2>💡 Business Insights</h2>

    <div style={{ marginTop: "25px", lineHeight: "2" }}>
      <p>📦 Best Selling Category: Electronics</p>
      <p>👥 Returning Customers: 68%</p>
      <p>💰 Average Order Value: ₹2,450</p>
      <p>⭐ Customer Satisfaction: 4.8 / 5</p>
      <p>🚚 Orders Delivered Today: 34</p>
      <p>📈 Growth This Month: +18%</p>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  );
}

function Card({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: string;
}) {
  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "12px",
        boxShadow:
          "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          fontSize: "35px",
        }}
      >
        {icon}
      </div>

      <h3>{title}</h3>

      <h2>{value}</h2>
    </div>
  );
}

export default Analytics;