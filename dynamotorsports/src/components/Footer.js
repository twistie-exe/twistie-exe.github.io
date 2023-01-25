import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

function Footer() {
  return (
    <div className="footer">
      <hr className="divider-two"></hr>
      <div className="footer__container">
        <div className="footer-logo">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="footer__links-socials">
          <Link
            onClick={() =>
              openInNewTab("https://www.facebook.com/dynamotorsports/")
            }
            hover
            onMouseOver={(e) => {
              e.target.src = "/images/icons/facebook-red.png";
            }}
            onMouseOut={(e) => {
              e.target.src = "/images/icons/facebook.png";
            }}
            className="social-icon-link facebook"
            aria-label="Facebook"
          >
            <img src="/images/icons/facebook.png" alt="facebook" />
          </Link>
          <Link
            onClick={() =>
              openInNewTab("https://www.instagram.com/dynamotorsports/")
            }
            onMouseOver={(e) => {
              e.target.src = "/images/icons/instagram-red.png";
            }}
            onMouseOut={(e) => {
              e.target.src = "/images/icons/instagram.png";
            }}
            className="social-icon-link instagram"
            aria-label="Instagram"
          >
            <img src="/images/icons/instagram.png" alt="instagram" />
          </Link>
          <Link
            onClick={() => openInNewTab("mailto:HTRacingmailbox@yahoo.ca")}
            onMouseOver={(e) => {
              e.target.src = "/images/icons/mail-red.png";
            }}
            onMouseOut={(e) => {
              e.target.src = "/images/icons/mail.png";
            }}
            className="social-icon-link mail"
            aria-label="Mail"
          >
            <img src="/images/icons/mail.png" alt="mail" />
          </Link>
        </div>
        <div className="footer__links-additional">
          <h3>Additional Links</h3>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links">
                Services
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
        <div className="footer__links-legal">
          {/* privacy policy, terms of use, disclaimer, copyright */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
