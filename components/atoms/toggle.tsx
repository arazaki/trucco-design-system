'use client'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Toggle as ShadcnToggle } from '@/components/ui/toggle'
import { cn } from '@/lib/utils'

/**
 * Trucco Enhanced Toggle Component
 * 
 * Wraps shadcn/ui Toggle with Trucco's semantic theming system and additional features.
 * Provides enhanced toggle variants and semantic theming while leveraging
 * shadcn's accessibility foundation and Radix UI primitives.
 */

const truccoToggleVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: '',
        primary: 'data-[state=on]:bg-primary data-[state=on]:text-primary-foreground hover:bg-primary/10',
        secondary: 'data-[state=on]:bg-secondary data-[state=on]:text-secondary-foreground hover:bg-secondary/10',
        success: 'data-[state=on]:bg-green-600 data-[state=on]:text-white hover:bg-green-50 dark:hover:bg-green-950/30',
        warning: 'data-[state=on]:bg-yellow-600 data-[state=on]:text-white hover:bg-yellow-50 dark:hover:bg-yellow-950/30',
        error: 'data-[state=on]:bg-destructive data-[state=on]:text-white hover:bg-destructive/10',
        outline: 'border border-input data-[state=on]:bg-accent data-[state=on]:text-accent-foreground',
      },
      size: {
        sm: 'h-8 px-2 text-xs',
        md: 'h-9 px-3 text-sm',
        lg: 'h-10 px-4 text-base',
        icon: 'h-9 w-9',
      },
      theme: {
        semantic: '',
        red: 'data-[state=on]:bg-red-600 data-[state=on]:text-white hover:bg-red-50 dark:hover:bg-red-950/30',
        blue: 'data-[state=on]:bg-blue-600 data-[state=on]:text-white hover:bg-blue-50 dark:hover:bg-blue-950/30',
        purple: 'data-[state=on]:bg-purple-600 data-[state=on]:text-white hover:bg-purple-50 dark:hover:bg-purple-950/30',
        green: 'data-[state=on]:bg-green-600 data-[state=on]:text-white hover:bg-green-50 dark:hover:bg-green-950/30',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      theme: 'semantic',
    },
  }
)

export interface ToggleProps
  extends Omit<React.ComponentProps<typeof ShadcnToggle>, 'className' | 'variant' | 'size'>,
    VariantProps<typeof truccoToggleVariants> {
  className?: string
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'icon'
  theme?: 'semantic' | 'red' | 'blue' | 'purple' | 'green'
}

// Enhanced Toggle with form integration
export interface EnhancedToggleProps extends ToggleProps {
  label?: string
  description?: string
  error?: string
  required?: boolean
}

const Toggle = React.forwardRef<
  React.ElementRef<typeof ShadcnToggle>,
  ToggleProps
>(
  ({ 
    className, 
    variant = 'default',
    size = 'md',
    theme = 'semantic',
    ...props 
  }, ref) => {
    const useTruccoVariant = variant && variant !== 'default'
    
    return (
      <ShadcnToggle
        ref={ref}
        className={cn(
          truccoToggleVariants({ 
            variant: useTruccoVariant ? variant : 'default',
            size,
            theme: theme === 'semantic' ? undefined : theme,
          }),
          className
        )}
        {...props}
      />
    )
  }
)
Toggle.displayName = 'Toggle'

// Enhanced Toggle with form integration
const EnhancedToggle = React.forwardRef<
  React.ElementRef<typeof ShadcnToggle>,
  EnhancedToggleProps
>(
  ({ 
    label,
    description,
    error,
    required = false,
    variant = 'default',
    size = 'md',
    theme = 'semantic',
    children,
    id,
    ...props 
  }, ref) => {
    const generatedId = React.useId()
    const toggleId = id || generatedId
    const descriptionId = description ? `${toggleId}-description` : undefined
    const errorId = error ? `${toggleId}-error` : undefined
    
    const effectiveVariant = error ? 'error' : variant

    if (!label && !description && !error) {
      return (
        <Toggle
          ref={ref}
          id={toggleId}
          variant={effectiveVariant}
          size={size}
          theme={theme}
          aria-required={required}
          {...props}
        >
          {children}
        </Toggle>
      )
    }

    return (
      <div className="flex items-start space-x-3">
        <Toggle
          ref={ref}
          id={toggleId}
          variant={effectiveVariant}
          size={size}
          theme={theme}
          aria-describedby={cn(descriptionId, errorId)}
          aria-invalid={error ? 'true' : undefined}
          aria-required={required}
          {...props}
        >
          {children}
        </Toggle>
        
        <div className="flex-1 space-y-1">
          {label && (
            <label
              htmlFor={toggleId}
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
)
EnhancedToggle.displayName = 'EnhancedToggle'

export { Toggle, EnhancedToggle, truccoToggleVariants }