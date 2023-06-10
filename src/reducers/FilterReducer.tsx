/* eslint-disable @typescript-eslint/no-unused-vars */
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

const FilterReducer = (state: any, action: { type: string; payload?: any }) => {
  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      allProducts: [...action.payload],
      filteredProducts: [...action.payload],
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
};

export default FilterReducer;
