import type { Meta, StoryObj } from '@storybook/nextjs'
import { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardAction, 
  CardDescription, 
  CardContent,
  Button,
} from '../components/atoms'

const meta: Meta<typeof Card> = {
  title: 'Atoms/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile card component with multiple variants, elevation levels, and semantic theming. Built on shadcn/ui foundation with Trucco\'s design system enhancements. Perfect for displaying grouped content with optional headers, footers, and actions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'tertiary', 'success', 'warning', 'error', 'outline', 'ghost'],
      description: 'The semantic variant of the card',
    },
    elevation: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
      description: 'The shadow/elevation level of the card',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the card',
    },
    theme: {
      control: 'select',
      options: ['semantic', 'red', 'blue', 'purple', 'green'],
      description: 'The color theme variant',
    },
    interactive: {
      control: 'boolean',
      description: 'Makes the card interactive with hover and focus states',
    },
  },
  args: {
    variant: 'default',
    elevation: 'sm',
    size: 'md',
    theme: 'semantic',
    interactive: false,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          Card description goes here. It provides additional context about the card content.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the main content area of the card. You can place any content here.</p>
      </CardContent>
      <CardFooter>
        <Button variant="primary" size="sm">Action</Button>
      </CardFooter>
    </Card>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 max-w-6xl">
      <Card variant="default" className="w-64">
        <CardHeader>
          <CardTitle>Default</CardTitle>
          <CardDescription>Default card variant</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Standard card styling with default border and background.</p>
        </CardContent>
      </Card>
      
      <Card variant="primary" className="w-64">
        <CardHeader>
          <CardTitle>Primary</CardTitle>
          <CardDescription>Primary card variant</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Primary themed card with subtle brand coloring.</p>
        </CardContent>
      </Card>
      
      <Card variant="secondary" className="w-64">
        <CardHeader>
          <CardTitle>Secondary</CardTitle>
          <CardDescription>Secondary card variant</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Secondary themed card for supporting content.</p>
        </CardContent>
      </Card>
      
      <Card variant="success" className="w-64">
        <CardHeader>
          <CardTitle>Success</CardTitle>
          <CardDescription>Success state card</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Green-themed card for positive messaging.</p>
        </CardContent>
      </Card>
      
      <Card variant="warning" className="w-64">
        <CardHeader>
          <CardTitle>Warning</CardTitle>
          <CardDescription>Warning state card</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Yellow-themed card for warning messages.</p>
        </CardContent>
      </Card>
      
      <Card variant="error" className="w-64">
        <CardHeader>
          <CardTitle>Error</CardTitle>
          <CardDescription>Error state card</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Red-themed card for error states.</p>
        </CardContent>
      </Card>
      
      <Card variant="outline" className="w-64">
        <CardHeader>
          <CardTitle>Outline</CardTitle>
          <CardDescription>Outline card variant</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Emphasized border styling without background.</p>
        </CardContent>
      </Card>
      
      <Card variant="ghost" className="w-64">
        <CardHeader>
          <CardTitle>Ghost</CardTitle>
          <CardDescription>Ghost card variant</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Minimal styling with no border or shadow.</p>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available card variants displayed together for comparison.',
      },
    },
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-start gap-4">
      <Card size="sm" className="w-64">
        <CardHeader size="sm">
          <CardTitle>Small Card</CardTitle>
          <CardDescription>Compact card with reduced padding</CardDescription>
        </CardHeader>
        <CardContent size="sm">
          <p>Small card content with tighter spacing.</p>
        </CardContent>
        <CardFooter size="sm">
          <Button variant="primary" size="sm">Small Action</Button>
        </CardFooter>
      </Card>
      
      <Card size="md" className="w-64">
        <CardHeader size="md">
          <CardTitle>Medium Card</CardTitle>
          <CardDescription>Standard card with default padding</CardDescription>
        </CardHeader>
        <CardContent size="md">
          <p>Medium card content with standard spacing.</p>
        </CardContent>
        <CardFooter size="md">
          <Button variant="primary" size="md">Medium Action</Button>
        </CardFooter>
      </Card>
      
      <Card size="lg" className="w-64">
        <CardHeader size="lg">
          <CardTitle>Large Card</CardTitle>
          <CardDescription>Spacious card with generous padding</CardDescription>
        </CardHeader>
        <CardContent size="lg">
          <p>Large card content with generous spacing.</p>
        </CardContent>
        <CardFooter size="lg">
          <Button variant="primary" size="lg">Large Action</Button>
        </CardFooter>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Card size variants showing different padding and spacing levels.',
      },
    },
  },
}

