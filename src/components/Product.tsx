import { formatPrice } from "../utils/helpers";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

interface ProductProps {
  id: string;
  image: string;
  name: string;
  price: number;
}

const Product: React.FC<ProductProps> = ({ id, image, name, price }) => {
  return (
    <>
      <div>
        <div className="relative group bg-green-950/80 rounded-md">
          <img
            src={image}
            alt="image of a featured product"
            className="w-full block object-cover h-[225px] rounded-md transition-all group-hover:opacity-50"
          />
          <Link
            to={`/products/${id}`}
            className="absolute group-hover:opacity-100 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-green-300/60 flex items-center justify-center w-10 h-10 rounded-md transition-all opacity-0 cursor-pointer"
          >
            <FaSearch className="text-xl text-white/80" />
          </Link>
        </div>
        <footer className=" mt-4 flex justify-between items-center">
          <h1 className="capitalize mb-0 font-semibold">{name}</h1>
          <p className="mb-0 font-semibold text-green-700/60">
            {formatPrice(price)}
          </p>
        </footer>
      </div>
    </>
  );
};
export default Product;
