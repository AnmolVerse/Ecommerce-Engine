function AdminSidebar() {
  return (
    <div
      style={{
        // width: "250px",
        height: "100vh",
        // backgroundColor: "#1f2937",
        color: "white",
        // padding: "20px",
        backgroundColor: "#111827",
width: "260px",
padding: "25px",
      }}
    >
      <h2 style={{
  padding: "12px",
  fontSize:"20px",
  fontWeight:"bolder",
  marginTop: "8px",
  borderRadius: "8px",
  cursor: "pointer",
}}>ShopVerse Admin</h2>

      <hr />

      <p style={{
  padding: "12px",
  marginTop: "8px",
  borderRadius: "8px",
  cursor: "pointer",
}}>📊 Dashboard</p>

      <p style={{
  padding: "12px",
  marginTop: "8px",
  borderRadius: "8px",
  cursor: "pointer",
}}>📦 Products</p>

      <p style={{
  padding: "12px",
  marginTop: "8px",
  borderRadius: "8px",
  cursor: "pointer",
}}>➕ Add Product</p>

      <p style={{
  padding: "12px",
  marginTop: "8px",
  borderRadius: "8px",
  cursor: "pointer",
}}>📋 Orders</p>

      <p style={{
  padding: "12px",
  marginTop: "8px",
  borderRadius: "8px",
  cursor: "pointer",
}}>📦 Inventory</p>

      <p style={{
  padding: "12px",
  marginTop: "8px",
  borderRadius: "8px",
  cursor: "pointer",
}}>📈 Analytics</p>

      <p style={{
  padding: "12px",
  marginTop: "8px",
  borderRadius: "8px",
  cursor: "pointer",
}}>⚙️ Settings</p>

      <p style={{
  padding: "12px",
  marginTop: "8px",
  borderRadius: "8px",
  cursor: "pointer",
}}>🚪 Logout</p>
    </div>
  );
}

export default AdminSidebar;