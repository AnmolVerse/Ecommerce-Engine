import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

//  import Home from "./pages/customer/Home";

// function App() {
//   return <Home />;
// }

// export default App;
// import ProductDetails from "./pages/customer/ProductDetails";

// function App() {
//   return <ProductDetails />;
// }

// export default App;
