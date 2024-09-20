import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ParallaxSection from "../../components/ParallaxSection/ParallaxSection";
import OverlaySection from "../../components/OverlaySection/OverlaySection";
import Advantages from "../../components/Advantages/Advantages";
import Facts from "../../components/Facts/Facts";
import SwitcherLang from "../../components/SwitcherLang/SwitcherLang";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-container">
      <Navbar />
      <ParallaxSection />
      <OverlaySection />
      <SwitcherLang />
      <div className="main">
        <Advantages />
        <Facts />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
