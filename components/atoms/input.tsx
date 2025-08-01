import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Input as ShadcnInput } from '@/components/ui/input'
import { cn } from '@/lib/utils'

/**
 * Trucco Enhanced Input Component
 * 
 * Wraps shadcn/ui Input with Trucco's semantic theming system and additional features.
 * Provides backward compatibility with existing Trucco Input API while leveraging
 * shadcn's battle-tested foundation.
 */

// Enhanced variants that extend shadcn with semantic theming
const truccoInputVariants = cva(
  // Base semantic styles
  '',
  {
    variants: {
      // Semantic feedback variants using shadcn CSS variables
      variant: {
        default: '',
        success: 'border-[var(--success)] focus-visible:ring-[var(--success)]/20',
        warning: 'border-[var(--warning)] focus-visible:ring-[var(--warning)]/20',
        error: 'border-destructive focus-visible:ring-destructive/20',
      },
      // Semantic theme variants
      theme: {
        semantic: '', // Uses current semantic tokens from CSS
        red: '[--ring:theme(colors.red.500)]',
        blue: '[--ring:theme(colors.blue.500)]', 
        purple: '[--ring:theme(colors.purple.500)]',
        green: '[--ring:theme(colors.green.500)]',
      },
      // Full width variant
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },
    },
    defaultVariants: {
      variant: 'default',
      theme: 'semantic',
      fullWidth: true,
    },
  }
)

export interface InputProps
  extends React.ComponentProps<typeof ShadcnInput>,
    VariantProps<typeof truccoInputVariants> {
  // Additional Trucco-specific props
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  theme?: 'semantic' | 'red' | 'blue' | 'purple' | 'green'
  variant?: 'default' | 'success' | 'warning' | 'error'
  fullWidth?: boolean
  label?: string
  helperText?: string
  error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant = 'default',
      theme = 'semantic',
      fullWidth = true,
      leftIcon,
      rightIcon,
      label,
      helperText,
      error,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId()
    const inputId = id || generatedId
    const errorId = error ? `${inputId}-error` : undefined
    const helperTextId = helperText ? `${inputId}-helper` : undefined
    
    // Override variant if there's an error
    const effectiveVariant = error ? 'error' : variant

    return (
      <div className={cn('flex flex-col gap-1', !fullWidth && 'w-auto')}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-foreground"
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground [&_svg]:size-4">
              {leftIcon}
            </div>
          )}
          
          <ShadcnInput
            ref={ref}
            id={inputId}
            className={cn(
              truccoInputVariants({
                variant: effectiveVariant,
                theme,
                fullWidth,
              }),
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              className
            )}
            aria-invalid={error ? 'true' : undefined}
            aria-describedby={cn(errorId, helperTextId)}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground [&_svg]:size-4">
              {rightIcon}
            </div>
          )}
        </div>
        
        {error && (
          <p id={errorId} className="text-sm text-destructive" role="alert">
            {error}
          </p>
        )}
        
        {helperText && !error && (
          <p id={helperTextId} className="text-sm text-muted-foreground">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

// Textarea component with similar API
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof truccoInputVariants> {
  variant?: 'default' | 'success' | 'warning' | 'error'
  theme?: 'semantic' | 'red' | 'blue' | 'purple' | 'green'
  fullWidth?: boolean
  label?: string
  helperText?: string
  error?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      variant = 'default',
      theme = 'semantic',
      fullWidth = true,
      label,
      helperText,
      error,
      id,
      ...props
    },
    ref
  ) => {
    const generatedTextareaId = React.useId()
    const textareaId = id || generatedTextareaId
    const errorId = error ? `${textareaId}-error` : undefined
    const helperTextId = helperText ? `${textareaId}-helper` : undefined
    
    // Override variant if there's an error
    const effectiveVariant = error ? 'error' : variant

    return (
      <div className={cn('flex flex-col gap-1', !fullWidth && 'w-auto')}>
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-medium text-foreground"
          >
            {label}
          </label>
        )}
        
        <textarea
          className={cn(
            // Base textarea styles similar to shadcn Input
            'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input flex min-h-[80px] w-full resize-y rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
            'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
            truccoInputVariants({
              variant: effectiveVariant,
              theme,
              fullWidth,
            }),
            className
          )}
          ref={ref}
          id={textareaId}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={cn(errorId, helperTextId)}
          {...props}
        />
        
        {error && (
          <p id={errorId} className="text-sm text-destructive" role="alert">
            {error}
          </p>
        )}
        
        {helperText && !error && (
          <p id={helperTextId} className="text-sm text-muted-foreground">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'

export { Input, Textarea, truccoInputVariants }