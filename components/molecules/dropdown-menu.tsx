'use client'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import {
  DropdownMenu as ShadcnDropdownMenu,
  DropdownMenuCheckboxItem as ShadcnDropdownMenuCheckboxItem,
  DropdownMenuContent as ShadcnDropdownMenuContent,
  DropdownMenuGroup as ShadcnDropdownMenuGroup,
  DropdownMenuItem as ShadcnDropdownMenuItem,
  DropdownMenuLabel as ShadcnDropdownMenuLabel,
  DropdownMenuPortal as ShadcnDropdownMenuPortal,
  DropdownMenuRadioGroup as ShadcnDropdownMenuRadioGroup,
  DropdownMenuRadioItem as ShadcnDropdownMenuRadioItem,
  DropdownMenuSeparator as ShadcnDropdownMenuSeparator,
  DropdownMenuShortcut as ShadcnDropdownMenuShortcut,
  DropdownMenuSub as ShadcnDropdownMenuSub,
  DropdownMenuSubContent as ShadcnDropdownMenuSubContent,
  DropdownMenuSubTrigger as ShadcnDropdownMenuSubTrigger,
  DropdownMenuTrigger as ShadcnDropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

/**
 * Trucco Enhanced Dropdown Menu Component
 * 
 * Wraps shadcn/ui Dropdown Menu with Trucco's semantic theming system.
 * Provides enhanced variants while leveraging shadcn's accessibility foundation.
 */

const truccoDropdownMenuContentVariants = cva(
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
      },
      size: {
        sm: 'min-w-[6rem] p-1',
        md: 'min-w-[8rem] p-1',
        lg: 'min-w-[12rem] p-1',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface DropdownMenuProps extends React.ComponentProps<typeof ShadcnDropdownMenu> {}
export interface DropdownMenuTriggerProps extends React.ComponentProps<typeof ShadcnDropdownMenuTrigger> {}
export interface DropdownMenuGroupProps extends React.ComponentProps<typeof ShadcnDropdownMenuGroup> {}
export interface DropdownMenuPortalProps extends React.ComponentProps<typeof ShadcnDropdownMenuPortal> {}
export interface DropdownMenuSubProps extends React.ComponentProps<typeof ShadcnDropdownMenuSub> {}
export interface DropdownMenuRadioGroupProps extends React.ComponentProps<typeof ShadcnDropdownMenuRadioGroup> {}
export interface DropdownMenuSubTriggerProps extends React.ComponentProps<typeof ShadcnDropdownMenuSubTrigger> {}
export interface DropdownMenuSubContentProps extends React.ComponentProps<typeof ShadcnDropdownMenuSubContent> {}
export interface DropdownMenuItemProps extends React.ComponentProps<typeof ShadcnDropdownMenuItem> {}
export interface DropdownMenuCheckboxItemProps extends React.ComponentProps<typeof ShadcnDropdownMenuCheckboxItem> {}
export interface DropdownMenuRadioItemProps extends React.ComponentProps<typeof ShadcnDropdownMenuRadioItem> {}
export interface DropdownMenuLabelProps extends React.ComponentProps<typeof ShadcnDropdownMenuLabel> {}
export interface DropdownMenuSeparatorProps extends React.ComponentProps<typeof ShadcnDropdownMenuSeparator> {}
export interface DropdownMenuShortcutProps extends React.ComponentProps<typeof ShadcnDropdownMenuShortcut> {}

export interface DropdownMenuContentProps
  extends Omit<React.ComponentProps<typeof ShadcnDropdownMenuContent>, 'className'>,
    VariantProps<typeof truccoDropdownMenuContentVariants> {
  className?: string
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
}

const DropdownMenu = ShadcnDropdownMenu
const DropdownMenuTrigger = ShadcnDropdownMenuTrigger
const DropdownMenuGroup = ShadcnDropdownMenuGroup
const DropdownMenuPortal = ShadcnDropdownMenuPortal
const DropdownMenuSub = ShadcnDropdownMenuSub
const DropdownMenuRadioGroup = ShadcnDropdownMenuRadioGroup
const DropdownMenuSubTrigger = ShadcnDropdownMenuSubTrigger
const DropdownMenuSubContent = ShadcnDropdownMenuSubContent
const DropdownMenuItem = ShadcnDropdownMenuItem
const DropdownMenuCheckboxItem = ShadcnDropdownMenuCheckboxItem
const DropdownMenuRadioItem = ShadcnDropdownMenuRadioItem
const DropdownMenuLabel = ShadcnDropdownMenuLabel
const DropdownMenuSeparator = ShadcnDropdownMenuSeparator
const DropdownMenuShortcut = ShadcnDropdownMenuShortcut

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof ShadcnDropdownMenuContent>,
  DropdownMenuContentProps
>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <ShadcnDropdownMenuContent
        ref={ref}
        className={cn(
          truccoDropdownMenuContentVariants({ variant, size }),
          className
        )}
        {...props}
      />
    )
  }
)
DropdownMenuContent.displayName = 'DropdownMenuContent'

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  truccoDropdownMenuContentVariants,
}