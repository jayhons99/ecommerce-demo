import { Reducer } from "react";

import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";
import { FilterContextType, Product } from "../types";

export type FilterAction =
  | { type: "LOAD_PRODUCTS"; payload: Product[] }
  | { type: "SET_GRIDVIEW" }
  | { type: "SET_LISTVIEW" }
  | { type: "UPDATE_SORT"; payload: string }
  | { type: "SORT_PRODUCTS" }
  | {
      type: "UPDATE_FILTERS";
      payload: { name: string; value: string | number | boolean };
    }
  | { type: "FILTER_PRODUCTS" }
  | { type: "CLEAR_FILTERS" };

const FilterReducer: Reducer<FilterContextType, FilterAction> = (
  state: FilterContextType,
  action: FilterAction
) => {
  if (action.type === LOAD_PRODUCTS) {
    const max = action.payload.map((product: Product) => product.price);
    const maxPrice = Math.max(...max);
    return {
      ...state,
      products: [...action.payload],
      filteredProducts: [...action.payload],
      filters: {
        ...state.filters,
        maxPrice: maxPrice,
        price: maxPrice,
      },
    };
  }

  if (action.type === SET_GRIDVIEW) {
    return {
      ...state,
      gridView: true,
    };
  }

  if (action.type === SET_LISTVIEW) {
    return {
      ...state,
      gridView: false,
    };
  }

  if (action.type === UPDATE_SORT) {
    return {
      ...state,
      sort: action.payload,
    };
  }

  if (action.type === SORT_PRODUCTS) {
    const { sort, filteredProducts } = state;
    let temp = [...filteredProducts];
    if (sort === "lowestPrice") {
      temp = temp.sort((a, b) => a.price - b.price);
    }
    if (sort === "highestPrice") {
      temp = temp.sort((a, b) => b.price - a.price);
    }
    if (sort === "nameFromA") {
      temp = temp.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sort === "nameFromZ") {
      temp = temp.sort((a, b) => b.name.localeCompare(a.name));
    }
    return {
      ...state,
      filteredProducts: temp,
    };
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;

    return {
      ...state,
      filters: {
        ...state.filters,
        [name]: value,
      },
    };
  }

  if (action.type === FILTER_PRODUCTS) {
    const { products, filters } = state;
    const { text, category, company, color, price, shipping } = filters || {};
    let temp = [...products];
    if (text) {
      temp = temp.filter((p) => p.name.toLowerCase().includes(text));
    }
    if (filters?.category != "all") {
      temp = temp.filter((p) => p?.category?.toLowerCase() === category);
    }
    if (filters?.company != "all") {
      temp = temp.filter((p) => p.company.toLowerCase() === company);
    }
    if (filters?.color != "all") {
      temp = temp.filter((p) => p?.colors?.includes(color));
    }
    temp = temp.filter((p) => p.price <= price);
    if (shipping) {
      temp = temp.filter((p) => p.shipping === shipping);
    }

    // if (filters.category !== "all") {
    //   temp = products.filter(
    //     (p: Product) => p[action.payload.name] === filters[action.payload.value]
    //   );
    // }

    // console.log(temp);
    return {
      ...state,
      filteredProducts: temp,
    };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        price: state.filters.maxPrice,
        shipping: false,
      },
    };
  }
  throw new Error("Invalid action");
};

export default FilterReducer;
