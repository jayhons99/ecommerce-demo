// @ts-nocheck
import { useFilterContext } from "../hooks";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const MobileFilter = () => {
  const {
    filters,
    updateMobileFilters,
    updateFilters,
    clearFilters,
    products,
  } = useFilterContext();
  const categories = getUniqueValues(products, "category") as string[];
  const companies = getUniqueValues(products, "company") as string[];
  const colors = getUniqueValues(products, "colors") as string[];

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        {/* search */}
        <div className="mb-2">
          <input
            type="text"
            name="text"
            placeholder="Search..."
            className="p-2 rounded-md border-transparent tracking-wide"
            value={filters?.text}
            onChange={updateFilters}
          />
        </div>
        {/* categories and companies and colors */}
        <div className="mb-2 grid grid-cols-2">
          <div>
            <h1>Categories</h1>
            <select
              name="category"
              value={filters?.category}
              onChange={updateMobileFilters}
              className="capitalize rounded-md p-1 border-transparent my-1"
            >
              {categories.map((c, i) => {
                return (
                  <option key={i} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <h1>Companies</h1>
            <select
              name="company"
              value={filters?.company}
              onChange={updateFilters}
              className="capitalize rounded-md p-1 border-transparent my-1"
            >
              {companies.map((c, i) => {
                return (
                  <option key={i} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        {/* colors and price */}
        <div className="my-2 grid grid-cols-2">
          <div>
            <h1 className="font-semibold tracking-wide">Colors</h1>
            <div className="flex items-center my-1">
              {colors.map((c: string, i) => {
                if (c === "all") {
                  return (
                    <button
                      key={i}
                      name="color"
                      onClick={updateFilters}
                      data-color="all"
                      className={`${
                        filters?.color === "all" ? "opacity-100" : "opacity-50"
                      } flex items-center justify-center mr-2 border-r-2 pr-2 py-0 border-neutral-400`}
                    >
                      All
                    </button>
                  );
                }
                return (
                  <button
                    key={i}
                    name="color"
                    style={{ backgroundColor: c }}
                    className={`${
                      filters?.color === c ? "opacity-100" : "opacity-50"
                    } w-4 h-4 rounded-full bg-[#222] border-none cursor-pointer mr-2 flex items-center justify-center`}
                    data-color={c}
                    onClick={updateFilters}
                  >
                    {filters?.color === c && (
                      <FaCheck className="text-white text-[0.5rem]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
          {/* price */}
          <div>
            <h1 className="font-semibold tracking-wide">Price</h1>
            <p>{formatPrice(filters?.price as number)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              value={filters?.price}
              min={filters?.minPrice}
              max={filters?.maxPrice}
            />
          </div>
        </div>
        {/* shipping */}
        <div className="mb-2 grid grid-cols-[auto,1fr] items-center gap-x-2">
          <label htmlFor="shipping">Free shipping</label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            onChange={updateFilters}
            checked={filters?.shipping}
            className="max-w-[10%]"
          />
        </div>
      </form>
      <hr className="my-2 border-1 border-green-950/80" />
      <button
        type="button"
        className="bg-green-950/80 text-green-300 py-1 px-2 my-2 rounded-md transition-all hover:bg-green-300 hover:text-green-950/80"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  );
};
export default MobileFilter;
