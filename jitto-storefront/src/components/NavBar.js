import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div className="flex items-center flex-row justify-between">
        <Link to="/">
          <img className='w-36 m-2' src="/logo.svg" alt="JITTO" />
        </Link>
        <label className="flex items-center bg-white flex-row hover:bg-jitto rounded-md p-1 drop-shadow-xl">
          <input className="w-full placeholder:text-black focus:outline-none focus:placeholder:text-gray" type="text" placeholder="Search Jitto..." />
        </label>
        <div>
          <button className="flex items-center flex-row">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
            Items
          </button>
        </div>
      </div>
      <hr></hr>
    </nav>
  );
}

export default NavBar;
