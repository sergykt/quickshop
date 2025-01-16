export interface ProductResponse {
  id: string;
  name: string;
  image: string;
  category: string;
  price: number;
}

export interface ProductQueries {
  page?: number;
  name?: string;
  category?: string;
}
