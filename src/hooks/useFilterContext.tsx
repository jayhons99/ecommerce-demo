import { useContext } from "react";
import { FilterContext } from "../context/";

export const useFilterContext = () => {
  return useContext(FilterContext);
};
