'use client'
import * as React from 'react'
import { Toaster as ShadcnToaster } from '@/components/ui/sonner'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

/**
 * Trucco Enhanced Toast Component (using Sonner)
 * 
 * Wraps shadcn/ui Sonner with Trucco's semantic theming system and additional features.
 * Provides enhanced toast variants and semantic theming.
 */

export interface ToasterProps extends React.ComponentProps<typeof ShadcnToaster> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
}

// Enhanced toast functions with Trucco semantic variants
const truccoToast = {
  // Keep original toast methods available
  ...toast,
  
  // Override with Trucco semantic variants
  success: (message: string, options?: Parameters<typeof toast.success>[1]) =>
    toast.success(message, {
      className: 'border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950/30 dark:text-green-300',
      ...options,
    }),
  
  error: (message: string, options?: Parameters<typeof toast.error>[1]) =>
    toast.error(message, {
      className: 'border-destructive/20 bg-destructive/5 text-destructive',
      ...options,
    }),
  
  warning: (message: string, options?: Parameters<typeof toast>[1]) =>
    toast(message, {
      className: 'border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-800 dark:bg-yellow-950/30 dark:text-yellow-300',
      ...options,
    }),
  
  info: (message: string, options?: Parameters<typeof toast>[1]) =>
    toast(message, {
      className: 'border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-300',
      ...options,
    }),
  
  primary: (message: string, options?: Parameters<typeof toast>[1]) =>
    toast(message, {
      className: 'border-primary/20 bg-primary/5 text-primary-foreground',
      ...options,
    }),
  
  secondary: (message: string, options?: Parameters<typeof toast>[1]) =>
    toast(message, {
      className: 'border-secondary/20 bg-secondary/5 text-secondary-foreground',
      ...options,
    }),
}

const Toaster = ({ className, ...props }: ToasterProps) => {
  return (
    <ShadcnToaster
      className={cn('', className)}
      {...props}
    />
  )
}

export { Toaster, toast, truccoToast }