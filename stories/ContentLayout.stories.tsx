import type { Meta, StoryObj } from '@storybook/nextjs'
import { ContentLayout } from '../components/templates/content-layout'
import { Button } from '../components/atoms/button'
import { Text } from '../components/atoms/text'
import { FormGroup } from '../components/molecules/form-group'
import { Input } from '../components/atoms/input'

const sampleBreadcrumb = (
  <nav className="flex items-center gap-2 text-sm">
    <Button variant="link" size="sm" className="p-0 h-auto">
      Home
    </Button>
    <span className="text-foreground-muted">/</span>
    <Button variant="link" size="sm" className="p-0 h-auto">
      Projects
    </Button>
    <span className="text-foreground-muted">/</span>
    <span className="text-foreground-tertiary">Current Project</span>
  </nav>
)

const sampleActions = (
  <>
    <Button variant="outline" size="sm">
      Cancel
    </Button>
    <Button variant="primary" size="sm">
      Save Changes
    </Button>
  </>
)

const sampleContent = (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-6 bg-white rounded-lg border border-border-primary">
        <Text variant="h4" className="mb-4">Quick Stats</Text>
        <div className="space-y-3">
          <div className="flex justify-between">
            <Text variant="bodySmall">Total Projects</Text>
            <Text variant="bodySmall" weight="semibold">24</Text>
          </div>
          <div className="flex justify-between">
            <Text variant="bodySmall">Active Tasks</Text>
            <Text variant="bodySmall" weight="semibold">156</Text>
          </div>
          <div className="flex justify-between">
            <Text variant="bodySmall">Completed</Text>
            <Text variant="bodySmall" weight="semibold">89%</Text>
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-white rounded-lg border border-border-primary">
        <Text variant="h4" className="mb-4">Recent Activity</Text>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
            <Text variant="bodySmall">Project created</Text>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-success-500 rounded-full"></div>
            <Text variant="bodySmall">Task completed</Text>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-warning-500 rounded-full"></div>
            <Text variant="bodySmall">Deadline approaching</Text>
          </div>
        </div>
      </div>
    </div>
    
    <div className="p-6 bg-white rounded-lg border border-border-primary">
      <Text variant="h4" className="mb-4">Main Content Area</Text>
      <Text variant="body" className="mb-4 text-foreground-secondary">
        This is where your main content would go. The ContentLayout template provides 
        consistent spacing and typography while remaining flexible for different content types.
      </Text>
      
      <div className="space-y-4">
        {Array.from({ length: 3 }, (_, i) => (
          <div key={i} className="p-4 bg-background-secondary rounded border border-border-muted">
            <Text variant="h6" className="mb-2">Content Block {i + 1}</Text>
            <Text variant="bodySmall" className="text-foreground-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const meta = {
  title: 'Templates/ContentLayout',
  component: ContentLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A content layout template that provides consistent spacing, typography, and structure for page content with optional title, breadcrumb, and action areas.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'full'],
      description: 'Maximum width constraint for content',
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
      description: 'Padding around content',
    },
    spacing: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Vertical spacing between sections',
    },
  },
} satisfies Meta<typeof ContentLayout>

export default meta
type Story = StoryObj<typeof meta>

export const BasicContent: Story = {
  args: {
    children: sampleContent,
  },
}

export const WithTitle: Story = {
  args: {
    title: 'Dashboard Overview',
    children: sampleContent,
  },
}

export const WithSubtitle: Story = {
  args: {
    title: 'Project Management',
    subtitle: 'Manage your projects, tasks, and team collaboration',
    children: sampleContent,
  },
}

export const WithBreadcrumb: Story = {
  args: {
    breadcrumb: sampleBreadcrumb,
    title: 'Project Details',
    subtitle: 'View and edit project settings',
    children: sampleContent,
  },
}

export const WithActions: Story = {
  args: {
    title: 'Settings',
    subtitle: 'Configure your account preferences',
    actions: sampleActions,
    children: sampleContent,
  },
}

export const Complete: Story = {
  args: {
    breadcrumb: sampleBreadcrumb,
    title: 'Edit Project',
    subtitle: 'Update project information and settings',
    actions: sampleActions,
    children: sampleContent,
  },
}

export const NarrowContent: Story = {
  args: {
    title: 'User Profile',
    maxWidth: 'md',
    children: sampleContent,
  },
}

export const WideContent: Story = {
  args: {
    title: 'Analytics Dashboard',
    maxWidth: '2xl',
    children: sampleContent,
  },
}

export const TightSpacing: Story = {
  args: {
    title: 'Compact View',
    spacing: 'sm',
    padding: 'sm',
    children: sampleContent,
  },
}

