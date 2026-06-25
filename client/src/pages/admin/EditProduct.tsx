import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminNavbar from "../../components/admin/AdminNavbar";
import { useState } from "react";

function EditProduct() {
  const [product, setProduct] = useState({
    name: "Wireless Earbuds",
    category: "Electronics",
    price: "1999",
    stock: "20",
    brand: "Boat",
    image: "",
    description: "Premium wireless earbuds with noise cancellation.",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ display: "flex" }}>
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
          <h1>✏️ Edit Product</h1>

          <p
            style={{
              color: "gray",
              marginBottom: "30px",
            }}
          >
            Update product information.
          </p>

          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "12px",
              maxWidth: "800px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
            }}
          >
            <div
  style={{
    display: "grid",
    gap: "20px",
  }}
>
  <input
    type="text"
    name="name"
    value={product.name}
    onChange={handleChange}
    placeholder="Product Name"
  />

  <select
    name="category"
    value={product.category}
    onChange={handleChange}
  >
    <option>Electronics</option>
    <option>Fashion</option>
    <option>Home</option>
    <option>Beauty</option>
  </select>

  <input
    type="number"
    name="price"
    value={product.price}
    onChange={handleChange}
    placeholder="Price"
  />

  <input
    type="number"
    name="stock"
    value={product.stock}
    onChange={handleChange}
    placeholder="Stock"
  />

  <input
    type="text"
    name="brand"
    value={product.brand}
    onChange={handleChange}
    placeholder="Brand"
  />

  <input
    type="text"
    name="image"
    value={product.image}
    onChange={handleChange}
    placeholder="Image URL"
  />

  <textarea
    rows={5}
    name="description"
    value={product.description}
    onChange={handleChange}
    placeholder="Description"
  />
</div>
<div
  style={{
    marginTop: "30px",
  }}
>
  <button
    onClick={() => alert("Product Updated Successfully")}
    style={{
      background: "#4CAF50",
      color: "white",
      border: "none",
      padding: "12px 25px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold",
    }}
  >
    Update Product
  </button>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;