import * as React from 'react'
// import { Button } from '../atoms/button' // Not used currently
import { SearchField } from '../molecules/search-field'
import { Text } from '../atoms/text'
import { cn } from '@/lib/utils'
import { ErrorBoundary } from './error-boundary'

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode
  title?: string
  navigation?: React.ReactNode
  actions?: React.ReactNode
  searchProps?: React.ComponentProps<typeof SearchField>
  showSearch?: boolean
  sticky?: boolean
  border?: boolean
  errorBoundary?: {
    enabled?: boolean
    title?: string
    description?: string
    onError?: (error: Error, errorInfo: React.ErrorInfo) => void
  }
}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({
    className,
    logo,
    title,
    navigation,
    actions,
    searchProps,
    showSearch = false,
    sticky = false,
    border = true,
    errorBoundary = { enabled: true },
    children,
    ...props
  }, ref) => {
    const headerContent = (
      <header
        ref={ref}
        className={cn(
          'w-full bg-background-primary',
          sticky && 'sticky top-0 z-50',
          border && 'border-b border-border-primary',
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Left section - Logo/Title */}
            <div className="flex items-center gap-4">
              {logo}
              {title && (
                <Text variant="h4" className="font-semibold">
                  {title}
                </Text>
              )}
            </div>

            {/* Center section - Navigation */}
            {navigation && (
              <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
                {navigation}
              </nav>
            )}

            {/* Right section - Search & Actions */}
            <div className="flex items-center gap-4">
              {showSearch && (
                <div className="hidden sm:block">
                  <SearchField
                    placeholder="Search..."
                    className="w-48 lg:w-64 h-8 text-sm"
                    {...searchProps}
                  />
                </div>
              )}
              
              {actions && (
                <div className="flex items-center gap-2">
                  {actions}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Navigation */}
          {navigation && (
            <nav className="md:hidden mt-4 pt-4 border-t border-border-muted">
              {navigation}
            </nav>
          )}

          {/* Mobile Search */}
          {showSearch && (
            <div className="sm:hidden mt-4">
              <SearchField
                placeholder="Search..."
                className="h-8 text-sm"
                {...searchProps}
              />
            </div>
          )}

          {/* Custom content */}
          {children}
        </div>
      </header>
    )

    if (errorBoundary?.enabled === false) {
      return headerContent
    }

    return (
      <ErrorBoundary
        title={errorBoundary?.title || "Header Error"}
        description={errorBoundary?.description || "Unable to load header content. Some navigation or search features may not be available."}
        onError={errorBoundary?.onError}
      >
        {headerContent}
      </ErrorBoundary>
    )
  }
)

Header.displayName = 'Header'

export { Header }