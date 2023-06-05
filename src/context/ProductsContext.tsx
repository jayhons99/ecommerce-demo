/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
import productsReducer from "../reducers/ProductsReducer";
import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from "../actions";

interface ProductsContextProps {
  children: React.ReactNode;
}

interface ProductContextType {
  isSidebarOpen: boolean;
  openSidebar?: React.Dispatch<unknown>;
  closeSidebar?: React.Dispatch<unknown>;
}

const initialState = {
  isSidebarOpen: false,
};

const ProductsContext = createContext<ProductContextType>(initialState);

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
  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext: () => ProductContextType = () => {
  return useContext(ProductsContext);
};
