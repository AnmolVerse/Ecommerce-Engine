import ProductCard from "../common/ProductCard";
import { products } from "../../data/products";
function ProductList() {
return (
    <div
        style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        gap: "20px",
        padding: "40px",
        }}
    >
        {products.map((product) => (
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
);
}

export default ProductList;