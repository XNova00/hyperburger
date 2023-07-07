import "./App.css";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Navbar from "./components/navBar";
import { BannerSeparator } from "./components/BannerSeparator";
import { BestSection } from "./components/BestSection";
import { FeaturedSection } from "./components/FeaturedSection";
import { CTASection } from "./components/CTASection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BannerSeparator />
      <BestSection />
      <FeaturedSection />
      <CTASection />
      <Footer />
    </>
  );
}

export default App;
