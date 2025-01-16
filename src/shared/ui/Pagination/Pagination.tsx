import { type FC, memo } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import styles from './Pagination.module.scss';

interface PaginationProps {
  page: number;
  pagesCount: number;
  onPageChange: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = memo((props) => {
  const { page, pagesCount, onPageChange } = props;

  const toPrevPage = () => onPageChange(page - 1);

  const toNextPage = () => onPageChange(page + 1);

  return (
    <div className={styles.pagination}>
      <button type='button' className={styles.button} onClick={toPrevPage} disabled={page === 1}>
        <GrPrevious className={styles.arrow} />
      </button>
      <p className={styles.page}>Page #{page}</p>
      <button
        type='button'
        className={styles.button}
        onClick={toNextPage}
        disabled={page >= pagesCount}
      >
        <GrNext className={styles.arrow} />
      </button>
    </div>
  );
});
