import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({children, className, to, svg, id, isSelected, setSelectedButton, onClick, toggle}) => {
  const handleClick = () => {
    if (toggle) {
      setSelectedButton(id);
    }
    if (onClick) {
      onClick();
    }
  }

  return (
    <li className='list-none'>
      {to ? <Link to={to}>
        <button
          className={`${isSelected && toggle ? className + '-hover' : className} cursor-pointer font-bold mx-auto w-64 py-2 px-4 rounded-full ${className} flex items-center`}
          onClick={handleClick}
        >
          <div className={`flex items-center`}>
                {svg}
                  <span className="ml-2">
                      {children}
                  </span>
          </div>
        </button>
      </Link> : 
      <button
          className={`${isSelected && toggle ? className + '-hover' : className} cursor-pointer font-bold mx-auto w-58 py-2 px-4 rounded-full ${className} flex items-center`}
          onClick={handleClick}
        >
          <div className={`flex items-center`}>
                {svg}
                  <span className="ml-2">
                      {children}
                  </span>
          </div>
        </button>
      }
    </li>
  );
};

export default Button;