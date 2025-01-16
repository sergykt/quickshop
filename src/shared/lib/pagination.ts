import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

export const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('page')) || 1;
  const setPage = useCallback(
    (newPage: number) => {
      setSearchParams((prevParams) => {
        const newParams = new URLSearchParams(prevParams);
        newParams.set('page', String(newPage));
        return newParams;
      });
    },
    [setSearchParams],
  );

  return { page, setPage };
};
