import { Product } from "../types";

export const formatPrice: (price: number) => string = (price: number) => {
  const formatted = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);
  return formatted;
};

export const getUniqueValues = (data: Product[], type: string) => {
  const unique = data.map((product) => product[type as keyof Product]);
  let flattened;
  if (type === "colors") {
    flattened = unique.flat();
  }
  return ["all", ...new Set(flattened)];
};
