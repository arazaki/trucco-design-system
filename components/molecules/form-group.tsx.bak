import * as React from 'react'
import { Text } from '../atoms/text'
import { cn } from '../../lib/utils/cn'

export interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  labelProps?: React.ComponentProps<typeof Text>
  helperText?: string
  helperTextProps?: React.ComponentProps<typeof Text>
  error?: string
  errorProps?: React.ComponentProps<typeof Text>
  required?: boolean
  children: React.ReactNode
  spacing?: 'sm' | 'md' | 'lg'
}

const FormGroup = React.forwardRef<HTMLDivElement, FormGroupProps>(
  ({
    className,
    label,
    labelProps,
    helperText,
    helperTextProps,
    error,
    errorProps,
    required,
    children,
    spacing = 'md',
    ...props
  }, ref) => {
    const spacingClasses = {
      sm: 'space-y-1',
      md: 'space-y-2',
      lg: 'space-y-3',
    }

    return (
      <div
        ref={ref}
        className={cn(
          'w-full',
          spacingClasses[spacing],
          className
        )}
        {...props}
      >
        {label && (
          <Text
            variant="label"
            as="label"
            className={cn(
              'block',
              required && "after:content-['*'] after:ml-0.5 after:text-error-500"
            )}
            {...labelProps}
          >
            {label}
          </Text>
        )}
        
        {children}
        
        {error && (
          <Text
            variant="error"
            className="mt-1"
            {...errorProps}
          >
            {error}
          </Text>
        )}
        
        {!error && helperText && (
          <Text
            variant="helper"
            className="mt-1"
            {...helperTextProps}
          >
            {helperText}
          </Text>
        )}
      </div>
    )
  }
)

FormGroup.displayName = 'FormGroup'

export { FormGroup }