import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useProductFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const categories = searchParams.getAll('category') ?? [];
  const name = searchParams.get('name') ?? '';
  const isFavorite = searchParams.get('favorite') === 'true';

  const setName = useCallback(
    (newName: string) => {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        if (newName) {
          newParams.set('name', newName);
        } else {
          newParams.delete('name');
        }
        return newParams;
      });
    },
    [setSearchParams],
  );

  const toggleFavorite = useCallback(() => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      if (isFavorite) {
        newParams.delete('favorite');
      } else {
        newParams.set('favorite', 'true');
      }
      return newParams;
    });
  }, [isFavorite, setSearchParams]);

  const toggleCategory = useCallback(
    (categoryToToggle: string) => {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        const prevCategories = newParams.getAll('category');

        if (prevCategories.includes(categoryToToggle)) {
          newParams.delete('category');
          prevCategories
            .filter((item) => item !== categoryToToggle)
            .forEach((item) => {
              newParams.append('category', item);
            });
        } else {
          newParams.append('category', categoryToToggle);
        }

        return newParams;
      });
    },
    [setSearchParams],
  );

  return { name, categories, isFavorite, setName, toggleCategory, toggleFavorite };
};
