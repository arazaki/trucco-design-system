'use client'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import {
  ScrollArea as ShadcnScrollArea,
  ScrollBar as ShadcnScrollBar,
} from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'

/**
 * Trucco Enhanced Scroll Area Component
 * 
 * Wraps shadcn/ui Scroll Area with Trucco's semantic theming system and additional features.
 * Provides enhanced scroll area variants and semantic theming while leveraging
 * shadcn's accessibility foundation and Radix UI primitives.
 */

// Enhanced variants for scroll area styling
const truccoScrollAreaVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: '',
        bordered: 'border border-border rounded-md',
        rounded: 'rounded-lg',
      },
      size: {
        sm: 'h-32',
        md: 'h-48',
        lg: 'h-64',
        xl: 'h-80',
        auto: 'h-auto',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'auto',
    },
  }
)

export interface ScrollAreaProps
  extends Omit<React.ComponentProps<typeof ShadcnScrollArea>, 'className'>,
    VariantProps<typeof truccoScrollAreaVariants> {
  className?: string
  variant?: 'default' | 'bordered' | 'rounded'
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'auto'
}

export interface ScrollBarProps extends React.ComponentProps<typeof ShadcnScrollBar> {}

// Enhanced Scroll Area with predefined sizing and styling
export interface EnhancedScrollAreaProps extends ScrollAreaProps {
  scrollBars?: 'vertical' | 'horizontal' | 'both' | 'none'
  children: React.ReactNode
}

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ShadcnScrollArea>,
  ScrollAreaProps
>(
  ({ 
    className, 
    variant = 'default',
    size = 'auto',
    ...props 
  }, ref) => {
    return (
      <ShadcnScrollArea
        ref={ref}
        className={cn(
          truccoScrollAreaVariants({ variant, size }),
          className
        )}
        {...props}
      />
    )
  }
)
ScrollArea.displayName = 'ScrollArea'

const ScrollBar = ShadcnScrollBar

// Enhanced Scroll Area with built-in scroll bars
const EnhancedScrollArea = React.forwardRef<
  React.ElementRef<typeof ShadcnScrollArea>,
  EnhancedScrollAreaProps
>(
  ({ 
    scrollBars = 'vertical',
    children,
    className,
    variant = 'default',
    size = 'auto',
    ...props 
  }, ref) => {
    return (
      <ScrollArea
        ref={ref}
        className={className}
        variant={variant}
        size={size}
        {...props}
      >
        {children}
        {(scrollBars === 'vertical' || scrollBars === 'both') && (
          <ScrollBar orientation="vertical" />
        )}
        {(scrollBars === 'horizontal' || scrollBars === 'both') && (
          <ScrollBar orientation="horizontal" />
        )}
      </ScrollArea>
    )
  }
)
EnhancedScrollArea.displayName = 'EnhancedScrollArea'

export { 
  ScrollArea, 
  ScrollBar, 
  EnhancedScrollArea, 
  truccoScrollAreaVariants 
}