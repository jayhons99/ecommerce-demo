/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FaCheck } from "react-icons/fa";
import { useFilterContext } from "../hooks";
import { formatPrice, getUniqueValues } from "../utils/helpers";

const Filters = () => {
  const { filters, updateFilters, clearFilters, products } = useFilterContext();
  const categories = getUniqueValues(products, "category") as string[];
  const companies = getUniqueValues(products, "company");
  const colors = getUniqueValues(products, "colors");
  return (
    <>
      <div className="lg:sticky lg:top-4">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search */}
          <div className="mb-5">
            <input
              type="text"
              name="text"
              placeholder="Search..."
              className="p-2 rounded-md border-transparent tracking-wide"
              value={filters?.text}
              onChange={updateFilters}
            />
          </div>
          {/* categories */}
          <div className="mb-5">
            <h1 className="font-semibold tracking-wide">Category</h1>
            <div>
              {categories.map((cat: string, i) => {
                return (
                  <button
                    key={i}
                    className={`${
                      filters?.category === cat.toLowerCase()
                        ? "border-b-2 border-green-950"
                        : "border-none"
                    } capitalize block my-1 mx-0 py-1 px-0 bg-transparent tracking-wide text-green-950`}
                    onClick={updateFilters}
                    name="category"
                    value={cat}
                    type="button"
                  >
                    {cat as string}
                  </button>
                );
              })}
            </div>
          </div>
          {/* companies */}
          <div className="mb-5">
            <h1 className="font-semibold tracking-wide">Company</h1>
            <select
              name="company"
              value={filters?.company}
              onChange={updateFilters}
              className="capitalize rounded-md p-1 border-transparent my-1"
            >
              {companies.map((c: any, i) => {
                return (
                  <option key={i} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* colors */}
          <div className="mb-5">
            <h1 className="font-semibold tracking-wide">Colors</h1>
            <div className="flex items-center my-1">
              {colors.map((c: any, i) => {
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
          <div className="mb-5">
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
            {/* shipping */}
            <div className="mb-5 grid grid-cols-[auto,1fr] items-center gap-x-2">
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
          </div>
        </form>
        {/* clear filters */}
        <button
          type="button"
          className="bg-green-950/80 text-green-300 py-1 px-2 rounded-md transition-all hover:bg-green-300 hover:text-green-950/80"
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </div>
    </>
  );
};
export default Filters;
