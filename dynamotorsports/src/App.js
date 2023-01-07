import React from 'react';
import './App.css';
import Home from './components/pages/Home.js';
import OurShop from './components/pages/OurShop.js';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/our-shop" element={<OurShop />} />
                <Route path="/services" element={<></>}/>
            </Routes>
        </Router>
    </>
  )
}

export default App