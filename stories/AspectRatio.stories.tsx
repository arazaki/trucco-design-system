import type { Meta, StoryObj } from '@storybook/react'
import { AspectRatio } from '@/components/atoms'

const meta: Meta<typeof AspectRatio> = {
  title: 'Atoms/AspectRatio',
  component: AspectRatio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    preset: {
      control: { type: 'select' },
      options: ['square', 'video', 'portrait', 'landscape', 'wide', 'ultrawide'],
    },
    ratio: {
      control: { type: 'number' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const DemoContent = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-full items-center justify-center rounded-md border border-dashed border-border bg-muted text-muted-foreground">
    {children}
  </div>
)

export const Square: Story = {
  args: {
    preset: 'square',
  },
  render: (args) => (
    <div className="w-64">
      <AspectRatio {...args}>
        <DemoContent>1:1 Square</DemoContent>
      </AspectRatio>
    </div>
  ),
}

export const Video: Story = {
  args: {
    preset: 'video',
  },
  render: (args) => (
    <div className="w-80">
      <AspectRatio {...args}>
        <DemoContent>16:9 Video</DemoContent>
      </AspectRatio>
    </div>
  ),
}

export const Portrait: Story = {
  args: {
    preset: 'portrait',
  },
  render: (args) => (
    <div className="w-64">
      <AspectRatio {...args}>
        <DemoContent>3:4 Portrait</DemoContent>
      </AspectRatio>
    </div>
  ),
}

export const Landscape: Story = {
  args: {
    preset: 'landscape',
  },
  render: (args) => (
    <div className="w-80">
      <AspectRatio {...args}>
        <DemoContent>4:3 Landscape</DemoContent>
      </AspectRatio>
    </div>
  ),
}

export const Wide: Story = {
  args: {
    preset: 'wide',
  },
  render: (args) => (
    <div className="w-96">
      <AspectRatio {...args}>
        <DemoContent>21:9 Wide</DemoContent>
      </AspectRatio>
    </div>
  ),
}

export const Ultrawide: Story = {
  args: {
    preset: 'ultrawide',
  },
  render: (args) => (
    <div className="w-96">
      <AspectRatio {...args}>
        <DemoContent>32:9 Ultrawide</DemoContent>
      </AspectRatio>
    </div>
  ),
}

export const CustomRatio: Story = {
  args: {
    ratio: 2.5,
  },
  render: (args) => (
    <div className="w-80">
      <AspectRatio {...args}>
        <DemoContent>Custom 2.5:1 Ratio</DemoContent>
      </AspectRatio>
    </div>
  ),
}

export const WithImage: Story = {
  args: {
    preset: 'video',
  },
  render: (args) => (
    <div className="w-80">
      <AspectRatio {...args}>
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="h-full w-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
}

export const Responsive: Story = {
  args: {
    preset: 'video',
  },
  render: (args) => (
    <div className="w-full max-w-2xl">
      <AspectRatio {...args}>
        <DemoContent>Responsive 16:9 Container</DemoContent>
      </AspectRatio>
    </div>
  ),
}