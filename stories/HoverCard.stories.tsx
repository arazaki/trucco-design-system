import type { Meta, StoryObj } from '@storybook/react'
import { HoverCard, HoverCardContent, HoverCardTrigger, EnhancedHoverCard } from '@/components/molecules'
import { Avatar, AvatarFallback, AvatarImage, Button } from '@/components/atoms'

const meta: Meta<typeof HoverCard> = {
  title: 'Molecules/HoverCard',
  component: HoverCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4 opacity-70"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const WithUserProfile: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <p className="text-sm">
        Hover over 
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link" className="px-1">@shadcn</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@shadcn</h4>
                <p className="text-sm">
                  Building @shadcn/ui. Teaching React & Next.js.
                </p>
                <div className="flex items-center pt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 opacity-70"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="m2 7 10 5 10-5" />
                  </svg>
                  <span className="text-xs text-muted-foreground">
                    contact@shadcn.com
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        to see their profile.
      </p>
    </div>
  ),
}

export const WithCustomContent: Story = {
  render: () => (
    <div className="text-center">
      <p className="text-sm mb-4">Hover over the logo below:</p>
      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="cursor-pointer inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground font-bold text-lg">
            T
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-64">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Trucco Design System</h4>
            <p className="text-sm text-muted-foreground">
              A comprehensive design system built with React, TypeScript, and Tailwind CSS.
            </p>
            <div className="flex items-center space-x-2 pt-2">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-xs">34 Components</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-xs">TypeScript</span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
}

export const WithDelay: Story = {
  render: () => (
    <HoverCard openDelay={600} closeDelay={300}>
      <HoverCardTrigger asChild>
        <Button variant="outline">Hover (600ms delay)</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Custom Timing</h4>
          <p className="text-sm text-muted-foreground">
            This hover card has a 600ms open delay and 300ms close delay.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const WithRichContent: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm">Hover over the items below for more details:</p>
      <div className="grid grid-cols-2 gap-4">
        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="cursor-pointer rounded-lg border p-4 hover:bg-muted/50">
              <h3 className="font-semibold">Analytics</h3>
              <p className="text-sm text-muted-foreground">View metrics</p>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-3">
              <h4 className="font-semibold">Analytics Overview</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Page Views</span>
                  <span className="font-mono">1,234</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Unique Visitors</span>
                  <span className="font-mono">892</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Bounce Rate</span>
                  <span className="font-mono">23.4%</span>
                </div>
              </div>
              <Button size="sm" className="w-full">View Details</Button>
            </div>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="cursor-pointer rounded-lg border p-4 hover:bg-muted/50">
              <h3 className="font-semibold">Settings</h3>
              <p className="text-sm text-muted-foreground">Manage preferences</p>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-64">
            <div className="space-y-3">
              <h4 className="font-semibold">Quick Settings</h4>
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" defaultChecked />
                  <span>Email notifications</span>
                </label>
                <label className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" />
                  <span>Push notifications</span>
                </label>
                <label className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" defaultChecked />
                  <span>Weekly digest</span>
                </label>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  ),
}

// Enhanced HoverCard Stories
export const Enhanced: Story = {
  render: () => (
    <EnhancedHoverCard
      trigger={<Button variant="outline">Enhanced Hover Card</Button>}
      content={
        <div className="space-y-2">
          <h4 className="font-semibold">Enhanced Version</h4>
          <p className="text-sm text-muted-foreground">
            This is the enhanced hover card with simplified API.
          </p>
        </div>
      }
    />
  ),
}

export const EnhancedWithStyling: Story = {
  render: () => (
    <EnhancedHoverCard
      trigger={<span className="underline cursor-pointer text-primary">Styled trigger</span>}
      content={
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <div>
              <h4 className="font-semibold">Custom Styling</h4>
              <p className="text-xs text-muted-foreground">Enhanced with custom classes</p>
            </div>
          </div>
          <p className="text-sm">
            This hover card demonstrates custom styling capabilities.
          </p>
        </div>
      }
      triggerClassName="hover:text-primary/80"
      contentClassName="w-72 p-4"
    />
  ),
}