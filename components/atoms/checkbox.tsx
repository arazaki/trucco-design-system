'use client'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Checkbox as ShadcnCheckbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'

/**
 * Trucco Enhanced Checkbox Component
 * 
 * Wraps shadcn/ui Checkbox with Trucco's semantic theming system and additional features.
 * Provides enhanced checkbox variants, form integration, and semantic theming while leveraging
 * shadcn's accessibility foundation and Radix UI primitives for proper checkbox behavior.
 */

// Enhanced variants that extend shadcn with semantic theming
const truccoCheckboxVariants = cva(
  '',
  {
    variants: {
      // Checkbox variant styles
      variant: {
        default: '', // Use shadcn default
        primary: 'data-[state=checked]:bg-primary data-[state=checked]:border-primary',
        secondary: 'data-[state=checked]:bg-secondary data-[state=checked]:border-secondary data-[state=checked]:text-secondary-foreground',
        success: 'data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600 data-[state=checked]:text-white',
        warning: 'data-[state=checked]:bg-yellow-600 data-[state=checked]:border-yellow-600 data-[state=checked]:text-white',
        error: 'data-[state=checked]:bg-destructive data-[state=checked]:border-destructive data-[state=checked]:text-white',
      },
      // Semantic theme variants
      theme: {
        semantic: '', // Uses current semantic tokens from CSS
        red: 'data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600 data-[state=checked]:text-white',
        blue: 'data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 data-[state=checked]:text-white',
        purple: 'data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600 data-[state=checked]:text-white',
        green: 'data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600 data-[state=checked]:text-white',
      },
      // Size variants
      size: {
        sm: 'size-3',
        md: 'size-4', // Default
        lg: 'size-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      theme: 'semantic',
      size: 'md',
    },
  }
)

export interface CheckboxProps
  extends Omit<React.ComponentProps<typeof ShadcnCheckbox>, 'className'>,
    VariantProps<typeof truccoCheckboxVariants> {
  className?: string
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  theme?: 'semantic' | 'red' | 'blue' | 'purple' | 'green'
  size?: 'sm' | 'md' | 'lg'
}

// Enhanced Checkbox with form integration
export interface EnhancedCheckboxProps
  extends Omit<CheckboxProps, 'children'> {
  label?: string
  description?: string
  error?: string
  required?: boolean
  children?: React.ReactNode
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof ShadcnCheckbox>,
  CheckboxProps
>(
  ({ 
    className, 
    variant = 'default',
    theme = 'semantic',
    size = 'md',
    ...props 
  }, ref) => {
    // Determine which variant system to use
    const useTruccoVariant = variant && variant !== 'default'
    
    return (
      <ShadcnCheckbox
        ref={ref}
        className={cn(
          // Apply Trucco variants if using semantic variants
          truccoCheckboxVariants({ 
            variant: useTruccoVariant ? variant : 'default',
            theme: theme === 'semantic' ? undefined : theme,
            size,
          }),
          className
        )}
        {...props}
      />
    )
  }
)
Checkbox.displayName = 'Checkbox'

// Enhanced Checkbox with form integration
const EnhancedCheckbox = React.forwardRef<
  React.ElementRef<typeof ShadcnCheckbox>,
  EnhancedCheckboxProps
>(
  ({ 
    label,
    description,
    error,
    required = false,
    variant = 'default',
    theme = 'semantic',
    size = 'md',
    id,
    children,
    ...props 
  }, ref) => {
    // Auto-generate IDs for proper accessibility
    const generatedId = React.useId()
    const checkboxId = id || generatedId
    const descriptionId = description ? `${checkboxId}-description` : undefined
    const errorId = error ? `${checkboxId}-error` : undefined
    
    const effectiveVariant = error ? 'error' : variant

    // If only children is provided, render simple checkbox with children
    if (children && !label && !description && !error) {
      return (
        <div className="flex items-center space-x-2">
          <Checkbox
            ref={ref}
            id={checkboxId}
            variant={effectiveVariant}
            theme={theme}
            size={size}
            aria-required={required}
            {...props}
          />
          <div className="grid gap-1.5 leading-none">
            {children}
          </div>
        </div>
      )
    }

    return (
      <div className="flex items-start space-x-3">
        <Checkbox
          ref={ref}
          id={checkboxId}
          variant={effectiveVariant}
          theme={theme}
          size={size}
          aria-describedby={cn(descriptionId, errorId)}
          aria-invalid={error ? 'true' : undefined}
          aria-required={required}
          {...props}
        />
        
        <div className="flex-1 space-y-1">
          {label && (
            <label
              htmlFor={checkboxId}
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
EnhancedCheckbox.displayName = 'EnhancedCheckbox'

export { Checkbox, EnhancedCheckbox, truccoCheckboxVariants }