import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils/cn'

const textVariants = cva(
  '',
  {
    variants: {
      variant: {
        h1: 'text-4xl font-bold leading-tight text-foreground-primary',
        h2: 'text-3xl font-semibold leading-tight text-foreground-primary',
        h3: 'text-2xl font-semibold leading-snug text-foreground-primary',
        h4: 'text-xl font-medium leading-snug text-foreground-primary',
        h5: 'text-lg font-medium leading-normal text-foreground-primary',
        h6: 'text-base font-medium leading-normal text-foreground-primary',
        body: 'text-base leading-relaxed text-foreground-primary',
        bodySmall: 'text-sm leading-relaxed text-foreground-secondary',
        caption: 'text-xs leading-normal text-foreground-tertiary',
        label: 'text-sm font-medium leading-none text-foreground-primary',
        helper: 'text-xs leading-none text-foreground-muted',
        error: 'text-xs leading-none text-error-600',
        success: 'text-xs leading-none text-success-600',
        warning: 'text-xs leading-none text-warning-600',
        link: 'text-base text-primary-600 hover:text-primary-700 underline cursor-pointer',
        muted: 'text-sm text-foreground-muted',
      },
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
        justify: 'text-justify',
      },
      weight: {
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
      },
    },
    defaultVariants: {
      variant: 'body',
      align: 'left',
      weight: 'normal',
    },
  }
)

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label'
  children: React.ReactNode
}

const Text = React.forwardRef<any, TextProps>(
  ({ className, variant, align, weight, as, children, ...props }, ref) => {
    let Component: React.ElementType = 'p'
    
    // Auto-select HTML element based on variant
    if (as) {
      Component = as
    } else if (variant) {
      switch (variant) {
        case 'h1':
          Component = 'h1'
          break
        case 'h2':
          Component = 'h2'
          break
        case 'h3':
          Component = 'h3'
          break
        case 'h4':
          Component = 'h4'
          break
        case 'h5':
          Component = 'h5'
          break
        case 'h6':
          Component = 'h6'
          break
        case 'label':
        case 'helper':
        case 'error':
        case 'success':
        case 'warning':
          Component = 'label'
          break
        case 'caption':
        case 'bodySmall':
          Component = 'span'
          break
        default:
          Component = 'p'
      }
    }

    return (
      <Component
        className={cn(textVariants({ variant, align, weight }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Text.displayName = 'Text'

export { Text, textVariants }