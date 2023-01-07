import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__container'>
            <div className='footer-logo'>
                <img src='/logo.png' alt='logo' />
            </div>
            <div className='footer__links-socials'>
                {/* facebook, instagram, mail */}
            </div>
            <div className='footer__links-additional'>
                {/* contact us, services, affiliates, home */}
            </div>
            <div className='footer__links-legal'>
                {/* privacy policy, terms of use, disclaimer, copyright */}
            </div>
        </div>
    </div>
  )
}

export default Footer