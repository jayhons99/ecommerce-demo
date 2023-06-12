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
  images?: ProductImage[];
  shipping?: boolean;
}

export interface FilterContextType {
  filteredProducts: Product[];
  products: Product[];
  gridView: boolean;
  displayGrid?: () => void;
  displayList?: () => void;
  updateSort?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  updateFilters?: (e: any) => void;
  clearFilters?: () => void;
  sort?: string;
  filters?: {
    text: string;
    company: string;
    category: string;
    color: string;
    minPrice: number;
    maxPrice: number;
    price: number;
    shipping: boolean;
  };
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
  cart: [];
  totalItems: number;
  totalAmount: number;
  shippingFees: number;
}

export type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};
