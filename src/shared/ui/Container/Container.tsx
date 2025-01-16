import { type FC, type ComponentProps, memo } from 'react';
import clsx from 'clsx';
import styles from './Container.module.scss';

type ContainerProps = ComponentProps<'div'>;

export const Container: FC<ContainerProps> = memo((props) => {
  const { children, className, id } = props;

  return (
    <div className={clsx(styles.container, className)} id={id}>
      {children}
    </div>
  );
});
