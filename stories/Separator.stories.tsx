import type { Meta, StoryObj } from '@storybook/react'
import { Separator, LabeledSeparator } from '@/components/atoms'

const meta: Meta<typeof Separator> = {
  title: 'Atoms/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error', 'info', 'muted'],
    },
    theme: {
      control: { type: 'select' },
      options: ['semantic', 'red', 'blue', 'purple', 'green'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    separatorStyle: {
      control: { type: 'select' },
      options: ['solid', 'dashed', 'dotted'],
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: (args) => (
    <div className="w-80 space-y-4">
      <div>Content above</div>
      <Separator {...args} />
      <div>Content below</div>
    </div>
  ),
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <div className="flex h-20 items-center space-x-4">
      <div>Left content</div>
      <Separator {...args} />
      <div>Right content</div>
    </div>
  ),
}

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => (
    <div className="w-80 space-y-4">
      <div>Content above</div>
      <Separator {...args} />
      <div>Content below</div>
    </div>
  ),
}

export const Success: Story = {
  args: {
    variant: 'success',
  },
  render: (args) => (
    <div className="w-80 space-y-4">
      <div>Content above</div>
      <Separator {...args} />
      <div>Content below</div>
    </div>
  ),
}

export const Error: Story = {
  args: {
    variant: 'error',
  },
  render: (args) => (
    <div className="w-80 space-y-4">
      <div>Content above</div>
      <Separator {...args} />
      <div>Content below</div>
    </div>
  ),
}

export const Thick: Story = {
  args: {
    size: 'xl',
    variant: 'primary',
  },
  render: (args) => (
    <div className="w-80 space-y-4">
      <div>Content above</div>
      <Separator {...args} />
      <div>Content below</div>
    </div>
  ),
}

export const Dashed: Story = {
  args: {
    separatorStyle: 'dashed',
    variant: 'primary',
  },
  render: (args) => (
    <div className="w-80 space-y-4">
      <div>Content above</div>
      <Separator {...args} />
      <div>Content below</div>
    </div>
  ),
}

export const Dotted: Story = {
  args: {
    separatorStyle: 'dotted',
    variant: 'secondary',
  },
  render: (args) => (
    <div className="w-80 space-y-4">
      <div>Content above</div>
      <Separator {...args} />
      <div>Content below</div>
    </div>
  ),
}

export const CustomTheme: Story = {
  args: {
    theme: 'purple',
    variant: 'primary',
  },
  render: (args) => (
    <div className="w-80 space-y-4">
      <div>Content above</div>
      <Separator {...args} />
      <div>Content below</div>
    </div>
  ),
}

// LabeledSeparator Stories
export const WithLabel: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div>Content above</div>
      <LabeledSeparator label="OR" />
      <div>Content below</div>
    </div>
  ),
}

export const LabelLeft: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div>Content above</div>
      <LabeledSeparator label="Options" labelPosition="left" />
      <div>Content below</div>
    </div>
  ),
}

export const LabelRight: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div>Content above</div>
      <LabeledSeparator label="More" labelPosition="right" />
      <div>Content below</div>
    </div>
  ),
}

export const LabelWithVariant: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div>Content above</div>
      <LabeledSeparator label="Success" variant="success" />
      <div>Content below</div>
    </div>
  ),
}