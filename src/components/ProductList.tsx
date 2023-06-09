import GridView from "./GridView";
import ListView from "./ListView";
import { useFilterContext } from "../hooks";

const ProductList = () => {
  const { filteredProducts: filtered, gridView } = useFilterContext();
  if (filtered.length < 1) {
    return (
      <h1 className="font-semibold tracking-wide">
        Sorry, no products matched your search
      </h1>
    );
  }
  if (gridView === false) {
    return <ListView filtered={filtered} />;
  }
  return <GridView filtered={filtered} />;
};
export default ProductList;
