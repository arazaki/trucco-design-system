import type { Meta, StoryObj } from '@storybook/nextjs'
import { FormGroup } from '../components/molecules/form-group'
import { Input } from '../components/atoms/input'
import { Button } from '../components/atoms/button'

const meta = {
  title: 'Molecules/FormGroup',
  component: FormGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A form group that combines labels, form controls, helper text, and error messages with consistent spacing and typography.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    spacing: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Spacing between label, control, and helper text',
    },
    required: {
      control: 'boolean',
      description: 'Shows required asterisk on label',
    },
  },
} satisfies Meta<typeof FormGroup>

export default meta
type Story = StoryObj<typeof meta>

export const BasicInput: Story = {
  args: {
    label: 'Email Address',
    children: <Input type="email" placeholder="Enter your email" />,
  },
}

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    helperText: 'Must be at least 8 characters long',
    children: <Input type="password" placeholder="Enter password" />,
  },
}

export const WithError: Story = {
  args: {
    label: 'Username',
    error: 'Username is already taken',
    children: <Input placeholder="Enter username" />,
  },
}

export const Required: Story = {
  args: {
    label: 'Full Name',
    required: true,
    children: <Input placeholder="Enter your full name" />,
  },
}

export const RequiredWithError: Story = {
  args: {
    label: 'Email Address',
    required: true,
    error: 'Email is required',
    children: <Input type="email" placeholder="Enter your email" />,
  },
}

export const SmallSpacing: Story = {
  args: {
    label: 'Code',
    spacing: 'sm',
    helperText: 'Enter the 6-digit code',
    children: <Input placeholder="000000" />,
  },
}

export const LargeSpacing: Story = {
  args: {
    label: 'Description',
    spacing: 'lg',
    helperText: 'Provide a detailed description',
    children: <Input placeholder="Enter description" />,
  },
}

export const FormExample: Story = {
  render: () => (
    <form className="space-y-6 w-80">
      <FormGroup
        label="Email Address"
        required
        helperText="We'll never share your email"
      >
        <Input type="email" placeholder="Enter your email" />
      </FormGroup>

      <FormGroup
        label="Password"
        required
        helperText="Must be at least 8 characters"
      >
        <Input type="password" placeholder="Enter password" />
      </FormGroup>

      <FormGroup
        label="Confirm Password"
        required
        error="Passwords do not match"
      >
        <Input type="password" placeholder="Confirm password" />
      </FormGroup>

      <FormGroup
        label="Bio"
        helperText="Tell us about yourself (optional)"
      >
        <Input placeholder="Enter your bio" />
      </FormGroup>

      <Button type="submit" variant="primary" fullWidth>
        Create Account
      </Button>
    </form>
  ),
  parameters: {
    layout: 'centered',
  },
}