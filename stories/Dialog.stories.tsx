import type { Meta, StoryObj } from '@storybook/nextjs'
import { useState } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
  Input,
} from '../components/atoms'

const meta: Meta<typeof Dialog> = {
  title: 'Atoms/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A modal dialog component with multiple variants, sizes, and semantic theming. Built on shadcn/ui foundation with Trucco\'s design system enhancements. Provides accessible overlay and focus management through Radix UI primitives.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    // Note: Dialog is a compound component, so we focus on DialogContent props
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Default Dialog</DialogTitle>
          <DialogDescription>
            This is a default dialog with standard styling and behavior.
          </DialogDescription>
        </DialogHeader>
        <div>
          <p>Dialog content goes here. You can place any content inside the dialog.</p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button variant="primary">Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="primary">Primary Dialog</Button>
        </DialogTrigger>
        <DialogContent variant="primary">
          <DialogHeader variant="primary">
            <DialogTitle>Primary Dialog</DialogTitle>
            <DialogDescription>
              Dialog with primary theming and styling.
            </DialogDescription>
          </DialogHeader>
          <div>
            <p>This dialog uses the primary color scheme for enhanced branding.</p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="primary">Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="success">Success Dialog</Button>
        </DialogTrigger>
        <DialogContent variant="success">
          <DialogHeader variant="success">
            <DialogTitle>Success!</DialogTitle>
            <DialogDescription>
              Operation completed successfully.
            </DialogDescription>
          </DialogHeader>
          <div>
            <p>Your changes have been saved successfully.</p>
          </div>
          <DialogFooter>
            <Button variant="success">Continue</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="warning">Warning Dialog</Button>
        </DialogTrigger>
        <DialogContent variant="warning">
          <DialogHeader variant="warning">
            <DialogTitle>Warning</DialogTitle>
            <DialogDescription>
              Please review before proceeding.
            </DialogDescription>
          </DialogHeader>
          <div>
            <p>This action may have unintended consequences. Are you sure you want to continue?</p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="warning">Proceed</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="error">Error Dialog</Button>
        </DialogTrigger>
        <DialogContent variant="error">
          <DialogHeader variant="error">
            <DialogTitle>Error</DialogTitle>
            <DialogDescription>
              Something went wrong.
            </DialogDescription>
          </DialogHeader>
          <div>
            <p>An error occurred while processing your request. Please try again.</p>
          </div>
          <DialogFooter>
            <Button variant="error">Retry</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary">Info Dialog</Button>
        </DialogTrigger>
        <DialogContent variant="info">
          <DialogHeader variant="info">
            <DialogTitle>Information</DialogTitle>
            <DialogDescription>
              Here's some important information.
            </DialogDescription>
          </DialogHeader>
          <div>
            <p>This dialog provides informational content with blue theming.</p>
          </div>
          <DialogFooter>
            <Button variant="primary">Got it</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available dialog variants showing different semantic states and colors.',
      },
    },
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button size="sm">Small Dialog</Button>
        </DialogTrigger>
        <DialogContent size="sm">
          <DialogHeader size="sm">
            <DialogTitle>Small Dialog</DialogTitle>
            <DialogDescription>
              Compact dialog for simple interactions.
            </DialogDescription>
          </DialogHeader>
          <div>
            <p>This is a small dialog with reduced width.</p>
          </div>
          <DialogFooter size="sm">
            <DialogClose asChild>
              <Button variant="outline" size="sm">Cancel</Button>
            </DialogClose>
            <Button size="sm">OK</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button>Medium Dialog</Button>
        </DialogTrigger>
        <DialogContent size="md">
          <DialogHeader size="md">
            <DialogTitle>Medium Dialog</DialogTitle>
            <DialogDescription>
              Standard dialog size for most use cases.
            </DialogDescription>
          </DialogHeader>
          <div>
            <p>This is the default medium-sized dialog with standard proportions.</p>
          </div>
          <DialogFooter size="md">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button size="lg">Large Dialog</Button>
        </DialogTrigger>
        <DialogContent size="lg">
          <DialogHeader size="lg">
            <DialogTitle>Large Dialog</DialogTitle>
            <DialogDescription>
              Spacious dialog for complex content and forms.
            </DialogDescription>
          </DialogHeader>
          <div>
            <p>This is a large dialog that can accommodate more content and complex layouts.</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <p><strong>Column 1:</strong> Content can be organized in columns within larger dialogs.</p>
              </div>
              <div>
                <p><strong>Column 2:</strong> This provides better content organization and readability.</p>
              </div>
            </div>
          </div>
          <DialogFooter size="lg">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button size="xl">Extra Large Dialog</Button>
        </DialogTrigger>
        <DialogContent size="xl">
          <DialogHeader size="lg">
            <DialogTitle>Extra Large Dialog</DialogTitle>
            <DialogDescription>
              Maximum width dialog for detailed content and complex forms.
            </DialogDescription>
          </DialogHeader>
          <div>
            <p>This is an extra large dialog that takes up most of the available screen space.</p>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="space-y-2">
                <p><strong>Section 1:</strong></p>
                <p>Content can be organized in multiple columns for better space utilization.</p>
              </div>
              <div className="space-y-2">
                <p><strong>Section 2:</strong></p>
                <p>This size is ideal for complex forms and detailed content presentations.</p>
              </div>
              <div className="space-y-2">
                <p><strong>Section 3:</strong></p>
                <p>The dialog maintains readability while maximizing content area.</p>
              </div>
            </div>
          </div>
          <DialogFooter size="lg">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button>Save All Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dialog size variants showing different width and spacing options.',
      },
    },
  },
}

