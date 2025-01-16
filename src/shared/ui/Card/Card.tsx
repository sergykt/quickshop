import { type FC, type ReactNode, memo } from 'react';
import clsx from 'clsx';
import styles from './Card.module.scss';

interface CardProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  image: string;
  className?: string;
}

export const Card: FC<CardProps> = memo((props) => {
  const { children, title, subtitle, image, className } = props;

  return (
    <div className={clsx(styles.card, className)}>
      <h4 className={styles.subtitle}>{subtitle}</h4>
      <div className={styles.image}>
        <img src={image} alt={title} width='200' height='200' loading='lazy' />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
});
