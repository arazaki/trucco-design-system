import type { Meta, StoryObj } from '@storybook/nextjs'
import { PageLayout } from '../components/templates/page-layout'
import { Header } from '../components/organisms/header'
import { Navigation } from '../components/organisms/navigation'
import { Button } from '../components/atoms/button'
import { Text } from '../components/atoms/text'

const sampleHeader = (
  <Header
    logo={
      <div className="w-8 h-8 bg-primary-500 rounded-md flex items-center justify-center text-white font-bold">
        T
      </div>
    }
    title="Trucco"
    navigation={
      <Navigation
        items={[
          { id: 'home', label: 'Home', active: true },
          { id: 'docs', label: 'Docs' },
          { id: 'components', label: 'Components' },
        ]}
      />
    }
    actions={
      <Button variant="primary" size="sm">
        Get Started
      </Button>
    }
  />
)

const sampleSidebar = (
  <div className="p-4">
    <Text variant="h5" className="mb-4">
      Navigation
    </Text>
    <Navigation
      items={[
        { id: 'overview', label: 'Overview', active: true },
        { id: 'getting-started', label: 'Getting Started' },
        { id: 'components', label: 'Components', badge: 12 },
        { id: 'themes', label: 'Themes' },
        { id: 'examples', label: 'Examples' },
      ]}
      variant="sidebar"
      orientation="vertical"
    />
  </div>
)

const sampleContent = (
  <div className="p-8 max-w-4xl mx-auto">
    <Text variant="h1" className="mb-4">
      Welcome to Trucco Design System
    </Text>
    <Text variant="body" className="mb-8 text-foreground-secondary">
      A flexible, theme-driven design system built on Next.js and Tailwind CSS.
    </Text>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="p-6 bg-white rounded-lg border border-border-primary">
        <Text variant="h4" className="mb-2">
          Getting Started
        </Text>
        <Text variant="bodySmall" className="mb-4 text-foreground-secondary">
          Learn how to install and set up Trucco in your project.
        </Text>
        <Button variant="primary" size="sm">
          Read Guide
        </Button>
      </div>
      
      <div className="p-6 bg-white rounded-lg border border-border-primary">
        <Text variant="h4" className="mb-2">
          Components
        </Text>
        <Text variant="bodySmall" className="mb-4 text-foreground-secondary">
          Explore the available components and their usage.
        </Text>
        <Button variant="outline" size="sm">
          Browse Components
        </Button>
      </div>
    </div>
    
    <div className="space-y-4">
      {Array.from({ length: 8 }, (_, i) => (
        <div key={i} className="p-4 bg-white rounded-lg border border-border-primary">
          <Text variant="h5" className="mb-2">
            Section {i + 1}
          </Text>
          <Text variant="body" className="text-foreground-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </div>
      ))}
    </div>
  </div>
)

const sampleFooter = (
  <footer className="border-t border-border-primary bg-background-secondary">
    <div className="p-4 text-center">
      <Text variant="bodySmall" className="text-foreground-muted">
        © 2024 Trucco Design System. Built with ❤️ and Claude.
      </Text>
    </div>
  </footer>
)

const meta = {
  title: 'Templates/PageLayout',
  component: PageLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A complete page layout template that combines header, sidebar, main content, and footer areas with flexible configuration.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    sidebarWidth: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Width of the sidebar',
    },
    sidebarPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Position of the sidebar',
    },
    stickyHeader: {
      control: 'boolean',
      description: 'Makes header stick to top when scrolling',
    },
    stickyFooter: {
      control: 'boolean',
      description: 'Makes footer stick to bottom',
    },
    fullHeight: {
      control: 'boolean',
      description: 'Makes layout fill full viewport height',
    },
  },
} satisfies Meta<typeof PageLayout>

export default meta
type Story = StoryObj<typeof meta>

export const BasicLayout: Story = {
  args: {
    main: sampleContent,
  },
}

export const WithHeader: Story = {
  args: {
    header: sampleHeader,
    main: sampleContent,
  },
}

export const WithSidebar: Story = {
  args: {
    header: sampleHeader,
    sidebar: sampleSidebar,
    main: sampleContent,
  },
}

export const WithFooter: Story = {
  args: {
    header: sampleHeader,
    main: sampleContent,
    footer: sampleFooter,
  },
}