export const LooseSpacing: Story = {
  args: {
    title: 'Spacious Layout',
    spacing: 'xl',
    padding: 'xl',
    children: sampleContent,
  },
}

export const FormPage: Story = {
  args: {
    breadcrumb: (
      <nav className="flex items-center gap-2 text-sm">
        <Button variant="link" size="sm" className="p-0 h-auto">
          Settings
        </Button>
        <span className="text-foreground-muted">/</span>
        <span className="text-foreground-tertiary">Profile</span>
      </nav>
    ),
    title: 'Edit Profile',
    subtitle: 'Update your personal information and preferences',
    actions: (
      <>
        <Button variant="outline">Cancel</Button>
        <Button variant="primary">Save Changes</Button>
      </>
    ),
    maxWidth: 'lg',
    children: (
      <div className="space-y-8">
        <div className="p-6 bg-white rounded-lg border border-border-primary">
          <Text variant="h4" className="mb-6">Personal Information</Text>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormGroup label="First Name" required>
              <Input placeholder="Enter first name" />
            </FormGroup>
            
            <FormGroup label="Last Name" required>
              <Input placeholder="Enter last name" />
            </FormGroup>
            
            <FormGroup label="Email" required className="md:col-span-2">
              <Input type="email" placeholder="Enter email address" />
            </FormGroup>
            
            <FormGroup label="Bio" className="md:col-span-2">
              <Input placeholder="Tell us about yourself" />
            </FormGroup>
          </div>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-border-primary">
          <Text variant="h4" className="mb-6">Preferences</Text>
          
          <div className="space-y-6">
            <FormGroup label="Language" helperText="Choose your preferred language">
              <Input placeholder="English" />
            </FormGroup>
            
            <FormGroup label="Timezone" helperText="Select your timezone">
              <Input placeholder="UTC-5 (Eastern Time)" />
            </FormGroup>
          </div>
        </div>
      </div>
    ),
  },
}

export const ArticlePage: Story = {
  args: {
    breadcrumb: (
      <nav className="flex items-center gap-2 text-sm">
        <Button variant="link" size="sm" className="p-0 h-auto">
          Blog
        </Button>
        <span className="text-foreground-muted">/</span>
        <Button variant="link" size="sm" className="p-0 h-auto">
          Design Systems
        </Button>
        <span className="text-foreground-muted">/</span>
        <span className="text-foreground-tertiary">Getting Started</span>
      </nav>
    ),
    title: 'Getting Started with Design Systems',
    subtitle: 'A comprehensive guide to building and maintaining design systems',
    actions: (
      <>
        <Button variant="ghost" size="sm">Share</Button>
        <Button variant="outline" size="sm">Bookmark</Button>
      </>
    ),
    maxWidth: 'xl',
    children: (
      <article className="prose max-w-none">
        <div className="p-8 bg-white rounded-lg border border-border-primary">
          <Text variant="body" className="mb-6 text-lg leading-relaxed">
            Design systems have become essential tools for maintaining consistency and efficiency 
            in modern product development. This guide will walk you through the fundamental 
            concepts and best practices for building your own design system.
          </Text>
          
          <Text variant="h3" className="mb-4">
            What is a Design System?
          </Text>
          
          <Text variant="body" className="mb-6">
            A design system is a collection of reusable components, guided by clear standards, 
            that can be assembled together to build any number of applications. It's more than 
            just a style guide or component library—it's a comprehensive approach to design 
            and development.
          </Text>
          
          <Text variant="h3" className="mb-4">
            Key Components
          </Text>
          
          <Text variant="body" className="mb-4">
            Every effective design system includes these core elements:
          </Text>
          
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
              <Text variant="body">
                <strong>Design Tokens:</strong> The atomic values that define your design decisions
              </Text>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
              <Text variant="body">
                <strong>Components:</strong> Reusable UI elements with consistent behavior
              </Text>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
              <Text variant="body">
                <strong>Patterns:</strong> Common solutions to recurring design problems
              </Text>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
              <Text variant="body">
                <strong>Documentation:</strong> Clear guidelines for using the system
              </Text>
            </li>
          </ul>
          
          <div className="p-6 bg-primary-50 border border-primary-200 rounded-lg mb-6">
            <Text variant="h5" className="mb-3 text-primary-800">
              💡 Pro Tip
            </Text>
            <Text variant="body" className="text-primary-700">
              Start small and grow your design system organically. Begin with the most 
              common components your team uses, then expand based on actual needs.
            </Text>
          </div>
          
          <Text variant="h3" className="mb-4">
            Getting Started
          </Text>
          
          <Text variant="body" className="mb-6">
            The best way to begin is to audit your existing designs and identify common 
            patterns. Look for elements that appear repeatedly across your products and 
            start standardizing those first.
          </Text>
        </div>
      </article>
    ),
  },
}