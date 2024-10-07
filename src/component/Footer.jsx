import React from "react";
import "./style/Footer.css";
import whatsappicon from '../pages/Assets/whatsapp (1).png';
import instagramicon from '../pages/Assets/instagram.png';


const Footer = () => {
    return (    
        <>
<footer className="footer">
        <p>&copy; 2023 Wikan Pinandhito. All rights reserved. This page was built with React.</p>
        <div className="footer-logo-container">
      <a href="https://www.instagram.com/volk_weacon/" target="_blank" rel="noopener noreferrer">
            <img src={instagramicon} alt="Instagram" className="footer-logo" />
          </a>
          <a href="https://www.linkedin.com/in/wikan-pinandhito/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png?color=808080" alt="LinkedIn" className="footer-logo" />
          </a>
          <a href="https://wa.me/6285868066280" target="_blank" rel="noopener noreferrer">
            <img src={whatsappicon} alt="WhatsApp" className="footer-logo" />
          </a>
        </div>
      </footer>
      </>
    );
};

export default Footer;