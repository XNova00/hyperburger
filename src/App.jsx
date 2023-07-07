import "./App.css";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import { BannerSeparator } from "./components/BannerSeparator";
import { BestSection } from "./components/BestSection";
import { FeaturedSection } from "./components/FeaturedSection";
import { CTASection } from "./components/CTASection";
import Navbar from "./components/Navbar";

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
