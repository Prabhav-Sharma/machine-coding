import { createContext, useContext, useReducer } from "react";
import cartReducer from "./cartReducer";

const CartContext = createContext(null);

function CartProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    items: [],
    value: 0,
    quantity: 0,
    saveForLater: [],
  });

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
