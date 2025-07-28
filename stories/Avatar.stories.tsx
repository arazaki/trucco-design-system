import type { Meta, StoryObj } from '@storybook/nextjs'
import { Avatar, AvatarImage, AvatarFallback } from '../components/atoms/avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible avatar component for displaying user profiles with image support, fallbacks, and status indicators. Built on shadcn/ui foundation with Trucco\'s semantic theming.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'The size of the avatar',
    },
    shape: {
      control: 'select',
      options: ['circle', 'square', 'rounded'],
      description: 'The shape of the avatar',
    },
    theme: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error', 'neutral'],
      description: 'The theme for fallback background',
    },
    status: {
      control: 'select',
      options: ['online', 'offline', 'busy', 'away'],
      description: 'The status indicator',
    },
    showStatus: {
      control: 'boolean',
      description: 'Shows status indicator when true',
    },
    src: {
      control: 'text',
      description: 'The image source URL',
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the image',
    },
    fallback: {
      control: 'text',
      description: 'Custom fallback text (overrides auto-generated initials)',
    },
  },
  args: {
    alt: 'John Doe',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    alt: 'John Doe',
  },
}

export const WithImage: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    alt: 'John Doe',
  },
}

export const AllSizes: Story = {
  args: {},
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar size="xs" alt="XS Size" />
      <Avatar size="sm" alt="SM Size" />
      <Avatar size="md" alt="MD Size" />
      <Avatar size="lg" alt="LG Size" />
      <Avatar size="xl" alt="XL Size" />
      <Avatar size="2xl" alt="2XL Size" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatar sizes from extra small to extra large.',
      },
    },
  },
}

export const AllShapes: Story = {
  args: {},
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar shape="circle" alt="Circle Shape" />
      <Avatar shape="square" alt="Square Shape" />
      <Avatar shape="rounded" alt="Rounded Shape" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different avatar shapes for various design needs.',
      },
    },
  },
}

export const ThemeVariants: Story = {
  args: {},
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Avatar theme="default" alt="Default Theme" />
      <Avatar theme="primary" alt="Primary Theme" />
      <Avatar theme="secondary" alt="Secondary Theme" />
      <Avatar theme="success" alt="Success Theme" />
      <Avatar theme="warning" alt="Warning Theme" />
      <Avatar theme="error" alt="Error Theme" />
      <Avatar theme="neutral" alt="Neutral Theme" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Theme-based background colors for avatar fallbacks.',
      },
    },
  },
}

export const WithStatus: Story = {
  args: {},
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar showStatus status="online" alt="Online User" />
      <Avatar showStatus status="offline" alt="Offline User" />
      <Avatar showStatus status="busy" alt="Busy User" />
      <Avatar showStatus status="away" alt="Away User" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatars with status indicators for user presence.',
      },
    },
  },
}

export const StatusSizes: Story = {
  args: {},
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar size="sm" showStatus status="online" alt="Small with Status" />
      <Avatar size="md" showStatus status="online" alt="Medium with Status" />
      <Avatar size="lg" showStatus status="online" alt="Large with Status" />
      <Avatar size="xl" showStatus status="online" alt="XL with Status" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Status indicators scale appropriately with avatar size.',
      },
    },
  },
}

export const CustomFallback: Story = {
  args: {},
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar fallback="JD" theme="primary" alt="John Doe" />
      <Avatar fallback="AS" theme="secondary" alt="Alice Smith" />
      <Avatar fallback="?" theme="neutral" alt="Unknown User" />
      <Avatar fallback="AI" theme="success" alt="AI Assistant" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatars with custom fallback text instead of auto-generated initials.',
      },
    },
  },
}

export const CompoundComponent: Story = {
  args: {},
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="lg">
        <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User with Image" />
        <AvatarFallback theme="primary">JD</AvatarFallback>
      </Avatar>
      
      <Avatar size="lg">
        <AvatarImage src="/nonexistent-image.jpg" alt="User without Image" />
        <AvatarFallback theme="secondary">AS</AvatarFallback>
      </Avatar>
      
      <Avatar size="lg">
        <AvatarFallback theme="success">AI</AvatarFallback>
      </Avatar>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Using Avatar as compound component with separate Image and Fallback components.',
      },
    },
  },
}

export const UserList: Story = {
  args: {},
  render: () => (
    <div className="space-y-3 max-w-md">
      <div className="flex items-center space-x-3 p-3 rounded-lg border">
        <Avatar 
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
          alt="John Doe"
          showStatus
          status="online"
        />
        <div>
          <p className="font-medium text-sm">John Doe</p>
          <p className="text-xs text-muted-foreground">john@example.com</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-3 p-3 rounded-lg border">
        <Avatar 
          alt="Alice Smith"
          theme="secondary"
          showStatus
          status="busy"
        />
        <div>
          <p className="font-medium text-sm">Alice Smith</p>
          <p className="text-xs text-muted-foreground">alice@example.com</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-3 p-3 rounded-lg border">
        <Avatar 
          alt="Bob Johnson"
          theme="neutral"
          showStatus
          status="away"
        />
        <div>
          <p className="font-medium text-sm">Bob Johnson</p>
          <p className="text-xs text-muted-foreground">bob@example.com</p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of avatars used in a user list with real-world context.',
      },
    },
  },
}

export const AvatarGroup: Story = {
  args: {},
  render: () => (
    <div className="space-y-4">
      <div className="flex -space-x-2">
        <Avatar 
          size="sm"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
          alt="User 1"
          className="border-2 border-background"
        />
        <Avatar 
          size="sm"
          alt="User 2"
          theme="secondary"
          className="border-2 border-background"
        />
        <Avatar 
          size="sm"
          alt="User 3"
          theme="success"
          className="border-2 border-background"
        />
        <Avatar 
          size="sm"
          fallback="+2"
          theme="neutral"
          className="border-2 border-background"
        />
      </div>
      
      <div className="flex -space-x-3">
        <Avatar 
          size="md"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
          alt="User 1"
          className="border-2 border-background"
        />
        <Avatar 
          size="md"
          alt="User 2"
          theme="primary"
          className="border-2 border-background"
        />
        <Avatar 
          size="md"
          alt="User 3"
          theme="warning"
          className="border-2 border-background"
        />
        <Avatar 
          size="md"
          fallback="+5"
          theme="neutral"
          className="border-2 border-background"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Overlapping avatar groups to show multiple users in limited space.',
      },
    },
  },
}