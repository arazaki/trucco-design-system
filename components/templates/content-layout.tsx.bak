import * as React from 'react'
import { Text } from '../atoms/text'
import { cn } from '../../lib/utils/cn'

export interface ContentLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: string
  breadcrumb?: React.ReactNode
  actions?: React.ReactNode
  children: React.ReactNode
  maxWidth?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  spacing?: 'sm' | 'md' | 'lg' | 'xl'
}

const ContentLayout = React.forwardRef<HTMLDivElement, ContentLayoutProps>(
  ({
    className,
    title,
    subtitle,
    breadcrumb,
    actions,
    children,
    maxWidth = 'full',
    padding = 'lg',
    spacing = 'lg',
    ...props
  }, ref) => {
    const maxWidthClasses = {
      none: '',
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-4xl',
      xl: 'max-w-6xl',
      '2xl': 'max-w-7xl',
      full: 'max-w-full',
    }

    const paddingClasses = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-12',
    }

    const spacingClasses = {
      sm: 'space-y-4',
      md: 'space-y-6',
      lg: 'space-y-8',
      xl: 'space-y-12',
    }

    const hasHeader = title || subtitle || breadcrumb || actions

    return (
      <div
        ref={ref}
        className={cn(
          'w-full mx-auto',
          maxWidthClasses[maxWidth],
          paddingClasses[padding],
          className
        )}
        {...props}
      >
        <div className={cn(spacingClasses[spacing])}>
          {/* Header Section */}
          {hasHeader && (
            <div className="space-y-4">
              {/* Breadcrumb */}
              {breadcrumb && (
                <div className="text-sm">
                  {breadcrumb}
                </div>
              )}

              {/* Title Area */}
              {(title || subtitle || actions) && (
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="space-y-2">
                    {title && (
                      <Text variant="h1" className="text-2xl sm:text-3xl font-bold">
                        {title}
                      </Text>
                    )}
                    {subtitle && (
                      <Text variant="bodySmall" className="text-foreground-secondary">
                        {subtitle}
                      </Text>
                    )}
                  </div>

                  {actions && (
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {actions}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Main Content */}
          <div>
            {children}
          </div>
        </div>
      </div>
    )
  }
)

ContentLayout.displayName = 'ContentLayout'

export { ContentLayout }