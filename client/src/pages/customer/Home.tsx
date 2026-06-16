import Navbar from "../../components/layout/Navbar";
import HeroSection from "../../components/customer/HeroSection";
import CategorySection from "../../components/customer/CategorySection";
// import ProductList from "../../components/customer/ProductList";
import FeaturedProducts from "../../components/customer/FeaturedProducts";
import AIRecommended from "../../components/customer/AIRecommended";
import Deals from "../../components/customer/deals";
import Reviews from "../../components/customer/Reviews";
import Newsletter from "../../components/customer/Newsletter";
import Footer from "../../components/layout/Footer";
function Home() {
return (
    
<> 
    <Navbar/> 
    <HeroSection/>
    <div id="categories">
  <CategorySection />
</div>
    {/* <ProductList /> */}
    <div id="featured">
  <FeaturedProducts />
</div>
<div id="aipicks">
  <AIRecommended />
</div><div id="deals">
  <Deals />
</div>    <Reviews/>
    <Newsletter/>
<div id="contact">
  <Footer />
</div>
</>
);
}

export default Home;