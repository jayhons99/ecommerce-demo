import { PageHero, Filters, Sort, ProductList } from "../components";

const ProductsPage = () => {
  return (
    <main>
      <PageHero title="Products" />
      <div className="h-[calc(100vh-(20vh + 10rem))]]">
        <div className="w-[90vw] my-16 mx-auto max-w-[1170px] lg:w-[95vw] grid gap-y-12 gap-x-6 lg:grid-cols-[260px,1fr]">
          <Filters />
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
