import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminNavbar from "../../components/admin/AdminNavbar";
import DashboardCard from "../../components/admin/DashboardCard";


function Dashboard() {
 
  return (
  <div
  style={{
    marginLeft: "220px",
    flex: 1,
    background: "#f4f7fc",
    minHeight: "100vh",
  }}
>
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Navbar */}
        <AdminNavbar />

        {/* Dashboard Body */}
        <div
          style={{
            padding: "30px",
          }}
        >
          {/* Heading */}
          <h1
            style={{
              marginBottom: "25px",
            }}
          >
            Dashboard
          </h1>

          {/* Dashboard Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: "20px",
            }}
          >
            <DashboardCard
              title="Products"
              value="120"
              icon="📦"
            />

            <DashboardCard
              title="Orders"
              value="245"
              icon="🛒"
            />

            <DashboardCard
              title="Revenue"
              value="₹2.5L"
              icon="💰"
            />

            <DashboardCard
              title="Customers"
              value="480"
              icon="👥"
            />
          </div>

          {/* Recent Orders & Inventory */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "40px",
              flexWrap: "wrap",
            }}
          >
            {/* Recent Orders */}
            <div
              style={{
                flex: "2",
                background: "white",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h2>📋 Recent Orders</h2>

              <table
                style={{
                  width: "100%",
                  marginTop: "20px",
                  borderCollapse: "collapse",
                }}
              >
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Status</th>
                    <th>Amount</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>#1001</td>
                    <td>Rahul</td>
                    <td style={{ color: "green" }}>Delivered</td>
                    <td>₹1,999</td>
                  </tr>

                  <tr>
                    <td>#1002</td>
                    <td>Priya</td>
                    <td style={{ color: "orange" }}>Pending</td>
                    <td>₹3,499</td>
                  </tr>

                  <tr>
                    <td>#1003</td>
                    <td>Amit</td>
                    <td style={{ color: "blue" }}>Processing</td>
                    <td>₹2,599</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Inventory */}
            <div
              style={{
                flex: "1",
                background: "white",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h2>📦 Inventory Status</h2>

              <div style={{ marginTop: "20px" }}>
                <p>Wireless Earbuds</p>
                <progress value={20} max={100}></progress>
                <p style={{ color: "red" }}>20 Left</p>
              </div>

              <div style={{ marginTop: "20px" }}>
                <p>Gaming Mouse</p>
                <progress value={60} max={100}></progress>
                <p style={{ color: "green" }}>60 Left</p>
              </div>

              <div style={{ marginTop: "20px" }}>
                <p>Smart Watch</p>
                <progress value={35} max={100}></progress>
                <p style={{ color: "orange" }}>35 Left</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div
            style={{
              marginTop: "40px",
              background: "white",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h2>⚡ Quick Actions</h2>

            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "20px",
                flexWrap: "wrap",
              }}
            >
              <button>➕ Add Product</button>

              <button>📦 View Products</button>

              <button>📋 Orders</button>

              <button>📈 Analytics</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;