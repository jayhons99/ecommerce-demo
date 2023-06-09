import { Product as ProductType } from "../types";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

interface ListViewProps {
  filtered: ProductType[];
}

const ListView: React.FC<ListViewProps> = ({ filtered }) => {
  return (
    <div className="grid grid-cols-1 gap-y-12">
      {filtered.map((product) => {
        const { id, image, name, price, description } = product;
        return (
          <article
            key={id}
            className="lg:grid grid-cols-2 gap-x-8 items-center"
          >
            <img
              src={image}
              alt={name}
              className="rounded-md w-full h-[200px] object-cover"
            />
            <div>
              <h1 className="capitalize mt-4 font-bold text-lg tracking-wider">
                {name}
              </h1>
              <p className="text-green-700/80 mb-4">{formatPrice(price)}</p>
              <p className="leading-7">{description.substring(0, 150)}...</p>
              <Link
                to={`/products/${id}`}
                aria-label="Go to product"
                className="py-1 px-2 mt-4 w-[100px] inline-block border-transparent bg-green-950/80 rounded-md text-green-300 font-semibold transition-all hover:bg-green-300/80 hover:text-green-950"
              >
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default ListView;
