export interface ProductResponse {
  id: string;
  name: string;
  image: string;
  category: string;
  price: number;
}

export interface Products {
  items: ProductResponse[];
  count: number;
}

export interface ProductQueries {
  name?: string;
  categories?: string[];
}
