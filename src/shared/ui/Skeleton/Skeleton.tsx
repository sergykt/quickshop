import { type CSSProperties, memo } from 'react';
import clsx from 'clsx';
import styles from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: number;
  width?: number;
  border?: string;
  margin?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
  const { className, height, width, border, margin } = props;

  const style: CSSProperties = {
    width,
    height,
    borderRadius: border,
    margin,
  };

  return <div className={clsx(styles.skeleton, className)} style={style} />;
});
