import { createContext } from "react";
import { FilterContextType, ProductContextType } from "../types";
export const initialFilterState: FilterContextType = {
  filteredProducts: [],
  products: [],
  gridView: true,
  sort: "lowestPrice",
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    minPrice: 0,
    maxPrice: 0,
    price: 0,
    shipping: false,
  },
};

export const FilterContext = createContext(initialFilterState);

export const initialProductState = {
  isSidebarOpen: false,
  allProductsLoading: false,
  allProductsError: false,
  allProducts: [],
  featuredProducts: [],
  singleProductLoading: false,
  singleProductError: false,
  singleProduct: {
    id: "",
    name: "",
    colors: [],
    price: 0,
    description: "",
    stock: 0,
    stars: 0,
    reviews: 0,
    company: "",
    image: "",
  },
};

export const ProductsContext =
  createContext<ProductContextType>(initialProductState);
