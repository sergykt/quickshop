import { memo, useEffect } from 'react';
import { useGetProductsQuery } from '@/entities/Product/api/api';
import { getFavorites, ProductCard, ProductSkeletons } from '@/entities/Product';
import { useAppSelector } from '@/shared/lib/store/hooks';
import { Pagination } from '@/shared/ui/Pagination';
import { usePagination } from '@/shared/lib/pagination';
import styles from './ProductList.module.scss';

const limit = 2;

export const ProductList = memo(() => {
  const { page, setPage } = usePagination();
  const { data: products, isFetching } = useGetProductsQuery({ limit, page });
  const favorites = useAppSelector(getFavorites);

  const pages = Math.ceil((products?.count ?? 1) / limit);

  console.log(page);

  useEffect(() => {
    if (page > pages || page < 1) {
      setPage(pages);
    }
  }, [page, pages, setPage]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Product List</h1>
      <div className={styles.products}>
        {!isFetching &&
          products?.items.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              favorite={favorites[product.id] ?? false}
            />
          ))}
        {isFetching && <ProductSkeletons count={limit} />}
      </div>
      <Pagination page={page} pagesCount={pages} onPageChange={setPage} />
    </div>
  );
});
