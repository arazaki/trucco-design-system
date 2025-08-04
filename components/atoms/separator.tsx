'use client'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Separator as ShadcnSeparator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

/**
 * Trucco Enhanced Separator Component
 * 
 * Wraps shadcn/ui Separator with Trucco's semantic theming system and additional features.
 * Provides enhanced separator variants, orientations, and semantic theming while leveraging
 * shadcn's accessibility foundation and Radix UI primitives for proper separator behavior.
 */

// Enhanced variants that extend shadcn with semantic theming
const truccoSeparatorVariants = cva(
  '',
  {
    variants: {
      // Separator variant styles
      variant: {
        default: '', // Use shadcn default
        primary: 'bg-primary/20',
        secondary: 'bg-secondary/20',
        success: 'bg-green-200 dark:bg-green-800',
        warning: 'bg-yellow-200 dark:bg-yellow-800',
        error: 'bg-destructive/20',
        info: 'bg-blue-200 dark:bg-blue-800',
        muted: 'bg-muted-foreground/20',
      },
      // Semantic theme variants
      theme: {
        semantic: '', // Uses current semantic tokens from CSS
        red: 'bg-red-200 dark:bg-red-800',
        blue: 'bg-blue-200 dark:bg-blue-800',
        purple: 'bg-purple-200 dark:bg-purple-800',
        green: 'bg-green-200 dark:bg-green-800',
      },
      // Size/thickness variants
      size: {
        xs: 'data-[orientation=horizontal]:h-[0.5px] data-[orientation=vertical]:w-[0.5px]',
        sm: 'data-[orientation=horizontal]:h-px data-[orientation=vertical]:w-px', // Default
        md: 'data-[orientation=horizontal]:h-0.5 data-[orientation=vertical]:w-0.5',
        lg: 'data-[orientation=horizontal]:h-1 data-[orientation=vertical]:w-1',
        xl: 'data-[orientation=horizontal]:h-1.5 data-[orientation=vertical]:w-1.5',
      },
      // Style variants
      separatorStyle: {
        solid: '', // Default
        dashed: 'border-dashed bg-transparent data-[orientation=horizontal]:border-t data-[orientation=vertical]:border-l',
        dotted: 'border-dotted bg-transparent data-[orientation=horizontal]:border-t data-[orientation=vertical]:border-l',
      },
    },
    defaultVariants: {
      variant: 'default',
      theme: 'semantic',
      size: 'sm',
      separatorStyle: 'solid',
    },
  }
)

export interface SeparatorProps
  extends Omit<React.ComponentProps<typeof ShadcnSeparator>, 'className' | 'style'>,
    VariantProps<typeof truccoSeparatorVariants> {
  className?: string
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'muted'
  theme?: 'semantic' | 'red' | 'blue' | 'purple' | 'green'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  separatorStyle?: 'solid' | 'dashed' | 'dotted'
}

// Enhanced Separator with text/label support
export interface LabeledSeparatorProps extends Omit<SeparatorProps, 'orientation'> {
  label?: string
  labelPosition?: 'left' | 'center' | 'right'
  orientation?: 'horizontal'  // Only horizontal supports labels
}

const Separator = React.forwardRef<
  React.ElementRef<typeof ShadcnSeparator>,
  SeparatorProps
>(
  ({ 
    className, 
    variant = 'default',
    theme = 'semantic',
    size = 'sm',
    separatorStyle = 'solid',
    ...props 
  }, ref) => {
    // Determine which variant system to use
    const useTruccoVariant = variant && variant !== 'default'
    
    return (
      <ShadcnSeparator
        ref={ref}
        className={cn(
          // Apply Trucco variants if using semantic variants
          truccoSeparatorVariants({ 
            variant: useTruccoVariant ? variant : 'default',
            theme: theme === 'semantic' ? undefined : theme,
            size,
            separatorStyle: separatorStyle,
          }),
          // Handle dashed/dotted border color
          separatorStyle !== 'solid' && useTruccoVariant && {
            'border-primary/20': variant === 'primary',
            'border-secondary/20': variant === 'secondary',
            'border-green-200 dark:border-green-800': variant === 'success',
            'border-yellow-200 dark:border-yellow-800': variant === 'warning',
            'border-destructive/20': variant === 'error',
            'border-blue-200 dark:border-blue-800': variant === 'info',
            'border-muted-foreground/20': variant === 'muted',
          },
          // Handle theme colors for dashed/dotted
          separatorStyle !== 'solid' && theme !== 'semantic' && {
            'border-red-200 dark:border-red-800': theme === 'red',
            'border-blue-200 dark:border-blue-800': theme === 'blue',
            'border-purple-200 dark:border-purple-800': theme === 'purple',
            'border-green-200 dark:border-green-800': theme === 'green',
          },
          className
        )}
        {...props}
      />
    )
  }
)
Separator.displayName = 'Separator'

// Enhanced Separator with text/label support
const LabeledSeparator = React.forwardRef<
  React.ElementRef<typeof ShadcnSeparator>,
  LabeledSeparatorProps
>(
  ({ 
    label,
    labelPosition = 'center',
    variant = 'default',
    theme = 'semantic',
    size = 'sm',
    separatorStyle = 'solid',
    className,
    ...props 
  }, ref) => {
    if (!label) {
      return (
        <Separator
          ref={ref}
          variant={variant}
          theme={theme}
          size={size}
          separatorStyle={separatorStyle}
          className={className}
          orientation="horizontal"
          {...props}
        />
      )
    }

    const labelClasses = cn(
      'px-2 text-sm text-muted-foreground bg-background',
      {
        'text-primary': variant === 'primary',
        'text-secondary-foreground': variant === 'secondary',
        'text-green-700 dark:text-green-300': variant === 'success',
        'text-yellow-700 dark:text-yellow-300': variant === 'warning',
        'text-destructive': variant === 'error',
        'text-blue-700 dark:text-blue-300': variant === 'info',
      }
    )

    return (
      <div 
        className={cn(
          'relative flex items-center',
          {
            'justify-start': labelPosition === 'left',
            'justify-center': labelPosition === 'center',
            'justify-end': labelPosition === 'right',
          },
          className
        )}
      >
        <Separator
          ref={ref}
          variant={variant}
          theme={theme}
          size={size}
          separatorStyle={separatorStyle}
          orientation="horizontal"
          {...props}
        />
        <span className={cn('absolute', labelClasses)}>
          {label}
        </span>
      </div>
    )
  }
)
LabeledSeparator.displayName = 'LabeledSeparator'

export { Separator, LabeledSeparator, truccoSeparatorVariants }