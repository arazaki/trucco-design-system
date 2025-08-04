import type { Meta, StoryObj } from '@storybook/react'
import { Alert, AlertTitle, AlertDescription } from '@/components/atoms'

const meta: Meta<typeof Alert> = {
  title: 'Atoms/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'error', 'info'],
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
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Default Alert</AlertTitle>
      <AlertDescription>
        This is a default alert message.
      </AlertDescription>
    </Alert>
  ),
}

export const Success: Story = {
  args: {
    variant: 'success',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>
        Your changes have been saved successfully.
      </AlertDescription>
    </Alert>
  ),
}

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        Please review your settings before continuing.
      </AlertDescription>
    </Alert>
  ),
}

export const Error: Story = {
  args: {
    variant: 'error',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Something went wrong. Please try again.
      </AlertDescription>
    </Alert>
  ),
}

export const Info: Story = {
  args: {
    variant: 'info',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        Here's some helpful information for you.
      </AlertDescription>
    </Alert>
  ),
}

export const WithTheme: Story = {
  args: {
    variant: 'success',
    theme: 'purple',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Custom Theme</AlertTitle>
      <AlertDescription>
        This alert uses a custom purple theme.
      </AlertDescription>
    </Alert>
  ),
}

export const TitleOnly: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Alert Title Only</AlertTitle>
    </Alert>
  ),
}

export const DescriptionOnly: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertDescription>
        Alert with description only, no title.
      </AlertDescription>
    </Alert>
  ),
}