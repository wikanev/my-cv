import React from 'react';
import './style/LandingPage.css';
import { Navigate, useNavigate } from 'react-router-dom';
import whatsappicon from './Assets/whatsapp (1).png';
import instagramicon from './Assets/instagram.png';
import Footer from '../component/Footer';




const LandingPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
   navigate('/home') 
  };

  return (
    <div className="lp-container">
      <div className="photo-container" >
        
          
      <img src="https://media.licdn.com/dms/image/v2/C5603AQFJRcivYgJkWA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1614573781479?e=1732752000&v=beta&t=Euhx9PAnJ2_PJmzu5k16WtI5Nmgtn6nZeV1g3XiFFgc" alt="Wikan Pinandhito" className="photo" />
      </div>
      <div className="logo-container">
      <a href="https://www.instagram.com/volk_weacon/" target="_blank" rel="noopener noreferrer">
            <img src={instagramicon} alt="Instagram" className="logo" />
          </a>
          <a href="https://www.linkedin.com/in/wikan-pinandhito/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png?color=808080" alt="LinkedIn" className="logo" />
          </a>
          <a href="https://wa.me/6285868066280" target="_blank" rel="noopener noreferrer">
            <img src={whatsappicon} alt="WhatsApp" className="logo" />
          </a>
        </div>
      <h1 className="title">Hello, I'm Wikan Pinandhito, a Web Developer and Senior Software Quality Engineer</h1>
      <p className="subtitle">Discover my projects and skills below</p>
      <button className="button" onClick={handleClick}>
        View CV and Portfolio
      </button>

      <p>&copy; 2023 Wikan Pinandhito. All rights reserved. This page was built with React.</p>
      
      

      
    </div>
  );
};




export default LandingPage;
