import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function AdminSidebar() {
  const navigate = useNavigate();
  const handleLogout = () => {
  navigate("/login");
};

  return (
    <div
    style={{
  width: "220px",
  background: "#111827",
  color: "white",
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  overflowY: "auto",
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
}}>📊 <NavLink to="/admin/dashboard">
  Dashboard
</NavLink></p>

      <p style={{
  padding: "12px",
  marginTop: "8px",
  borderRadius: "8px",
  cursor: "pointer",
}}>📦 <NavLink to="/admin/products">
  Products
</NavLink></p>

      <p style={{
  padding: "12px",
  marginTop: "8px",
  borderRadius: "8px",
  cursor: "pointer",
}}><NavLink to="/admin/add-product">
  Add Product
</NavLink></p>

      <p style={{
  padding: "12px",
  marginTop: "8px",
  borderRadius: "8px",
  cursor: "pointer",
}} ><NavLink to="/admin/order">
  Orders
</NavLink></p>

      <p style={{
  padding: "12px",
  marginTop: "8px",
  borderRadius: "8px",
  cursor: "pointer",
}}><NavLink to="/admin/inventory">
  Inventory
</NavLink></p>

      <p style={{
  padding: "12px",
  marginTop: "8px",
  borderRadius: "8px",
  cursor: "pointer",
}}><NavLink to="/admin/analytics">
  Analytics
</NavLink></p>

      <p style={{
  padding: "12px",
  marginTop: "8px",
  borderRadius: "8px",
  cursor: "pointer",
}}><NavLink to="/admin/settings">
  Settings
</NavLink></p>

      <p style={{
  padding: "12px",
  marginTop: "8px",
  borderRadius: "8px",
  cursor: "pointer",
}}><div
  onClick={handleLogout}
  style={{
    cursor: "pointer",
  }}
>
  🚪 Logout
</div>
</p>
    </div>
  );
}

export default AdminSidebar;