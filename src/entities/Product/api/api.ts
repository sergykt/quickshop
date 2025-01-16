import { rtkApi } from '@/shared/api/rtkApi';
import { routes } from '@/shared/api/routes';
import { type ProductResponse, type ProductQueries, Products } from './types';

const buildUrl = (queries: ProductQueries) => {
  const { name, categories } = queries;
  const searchParams = new URLSearchParams();

  if (name && name.length > 2) {
    searchParams.set('name_like', name);
  }
  if (categories?.length) {
    categories.forEach((category) => searchParams.append('category', category));
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
