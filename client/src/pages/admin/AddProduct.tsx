import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminNavbar from "../../components/admin/AdminNavbar";
import { useState } from "react";


function AddProduct() {
    const [product, setProduct] = useState({
  name: "",
  category: "",
  price: "",
  stock: "",
  brand: "",
  image: "",
  description: "",
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
const handleSubmit = () => {
  if (
    !product.name ||
    !product.category ||
    !product.price ||
    !product.stock ||
    !product.brand ||
    !product.image ||
    !product.description
  ) {
    alert("Please fill all fields.");
    return;
  }

  console.log(product);

  alert("Product Added Successfully!");

  handleReset();
};
const handleReset = () => {
  setProduct({
    name: "",
    category: "",
    price: "",
    stock: "",
    brand: "",
    image: "",
    description: "",
  });
};





  return (
    <div
      style={{
        display: "flex",
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
          <h1>➕ Add Product</h1>

          <p
            style={{
              color: "gray",
              marginBottom: "30px",
            }}
          >
            Fill in the product details below.
          </p>

          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
              maxWidth: "800px",
            }}
          >
            {/* Form starts here */}
            <div
  style={{
    display: "grid",
    gap: "20px",
  }}
>
  <input
    type="text"
    name="name"
    placeholder="Product Name"
    value={product.name}
    onChange={handleChange}
  />

  <select
    name="category"
    value={product.category}
    onChange={handleChange}
  >
    <option value="">Select Category</option>
    <option value="Electronics">Electronics</option>
    <option value="Fashion">Fashion</option>
    <option value="Home">Home</option>
    <option value="Beauty">Beauty</option>
  </select>

  <input
    type="number"
    name="price"
    placeholder="Price"
    value={product.price}
    onChange={handleChange}
  />

  <input
    type="number"
    name="stock"
    placeholder="Stock"
    value={product.stock}
    onChange={handleChange}
  />

  <input
    type="text"
    name="brand"
    placeholder="Brand"
    value={product.brand}
    onChange={handleChange}
  />

  <input
    type="text"
    name="image"
    placeholder="Image URL"
    value={product.image}
    onChange={handleChange}
  />

  <textarea
    rows={5}
    name="description"
    placeholder="Product Description"
    value={product.description}
    onChange={handleChange}
  />
</div>

{/* save and reset */}

<div
  style={{
    marginTop: "30px",
    display: "flex",
    gap: "15px",
  }}
>
<button
  onClick={handleSubmit}
  style={{
    background: "#ff9800",
    color: "white",
    border: "none",
    padding: "12px 25px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  }}
>
  Save Product
</button>

<button
  onClick={handleReset}
  style={{
    background: "#ddd",
    border: "none",
    padding: "12px 25px",
    borderRadius: "8px",
    cursor: "pointer",
  }}
>
  Reset
</button>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;