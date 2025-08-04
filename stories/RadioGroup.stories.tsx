import type { Meta, StoryObj } from '@storybook/react'
import { RadioGroup, RadioGroupItem, EnhancedRadioGroup, EnhancedRadioGroupItem } from '@/components/atoms'

const meta: Meta<typeof RadioGroup> = {
  title: 'Atoms/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <label htmlFor="option-one" className="cursor-pointer">Option One</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <label htmlFor="option-two" className="cursor-pointer">Option Two</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="option-three" />
        <label htmlFor="option-three" className="cursor-pointer">Option Three</label>
      </div>
    </RadioGroup>
  ),
}

export const WithVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-3">Primary</h3>
        <RadioGroup defaultValue="primary-1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="primary-1" id="primary-1" variant="primary" />
            <label htmlFor="primary-1" className="cursor-pointer">Primary Option 1</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="primary-2" id="primary-2" variant="primary" />
            <label htmlFor="primary-2" className="cursor-pointer">Primary Option 2</label>
          </div>
        </RadioGroup>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-3">Success</h3>
        <RadioGroup defaultValue="success-1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="success-1" id="success-1" variant="success" />
            <label htmlFor="success-1" className="cursor-pointer">Success Option 1</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="success-2" id="success-2" variant="success" />
            <label htmlFor="success-2" className="cursor-pointer">Success Option 2</label>
          </div>
        </RadioGroup>
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-3">Small</h3>
        <RadioGroup defaultValue="small-1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="small-1" id="small-1" size="sm" />
            <label htmlFor="small-1" className="cursor-pointer text-sm">Small Option 1</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="small-2" id="small-2" size="sm" />
            <label htmlFor="small-2" className="cursor-pointer text-sm">Small Option 2</label>
          </div>
        </RadioGroup>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-3">Large</h3>
        <RadioGroup defaultValue="large-1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="large-1" id="large-1" size="lg" />
            <label htmlFor="large-1" className="cursor-pointer">Large Option 1</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="large-2" id="large-2" size="lg" />
            <label htmlFor="large-2" className="cursor-pointer">Large Option 2</label>
          </div>
        </RadioGroup>
      </div>
    </div>
  ),
}

export const Enhanced: Story = {
  render: () => (
    <EnhancedRadioGroup
      label="Notification Preferences"
      description="Choose how you'd like to receive notifications"
      defaultValue="email"
    >
      <EnhancedRadioGroupItem 
        value="email" 
        label="Email notifications"
        description="Receive notifications via email"
      />
      <EnhancedRadioGroupItem 
        value="sms" 
        label="SMS notifications"
        description="Receive notifications via text message"
      />
      <EnhancedRadioGroupItem 
        value="push" 
        label="Push notifications"
        description="Receive notifications in your browser"
      />
      <EnhancedRadioGroupItem 
        value="none" 
        label="No notifications"
        description="Don't receive any notifications"
      />
    </EnhancedRadioGroup>
  ),
}

export const EnhancedWithError: Story = {
  render: () => (
    <EnhancedRadioGroup
      label="Subscription Plan"
      description="Select your preferred subscription plan"
      error="Please select a subscription plan to continue"
      required
    >
      <EnhancedRadioGroupItem 
        value="free" 
        label="Free Plan"
        description="Basic features with limited usage"
      />
      <EnhancedRadioGroupItem 
        value="pro" 
        label="Pro Plan - $9/month"
        description="Advanced features with unlimited usage"
      />
      <EnhancedRadioGroupItem 
        value="enterprise" 
        label="Enterprise Plan - $29/month"
        description="All features plus priority support"
      />
    </EnhancedRadioGroup>
  ),
}

export const EnhancedVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <EnhancedRadioGroup
        label="Payment Method"
        description="Choose your preferred payment method"
        variant="primary"
        defaultValue="card"
      >
        <EnhancedRadioGroupItem 
          value="card" 
          label="Credit Card"
          description="Pay with Visa, Mastercard, or American Express"
        />
        <EnhancedRadioGroupItem 
          value="paypal" 
          label="PayPal"
          description="Pay securely with your PayPal account"
        />
        <EnhancedRadioGroupItem 
          value="bank" 
          label="Bank Transfer"
          description="Direct transfer from your bank account"
        />
      </EnhancedRadioGroup>
      
      <EnhancedRadioGroup
        label="Shipping Speed"
        description="Select your preferred shipping option"
        variant="success"
        defaultValue="standard"
      >
        <EnhancedRadioGroupItem 
          value="standard" 
          label="Standard Shipping (5-7 days)"
          description="Free shipping on orders over $50"
        />
        <EnhancedRadioGroupItem 
          value="express" 
          label="Express Shipping (2-3 days)"
          description="Additional $9.99 shipping fee"
        />
        <EnhancedRadioGroupItem 
          value="overnight" 
          label="Overnight Shipping"
          description="Additional $24.99 shipping fee"
        />
      </EnhancedRadioGroup>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-3">Disabled Options</h3>
        <RadioGroup defaultValue="option-1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-1" id="option-1" />
            <label htmlFor="option-1" className="cursor-pointer">Available Option</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-2" id="option-2" disabled />
            <label htmlFor="option-2" className="cursor-not-allowed opacity-50">Disabled Option</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-3" id="option-3" />
            <label htmlFor="option-3" className="cursor-pointer">Another Available Option</label>
          </div>
        </RadioGroup>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-3">Entirely Disabled</h3>
        <RadioGroup defaultValue="disabled-1" disabled>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="disabled-1" id="disabled-1" />
            <label htmlFor="disabled-1" className="cursor-not-allowed opacity-50">Disabled Option 1</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="disabled-2" id="disabled-2" />
            <label htmlFor="disabled-2" className="cursor-not-allowed opacity-50">Disabled Option 2</label>
          </div>
        </RadioGroup>
      </div>
    </div>
  ),
}