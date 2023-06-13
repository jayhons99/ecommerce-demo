import { Reducer } from "react";
import {
  ADD_TO_CART,
  // REMOVE_CART_ITEM,
  // TOGGLE_CART_ITEM_AMOUNT,
  // CLEAR_CART,
  // COUNT_CART_TOTALS,
} from "../actions";
import { CartContextType, CartItem, Product } from "../types";

type CartAction = {
  type: "ADD_TO_CART";
  payload: { id: string; color: string; amount: number; product: Product };
};

const CartReducer: Reducer<CartContextType, CartAction> = (
  state: CartContextType,
  action: CartAction
) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    const temp = state.cart.find((i: CartItem) => i.id === id + color);
    if (temp) {
      const tempCart = state.cart.map((cartItem: CartItem) => {
        if (cartItem.id === id + color) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const itemToAdd: CartItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, itemToAdd] };
    }
  }
  return state;
};

export default CartReducer;
