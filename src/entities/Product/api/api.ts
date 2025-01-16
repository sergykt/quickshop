import { rtkApi } from '@/shared/api/rtkApi';
import { routes } from '@/shared/api/routes';
import { type ProductResponse, type ProductQueries, Products } from './types';

const buildUrl = (queries: ProductQueries) => {
  const { page = 1, limit = 5, name, category } = queries;
  const searchParams = new URLSearchParams();

  searchParams.set('_page', String(page));
  searchParams.set('_limit', String(limit));
  if (name) {
    searchParams.set('name_like', name);
  }
  if (category) {
    searchParams.set('category', category);
  }

  return `${routes.products}?${searchParams.toString()}`;
};

export const productApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<Products, ProductQueries>({
      query: (queries: ProductQueries) => ({
        url: buildUrl(queries),
      }),
      transformResponse: (response: ProductResponse[], meta) => ({
        items: response,
        count: Number(meta?.response?.headers.get('X-Total-Count')),
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
