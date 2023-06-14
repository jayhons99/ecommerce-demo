import { Reducer } from "react";
import {
  ADD_TO_CART,
  // REMOVE_CART_ITEM,
  // TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  // COUNT_CART_TOTALS,
} from "../actions";
import { CartContextType, CartItem, Product } from "../types";

type CartAction =
| {
  type: "ADD_TO_CART";
  payload: { id: string; color: string; amount: number; product: Product };
}
| { type: "CLEAR_CART" }
| { type: "REMOVE_CART_ITEM"; payload: {id: string}}
| { type: "TOGGLE_CART_ITEM_AMOUNT"; payload: {id: string, amount: number} }

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
      const newTotalAmount = tempCart.map(c => c.amount).reduce((prev, curr) => prev + curr, 0);
      return { ...state, cart: tempCart, totalItems: newTotalAmount};
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
      return { ...state, cart: [...state.cart, itemToAdd], totalItems: state.totalItems + amount};
    }
  }
  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: [],
      totalAmount: 0,
      totalItems: 0
    }
  }
  if (action.type === REMOVE_CART_ITEM) {
    // cart id: product id + color
    const itemToRemove = state.cart.find((c: CartItem) => c.id === action.payload.id);
    if (itemToRemove) {
      const temp = state.cart.filter((c: CartItem) => c.id !== action.payload.id);
      const newTotalItems = state.totalItems -itemToRemove.amount;
      return {
        ...state,
        cart: temp,
        totalItems: newTotalItems
      }
    } else {
      return {
        ...state
      }
    }
  }

  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    // id here references id + color; unlike id in add to cart which is soley the product id
    const { id, amount } = action.payload;
    const temp = state.cart.find(c => c.id === id);
    if (temp) {
      const tempCart = state.cart.map((cartItem: CartItem) => {
        if (cartItem.id === id) {
          let newAmount = amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          if (newAmount < 1) {
            newAmount = 1;
          }
          return {...cartItem, amount: newAmount};
        } else {
          return cartItem
        }
      })
      const newTotalAmount = tempCart.map((cartItem: CartItem) => cartItem.amount).reduce((prev, current) => prev + current, 0);
      return {
        ...state,
        totalItems: newTotalAmount,
        cart: tempCart
      }
    } else {
      return {...state};
    }
  }
  return state;
};

export default CartReducer;
