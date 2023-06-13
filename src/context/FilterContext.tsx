import { ChangeEventHandler, useEffect, useReducer } from "react";
import { useProductsContext } from "../hooks";
import reducer from "../reducers/FilterReducer";
import { FilterContext, initialFilterState } from "./";
import { HTMLElementEvent } from "../types";
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

interface FiltersContextProps {
  children: React.ReactNode;
}

export const FilterContextProvider: React.FC<FiltersContextProps> = ({
  children,
}) => {
  const { allProducts } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialFilterState);
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: allProducts });
  }, [allProducts]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({
      type: SORT_PRODUCTS,
    });
  }, [allProducts, state.sort, state.filters]);

  const displayGrid = () => {
    dispatch({
      type: SET_GRIDVIEW,
    });
  };
  const displayList = () => {
    dispatch({
      type: SET_LISTVIEW,
    });
  };
  const updateSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // const name = e.target.name;
    const value = e.target.value;
    dispatch({
      type: UPDATE_SORT,
      payload: value,
    });
  };
  const updateFilters = (
    e: HTMLElementEvent<
      HTMLButtonElement | HTMLSelectElement | HTMLInputElement
    >
  ) => {
    const name = e.target.name;
    let value: number | string | boolean = e.target.value;
    if (name === "category") {
      value = e.target.textContent || "";
    }
    if (name === "color") {
      value = e.target.dataset.color || "";
    }
    if (name === "price") {
      value = Number(value);
    }
    if (name === "shipping") {
      value = (e.target as HTMLInputElement).checked;
    }
    dispatch({
      type: UPDATE_FILTERS,
      payload: {
        name,
        value,
      },
    });
  };
  // const updateSearch = (e: React.FormEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target as HTMLInputElement;
  //   dispatch({
  //     type: UPDATE_FILTERS,
  //     payload: {
  //       name,
  //       value,
  //     },
  //   });
  // };

  // const updateCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
  // console.log(e);
  const clearFilters = () => {
    dispatch({
      type: CLEAR_FILTERS,
    });
  };
  return (
    <FilterContext.Provider
      value={{
        ...state,
        displayGrid,
        displayList,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
