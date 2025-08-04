'use client'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import {
  AlertDialog as ShadcnAlertDialog,
  AlertDialogAction as ShadcnAlertDialogAction,
  AlertDialogCancel as ShadcnAlertDialogCancel,
  AlertDialogContent as ShadcnAlertDialogContent,
  AlertDialogDescription as ShadcnAlertDialogDescription,
  AlertDialogFooter as ShadcnAlertDialogFooter,
  AlertDialogHeader as ShadcnAlertDialogHeader,
  AlertDialogTitle as ShadcnAlertDialogTitle,
  AlertDialogTrigger as ShadcnAlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { cn } from '@/lib/utils'

/**
 * Trucco Enhanced Alert Dialog Component
 * 
 * Wraps shadcn/ui Alert Dialog with Trucco's semantic theming system and additional features.
 * Provides enhanced alert dialog variants and semantic theming while leveraging
 * shadcn's accessibility foundation and Radix UI primitives.
 */

// Enhanced variants for action buttons
const truccoAlertDialogActionVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: '',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        success: 'bg-green-600 text-white hover:bg-green-700',
        warning: 'bg-yellow-600 text-white hover:bg-yellow-700',
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
      },
      theme: {
        semantic: '',
        red: 'bg-red-600 text-white hover:bg-red-700',
        blue: 'bg-blue-600 text-white hover:bg-blue-700',
        purple: 'bg-purple-600 text-white hover:bg-purple-700',
        green: 'bg-green-600 text-white hover:bg-green-700',
      },
    },
    defaultVariants: {
      variant: 'default',
      theme: 'semantic',
    },
  }
)

export interface AlertDialogProps extends React.ComponentProps<typeof ShadcnAlertDialog> {}

export interface AlertDialogTriggerProps extends React.ComponentProps<typeof ShadcnAlertDialogTrigger> {}

export interface AlertDialogContentProps extends React.ComponentProps<typeof ShadcnAlertDialogContent> {}

export interface AlertDialogHeaderProps extends React.ComponentProps<typeof ShadcnAlertDialogHeader> {}

export interface AlertDialogFooterProps extends React.ComponentProps<typeof ShadcnAlertDialogFooter> {}

export interface AlertDialogTitleProps extends React.ComponentProps<typeof ShadcnAlertDialogTitle> {}

export interface AlertDialogDescriptionProps extends React.ComponentProps<typeof ShadcnAlertDialogDescription> {}

export interface AlertDialogActionProps
  extends Omit<React.ComponentProps<typeof ShadcnAlertDialogAction>, 'className'>,
    VariantProps<typeof truccoAlertDialogActionVariants> {
  className?: string
  variant?: 'default' | 'destructive' | 'success' | 'warning' | 'primary'
  theme?: 'semantic' | 'red' | 'blue' | 'purple' | 'green'
}

export interface AlertDialogCancelProps extends React.ComponentProps<typeof ShadcnAlertDialogCancel> {}

const AlertDialog = ShadcnAlertDialog
const AlertDialogTrigger = ShadcnAlertDialogTrigger
const AlertDialogContent = ShadcnAlertDialogContent
const AlertDialogHeader = ShadcnAlertDialogHeader
const AlertDialogFooter = ShadcnAlertDialogFooter
const AlertDialogTitle = ShadcnAlertDialogTitle
const AlertDialogDescription = ShadcnAlertDialogDescription
const AlertDialogCancel = ShadcnAlertDialogCancel

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof ShadcnAlertDialogAction>,
  AlertDialogActionProps
>(
  ({ 
    className, 
    variant = 'default',
    theme = 'semantic',
    ...props 
  }, ref) => {
    const useTruccoVariant = variant && variant !== 'default'
    
    return (
      <ShadcnAlertDialogAction
        ref={ref}
        className={cn(
          truccoAlertDialogActionVariants({ 
            variant: useTruccoVariant ? variant : 'default',
            theme: theme === 'semantic' ? undefined : theme,
          }),
          className
        )}
        {...props}
      />
    )
  }
)
AlertDialogAction.displayName = 'AlertDialogAction'

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  truccoAlertDialogActionVariants,
}