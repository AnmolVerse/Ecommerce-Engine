
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/customer/HeroSection";
import CategorySection from "./components/customer/CategorySection";
import FeaturedProducts from "./components/customer/FeaturedProducts";
import AIRecommended  from "./components/customer/AIRecommended";
import Deals  from "./components/customer/deals";
import Reviews from "./components/customer/Reviews";
import Newsletter from "./components/customer/Newsletter";
import Footer from "./components/layout/Footer";
function App() {
  return (
    
  <> 
      <Navbar/> 
      <HeroSection/>
      <CategorySection/>
      <FeaturedProducts/>
      <AIRecommended/>
      <Deals/>
      <Reviews/>
      <Newsletter/>
      <Footer/>
  </>
  );
}

export default App;
