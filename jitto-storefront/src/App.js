import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar.js';
import { ShoppingCartProvider } from './context/ShoppingCartContext.js';
import Store from './pages/Store.js';

function App() {
  return (
    <ShoppingCartProvider>
      <Router>
        <NavBar />
          <Routes>
            <Route path="/" element={<Store />} /> 
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
      </Router>
    </ShoppingCartProvider>
  );
}

export default App;
