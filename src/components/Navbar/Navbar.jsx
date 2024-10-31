import React, { useState } from "react";
import NavbarLogo from "../../components/NavbarLogo/NavbarLogo";
import NavbarPages from "../../components/NavbarPages/NavbarPages";
import NavbarUser from "../../components/NavbarUser/NavbarUser";
import NavbarMobile from "../../components/NavbarMobile/NavbarMobile";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="left-section">
        <NavbarLogo />
        <NavbarPages />
      </div>
      <NavbarUser />
      <div
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <NavbarMobile isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
  );
}

export default Navbar;
