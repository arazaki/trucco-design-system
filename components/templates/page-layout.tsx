import * as React from 'react'
import { cn } from '@/lib/utils'
import { ErrorBoundary } from '../organisms/error-boundary'

export interface PageLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode
  sidebar?: React.ReactNode
  main: React.ReactNode
  footer?: React.ReactNode
  sidebarWidth?: 'sm' | 'md' | 'lg' | 'xl'
  sidebarPosition?: 'left' | 'right'
  stickyHeader?: boolean
  stickyFooter?: boolean
  fullHeight?: boolean
  errorBoundary?: {
    enabled?: boolean
    title?: string
    description?: string
    onError?: (error: Error, errorInfo: React.ErrorInfo) => void
  }
}

const PageLayout = React.forwardRef<HTMLDivElement, PageLayoutProps>(
  ({
    className,
    header,
    sidebar,
    main,
    footer,
    sidebarWidth = 'md',
    sidebarPosition = 'left',
    stickyHeader = true,
    stickyFooter = false,
    fullHeight = true,
    errorBoundary = { enabled: true },
    ...props
  }, ref) => {
    const sidebarWidths = {
      sm: 'w-48',
      md: 'w-64',
      lg: 'w-80',
      xl: 'w-96',
    }

    const hasSidebar = Boolean(sidebar)
    const layoutClass = hasSidebar
      ? `grid-cols-[${sidebarPosition === 'left' ? `${sidebarWidths[sidebarWidth]}_1fr` : `1fr_${sidebarWidths[sidebarWidth]}`}]`
      : 'grid-cols-1'

    return (
      <div
        ref={ref}
        className={cn(
          'w-full',
          fullHeight && 'min-h-screen',
          'grid grid-rows-[auto_1fr_auto]',
          className
        )}
        {...props}
      >
        {/* Header */}
        {header && (
          <header className={cn(stickyHeader && 'sticky top-0 z-40')}>
            {header}
          </header>
        )}

        {/* Main Content Area */}
        <div className={cn('grid', hasSidebar && layoutClass)}>
          {/* Sidebar */}
          {hasSidebar && sidebarPosition === 'left' && (
            <aside className="bg-background-secondary border-r border-border-primary overflow-y-auto">
              {sidebar}
            </aside>
          )}

          {/* Main Content */}
          <main className="overflow-auto">
            {errorBoundary?.enabled ? (
              <ErrorBoundary
                title={errorBoundary.title}
                description={errorBoundary.description}
                onError={errorBoundary.onError}
              >
                {main}
              </ErrorBoundary>
            ) : (
              main
            )}
          </main>

          {/* Right Sidebar */}
          {hasSidebar && sidebarPosition === 'right' && (
            <aside className="bg-background-secondary border-l border-border-primary overflow-y-auto">
              {sidebar}
            </aside>
          )}
        </div>

        {/* Footer */}
        {footer && (
          <footer className={cn(stickyFooter && 'sticky bottom-0 z-40')}>
            {footer}
          </footer>
        )}
      </div>
    )
  }
)

PageLayout.displayName = 'PageLayout'

export { PageLayout }