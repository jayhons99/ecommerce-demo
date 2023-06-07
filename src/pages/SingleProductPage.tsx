/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { single_products_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import { useProductsContext } from "../hooks";
import { Loading, Error, PageHero, ProductImages, Stars } from "../components";

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    singleProductLoading: loading,
    singleProductError: error,
    singleProduct: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct && fetchSingleProduct(`${url}${id}`);
  }, [id]);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [error]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;
  return (
    <>
      <PageHero title={name} product={true} />
      <div className="py-20 px-0 w-[90vw] my-0 mx-auto max-w-[1170px] lg:w-[95vw]">
        <Link
          to="/products"
          className="bg-green-950 text-green-300/80 py-[0.375rem] px-[0.75rem] tracking-wider font-semibold transition-colors text-lg cursor-pointer rounded-md border-transparent hover:bg-green-500/80 hover:text-green-950/80"
        >
          Back to Products
        </Link>
        <div className="grid gap-16 mt-8 lg:grid-cols-2 lg:items-center">
          <ProductImages />
          <section className="">
            <h1 className="capitalize text-2xl font-bold text-green-950/80">
              {name}
            </h1>
            <Stars />
            <h1 className="text-green-700/80 font-semibold">
              {formatPrice(price)}
            </h1>
          </section>
        </div>
      </div>
    </>
  );
};
export default SingleProductPage;
