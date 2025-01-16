import { memo } from 'react';
import { Skeleton } from '@/shared/ui/Skeleton';

export const ProductSkeleton = memo(() => {
  return <Skeleton width={256} height={395} border='8px' />;
});

interface UserSkeletonProps {
  count: number;
}

export const ProductSkeletons = memo(({ count }: UserSkeletonProps) => {
  const skeletonArray = Array.from({ length: count }, (_, i) => i);

  return (
    <>
      {skeletonArray.map((skeleton) => (
        <ProductSkeleton key={skeleton} />
      ))}
    </>
  );
});
