'use client'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import {
  Accordion as ShadcnAccordion,
  AccordionContent as ShadcnAccordionContent,
  AccordionItem as ShadcnAccordionItem,
  AccordionTrigger as ShadcnAccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

/**
 * Trucco Enhanced Accordion Component
 * 
 * Wraps shadcn/ui Accordion with Trucco's semantic theming system and additional features.
 * Provides enhanced accordion variants and semantic theming while leveraging
 * shadcn's accessibility foundation and Radix UI primitives.
 */

const truccoAccordionItemVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: '',
        primary: 'border-primary/20',
        secondary: 'border-secondary/20',
        success: 'border-green-200 dark:border-green-800',
        warning: 'border-yellow-200 dark:border-yellow-800',
        error: 'border-destructive/20',
        ghost: 'border-transparent',
      },
      size: {
        sm: '[&>div]:py-2',
        md: '[&>div]:py-4',
        lg: '[&>div]:py-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

const truccoAccordionTriggerVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: '',
        primary: 'hover:text-primary data-[state=open]:text-primary',
        secondary: 'hover:text-secondary-foreground data-[state=open]:text-secondary-foreground',
        success: 'hover:text-green-700 data-[state=open]:text-green-700 dark:hover:text-green-300 dark:data-[state=open]:text-green-300',
        warning: 'hover:text-yellow-700 data-[state=open]:text-yellow-700 dark:hover:text-yellow-300 dark:data-[state=open]:text-yellow-300',
        error: 'hover:text-destructive data-[state=open]:text-destructive',
        ghost: 'hover:bg-accent',
      },
      size: {
        sm: 'py-2 text-sm',
        md: 'py-4 text-base',
        lg: 'py-6 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export type AccordionProps = React.ComponentProps<typeof ShadcnAccordion>
export type AccordionContentProps = React.ComponentProps<typeof ShadcnAccordionContent>

export interface AccordionItemProps
  extends Omit<React.ComponentProps<typeof ShadcnAccordionItem>, 'className'>,
    VariantProps<typeof truccoAccordionItemVariants> {
  className?: string
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export interface AccordionTriggerProps
  extends Omit<React.ComponentProps<typeof ShadcnAccordionTrigger>, 'className'>,
    VariantProps<typeof truccoAccordionTriggerVariants> {
  className?: string
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Accordion = ShadcnAccordion
const AccordionContent = ShadcnAccordionContent

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof ShadcnAccordionItem>,
  AccordionItemProps
>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <ShadcnAccordionItem
        ref={ref}
        className={cn(
          truccoAccordionItemVariants({ variant, size }),
          className
        )}
        {...props}
      />
    )
  }
)
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof ShadcnAccordionTrigger>,
  AccordionTriggerProps
>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <ShadcnAccordionTrigger
        ref={ref}
        className={cn(
          truccoAccordionTriggerVariants({ variant, size }),
          className
        )}
        {...props}
      />
    )
  }
)
AccordionTrigger.displayName = 'AccordionTrigger'

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, truccoAccordionItemVariants, truccoAccordionTriggerVariants }