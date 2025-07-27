import type { Meta, StoryObj } from '@storybook/nextjs'
import { fn } from 'storybook/test'
import { Header } from '../components/organisms/header'
import { Button } from '../components/atoms/button'
import { Navigation } from '../components/organisms/navigation'

const sampleNavItems = [
  { id: 'home', label: 'Home', href: '/', active: true },
  { id: 'products', label: 'Products', href: '/products' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'contact', label: 'Contact', href: '/contact' },
]

const meta = {
  title: 'Organisms/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A flexible header component that combines logo, navigation, search, and action elements with responsive behavior.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    sticky: {
      control: 'boolean',
      description: 'Makes header stick to top when scrolling',
    },
    border: {
      control: 'boolean',
      description: 'Shows bottom border',
    },
    showSearch: {
      control: 'boolean',
      description: 'Shows search field in header',
    },
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    title: 'Trucco Design System',
  },
}

export const WithLogo: Story = {
  args: {
    logo: (
      <div className="w-8 h-8 bg-primary-500 rounded-md flex items-center justify-center text-white font-bold">
        T
      </div>
    ),
    title: 'Trucco',
  },
}

export const WithNavigation: Story = {
  args: {
    title: 'Trucco',
    navigation: <Navigation items={sampleNavItems} onItemClick={fn()} />,
  },
}

export const WithSearch: Story = {
  args: {
    title: 'Trucco',
    showSearch: true,
    searchProps: {
      placeholder: 'Search documentation...',
      onSearch: fn(),
    },
  },
}

export const WithActions: Story = {
  args: {
    title: 'Trucco',
    actions: (
      <>
        <Button variant="ghost" size="sm">
          Sign In
        </Button>
        <Button variant="primary" size="sm">
          Get Started
        </Button>
      </>
    ),
  },
}

export const Complete: Story = {
  args: {
    logo: (
      <div className="w-8 h-8 bg-primary-500 rounded-md flex items-center justify-center text-white font-bold">
        T
      </div>
    ),
    title: 'Trucco',
    navigation: <Navigation items={sampleNavItems} onItemClick={fn()} />,
    showSearch: true,
    searchProps: {
      placeholder: 'Search...',
      onSearch: fn(),
    },
    actions: (
      <>
        <Button variant="ghost" size="sm">
          Sign In
        </Button>
        <Button variant="primary" size="sm">
          Get Started
        </Button>
      </>
    ),
    sticky: true,
  },
}

export const NoBorder: Story = {
  args: {
    title: 'Trucco',
    border: false,
  },
}

export const WithCustomContent: Story = {
  args: {
    title: 'Trucco',
    children: (
      <div className="mt-4 p-4 bg-primary-50 rounded-lg">
        <p className="text-sm text-primary-700">
          🎉 New release available! Check out the latest features.
        </p>
      </div>
    ),
  },
}

export const AppHeader: Story = {
  render: () => (
    <div className="min-h-screen bg-background-secondary">
      <Header
        logo={
          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            A
          </div>
        }
        title="My App"
        navigation={
          <Navigation 
            items={[
              { id: 'dashboard', label: 'Dashboard', active: true },
              { id: 'projects', label: 'Projects' },
              { id: 'team', label: 'Team' },
              { id: 'settings', label: 'Settings' },
            ]}
          />
        }
        showSearch={true}
        searchProps={{
          placeholder: 'Search projects, files, and more...',
          size: 'sm',
        }}
        actions={
          <>
            <Button variant="ghost" size="sm">
              Help
            </Button>
            <Button variant="outline" size="sm">
              Profile
            </Button>
          </>
        }
        sticky={true}
      />
      
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Page Content</h1>
          <p className="text-foreground-secondary mb-8">
            This demonstrates how the header looks with page content below it.
            The header is sticky, so it will stay at the top when you scroll.
          </p>
          
          <div className="space-y-4">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="p-4 bg-white rounded-lg border border-border-primary">
                <h3 className="font-semibold mb-2">Content Block {i + 1}</h3>
                <p className="text-foreground-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}