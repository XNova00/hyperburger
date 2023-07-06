import "./App.css";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Navbar from "./components/navBar";
import { BannerSeparator } from "./components/BannerSeparator";
import { BestSection } from "./components/BestSection";
import { FeaturedBurger } from "./components/FeaturedBurger";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BannerSeparator />
      <BestSection />
      <FeaturedBurger />
      <Footer />
    </>
  );
}

export default App;
