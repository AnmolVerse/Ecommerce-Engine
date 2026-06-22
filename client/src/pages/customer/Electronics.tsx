import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ProductCard from "../../components/common/ProductCard";
import { electronicsProducts } from "../../data/electronicsProducts";
import { useState } from "react";

function Electronics() {
    const [search, setSearch] = useState("");
const [sort, setSort] = useState("");
let filteredProducts = electronicsProducts.filter(
  (product) =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())
);
if (sort === "low") {
  filteredProducts.sort(
    (a, b) => a.price - b.price
  );
}

if (sort === "high") {
  filteredProducts.sort(
    (a, b) => b.price - a.price
  );
}
  return (
    <>
      <Navbar />


{/* heading */}
      <div
        style={{
          background: "linear-gradient(135deg,#ff9900,#ff6600)",
          color: "white",
          padding: "50px",
          textAlign: "center",
        }}
      >
        <h1  style={{fontSize:"35px",
        fontWeight:"bold",}}>💻 Electronics</h1>
        <p>Latest gadgets and accessories</p>
      </div>

{/* counts */}
<p style={{ display: "flex",
    justifyContent: "center",
    marginTop: "30px",}}>
  {electronicsProducts.length} Products Available
</p>


{/* input */}
      <div style={{ padding: "30px" ,
          display: "flex",
    justifyContent: "center",
    marginTop: "30px",
      }}>
        
<input
  placeholder="Search Electronics..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  style={{
    width: "300px",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  }}
/>
</div>

{/* select */}
<select
  value={sort}
  onChange={(e) => setSort(e.target.value)}
  style={{
    padding: "10px",
    borderRadius: "8px",
  }}
>
  <option value="">Sort By</option>
  <option value="low">Price Low → High</option>
  <option value="high">Price High → Low</option>
</select>


        <h2
          style={{
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          Featured Electronics
        </h2>

<div
  style={{
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
  }}
>
  {filteredProducts.map((product) => (
    <ProductCard
      key={product.id}
      id={product.id}
      image={product.image}
      name={product.name}
      price={product.price}
      rating={product.rating}
    />
  ))}
</div>
      

      <Footer />
    </>
  );
}

export default Electronics;