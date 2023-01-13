import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";


function NavBar() {
  return (
    <nav className="NavBar-wrapper">
      <div className="NavBar-container">
        <Link to="/">
          <img className='NavBar-logo' src="/logo.svg" alt="JITTO" />
        </Link>
        <div className="NavBar__SearchBar-container">
          <input type="text" placeholder="Search Jitto..." />
          <img src="/images/icons/search-100.png" alt="Magnifying Glass" />
        </div>
        <div className="NavBar__Buttons">
          <button className="NavBar__Button-Cart">
            <img src="/images/icons/cart.svg" alt="Shopping Cart" />
            Items
          </button>
        </div>
      </div>
      <hr></hr>
    </nav>
  );
}

export default NavBar;
