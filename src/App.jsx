import "./App.css";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Navbar from "./components/navBar";
import { BannerSeparator } from "./components/BannerSeparator";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BannerSeparator />
      <Footer />
    </>
  );
}

export default App;
