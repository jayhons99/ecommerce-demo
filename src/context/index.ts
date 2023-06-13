import { createContext } from "react";
import {
  CartContextType,
  FilterContextType,
  Product,
  ProductContextType,
} from "../types";
import { getLocalStorage } from "../utils/helpers";
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
  images: [],
  singleProduct: {
    id: "",
    name: "",
    colors: [],
    price: 0,
    description: "",
    stock: 0,
    stars: 0,
    reviews: 0,
    images: [],
    company: "",
    image: "",
  },
};

export const ProductsContext =
  createContext<ProductContextType>(initialProductState);

export const initialCartState: CartContextType = {
  cart: getLocalStorage(),
  totalItems: 0,
  totalAmount: 0,
  shippingFees: 499,
  addToCart: function (
    id: string,
    color: string,
    amount: number,
    product: Product
  ): void {
    if (!(id && color && amount && product)) {
      throw new Error("Function not implemented.");
    }
  },
  removeItem: function (id: string): void {
    console.log(id);
    throw new Error("Function not implemented");
  },
  clearCart: () => {throw new Error("Function not implemented")}
};
export const CartContext = createContext(initialCartState);
