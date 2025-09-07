# ErrorBoundary Component Guide

## Overview

The Trucco ErrorBoundary system provides robust error handling for React components, preventing JavaScript errors from crashing the entire application. Built on the battle-tested `react-error-boundary` library with Trucco's design system integration.

## Core Architecture

### Built on react-error-boundary
The ErrorBoundary leverages the industry-standard `react-error-boundary` library, providing:
- ✅ **Proven reliability** - Used by thousands of projects
- ✅ **Comprehensive API** - Advanced error handling features
- ✅ **TypeScript support** - Full type safety
- ✅ **React 18+ compatibility** - Modern React patterns

### Trucco Design System Integration
Trucco wraps react-error-boundary with:
- **Consistent Styling** - Uses existing Alert component for error UI
- **Icon Integration** - AlertTriangle and RefreshCw from Lucide
- **Theme Compatibility** - Matches current design system theme
- **Development Experience** - Automatic error details in development mode

## Available Components

### ErrorBoundary (Primary)
The main error boundary component with a clean, simple API:

```typescript
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
```

### Fallback Components

#### ErrorFallback (Default)
Professional error UI with:
- AlertTriangle icon
- Error title and description
- "Try again" and "Refresh page" buttons
- Collapsible error details (development only)

#### SimpleErrorFallback (Minimal)
Compact error UI for constrained spaces:
- Basic error message
- Single "Try again" button
- No detailed error information

### Utility Functions

#### withTruccoErrorBoundary (HOC)
Higher-order component for wrapping existing components:

```typescript
const withTruccoErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<ErrorBoundaryProps, 'children'>
) => WrappedComponent
```

## Usage Patterns

### 1. Basic Error Boundary

```tsx
import { ErrorBoundary } from '@/components/organisms'

function App() {
  return (
    <ErrorBoundary>
      <YourComponent />
    </ErrorBoundary>
  )
}
```

### 2. Custom Error Messages

```tsx
<ErrorBoundary
  title="Data Loading Failed"
  description="Unable to load user data. Please check your connection and try again."
>
  <UserProfile />
</ErrorBoundary>
```

### 3. Error Logging Integration

```tsx
<ErrorBoundary
  onError={(error, errorInfo) => {
    // Send to error tracking service
    console.error('Component error:', error, errorInfo)
    analytics.track('component_error', {
      error: error.message,
      component: errorInfo.componentStack
    })
  }}
>
  <CriticalComponent />
</ErrorBoundary>
```

### 4. Custom Fallback Component

```tsx
const CustomErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="p-6 text-center bg-red-50 border border-red-200 rounded">
    <h2 className="text-red-800">Oops! Something broke</h2>
    <p className="text-red-600">{error.message}</p>
    <button onClick={resetErrorBoundary}>Try Again</button>
  </div>
)

<ErrorBoundary fallback={CustomErrorFallback}>
  <YourComponent />
</ErrorBoundary>
```

### 5. HOC Pattern

```tsx
import { withTruccoErrorBoundary } from '@/components/organisms'

// Wrap component with error boundary
const SafeDataTable = withTruccoErrorBoundary(DataTable, {
  title: "Table Error",
  description: "Failed to render table data"
})

// Use the wrapped component
<SafeDataTable data={tableData} />
```

## When to Use ErrorBoundary

### ✅ **DO Use For:**

#### Organism-Level Components
Complex components that compose multiple parts:
```tsx
<ErrorBoundary title="Navigation Error">
  <Navigation items={navigationItems} />
</ErrorBoundary>
```

#### Template/Layout Components  
Page structures that render user content:
```tsx
<PageLayout 
  main={<UserContent />}
  errorBoundary={{
    enabled: true,
    title: "Page Error",
    description: "Something went wrong in the main content area"
  }}
/>
```

#### Data-Heavy Components
Components with external data dependencies:
```tsx
<ErrorBoundary title="Data Loading Error">
  <DataTable data={externalData} />
</ErrorBoundary>

<ErrorBoundary title="Chart Error">
  <ComplexChart chartData={apiData} />
</ErrorBoundary>
```

#### Feature Boundaries
Distinct application features:
```tsx
<ErrorBoundary title="Search Feature Error">
  <SearchInterface />
  <SearchResults />
  <SearchFilters />
</ErrorBoundary>
```

#### Third-Party Integrations
External components or libraries:
```tsx
<ErrorBoundary title="Widget Error">
  <ThirdPartyWidget config={widgetConfig} />
</ErrorBoundary>
```

### ❌ **DON'T Use For:**

#### Atom-Level Components
Simple, predictable components:
```tsx
// ❌ Unnecessary overhead
<ErrorBoundary>
  <Button>Click me</Button>
</ErrorBoundary>

// ✅ Button is simple and rarely fails
<Button>Click me</Button>
```

#### Event Handlers
ErrorBoundary doesn't catch:
```tsx
// ❌ Won't catch this error
function handleClick() {
  throw new Error("Click handler error")
}

// ✅ Use try-catch instead
function handleClick() {
  try {
    riskyOperation()
  } catch (error) {
    setError(error.message)
  }
}
```