export const CompleteLayout: Story = {
  args: {
    header: sampleHeader,
    sidebar: sampleSidebar,
    main: sampleContent,
    footer: sampleFooter,
    stickyHeader: true,
  },
}

export const RightSidebar: Story = {
  args: {
    header: sampleHeader,
    sidebar: sampleSidebar,
    main: sampleContent,
    sidebarPosition: 'right',
  },
}

export const WideSidebar: Story = {
  args: {
    header: sampleHeader,
    sidebar: sampleSidebar,
    main: sampleContent,
    sidebarWidth: 'xl',
  },
}

export const NarrowSidebar: Story = {
  args: {
    header: sampleHeader,
    sidebar: sampleSidebar,
    main: sampleContent,
    sidebarWidth: 'sm',
  },
}

export const StickyFooter: Story = {
  args: {
    header: sampleHeader,
    main: (
      <div className="p-8">
        <Text variant="h1" className="mb-4">Short Content</Text>
        <Text variant="body">
          This layout has sticky footer enabled, so the footer will stick to the bottom 
          even when there's not enough content to fill the page.
        </Text>
      </div>
    ),
    footer: sampleFooter,
    stickyFooter: true,
  },
}

export const DocumentationLayout: Story = {
  args: {
    header: (
      <Header
        logo={
          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            D
          </div>
        }
        title="Documentation"
        showSearch={true}
        searchProps={{
          placeholder: 'Search docs...',
        }}
        actions={
          <>
            <Button variant="ghost" size="sm">GitHub</Button>
            <Button variant="primary" size="sm">Download</Button>
          </>
        }
        sticky={true}
      />
    ),
    sidebar: (
      <div className="p-4">
        <Text variant="h6" className="mb-4 px-3">Contents</Text>
        <Navigation
          items={[
            { id: 'introduction', label: 'Introduction', active: true },
            { id: 'installation', label: 'Installation' },
            { id: 'quick-start', label: 'Quick Start' },
            { id: 'components', label: 'Components', badge: 'New' },
            { id: 'theming', label: 'Theming' },
            { id: 'customization', label: 'Customization' },
            { id: 'examples', label: 'Examples' },
            { id: 'migration', label: 'Migration Guide' },
            { id: 'faq', label: 'FAQ' },
          ]}
          variant="sidebar"
          orientation="vertical"
          size="sm"
        />
      </div>
    ),
    main: (
      <div className="p-8 max-w-4xl mx-auto">
        <Text variant="h1" className="mb-6">Introduction</Text>
        
        <Text variant="body" className="mb-6 text-foreground-secondary">
          Welcome to our comprehensive design system documentation. This guide will help you 
          understand how to use our components effectively in your projects.
        </Text>
        
        <div className="p-6 bg-primary-50 border border-primary-200 rounded-lg mb-8">
          <Text variant="h5" className="mb-2 text-primary-800">
            📚 What you'll learn
          </Text>
          <ul className="space-y-2 text-sm text-primary-700">
            <li>• How to install and configure the design system</li>
            <li>• Best practices for component usage</li>
            <li>• Customization and theming options</li>
            <li>• Advanced patterns and compositions</li>
          </ul>
        </div>
        
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} className="mb-8">
            <Text variant="h3" className="mb-4">
              Section {i + 1}
            </Text>
            <Text variant="body" className="mb-4 text-foreground-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
              veniam, quis nostrud exercitation ullamco laboris.
            </Text>
            <div className="p-4 bg-neutral-50 rounded-lg border border-border-muted">
              <Text variant="bodySmall" className="font-mono text-foreground-tertiary">
                Code example would go here...
              </Text>
            </div>
          </div>
        ))}
      </div>
    ),
    footer: (
      <footer className="border-t border-border-primary bg-white">
        <div className="p-6">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <Text variant="bodySmall" className="text-foreground-muted">
              © 2024 Design System Documentation
            </Text>
            <div className="flex gap-4">
              <Button variant="link" size="sm">Privacy</Button>
              <Button variant="link" size="sm">Terms</Button>
              <Button variant="link" size="sm">Support</Button>
            </div>
          </div>
        </div>
      </footer>
    ),
    stickyHeader: true,
  },
}