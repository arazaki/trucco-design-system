'use client'
import * as React from 'react'
import {
  Collapsible as ShadcnCollapsible,
  CollapsibleContent as ShadcnCollapsibleContent,
  CollapsibleTrigger as ShadcnCollapsibleTrigger,
} from '@/components/ui/collapsible'
import { cn } from '@/lib/utils'

/**
 * Trucco Enhanced Collapsible Component
 * 
 * Wraps shadcn/ui Collapsible with Trucco's semantic theming system and additional features.
 * Provides enhanced collapsible variants and semantic theming while leveraging
 * shadcn's accessibility foundation and Radix UI primitives.
 */

export interface CollapsibleProps extends React.ComponentProps<typeof ShadcnCollapsible> {}

export interface CollapsibleTriggerProps extends React.ComponentProps<typeof ShadcnCollapsibleTrigger> {}

export interface CollapsibleContentProps extends React.ComponentProps<typeof ShadcnCollapsibleContent> {}

// Enhanced Collapsible with integrated trigger and content
export interface EnhancedCollapsibleProps extends CollapsibleProps {
  trigger?: React.ReactNode
  children: React.ReactNode
  className?: string
  triggerClassName?: string
  contentClassName?: string
}

const Collapsible = ShadcnCollapsible
const CollapsibleTrigger = ShadcnCollapsibleTrigger
const CollapsibleContent = ShadcnCollapsibleContent

// Enhanced Collapsible with integrated trigger
const EnhancedCollapsible = React.forwardRef<
  React.ElementRef<typeof ShadcnCollapsible>,
  EnhancedCollapsibleProps
>(
  ({ 
    trigger,
    children,
    className,
    triggerClassName,
    contentClassName,
    ...props 
  }, ref) => {
    if (!trigger) {
      return (
        <Collapsible
          ref={ref}
          className={cn('space-y-2', className)}
          {...props}
        >
          {children}
        </Collapsible>
      )
    }

    return (
      <Collapsible
        ref={ref}
        className={cn('space-y-2', className)}
        {...props}
      >
        <CollapsibleTrigger
          className={cn(
            'flex w-full items-center justify-between text-sm font-medium',
            triggerClassName
          )}
        >
          {trigger}
        </CollapsibleTrigger>
        <CollapsibleContent className={cn('space-y-2', contentClassName)}>
          {children}
        </CollapsibleContent>
      </Collapsible>
    )
  }
)
EnhancedCollapsible.displayName = 'EnhancedCollapsible'

export { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger, 
  EnhancedCollapsible 
}