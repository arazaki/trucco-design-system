'use client'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import {
  Table as ShadcnTable,
  TableBody as ShadcnTableBody,
  TableCaption as ShadcnTableCaption,
  TableCell as ShadcnTableCell,
  TableFooter as ShadcnTableFooter,
  TableHead as ShadcnTableHead,
  TableHeader as ShadcnTableHeader,
  TableRow as ShadcnTableRow,
} from '@/components/ui/table'
import { cn } from '@/lib/utils'

/**
 * Trucco Enhanced Table Component
 * 
 * Wraps shadcn/ui Table with Trucco's semantic theming system and additional features.
 * Provides enhanced table variants and semantic theming while leveraging
 * shadcn's accessibility foundation.
 */

const truccoTableVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: '',
        primary: 'border-primary/20',
        secondary: 'border-secondary/20',
        striped: '[&>tbody>tr:nth-child(odd)]:bg-muted/50',
        bordered: 'border',
      },
      size: {
        sm: '[&>*]:text-sm [&_th]:px-2 [&_th]:py-2 [&_td]:px-2 [&_td]:py-2',
        md: '[&>*]:text-sm [&_th]:px-3 [&_th]:py-3 [&_td]:px-3 [&_td]:py-3',
        lg: '[&>*]:text-base [&_th]:px-4 [&_th]:py-4 [&_td]:px-4 [&_td]:py-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface TableProps
  extends Omit<React.ComponentProps<typeof ShadcnTable>, 'className'>,
    VariantProps<typeof truccoTableVariants> {
  className?: string
  variant?: 'default' | 'primary' | 'secondary' | 'striped' | 'bordered'
  size?: 'sm' | 'md' | 'lg'
}

export interface TableHeaderProps extends React.ComponentProps<typeof ShadcnTableHeader> {}
export interface TableBodyProps extends React.ComponentProps<typeof ShadcnTableBody> {}
export interface TableFooterProps extends React.ComponentProps<typeof ShadcnTableFooter> {}
export interface TableRowProps extends React.ComponentProps<typeof ShadcnTableRow> {}
export interface TableHeadProps extends React.ComponentProps<typeof ShadcnTableHead> {}
export interface TableCellProps extends React.ComponentProps<typeof ShadcnTableCell> {}
export interface TableCaptionProps extends React.ComponentProps<typeof ShadcnTableCaption> {}

const Table = React.forwardRef<
  React.ElementRef<typeof ShadcnTable>,
  TableProps
>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <ShadcnTable
        ref={ref}
        className={cn(
          truccoTableVariants({ variant, size }),
          className
        )}
        {...props}
      />
    )
  }
)
Table.displayName = 'Table'

const TableHeader = ShadcnTableHeader
const TableBody = ShadcnTableBody
const TableFooter = ShadcnTableFooter
const TableRow = ShadcnTableRow
const TableHead = ShadcnTableHead
const TableCell = ShadcnTableCell
const TableCaption = ShadcnTableCaption

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  truccoTableVariants,
}