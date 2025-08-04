'use client'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Progress as ShadcnProgress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'

/**
 * Trucco Enhanced Progress Component
 * 
 * Wraps shadcn/ui Progress with Trucco's semantic theming system and additional features.
 * Provides enhanced progress variants, sizes, and semantic theming while leveraging
 * shadcn's accessibility foundation and Radix UI primitives.
 */

const truccoProgressVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: '',
        primary: 'bg-primary/20 [&>div]:bg-primary',
        secondary: 'bg-secondary/20 [&>div]:bg-secondary',
        success: 'bg-green-200 [&>div]:bg-green-600 dark:bg-green-900/30 dark:[&>div]:bg-green-500',
        warning: 'bg-yellow-200 [&>div]:bg-yellow-600 dark:bg-yellow-900/30 dark:[&>div]:bg-yellow-500',
        error: 'bg-destructive/20 [&>div]:bg-destructive',
        info: 'bg-blue-200 [&>div]:bg-blue-600 dark:bg-blue-900/30 dark:[&>div]:bg-blue-500',
      },
      size: {
        sm: 'h-1',
        md: 'h-2',
        lg: 'h-3',
        xl: 'h-4',
      },
      theme: {
        semantic: '',
        red: 'bg-red-200 [&>div]:bg-red-600 dark:bg-red-900/30 dark:[&>div]:bg-red-500',
        blue: 'bg-blue-200 [&>div]:bg-blue-600 dark:bg-blue-900/30 dark:[&>div]:bg-blue-500',
        purple: 'bg-purple-200 [&>div]:bg-purple-600 dark:bg-purple-900/30 dark:[&>div]:bg-purple-500',
        green: 'bg-green-200 [&>div]:bg-green-600 dark:bg-green-900/30 dark:[&>div]:bg-green-500',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      theme: 'semantic',
    },
  }
)

export interface ProgressProps
  extends Omit<React.ComponentProps<typeof ShadcnProgress>, 'className'>,
    VariantProps<typeof truccoProgressVariants> {
  className?: string
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  theme?: 'semantic' | 'red' | 'blue' | 'purple' | 'green'
  showValue?: boolean
  label?: string
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ShadcnProgress>,
  ProgressProps
>(
  ({ 
    className, 
    variant = 'default',
    size = 'md',
    theme = 'semantic',
    showValue = false,
    label,
    value,
    ...props 
  }, ref) => {
    const useTruccoVariant = variant && variant !== 'default'
    
    return (
      <div className="space-y-2">
        {(label || showValue) && (
          <div className="flex justify-between text-sm">
            {label && <span className="font-medium">{label}</span>}
            {showValue && <span className="text-muted-foreground">{value}%</span>}
          </div>
        )}
        <ShadcnProgress
          ref={ref}
          value={value}
          className={cn(
            truccoProgressVariants({ 
              variant: useTruccoVariant ? variant : 'default',
              size,
              theme: theme === 'semantic' ? undefined : theme,
            }),
            className
          )}
          {...props}
        />
      </div>
    )
  }
)
Progress.displayName = 'Progress'

export { Progress, truccoProgressVariants }