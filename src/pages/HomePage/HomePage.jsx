import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ParallaxSection from "../../components/ParallaxSection/ParallaxSection";
import Advantages from "../../components/Advantages/Advantages";
import Facts from "../../components/Facts/Facts";
import SwitcherLang from "../../components/SwitcherLang/SwitcherLang";
import "./HomePage.css";
import Reviews from "../../components/Reviews/Reviews";

function HomePage() {
  return (
    <div className="home-container">
      <Navbar />
      <ParallaxSection />
      <SwitcherLang />
      <div className="main">
        <Advantages />
        <Facts />
        <Reviews />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
