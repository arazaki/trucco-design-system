import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'

const inputVariants = cva(
  // Base styles
  'flex w-full border border-neutral-300 bg-background px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-foreground-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-neutral-300 focus-visible:ring-primary-500',
        success: 'border-success-500 focus-visible:ring-success-500',
        warning: 'border-warning-500 focus-visible:ring-warning-500',
        error: 'border-error-500 focus-visible:ring-error-500',
        ghost: 'border-transparent bg-transparent focus-visible:ring-primary-500',
      },
      size: {
        sm: 'h-8 px-2 text-xs',
        md: 'h-10 px-3 text-sm',
        lg: 'h-12 px-4 text-base',
        xl: 'h-14 px-6 text-lg',
      },
      radius: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full',
      },
      shadow: {
        none: 'shadow-none',
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      radius: 'md',
      shadow: 'none',
    },
  }
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  label?: string
  helperText?: string
  error?: string
  fullWidth?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      size,
      radius,
      shadow,
      type = 'text',
      leftIcon,
      rightIcon,
      label,
      helperText,
      error,
      fullWidth = true,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || React.useId()
    const errorId = error ? `${inputId}-error` : undefined
    const helperTextId = helperText ? `${inputId}-helper` : undefined
    
    // Override variant if there's an error
    const effectiveVariant = error ? 'error' : variant

    return (
      <div className={cn('flex flex-col gap-1', !fullWidth && 'w-auto')}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-foreground-secondary"
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground-muted [&_svg]:size-4">
              {leftIcon}
            </div>
          )}
          
          <input
            type={type}
            className={cn(
              inputVariants({ variant: effectiveVariant, size, radius, shadow }),
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              className
            )}
            ref={ref}
            id={inputId}
            aria-invalid={error ? 'true' : undefined}
            aria-describedby={cn(errorId, helperTextId)}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground-muted [&_svg]:size-4">
              {rightIcon}
            </div>
          )}
        </div>
        
        {error && (
          <p id={errorId} className="text-sm text-error-600" role="alert">
            {error}
          </p>
        )}
        
        {helperText && !error && (
          <p id={helperTextId} className="text-sm text-foreground-muted">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

// Textarea component with similar API
const textareaVariants = cva(
  'flex min-h-[80px] w-full border border-neutral-300 bg-background px-3 py-2 text-sm transition-colors placeholder:text-foreground-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y',
  {
    variants: {
      variant: {
        default: 'border-neutral-300 focus-visible:ring-primary-500',
        success: 'border-success-500 focus-visible:ring-success-500',
        warning: 'border-warning-500 focus-visible:ring-warning-500',
        error: 'border-error-500 focus-visible:ring-error-500',
        ghost: 'border-transparent bg-transparent focus-visible:ring-primary-500',
      },
      size: {
        sm: 'min-h-[60px] px-2 py-1 text-xs',
        md: 'min-h-[80px] px-3 py-2 text-sm',
        lg: 'min-h-[100px] px-4 py-3 text-base',
        xl: 'min-h-[120px] px-6 py-4 text-lg',
      },
      radius: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-xl', // Cap at xl for textarea
      },
      shadow: {
        none: 'shadow-none',
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      radius: 'md',
      shadow: 'none',
    },
  }
)

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
    VariantProps<typeof textareaVariants> {
  label?: string
  helperText?: string
  error?: string
  fullWidth?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      variant,
      size,
      radius,
      shadow,
      label,
      helperText,
      error,
      fullWidth = true,
      id,
      ...props
    },
    ref
  ) => {
    const textareaId = id || React.useId()
    const errorId = error ? `${textareaId}-error` : undefined
    const helperTextId = helperText ? `${textareaId}-helper` : undefined
    
    // Override variant if there's an error
    const effectiveVariant = error ? 'error' : variant

    return (
      <div className={cn('flex flex-col gap-1', !fullWidth && 'w-auto')}>
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-medium text-foreground-secondary"
          >
            {label}
          </label>
        )}
        
        <textarea
          className={cn(
            textareaVariants({ variant: effectiveVariant, size, radius, shadow }),
            className
          )}
          ref={ref}
          id={textareaId}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={cn(errorId, helperTextId)}
          {...props}
        />
        
        {error && (
          <p id={errorId} className="text-sm text-error-600" role="alert">
            {error}
          </p>
        )}
        
        {helperText && !error && (
          <p id={helperTextId} className="text-sm text-foreground-muted">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'

export { Input, inputVariants, Textarea, textareaVariants }