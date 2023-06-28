import {
  PageHero,
  Filters,
  Sort,
  ProductList,
  MobileFilter,
} from "../components";
import { useState } from "react";

const ProductsPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <main>
      <PageHero title="Products" />
      <div className="h-[calc(100vh-(20vh + 10rem))]] min-h-[calc(80vh-10rem)]">
        <div className="w-[90vw] my-16 mx-auto max-w-[1170px] lg:w-[95vw] grid gap-y-12 gap-x-6 lg:grid-cols-[260px,1fr]">
          <div className="lg:hidden">
            <div>
              {isFilterOpen ? (
                <>
                  <MobileFilter />
                  <p
                    className="w-[30%] bg-green-950/80 text-green-300 py-1 px-2 rounded-md transition-all hover:bg-green-300 hover:text-green-950/80"
                    onClick={() => setIsFilterOpen(false)}
                  >
                    Close Filters
                  </p>
                </>
              ) : (
                <p
                  className="w-[30%] bg-green-950/80 text-green-300 py-1 px-2 rounded-md transition-all hover:bg-green-300 hover:text-green-950/80"
                  onClick={() => setIsFilterOpen(true)}
                >
                  Open Filters
                </p>
              )}
            </div>
          </div>
          <div className="hidden lg:block">
            <Filters />
          </div>
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </div>
    </main>
  );
};
export default ProductsPage;
