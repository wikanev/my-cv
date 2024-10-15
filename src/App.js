import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from './pages/About';

function App() {
  return (
   <Router>
    <Routes>
    <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
   </Router>
  );
}

export default App;
