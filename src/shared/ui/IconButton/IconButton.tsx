import { type ComponentProps, memo } from 'react';
import clsx from 'clsx';
import styles from './IconButton.module.scss';

type IconButtonProps = ComponentProps<'button'>;

export const IconButton = memo((props: IconButtonProps) => {
  const { id, className, onClick, type, children, disabled, ref } = props;

  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      id={id}
      className={clsx(styles.iconButton, className)}
      onClick={onClick}
      disabled={disabled}
      ref={ref}
    >
      {children}
    </button>
  );
});
