import { type VariantProps, cva } from 'class-variance-authority'

/**
 * Common variant definitions used across components
 */

// Size variants
export const sizeVariants = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-base',
  lg: 'h-12 px-6 text-lg',
  xl: 'h-14 px-8 text-xl',
}

// Color hierarchy variants
export const colorVariants = {
  primary: 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700',
  secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700',
  tertiary: 'bg-tertiary-500 text-white hover:bg-tertiary-600 active:bg-tertiary-700',
  neutral: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 active:bg-neutral-300',
  ghost: 'bg-transparent hover:bg-neutral-100 active:bg-neutral-200',
  outline: 'border border-neutral-300 bg-transparent hover:bg-neutral-50 active:bg-neutral-100',
}

// Border radius variants
export const radiusVariants = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full',
}

// Shadow variants
export const shadowVariants = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
}

// Export the cva function for easy access
export { cva, type VariantProps }