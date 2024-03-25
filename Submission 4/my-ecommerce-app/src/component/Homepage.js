import React from 'react';
import Header from './Header.js';
import HomeMainSection from './HomeMainSection.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Footer.js';

const Homepage = () => {
  return (
    <Router>
        <Header />
        <Routes>
            <Route path="/" />
            <Route path="/products" />
            <Route path="/about" />
        </Routes>
        <HomeMainSection />
        <Footer />
    </Router>
    
  );
};

export default Homepage;