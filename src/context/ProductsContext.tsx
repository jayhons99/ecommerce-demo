import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import productsReducer from "../reducers/ProductsReducer";
import {
  SIDEBAR_CLOSE,
  SIDEBAR_OPEN,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
} from "../actions";
import { products_url as allProductsUrl } from "../utils/constants";
import { Product } from "../types";
interface ProductsContextProps {
  children: React.ReactNode;
}

export interface ProductContextType {
  isSidebarOpen: boolean;
  openSidebar?: React.Dispatch<unknown>;
  closeSidebar?: React.Dispatch<unknown>;
  fetchSingleProduct?: (url: string) => Promise<void>;
  allProductsLoading: boolean;
  allProductsError: boolean;
  allProducts: Product[];
  featuredProducts: Product[];
  singleProductLoading: boolean;
  singleProductError: boolean;
  singleProduct: Product;
}

const initialState = {
  isSidebarOpen: false,
  allProductsLoading: false,
  allProductsError: false,
  allProducts: [],
  featuredProducts: [],
  singleProductLoading: false,
  singleProductError: false,
  singleProduct: {
    id: "",
    name: "",
    price: 0,
    description: "",
    stock: 0,
    stars: 0,
    reviews: 0,
    company: "",
    images: [],
  },
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
  const fetchAllProducts: (url: string) => Promise<void> = async (
    url: string
  ) => {
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
      dispatch({
        type: GET_PRODUCTS_ERROR,
      });
    }
  };
  // fetch single product
  const fetchSingleProduct: (url: string) => Promise<void> = async (
    url: string
  ) => {
    dispatch({
      type: GET_SINGLE_PRODUCT_BEGIN,
    });
    try {
      const { data } = await axios.get(url);
      dispatch({
        type: GET_SINGLE_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_SINGLE_PRODUCT_ERROR,
      });
    }
  };
  useEffect(() => {
    fetchAllProducts(allProductsUrl);
  }, []);
  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
