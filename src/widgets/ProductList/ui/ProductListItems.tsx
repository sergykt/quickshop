import { type FC, memo } from 'react';
import { type Products } from '@/entities/Product/api/types';
import { getFavorites, ProductCard, ProductSkeletons } from '@/entities/Product';
import { useAppSelector } from '@/shared/lib/store/hooks';
import styles from './ProductListItems.module.scss';

export interface ProductListItemsProps {
  products: Products;
  isFetching: boolean;
  isFavorite: boolean;
}

export const ProductListItems: FC<ProductListItemsProps> = memo((props) => {
  const { products, isFetching, isFavorite } = props;

  const favorites = useAppSelector(getFavorites);

  if (isFetching) {
    return (
      <div className={styles.products}>
        <ProductSkeletons count={5} />
      </div>
    );
  }

  const filteredProducts = products.items.filter((product) => {
    return isFavorite ? favorites[product.id] : true;
  });

  if (filteredProducts.length === 0) {
    return <p className={styles.nothing}>No products found</p>;
  }

  return (
    <div className={styles.products}>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} favorite={favorites[product.id] ?? false} />
      ))}
    </div>
  );
});
