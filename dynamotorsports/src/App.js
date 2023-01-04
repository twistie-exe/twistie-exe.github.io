import React from 'react';
import './App.css';
import Home from './components/pages/Home.js';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact component={Home} />
            </Routes>
        </Router>
    </>
  )
}

export default App