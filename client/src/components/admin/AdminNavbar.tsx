function AdminNavbar() {
  
  
  return (
    <div
      style={{
        height: "70px",
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        gap: "30px",
  

      }}
    >
      <h2>Dashboard</h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <input
          placeholder="Search..."
          style={{
            padding: "10px",
            width: "250px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <span>🔔</span>

        <span>👤 Admin</span>
      </div>
    </div>
  );
}

export default AdminNavbar;