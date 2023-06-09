import {
  AppState,
  LogoutOptions,
  RedirectLoginOptions,
  User,
} from "@auth0/auth0-react";

export interface ProductImage {
  filename: string;
  height: number;
  id: string;
  size: number;
  thumbnails: object;
  type: string;
  url: string;
}

export interface Product {
  id: string;
  colors: string[];
  name: string;
  price: number;
  description: string;
  stock: number;
  stars: number;
  reviews: number;
  company: string;
  image: string;
  category?: string;
  images: ProductImage[];
  shipping?: boolean;
}

export interface FilterContextType {
  filteredProducts: Product[];
  products: Product[];
  gridView: boolean;
  displayGrid?: () => void;
  displayList?: () => void;
  updateSort?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  updateFilters?: (
    e: HTMLElementEvent<
      HTMLButtonElement | HTMLSelectElement | HTMLInputElement
    >
  ) => void;
  clearFilters?: () => void;
  sort: string;
  filters: {
    text: string;
    company: string;
    category: string;
    color: string;
    minPrice: number;
    maxPrice: number;
    price: number;
    shipping: boolean;
  };
  updateMobileFilters?: (
    e: HTMLElementEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
}

export interface ProductContextType {
  isSidebarOpen: boolean;
  openSidebar?: React.Dispatch<unknown>;
  closeSidebar?: React.Dispatch<unknown>;
  fetchSingleProduct?: (url: string) => Promise<void>;
  allProductsLoading: boolean;
  allProductsError: boolean;
  allProducts: Product[];
  featuredProducts: Product[];
  singleProductLoading: boolean;
  singleProductError: boolean;
  singleProduct: Product;
}

export interface CartContextType {
  cart: CartItem[];
  totalItems: number;
  totalAmount: number;
  shippingFees: number;
  addToCart: (
    id: string,
    color: string,
    amount: number,
    product: Product
  ) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  toggleAmount: (id: string, amount: number) => void;
}

export type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};

export interface CartItem {
  id: string;
  name: string;
  color: string;
  amount: number;
  image: string;
  price: number;
  max: number;
}

export interface UserContextType {
  myUser: User | null;
  loginWithRedirect?: (
    options?: RedirectLoginOptions<AppState> | undefined
  ) => Promise<void>;
  logout?: (options?: LogoutOptions | undefined) => void;
  isAuthenticated: boolean;
}
