import React from 'react';

import './Store.css';

function Store() {
  return (
    <div className='StoresPage-wrapper'>
        <div className='StoreInfo-container'>
            <div className='StoreInfo'>
                <img src='?' alt='storelogo' />
            </div>
        </div>
        <div className='Products-container'>
            <ul className='Products-list'>
                <li className='Products-list-item'>
                    {/* img of product, name, price, add to cart button */}
                </li>
            </ul>
        </div>
    </div>
    );
}

export default Store