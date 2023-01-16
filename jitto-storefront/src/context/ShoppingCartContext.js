import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext({});

export const useShoppingCart = () => useContext(ShoppingCartContext);

export function ShoppingCartProvider({ children }) {

    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        const itemInCart = cart.find((cartItem) => cartItem.id === item.id);
        if (itemInCart) {
            setCart(
                cart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            );
        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const increaseQuantity = (id) => {
        addItem(id);
    };
    
    const decreaseQuantity = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const getNumOfItems = () => {
        return cart.length;
    };

    const getItemQuantity = (id) => {
        const item = cart.find(cartItem => cartItem.id === id);
        return item ? item.quantity : 0;
    };

    const printCart = () => {
        console.log(cart);
    };

    const value = {
        cart,
        addItem,
        removeItem,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        getNumOfItems,
        getItemQuantity,
        printCart,
    };

  return (
    <ShoppingCartContext.Provider value={value}>
      <div>
        <div className="bg-white">{children}</div>
      </div>
    </ShoppingCartContext.Provider>
  );
}