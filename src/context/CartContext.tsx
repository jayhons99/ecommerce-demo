import { useEffect, useReducer } from "react";
import { CartContext, initialCartState } from ".";
import reducer from "../reducers/CartReducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  TOGGLE_CART_ITEM_AMOUNT,
  // COUNT_CART_TOTALS,
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
  const clearCart = () => {
    dispatch({
      type: CLEAR_CART
    })
  }
  const removeItem = (id: string) => {
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: { id }
    })
  }
  const toggleAmount = (id: string, amount: number) => {
    dispatch({
      type: TOGGLE_CART_ITEM_AMOUNT,
      payload: { id, amount }
    })
  }
  const calculateTotalPrice = 
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart])
  return (
    <CartContext.Provider value={{ ...state, addToCart, clearCart, removeItem, toggleAmount }}>
      {children}
    </CartContext.Provider>
  );
};
