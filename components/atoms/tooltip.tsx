'use client'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import {
  Tooltip as ShadcnTooltip,
  TooltipContent as ShadcnTooltipContent,
  TooltipProvider as ShadcnTooltipProvider,
  TooltipTrigger as ShadcnTooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

/**
 * Trucco Enhanced Tooltip Component
 * 
 * Wraps shadcn/ui Tooltip with Trucco's semantic theming system and additional features.
 * Provides enhanced tooltip variants and semantic theming while leveraging
 * shadcn's accessibility foundation and Radix UI primitives.
 */

const truccoTooltipContentVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: '',
        primary: 'bg-primary text-primary-foreground border-primary/20',
        secondary: 'bg-secondary text-secondary-foreground border-secondary/20',
        success: 'bg-green-600 text-white border-green-500',
        warning: 'bg-yellow-600 text-white border-yellow-500',
        error: 'bg-destructive text-white border-destructive',
        info: 'bg-blue-600 text-white border-blue-500',
      },
      size: {
        sm: 'px-2 py-1 text-xs',
        md: 'px-3 py-1.5 text-sm',
        lg: 'px-4 py-2 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface TooltipProps extends React.ComponentProps<typeof ShadcnTooltip> {}
export interface TooltipTriggerProps extends React.ComponentProps<typeof ShadcnTooltipTrigger> {}
export interface TooltipProviderProps extends React.ComponentProps<typeof ShadcnTooltipProvider> {}

export interface TooltipContentProps
  extends Omit<React.ComponentProps<typeof ShadcnTooltipContent>, 'className'>,
    VariantProps<typeof truccoTooltipContentVariants> {
  className?: string
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
  size?: 'sm' | 'md' | 'lg'
}

const Tooltip = ShadcnTooltip
const TooltipTrigger = ShadcnTooltipTrigger
const TooltipProvider = ShadcnTooltipProvider

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof ShadcnTooltipContent>,
  TooltipContentProps
>(
  ({ 
    className, 
    variant = 'default',
    size = 'md',
    ...props 
  }, ref) => {
    return (
      <ShadcnTooltipContent
        ref={ref}
        className={cn(
          truccoTooltipContentVariants({ variant, size }),
          className
        )}
        {...props}
      />
    )
  }
)
TooltipContent.displayName = 'TooltipContent'

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, truccoTooltipContentVariants }