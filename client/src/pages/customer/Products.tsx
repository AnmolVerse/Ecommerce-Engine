import { useLocation } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ProductCard from "../../components/common/ProductCard";
import { aiProducts } from "../../data/aiProducts";
import { products } from "../../data/products";
import { dealsProducts } from "../../data/dealsProducts";

function Products() {
const location = useLocation();



const search =
  new URLSearchParams(location.search).get("search") || "";
const allProducts = [
  ...products,
  ...aiProducts,
  ...dealsProducts,
];
const filteredProducts = allProducts.filter((product) =>
  product.name.toLowerCase().includes(search.toLowerCase())
);

  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "50px",
          textAlign: "center",
          fontSize:"20px",
        }}
      >
        <h1>🛒 All Products</h1>

       
        <p
  style={{
    fontSize: "18px",
    marginTop: "10px",
    color: "#555",
  }}
>
  Showing {filteredProducts.length} Product
  {filteredProducts.length !== 1 ? "s" : ""}
</p>
{search && (
  <h3>
    Search Results for "{search}"
  </h3>
)}
        {filteredProducts.length > 0 ? (
  <div
    style={{
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      gap: "20px",
      padding: "40px",
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
) : (
  <div
    style={{
      marginTop: "50px",
    }}
  >
    <h2>😔 No Products Found</h2>

    <p>
      No products match "<strong>{search}</strong>"
    </p>

    <p>Try another search term.</p>
  </div>
)}
      </div>

      <Footer />
    </>
  );
}

export default Products;