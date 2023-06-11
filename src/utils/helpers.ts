import { Product } from "../types";

export const formatPrice: (price: number) => string = (price: number) => {
  const formatted = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);
  return formatted;
};

export const getUniqueValues = (data: Product[], type: string) => {
  let unique = data.map((product) => product[type as keyof Product]);
  if (type === "colors") {
    unique = unique.flat() as any;
  }
  return ["all", ...new Set(unique)];
};
