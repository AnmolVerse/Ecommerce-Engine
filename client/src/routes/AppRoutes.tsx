import { Routes, Route } from "react-router-dom";

import Home from "../pages/customer/Home";
import Products from "../pages/customer/Products";
import ProductDetails from "../pages/customer/ProductDetails";
import Cart from "../pages/customer/Cart";
import Wishlist from "../pages/customer/Wishlist";
import Login from "../pages/customer/Login";
import AISearch from "../pages/customer/AISearch";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product-details" element={<ProductDetails />} />
      <Route path="/ai-search" element={<AISearch />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default AppRoutes;