import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from '@/shared/ui/Container';
import { appRoutes } from '@/shared/const/router';
import styles from './Header.module.scss';

export const Header = memo(() => {
  return (
    <header className={styles.header}>
      <Container className={styles.content}>
        <NavLink to={appRoutes.mainPage}>
          <img src='/img/logo.png' alt='logo' width='36' height='36' />
        </NavLink>
        <p className={styles.title}>Quick Shop</p>
      </Container>
    </header>
  );
});
