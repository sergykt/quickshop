import { type ComponentProps, type FC, memo } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

type ButtonProps = ComponentProps<'button'>;

export const Button: FC<ButtonProps> = memo((props) => {
  const { type, children, disabled, id, className, ref, onClick } = props;

  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      id={id}
      ref={ref}
      className={clsx(styles.button, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
});
