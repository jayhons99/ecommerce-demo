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
import { Product } from "../types";

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialCartState);
  // add to cart
  const addToCart = (
    id: string,
    color: string,
    amount: number,
    product: Product
  ) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { id, color, amount, product },
    });
  };
  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children};
    </CartContext.Provider>
  );
};
