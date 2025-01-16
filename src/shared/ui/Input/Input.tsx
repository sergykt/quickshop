import { type ComponentProps } from 'react';
import clsx from 'clsx';
import styles from './Input.module.scss';

interface InputProps extends ComponentProps<'input'> {
  label: string;
}

export const Input = (props: InputProps) => {
  const {
    className,
    id,
    name,
    label,
    type,
    placeholder,
    value,
    disabled,
    onChange,
    onBlur,
    autoComplete,
  } = props;

  return (
    <div className={clsx(styles.wrapper, className)}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.input}
        id={id}
        type={type ?? 'text'}
        placeholder={placeholder}
        value={value}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        disabled={disabled}
        autoComplete={autoComplete}
      />
    </div>
  );
};
