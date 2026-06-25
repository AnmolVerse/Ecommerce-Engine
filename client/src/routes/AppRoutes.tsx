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
import ProtectedRoute from "./ProtectedRoute";
import Checkout from "../pages/customer/Checkout";
import OrderSuccess from "../pages/customer/OrderSuccess"; 
import Orders from "../pages/customer/Orders";
import OrderDetails from "../pages/customer/OrderDetails";
import Profile from "../pages/customer/Profile";
import Register from "../pages/customer/Register";
import Electronics from "../pages/customer/Electronics";
import Fashion from "../pages/customer/Fashion";
import Beauty from "../pages/customer/Beauty";
import HomeCategory from "../pages/customer/HomeCategory";

// admin
import Dashboard from "../pages/admin/Dashboard";
import Product from "../pages/admin/Product";
import AddProduct from "../pages/admin/AddProduct";
import EditProduct from "../pages/admin/EditProduct";


function AppRoutes() {
  return (
   
    <Routes> 
      {/* admin */}
      
         <Route
  path="/admin/dashboard"
  element={<Dashboard />}
/>
<Route path="/admin/products" element={<Product />} />
<Route path="/admin/add-product" element={<AddProduct />} />

<Route path="/admin/edit-product/:id" element={<EditProduct />} />


  




  {/* customer */}
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route
  path="/product-details/:id"
  element={<ProductDetails />}
/>
<Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>
<Route path="/register" element={<Register />} />
<Route
  path="/order-details/:id"
  element={<OrderDetails />}
/>
<Route
  path="/track-order/:id"
  element={<TrackOrder />}
/>
<Route
  path="/electronics"
  element={<Electronics />}
/>

<Route
  path="/fashion"
  element={<Fashion />}
/>

<Route
  path="/home-category"
  element={<HomeCategory />}
/>

<Route
  path="/beauty"
  element={<Beauty />}
/>
      <Route path="/ai-search" element={<AISearch />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/cart" element={<Cart />} />
     <Route
  path="/checkout"
  element={
    <ProtectedRoute>
      <Checkout />
    </ProtectedRoute>
  }
/>
      <Route path="/order-success" element={<OrderSuccess />} />
      <Route
  path="/orders"
  element={
    <ProtectedRoute>
      <Orders />
    </ProtectedRoute>
  }
/>
    </Routes>
  );
}

export default AppRoutes;