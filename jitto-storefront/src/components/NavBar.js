import React from "react";
import { Link } from "react-router-dom";

import { useShoppingCart } from "../context/ShoppingCartContext.js";

function NavBar() {

  const { 
    cart,
    addItem,
    removeItem,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    getNumOfItems,
    getItemQuantity,
    printCart,
   } = useShoppingCart();

  return (
    <nav>
      <div className="flex items-center flex-row justify-between">
        <Link to="/">
          <img className='w-36 m-2' src="/logo.svg" alt="JITTO" />
        </Link>
        <div className="flex flex-row items-center w-screen">
          <input className="p-3 w-2/3 mx-auto font-semibold bg-light-gray placeholder:text-black hover:outline focus:outline outline-2 outline-jitto focus:placeholder:text-slate-gray rounded-md drop-shadow-md" type="text" placeholder="Search Jitto..." />
        </div>
        <button onClick={() => {printCart()}} className="flex items-center flex-row p-3 mr-2 bg-white hover:outline outline-2 outline-jitto rounded-full drop-shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <span className="ml-2 font-semibold">{getNumOfItems()}</span>
        </button>
      </div>
      <hr className='border-light-gray '></hr>
    </nav>
  );
}

export default NavBar;