export const ElevationLevels: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6 p-8">
      <Card elevation="none" className="w-64">
        <CardHeader>
          <CardTitle>No Shadow</CardTitle>
          <CardDescription>Card with no elevation</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Flat card with no shadow effect.</p>
        </CardContent>
      </Card>
      
      <Card elevation="sm" className="w-64">
        <CardHeader>
          <CardTitle>Small Shadow</CardTitle>
          <CardDescription>Card with subtle elevation</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card with small shadow for subtle depth.</p>
        </CardContent>
      </Card>
      
      <Card elevation="md" className="w-64">
        <CardHeader>
          <CardTitle>Medium Shadow</CardTitle>
          <CardDescription>Card with moderate elevation</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card with medium shadow for noticeable depth.</p>
        </CardContent>
      </Card>
      
      <Card elevation="lg" className="w-64">
        <CardHeader>
          <CardTitle>Large Shadow</CardTitle>
          <CardDescription>Card with strong elevation</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card with large shadow for prominent depth.</p>
        </CardContent>
      </Card>
      
      <Card elevation="xl" className="w-64">
        <CardHeader>
          <CardTitle>Extra Large Shadow</CardTitle>
          <CardDescription>Card with maximum elevation</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card with extra large shadow for dramatic depth.</p>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different elevation levels showing progressive shadow depths.',
      },
    },
  },
}

export const ThemeVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-4xl">
      <Card theme="red" variant="primary" className="w-64">
        <CardHeader>
          <CardTitle>Red Theme</CardTitle>
          <CardDescription>Card with red theme variant</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Red-themed styling applied to the card.</p>
        </CardContent>
      </Card>
      
      <Card theme="blue" variant="primary" className="w-64">
        <CardHeader>
          <CardTitle>Blue Theme</CardTitle>
          <CardDescription>Card with blue theme variant</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Blue-themed styling applied to the card.</p>
        </CardContent>
      </Card>
      
      <Card theme="purple" variant="primary" className="w-64">
        <CardHeader>
          <CardTitle>Purple Theme</CardTitle>
          <CardDescription>Card with purple theme variant</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Purple-themed styling applied to the card.</p>
        </CardContent>
      </Card>
      
      <Card theme="green" variant="primary" className="w-64">
        <CardHeader>
          <CardTitle>Green Theme</CardTitle>
          <CardDescription>Card with green theme variant</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Green-themed styling applied to the card.</p>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Theme color variants showing different color schemes.',
      },
    },
  },
}

export const WithAction: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Card with Action</CardTitle>
        <CardAction>
          <Button variant="ghost" size="sm">⋯</Button>
        </CardAction>
        <CardDescription>
          This card demonstrates the action slot in the header area.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>The action button is positioned in the top-right corner of the card header.</p>
      </CardContent>
      <CardFooter>
        <Button variant="primary">Primary Action</Button>
        <Button variant="outline">Secondary</Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Card with an action button in the header and footer buttons.',
      },
    },
  },
}

export const Interactive: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Card className="w-64">
        <CardHeader>
          <CardTitle>Regular Card</CardTitle>
          <CardDescription>Non-interactive card</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card is not interactive.</p>
        </CardContent>
      </Card>
      
      <Card interactive className="w-64">
        <CardHeader>
          <CardTitle>Interactive Card</CardTitle>
          <CardDescription>Clickable card with hover effects</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card responds to hover and focus.</p>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison between regular and interactive cards with hover effects.',
      },
    },
  },
}

export const BorderedSections: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader bordered>
        <CardTitle>Bordered Header</CardTitle>
        <CardDescription>
          Header with bottom border separation.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Main content area between bordered sections.</p>
      </CardContent>
      <CardFooter bordered>
        <Button variant="primary">Save Changes</Button>
        <Button variant="outline">Cancel</Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Card with bordered header and footer sections for clear separation.',
      },
    },
  },
}

export const RealWorldExample: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
      {/* User Profile Card */}
      <Card variant="primary" elevation="md" className="w-full">
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
          <CardAction>
            <Button variant="ghost" size="sm">Edit</Button>
          </CardAction>
          <CardDescription>
            Manage your account information and preferences.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium">Name</p>
              <p className="text-sm text-muted-foreground">John Doe</p>
            </div>
            <div>
              <p className="text-sm font-medium">Email</p>
              <p className="text-sm text-muted-foreground">john@example.com</p>
            </div>
            <div>
              <p className="text-sm font-medium">Role</p>
              <p className="text-sm text-muted-foreground">Administrator</p>
            </div>
          </div>
        </CardContent>
        <CardFooter bordered>
          <Button variant="primary" size="sm">Update Profile</Button>
          <Button variant="outline" size="sm">Change Password</Button>
        </CardFooter>
      </Card>

      {/* Statistics Card */}
      <Card variant="success" elevation="lg" className="w-full">
        <CardHeader>
          <CardTitle>Monthly Stats</CardTitle>
          <CardDescription>
            Your performance this month.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold">1,234</p>
              <p className="text-sm text-muted-foreground">Views</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">89</p>
              <p className="text-sm text-muted-foreground">Likes</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">45</p>
              <p className="text-sm text-muted-foreground">Comments</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">12</p>
              <p className="text-sm text-muted-foreground">Shares</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="success" size="sm" fullWidth>View Details</Button>
        </CardFooter>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing user profile and statistics cards with practical content and layouts.',
      },
    },
  },
}