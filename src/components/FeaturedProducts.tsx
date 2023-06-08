import { useProductsContext } from "../hooks";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";

const FeaturedProducts = () => {
  const {
    featuredProducts: featured,
    allProductsLoading: loading,
    allProductsError: error,
  } = useProductsContext();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <div className="py-20 px-0 bg-green-200">
      <div className="text-center mx-auto w-[60%] max-w-[1170px] lg:w-[10%]">
        <h1 className="font-bold tracking-wide text-2xl pb-2 text-green-950/80 border-b-4 border-green-950 mb-4">
          Featured Products
        </h1>
      </div>
      <div className="w-[90vw] my-16 mx-auto max-w-[1170px] lg:w-[95vw] grid gap-10 md:grid-cols-[repeat(auto-fit,minmax(360px,1fr))]">
        {featured.slice(0, 3).map((product) => {
          return <Product image={""} key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};
export default FeaturedProducts;
