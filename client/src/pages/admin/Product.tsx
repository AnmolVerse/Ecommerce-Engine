import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminNavbar from "../../components/admin/AdminNavbar";
import { useState } from "react";
import { adminProducts } from "../../data/adminProducts";
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState(adminProducts);
    const [search, setSearch] = useState("");
const [category, setCategory] = useState("");
const [sort, setSort] = useState("");

const handleDelete = (id: number) => {
  setProducts(products.filter((product) => product.id !== id));
};

let filteredProducts = products.filter((product) => {
  const matchesSearch = product.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesCategory =
    category === "" || product.category === category;

  return matchesSearch && matchesCategory;
});

if (sort === "low") {
  filteredProducts.sort((a, b) => a.price - b.price);
}

if (sort === "high") {
  filteredProducts.sort((a, b) => b.price - a.price);
}
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
          <h1>📦 Products</h1>

          <p
            style={{
              color: "gray",
              marginBottom: "25px",
            }}
          >
            Manage all products from here.
          </p>
          <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
    flexWrap: "wrap",
    gap: "15px",
  }}
>
  <input
    type="text"
    placeholder="Search Product..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    style={{
      padding: "10px",
      width: "250px",
      borderRadius: "8px",
      border: "1px solid #ccc",
    }}
  />

  <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    style={{
      padding: "10px",
      borderRadius: "8px",
    }}
  >
    <option value="">All Categories</option>
    <option value="Electronics">Electronics</option>
    <option value="Fashion">Fashion</option>
  </select>

  <select
    value={sort}
    onChange={(e) => setSort(e.target.value)}
    style={{
      padding: "10px",
      borderRadius: "8px",
    }}
  >
    <option value="">Sort Price</option>
    <option value="low">Low → High</option>
    <option value="high">High → Low</option>
  </select>

<button
  onClick={() => navigate("/admin/add-product")}
  style={{
    background: "#ff9800",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  }}
>
  + Add Product
</button>
  </div>
  <div
  style={{
    background: "white",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    overflowX: "auto",
  }}
>
  <table
    style={{
      width: "100%",
      borderCollapse: "collapse",
    }}
  >
    <thead>
      <tr
        style={{
          borderBottom: "2px solid #eee",
        }}
      >
        <th style={{ padding: "15px", textAlign: "left" }}>Image</th>
        <th style={{ padding: "15px", textAlign: "left" }}>Product</th>
        <th style={{ padding: "15px", textAlign: "left" }}>Category</th>
        <th style={{ padding: "15px", textAlign: "left" }}>Price</th>
        <th style={{ padding: "15px", textAlign: "left" }}>Stock</th>
        <th style={{ padding: "15px", textAlign: "center" }}>Actions</th>
      </tr>
    </thead>

    <tbody>
      {filteredProducts.map((product) => (
        <tr
          key={product.id}
          style={{
            borderBottom: "1px solid #eee",
          }}
        >
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

          <td>₹{product.price}</td>

          <td>{product.stock}</td>

          <td
            style={{
              textAlign: "center",
            }}
          >
<button
  onClick={() =>
    navigate(`/admin/edit-product/${product.id}`)
  }
  style={{
    background: "#4CAF50",
    color: "white",
    border: "none",
    padding: "8px 14px",
    borderRadius: "6px",
    marginRight: "10px",
    cursor: "pointer",
  }}
>
  Edit
</button>

<button
  onClick={() => handleDelete(product.id)}
  style={{
    background: "#f44336",
    color: "white",
    border: "none",
    padding: "8px 14px",
    borderRadius: "6px",
    cursor: "pointer",
  }}
>
  Delete
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

export default Products;