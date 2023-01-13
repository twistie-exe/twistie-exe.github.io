import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar.js';
import Store from './pages/Store.js';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
