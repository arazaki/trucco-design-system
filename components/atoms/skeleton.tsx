'use client'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Skeleton as ShadcnSkeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

/**
 * Trucco Enhanced Skeleton Component
 * 
 * Wraps shadcn/ui Skeleton with Trucco's semantic theming system and additional features.
 * Provides enhanced skeleton variants, shapes, and sizes for better loading states.
 */

const truccoSkeletonVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: '',
        primary: 'bg-primary/10',
        secondary: 'bg-secondary/10',
        muted: 'bg-muted/50',
        subtle: 'bg-muted/30',
      },
      shape: {
        rectangle: 'rounded-md',
        circle: 'rounded-full',
        pill: 'rounded-full',
        none: 'rounded-none',
      },
      size: {
        sm: 'h-3',
        md: 'h-4',
        lg: 'h-5',
        xl: 'h-6',
      },
      animation: {
        pulse: 'animate-pulse',
        none: '',
        shimmer: 'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent',
      },
    },
    defaultVariants: {
      variant: 'default',
      shape: 'rectangle',
      size: 'md',
      animation: 'pulse',
    },
  }
)

export interface SkeletonProps
  extends Omit<React.ComponentProps<typeof ShadcnSkeleton>, 'className'>,
    VariantProps<typeof truccoSkeletonVariants> {
  className?: string
  variant?: 'default' | 'primary' | 'secondary' | 'muted' | 'subtle'
  shape?: 'rectangle' | 'circle' | 'pill' | 'none'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animation?: 'pulse' | 'none' | 'shimmer'
}

// Preset skeleton patterns
export interface SkeletonTextProps extends Omit<SkeletonProps, 'children'> {
  lines?: number
  width?: 'full' | 'half' | 'quarter' | 'third' | 'two-thirds'
}

export interface SkeletonAvatarProps extends Omit<SkeletonProps, 'shape' | 'children'> {
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export interface SkeletonCardProps extends Omit<SkeletonProps, 'children'> {
  showImage?: boolean
  showHeader?: boolean
  showFooter?: boolean
  lines?: number
}

const Skeleton = React.forwardRef<
  React.ElementRef<typeof ShadcnSkeleton>,
  SkeletonProps
>(
  ({ 
    className, 
    variant = 'default',
    shape = 'rectangle',
    size = 'md',
    animation = 'pulse',
    ...props 
  }, ref) => {
    return (
      <ShadcnSkeleton
        ref={ref}
        className={cn(
          truccoSkeletonVariants({ variant, shape, size, animation }),
          className
        )}
        {...props}
      />
    )
  }
)
Skeleton.displayName = 'Skeleton'

// Text skeleton with multiple lines
const SkeletonText = React.forwardRef<
  HTMLDivElement,
  SkeletonTextProps
>(
  ({ 
    lines = 3,
    width = 'full',
    variant = 'default',
    size = 'md',
    animation = 'pulse',
    className,
    ...props 
  }, ref) => {
    const widthMap = {
      full: 'w-full',
      half: 'w-1/2',
      quarter: 'w-1/4',
      third: 'w-1/3',
      'two-thirds': 'w-2/3',
    }

    return (
      <div ref={ref} className={cn('space-y-2', className)} {...props}>
        {Array.from({ length: lines }).map((_, index) => (
          <Skeleton
            key={index}
            variant={variant}
            size={size}
            animation={animation}
            className={cn(
              widthMap[width],
              // Last line is typically shorter
              index === lines - 1 && lines > 1 && 'w-3/4'
            )}
          />
        ))}
      </div>
    )
  }
)
SkeletonText.displayName = 'SkeletonText'

// Avatar skeleton
const SkeletonAvatar = React.forwardRef<
  React.ElementRef<typeof ShadcnSkeleton>,
  SkeletonAvatarProps
>(
  ({ 
    size = 'md',
    variant = 'default',
    animation = 'pulse',
    className,
    ...props 
  }, ref) => {
    const sizeMap = {
      sm: 'h-8 w-8',
      md: 'h-10 w-10',
      lg: 'h-12 w-12',
      xl: 'h-16 w-16',
    }

    return (
      <Skeleton
        ref={ref}
        variant={variant}
        shape="circle"
        animation={animation}
        className={cn(sizeMap[size], className)}
        {...props}
      />
    )
  }
)
SkeletonAvatar.displayName = 'SkeletonAvatar'

// Card skeleton with common layout
const SkeletonCard = React.forwardRef<
  HTMLDivElement,
  SkeletonCardProps
>(
  ({ 
    showImage = true,
    showHeader = true,
    showFooter = true,
    lines = 3,
    variant = 'default',
    animation = 'pulse',
    className,
    ...props 
  }, ref) => {
    return (
      <div ref={ref} className={cn('space-y-4 p-4', className)} {...props}>
        {showImage && (
          <Skeleton
            variant={variant}
            animation={animation}
            className="h-48 w-full"
          />
        )}
        
        {showHeader && (
          <div className="space-y-2">
            <Skeleton
              variant={variant}
              animation={animation}
              className="h-6 w-3/4"
            />
            <Skeleton
              variant={variant}
              animation={animation}
              className="h-4 w-1/2"
            />
          </div>
        )}
        
        <SkeletonText
          lines={lines}
          variant={variant}
          animation={animation}
        />
        
        {showFooter && (
          <div className="flex space-x-4">
            <Skeleton
              variant={variant}
              animation={animation}
              className="h-8 w-20"
            />
            <Skeleton
              variant={variant}
              animation={animation}
              className="h-8 w-20"
            />
          </div>
        )}
      </div>
    )
  }
)
SkeletonCard.displayName = 'SkeletonCard'

export { 
  Skeleton, 
  SkeletonText, 
  SkeletonAvatar, 
  SkeletonCard, 
  truccoSkeletonVariants 
}