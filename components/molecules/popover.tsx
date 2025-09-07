'use client'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import {
  Popover as ShadcnPopover,
  PopoverContent as ShadcnPopoverContent,
  PopoverTrigger as ShadcnPopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

/**
 * Trucco Enhanced Popover Component
 * 
 * Wraps shadcn/ui Popover with Trucco's semantic theming system and additional features.
 * Provides enhanced popover variants and semantic theming while leveraging
 * shadcn's accessibility foundation and Radix UI primitives.
 */

const truccoPopoverContentVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: '',
        primary: 'border-primary/20 bg-primary/5',
        secondary: 'border-secondary/20 bg-secondary/5',
        success: 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/30',
        warning: 'border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950/30',
        error: 'border-destructive/20 bg-destructive/5',
        info: 'border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30',
      },
      size: {
        sm: 'w-64 p-3',
        md: 'w-80 p-4',
        lg: 'w-96 p-6',
        auto: 'w-auto p-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface PopoverProps extends React.ComponentProps<typeof ShadcnPopover> {}
export interface PopoverTriggerProps extends React.ComponentProps<typeof ShadcnPopoverTrigger> {}

export interface PopoverContentProps
  extends Omit<React.ComponentProps<typeof ShadcnPopoverContent>, 'className'>,
    VariantProps<typeof truccoPopoverContentVariants> {
  className?: string
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
  size?: 'sm' | 'md' | 'lg' | 'auto'
}

const Popover = ShadcnPopover
const PopoverTrigger = ShadcnPopoverTrigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof ShadcnPopoverContent>,
  PopoverContentProps
>(
  ({ 
    className, 
    variant = 'default',
    size = 'md',
    ...props 
  }, ref) => {
    const useTruccoVariant = variant && variant !== 'default'
    
    return (
      <ShadcnPopoverContent
        ref={ref}
        className={cn(
          truccoPopoverContentVariants({ 
            variant: useTruccoVariant ? variant : 'default',
            size,
          }),
          className
        )}
        {...props}
      />
    )
  }
)
PopoverContent.displayName = 'PopoverContent'

export { Popover, PopoverContent, PopoverTrigger, truccoPopoverContentVariants }