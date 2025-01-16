import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useProductFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const categories = searchParams.getAll('category') ?? [];
  const name = searchParams.get('name') ?? '';

  const setName = useCallback(
    (newName: string) => {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        if (newName) {
          newParams.set('name', newName);
        } else {
          newParams.delete('name');
        }
        newParams.set('page', '1');
        return newParams;
      });
    },
    [setSearchParams],
  );

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

  return { name, categories, setName, toggleCategory };
};
