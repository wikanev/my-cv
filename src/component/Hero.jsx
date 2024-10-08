import React from 'react';
import './style/Hero.css';
import TypingEffect from './TypingEffect';

const Hero = () => {
    const textArray = [
        "Experienced Professional Software Quality Assurance and Frontend Developer",
        "Have a Strong IT Background and experience in software development",
        "Have Worked on various types of projects",
        "Have Good knowledge in programming and software development",
        "Enthusiastic about Technology, AI, Multimedia, and Games."
      ];
    return (
        <div class name="hero-container"> 
        
           
        <div className="hero">
        <div className="hero-photo-container" >
        
          
        <img src="https://media.licdn.com/dms/image/v2/C5603AQFJRcivYgJkWA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1614573781479?e=1732752000&v=beta&t=Euhx9PAnJ2_PJmzu5k16WtI5Nmgtn6nZeV1g3XiFFgc" alt="Wikan Pinandhito" className="hero-photo" />
        </div>
            <h1>Hello, I'm Wikan Pinandhito</h1>

            <TypingEffect textArray={textArray} speed={50} pause={2000} />
            
        </div>
        </div>
    );
};

export default Hero;
