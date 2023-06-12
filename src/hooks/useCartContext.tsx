import { useContext } from "react";
import { CartContext } from "../context";

const useCartContext = () => {
  return useContext(CartContext);
};
export default useCartContext;
