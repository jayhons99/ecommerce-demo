import {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  createContext,
  useEffect,
  useReducer,
} from "react";
import { useProductsContext } from "../hooks";
import reducer from "../reducers/FilterReducer";
import { FilterContextType } from "../types";
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

const initialState: FilterContextType = {
  filteredProducts: [],
  products: [],
  gridView: true,
  sort: "lowestPrice",
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    minPrice: 0,
    maxPrice: 0,
    price: 0,
    shipping: false,
  },
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
  const updateFilters = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    let value;
    if (e.target.name === "category") {
      value = e.target.textContent;
    }
    dispatch({
      type: UPDATE_FILTERS,
      payload: {
        name,
        value,
      },
    });
  };
  const clearFilters = () => {
    console.log("hi");
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
