/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FaCheck } from "react-icons/fa";
import { useFilterContext } from "../hooks";
import { formatPrice, getUniqueValues } from "../utils/helpers";
import { MouseEventHandler } from "react";

const Filters = () => {
  const { filters, updateFilters, clearFilters, products } = useFilterContext();
  const categories = getUniqueValues(products, "category");
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
              {categories.map((cat: any, i) => {
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
              className="capitalize rounded-md p-1 border-transparent"
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
            <h1 className="font-semibold tracking-wide">
              <div className="flex items-center">
                {colors.map((c: any, i) => {
                  return (
                    <button
                      key={i}
                      name="color"
                      style={{ backgroundColor: c }}
                      className="w-4 h-4 rounded-full bg-[#222] border-none cursor-pointer opacity-50 flex items-center justify-center"
                    ></button>
                  );
                })}
              </div>
            </h1>
          </div>
        </form>
      </div>
    </>
  );
};
export default Filters;
