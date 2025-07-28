import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Badge as ShadcnBadge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

/**
 * Trucco Enhanced Badge Component
 * 
 * Wraps shadcn/ui Badge with Trucco's semantic theming system and additional features.
 * Provides enhanced variants for status indicators, labels, counts, and tags while
 * leveraging shadcn's accessibility foundation.
 */

// Trucco variant to shadcn variant mapping
const variantMapping = {
  // Trucco variants -> shadcn variants
  primary: 'default',
  secondary: 'secondary',
  tertiary: 'outline',
  outline: 'outline',
  success: 'default', // Will use theme override
  warning: 'default', // Will use theme override
  error: 'destructive',
  destructive: 'destructive',
  default: 'default',
} as const

// Enhanced variants that extend shadcn with semantic theming
const truccoBadgeVariants = cva(
  // Base semantic styles
  '',
  {
    variants: {
      // Trucco variant overrides for semantic feedback
      truccoVariant: {
        primary: 'bg-primary text-primary-foreground border-transparent [a&]:hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground border-transparent [a&]:hover:bg-secondary/90',
        tertiary: 'bg-muted text-muted-foreground border-transparent [a&]:hover:bg-muted/80',
        outline: 'border-border bg-background text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
        success: 'bg-[var(--success)] text-white border-transparent [a&]:hover:bg-[var(--success-emphasis)]',
        warning: 'bg-[var(--warning)] text-white border-transparent [a&]:hover:bg-[var(--warning-emphasis)]',
        error: 'bg-destructive text-white border-transparent [a&]:hover:bg-destructive/90',
        default: '', // Use shadcn default
        destructive: '', // Use shadcn destructive
      },
      // Semantic theme variants
      theme: {
        semantic: '', // Uses current semantic tokens from CSS
        red: 'bg-red-500 text-white border-transparent [a&]:hover:bg-red-600',
        blue: 'bg-blue-500 text-white border-transparent [a&]:hover:bg-blue-600',
        purple: 'bg-purple-500 text-white border-transparent [a&]:hover:bg-purple-600',
        green: 'bg-green-500 text-white border-transparent [a&]:hover:bg-green-600',
      },
      // Size variants
      size: {
        sm: 'px-1.5 py-0.5 text-xs',
        md: 'px-2 py-0.5 text-xs', // Default shadcn size
        lg: 'px-2.5 py-1 text-sm',
      },
      // Shape variants
      shape: {
        default: 'rounded-md',
        rounded: 'rounded-full',
        square: 'rounded-none',
      },
    },
    defaultVariants: {
      truccoVariant: 'primary',
      theme: 'semantic',
      size: 'md',
      shape: 'default',
    },
  }
)

export interface BadgeProps
  extends Omit<React.ComponentProps<typeof ShadcnBadge>, 'variant'>,
    Omit<VariantProps<typeof truccoBadgeVariants>, 'truccoVariant'> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'success' | 'warning' | 'error' | 'default' | 'destructive'
  theme?: 'semantic' | 'red' | 'blue' | 'purple' | 'green'
  size?: 'sm' | 'md' | 'lg'
  shape?: 'default' | 'rounded' | 'square'
  asChild?: boolean
  icon?: React.ReactNode
  removable?: boolean
  onRemove?: () => void
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ 
    className, 
    variant = 'primary', 
    theme = 'semantic',
    size = 'md',
    shape = 'default',
    asChild = false,
    icon,
    removable = false,
    onRemove,
    children,
    ...props 
  }, ref) => {
    // Determine which variant system to use
    const useTruccoVariant = variant && !['default', 'destructive'].includes(variant)
    const mappedVariant = variantMapping[variant] || 'default'

    return (
      <ShadcnBadge
        ref={ref}
        className={cn(
          // Apply Trucco variants if using semantic variants
          useTruccoVariant && truccoBadgeVariants({ 
            truccoVariant: variant, 
            theme: theme === 'semantic' ? undefined : theme,
            size,
            shape
          }),
          className
        )}
        variant={mappedVariant}
        asChild={asChild}
        {...props}
      >
        {asChild ? children : (
          <>
            {icon && <span className="flex-shrink-0">{icon}</span>}
            {children}
            {removable && onRemove && (
              <button
                type="button"
                onClick={onRemove}
                className="ml-1 flex-shrink-0 rounded-full p-0.5 hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Remove"
              >
                <svg
                  className="h-2.5 w-2.5"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 8 8"
                >
                  <path strokeLinecap="round" d="m1 1 6 6m0-6-6 6" />
                </svg>
              </button>
            )}
          </>
        )}
      </ShadcnBadge>
    )
  }
)
Badge.displayName = 'Badge'

export { Badge, truccoBadgeVariants }