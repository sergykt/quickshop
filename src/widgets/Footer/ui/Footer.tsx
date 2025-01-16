import { type FC, memo } from 'react';
import { Container } from '@/shared/ui/Container';
import styles from './Footer.module.scss';

export const Footer: FC = memo(() => (
  <footer>
    <Container>
      <div className={styles.copyright}>© 2025 Created by Sergei Sivtsev</div>
    </Container>
  </footer>
));
