import { useContext } from "react";
import { ProductsContext } from "../context/";
import { ProductContextType } from "../types";
const useProductsContext: () => ProductContextType = () => {
  return useContext(ProductsContext);
};

export default useProductsContext;
