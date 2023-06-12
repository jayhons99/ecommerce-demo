import { useReducer } from "react";
import { CartContext, initialCartState } from ".";
import reducer from "../reducers/CartReducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialCartState);
  return (
    <CartContext.Provider value={{ ...state }}>
      {children};
    </CartContext.Provider>
  );
};
