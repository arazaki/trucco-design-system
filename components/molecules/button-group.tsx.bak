import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils/cn'

const buttonGroupVariants = cva(
  'inline-flex',
  {
    variants: {
      orientation: {
        horizontal: 'flex-row',
        vertical: 'flex-col',
      },
      spacing: {
        none: '',
        sm: 'gap-1',
        md: 'gap-2',
        lg: 'gap-4',
      },
      attached: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        orientation: 'horizontal',
        attached: true,
        spacing: 'none',
        className: '[&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none [&>*:not(:first-child)]:border-l-0',
      },
      {
        orientation: 'vertical',
        attached: true,
        spacing: 'none',
        className: '[&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none [&>*:not(:first-child)]:border-t-0',
      },
    ],
    defaultVariants: {
      orientation: 'horizontal',
      spacing: 'sm',
      attached: false,
    },
  }
)

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> {
  children: React.ReactNode
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, orientation, spacing, attached, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          buttonGroupVariants({ orientation, spacing, attached }),
          className
        )}
        role="group"
        {...props}
      >
        {children}
      </div>
    )
  }
)

ButtonGroup.displayName = 'ButtonGroup'

export { ButtonGroup, buttonGroupVariants }