#### Async Operations
Use try-catch for async errors:
```tsx
// ❌ Won't catch async errors
<ErrorBoundary>
  <ComponentThatMakesAsyncCalls />
</ErrorBoundary>

// ✅ Handle async errors properly
async function fetchData() {
  try {
    const data = await api.getData()
    setData(data)
  } catch (error) {
    setError(error.message)
  }
}
```

## Integration with PageLayout

The PageLayout template includes built-in ErrorBoundary support:

```tsx
<PageLayout
  main={<YourMainContent />}
  errorBoundary={{
    enabled: true,                    // Enable/disable error boundary
    title: "Custom Error Title",     // Override default title
    description: "Custom message",   // Override default description
    onError: (error, errorInfo) => { // Custom error handler
      logErrorToService(error, errorInfo)
    }
  }}
/>
```

### Default Behavior
- **Enabled by default** - `errorBoundary.enabled` defaults to `true`
- **Wraps main content** - Only the main content area is protected
- **Preserves layout** - Header, sidebar, and footer remain functional
- **Development details** - Error details shown automatically in development

## Best Practices

### 1. Strategic Placement
Place ErrorBoundary at appropriate granular levels:

```tsx
// ✅ Good - Feature level boundaries
<div className="dashboard">
  <ErrorBoundary title="Stats Error">
    <StatsWidget />
  </ErrorBoundary>
  
  <ErrorBoundary title="Chart Error">
    <ChartWidget />
  </ErrorBoundary>
</div>

// ❌ Too granular - Wrapping every small component
<div>
  <ErrorBoundary><SmallIcon /></ErrorBoundary>
  <ErrorBoundary><SimpleText /></ErrorBoundary>
</div>

// ❌ Too broad - Single boundary for entire app
<ErrorBoundary>
  <EntireApplication />
</ErrorBoundary>
```

### 2. Meaningful Error Messages
Provide contextual, user-friendly error messages:

```tsx
// ✅ Specific and helpful
<ErrorBoundary
  title="Unable to load your projects"
  description="There was a problem connecting to our servers. Please check your internet connection and try again."
>
  <ProjectList />
</ErrorBoundary>

// ❌ Generic and unhelpful
<ErrorBoundary title="Error" description="Something went wrong">
  <ProjectList />
</ErrorBoundary>
```

### 3. Error Logging
Always log errors for debugging and monitoring:

```tsx
<ErrorBoundary
  onError={(error, errorInfo) => {
    // Development logging
    if (process.env.NODE_ENV === 'development') {
      console.error('Component Error:', error, errorInfo)
    }
    
    // Production error tracking
    errorTrackingService.captureException(error, {
      context: 'component_boundary',
      componentStack: errorInfo.componentStack
    })
  }}
>
  <CriticalComponent />
</ErrorBoundary>
```

### 4. Graceful Degradation
Design fallback UI that doesn't break the user experience:

```tsx
const GracefulFallback = ({ resetErrorBoundary }) => (
  <div className="p-4 border border-amber-200 bg-amber-50 rounded">
    <div className="flex items-center gap-2 text-amber-800">
      <AlertTriangle className="h-5 w-5" />
      <h3>Feature temporarily unavailable</h3>
    </div>
    <p className="text-amber-700 mt-1">
      We're working on fixing this. You can continue using other features.
    </p>
    <Button
      onClick={resetErrorBoundary}
      variant="outline"
      size="sm"
      className="mt-3"
    >
      Try again
    </Button>
  </div>
)

<ErrorBoundary fallback={GracefulFallback}>
  <OptionalFeature />
</ErrorBoundary>
```

## Component Creation Guidelines

When creating or updating components, consider ErrorBoundary integration:

### For Organism Components
Add ErrorBoundary props to your organism interface:

```typescript
interface ComplexComponentProps {
  // ... other props
  errorBoundary?: {
    enabled?: boolean
    title?: string
    description?: string
    onError?: (error: Error, errorInfo: React.ErrorInfo) => void
  }
}

const ComplexComponent = ({ errorBoundary, ...props }) => {
  const content = <ActualComponent {...props} />
  
  if (errorBoundary?.enabled !== false) {
    return (
      <ErrorBoundary
        title={errorBoundary?.title}
        description={errorBoundary?.description}
        onError={errorBoundary?.onError}
      >
        {content}
      </ErrorBoundary>
    )
  }
  
  return content
}
```

### For Template Components
Follow the PageLayout pattern for layout components:

```typescript
interface TemplateProps {
  content: React.ReactNode
  errorBoundary?: {
    enabled?: boolean
    title?: string
    description?: string
    onError?: (error: Error, errorInfo: React.ErrorInfo) => void
  }
}
```

## Testing ErrorBoundary

### In Storybook
ErrorBoundary includes comprehensive Storybook stories for testing:

```bash
npm run storybook
# Navigate to Organisms/ErrorBoundary
```

Available test scenarios:
- **Interactive Counter** - Click to trigger error at count 5
- **Async Error** - Simulate async operation failures
- **Custom Fallbacks** - Different error UI styles
- **PageLayout Integration** - Error boundary in page context

