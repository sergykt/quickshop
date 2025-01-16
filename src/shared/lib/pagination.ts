import { useSearchParams } from 'react-router-dom';

const getPage = (searchParams: URLSearchParams) => Number(searchParams.get('page')) || 1;

export const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = getPage(searchParams);

  const setPage = (newPage: number) => setSearchParams({ page: String(newPage) });

  return { page, setPage };
};
