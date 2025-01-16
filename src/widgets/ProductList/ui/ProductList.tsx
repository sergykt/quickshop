import { memo } from 'react';
import { useGetProductsQuery } from '@/entities/Product/api/api';
import { ProductListItems } from './ProductListItems';
import { ProductFilter } from './ProductFilter';
import styles from './ProductList.module.scss';
import { useProductFilters } from '../lib/useProductFilters';

export const ProductList = memo(() => {
  const { name, categories, isFavorite, setName, toggleCategory, toggleFavorite } =
    useProductFilters();
  const { data, isFetching } = useGetProductsQuery({
    name,
    categories,
  });

  const products = data ?? { items: [], count: 0 };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Product List</h1>
      <ProductFilter
        name={name}
        categories={categories}
        setName={setName}
        toggleCategory={toggleCategory}
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
      />
      <ProductListItems products={products} isFetching={isFetching} isFavorite={isFavorite} />
    </div>
  );
});
