export const formatPrice: (price: number) => string = (price: number) => {
  const formatted = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);
  return formatted;
};
