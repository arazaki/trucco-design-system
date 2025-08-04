import type { Meta, StoryObj } from '@storybook/react'
import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetFooter, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger,
  EnhancedSheet,
  Button,
  Input,
  Label
} from '@/components/atoms'

const meta: Meta<typeof Sheet> = {
  title: 'Atoms/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const Sides: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Left</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Left Sheet</SheetTitle>
            <SheetDescription>This sheet opens from the left side.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Right</Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Right Sheet</SheetTitle>
            <SheetDescription>This sheet opens from the right side.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Top</Button>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Top Sheet</SheetTitle>
            <SheetDescription>This sheet opens from the top.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Bottom Sheet</SheetTitle>
            <SheetDescription>This sheet opens from the bottom.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  ),
}

export const WithVariants: Story = {
  render: () => (
    <div className="space-x-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Default</Button>
        </SheetTrigger>
        <SheetContent variant="default">
          <SheetHeader>
            <SheetTitle>Default Sheet</SheetTitle>
            <SheetDescription>This uses the default styling.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Bordered</Button>
        </SheetTrigger>
        <SheetContent variant="bordered">
          <SheetHeader>
            <SheetTitle>Bordered Sheet</SheetTitle>
            <SheetDescription>This sheet has a border styling.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Elevated</Button>
        </SheetTrigger>
        <SheetContent variant="elevated">
          <SheetHeader>
            <SheetTitle>Elevated Sheet</SheetTitle>
            <SheetDescription>This sheet has an elevated shadow styling.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  ),
}

export const Enhanced: Story = {
  render: () => (
    <EnhancedSheet
      trigger={<Button>Open Settings</Button>}
      title="Application Settings"
      description="Configure your application preferences and settings."
      footer={
        <div className="flex gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Save Settings</Button>
        </div>
      }
    >
      <div className="space-y-6">
        <div>
          <h4 className="font-medium mb-3">General</h4>
          <div className="space-y-3">
            <div>
              <Label htmlFor="app-name">Application Name</Label>
              <Input id="app-name" placeholder="My App" />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Input id="description" placeholder="App description..." />
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-3">Preferences</h4>
          <div className="space-y-3">
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked />
              <span className="text-sm">Enable notifications</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span className="text-sm">Auto-save changes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked />
              <span className="text-sm">Dark mode</span>
            </label>
          </div>
        </div>
      </div>
    </EnhancedSheet>
  ),
}

export const FormSheet: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Create User</Button>
      </SheetTrigger>
      <SheetContent width="lg">
        <SheetHeader>
          <SheetTitle>Create New User</SheetTitle>
          <SheetDescription>
            Fill out the form below to create a new user account.
          </SheetDescription>
        </SheetHeader>
        
        <div className="space-y-6 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="John" />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Doe" />
            </div>
          </div>
          
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" />
          </div>
          
          <div>
            <Label htmlFor="role">Role</Label>
            <select 
              id="role" 
              className="w-full px-3 py-2 border border-input rounded-md bg-background"
            >
              <option value="">Select a role...</option>
              <option value="admin">Administrator</option>
              <option value="editor">Editor</option>
              <option value="viewer">Viewer</option>
            </select>
          </div>
          
          <div>
            <Label htmlFor="bio">Bio</Label>
            <textarea 
              id="bio" 
              rows={3}
              className="w-full px-3 py-2 border border-input rounded-md bg-background"
              placeholder="Tell us about yourself..."
            />
          </div>
          
          <div>
            <Label className="text-sm font-medium">Permissions</Label>
            <div className="mt-2 space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span className="text-sm">Can create content</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span className="text-sm">Can edit content</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" defaultChecked />
                <span className="text-sm">Can view analytics</span>
              </label>
            </div>
          </div>
        </div>
        
        <SheetFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Create User</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}