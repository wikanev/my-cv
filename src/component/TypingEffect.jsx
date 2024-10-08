import React, { useState, useEffect } from 'react';
import './style/TypingEffect.css'; // CSS for the typewriter effect



const TypingEffect = ({ textArray, speed = 100, pause = 2000 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
  
    useEffect(() => {
      if (currentCharIndex < textArray[currentIndex].length) {
        const typeTimeout = setTimeout(() => {
          setDisplayedText((prev) => prev + textArray[currentIndex][currentCharIndex]);
          setCurrentCharIndex((prevCharIndex) => prevCharIndex + 1);
        }, speed);
        
        return () => clearTimeout(typeTimeout); // Clean up the timeout
      } else {
        const pauseTimeout = setTimeout(() => {
          setDisplayedText(''); // Clear the text after the pause
          setCurrentCharIndex(0); // Reset character index for the next text
          setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length); // Move to next text
        }, pause);
  
        return () => clearTimeout(pauseTimeout); // Clean up the timeout
      }
    }, [currentCharIndex, currentIndex, textArray, speed, pause]);
  
    return <p className="typewriter">{displayedText}</p>;
  };
  
  export default TypingEffect;
