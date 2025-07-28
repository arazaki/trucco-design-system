'use client'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Avatar as ShadcnAvatar, AvatarImage as ShadcnAvatarImage, AvatarFallback as ShadcnAvatarFallback } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

/**
 * Trucco Enhanced Avatar Component
 * 
 * Wraps shadcn/ui Avatar with Trucco's semantic theming system and additional features.
 * Provides enhanced sizing, status indicators, and fallback patterns while leveraging
 * shadcn's accessibility foundation and Radix UI primitives.
 */

// Enhanced variants that extend shadcn with semantic theming
const truccoAvatarVariants = cva(
  // Base styles from shadcn
  'relative flex shrink-0 overflow-hidden',
  {
    variants: {
      // Size variants
      size: {
        xs: 'size-6 text-xs',
        sm: 'size-8 text-sm', // Default shadcn size
        md: 'size-10 text-base',
        lg: 'size-12 text-lg',
        xl: 'size-16 text-xl',
        '2xl': 'size-20 text-2xl',
      },
      // Shape variants
      shape: {
        circle: 'rounded-full',
        square: 'rounded-md',
        rounded: 'rounded-lg',
      },
      // Theme variants for fallback background
      theme: {
        default: '', // Uses shadcn default
        primary: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        success: 'bg-[var(--success)] text-white',
        warning: 'bg-[var(--warning)] text-white',
        error: 'bg-destructive text-white',
        neutral: 'bg-muted text-muted-foreground',
      },
    },
    defaultVariants: {
      size: 'sm',
      shape: 'circle',
      theme: 'default',
    },
  }
)

// Status indicator variants
const statusVariants = cva(
  'absolute border-2 border-background rounded-full',
  {
    variants: {
      size: {
        xs: 'size-1.5 -bottom-0 -right-0',
        sm: 'size-2 -bottom-0 -right-0',
        md: 'size-2.5 -bottom-0.5 -right-0.5',
        lg: 'size-3 -bottom-0.5 -right-0.5',
        xl: 'size-4 -bottom-1 -right-1',
        '2xl': 'size-5 -bottom-1 -right-1',
      },
      status: {
        online: 'bg-green-500',
        offline: 'bg-gray-400',
        busy: 'bg-red-500',
        away: 'bg-yellow-500',
      },
    },
  }
)

export interface AvatarProps
  extends React.ComponentProps<typeof ShadcnAvatar>,
    VariantProps<typeof truccoAvatarVariants> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  shape?: 'circle' | 'square' | 'rounded'
  theme?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral'
  src?: string
  alt?: string
  fallback?: string
  status?: 'online' | 'offline' | 'busy' | 'away'
  showStatus?: boolean
}

export type AvatarImageProps = React.ComponentProps<typeof ShadcnAvatarImage>

export interface AvatarFallbackProps 
  extends React.ComponentProps<typeof ShadcnAvatarFallback>,
    Pick<VariantProps<typeof truccoAvatarVariants>, 'theme'> {
  theme?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral'
}

// Main Avatar component
const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ 
    className, 
    size = 'sm',
    shape = 'circle',
    theme = 'default',
    src,
    alt,
    fallback,
    status,
    showStatus = false,
    children,
    ...props 
  }, ref) => {
    const initials = React.useMemo(() => {
      if (fallback) return fallback
      if (alt) {
        return alt
          .split(' ')
          .map(name => name.charAt(0).toUpperCase())
          .slice(0, 2)
          .join('')
      }
      return '?'
    }, [fallback, alt])

    return (
      <ShadcnAvatar
        ref={ref}
        className={cn(
          truccoAvatarVariants({ size, shape }),
          className
        )}
        {...props}
      >
        {src && <AvatarImage src={src} alt={alt} />}
        <AvatarFallback theme={theme}>
          {children || initials}
        </AvatarFallback>
        
        {showStatus && status && (
          <div className={cn(statusVariants({ size, status }))} />
        )}
      </ShadcnAvatar>
    )
  }
)
Avatar.displayName = 'Avatar'

// Enhanced AvatarImage component
const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, ...props }, ref) => {
    return (
      <ShadcnAvatarImage
        ref={ref}
        className={cn('aspect-square size-full object-cover', className)}
        {...props}
      />
    )
  }
)
AvatarImage.displayName = 'AvatarImage'

// Enhanced AvatarFallback component
const AvatarFallback = React.forwardRef<HTMLDivElement, AvatarFallbackProps>(
  ({ className, theme = 'default', ...props }, ref) => {
    return (
      <ShadcnAvatarFallback
        ref={ref}
        className={cn(
          'flex size-full items-center justify-center font-medium',
          theme === 'default' && 'bg-muted text-muted-foreground',
          theme === 'primary' && 'bg-primary text-primary-foreground',
          theme === 'secondary' && 'bg-secondary text-secondary-foreground',
          theme === 'success' && 'bg-[var(--success)] text-white',
          theme === 'warning' && 'bg-[var(--warning)] text-white',
          theme === 'error' && 'bg-destructive text-white',
          theme === 'neutral' && 'bg-neutral-200 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200',
          className
        )}
        {...props}
      />
    )
  }
)
AvatarFallback.displayName = 'AvatarFallback'

// Compound Avatar component with all sub-components
const CompoundAvatar = Object.assign(Avatar, {
  Image: AvatarImage,
  Fallback: AvatarFallback,
})

export { CompoundAvatar as Avatar, AvatarImage, AvatarFallback, truccoAvatarVariants }