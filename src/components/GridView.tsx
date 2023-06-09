import { Product as ProductType } from "../types";
import Product from "./Product";

interface GridViewProps {
  filtered: ProductType[];
}

const GridView: React.FC<GridViewProps> = ({ filtered }) => {
  return (
    <div className="grid gap-y-8 gap-x-6 min-[992px]:grid-cols-2 min-[1170px]:grid-cols-3">
      {filtered.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
};
export default GridView;
