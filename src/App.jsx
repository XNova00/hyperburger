import "./App.css";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Navbar from "./components/navBar";
import { BannerSeparator } from "./components/BannerSeparator";
import { BestSection } from "./components/BestSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BannerSeparator />
      <BestSection />
      <Footer />
    </>
  );
}

export default App;