### In Development
Create components that intentionally throw errors for testing:

```tsx
const TestErrorComponent = ({ shouldCrash = false }) => {
  if (shouldCrash) {
    throw new Error('Test error for ErrorBoundary')
  }
  return <div>Component working normally</div>
}

// Test in your app
<ErrorBoundary>
  <TestErrorComponent shouldCrash={testMode} />
</ErrorBoundary>
```

## Error Recovery Patterns

### Automatic Recovery
Some errors might be transient and can be recovered automatically:

```tsx
const [retryCount, setRetryCount] = useState(0)

<ErrorBoundary
  key={retryCount} // Reset boundary when key changes
  onError={(error) => {
    // Auto-retry for network errors
    if (error.message.includes('Network Error') && retryCount < 3) {
      setTimeout(() => setRetryCount(c => c + 1), 2000)
    }
  }}
>
  <NetworkDependentComponent />
</ErrorBoundary>
```

### Partial Recovery
Allow parts of the UI to recover while keeping others intact:

```tsx
<div className="dashboard">
  <ErrorBoundary title="Stats Error">
    <StatsPanel />
  </ErrorBoundary>
  
  {/* Other panels continue working even if stats fail */}
  <ErrorBoundary title="Charts Error">
    <ChartsPanel />
  </ErrorBoundary>
  
  <ErrorBoundary title="Activity Error">
    <ActivityPanel />
  </ErrorBoundary>
</div>
```

## Performance Considerations

### Boundary Granularity
Balance error isolation with performance:

```tsx
// ✅ Optimal - One boundary per logical feature
<ErrorBoundary title="User Profile Error">
  <ProfileHeader />
  <ProfileStats />
  <ProfileActivity />
</ErrorBoundary>

// ❌ Over-bounded - Too many boundaries
<div>
  <ErrorBoundary><ProfileHeader /></ErrorBoundary>
  <ErrorBoundary><ProfileStats /></ErrorBoundary>
  <ErrorBoundary><ProfileActivity /></ErrorBoundary>
</div>
```

### Error Logging Throttling
Prevent error spam in production:

```tsx
const errorLogger = {
  lastError: null,
  lastErrorTime: 0,
  
  log(error, errorInfo) {
    const now = Date.now()
    const isDuplicate = this.lastError === error.message
    const isRecent = now - this.lastErrorTime < 5000 // 5 seconds
    
    if (!isDuplicate || !isRecent) {
      errorTrackingService.log(error, errorInfo)
      this.lastError = error.message
      this.lastErrorTime = now
    }
  }
}

<ErrorBoundary onError={errorLogger.log}>
  <YourComponent />
</ErrorBoundary>
```

## Migration Guide

### From Class-based Error Boundaries
If migrating from class-based error boundaries:

```tsx
// ❌ Old class-based approach
class OldErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}

// ✅ New Trucco ErrorBoundary
<ErrorBoundary
  title="Something went wrong"
  onError={(error, errorInfo) => console.log(error, errorInfo)}
>
  {children}
</ErrorBoundary>
```

### From react-error-boundary Direct Usage
If already using react-error-boundary directly:

```tsx
// ❌ Direct react-error-boundary usage
import { ErrorBoundary } from 'react-error-boundary'

<ErrorBoundary
  FallbackComponent={({ error, resetErrorBoundary }) => (
    <div>Error: {error.message}</div>
  )}
>
  {children}
</ErrorBoundary>

// ✅ Trucco ErrorBoundary with design system integration
import { ErrorBoundary } from '@/components/organisms'

<ErrorBoundary title="Custom Title">
  {children}
</ErrorBoundary>
```

## Troubleshooting

### Common Issues

#### Error Boundary Not Catching Errors
ErrorBoundary only catches errors in:
- Component render methods
- Component lifecycle methods  
- Component constructors

ErrorBoundary does NOT catch:
- Event handlers
- Async code (setTimeout, promises)
- Server-side rendering
- Errors in the error boundary itself

#### Solution:
```tsx
// ❌ Won't be caught
const handleClick = () => {
  throw new Error('Click error')
}

// ✅ Will be caught
const handleClick = () => {
  try {
    riskyOperation()
  } catch (error) {
    setError(error)
  }
}

// Component render error - will be caught by ErrorBoundary
const Component = () => {
  if (someCondition) {
    throw new Error('Render error')
  }
  return <div>Content</div>
}
```

#### Development vs Production Behavior
Error details are automatically hidden in production:

```tsx
// Development: Shows detailed error information
// Production: Hides error details for security

// Override for debugging in production (not recommended)
<ErrorBoundary 
  fallback={({ error, resetErrorBoundary }) => (
    <div>
      <h2>Error occurred</h2>
      {process.env.NODE_ENV === 'development' && (
        <pre>{error.stack}</pre>
      )}
      <button onClick={resetErrorBoundary}>Retry</button>
    </div>
  )}
>
  <YourComponent />
</ErrorBoundary>
```

This comprehensive guide should help you effectively implement and use ErrorBoundary throughout the Trucco design system. Remember to always balance error isolation with user experience and performance considerations.