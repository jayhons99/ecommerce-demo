// @ts-nocheck

import { CartItem, Product } from "../types";

export const formatPrice: (price: number) => string = (price: number) => {
  const formatted = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);
  return formatted;
};

export const getUniqueValues = (data: Product[], type: string) => {
  let unique = data.map((product) => product[type as keyof Product]);
  if (type === "colors") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};

export const getLocalStorage: () => CartItem[] = () => {
  const cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
}

export const getCartTotalFromStorage: () => number = () => {
  const total = localStorage.getItem("totalItems");
  if (total) {
    return JSON.parse(total);
  } else {
    return 0;
  }
}