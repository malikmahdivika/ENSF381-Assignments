import React from 'react';
import './component/Homepage.js';
import Homepage from './component/Homepage.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Productpage from './component/Productpage.js';
import LoginPage from './component/LoginPage.js';
import SignupPage from './component/SignupPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Productpage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;