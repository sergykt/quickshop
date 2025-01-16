import { Card } from '@/shared/ui/Card';
import clsx from 'clsx';
import { MdFavorite } from 'react-icons/md';
import { IconButton } from '@/shared/ui/IconButton';
import { useAppDispatch } from '@/shared/lib/store/hooks';
import { type ProductResponse } from '../../api/types';
import { productsActions } from '../../model/slice';
import styles from './ProductCard.module.scss';

export interface ProductCardProps {
  product: ProductResponse;
  favorite: boolean;
}

export const ProductCard = ({ product, favorite }: ProductCardProps) => {
  const { name, image, category, price } = product;
  const dispatch = useAppDispatch();

  const toggleLike = () => {
    dispatch(productsActions.toggleLike(product.id));
  };

  return (
    <Card title={name} image={image} subtitle={category}>
      <div className={styles.cardBody}>
        <div className={styles.price}>$ {price}</div>
        <IconButton
          className={clsx(styles.likeButton, { [styles.favorite]: favorite })}
          onClick={toggleLike}
        >
          <MdFavorite />
        </IconButton>
      </div>
    </Card>
  );
};
