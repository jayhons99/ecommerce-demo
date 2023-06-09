import { createContext, useEffect, useReducer } from "react";
import { useProductsContext } from "../hooks";
import { Product } from "../types";
import reducer from "../reducers/FilterReducer";
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

interface FilterContextType {
  filteredProducts: Product[];
  allProducts: Product[];
  gridView: false;
}

const initialState: FilterContextType = {
  filteredProducts: [],
  allProducts: [],
  gridView: false,
};

export const FilterContext = createContext(initialState);

export const FilterContextProvider: React.FC<FiltersContextProps> = ({
  children,
}) => {
  const { allProducts } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: allProducts });
  }, [allProducts]);

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};
