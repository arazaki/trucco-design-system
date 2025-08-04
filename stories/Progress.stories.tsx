import type { Meta, StoryObj } from '@storybook/react'
import { Progress } from '@/components/atoms'

const meta: Meta<typeof Progress> = {
  title: 'Atoms/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    theme: {
      control: { type: 'select' },
      options: ['semantic', 'red', 'blue', 'purple', 'green'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 33,
  },
  render: (args) => (
    <div className="w-80">
      <Progress {...args} />
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span>Default</span>
          <span>25%</span>
        </div>
        <Progress value={25} variant="default" />
      </div>
      
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span>Primary</span>
          <span>40%</span>
        </div>
        <Progress value={40} variant="primary" />
      </div>
      
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span>Success</span>
          <span>75%</span>
        </div>
        <Progress value={75} variant="success" />
      </div>
      
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span>Warning</span>
          <span>60%</span>
        </div>
        <Progress value={60} variant="warning" />
      </div>
      
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span>Error</span>
          <span>30%</span>
        </div>
        <Progress value={30} variant="error" />
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div>
        <div className="text-sm mb-2">Small (50%)</div>
        <Progress value={50} size="sm" variant="primary" />
      </div>
      
      <div>
        <div className="text-sm mb-2">Medium (65%)</div>
        <Progress value={65} size="md" variant="primary" />
      </div>
      
      <div>
        <div className="text-sm mb-2">Large (80%)</div>
        <Progress value={80} size="lg" variant="primary" />
      </div>
      
      <div>
        <div className="text-sm mb-2">Extra Large (90%)</div>
        <Progress value={90} size="xl" variant="primary" />
      </div>
    </div>
  ),
}

export const CustomThemes: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div>
        <div className="text-sm mb-2">Red Theme (45%)</div>
        <Progress value={45} theme="red" variant="primary" />
      </div>
      
      <div>
        <div className="text-sm mb-2">Blue Theme (60%)</div>
        <Progress value={60} theme="blue" variant="primary" />
      </div>
      
      <div>
        <div className="text-sm mb-2">Purple Theme (75%)</div>
        <Progress value={75} theme="purple" variant="primary" />
      </div>
      
      <div>
        <div className="text-sm mb-2">Green Theme (85%)</div>
        <Progress value={85} theme="green" variant="primary" />
      </div>
    </div>
  ),
}

export const AnimatedProgress: Story = {
  render: () => {
    const [progress, setProgress] = React.useState(0)
    
    React.useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500)
      return () => clearTimeout(timer)
    }, [])
    
    return (
      <div className="w-80">
        <div className="flex justify-between text-sm mb-2">
          <span>Loading...</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} variant="primary" />
      </div>
    )
  },
}

export const StepProgress: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = React.useState(2)
    const totalSteps = 5
    const progress = (currentStep / totalSteps) * 100
    
    return (
      <div className="w-80 space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Step {currentStep} of {totalSteps}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} variant="primary" />
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            className="px-3 py-1 text-sm border rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button 
            onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
            disabled={currentStep === totalSteps}
            className="px-3 py-1 text-sm border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    )
  },
}

export const MultipleProgress: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div>
        <div className="text-sm font-medium mb-3">Project Status</div>
        
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Design</span>
              <span>100%</span>
            </div>
            <Progress value={100} variant="success" size="sm" />
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Development</span>
              <span>70%</span>
            </div>
            <Progress value={70} variant="primary" size="sm" />
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Testing</span>
              <span>30%</span>
            </div>
            <Progress value={30} variant="warning" size="sm" />
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Deployment</span>
              <span>0%</span>
            </div>
            <Progress value={0} variant="default" size="sm" />
          </div>
        </div>
      </div>
    </div>
  ),
}

export const IndeterminateProgress: Story = {
  render: () => (
    <div className="w-80 space-y-6">
      <div>
        <div className="text-sm mb-2">Processing...</div>
        <Progress value={undefined} variant="primary" />
        <div className="text-xs text-muted-foreground mt-1">
          Indeterminate progress (no value provided)
        </div>
      </div>
      
      <div>
        <div className="text-sm mb-2">Loading data...</div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: '60%' }} />
        </div>
        <div className="text-xs text-muted-foreground mt-1">
          Custom animated loader
        </div>
      </div>
    </div>
  ),
}