'use client'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import {
  Sheet as ShadcnSheet,
  SheetClose as ShadcnSheetClose,
  SheetContent as ShadcnSheetContent,
  SheetDescription as ShadcnSheetDescription,
  SheetFooter as ShadcnSheetFooter,
  SheetHeader as ShadcnSheetHeader,
  SheetTitle as ShadcnSheetTitle,
  SheetTrigger as ShadcnSheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

/**
 * Trucco Enhanced Sheet Component
 * 
 * Wraps shadcn/ui Sheet with Trucco's semantic theming system and additional features.
 * Provides enhanced sheet variants and semantic theming while leveraging
 * shadcn's accessibility foundation and Radix UI primitives.
 */

// Enhanced variants for sheet content
const truccoSheetContentVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: '',
        bordered: 'border-l border-border',
        elevated: 'shadow-2xl',
      },
      width: {
        sm: 'sm:max-w-sm',
        md: 'sm:max-w-md',
        lg: 'sm:max-w-lg',
        xl: 'sm:max-w-xl',
        '2xl': 'sm:max-w-2xl',
        full: 'sm:max-w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      width: 'md',
    },
  }
)

export interface SheetProps extends React.ComponentProps<typeof ShadcnSheet> {}

export interface SheetTriggerProps extends React.ComponentProps<typeof ShadcnSheetTrigger> {}

export interface SheetContentProps
  extends Omit<React.ComponentProps<typeof ShadcnSheetContent>, 'className'>,
    VariantProps<typeof truccoSheetContentVariants> {
  className?: string
  variant?: 'default' | 'bordered' | 'elevated'
  width?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
}

export interface SheetHeaderProps extends React.ComponentProps<typeof ShadcnSheetHeader> {}

export interface SheetFooterProps extends React.ComponentProps<typeof ShadcnSheetFooter> {}

export interface SheetTitleProps extends React.ComponentProps<typeof ShadcnSheetTitle> {}

export interface SheetDescriptionProps extends React.ComponentProps<typeof ShadcnSheetDescription> {}

export interface SheetCloseProps extends React.ComponentProps<typeof ShadcnSheetClose> {}

// Enhanced Sheet with integrated trigger and content
export interface EnhancedSheetProps extends SheetProps {
  trigger?: React.ReactNode
  title?: string
  description?: string
  footer?: React.ReactNode
  children: React.ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
  variant?: 'default' | 'bordered' | 'elevated'
  width?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  triggerClassName?: string
  contentClassName?: string
}

const Sheet = ShadcnSheet
const SheetTrigger = ShadcnSheetTrigger
const SheetClose = ShadcnSheetClose
const SheetHeader = ShadcnSheetHeader
const SheetFooter = ShadcnSheetFooter
const SheetTitle = ShadcnSheetTitle
const SheetDescription = ShadcnSheetDescription

const SheetContent = React.forwardRef<
  React.ElementRef<typeof ShadcnSheetContent>,
  SheetContentProps
>(
  ({ 
    className, 
    variant = 'default',
    width = 'md',
    ...props 
  }, ref) => {
    return (
      <ShadcnSheetContent
        ref={ref}
        className={cn(
          truccoSheetContentVariants({ variant, width }),
          className
        )}
        {...props}
      />
    )
  }
)
SheetContent.displayName = 'SheetContent'

// Enhanced Sheet with integrated components
const EnhancedSheet = ({ 
  trigger,
  title,
  description,
  footer,
  children,
  side = 'right',
  variant = 'default',
  width = 'md',
  triggerClassName,
  contentClassName,
  ...props 
}: EnhancedSheetProps) => {
  return (
    <Sheet {...props}>
      {trigger && (
        <SheetTrigger className={cn('', triggerClassName)}>
          {trigger}
        </SheetTrigger>
      )}
      <SheetContent 
        side={side} 
        variant={variant} 
        width={width}
        className={contentClassName}
      >
        {(title || description) && (
          <SheetHeader>
            {title && <SheetTitle>{title}</SheetTitle>}
            {description && <SheetDescription>{description}</SheetDescription>}
          </SheetHeader>
        )}
        {children}
        {footer && (
          <SheetFooter>
            {footer}
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  )
}

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  EnhancedSheet,
  truccoSheetContentVariants,
}