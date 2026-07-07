import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import SplashScreen from "./components/common/SplashScreen";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      {loading ? (
        <SplashScreen
          onFinish={() => setLoading(false)}
        />
      ) : (
        <AppRoutes />
      )}
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
