import type { Meta, StoryObj } from '@storybook/react'
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue,
  EnhancedSelect 
} from '@/components/atoms'

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
          <SelectItem value="grape">Grape</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const WithVariants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="text-sm font-medium mb-2 block">Default</label>
        <Select>
          <SelectTrigger variant="default">
            <SelectValue placeholder="Default variant" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <label className="text-sm font-medium mb-2 block">Success</label>
        <Select>
          <SelectTrigger variant="success">
            <SelectValue placeholder="Success variant" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Valid Option 1</SelectItem>
            <SelectItem value="option2">Valid Option 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <label className="text-sm font-medium mb-2 block">Error</label>
        <Select>
          <SelectTrigger variant="error">
            <SelectValue placeholder="Error variant" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
}

export const Enhanced: Story = {
  render: () => (
    <div className="w-80">
      <EnhancedSelect
        label="Country"
        placeholder="Select your country"
        helperText="Choose the country where you currently reside"
      >
        <SelectItem value="us">United States</SelectItem>
        <SelectItem value="ca">Canada</SelectItem>
        <SelectItem value="uk">United Kingdom</SelectItem>
        <SelectItem value="de">Germany</SelectItem>
        <SelectItem value="fr">France</SelectItem>
        <SelectItem value="jp">Japan</SelectItem>
        <SelectItem value="au">Australia</SelectItem>
      </EnhancedSelect>
    </div>
  ),
}

export const EnhancedWithError: Story = {
  render: () => (
    <div className="w-80">
      <EnhancedSelect
        label="Subscription Plan"
        placeholder="Choose a plan"
        helperText="Select the plan that best fits your needs"
        error="Please select a subscription plan"
        required
      >
        <SelectItem value="free">Free Plan</SelectItem>
        <SelectItem value="pro">Pro Plan - $9/month</SelectItem>
        <SelectItem value="enterprise">Enterprise Plan - $29/month</SelectItem>
      </EnhancedSelect>
    </div>
  ),
}

export const WithGroups: Story = {
  render: () => (
    <div className="w-80">
      <EnhancedSelect
        label="Framework"
        placeholder="Select a framework"
      >
        <SelectItem value="react">React</SelectItem>
        <SelectItem value="vue">Vue</SelectItem>
        <SelectItem value="angular">Angular</SelectItem>
        <SelectItem value="svelte">Svelte</SelectItem>
        <SelectItem value="solid">Solid</SelectItem>
      </EnhancedSelect>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <EnhancedSelect
        label="Disabled Select"
        placeholder="This is disabled"
        disabled
      >
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
      </EnhancedSelect>
      
      <EnhancedSelect
        label="With Disabled Options"  
        placeholder="Some options disabled"
      >
        <SelectItem value="enabled1">Enabled Option 1</SelectItem>
        <SelectItem value="disabled1" disabled>Disabled Option 1</SelectItem>
        <SelectItem value="enabled2">Enabled Option 2</SelectItem>
        <SelectItem value="disabled2" disabled>Disabled Option 2</SelectItem>
      </EnhancedSelect>
    </div>
  ),
}

export const FormExample: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <EnhancedSelect
        label="Department"
        placeholder="Select department"
        helperText="Choose your department for proper routing"
        required
      >
        <SelectItem value="engineering">Engineering</SelectItem>
        <SelectItem value="design">Design</SelectItem>
        <SelectItem value="product">Product</SelectItem>
        <SelectItem value="marketing">Marketing</SelectItem>
        <SelectItem value="sales">Sales</SelectItem>
        <SelectItem value="support">Support</SelectItem>
      </EnhancedSelect>
      
      <EnhancedSelect
        label="Priority Level"
        placeholder="Select priority"
        variant="primary"
      >
        <SelectItem value="low">Low Priority</SelectItem>
        <SelectItem value="medium">Medium Priority</SelectItem>
        <SelectItem value="high">High Priority</SelectItem>
        <SelectItem value="urgent">Urgent</SelectItem>
      </EnhancedSelect>
      
      <EnhancedSelect
        label="Status"
        placeholder="Select status"
        variant="success"
        helperText="Current status of the request"
      >
        <SelectItem value="draft">Draft</SelectItem>
        <SelectItem value="pending">Pending Review</SelectItem>
        <SelectItem value="approved">Approved</SelectItem>
        <SelectItem value="rejected">Rejected</SelectItem>
      </EnhancedSelect>
    </div>
  ),
}