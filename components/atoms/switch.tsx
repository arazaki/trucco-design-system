'use client'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Switch as ShadcnSwitch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'

/**
 * Trucco Enhanced Switch Component
 * 
 * Wraps shadcn/ui Switch with Trucco's semantic theming system and additional features.
 * Provides enhanced sizing, semantic variants, and form integration while leveraging
 * shadcn's accessibility foundation and Radix UI primitives.
 */

// Enhanced variants that extend shadcn with semantic theming
const truccoSwitchVariants = cva(
  // Base styles from shadcn
  '',
  {
    variants: {
      // Semantic variants
      variant: {
        default: '', // Use shadcn default
        primary: 'data-[state=checked]:bg-primary',
        secondary: 'data-[state=checked]:bg-secondary',
        success: 'data-[state=checked]:bg-[var(--success)]',
        warning: 'data-[state=checked]:bg-[var(--warning)]',
        error: 'data-[state=checked]:bg-destructive',
      },
      // Size variants
      size: {
        sm: 'h-4 w-7 [&>span]:size-3',
        md: 'h-[1.15rem] w-8 [&>span]:size-4', // Default shadcn size
        lg: 'h-6 w-10 [&>span]:size-5',
      },
      // Theme variants
      theme: {
        semantic: '', // Uses current semantic tokens from CSS
        red: 'data-[state=checked]:bg-red-500',
        blue: 'data-[state=checked]:bg-blue-500',
        purple: 'data-[state=checked]:bg-purple-500',
        green: 'data-[state=checked]:bg-green-500',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      theme: 'semantic',
    },
  }
)

export interface SwitchProps
  extends React.ComponentProps<typeof ShadcnSwitch>,
    VariantProps<typeof truccoSwitchVariants> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
  theme?: 'semantic' | 'red' | 'blue' | 'purple' | 'green'
  label?: string
  description?: string
  error?: string
  required?: boolean
}

const Switch = React.forwardRef<
  React.ElementRef<typeof ShadcnSwitch>,
  SwitchProps
>(
  ({ 
    className, 
    variant = 'default',
    size = 'md',
    theme = 'semantic',
    label,
    description,
    error,
    required = false,
    id,
    ...props 
  }, ref) => {
    const generatedId = React.useId()
    const switchId = id || generatedId
    const descriptionId = description ? `${switchId}-description` : undefined
    const errorId = error ? `${switchId}-error` : undefined

    // Determine which variant system to use
    const useTruccoVariant = variant && variant !== 'default'
    
    if (label || description || error) {
      return (
        <div className="flex items-start space-x-3">
          <ShadcnSwitch
            ref={ref}
            id={switchId}
            className={cn(
              // Apply Trucco variants if using semantic variants
              useTruccoVariant && truccoSwitchVariants({ 
                variant, 
                size,
                theme: theme === 'semantic' ? undefined : theme
              }),
              error && 'border-destructive focus-visible:ring-destructive/20',
              className
            )}
            aria-describedby={cn(descriptionId, errorId)}
            aria-invalid={error ? 'true' : undefined}
            {...props}
          />
          
          <div className="flex-1 space-y-1">
            {label && (
              <label
                htmlFor={switchId}
                className={cn(
                  'text-sm font-medium leading-none cursor-pointer',
                  error ? 'text-destructive' : 'text-foreground',
                  props.disabled && 'opacity-50 cursor-not-allowed'
                )}
              >
                {label}
                {required && <span className="text-destructive ml-1">*</span>}
              </label>
            )}
            
            {description && (
              <p 
                id={descriptionId}
                className={cn(
                  'text-sm',
                  error ? 'text-destructive' : 'text-muted-foreground'
                )}
              >
                {description}
              </p>
            )}
            
            {error && (
              <p 
                id={errorId}
                className="text-sm text-destructive"
                role="alert"
              >
                {error}
              </p>
            )}
          </div>
        </div>
      )
    }

    // Simple switch without label/description
    return (
      <ShadcnSwitch
        ref={ref}
        id={switchId}
        className={cn(
          // Apply Trucco variants if using semantic variants
          useTruccoVariant && truccoSwitchVariants({ 
            variant, 
            size,
            theme: theme === 'semantic' ? undefined : theme
          }),
          error && 'border-destructive focus-visible:ring-destructive/20',
          className
        )}
        aria-invalid={error ? 'true' : undefined}
        {...props}
      />
    )
  }
)
Switch.displayName = 'Switch'

export { Switch, truccoSwitchVariants }