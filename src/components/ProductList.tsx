import GridView from "./GridView";
import ListView from "./ListView";
import { useFilterContext } from "../hooks";

const ProductList = () => {
  const { filteredProducts: filtered } = useFilterContext();
  return <GridView filtered={filtered} />;
};
export default ProductList;
