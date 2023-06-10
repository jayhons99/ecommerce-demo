// import Fuse from "fuse.js";
import { Product } from "../types";

export const formatPrice: (price: number) => string = (price: number) => {
  const formatted = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);
  return formatted;
};

// export const matchString: (
//   products: Product[],
//   pattern: string
// ) => Fuse.FuseResult<Product>[] = (products: Product[], pattern: string) => {
//   const options = {
//     keys: ["name"],
//   };
//   const fuse = new Fuse(products, options);
//   return fuse.search(pattern);
// };
