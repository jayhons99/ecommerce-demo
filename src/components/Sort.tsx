import { BsGrid, BsList } from "react-icons/bs";
import { useFilterContext } from "../hooks";

const Sort = () => {
  const {
    gridView,
    displayGrid,
    displayList,
    filteredProducts: products,
    sort,
    updateSort,
  } = useFilterContext();
  return (
    <div className="mb-2 grid grid-cols-1 gap-y-3 sm:grid-cols-[auto,auto,1fr,auto] sm:gap-x-8 items-center">
      <div className="flex items-center text-2xl text-green-950 cursor-pointer gap-x-2">
        <button className={`sort-button ${gridView && "active"}`}>
          <BsGrid onClick={displayGrid} />
        </button>
        <button className={`sort-button ${!gridView && "active"}`}>
          <BsList onClick={displayList} />
        </button>
      </div>
      <p>{products.length} products found</p>
      <hr className="border-green-950" />
      <form>
        <label htmlFor="sort" className="text-base sm:inline-block mr-2">
          Sort by
        </label>
        <select
          name="sort"
          id="sort"
          value={sort}
          onChange={updateSort}
          className="border-transparent text-base py-1 px-2 rounded-md"
        >
          <option value="lowestPrice">Price (lowest)</option>
          <option value="highestPrice">Price (highest)</option>
          <option value="nameFromA">Name (A-Z)</option>
          <option value="nameFromZ">Name (Z-A)</option>
        </select>
      </form>
    </div>
  );
};
export default Sort;
