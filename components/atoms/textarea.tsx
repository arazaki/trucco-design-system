'use client'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Textarea as ShadcnTextarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

/**
 * Trucco Enhanced Textarea Component
 * 
 * Wraps shadcn/ui Textarea with Trucco's semantic theming system and additional features.
 * Provides enhanced textarea variants, form integration, and semantic theming while leveraging
 * shadcn's accessibility foundation.
 */

const truccoTextareaVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: '',
        success: 'border-green-300 focus-visible:border-green-500 focus-visible:ring-green-500/20',
        warning: 'border-yellow-300 focus-visible:border-yellow-500 focus-visible:ring-yellow-500/20',
        error: 'border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20',
      },
      theme: {
        semantic: '',
        red: 'focus-visible:border-red-500 focus-visible:ring-red-500/20',
        blue: 'focus-visible:border-blue-500 focus-visible:ring-blue-500/20',
        purple: 'focus-visible:border-purple-500 focus-visible:ring-purple-500/20',
        green: 'focus-visible:border-green-500 focus-visible:ring-green-500/20',
      },
      size: {
        sm: 'min-h-[60px] px-2 py-1 text-xs',
        md: 'min-h-[80px] px-3 py-2 text-sm',
        lg: 'min-h-[120px] px-4 py-3 text-base',
      },
      resize: {
        none: 'resize-none',
        both: 'resize',
        horizontal: 'resize-x',
        vertical: 'resize-y',
      },
    },
    defaultVariants: {
      variant: 'default',
      theme: 'semantic',
      size: 'md',
      resize: 'vertical',
    },
  }
)

export interface TextareaProps
  extends Omit<React.ComponentProps<typeof ShadcnTextarea>, 'className'>,
    VariantProps<typeof truccoTextareaVariants> {
  className?: string
  variant?: 'default' | 'success' | 'warning' | 'error'
  theme?: 'semantic' | 'red' | 'blue' | 'purple' | 'green'
  size?: 'sm' | 'md' | 'lg'
  resize?: 'none' | 'both' | 'horizontal' | 'vertical'
}

// Enhanced Textarea with form integration
export interface EnhancedTextareaProps extends TextareaProps {
  label?: string
  helperText?: string
  error?: string
  required?: boolean
  maxLength?: number
  showCount?: boolean
}

const Textarea = React.forwardRef<
  React.ElementRef<typeof ShadcnTextarea>,
  TextareaProps
>(
  ({ 
    className, 
    variant = 'default',
    theme = 'semantic',
    size = 'md',
    resize = 'vertical',
    ...props 
  }, ref) => {
    return (
      <ShadcnTextarea
        ref={ref}
        className={cn(
          truccoTextareaVariants({ variant, theme, size, resize }),
          className
        )}
        {...props}
      />
    )
  }
)
Textarea.displayName = 'Textarea'

// Enhanced Textarea with form integration
const EnhancedTextarea = React.forwardRef<
  React.ElementRef<typeof ShadcnTextarea>,
  EnhancedTextareaProps
>(
  ({ 
    label,
    helperText,
    error,
    required = false,
    maxLength,
    showCount = false,
    variant = 'default',
    theme = 'semantic',
    size = 'md',
    resize = 'vertical',
    value,
    id,
    ...props 
  }, ref) => {
    const generatedId = React.useId()
    const textareaId = id || generatedId
    const descriptionId = helperText ? `${textareaId}-description` : undefined
    const errorId = error ? `${textareaId}-error` : undefined
    
    const effectiveVariant = error ? 'error' : variant
    const currentLength = typeof value === 'string' ? value.length : 0

    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={textareaId} className="text-sm font-medium text-foreground">
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}
        
        <Textarea
          ref={ref}
          id={textareaId}
          variant={effectiveVariant}
          theme={theme}
          size={size}
          resize={resize}
          value={value}
          maxLength={maxLength}
          aria-describedby={cn(descriptionId, errorId)}
          aria-invalid={error ? 'true' : undefined}
          aria-required={required}
          {...props}
        />
        
        <div className="flex justify-between items-start">
          <div className="flex-1">
            {error && (
              <p id={errorId} className="text-sm text-destructive" role="alert">
                {error}
              </p>
            )}
            
            {helperText && !error && (
              <p id={descriptionId} className="text-sm text-muted-foreground">
                {helperText}
              </p>
            )}
          </div>
          
          {(showCount || maxLength) && (
            <p className="text-xs text-muted-foreground mt-1">
              {showCount && currentLength}
              {maxLength && (showCount ? `/${maxLength}` : `${currentLength}/${maxLength}`)}
            </p>
          )}
        </div>
      </div>
    )
  }
)
EnhancedTextarea.displayName = 'EnhancedTextarea'

export { Textarea, EnhancedTextarea, truccoTextareaVariants }