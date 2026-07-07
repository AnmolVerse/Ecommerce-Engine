import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminNavbar from "../../components/admin/AdminNavbar";
import { adminInventory } from "../../data/adminInventory";
import { useState } from "react";

function Inventory() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filteredInventory = adminInventory.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar />

  <div
  style={{
    marginLeft: "220px",
    flex: 1,
    background: "#f4f7fc",
    minHeight: "100vh",
  }}
>
        <AdminNavbar />

        <div style={{ padding: "30px" }}>
          <h1>📦 Inventory</h1>

          <p
            style={{
              color: "gray",
              marginBottom: "25px",
            }}
          >
            Monitor product stock levels.
          </p>

          {/* Filters */}

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginBottom: "30px",
              flexWrap: "wrap",
            }}
          >
            <input
              type="text"
              placeholder="Search Product..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              style={{
                padding: "10px",
                width: "250px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              style={{
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <option value="">All Categories</option>
              <option value="Electronics">
                Electronics
              </option>
              <option value="Fashion">
                Fashion
              </option>
            </select>
          </div>

          {/* Table will be added next */}

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
        <th style={{ padding: "15px", textAlign: "left" }}>Image</th>
        <th style={{ padding: "15px", textAlign: "left" }}>Product</th>
        <th style={{ padding: "15px", textAlign: "left" }}>Category</th>
        <th style={{ padding: "15px", textAlign: "left" }}>Stock</th>
        <th style={{ padding: "15px", textAlign: "left" }}>Status</th>
      </tr>
    </thead>

    <tbody>
      {filteredInventory.map((product) => (
        <tr key={product.id} style={{ borderBottom: "1px solid #eee" }}>
          <td style={{ padding: "15px" }}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "60px",
                height: "60px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </td>

          <td>{product.name}</td>

          <td>{product.category}</td>

          <td>{product.stock}</td>

          <td>
            <progress
              value={product.stock}
              max={100}
            ></progress>

            <div
              style={{
                color:
                  product.stock < 30
                    ? "red"
                    : "green",
              }}
            >
              {product.stock < 30
                ? "Low Stock"
                : "In Stock"}
            </div>
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

export default Inventory;