export const ThemeVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Red Theme</Button>
        </DialogTrigger>
        <DialogContent theme="red">
          <DialogHeader>
            <DialogTitle>Red Theme Dialog</DialogTitle>
            <DialogDescription>
              Dialog with red color theming.
            </DialogDescription>
          </DialogHeader>
          <div>
            <p>This dialog uses the red theme variant for special emphasis.</p>
          </div>
          <DialogFooter>
            <Button>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button>Blue Theme</Button>
        </DialogTrigger>
        <DialogContent theme="blue">
          <DialogHeader>
            <DialogTitle>Blue Theme Dialog</DialogTitle>
            <DialogDescription>
              Dialog with blue color theming.
            </DialogDescription>
          </DialogHeader>
          <div>
            <p>This dialog uses the blue theme variant for informational content.</p>
          </div>
          <DialogFooter>
            <Button>Continue</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button>Purple Theme</Button>
        </DialogTrigger>
        <DialogContent theme="purple">
          <DialogHeader>
            <DialogTitle>Purple Theme Dialog</DialogTitle>
            <DialogDescription>
              Dialog with purple color theming.
            </DialogDescription>
          </DialogHeader>
          <div>
            <p>This dialog uses the purple theme variant for creative content.</p>
          </div>
          <DialogFooter>
            <Button>Proceed</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button>Green Theme</Button>
        </DialogTrigger>
        <DialogContent theme="green">
          <DialogHeader>
            <DialogTitle>Green Theme Dialog</DialogTitle>
            <DialogDescription>
              Dialog with green color theming.
            </DialogDescription>
          </DialogHeader>
          <div>
            <p>This dialog uses the green theme variant for positive actions.</p>
          </div>
          <DialogFooter>
            <Button>Accept</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Theme color variants showing different color schemes for dialog borders.',
      },
    },
  },
}

export const FooterAlignment: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Left Aligned Footer</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Left Aligned Footer</DialogTitle>
            <DialogDescription>
              Footer buttons aligned to the left.
            </DialogDescription>
          </DialogHeader>
          <div>
            <p>The footer buttons are aligned to the left side of the dialog.</p>
          </div>
          <DialogFooter alignment="left">
            <Button variant="primary">Primary Action</Button>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button>Center Aligned Footer</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Center Aligned Footer</DialogTitle>
            <DialogDescription>
              Footer buttons centered in the dialog.
            </DialogDescription>
          </DialogHeader>
          <div>
            <p>The footer buttons are centered within the dialog footer.</p>
          </div>
          <DialogFooter alignment="center">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="primary">Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button>Right Aligned Footer</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Right Aligned Footer</DialogTitle>
            <DialogDescription>
              Footer buttons aligned to the right (default).
            </DialogDescription>
          </DialogHeader>
          <div>
            <p>The footer buttons are aligned to the right side of the dialog.</p>
          </div>
          <DialogFooter alignment="right">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="primary">Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different footer button alignment options for various design needs.',
      },
    },
  },
}

export const RealWorldExample: Story = {
  render: () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    return (
      <div className="flex flex-wrap gap-4">
        {/* User Profile Edit Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="primary">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent size="md">
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
              <DialogDescription>
                Update your profile information. Changes will be saved to your account.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium block mb-1">
                  Full Name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium block mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button variant="primary">Save Changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Confirmation Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="error">Delete Account</Button>
          </DialogTrigger>
          <DialogContent variant="error" size="sm">
            <DialogHeader variant="error">
              <DialogTitle>Delete Account</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button variant="error">Delete Account</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Success Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="success">Complete Order</Button>
          </DialogTrigger>
          <DialogContent variant="success" size="md">
            <DialogHeader variant="success">
              <DialogTitle>Order Completed!</DialogTitle>
              <DialogDescription>
                Your order has been successfully processed and confirmed.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-3">
              <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-md">
                <p className="text-sm"><strong>Order #:</strong> ORD-2024-001</p>
                <p className="text-sm"><strong>Total:</strong> $129.99</p>
                <p className="text-sm"><strong>Delivery:</strong> 3-5 business days</p>
              </div>
              <p className="text-sm text-muted-foreground">
                A confirmation email has been sent to your email address.
              </p>
            </div>
            <DialogFooter>
              <Button variant="success">View Order Details</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing profile editing, confirmation, and success dialogs with practical content and interactions.',
      },
    },
  },
}