import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import productsReducer from "../reducers/ProductsReducer";
import {
  SIDEBAR_CLOSE,
  SIDEBAR_OPEN,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
} from "../actions";
import { products_url as allProductsUrl } from "../utils/constants";

interface ProductsContextProps {
  children: React.ReactNode;
}

export interface ProductContextType {
  isSidebarOpen: boolean;
  openSidebar?: React.Dispatch<unknown>;
  closeSidebar?: React.Dispatch<unknown>;
  allProductsLoading: boolean;
  allProductsError: boolean;
  allProducts: object[];
  featuredProducts: object[];
}

const initialState = {
  isSidebarOpen: false,
  allProductsLoading: false,
  allProductsError: false,
  allProducts: [],
  featuredProducts: [],
};

export const ProductsContext = createContext<ProductContextType>(initialState);

export const ProductsContextProvider: React.FC<ProductsContextProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);
  const closeSidebar = () => {
    dispatch({
      type: SIDEBAR_CLOSE,
    });
  };
  const openSidebar = () => {
    dispatch({
      type: SIDEBAR_OPEN,
    });
  };
  // fetch all products
  const fetchAllProducts = async (url: string) => {
    dispatch({
      type: GET_PRODUCTS_BEGIN,
    });
    try {
      const { data } = await axios.get(url);
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchAllProducts(allProductsUrl);
  }, []);
  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};
