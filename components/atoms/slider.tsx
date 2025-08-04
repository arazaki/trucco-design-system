'use client'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slider as ShadcnSlider } from '@/components/ui/slider'
import { cn } from '@/lib/utils'

/**
 * Trucco Enhanced Slider Component
 * 
 * Wraps shadcn/ui Slider with Trucco's semantic theming system and additional features.
 * Provides enhanced slider variants, form integration, and semantic theming while leveraging
 * shadcn's accessibility foundation and Radix UI primitives.
 */

const truccoSliderVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: '',
        primary: '[&>span[data-orientation="horizontal"]]:bg-primary/20 [&_[role="slider"]]:border-primary [&_[role="slider"]]:bg-primary',
        secondary: '[&>span[data-orientation="horizontal"]]:bg-secondary/20 [&_[role="slider"]]:border-secondary [&_[role="slider"]]:bg-secondary',
        success: '[&>span[data-orientation="horizontal"]]:bg-green-200 [&_[role="slider"]]:border-green-600 [&_[role="slider"]]:bg-green-600',
        warning: '[&>span[data-orientation="horizontal"]]:bg-yellow-200 [&_[role="slider"]]:border-yellow-600 [&_[role="slider"]]:bg-yellow-600',
        error: '[&>span[data-orientation="horizontal"]]:bg-destructive/20 [&_[role="slider"]]:border-destructive [&_[role="slider"]]:bg-destructive',
      },
      size: {
        sm: '[&>span[data-orientation="horizontal"]]:h-1 [&_[role="slider"]]:h-3 [&_[role="slider"]]:w-3',
        md: '[&>span[data-orientation="horizontal"]]:h-2 [&_[role="slider"]]:h-4 [&_[role="slider"]]:w-4',
        lg: '[&>span[data-orientation="horizontal"]]:h-3 [&_[role="slider"]]:h-5 [&_[role="slider"]]:w-5',
      },
      theme: {
        semantic: '',
        red: '[&>span[data-orientation="horizontal"]]:bg-red-200 [&_[role="slider"]]:border-red-600 [&_[role="slider"]]:bg-red-600',
        blue: '[&>span[data-orientation="horizontal"]]:bg-blue-200 [&_[role="slider"]]:border-blue-600 [&_[role="slider"]]:bg-blue-600',
        purple: '[&>span[data-orientation="horizontal"]]:bg-purple-200 [&_[role="slider"]]:border-purple-600 [&_[role="slider"]]:bg-purple-600',
        green: '[&>span[data-orientation="horizontal"]]:bg-green-200 [&_[role="slider"]]:border-green-600 [&_[role="slider"]]:bg-green-600',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      theme: 'semantic',
    },
  }
)

export interface SliderProps
  extends Omit<React.ComponentProps<typeof ShadcnSlider>, 'className'>,
    VariantProps<typeof truccoSliderVariants> {
  className?: string
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
  theme?: 'semantic' | 'red' | 'blue' | 'purple' | 'green'
}

// Enhanced Slider with form integration
export interface EnhancedSliderProps extends SliderProps {
  label?: string
  description?: string
  error?: string
  required?: boolean
  showValue?: boolean
  showMinMax?: boolean
  formatValue?: (value: number) => string
}

const Slider = React.forwardRef<
  React.ElementRef<typeof ShadcnSlider>,
  SliderProps
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
      <ShadcnSlider
        ref={ref}
        className={cn(
          truccoSliderVariants({ 
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
Slider.displayName = 'Slider'

// Enhanced Slider with form integration
const EnhancedSlider = React.forwardRef<
  React.ElementRef<typeof ShadcnSlider>,
  EnhancedSliderProps
>(
  ({ 
    label,
    description,
    error,
    required = false,
    showValue = false,
    showMinMax = false,
    formatValue = (value) => value.toString(),
    variant = 'default',
    size = 'md',
    theme = 'semantic',
    value,
    defaultValue,
    min = 0,
    max = 100,
    id,
    ...props 
  }, ref) => {
    const generatedId = React.useId()
    const sliderId = id || generatedId
    const descriptionId = description ? `${sliderId}-description` : undefined
    const errorId = error ? `${sliderId}-error` : undefined
    
    const effectiveVariant = error ? 'error' : variant
    const currentValue = value || defaultValue || [min]
    const displayValue = Array.isArray(currentValue) ? currentValue[0] : currentValue

    return (
      <div className="space-y-4">
        {(label || showValue) && (
          <div className="flex justify-between items-center">
            {label && (
              <label htmlFor={sliderId} className="text-sm font-medium text-foreground">
                {label}
                {required && <span className="text-destructive ml-1">*</span>}
              </label>
            )}
            {showValue && (
              <span className="text-sm font-medium text-foreground">
                {formatValue(displayValue)}
              </span>
            )}
          </div>
        )}
        
        <div className="space-y-2">
          <Slider
            ref={ref}
            id={sliderId}
            variant={effectiveVariant}
            size={size}
            theme={theme}
            value={value}
            defaultValue={defaultValue}
            min={min}
            max={max}
            aria-describedby={cn(descriptionId, errorId)}
            aria-invalid={error ? 'true' : undefined}
            aria-required={required}
            {...props}
          />
          
          {showMinMax && (
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{formatValue(min)}</span>
              <span>{formatValue(max)}</span>
            </div>
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
EnhancedSlider.displayName = 'EnhancedSlider'

export { Slider, EnhancedSlider, truccoSliderVariants }