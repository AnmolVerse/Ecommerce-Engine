import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ProductList from "../../components/customer/ProductList";
function Products() {
return (
    <>
        <Navbar />

    <div
        style={{
            padding: "50px",
            textAlign: "center",
        }}
    >
        <h1>🛍️ All Products</h1>
        <ProductList />
    </div>

    <Footer />
    </>
);
}

export default Products;