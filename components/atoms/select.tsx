'use client'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import {
  Select as ShadcnSelect,
  SelectContent as ShadcnSelectContent,
  SelectGroup as ShadcnSelectGroup,
  SelectItem as ShadcnSelectItem,
  SelectLabel as ShadcnSelectLabel,
  SelectScrollDownButton as ShadcnSelectScrollDownButton,
  SelectScrollUpButton as ShadcnSelectScrollUpButton,
  SelectSeparator as ShadcnSelectSeparator,
  SelectTrigger as ShadcnSelectTrigger,
  SelectValue as ShadcnSelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

/**
 * Trucco Enhanced Select Component
 * 
 * Wraps shadcn/ui Select with Trucco's semantic theming system and additional features.
 * Provides enhanced select variants, form integration, and semantic theming while leveraging
 * shadcn's accessibility foundation and Radix UI primitives for proper dropdown behavior.
 */

// Enhanced variants that extend shadcn with semantic theming
const truccoSelectTriggerVariants = cva(
  '',
  {
    variants: {
      // Select variant styles
      variant: {
        default: '', // Use shadcn default
        success: 'border-green-300 focus-visible:border-green-500 focus-visible:ring-green-500/20',
        warning: 'border-yellow-300 focus-visible:border-yellow-500 focus-visible:ring-yellow-500/20',
        error: 'border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20',
      },
      // Semantic theme variants
      theme: {
        semantic: '', // Uses current semantic tokens from CSS
        red: 'focus-visible:border-red-500 focus-visible:ring-red-500/20',
        blue: 'focus-visible:border-blue-500 focus-visible:ring-blue-500/20',
        purple: 'focus-visible:border-purple-500 focus-visible:ring-purple-500/20',
        green: 'focus-visible:border-green-500 focus-visible:ring-green-500/20',
      },
      // Full width variant
      fullWidth: {
        true: 'w-full',
        false: 'w-fit',
      },
    },
    defaultVariants: {
      variant: 'default',
      theme: 'semantic',
      fullWidth: true,
    },
  }
)

export interface SelectProps extends React.ComponentProps<typeof ShadcnSelect> {}

export interface SelectGroupProps extends React.ComponentProps<typeof ShadcnSelectGroup> {}

export interface SelectValueProps extends React.ComponentProps<typeof ShadcnSelectValue> {}

export interface SelectTriggerProps
  extends Omit<React.ComponentProps<typeof ShadcnSelectTrigger>, 'className'>,
    VariantProps<typeof truccoSelectTriggerVariants> {
  className?: string
  variant?: 'default' | 'success' | 'warning' | 'error'
  theme?: 'semantic' | 'red' | 'blue' | 'purple' | 'green'
  fullWidth?: boolean
}

export interface SelectContentProps extends React.ComponentProps<typeof ShadcnSelectContent> {}

export interface SelectLabelProps extends React.ComponentProps<typeof ShadcnSelectLabel> {}

export interface SelectItemProps extends React.ComponentProps<typeof ShadcnSelectItem> {}

export interface SelectSeparatorProps extends React.ComponentProps<typeof ShadcnSelectSeparator> {}

export interface SelectScrollUpButtonProps extends React.ComponentProps<typeof ShadcnSelectScrollUpButton> {}

export interface SelectScrollDownButtonProps extends React.ComponentProps<typeof ShadcnSelectScrollDownButton> {}

// Enhanced Select with form integration
export interface EnhancedSelectProps extends SelectProps {
  label?: string
  placeholder?: string
  helperText?: string
  error?: string
  required?: boolean
  // Trigger props
  variant?: 'default' | 'success' | 'warning' | 'error'
  theme?: 'semantic' | 'red' | 'blue' | 'purple' | 'green'
  size?: 'sm' | 'default'
  fullWidth?: boolean
  children: React.ReactNode
}

const Select = ShadcnSelect
const SelectGroup = ShadcnSelectGroup
const SelectValue = ShadcnSelectValue

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof ShadcnSelectTrigger>,
  SelectTriggerProps
>(
  ({ 
    className, 
    variant = 'default',
    theme = 'semantic',
    fullWidth = true,
    ...props 
  }, ref) => {
    return (
      <ShadcnSelectTrigger
        ref={ref}
        className={cn(
          truccoSelectTriggerVariants({ variant, theme, fullWidth }),
          className
        )}
        {...props}
      />
    )
  }
)
SelectTrigger.displayName = 'SelectTrigger'

const SelectContent = React.forwardRef<
  React.ElementRef<typeof ShadcnSelectContent>,
  SelectContentProps
>(
  ({ className, ...props }, ref) => {
    return (
      <ShadcnSelectContent
        ref={ref}
        className={cn('', className)}
        {...props}
      />
    )
  }
)
SelectContent.displayName = 'SelectContent'

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof ShadcnSelectLabel>,
  SelectLabelProps
>(
  ({ className, ...props }, ref) => {
    return (
      <ShadcnSelectLabel
        ref={ref}
        className={cn('', className)}
        {...props}
      />
    )
  }
)
SelectLabel.displayName = 'SelectLabel'

const SelectItem = React.forwardRef<
  React.ElementRef<typeof ShadcnSelectItem>,
  SelectItemProps
>(
  ({ className, ...props }, ref) => {
    return (
      <ShadcnSelectItem
        ref={ref}
        className={cn('', className)}
        {...props}
      />
    )
  }
)
SelectItem.displayName = 'SelectItem'

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof ShadcnSelectSeparator>,
  SelectSeparatorProps
>(
  ({ className, ...props }, ref) => {
    return (
      <ShadcnSelectSeparator
        ref={ref}
        className={cn('', className)}
        {...props}
      />
    )
  }
)
SelectSeparator.displayName = 'SelectSeparator'

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof ShadcnSelectScrollUpButton>,
  SelectScrollUpButtonProps
>(
  ({ className, ...props }, ref) => {
    return (
      <ShadcnSelectScrollUpButton
        ref={ref}
        className={cn('', className)}
        {...props}
      />
    )
  }
)
SelectScrollUpButton.displayName = 'SelectScrollUpButton'

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof ShadcnSelectScrollDownButton>,
  SelectScrollDownButtonProps
>(
  ({ className, ...props }, ref) => {
    return (
      <ShadcnSelectScrollDownButton
        ref={ref}
        className={cn('', className)}
        {...props}
      />
    )
  }
)
SelectScrollDownButton.displayName = 'SelectScrollDownButton'

// Enhanced Select with form integration
const EnhancedSelect = ({ 
  label,
  placeholder,
  helperText,
  error,
  required = false,
  variant = 'default',
  theme = 'semantic',
  size = 'default',
  fullWidth = true,
  children,
  ...props 
}: EnhancedSelectProps) => {
    // Auto-generate IDs for proper accessibility
    const generatedId = React.useId()
    const selectId = props.name || generatedId
    const descriptionId = helperText ? `${selectId}-description` : undefined
    const errorId = error ? `${selectId}-error` : undefined
    
    const effectiveVariant = error ? 'error' : variant

    return (
      <div className={cn('flex flex-col gap-1', !fullWidth && 'w-auto')}>
        {label && (
          <label htmlFor={selectId} className="text-sm font-medium text-foreground">
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}
        
        <Select {...props}>
          <SelectTrigger 
            id={selectId}
            variant={effectiveVariant}
            theme={theme}
            size={size}
            fullWidth={fullWidth}
            aria-describedby={cn(descriptionId, errorId)}
            aria-invalid={error ? 'true' : undefined}
            aria-required={required}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {children}
          </SelectContent>
        </Select>
        
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
    )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  EnhancedSelect,
  truccoSelectTriggerVariants,
}