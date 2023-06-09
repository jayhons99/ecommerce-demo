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
  gridView: boolean;
  displayGrid?: () => void;
  displayList?: () => void;
}

const initialState: FilterContextType = {
  filteredProducts: [],
  allProducts: [],
  gridView: true,
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
  return (
    <FilterContext.Provider value={{ ...state, displayGrid, displayList }}>
      {children}
    </FilterContext.Provider>
  );
};
