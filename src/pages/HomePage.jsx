import React from 'react';
import Navbar from '../component/NavBar';
import Hero from '../component/Hero';
import SkillStack from '../component/SkillStack';
import './style/HomePage.css';
import Footer from '../component/Footer';
import Timeline from '../component/Timeline';
import VideoBackground from '../component/VideoBackground';
import Services from '../component/Services';




const HomePage = () => {
    return (
        <div className="homepage" > 
         <Navbar />
         <VideoBackground />
         <Hero />
         <Timeline />
         <SkillStack />
         
         
         <Services />
         <Footer />
        </div>
      );
}    

export default HomePage

