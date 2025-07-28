import type { Meta, StoryObj } from '@storybook/nextjs'
import { Input, Textarea } from '../components/atoms/input'
import { SearchIcon, MailIcon, LockIcon } from '../components/atoms/icons'

const meta = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible input component with multiple variants, sizes, and states. Includes support for icons, labels, and error states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error'],
      description: 'The visual style variant of the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input when true',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Makes input take full width of container',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'Input type',
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
}

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    helperText: 'We will never share your email with anyone.',
  },
}

export const WithError: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    error: 'Password must be at least 8 characters long',
    type: 'password',
  },
}

export const Success: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    variant: 'success',
    helperText: 'Email is available!',
  },
}

export const Warning: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    variant: 'warning',
    helperText: 'This username is already taken',
  },
}

export const Ghost: Story = {
  args: {
    placeholder: 'Search...',
    variant: 'default',
  },
}

export const Small: Story = {
  args: {
    label: 'Small Input',
    placeholder: 'Small input',
  },
}

export const Large: Story = {
  args: {
    label: 'Large Input',
    placeholder: 'Large input',
  },
}

export const ExtraLarge: Story = {
  args: {
    label: 'Extra Large Input',
    placeholder: 'Extra large input',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
  },
}

export const WithLeftIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    leftIcon: <SearchIcon />,
  },
}

export const WithRightIcon: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    rightIcon: <MailIcon />,
  },
}

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    rightIcon: <LockIcon />,
  },
}

export const VariantShowcase: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-4 w-80">
      <Input placeholder="Default input" />
      <Input placeholder="Success input" variant="success" />
      <Input placeholder="Warning input" variant="warning" />
      <Input placeholder="Error input" variant="error" />
      <Input placeholder="Default input" variant="default" />
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
}

export const TextareaDefault: Story = {
  render: () => (
    <Textarea 
      placeholder="Enter your message..."
      label="Message"
      helperText="Tell us what you think"
    />
  ),
}

export const TextareaWithError: Story = {
  render: () => (
    <Textarea 
      placeholder="Enter your bio..."
      label="Bio"
      error="Bio is required"
    />
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-4 w-80">
      <Input placeholder="Small" label="Small" />
      <Input placeholder="Medium" label="Medium" />
      <Input placeholder="Large" label="Large" />
      <Input placeholder="Extra Large" label="Extra Large" />
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
}