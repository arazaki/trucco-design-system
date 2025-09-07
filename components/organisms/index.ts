// Atomic Design: Organisms
// Complex interface sections combining molecules and atoms

export { Header } from './header'
export type { HeaderProps } from './header'

export { Navigation } from './navigation'
export type { NavigationProps, NavigationItem } from './navigation'

export { 
  ErrorBoundary,
  TruccoErrorBoundary,
  DefaultErrorFallback,
  SimpleErrorFallback,
  withErrorBoundary,
  withTruccoErrorBoundary
} from './error-boundary'
export type { 
  ErrorFallbackProps,
  ErrorBoundaryProps,
  TruccoErrorBoundaryProps
} from './error-boundary'