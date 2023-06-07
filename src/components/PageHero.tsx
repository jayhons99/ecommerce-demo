import { RxCaretLeft } from "react-icons/rx";
import { Link } from "react-router-dom";

interface PageHeroProps {
  title: string;
  product: boolean;
}

const PageHero: React.FC<PageHeroProps> = ({ title, product }) => {
  return (
    <div className="bg-green-950/90 w-full min-h-[20vh] flex items-center">
      <div className="w-[90vw] my-0 mx-auto max-w-[1170px] lg:max-w-[61vw]">
        <h1 className="flex items-center gap-1">
          <Link
            to="/"
            className="flex items-center justify-start hover:underline decoration-green-300/80"
          >
            <RxCaretLeft size={30} className="text-green-300/80" />
            <span className="font-bold text-base text-green-400/80 lg:text-lg">
              Home
            </span>
          </Link>{" "}
          {product && (
            <Link
              to="/products"
              className="font-bold text-base text-green-300/80 decoration-green-300/80 lg:text-lg"
            >
              / Products
            </Link>
          )}
          <span className="font-bold text-base text-green-300/80 capitalize lg:text-lg">
            <span className="text-green-500/80">/</span>
            {" " + title}
          </span>
        </h1>
      </div>
    </div>
  );
};
export default PageHero;
