import { Product as ProductType } from "../types";
import Product from "./Product";

interface ListViewProps {
  filtered: ProductType[];
}

const ListView: React.FC<ListViewProps> = ({ filtered }) => {
  return (
    <div className="grid grid-cols-[460px] gap-y-12">
      {filtered.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
};
export default ListView;
