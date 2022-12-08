import React from "react";
import { useContextGlobal } from "./utils/global.context";
const Footer = () => {
  const { providerValue } = useContextGlobal();
  const { stateTheme } = providerValue;
  return (
    <footer className={stateTheme.theme}>
      <p>Powered by</p>
      <img src="/images/DH.png" alt="DH-logo" />

      <img
        className="socialMedia"
        src="/images/ico-instagram.png"
        alt="Instagram"
      />

      <img
        className="socialMedia"
        src="/images/ico-facebook.png"
        alt="Facebook"
      />

      <img className="socialMedia" src="/images/ico-tiktok.png" alt="Tiktok" />

      <img
        className="socialMedia"
        src="/images/ico-whatsapp.png"
        alt="Whatsapp"
      />
    </footer>
  );
};

export default Footer;
