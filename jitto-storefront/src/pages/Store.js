import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars-2";

import Button from "../components/Button.js";
import produceItems from "../data/produceItems.json";
import { formatCurrency } from "../utilities/formatCurrency.js";
import { useShoppingCart } from "../context/ShoppingCartContext.js";

function Store() {
  const [selectedButton, setSelectedButton] = useState(1);

  const {
    cart,
    addItem,
    removeItem,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    getNumOfItems,
    getItemQuantity,
    getSubtotal,
  } = useShoppingCart();

  return (
    <div className="flex flex-row overflow-hidden">
      <div className="flex flex-col w-80">
        <div className="bg-white" style={{ position: "sticky", top: 0 }}>
          <div className="flex flex-col mt-10">
            <img
              className="block m-auto rounded-full outline outline-2 outline-jitto w-20 h-20 "
              src="https://www.instacart.com/image-server/88x88/www.instacart.com/assets/domains/warehouse/logo/5/65f2304b-908e-4cd0-981d-0d4e4effa8de.png"
              alt="storelogo"
            />
            <span className="font-semibold text-center">Costco</span>
            <Link
              to="/"
              className="text-xs text-center font-semibold whitespace-nowrap"
            >
              View pricing policy
            </Link>
            <Link
              to="/"
              className="text-blue text-center font-semibold text-xs whitespace-nowrap"
            >
              100% satisfaction guarantee
            </Link>
          </div>
          <ul className="bg-white mt-10 mx-5 list-none">
            <Button
              id={1}
              isSelected={selectedButton === 1}
              setSelectedButton={setSelectedButton}
              to="/"
              svg={
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
                    d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                  />
                </svg>
              }
            >
              Shop
            </Button>
            <Button
              id={2}
              isSelected={selectedButton === 2}
              setSelectedButton={setSelectedButton}
              to="/"
              svg={
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
                    d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6h.008v.008H6V6z"
                  />
                </svg>
              }
            >
              Deals (Inactive)
            </Button>
          </ul>
        </div>

        <Scrollbars
          className="bg-white flex flex-col items-center mt-10 jitto"
          hideTracksWhenNotNeeded={true}
          style={{ width: "100%", height: "80vh" }}
        >
          {Array.from({ length: 10 }, (_, i) => i + 3).map((num) => (
            <Button
              key={num}
              id={num}
              isSelected={selectedButton === num}
              setSelectedButton={setSelectedButton}
              to="/"
            >
              Sub-category (Inactive)
            </Button>
          ))}
        </Scrollbars>
      </div>
      <div className="bg-white w-full mx-2 my-2">
        <span className="text-lg font-bold text-center">Fruits</span>
        <div className="grid grid-cols-6 grid-gap-2">
    {produceItems.map((item) => (
        <div key={item.id} className="col-span-2 w-full">
            <img src={item.image} alt={item.name} className="w-full h-32 object-cover" />
            <div className="text-center">
                <span className="text-lg font-bold">{item.name}</span>
                <span className="text-sm">{formatCurrency(item.price)}</span>
                <span className="text-sm">{item.weight}</span>
            </div>
            <div className="text-center">
                <Button onClick={() => addItem(item)} className="inline-block">
                    Add
                </Button>
                <Button onClick={() => removeItem(item)} className="inline-block">
                    Remove
                </Button>
                <Button onClick={() => decreaseQuantity(item)} className="block">
                    Decrease Quantity
                </Button>
                <Button onClick={() => increaseQuantity(item)} className="block">
                    Increase Quantity
                </Button>
            </div>
        </div>
    ))}
</div>
    </div>
    </div>
  );
}

export default Store;
