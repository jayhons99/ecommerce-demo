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

export interface FilterContextType {
  filteredProducts: Product[];
  products: Product[];
  gridView: boolean;
  displayGrid?: () => void;
  displayList?: () => void;
  updateSort?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  sort?: string;
}

const initialState: FilterContextType = {
  filteredProducts: [],
  products: [],
  gridView: true,
  sort: "lowestPrice",
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

  useEffect(() => {
    dispatch({
      type: SORT_PRODUCTS,
    });
  }, [allProducts, state.sort]);
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
    const name = e.target.name;
    const value = e.target.value;
    dispatch({
      type: UPDATE_SORT,
      payload: value,
    });
  };
  return (
    <FilterContext.Provider
      value={{ ...state, displayGrid, displayList, updateSort }}
    >
      {children}
    </FilterContext.Provider>
  );
};
