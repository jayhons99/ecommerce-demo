/* eslint-disable @typescript-eslint/no-unused-vars */
import { FaCheck } from "react-icons/fa";
import { useFilterContext } from "../hooks";
import { formatPrice } from "../utils/helpers";

const Filters = () => {
  const { filters, updateFilters, clearFilters, products } = useFilterContext();
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
        </form>
      </div>
    </>
  );
};
export default Filters;
