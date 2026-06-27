import ProductCard from "../common/ProductCard";
import { products } from "../../data/products";
import "../../styles/ProductGrid.css";
function ProductList() {
return (
  <div className="product-grid">
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