'use client'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { 
  Card as ShadcnCard,
  CardHeader as ShadcnCardHeader,
  CardFooter as ShadcnCardFooter,
  CardTitle as ShadcnCardTitle,
  CardAction as ShadcnCardAction,
  CardDescription as ShadcnCardDescription,
  CardContent as ShadcnCardContent,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

/**
 * Trucco Enhanced Card Component
 * 
 * Wraps shadcn/ui Card with Trucco's semantic theming system and additional features.
 * Provides enhanced card variants, elevation levels, and semantic theming while leveraging
 * shadcn's accessibility foundation and compound component pattern.
 */

// Enhanced variants that extend shadcn with semantic theming
const truccoCardVariants = cva(
  '',
  {
    variants: {
      // Card variant styles
      variant: {
        default: '', // Use shadcn default
        primary: 'border-primary/20 bg-primary/5',
        secondary: 'border-secondary/20 bg-secondary/5',
        tertiary: 'border-muted bg-muted/50',
        success: 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/30',
        warning: 'border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950/30',
        error: 'border-destructive/20 bg-destructive/5',
        outline: 'border-2',
        ghost: 'border-transparent bg-transparent shadow-none',
      },
      // Elevation/shadow levels
      elevation: {
        none: 'shadow-none',
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
        xl: 'shadow-xl',
      },
      // Semantic theme variants
      theme: {
        semantic: '', // Uses current semantic tokens from CSS
        red: 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/30',
        blue: 'border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30',
        purple: 'border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950/30',
        green: 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/30',
      },
      // Size variants
      size: {
        sm: 'py-4 gap-4 text-sm',
        md: 'py-6 gap-6', // Default
        lg: 'py-8 gap-8 text-lg',
      },
      // Interactive state
      interactive: {
        true: 'cursor-pointer transition-colors hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      elevation: 'sm',
      theme: 'semantic',
      size: 'md',
      interactive: false,
    },
  }
)

// Header variants
const truccoCardHeaderVariants = cva(
  '',
  {
    variants: {
      size: {
        sm: 'px-4',
        md: 'px-6', // Default
        lg: 'px-8',
      },
      bordered: {
        true: 'border-b pb-4 mb-2',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      bordered: false,
    },
  }
)

// Content variants
const truccoCardContentVariants = cva(
  '',
  {
    variants: {
      size: {
        sm: 'px-4',
        md: 'px-6', // Default
        lg: 'px-8',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

// Footer variants
const truccoCardFooterVariants = cva(
  '',
  {
    variants: {
      size: {
        sm: 'px-4',
        md: 'px-6', // Default
        lg: 'px-8',
      },
      bordered: {
        true: 'border-t pt-4 mt-2',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      bordered: false,
    },
  }
)

export interface CardProps
  extends Omit<React.ComponentProps<typeof ShadcnCard>, 'className'>,
    VariantProps<typeof truccoCardVariants> {
  className?: string
  variant?: 'default' | 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'outline' | 'ghost'
  elevation?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  theme?: 'semantic' | 'red' | 'blue' | 'purple' | 'green'
  size?: 'sm' | 'md' | 'lg'
  interactive?: boolean
}

export interface CardHeaderProps
  extends React.ComponentProps<typeof ShadcnCardHeader>,
    VariantProps<typeof truccoCardHeaderVariants> {
  size?: 'sm' | 'md' | 'lg'
  bordered?: boolean
}

export interface CardContentProps
  extends React.ComponentProps<typeof ShadcnCardContent>,
    VariantProps<typeof truccoCardContentVariants> {
  size?: 'sm' | 'md' | 'lg'
}

export interface CardFooterProps
  extends React.ComponentProps<typeof ShadcnCardFooter>,
    VariantProps<typeof truccoCardFooterVariants> {
  size?: 'sm' | 'md' | 'lg'
  bordered?: boolean
}

export interface CardTitleProps extends React.ComponentProps<typeof ShadcnCardTitle> {}
export interface CardDescriptionProps extends React.ComponentProps<typeof ShadcnCardDescription> {}
export interface CardActionProps extends React.ComponentProps<typeof ShadcnCardAction> {}

const Card = React.forwardRef<
  React.ElementRef<typeof ShadcnCard>,
  CardProps
>(
  ({ 
    className, 
    variant = 'default',
    elevation = 'sm',
    theme = 'semantic',
    size = 'md',
    interactive = false,
    ...props 
  }, ref) => {
    // Determine which variant system to use
    const useTruccoVariant = variant && variant !== 'default'
    
    return (
      <ShadcnCard
        ref={ref}
        className={cn(
          // Apply Trucco variants if using semantic variants
          truccoCardVariants({ 
            variant: useTruccoVariant ? variant : 'default',
            elevation,
            theme: theme === 'semantic' ? undefined : theme,
            size,
            interactive,
          }),
          className
        )}
        {...props}
      />
    )
  }
)
Card.displayName = 'Card'

const CardHeader = React.forwardRef<
  React.ElementRef<typeof ShadcnCardHeader>,
  CardHeaderProps
>(
  ({ className, size = 'md', bordered = false, ...props }, ref) => {
    return (
      <ShadcnCardHeader
        ref={ref}
        className={cn(
          truccoCardHeaderVariants({ size, bordered }),
          className
        )}
        {...props}
      />
    )
  }
)
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<
  React.ElementRef<typeof ShadcnCardTitle>,
  CardTitleProps
>(
  ({ className, ...props }, ref) => {
    return (
      <ShadcnCardTitle
        ref={ref}
        className={cn('', className)}
        {...props}
      />
    )
  }
)
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<
  React.ElementRef<typeof ShadcnCardDescription>,
  CardDescriptionProps
>(
  ({ className, ...props }, ref) => {
    return (
      <ShadcnCardDescription
        ref={ref}
        className={cn('', className)}
        {...props}
      />
    )
  }
)
CardDescription.displayName = 'CardDescription'

const CardAction = React.forwardRef<
  React.ElementRef<typeof ShadcnCardAction>,
  CardActionProps
>(
  ({ className, ...props }, ref) => {
    return (
      <ShadcnCardAction
        ref={ref}
        className={cn('', className)}
        {...props}
      />
    )
  }
)
CardAction.displayName = 'CardAction'

const CardContent = React.forwardRef<
  React.ElementRef<typeof ShadcnCardContent>,
  CardContentProps
>(
  ({ className, size = 'md', ...props }, ref) => {
    return (
      <ShadcnCardContent
        ref={ref}
        className={cn(
          truccoCardContentVariants({ size }),
          className
        )}
        {...props}
      />
    )
  }
)
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<
  React.ElementRef<typeof ShadcnCardFooter>,
  CardFooterProps
>(
  ({ className, size = 'md', bordered = false, ...props }, ref) => {
    return (
      <ShadcnCardFooter
        ref={ref}
        className={cn(
          truccoCardFooterVariants({ size, bordered }),
          className
        )}
        {...props}
      />
    )
  }
)
CardFooter.displayName = 'CardFooter'

export { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardAction, 
  CardDescription, 
  CardContent,
  truccoCardVariants,
}