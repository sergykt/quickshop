import { rtkApi } from '@/shared/api/rtkApi';
import { routes } from '@/shared/api/routes';
import { type ProductResponse, type ProductQueries } from './types';

const buildUrl = (queries: ProductQueries) => {
  const { page = 1, name, category } = queries;
  const searchParams = new URLSearchParams();
  const limit = 5;

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
    getProducts: build.query<ProductResponse[], ProductQueries>({
      query: (queries: ProductQueries) => ({
        url: buildUrl(queries),
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
