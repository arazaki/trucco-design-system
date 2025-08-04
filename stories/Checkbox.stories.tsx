import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox, EnhancedCheckbox } from '@/components/atoms'

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
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
    theme: {
      control: { type: 'select' },
      options: ['semantic', 'red', 'blue', 'purple', 'green'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="default" {...args} />
      <label htmlFor="default" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Accept terms and conditions
      </label>
    </div>
  ),
}

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="primary" {...args} />
      <label htmlFor="primary" className="text-sm font-medium leading-none">
        Primary checkbox
      </label>
    </div>
  ),
}

export const Success: Story = {
  args: {
    variant: 'success',
    defaultChecked: true,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="success" {...args} />
      <label htmlFor="success" className="text-sm font-medium leading-none">
        Task completed successfully
      </label>
    </div>
  ),
}

export const Error: Story = {
  args: {
    variant: 'error',
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="error" {...args} />
      <label htmlFor="error" className="text-sm font-medium leading-none">
        This field has an error
      </label>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="small" size="sm" />
        <label htmlFor="small" className="text-sm">Small checkbox</label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="medium" size="md" />
        <label htmlFor="medium" className="text-sm">Medium checkbox</label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="large" size="lg" />
        <label htmlFor="large" className="text-sm">Large checkbox</label>
      </div>
    </div>
  ),
}

export const CustomTheme: Story = {
  args: {
    theme: 'purple',
    variant: 'primary',
    defaultChecked: true,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="theme" {...args} />
      <label htmlFor="theme" className="text-sm font-medium leading-none">
        Custom purple theme
      </label>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled1" {...args} />
        <label htmlFor="disabled1" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Disabled unchecked
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled2" {...args} defaultChecked />
        <label htmlFor="disabled2" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Disabled checked
        </label>
      </div>
    </div>
  ),
}

export const Indeterminate: Story = {
  render: () => {
    const [checked, setChecked] = React.useState<boolean | 'indeterminate'>('indeterminate')
    
    return (
      <div className="flex items-center space-x-2">
        <Checkbox
          id="indeterminate"
          checked={checked}
          onCheckedChange={setChecked}
        />
        <label htmlFor="indeterminate" className="text-sm font-medium leading-none">
          Indeterminate state
        </label>
      </div>
    )
  },
}

// Enhanced Checkbox Stories
export const WithLabel: Story = {
  render: () => (
    <EnhancedCheckbox
      label="Subscribe to newsletter"
      description="Get weekly updates about new features and releases."
    />
  ),
}

export const WithError: Story = {
  render: () => (
    <EnhancedCheckbox
      label="Required agreement"
      description="You must accept the terms to continue."
      error="This field is required"
      required
    />
  ),
}

export const FormIntegration: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <EnhancedCheckbox
        label="Email notifications"
        description="Receive notifications about account activity"
        variant="primary"
      />
      <EnhancedCheckbox
        label="SMS notifications"
        description="Receive text messages for urgent updates"
        variant="success"
      />
      <EnhancedCheckbox
        label="Marketing emails"
        description="Get promotional content and special offers"
        variant="secondary"
      />
    </div>
  ),
}