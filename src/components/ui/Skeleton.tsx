import type { HTMLAttributes } from 'react'

type SkeletonVariant = 'text' | 'circle' | 'rectangular'

type SkeletonProps = HTMLAttributes<HTMLDivElement> & {
  variant?: SkeletonVariant
}

const variantClasses: Record<SkeletonVariant, string> = {
  text: 'h-4 rounded-md',
  circle: 'aspect-square rounded-full',
  rectangular: 'rounded-2xl',
}

export default function Skeleton({ variant = 'rectangular', className = '', ...props }: SkeletonProps) {
  return (
    <div
      {...props}
      aria-hidden="true"
      className={`bionics-skeleton ${variantClasses[variant]} ${className}`}
    />
  )
}
