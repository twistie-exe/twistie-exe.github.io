import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className='home-page'>
        <div className='header'>
            <h1>Dynamotorsports Tuning</h1>
        </div>
        <div className='content'>
            <img src='/images/home/DMTR32GTRGTX45RWallPaperNov2015.jpg' alt='tuning' />
            <p className='content-copyright'>[Copyright © 2008 Dynamotorsports. All rights reserved]</p>
        </div>
    </div>
  )
}

export default Home