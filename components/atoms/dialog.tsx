'use client'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import {
  Dialog as ShadcnDialog,
  DialogClose as ShadcnDialogClose,
  DialogContent as ShadcnDialogContent,
  DialogDescription as ShadcnDialogDescription,
  DialogFooter as ShadcnDialogFooter,
  DialogHeader as ShadcnDialogHeader,
  DialogOverlay as ShadcnDialogOverlay,
  DialogPortal as ShadcnDialogPortal,
  DialogTitle as ShadcnDialogTitle,
  DialogTrigger as ShadcnDialogTrigger,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

/**
 * Trucco Enhanced Dialog Component
 * 
 * Wraps shadcn/ui Dialog with Trucco's semantic theming system and additional features.
 * Provides enhanced dialog variants, sizes, and semantic theming while leveraging
 * shadcn's accessibility foundation and Radix UI primitives for proper modal behavior.
 */

// Enhanced variants that extend shadcn with semantic theming
const truccoDialogContentVariants = cva(
  '',
  {
    variants: {
      // Dialog variant styles
      variant: {
        default: '', // Use shadcn default
        primary: 'border-primary/20',
        secondary: 'border-secondary/20',
        success: 'border-green-200 dark:border-green-800',
        warning: 'border-yellow-200 dark:border-yellow-800',
        error: 'border-destructive/20',
        info: 'border-blue-200 dark:border-blue-800',
      },
      // Size variants
      size: {
        sm: 'max-w-sm',
        md: 'max-w-lg', // Default
        lg: 'max-w-2xl',
        xl: 'max-w-4xl',
        full: 'max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)]',
      },
      // Semantic theme variants
      theme: {
        semantic: '', // Uses current semantic tokens from CSS
        red: 'border-red-200 dark:border-red-800',
        blue: 'border-blue-200 dark:border-blue-800',
        purple: 'border-purple-200 dark:border-purple-800',
        green: 'border-green-200 dark:border-green-800',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      theme: 'semantic',
    },
  }
)

// Header variants
const truccoDialogHeaderVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: '',
        primary: 'text-primary',
        secondary: 'text-secondary-foreground',
        success: 'text-green-700 dark:text-green-300',
        warning: 'text-yellow-700 dark:text-yellow-300',
        error: 'text-destructive',
        info: 'text-blue-700 dark:text-blue-300',
      },
      size: {
        sm: 'gap-1',
        md: 'gap-2', // Default
        lg: 'gap-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

// Footer variants
const truccoDialogFooterVariants = cva(
  '',
  {
    variants: {
      alignment: {
        left: 'sm:justify-start',
        center: 'sm:justify-center',
        right: 'sm:justify-end', // Default
      },
      size: {
        sm: 'gap-1',
        md: 'gap-2', // Default
        lg: 'gap-3',
      },
    },
    defaultVariants: {
      alignment: 'right',
      size: 'md',
    },
  }
)

export interface DialogProps extends React.ComponentProps<typeof ShadcnDialog> {}

export interface DialogTriggerProps extends React.ComponentProps<typeof ShadcnDialogTrigger> {}

export interface DialogPortalProps extends React.ComponentProps<typeof ShadcnDialogPortal> {}

export interface DialogCloseProps extends React.ComponentProps<typeof ShadcnDialogClose> {}

export interface DialogOverlayProps extends React.ComponentProps<typeof ShadcnDialogOverlay> {}

export interface DialogContentProps
  extends Omit<React.ComponentProps<typeof ShadcnDialogContent>, 'className'>,
    VariantProps<typeof truccoDialogContentVariants> {
  className?: string
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  theme?: 'semantic' | 'red' | 'blue' | 'purple' | 'green'
}

export interface DialogHeaderProps
  extends React.ComponentProps<typeof ShadcnDialogHeader>,
    VariantProps<typeof truccoDialogHeaderVariants> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
  size?: 'sm' | 'md' | 'lg'
}

export interface DialogFooterProps
  extends React.ComponentProps<typeof ShadcnDialogFooter>,
    VariantProps<typeof truccoDialogFooterVariants> {
  alignment?: 'left' | 'center' | 'right'
  size?: 'sm' | 'md' | 'lg'
}

export interface DialogTitleProps extends React.ComponentProps<typeof ShadcnDialogTitle> {}

export interface DialogDescriptionProps extends React.ComponentProps<typeof ShadcnDialogDescription> {}

const Dialog = React.forwardRef<
  React.ElementRef<typeof ShadcnDialog>,
  DialogProps
>(
  ({ ...props }, ref) => {
    return <ShadcnDialog ref={ref} {...props} />
  }
)
Dialog.displayName = 'Dialog'

const DialogTrigger = React.forwardRef<
  React.ElementRef<typeof ShadcnDialogTrigger>,
  DialogTriggerProps
>(
  ({ ...props }, ref) => {
    return <ShadcnDialogTrigger ref={ref} {...props} />
  }
)
DialogTrigger.displayName = 'DialogTrigger'

const DialogPortal = React.forwardRef<
  React.ElementRef<typeof ShadcnDialogPortal>,
  DialogPortalProps
>(
  ({ ...props }, ref) => {
    return <ShadcnDialogPortal ref={ref} {...props} />
  }
)
DialogPortal.displayName = 'DialogPortal'

const DialogClose = React.forwardRef<
  React.ElementRef<typeof ShadcnDialogClose>,
  DialogCloseProps
>(
  ({ ...props }, ref) => {
    return <ShadcnDialogClose ref={ref} {...props} />
  }
)
DialogClose.displayName = 'DialogClose'

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof ShadcnDialogOverlay>,
  DialogOverlayProps
>(
  ({ className, ...props }, ref) => {
    return (
      <ShadcnDialogOverlay
        ref={ref}
        className={cn('', className)}
        {...props}
      />
    )
  }
)
DialogOverlay.displayName = 'DialogOverlay'

const DialogContent = React.forwardRef<
  React.ElementRef<typeof ShadcnDialogContent>,
  DialogContentProps
>(
  ({ 
    className, 
    variant = 'default',
    size = 'md',
    theme = 'semantic',
    ...props 
  }, ref) => {
    // Determine which variant system to use
    const useTruccoVariant = variant && variant !== 'default'
    
    return (
      <ShadcnDialogContent
        ref={ref}
        className={cn(
          // Apply Trucco variants if using semantic variants
          truccoDialogContentVariants({ 
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
DialogContent.displayName = 'DialogContent'

const DialogHeader = React.forwardRef<
  React.ElementRef<typeof ShadcnDialogHeader>,
  DialogHeaderProps
>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <ShadcnDialogHeader
        ref={ref}
        className={cn(
          truccoDialogHeaderVariants({ variant, size }),
          className
        )}
        {...props}
      />
    )
  }
)
DialogHeader.displayName = 'DialogHeader'

const DialogFooter = React.forwardRef<
  React.ElementRef<typeof ShadcnDialogFooter>,
  DialogFooterProps
>(
  ({ className, alignment = 'right', size = 'md', ...props }, ref) => {
    return (
      <ShadcnDialogFooter
        ref={ref}
        className={cn(
          truccoDialogFooterVariants({ alignment, size }),
          className
        )}
        {...props}
      />
    )
  }
)
DialogFooter.displayName = 'DialogFooter'

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof ShadcnDialogTitle>,
  DialogTitleProps
>(
  ({ className, ...props }, ref) => {
    return (
      <ShadcnDialogTitle
        ref={ref}
        className={cn('', className)}
        {...props}
      />
    )
  }
)
DialogTitle.displayName = 'DialogTitle'

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof ShadcnDialogDescription>,
  DialogDescriptionProps
>(
  ({ className, ...props }, ref) => {
    return (
      <ShadcnDialogDescription
        ref={ref}
        className={cn('', className)}
        {...props}
      />
    )
  }
)
DialogDescription.displayName = 'DialogDescription'

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  truccoDialogContentVariants,
}