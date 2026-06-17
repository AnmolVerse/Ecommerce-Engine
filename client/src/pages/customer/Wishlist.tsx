import { Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Button from "../../components/common/Button";
function Wishlist() {
  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <h1>❤️ Your Wishlist is Empty</h1>

        <p
          style={{
            marginTop: "10px",
            fontSize: "18px",
            color: "#666",
          }}
        >
          Save products you love and view them here later.
        </p>

        <Link
          to="/products"
          style={{
            textDecoration: "none",
            marginTop: "20px",
          }}
        >
          <Button
  text="Browse Products"
  bgColor="#ff4d6d"
/>
          {/* <button
            style={{
              backgroundColor: "#ff4d6d",
              color: "white",
              border: "none",
              padding: "12px 24px",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Browse Products
          </button> */}
        </Link>
      </div>

      <Footer />
    </>
  );
}

export default Wishlist;