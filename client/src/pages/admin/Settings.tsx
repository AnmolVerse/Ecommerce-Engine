import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminNavbar from "../../components/admin/AdminNavbar";
import { useState } from "react";

function Settings() {
  const [name, setName] = useState("Admin");
  const [email, setEmail] = useState("admin@shopverse.com");
  const [phone, setPhone] = useState("9876543210");
  
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
        }}
      >
        <AdminNavbar />

        <div
          style={{
            padding: "30px",
          }}
        >
          <h1>⚙ Settings</h1>

          <p
            style={{
              color: "gray",
              marginBottom: "30px",
            }}
          >
            Manage your account settings.
          </p>

          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
            }}
          >
            <h2>👤 Profile Information</h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                marginTop: "25px",
              }}
            >
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                style={inputStyle}
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                style={inputStyle}
              />

              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
                style={inputStyle}
              />
            </div>
          </div>
        </div>
        <div
  style={{
    background: "white",
    marginTop: "30px",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  }}
>
  <h2>🔒 Security</h2>

  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "18px",
      marginTop: "25px",
    }}
  >
    <input
      type="password"
      placeholder="Current Password"
      style={inputStyle}
    />

    <input
      type="password"
      placeholder="New Password"
      style={inputStyle}
    />

    <input
      type="password"
      placeholder="Confirm Password"
      style={inputStyle}
    />
  </div>
</div>

<div
  style={{
    background: "white",
    marginTop: "30px",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  }}
>
  <h2>⚙ Preferences</h2>

  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      marginTop: "25px",
    }}
  >
    <label
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      🌙 Dark Mode
      <input type="checkbox" />
    </label>

    <label
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      🔔 Email Notifications
      <input type="checkbox" defaultChecked />
    </label>

    <label
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      📱 SMS Notifications
      <input type="checkbox" />
    </label>
  </div>
</div>

<div
  style={{
    marginTop: "30px",
    marginBottom: "40px",
  }}
>
  <button
    onClick={() => alert("Settings Saved Successfully")}
    style={{
      background: "#4CAF50",
      color: "white",
      border: "none",
      padding: "14px 30px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "16px",
    }}
  >
    💾 Save Changes
  </button>
</div>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "12px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  fontSize: "15px",
};

export default Settings;