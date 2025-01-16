import { memo, useEffect } from 'react';
import { useGetProductsQuery } from '@/entities/Product/api/api';
import { Pagination } from '@/shared/ui/Pagination';
import { usePagination } from '@/shared/lib/pagination';
import { ProductListItems } from './ProductListItems';
import { ProductFilter } from './ProductFilter';
import styles from './ProductList.module.scss';
import { useProductFilters } from '../lib/useProductFilters';

const limit = 5;

export const ProductList = memo(() => {
  const { page, setPage } = usePagination();
  const { name, categories, setName, toggleCategory } = useProductFilters();
  const { data, isFetching } = useGetProductsQuery({
    limit,
    page,
    name,
    categories,
  });

  const products = data ?? { items: [], count: 0 };
  const pages = Math.ceil(products.count / limit) || 1;

  useEffect(() => {
    if (page > pages || page < 1) {
      setPage(pages);
    }
  }, [page, pages, setPage]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Product List</h1>
      <ProductFilter
        name={name}
        categories={categories}
        setName={setName}
        toggleCategory={toggleCategory}
      />
      <ProductListItems products={products} limit={limit} isFetching={isFetching} />
      <Pagination page={page} pagesCount={pages} onPageChange={setPage} />
    </div>
  );
});
