// import { useParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import TrackOrder from "../pages/customer/TrackOrder";
import Home from "../pages/customer/Home";
import Products from "../pages/customer/Products";
import ProductDetails from "../pages/customer/ProductDetails";
import Cart from "../pages/customer/Cart";
import Wishlist from "../pages/customer/Wishlist";
import Login from "../pages/customer/Login";
import AISearch from "../pages/customer/AISearch";

import Checkout from "../pages/customer/Checkout";
import OrderSuccess from "../pages/customer/OrderSuccess"; 
import Orders from "../pages/customer/Orders";
import OrderDetails from "../pages/customer/OrderDetails";
import Profile from "../pages/customer/Profile";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route
  path="/product-details/:id"
  element={<ProductDetails />}
/>
<Route path="/profile" element={<Profile />} />
<Route
  path="/order-details/:id"
  element={<OrderDetails />}
/>
<Route
  path="/track-order/:id"
  element={<TrackOrder />}
/>
      <Route path="/ai-search" element={<AISearch />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-success" element={<OrderSuccess />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
}

export default AppRoutes;