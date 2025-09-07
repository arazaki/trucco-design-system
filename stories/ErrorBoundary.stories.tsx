import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { 
  ErrorBoundary, 
  SimpleErrorFallback,
  ErrorFallbackProps 
} from '@/components/organisms'
import { Button } from '@/components/atoms'
import { PageLayout } from '@/components/templates'

// Demo components that throw errors for testing
const BuggyComponent = ({ shouldCrash = false }: { shouldCrash?: boolean }) => {
  if (shouldCrash) {
    throw new Error('This is a demo error from BuggyComponent!')
  }
  return <div className="p-4 bg-green-50 border border-green-200 rounded">✅ Component rendered successfully!</div>
}

const BuggyCounter = () => {
  const [count, setCount] = useState(0)
  
  if (count >= 5) {
    throw new Error('Counter exploded! Count cannot exceed 4.')
  }
  
  return (
    <div className="p-4 space-y-4">
      <p>Current count: {count} (crashes at 5)</p>
      <Button onClick={() => setCount(count + 1)}>
        Increment {count < 4 ? '(Safe)' : '(Will Crash!)'}
      </Button>
    </div>
  )
}

const AsyncBuggyComponent = () => {
  const [shouldCrash, setShouldCrash] = useState(false)
  
  const handleAsyncError = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    setShouldCrash(true)
  }
  
  if (shouldCrash) {
    throw new Error('Async operation failed!')
  }
  
  return (
    <div className="p-4 space-y-4">
      <p>Click the button to simulate an async error:</p>
      <Button onClick={handleAsyncError} variant="destructive">
        Trigger Async Error
      </Button>
    </div>
  )
}

// Custom fallback component for demo
const CustomErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => (
  <div className="p-6 text-center bg-purple-50 border-2 border-purple-200 rounded-lg">
    <div className="text-purple-600 text-6xl mb-4">🔮</div>
    <h2 className="text-xl font-bold text-purple-800 mb-2">Magic Failed!</h2>
    <p className="text-purple-600 mb-4">Our magical component encountered a spell error.</p>
    <p className="text-sm text-purple-500 mb-4">Error: {error.message}</p>
    <Button onClick={resetErrorBoundary} className="bg-purple-600 hover:bg-purple-700">
      Cast Repair Spell
    </Button>
  </div>
)

const meta: Meta<typeof ErrorBoundary> = {
  title: 'Organisms/ErrorBoundary',
  component: ErrorBoundary,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Error boundary components that catch JavaScript errors and display fallback UI. Built on react-error-boundary with Trucco styling.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <h3 className="text-lg font-semibold">Default Error Boundary</h3>
      <ErrorBoundary>
        <BuggyComponent shouldCrash />
      </ErrorBoundary>
    </div>
  ),
}

export const WithWorkingComponent: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <h3 className="text-lg font-semibold">Error Boundary with Working Component</h3>
      <ErrorBoundary>
        <BuggyComponent shouldCrash={false} />
      </ErrorBoundary>
    </div>
  ),
}

export const InteractiveCounter: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <h3 className="text-lg font-semibold">Interactive Counter (Crashes at 5)</h3>
      <p className="text-sm text-muted-foreground">Try clicking the button to see the error boundary in action!</p>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
    </div>
  ),
}

export const AsyncError: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <h3 className="text-lg font-semibold">Async Error Example</h3>
      <p className="text-sm text-muted-foreground">Demonstrates error boundary catching async errors.</p>
      <ErrorBoundary>
        <AsyncBuggyComponent />
      </ErrorBoundary>
    </div>
  ),
}

export const CustomFallback: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <h3 className="text-lg font-semibold">Custom Error Fallback</h3>
      <ErrorBoundary fallback={CustomErrorFallback}>
        <BuggyComponent shouldCrash />
      </ErrorBoundary>
    </div>
  ),
}

export const SimpleFallback: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <h3 className="text-lg font-semibold">Simple Error Fallback</h3>
      <ErrorBoundary fallback={SimpleErrorFallback}>
        <BuggyComponent shouldCrash />
      </ErrorBoundary>
    </div>
  ),
}

export const WithCustomProps: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <h3 className="text-lg font-semibold">Custom Title and Description</h3>
      <ErrorBoundary
        title="Oops! Something broke"
        description="Don't worry, we're on it! This is just a demo error."
      >
        <BuggyComponent shouldCrash />
      </ErrorBoundary>
    </div>
  ),
}

export const ProductionMode: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <h3 className="text-lg font-semibold">Production Mode (No Error Details)</h3>
      <ErrorBoundary>
        <BuggyComponent shouldCrash />
      </ErrorBoundary>
    </div>
  ),
}

export const PageLayoutIntegration: Story = {
  render: () => {
    const [shouldCrash, setShouldCrash] = useState(false)
    
    const mainContent = (
      <div className="p-8 space-y-4">
        <h1 className="text-2xl font-bold">Page with Error Boundary</h1>
        <p>This page demonstrates ErrorBoundary integration with PageLayout.</p>
        <Button 
          onClick={() => setShouldCrash(!shouldCrash)} 
          variant={shouldCrash ? "default" : "destructive"}
        >
          {shouldCrash ? 'Fix Component' : 'Break Component'}
        </Button>
        <BuggyComponent shouldCrash={shouldCrash} />
      </div>
    )
    
    return (
      <div className="w-full h-96">
        <PageLayout 
          main={mainContent}
          errorBoundary={{
            enabled: true,
            title: "Page Error",
            description: "Something went wrong in the main content area.",
          }}
        />
      </div>
    )
  },
}

export const DisabledErrorBoundary: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <h3 className="text-lg font-semibold">Disabled Error Boundary</h3>
      <p className="text-sm text-red-600">⚠️ This will crash the story! The error boundary is disabled.</p>
      <div className="p-4 border-2 border-red-200 bg-red-50 rounded">
        <p className="text-red-700 mb-2">Click "Show code" to see how to disable the error boundary:</p>
        <code className="text-xs">errorBoundary: {JSON.stringify({ enabled: false })}</code>
      </div>
      <PageLayout 
        main={<BuggyComponent shouldCrash />}
        errorBoundary={{ enabled: false }}
      />
    </div>
  ),
}