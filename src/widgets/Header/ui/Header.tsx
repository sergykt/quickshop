import { memo } from 'react';
import { Container } from '@/shared/ui/Container';
import styles from './Header.module.scss';

export const Header = memo(() => {
  return (
    <header className={styles.header}>
      <Container>Header</Container>
    </header>
  );
});
