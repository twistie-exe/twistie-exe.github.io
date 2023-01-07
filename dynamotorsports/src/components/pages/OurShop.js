import React from 'react';
import './OurShop.css';

function OurShop() {
  return (
    <div className='ourshop-page'>
        <div className='ourshop-container'>
          <div className='ourshop-content'>
            <h3>About Us:</h3>
            <p>Dynamotorsports is all about tuning.  We are specialized in EFI engine management solutions for all types of engine setups.  Our in-shop chassis dynamometer helps us to provide the fine and detailed tuning that many other dynamometers cannot offer.  Our load-brake dynamometer, DynaPack, allows steady state tuning to fully replicate real world conditions that an engine would face both on the streets and on the race track.</p>
            <p>Our quest to achieving tuning perfection often lies beyond data acquisition and punching numbers on the keyboard.  We have a 6200 square-feet facility that is necessary to perform all types of engine upgrades and modifications.  The computer and tune for an engine is only as good as the mechanical and electrical components that run it;  the engine itself only runs as good as the person who tuned it.  To achieve perfect level of tuning, all the components must work together in harmony as one complete system.  Therefore, we are skilled in all fields relating to engine performance and we know what's best for your particular engine.  Everything from engine management (standalone and piggybacks), supporting electronics and diagnostics, to turbochargers, supercharger, fuel system, fabrication, intake and exhaust systems.</p>
          </div>
          <div className='ourshop-images'>
            <img src='images/ourshop/DMTshopoutside.jpg' alt='supra' />
            <img src='images/ourshop/DMTshop.jpg' alt='shop' />
          </div>
          <div className='dynapack-image'>
            <img src='images/ourshop/Dynapack_white_Med.jpg' alt='dynapack' />
          </div>
        </div>
    </div>
  )
}

export default OurShop