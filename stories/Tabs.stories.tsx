import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/atoms'

const meta: Meta<typeof Tabs> = {
  title: 'Atoms/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-96">
      <Tabs defaultValue="account">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Name</label>
            <input className="w-full px-3 py-2 border rounded-md" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Username</label>
            <input className="w-full px-3 py-2 border rounded-md" placeholder="Enter username" />
          </div>
        </TabsContent>
        <TabsContent value="password" className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Current Password</label>
            <input type="password" className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">New Password</label>
            <input type="password" className="w-full px-3 py-2 border rounded-md" />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  ),
}

export const MultipleTabs: Story = {
  render: () => (
    <div className="w-96">
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="mt-4 space-y-4">
          <h3 className="text-lg font-semibold">Overview</h3>
          <p className="text-sm text-muted-foreground">
            Get a quick overview of your account activity and key metrics.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <div className="text-2xl font-bold">1,234</div>
              <div className="text-sm text-muted-foreground">Total Users</div>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="text-2xl font-bold">56</div>
              <div className="text-sm text-muted-foreground">Active Projects</div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="analytics" className="mt-4 space-y-4">
          <h3 className="text-lg font-semibold">Analytics</h3>
          <p className="text-sm text-muted-foreground">
            Detailed analytics and performance metrics for your account.
          </p>
          <div className="h-32 bg-muted rounded-lg flex items-center justify-center">
            <span className="text-muted-foreground">Analytics Chart Placeholder</span>
          </div>
        </TabsContent>
        
        <TabsContent value="reports" className="mt-4 space-y-4">
          <h3 className="text-lg font-semibold">Reports</h3>
          <p className="text-sm text-muted-foreground">
            Generate and download reports for your data.
          </p>
          <div className="space-y-2">
            <button className="w-full p-3 text-left border rounded-lg hover:bg-muted">
              <div className="font-medium">Monthly Report</div>
              <div className="text-sm text-muted-foreground">Last generated 2 days ago</div>
            </button>
            <button className="w-full p-3 text-left border rounded-lg hover:bg-muted">
              <div className="font-medium">Quarterly Report</div>
              <div className="text-sm text-muted-foreground">Last generated 1 week ago</div>
            </button>
          </div>
        </TabsContent>
        
        <TabsContent value="notifications" className="mt-4 space-y-4">
          <h3 className="text-lg font-semibold">Notifications</h3>
          <p className="text-sm text-muted-foreground">
            Manage your notification preferences and settings.
          </p>
          <div className="space-y-3">
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked />
              <span className="text-sm">Email notifications</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span className="text-sm">Push notifications</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked />
              <span className="text-sm">Weekly digest</span>
            </label>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  ),
}

export const VerticalTabs: Story = {
  render: () => (
    <div className="w-96">
      <Tabs defaultValue="general" orientation="vertical" className="flex space-x-4">
        <TabsList className="flex flex-col h-auto w-40">
          <TabsTrigger value="general" className="w-full justify-start">General</TabsTrigger>
          <TabsTrigger value="security" className="w-full justify-start">Security</TabsTrigger>
          <TabsTrigger value="integrations" className="w-full justify-start">Integrations</TabsTrigger>
          <TabsTrigger value="support" className="w-full justify-start">Support</TabsTrigger>
        </TabsList>
        
        <div className="flex-1">
          <TabsContent value="general" className="space-y-4">
            <h3 className="text-lg font-semibold">General Settings</h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium">Company Name</label>
                <input className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="Acme Inc." />
              </div>
              <div>
                <label className="text-sm font-medium">Website</label>
                <input className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="https://example.com" />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="security" className="space-y-4">
            <h3 className="text-lg font-semibold">Security Settings</h3>
            <div className="space-y-3">
              <label className="flex items-center space-x-2">
                <input type="checkbox" defaultChecked />
                <span className="text-sm">Two-factor authentication</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span className="text-sm">Login notifications</span>
              </label>
            </div>
          </TabsContent>
          
          <TabsContent value="integrations" className="space-y-4">
            <h3 className="text-lg font-semibold">Integrations</h3>
            <p className="text-sm text-muted-foreground">
              Connect your account with third-party services.
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <span className="font-medium">Slack</span>
                <button className="px-3 py-1 text-sm border rounded">Connect</button>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <span className="font-medium">Discord</span>
                <button className="px-3 py-1 text-sm border rounded">Connect</button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="support" className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <p className="text-sm text-muted-foreground">
              Get help and contact our support team.
            </p>
            <div className="space-y-2">
              <button className="w-full p-3 text-left border rounded-lg hover:bg-muted">
                <div className="font-medium">Documentation</div>
                <div className="text-sm text-muted-foreground">Browse our help articles</div>
              </button>
              <button className="w-full p-3 text-left border rounded-lg hover:bg-muted">
                <div className="font-medium">Contact Support</div>
                <div className="text-sm text-muted-foreground">Get in touch with our team</div>
              </button>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  ),
}

export const DisabledTab: Story = {
  render: () => (
    <div className="w-96">
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Available</TabsTrigger>
          <TabsTrigger value="tab2" disabled>Disabled</TabsTrigger>
          <TabsTrigger value="tab3">Another Tab</TabsTrigger>
        </TabsList>
        
        <TabsContent value="tab1" className="mt-4">
          <h3 className="text-lg font-semibold">Available Tab</h3>
          <p className="text-sm text-muted-foreground">
            This tab is available and can be clicked.
          </p>
        </TabsContent>
        
        <TabsContent value="tab2" className="mt-4">
          <h3 className="text-lg font-semibold">Disabled Tab</h3>
          <p className="text-sm text-muted-foreground">
            This tab is disabled and cannot be accessed.
          </p>
        </TabsContent>
        
        <TabsContent value="tab3" className="mt-4">
          <h3 className="text-lg font-semibold">Another Tab</h3>
          <p className="text-sm text-muted-foreground">
            This is another available tab with content.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  ),
}

export const CardTabs: Story = {
  render: () => (
    <div className="w-96">
      <Tabs defaultValue="photos" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
        
        <TabsContent value="photos" className="mt-4">
          <div className="border rounded-lg p-4 space-y-4">
            <h3 className="text-lg font-semibold">Photo Library</h3>
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-square bg-muted rounded-md flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Photo {i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="music" className="mt-4">
          <div className="border rounded-lg p-4 space-y-4">
            <h3 className="text-lg font-semibold">Music Collection</h3>
            <div className="space-y-2">
              {['Song 1', 'Song 2', 'Song 3', 'Song 4'].map((song, i) => (
                <div key={i} className="flex items-center space-x-3 p-2 rounded hover:bg-muted">
                  <div className="w-10 h-10 bg-muted rounded"></div>
                  <div>
                    <div className="font-medium">{song}</div>
                    <div className="text-sm text-muted-foreground">Artist Name</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="videos" className="mt-4">
          <div className="border rounded-lg p-4 space-y-4">
            <h3 className="text-lg font-semibold">Video Library</h3>
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-16 h-12 bg-muted rounded flex items-center justify-center">
                    <span className="text-xs">▶</span>
                  </div>
                  <div>
                    <div className="font-medium">Video {i + 1}</div>
                    <div className="text-sm text-muted-foreground">Duration: 2:30</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  ),
}