import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton, SkeletonText, SkeletonAvatar, SkeletonCard } from '@/components/atoms'

const meta: Meta<typeof Skeleton> = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'rounded', 'circular'],
    },
    animation: {
      control: { type: 'select' },
      options: ['pulse', 'wave', 'none'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: 'w-32 h-4',
  },
  render: (args) => <Skeleton {...args} />,
}

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <div className="text-sm font-medium mb-2">Default</div>
        <Skeleton className="w-32 h-4" />
      </div>
      
      <div>
        <div className="text-sm font-medium mb-2">Rounded</div>
        <Skeleton variant="rounded" className="w-32 h-8" />
      </div>
      
      <div>
        <div className="text-sm font-medium mb-2">Circular</div>
        <Skeleton variant="circular" className="w-12 h-12" />
      </div>
    </div>
  ),
}

export const Animations: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <div className="text-sm font-medium mb-2">Pulse (Default)</div>
        <Skeleton animation="pulse" className="w-40 h-4" />
      </div>
      
      <div>
        <div className="text-sm font-medium mb-2">Wave</div>
        <Skeleton animation="wave" className="w-40 h-4" />
      </div>
      
      <div>
        <div className="text-sm font-medium mb-2">No Animation</div>
        <Skeleton animation="none" className="w-40 h-4" />
      </div>
    </div>
  ),
}

export const TextSkeleton: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <div className="text-sm font-medium mb-2">Single Line</div>
        <SkeletonText />
      </div>
      
      <div>
        <div className="text-sm font-medium mb-2">Multiple Lines</div>
        <SkeletonText lines={3} />
      </div>
      
      <div>
        <div className="text-sm font-medium mb-2">Custom Width</div>
        <SkeletonText lines={2} width="60%" />
      </div>
      
      <div>
        <div className="text-sm font-medium mb-2">Different Sizes</div>
        <SkeletonText size="sm" />
        <SkeletonText size="md" className="mt-2" />
        <SkeletonText size="lg" className="mt-2" />
      </div>
    </div>
  ),
}

export const AvatarSkeleton: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <div className="text-sm font-medium mb-2">Small Avatar</div>
        <SkeletonAvatar size="sm" />
      </div>
      
      <div>
        <div className="text-sm font-medium mb-2">Medium Avatar</div>
        <SkeletonAvatar size="md" />
      </div>
      
      <div>
        <div className="text-sm font-medium mb-2">Large Avatar</div>
        <SkeletonAvatar size="lg" />
      </div>
      
      <div>
        <div className="text-sm font-medium mb-2">With Text</div>
        <div className="flex items-center space-x-3">
          <SkeletonAvatar size="md" />
          <div className="space-y-2">
            <SkeletonText width="120px" />
            <SkeletonText width="80px" size="sm" />
          </div>
        </div>
      </div>
    </div>
  ),
}

export const CardSkeleton: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <div className="text-sm font-medium mb-2">Basic Card</div>
        <div className="w-80">
          <SkeletonCard />
        </div>
      </div>
      
      <div>
        <div className="text-sm font-medium mb-2">Card with Avatar</div>
        <div className="w-80">
          <SkeletonCard showAvatar />
        </div>
      </div>
      
      <div>
        <div className="text-sm font-medium mb-2">Card with Actions</div>
        <div className="w-80">
          <SkeletonCard showActions />
        </div>
      </div>
      
      <div>
        <div className="text-sm font-medium mb-2">Full Card</div>
        <div className="w-80">
          <SkeletonCard showAvatar showActions />
        </div>
      </div>
    </div>
  ),
}

export const ComplexLayouts: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Profile Card */}
      <div>
        <div className="text-sm font-medium mb-4">Profile Card</div>
        <div className="border rounded-lg p-6 w-80">
          <div className="flex items-center space-x-4 mb-4">
            <SkeletonAvatar size="lg" />
            <div className="space-y-2 flex-1">
              <SkeletonText width="60%" />
              <SkeletonText width="40%" size="sm" />
            </div>
          </div>
          <div className="space-y-2">
            <SkeletonText lines={2} />
          </div>
          <div className="flex space-x-2 mt-4">
            <Skeleton className="h-8 w-20 rounded" />
            <Skeleton className="h-8 w-16 rounded" />
          </div>
        </div>
      </div>

      {/* Article List */}
      <div>
        <div className="text-sm font-medium mb-4">Article List</div>
        <div className="space-y-4 w-96">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="border rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Skeleton className="w-16 h-16 rounded" />
                <div className="flex-1 space-y-2">
                  <SkeletonText width="80%" />
                  <SkeletonText width="100%" size="sm" />
                  <SkeletonText width="60%" size="sm" />
                  <div className="flex items-center space-x-4 mt-3">
                    <SkeletonAvatar size="sm" />
                    <SkeletonText width="80px" size="sm" />
                    <SkeletonText width="60px" size="sm" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dashboard Stats */}
      <div>
        <div className="text-sm font-medium mb-4">Dashboard Stats</div>
        <div className="grid grid-cols-3 gap-4 w-96">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="border rounded-lg p-4">
              <div className="space-y-3">
                <SkeletonText width="70%" size="sm" />
                <Skeleton className="h-8 w-16" />
                <div className="flex justify-between">
                  <SkeletonText width="40%" size="sm" />
                  <SkeletonText width="30%" size="sm" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
}

export const LoadingStates: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Loading Table */}
      <div>
        <div className="text-sm font-medium mb-4">Loading Table</div>
        <div className="border rounded-lg overflow-hidden w-96">
          <div className="px-4 py-3 border-b bg-muted/50">
            <div className="flex space-x-4">
              <SkeletonText width="60px" size="sm" />
              <SkeletonText width="80px" size="sm" />
              <SkeletonText width="70px" size="sm" />
            </div>
          </div>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="px-4 py-3 border-b last:border-b-0">
              <div className="flex space-x-4">
                <SkeletonText width="60px" size="sm" />
                <SkeletonText width="80px" size="sm" />
                <SkeletonText width="70px" size="sm" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Loading Form */}
      <div>
        <div className="text-sm font-medium mb-4">Loading Form</div>
        <div className="border rounded-lg p-6 w-80">
          <div className="space-y-4">
            <div>
              <SkeletonText width="60px" size="sm" className="mb-2" />
              <Skeleton className="h-10 w-full rounded" />
            </div>
            <div>
              <SkeletonText width="80px" size="sm" className="mb-2" />
              <Skeleton className="h-10 w-full rounded" />
            </div>
            <div>
              <SkeletonText width="70px" size="sm" className="mb-2" />
              <Skeleton className="h-20 w-full rounded" />
            </div>
            <div className="flex justify-end space-x-2 pt-4">
              <Skeleton className="h-10 w-20 rounded" />
              <Skeleton className="h-10 w-16 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
}