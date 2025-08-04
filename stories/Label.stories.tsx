import type { Meta, StoryObj } from '@storybook/react'
import { Label, EnhancedLabel, Input, Checkbox } from '@/components/atoms'

const meta: Meta<typeof Label> = {
  title: 'Atoms/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    required: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Default Label',
  },
  render: (args) => (
    <div className="space-y-2">
      <Label {...args} htmlFor="default-input" />
      <Input id="default-input" placeholder="Enter value..." />
    </div>
  ),
}

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Label',
  },
  render: (args) => (
    <div className="space-y-2">
      <Label {...args} htmlFor="primary-input" />
      <Input id="primary-input" placeholder="Enter value..." />
    </div>
  ),
}

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success Label',
  },
  render: (args) => (
    <div className="space-y-2">
      <Label {...args} htmlFor="success-input" />
      <Input id="success-input" placeholder="Valid input..." />
    </div>
  ),
}

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Error Label',
  },
  render: (args) => (
    <div className="space-y-2">
      <Label {...args} htmlFor="error-input" />
      <Input id="error-input" placeholder="Invalid input..." className="border-destructive" />
    </div>
  ),
}

export const Required: Story = {
  args: {
    required: true,
    children: 'Required Field',
  },
  render: (args) => (
    <div className="space-y-2">
      <Label {...args} htmlFor="required-input" />
      <Input id="required-input" placeholder="This field is required..." />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label size="sm" htmlFor="small-input">Small Label</Label>
        <Input id="small-input" placeholder="Small input..." />
      </div>
      <div className="space-y-2">
        <Label size="md" htmlFor="medium-input">Medium Label</Label>
        <Input id="medium-input" placeholder="Medium input..." />
      </div>
      <div className="space-y-2">
        <Label size="lg" htmlFor="large-input">Large Label</Label>
        <Input id="large-input" placeholder="Large input..." />
      </div>
    </div>
  ),
}

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms" className="cursor-pointer">
        Accept terms and conditions
      </Label>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label variant="default" htmlFor="default">Default</Label>
        <Input id="default" placeholder="Default styling..." />
      </div>
      <div className="space-y-2">
        <Label variant="primary" htmlFor="primary">Primary</Label>
        <Input id="primary" placeholder="Primary styling..." />
      </div>
      <div className="space-y-2">
        <Label variant="secondary" htmlFor="secondary">Secondary</Label>
        <Input id="secondary" placeholder="Secondary styling..." />
      </div>
      <div className="space-y-2">
        <Label variant="success" htmlFor="success">Success</Label>
        <Input id="success" placeholder="Success styling..." />
      </div>
      <div className="space-y-2">
        <Label variant="warning" htmlFor="warning">Warning</Label>
        <Input id="warning" placeholder="Warning styling..." />
      </div>
      <div className="space-y-2">
        <Label variant="error" htmlFor="error">Error</Label>
        <Input id="error" placeholder="Error styling..." />
      </div>
    </div>
  ),
}

// Enhanced Label Stories
export const Enhanced: Story = {
  render: () => (
    <div className="space-y-2">
      <EnhancedLabel
        text="Enhanced Label"
        description="This label includes additional description text to help users understand the field."
        htmlFor="enhanced-input"
      />
      <Input id="enhanced-input" placeholder="Enter value..." />
    </div>
  ),
}

export const EnhancedWithError: Story = {
  render: () => (
    <div className="space-y-2">
      <EnhancedLabel
        text="Email Address"
        description="We'll never share your email with anyone else."
        error="Please enter a valid email address"
        required
        htmlFor="email-input"
      />
      <Input id="email-input" placeholder="Enter your email..." className="border-destructive" />
    </div>
  ),
}

export const EnhancedRequired: Story = {
  render: () => (
    <div className="space-y-2">
      <EnhancedLabel
        text="Full Name"
        description="Enter your first and last name"
        required
        variant="primary"
        htmlFor="name-input"
      />
      <Input id="name-input" placeholder="John Doe" />
    </div>
  ),
}

export const EnhancedVariants: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <div className="space-y-2">
        <EnhancedLabel
          text="Username"
          description="Choose a unique username"
          variant="default"
          htmlFor="username1"
        />
        <Input id="username1" placeholder="username" />
      </div>
      
      <div className="space-y-2">
        <EnhancedLabel
          text="Password"
          description="Must be at least 8 characters"
          variant="primary"
          required
          htmlFor="password1"
        />
        <Input id="password1" type="password" placeholder="••••••••" />
      </div>
      
      <div className="space-y-2">
        <EnhancedLabel
          text="Confirmation"
          description="Passwords match!"
          variant="success"
          htmlFor="confirm1"
        />
        <Input id="confirm1" type="password" placeholder="••••••••" />
      </div>
      
      <div className="space-y-2">
        <EnhancedLabel
          text="API Key"
          description="This field has a warning"
          variant="warning"
          htmlFor="api1"
        />
        <Input id="api1" placeholder="sk-..." />
      </div>
      
      <div className="space-y-2">
        <EnhancedLabel
          text="Invalid Field"
          description="This field contains an error"
          error="Please correct this field"
          variant="error"
          htmlFor="invalid1"
        />
        <Input id="invalid1" placeholder="Invalid value" className="border-destructive" />
      </div>
    </div>
  ),
}

export const FormExample: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <div className="space-y-2">
        <EnhancedLabel
          text="Company Name"
          description="The official name of your company"
          required
          htmlFor="company"
        />
        <Input id="company" placeholder="Acme Inc." />
      </div>
      
      <div className="space-y-2">
        <EnhancedLabel
          text="Industry"
          description="Select your primary industry"
          htmlFor="industry"
        />
        <select 
          id="industry" 
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="">Select industry...</option>
          <option value="tech">Technology</option>
          <option value="finance">Finance</option>
          <option value="healthcare">Healthcare</option>
          <option value="retail">Retail</option>
        </select>
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox id="newsletter" />
        <Label htmlFor="newsletter" className="cursor-pointer text-sm">
          Subscribe to our newsletter for updates and tips
        </Label>
      </div>
    </div>
  ),
}