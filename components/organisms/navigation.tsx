import * as React from 'react'
// import { Button } from '../atoms/button' // Not used currently
// import { Text } from '../atoms/text' // Not used currently
import { cn } from '@/lib/utils'
import { ErrorBoundary } from './error-boundary'

export interface NavigationItem {
  id: string
  label: string
  href?: string
  onClick?: () => void
  active?: boolean
  disabled?: boolean
  icon?: React.ReactNode
  badge?: string | number
}

export interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  items: NavigationItem[]
  orientation?: 'horizontal' | 'vertical'
  variant?: 'default' | 'pills' | 'underline' | 'sidebar'
  size?: 'sm' | 'md' | 'lg'
  activeItem?: string
  onItemClick?: (item: NavigationItem) => void
  errorBoundary?: {
    enabled?: boolean
    title?: string
    description?: string
    onError?: (error: Error, errorInfo: React.ErrorInfo) => void
  }
}

const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  ({
    className,
    items,
    orientation = 'horizontal',
    variant = 'default',
    size = 'md',
    activeItem,
    onItemClick,
    errorBoundary = { enabled: true },
    ...props
  }, ref) => {
    const isVertical = orientation === 'vertical'
    const isSidebar = variant === 'sidebar'

    const getItemClasses = (item: NavigationItem) => {
      const isActive = item.active || item.id === activeItem
      
      const baseClasses = cn(
        'inline-flex items-center gap-2 font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
        {
          'px-3 py-2 rounded-md': variant === 'pills',
          'px-4 py-2 border-b-2 border-transparent': variant === 'underline' && !isVertical,
          'px-3 py-2 rounded-lg': variant === 'sidebar',
          'px-2 py-1 text-sm': size === 'sm',
          'px-3 py-2 text-base': size === 'md',
          'px-4 py-3 text-lg': size === 'lg',
        }
      )

      const stateClasses = cn({
        // Default variant
        'text-foreground-primary hover:text-primary-600': 
          variant === 'default' && !isActive,
        'text-primary-600': 
          variant === 'default' && isActive,
        
        // Pills variant
        'text-foreground-secondary hover:text-foreground-primary hover:bg-background-tertiary': 
          variant === 'pills' && !isActive,
        'bg-primary-500 text-white hover:bg-primary-600': 
          variant === 'pills' && isActive,
        
        // Underline variant
        'text-foreground-secondary hover:text-foreground-primary hover:border-border-secondary': 
          variant === 'underline' && !isActive,
        'text-primary-600 border-primary-500': 
          variant === 'underline' && isActive,
        
        // Sidebar variant
        'text-foreground-secondary hover:text-foreground-primary hover:bg-background-tertiary sidebar-inactive': 
          variant === 'sidebar' && !isActive,
        'bg-primary-50 text-primary-700 border-r-2 border-primary-500': 
          variant === 'sidebar' && isActive,
        
        // Disabled state
        'opacity-50 cursor-not-allowed pointer-events-none': item.disabled,
      })

      return cn(baseClasses, stateClasses)
    }

    const handleItemClick = (item: NavigationItem) => {
      if (item.disabled) return
      
      if (item.onClick) {
        item.onClick()
      }
      
      onItemClick?.(item)
    }

    const renderItem = (item: NavigationItem) => {
      const content = (
        <>
          {item.icon}
          <span>{item.label}</span>
          {item.badge && (
            <span className="ml-auto px-2 py-0.5 text-xs font-medium bg-primary-100 text-primary-700 rounded-full">
              {item.badge}
            </span>
          )}
        </>
      )

      if (item.href) {
        return (
          <a
            key={item.id}
            href={item.href}
            className={getItemClasses(item)}
            onClick={() => handleItemClick(item)}
          >
            {content}
          </a>
        )
      }

      return (
        <button
          key={item.id}
          type="button"
          className={getItemClasses(item)}
          onClick={() => handleItemClick(item)}
        >
          {content}
        </button>
      )
    }

    const navigationContent = (
      <nav
        ref={ref}
        className={cn(
          'flex',
          {
            'flex-col space-y-1': isVertical,
            'flex-row space-x-1': !isVertical && variant === 'pills',
            'flex-row space-x-6': !isVertical && variant !== 'pills',
            'w-full': isSidebar,
          },
          className
        )}
        {...props}
      >
        {items.map(renderItem)}
      </nav>
    )

    if (errorBoundary?.enabled === false) {
      return navigationContent
    }

    return (
      <ErrorBoundary
        title={errorBoundary?.title || "Navigation Error"}
        description={errorBoundary?.description || "Unable to load navigation items. Some menu items may not be available."}
        onError={errorBoundary?.onError}
      >
        {navigationContent}
      </ErrorBoundary>
    )
  }
)

Navigation.displayName = 'Navigation'

export { Navigation }