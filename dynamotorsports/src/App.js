import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './components/pages/Home.js';
import OurShop from './components/pages/OurShop.js';
import NotFound from './components/pages/NotFound.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
        <Router>
            <Navbar />
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Home />} />
                <Route path="/our-shop" element={<OurShop />} />
                <Route path="/services" element={<></>}/>
            </Routes>
            <Footer />
        </Router>
    </>
  )
}

export default App