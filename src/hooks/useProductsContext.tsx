import { useContext } from "react";
import {
  ProductContextType,
  ProductsContext,
} from "../context/ProductsContext";
const useProductsContext: () => ProductContextType = () => {
  return useContext(ProductsContext);
};

export default useProductsContext;
