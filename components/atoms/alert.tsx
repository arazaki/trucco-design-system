'use client'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import {
  Alert as ShadcnAlert,
  AlertTitle as ShadcnAlertTitle,
  AlertDescription as ShadcnAlertDescription,
} from '@/components/ui/alert'
import { cn } from '@/lib/utils'

/**
 * Trucco Enhanced Alert Component
 * 
 * Wraps shadcn/ui Alert with Trucco's semantic theming system and additional features.
 * Provides enhanced alert variants, icons, and semantic theming while leveraging
 * shadcn's accessibility foundation for proper alert announcements.
 */

// Enhanced variants that extend shadcn with semantic theming
const truccoAlertVariants = cva(
  '',
  {
    variants: {
      // Alert variant styles
      variant: {
        default: '', // Use shadcn default
        primary: 'border-primary/20 bg-primary/5 text-primary-foreground [&>svg]:text-primary',
        secondary: 'border-secondary/20 bg-secondary/5 text-secondary-foreground [&>svg]:text-secondary',
        success: 'border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950/30 dark:text-green-300 [&>svg]:text-green-600 dark:[&>svg]:text-green-400',
        warning: 'border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-800 dark:bg-yellow-950/30 dark:text-yellow-300 [&>svg]:text-yellow-600 dark:[&>svg]:text-yellow-400',
        error: 'border-destructive/20 bg-destructive/5 text-destructive [&>svg]:text-destructive',
        info: 'border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-300 [&>svg]:text-blue-600 dark:[&>svg]:text-blue-400',
        destructive: '', // Keep shadcn destructive
      },
      // Semantic theme variants
      theme: {
        semantic: '', // Uses current semantic tokens from CSS
        red: 'border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-950/30 dark:text-red-300 [&>svg]:text-red-600 dark:[&>svg]:text-red-400',
        blue: 'border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-300 [&>svg]:text-blue-600 dark:[&>svg]:text-blue-400',
        purple: 'border-purple-200 bg-purple-50 text-purple-800 dark:border-purple-800 dark:bg-purple-950/30 dark:text-purple-300 [&>svg]:text-purple-600 dark:[&>svg]:text-purple-400',
        green: 'border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950/30 dark:text-green-300 [&>svg]:text-green-600 dark:[&>svg]:text-green-400',
      },
      // Size variants
      size: {
        sm: 'px-3 py-2 text-sm',
        md: 'px-4 py-3 text-sm', // Default
        lg: 'px-6 py-4 text-base',
      },
      // Rounded variants
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-lg', // Default
        lg: 'rounded-xl',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      theme: 'semantic',
      size: 'md',
      rounded: 'md',
    },
  }
)

export interface AlertProps
  extends Omit<React.ComponentProps<typeof ShadcnAlert>, 'className' | 'variant'>,
    VariantProps<typeof truccoAlertVariants> {
  className?: string
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'destructive'
  theme?: 'semantic' | 'red' | 'blue' | 'purple' | 'green'
  size?: 'sm' | 'md' | 'lg'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  icon?: React.ReactNode
  dismissible?: boolean
  onDismiss?: () => void
}

export interface AlertTitleProps extends React.ComponentProps<typeof ShadcnAlertTitle> {}

export interface AlertDescriptionProps extends React.ComponentProps<typeof ShadcnAlertDescription> {}

const Alert = React.forwardRef<
  React.ElementRef<typeof ShadcnAlert>,
  AlertProps
>(
  ({ 
    className, 
    variant = 'default',
    theme = 'semantic',
    size = 'md',
    rounded = 'md',
    icon,
    dismissible = false,
    onDismiss,
    children,
    ...props 
  }, ref) => {
    // Determine which variant system to use
    const useTruccoVariant = variant && !['default', 'destructive'].includes(variant)
    
    return (
      <ShadcnAlert
        ref={ref}
        variant={variant === 'error' ? 'destructive' : variant === 'destructive' ? 'destructive' : 'default'}
        className={cn(
          // Apply Trucco variants if using semantic variants
          truccoAlertVariants({ 
            variant: useTruccoVariant ? variant : variant === 'destructive' ? 'destructive' : 'default',
            theme: theme === 'semantic' ? undefined : theme,
            size,
            rounded,
          }),
          className
        )}
        {...props}
      >
        {icon && <div className="shrink-0">{icon}</div>}
        <div className="flex-1">
          {children}
        </div>
        {dismissible && onDismiss && (
          <button
            onClick={onDismiss}
            className="absolute top-2 right-2 p-1 rounded-sm opacity-70 hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            aria-label="Dismiss alert"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </ShadcnAlert>
    )
  }
)
Alert.displayName = 'Alert'

const AlertTitle = React.forwardRef<
  React.ElementRef<typeof ShadcnAlertTitle>,
  AlertTitleProps
>(
  ({ className, ...props }, ref) => {
    return (
      <ShadcnAlertTitle
        ref={ref}
        className={cn('', className)}
        {...props}
      />
    )
  }
)
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = React.forwardRef<
  React.ElementRef<typeof ShadcnAlertDescription>,
  AlertDescriptionProps
>(
  ({ className, ...props }, ref) => {
    return (
      <ShadcnAlertDescription
        ref={ref}
        className={cn('', className)}
        {...props}
      />
    )
  }
)
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertTitle, AlertDescription, truccoAlertVariants }