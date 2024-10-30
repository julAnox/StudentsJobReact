import React from "react";
import FooterLogo from "../../components/FooterLogo/FooterLogo";
import FooterPages from "../../components/FooterPages/FooterPages";
import FooterAdditional from "../../components/FooterAdditional/FooterAdditional";
import FooterInfo from "../../components/FooterInfo/FooterInfo";
import FooterBottom from "../../components/FooterBottom/FooterBottom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content-all">
        <div className="footer-content-upper">
          <FooterLogo />
          <FooterPages />
          <FooterAdditional />
          <FooterInfo />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
