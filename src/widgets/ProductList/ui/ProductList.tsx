import { memo } from 'react';
import { useGetProductsQuery } from '@/entities/Product/api/api';
import { getFavorites, ProductCard, ProductSkeletons } from '@/entities/Product';
import { useAppSelector } from '@/shared/lib/store/hooks';
import styles from './ProductList.module.scss';

export const ProductList = memo(() => {
  const { data: products, isFetching } = useGetProductsQuery({});
  const favorites = useAppSelector(getFavorites);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Product List</h1>
      <div className={styles.products}>
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            favorite={favorites[product.id] ?? false}
          />
        ))}
        {isFetching && <ProductSkeletons count={5} />}
      </div>
    </div>
  );
});
