import type { Meta, StoryObj } from '@storybook/nextjs'
import { fn } from 'storybook/test'
import { Navigation } from '../components/organisms/navigation'
import { SearchIcon, MailIcon, LockIcon } from '../components/atoms/icons'

const basicItems = [
  { id: 'home', label: 'Home', href: '/', active: true },
  { id: 'products', label: 'Products', href: '/products' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'contact', label: 'Contact', href: '/contact' },
]

const itemsWithIcons = [
  { id: 'search', label: 'Search', icon: <SearchIcon />, active: true },
  { id: 'messages', label: 'Messages', icon: <MailIcon />, badge: 3 },
  { id: 'security', label: 'Security', icon: <LockIcon /> },
]

const sidebarItems = [
  { id: 'dashboard', label: 'Dashboard', active: true },
  { id: 'projects', label: 'Projects', badge: 12 },
  { id: 'team', label: 'Team Members' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'settings', label: 'Settings' },
  { id: 'help', label: 'Help & Support', disabled: true },
]

const meta = {
  title: 'Organisms/Navigation',
  component: Navigation,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible navigation component supporting horizontal and vertical layouts with various styling variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Layout direction of navigation items',
    },
    variant: {
      control: 'select',
      options: ['default', 'pills', 'underline', 'sidebar'],
      description: 'Visual style of navigation',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of navigation items',
    },
  },
  args: {
    onItemClick: fn(),
  },
} satisfies Meta<typeof Navigation>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  args: {
    items: basicItems,
  },
}

export const Vertical: Story = {
  args: {
    items: basicItems,
    orientation: 'vertical',
  },
}

export const Pills: Story = {
  args: {
    items: basicItems,
    variant: 'pills',
  },
}

export const PillsVertical: Story = {
  args: {
    items: basicItems,
    variant: 'pills',
    orientation: 'vertical',
  },
}

export const Underline: Story = {
  args: {
    items: basicItems,
    variant: 'underline',
  },
}

export const Sidebar: Story = {
  args: {
    items: sidebarItems,
    variant: 'sidebar',
    orientation: 'vertical',
  },
  parameters: {
    layout: 'padded',
  },
}

export const WithIcons: Story = {
  args: {
    items: itemsWithIcons,
    variant: 'pills',
  },
}

export const WithBadges: Story = {
  args: {
    items: [
      { id: 'inbox', label: 'Inbox', badge: 12 },
      { id: 'drafts', label: 'Drafts', badge: 3 },
      { id: 'sent', label: 'Sent' },
      { id: 'archive', label: 'Archive', badge: '99+' },
    ],
    variant: 'pills',
    orientation: 'vertical',
  },
}

export const Small: Story = {
  args: {
    items: basicItems,
    variant: 'pills',
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    items: basicItems,
    variant: 'pills',
    size: 'lg',
  },
}

export const WithDisabledItems: Story = {
  args: {
    items: [
      { id: 'home', label: 'Home', active: true },
      { id: 'products', label: 'Products' },
      { id: 'about', label: 'About', disabled: true },
      { id: 'contact', label: 'Contact' },
    ],
    variant: 'pills',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 w-full max-w-2xl">
      <div>
        <h3 className="mb-4 text-sm font-medium text-foreground-secondary">Default</h3>
        <Navigation items={basicItems} />
      </div>
      
      <div>
        <h3 className="mb-4 text-sm font-medium text-foreground-secondary">Pills</h3>
        <Navigation items={basicItems} variant="pills" />
      </div>
      
      <div>
        <h3 className="mb-4 text-sm font-medium text-foreground-secondary">Underline</h3>
        <Navigation items={basicItems} variant="underline" />
      </div>
      
      <div className="bg-background-secondary p-4 rounded-lg">
        <h3 className="mb-4 text-sm font-medium text-foreground-secondary">Sidebar</h3>
        <Navigation items={sidebarItems} variant="sidebar" orientation="vertical" />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
}

export const AppSidebar: Story = {
  render: () => (
    <div className="flex h-96 bg-background-secondary rounded-lg overflow-hidden">
      <div className="w-64 bg-white border-r border-border-primary p-4">
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              A
            </div>
            <span className="font-semibold">My App</span>
          </div>
        </div>
        
        <Navigation
          items={[
            { id: 'dashboard', label: 'Dashboard', active: true },
            { id: 'projects', label: 'Projects', badge: 5 },
            { id: 'tasks', label: 'Tasks', badge: 12 },
            { id: 'team', label: 'Team' },
            { id: 'analytics', label: 'Analytics' },
            { id: 'settings', label: 'Settings' },
          ]}
          variant="sidebar"
          orientation="vertical"
        />
      </div>
      
      <div className="flex-1 p-6">
        <h2 className="text-xl font-semibold mb-2">Dashboard</h2>
        <p className="text-foreground-secondary">
          This is the main content area. The sidebar navigation shows the current active state.
        </p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
}