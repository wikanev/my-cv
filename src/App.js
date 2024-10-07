import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
   <Router>
    <Routes>
    <Route path="/" element={<LandingPage />} />


      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
   </Router>
  );
}

export default App;
