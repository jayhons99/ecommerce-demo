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
  colors?: string[];
  name: string;
  price: number;
  description: string;
  stock: number;
  stars: number;
  reviews: number;
  company: string;
  images: ProductImage[];
}
