import { type ChangeEvent, memo, useState } from 'react';
import clsx from 'clsx';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { useDebounce } from '@/shared/lib/helperHooks/useDebounce';
import styles from './ProductFilter.module.scss';

export interface ProductFilterProps {
  name: string;
  categories: string[];
  setName: (name: string) => void;
  toggleCategory: (category: string) => void;
  toggleFavorite: () => void;
  isFavorite: boolean;
}

export const ProductFilter = memo((props: ProductFilterProps) => {
  const { name, categories, isFavorite, setName, toggleCategory, toggleFavorite } = props;
  const [inputValue, setInputValue] = useState(name);

  const debouncedSetName = useDebounce(setName, 500);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (e.target.value.length > 2 || e.target.value.length === 0) {
      debouncedSetName(e.target.value);
    }
  };

  return (
    <div className={styles.filter}>
      <Input
        type='text'
        id='name'
        label='Search:'
        value={inputValue}
        onChange={onChange}
        className={styles.input}
        placeholder='Enter product name'
        autoComplete='off'
      />
      <div className={styles.categories}>
        <Button
          onClick={() => toggleCategory('laptops')}
          className={clsx({ [styles.disabled]: !categories.includes('laptops') })}
        >
          Laptops
        </Button>
        <Button
          className={clsx({ [styles.disabled]: !categories.includes('phones') })}
          onClick={() => toggleCategory('phones')}
        >
          Phones
        </Button>
        <Button onClick={toggleFavorite} className={clsx({ [styles.disabled]: !isFavorite })}>
          Favorite
        </Button>
      </div>
    </div>
  );
});
