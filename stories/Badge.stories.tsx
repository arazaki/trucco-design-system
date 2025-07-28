import type { Meta, StoryObj } from '@storybook/nextjs'
import { Badge } from '../components/atoms/badge'
import { Check, X, Star } from 'lucide-react'

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile badge component for status indicators, labels, counts, and tags. Built on shadcn/ui foundation with Trucco\'s semantic theming.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'outline', 'success', 'warning', 'error', 'default', 'destructive'],
      description: 'The visual style variant of the badge',
    },
    theme: {
      control: 'select',
      options: ['semantic', 'red', 'blue', 'purple', 'green'],
      description: 'The semantic theme variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the badge',
    },
    shape: {
      control: 'select',
      options: ['default', 'rounded', 'square'],
      description: 'The shape of the badge',
    },
    removable: {
      control: 'boolean',
      description: 'Shows remove button when true',
    },
    asChild: {
      control: 'boolean',
      description: 'Renders as Slot for composition',
    },
  },
  args: {
    children: 'Badge',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Error',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
}

export const AllVariants: Story = {
  args: {},
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="tertiary">Tertiary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available badge variants displayed together for comparison.',
      },
    },
  },
}

export const AllSizes: Story = {
  args: {},
  render: () => (
    <div className="flex items-center gap-4">
      <Badge variant="primary" size="sm">Small</Badge>
      <Badge variant="primary" size="md">Medium</Badge>
      <Badge variant="primary" size="lg">Large</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badge sizes from small to large.',
      },
    },
  },
}

export const AllShapes: Story = {
  args: {},
  render: () => (
    <div className="flex items-center gap-4">
      <Badge variant="primary" shape="default">Default</Badge>
      <Badge variant="primary" shape="rounded">Rounded</Badge>
      <Badge variant="primary" shape="square">Square</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different badge shapes for various design needs.',
      },
    },
  },
}

export const ThemeVariants: Story = {
  args: {},
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge theme="semantic">Semantic</Badge>
      <Badge theme="red">Red</Badge>
      <Badge theme="blue">Blue</Badge>
      <Badge theme="purple">Purple</Badge>
      <Badge theme="green">Green</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Theme-based color variants for semantic meaning.',
      },
    },
  },
}

export const WithIcons: Story = {
  args: {},
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="success" icon={<Check className="w-3 h-3" />}>
        Completed
      </Badge>
      <Badge variant="error" icon={<X className="w-3 h-3" />}>
        Failed
      </Badge>
      <Badge variant="warning" icon={<Star className="w-3 h-3" />}>
        Featured
      </Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badges with icons for enhanced visual communication.',
      },
    },
  },
}

export const RemovableBadges: Story = {
  args: {},
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="primary" removable onRemove={() => alert('Remove primary')}>
        Tag 1
      </Badge>
      <Badge variant="secondary" removable onRemove={() => alert('Remove secondary')}>
        Tag 2
      </Badge>
      <Badge variant="outline" removable onRemove={() => alert('Remove outline')}>
        Tag 3
      </Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Removable badges with close buttons for tag-like functionality.',
      },
    },
  },
}

export const StatusIndicators: Story = {
  args: {},
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-sm">User Status:</span>
        <Badge variant="success" size="sm">Online</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Order Status:</span>
        <Badge variant="warning" size="sm">Pending</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Connection:</span>
        <Badge variant="error" size="sm">Offline</Badge>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of badges used as status indicators in real applications.',
      },
    },
  },
}

export const Counts: Story = {
  args: {},
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-1">
        <span className="text-sm">Notifications</span>
        <Badge variant="error" size="sm" shape="rounded">3</Badge>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-sm">Messages</span>
        <Badge variant="primary" size="sm" shape="rounded">12</Badge>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-sm">Cart</span>
        <Badge variant="success" size="sm" shape="rounded">99+</Badge>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badges used for displaying counts and numbers.',
      },
    },
  },
}