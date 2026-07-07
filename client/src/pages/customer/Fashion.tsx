import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ProductCard from "../../components/common/ProductCard";
import { fashionProducts } from "../../data/fashionProducts";
import { useState } from "react";

function Fashion() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  let filteredProducts = fashionProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div
        style={{
          background: "linear-gradient(135deg,#ff69b4,#ff1493)",
          color: "white",
          padding: "60px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          👗 Fashion Collection
        </h1>

        <p
          style={{
            fontSize: "18px",
          }}
        >
          Trending styles and fashion essentials
        </p>
      </div>

      {/* Product Count */}
      <p
        style={{
          textAlign: "center",
          marginTop: "30px",
          fontWeight: "bold",
        }}
      >
        {filteredProducts.length} Products Available
      </p>

      {/* Search */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Search Fashion..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "320px",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
        />
      </div>

      {/* Sort */}
      <div
        style={{
          marginTop: "20px",
          marginLeft: "20px",
        }}
      >
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
      </div>

      {/* Section Title */}
      <h2
        style={{
          textAlign: "center",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        Trending Fashion
      </h2>

      {/* Products */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "20px",
          paddingBottom: "50px",
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

export default Fashion;