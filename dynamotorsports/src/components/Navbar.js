import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};


function Navbar() {
  const date = new Date();
  const currentDate = `${date.getDate()}/${date.getMonth() +
    1}/${date.getFullYear()
  }`;

  // Add navbar while scrolling
  
  return (
    <>
      <nav className="navbar">
        <div className="socials-container">
          <Link
            onClick={() =>
              openInNewTab("https://www.facebook.com/dynamotorsports/")
            }
            hover
            onMouseOver={(e) => { e.target.src = "/images/icons/facebook-red.png" }}
            onMouseOut={(e) => { e.target.src = "/images/icons/facebook.png" }}
            className="social-icon-link facebook"
            aria-label="Facebook"
          >
            <img src="/images/icons/facebook.png" alt="facebook" />
          </Link>
          <Link
            onClick={() =>
              openInNewTab("https://www.instagram.com/dynamotorsports/")
            }
            onMouseOver={(e) => { e.target.src = "/images/icons/instagram-red.png" }}
            onMouseOut={(e) => { e.target.src = "/images/icons/instagram.png" }}
            className="social-icon-link instagram"
            aria-label="Instagram"
          >
            <img src="/images/icons/instagram.png" alt="instagram" />
          </Link>
          <Link
            onClick={() => openInNewTab("mailto:HTRacingmailbox@yahoo.ca")}
            onMouseOver={(e) => { e.target.src = "/images/icons/mail-red.png" }}
            onMouseOut={(e) => { e.target.src = "/images/icons/mail.png" }}
            className="social-icon-link mail"
            aria-label="Mail"
          >
            <img src="/images/icons/mail.png" alt="mail" />
          </Link>
          <p className="calender-date">{currentDate}</p>
        </div>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src="/logo.png" alt="logo" />
          </Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/our-shop" className="nav-links">
                Our Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/media" className="nav-links">
                News & Media
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className="nav-links">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/affiliates" className="nav-links">
                Affiliates
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="divider-container">
          <hr className="divider-one"></hr>
          <hr className="divider-two"></hr>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
