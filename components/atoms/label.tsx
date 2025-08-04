'use client'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Label as ShadcnLabel } from '@/components/ui/label'
import { cn } from '@/lib/utils'

/**
 * Trucco Enhanced Label Component
 * 
 * Wraps shadcn/ui Label with Trucco's semantic theming system and additional features.
 * Provides enhanced label variants, states, and semantic theming while leveraging
 * shadcn's accessibility foundation and Radix UI primitives for proper label behavior.
 */

// Enhanced variants that extend shadcn with semantic theming
const truccoLabelVariants = cva(
  '',
  {
    variants: {
      // Label variant styles
      variant: {
        default: '', // Use shadcn default
        primary: 'text-primary',
        secondary: 'text-secondary-foreground',
        success: 'text-green-700 dark:text-green-300',
        warning: 'text-yellow-700 dark:text-yellow-300',
        error: 'text-destructive',
        info: 'text-blue-700 dark:text-blue-300',
        muted: 'text-muted-foreground',
      },
      // Semantic theme variants
      theme: {
        semantic: '', // Uses current semantic tokens from CSS
        red: 'text-red-700 dark:text-red-300',
        blue: 'text-blue-700 dark:text-blue-300',
        purple: 'text-purple-700 dark:text-purple-300',
        green: 'text-green-700 dark:text-green-300',
      },
      // Size variants
      size: {
        xs: 'text-xs',
        sm: 'text-sm', // Default
        md: 'text-base',
        lg: 'text-lg',
      },
      // Weight variants
      weight: {
        normal: 'font-normal',
        medium: 'font-medium', // Default
        semibold: 'font-semibold',
        bold: 'font-bold',
      },
      // Required indicator
      required: {
        true: 'after:content-["*"] after:text-destructive after:ml-1',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      theme: 'semantic',
      size: 'sm',
      weight: 'medium',
      required: false,
    },
  }
)

export interface LabelProps
  extends Omit<React.ComponentProps<typeof ShadcnLabel>, 'className'>,
    VariantProps<typeof truccoLabelVariants> {
  className?: string
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'muted'
  theme?: 'semantic' | 'red' | 'blue' | 'purple' | 'green'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  required?: boolean
}

// Enhanced Label with additional features
export interface EnhancedLabelProps extends LabelProps {
  description?: string
  error?: string
  tooltip?: string
  icon?: React.ReactNode
}

const Label = React.forwardRef<
  React.ElementRef<typeof ShadcnLabel>,
  LabelProps
>(
  ({ 
    className, 
    variant = 'default',
    theme = 'semantic',
    size = 'sm',
    weight = 'medium',
    required = false,
    ...props 
  }, ref) => {
    // Determine which variant system to use
    const useTruccoVariant = variant && variant !== 'default'
    
    return (
      <ShadcnLabel
        ref={ref}
        className={cn(
          // Apply Trucco variants if using semantic variants
          truccoLabelVariants({ 
            variant: useTruccoVariant ? variant : 'default',
            theme: theme === 'semantic' ? undefined : theme,
            size,
            weight,
            required,
          }),
          className
        )}
        {...props}
      />
    )
  }
)
Label.displayName = 'Label'

// Enhanced Label with additional features
const EnhancedLabel = React.forwardRef<
  React.ElementRef<typeof ShadcnLabel>,
  EnhancedLabelProps
>(
  ({ 
    description,
    error,
    tooltip,
    icon,
    variant = 'default',
    theme = 'semantic',
    size = 'sm',
    weight = 'medium',
    required = false,
    children,
    className,
    ...props 
  }, ref) => {
    const effectiveVariant = error ? 'error' : variant
    const generatedId = React.useId()
    const labelId = props.htmlFor || generatedId
    const descriptionId = description ? `${labelId}-description` : undefined
    const errorId = error ? `${labelId}-error` : undefined

    return (
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          {icon && <span className="inline-flex items-center shrink-0">{icon}</span>}
          <Label
            ref={ref}
            variant={effectiveVariant}
            theme={theme}
            size={size}
            weight={weight}
            required={required}
            className={className}
            {...props}
          >
            {children}
          </Label>
          {tooltip && (
            <span 
              className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-muted text-muted-foreground text-xs cursor-help"
              title={tooltip}
              aria-label={tooltip}
            >
              ?
            </span>
          )}
        </div>
        
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
    )
  }
)
EnhancedLabel.displayName = 'EnhancedLabel'

export { Label, EnhancedLabel, truccoLabelVariants }