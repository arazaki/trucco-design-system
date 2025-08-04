'use client'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import {
  Tabs as ShadcnTabs,
  TabsContent as ShadcnTabsContent,
  TabsList as ShadcnTabsList,
  TabsTrigger as ShadcnTabsTrigger,
} from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

/**
 * Trucco Enhanced Tabs Component
 * 
 * Wraps shadcn/ui Tabs with Trucco's semantic theming system and additional features.
 * Provides enhanced tab variants and semantic theming while leveraging
 * shadcn's accessibility foundation and Radix UI primitives.
 */

const truccoTabsListVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: '',
        primary: 'bg-primary/5 border-primary/20',
        secondary: 'bg-secondary/5 border-secondary/20',
        outline: 'bg-transparent border',
        pills: 'bg-muted p-1 rounded-lg',
      },
      size: {
        sm: 'h-8 text-sm',
        md: 'h-9 text-sm',
        lg: 'h-10 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

const truccoTabsTriggerVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: '',
        primary: 'data-[state=active]:bg-primary data-[state=active]:text-primary-foreground',
        secondary: 'data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground',
        outline: 'data-[state=active]:bg-background data-[state=active]:border-primary',
        pills: 'data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm',
      },
      size: {
        sm: 'h-7 px-2 text-sm',
        md: 'h-8 px-3 text-sm',
        lg: 'h-9 px-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface TabsProps extends React.ComponentProps<typeof ShadcnTabs> {}
export interface TabsContentProps extends React.ComponentProps<typeof ShadcnTabsContent> {}

export interface TabsListProps
  extends Omit<React.ComponentProps<typeof ShadcnTabsList>, 'className'>,
    VariantProps<typeof truccoTabsListVariants> {
  className?: string
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'pills'
  size?: 'sm' | 'md' | 'lg'
}

export interface TabsTriggerProps
  extends Omit<React.ComponentProps<typeof ShadcnTabsTrigger>, 'className'>,
    VariantProps<typeof truccoTabsTriggerVariants> {
  className?: string
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'pills'
  size?: 'sm' | 'md' | 'lg'
}

const Tabs = ShadcnTabs
const TabsContent = ShadcnTabsContent

const TabsList = React.forwardRef<
  React.ElementRef<typeof ShadcnTabsList>,
  TabsListProps
>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <ShadcnTabsList
        ref={ref}
        className={cn(
          truccoTabsListVariants({ variant, size }),
          className
        )}
        {...props}
      />
    )
  }
)
TabsList.displayName = 'TabsList'

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof ShadcnTabsTrigger>,
  TabsTriggerProps
>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <ShadcnTabsTrigger
        ref={ref}
        className={cn(
          truccoTabsTriggerVariants({ variant, size }),
          className
        )}
        {...props}
      />
    )
  }
)
TabsTrigger.displayName = 'TabsTrigger'

export { Tabs, TabsContent, TabsList, TabsTrigger, truccoTabsListVariants, truccoTabsTriggerVariants }