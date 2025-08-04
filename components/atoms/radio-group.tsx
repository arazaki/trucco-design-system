'use client'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import {
  RadioGroup as ShadcnRadioGroup,
  RadioGroupItem as ShadcnRadioGroupItem,
} from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'

/**
 * Trucco Enhanced Radio Group Component
 * 
 * Wraps shadcn/ui Radio Group with Trucco's semantic theming system and additional features.
 * Provides enhanced radio group variants, form integration, and semantic theming while leveraging
 * shadcn's accessibility foundation and Radix UI primitives.
 */

const truccoRadioGroupItemVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: '',
        primary: 'border-primary data-[state=checked]:bg-primary data-[state=checked]:border-primary',
        secondary: 'border-secondary data-[state=checked]:bg-secondary data-[state=checked]:border-secondary',
        success: 'border-green-300 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600',
        warning: 'border-yellow-300 data-[state=checked]:bg-yellow-600 data-[state=checked]:border-yellow-600',
        error: 'border-destructive data-[state=checked]:bg-destructive data-[state=checked]:border-destructive',
      },
      size: {
        sm: 'h-3 w-3',
        md: 'h-4 w-4',
        lg: 'h-5 w-5',
      },
      theme: {
        semantic: '',
        red: 'border-red-300 data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600',
        blue: 'border-blue-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600',
        purple: 'border-purple-300 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600',
        green: 'border-green-300 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      theme: 'semantic',
    },
  }
)

export interface RadioGroupProps extends React.ComponentProps<typeof ShadcnRadioGroup> {}

export interface RadioGroupItemProps
  extends Omit<React.ComponentProps<typeof ShadcnRadioGroupItem>, 'className'>,
    VariantProps<typeof truccoRadioGroupItemVariants> {
  className?: string
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
  theme?: 'semantic' | 'red' | 'blue' | 'purple' | 'green'
}

// Enhanced Radio Group with form integration
export interface EnhancedRadioGroupProps extends RadioGroupProps {
  label?: string
  description?: string
  error?: string
  required?: boolean
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
  theme?: 'semantic' | 'red' | 'blue' | 'purple' | 'green'
  children: React.ReactNode
}

export interface EnhancedRadioGroupItemProps extends RadioGroupItemProps {
  label?: string
  description?: string
}

const RadioGroup = ShadcnRadioGroup

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof ShadcnRadioGroupItem>,
  RadioGroupItemProps
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
      <ShadcnRadioGroupItem
        ref={ref}
        className={cn(
          truccoRadioGroupItemVariants({ 
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
RadioGroupItem.displayName = 'RadioGroupItem'

// Enhanced Radio Group with form integration
const EnhancedRadioGroup = React.forwardRef<
  React.ElementRef<typeof ShadcnRadioGroup>,
  EnhancedRadioGroupProps
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
    ...props 
  }, ref) => {
    const generatedId = React.useId()
    const radioGroupId = props.name || generatedId
    const descriptionId = description ? `${radioGroupId}-description` : undefined
    const errorId = error ? `${radioGroupId}-error` : undefined
    
    const effectiveVariant = error ? 'error' : variant

    return (
      <div className="space-y-3">
        {label && (
          <div className="space-y-1">
            <label className="text-sm font-medium text-foreground">
              {label}
              {required && <span className="text-destructive ml-1">*</span>}
            </label>
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
          </div>
        )}
        
        <RadioGroup
          ref={ref}
          aria-describedby={cn(descriptionId, errorId)}
          aria-invalid={error ? 'true' : undefined}
          aria-required={required}
          {...props}
        >
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === EnhancedRadioGroupItem) {
              return React.cloneElement(child, {
                variant: effectiveVariant,
                size,
                theme,
                ...(child.props as any),
              })
            }
            return child
          })}
        </RadioGroup>
        
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
EnhancedRadioGroup.displayName = 'EnhancedRadioGroup'

// Enhanced Radio Group Item with label integration
const EnhancedRadioGroupItem = React.forwardRef<
  React.ElementRef<typeof ShadcnRadioGroupItem>,
  EnhancedRadioGroupItemProps
>(
  ({ 
    label,
    description,
    variant = 'default',
    size = 'md',
    theme = 'semantic',
    id,
    ...props 
  }, ref) => {
    const generatedId = React.useId()
    const itemId = id || generatedId
    
    if (label || description) {
      return (
        <div className="flex items-start space-x-3">
          <RadioGroupItem
            ref={ref}
            id={itemId}
            variant={variant}
            size={size}
            theme={theme}
            {...props}
          />
          <div className="flex-1 space-y-1">
            {label && (
              <label
                htmlFor={itemId}
                className="text-sm font-medium leading-none cursor-pointer"
              >
                {label}
              </label>
            )}
            {description && (
              <p className="text-sm text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        </div>
      )
    }
    
    return (
      <RadioGroupItem
        ref={ref}
        id={itemId}
        variant={variant}
        size={size}
        theme={theme}
        {...props}
      />
    )
  }
)
EnhancedRadioGroupItem.displayName = 'EnhancedRadioGroupItem'

export { 
  RadioGroup, 
  RadioGroupItem, 
  EnhancedRadioGroup, 
  EnhancedRadioGroupItem, 
  truccoRadioGroupItemVariants 
}