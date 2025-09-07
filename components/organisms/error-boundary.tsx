'use client'
import * as React from 'react'
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'
import { AlertTriangle, RefreshCw } from 'lucide-react'
import { Alert, AlertTitle, AlertDescription } from '../atoms/alert'
import { Button } from '../atoms/button'

interface ErrorFallbackProps {
  error: Error
  resetErrorBoundary: () => void
  title?: string
  description?: string
}

function ErrorFallback({
  error,
  resetErrorBoundary,
  title = 'Something went wrong',
  description = 'An unexpected error occurred. Please try again or contact support if the problem persists.',
}: ErrorFallbackProps) {
  return (
    <div className="flex min-h-32 items-center justify-center p-6">
      <Alert variant="error" className="max-w-2xl">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </div>
          <div className="flex-1">
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription className="mt-2 space-y-3">
              <p>{description}</p>
              
              {process.env.NODE_ENV === 'development' && (
                <details className="text-left">
                  <summary className="cursor-pointer text-xs text-muted-foreground hover:text-foreground">
                    Error details (development only)
                  </summary>
                  <pre className="mt-2 whitespace-pre-wrap break-words rounded bg-muted p-2 text-xs text-muted-foreground overflow-auto max-h-32">
                    {error.message}
                    {error.stack && (
                      <>
                        {'\n\nStack trace:\n'}
                        {error.stack}
                      </>
                    )}
                  </pre>
                </details>
              )}
              
              <div className="flex gap-2">
                <Button
                  onClick={resetErrorBoundary}
                  size="sm"
                  variant="outline"
                  className="border-red-300 text-red-700 hover:bg-red-100 hover:text-red-800"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Try again
                </Button>
                <Button
                  onClick={() => window.location.reload()}
                  size="sm"
                  variant="outline"
                  className="border-red-300 text-red-700 hover:bg-red-100 hover:text-red-800"
                >
                  Refresh page
                </Button>
              </div>
            </AlertDescription>
          </div>
        </div>
      </Alert>
    </div>
  )
}

interface ErrorBoundaryProps {
  /** Custom fallback component to render when an error occurs */
  fallback?: React.ComponentType<ErrorFallbackProps>
  /** Custom title for the default error fallback */
  title?: string
  /** Custom description for the default error fallback */
  description?: string
  /** Callback called when an error occurs */
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void
  /** Children to render inside the error boundary */
  children: React.ReactNode
}

/**
 * A reusable error boundary component that wraps react-error-boundary
 * with consistent styling and behavior for the Trucco design system.
 *
 * Usage:
 * ```tsx
 * <ErrorBoundary>
 *   <YourComponent />
 * </ErrorBoundary>
 * ```
 *
 * With custom error message:
 * ```tsx
 * <ErrorBoundary
 *   title="Data loading failed"
 *   description="Unable to load the requested data. Please check your connection and try again."
 * >
 *   <YourComponent />
 * </ErrorBoundary>
 * ```
 */
export function ErrorBoundary({
  fallback: CustomFallback,
  title,
  description,
  onError,
  children,
}: ErrorBoundaryProps) {
  const handleError = React.useCallback(
    (error: Error, errorInfo: React.ErrorInfo) => {
      // Log error for development
      console.error('ErrorBoundary caught an error:', error, errorInfo)

      // Call custom error handler if provided
      onError?.(error, errorInfo)
    },
    [onError],
  )

  const FallbackComponent = React.useCallback(
    (props: ErrorFallbackProps) => {
      if (CustomFallback) {
        return <CustomFallback {...props} />
      }
      return (
        <ErrorFallback {...props} title={title} description={description} />
      )
    },
    [CustomFallback, title, description],
  )

  return (
    <ReactErrorBoundary
      FallbackComponent={FallbackComponent}
      onError={handleError}
    >
      {children}
    </ReactErrorBoundary>
  )
}

ErrorBoundary.displayName = 'ErrorBoundary'

// Simple error fallback for minimal cases
export const SimpleErrorFallback: React.FC<ErrorFallbackProps> = ({ 
  resetErrorBoundary,
  title = "Oops!",
  description = "Something went wrong."
}) => (
  <div className="p-4 text-center">
    <Alert variant="error" className="max-w-md mx-auto">
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription className="mt-2">
        <p className="mb-3">{description}</p>
        <Button
          onClick={resetErrorBoundary}
          size="sm"
          variant="outline"
        >
          Try again
        </Button>
      </AlertDescription>
    </Alert>
  </div>
)

// Re-export utilities from react-error-boundary for convenience
export { 
  withErrorBoundary
} from 'react-error-boundary'

// Utility function to create an error boundary wrapper
export const withTruccoErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<ErrorBoundaryProps, 'children'>
) => {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  )

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`
  
  return WrappedComponent
}

// For backward compatibility, keep the old names as aliases
export { ErrorBoundary as TruccoErrorBoundary }
export { ErrorFallback as DefaultErrorFallback }
export type { ErrorFallbackProps, ErrorBoundaryProps, ErrorBoundaryProps as TruccoErrorBoundaryProps }