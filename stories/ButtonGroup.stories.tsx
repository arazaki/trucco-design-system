import type { Meta, StoryObj } from '@storybook/nextjs'
import { ButtonGroup } from '../components/molecules/button-group'
import { Button } from '../components/atoms/button'
import { ChevronLeftIcon, ChevronRightIcon } from '../components/atoms/icons'

const meta = {
  title: 'Molecules/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A container for grouping related buttons with consistent spacing and optional attached styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Layout direction of the button group',
    },
    spacing: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Spacing between buttons',
    },
    attached: {
      control: 'boolean',
      description: 'Whether buttons should be visually connected',
    },
  },
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  args: {
    children: (
      <>
        <Button variant="outline">First</Button>
        <Button variant="outline">Second</Button>
        <Button variant="outline">Third</Button>
      </>
    ),
  },
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    children: (
      <>
        <Button variant="outline">First</Button>
        <Button variant="outline">Second</Button>
        <Button variant="outline">Third</Button>
      </>
    ),
  },
}

export const Attached: Story = {
  args: {
    attached: true,
    spacing: 'none',
    children: (
      <>
        <Button variant="outline">First</Button>
        <Button variant="outline">Second</Button>
        <Button variant="outline">Third</Button>
      </>
    ),
  },
}

export const AttachedVertical: Story = {
  args: {
    orientation: 'vertical',
    attached: true,
    spacing: 'none',
    children: (
      <>
        <Button variant="outline">First</Button>
        <Button variant="outline">Second</Button>
        <Button variant="outline">Third</Button>
      </>
    ),
  },
}

export const MixedVariants: Story = {
  args: {
    children: (
      <>
        <Button variant="primary">Save</Button>
        <Button variant="outline">Cancel</Button>
      </>
    ),
  },
}

export const WithIcons: Story = {
  args: {
    children: (
      <>
        <Button variant="outline" leftIcon={<ChevronLeftIcon />}>
          Previous
        </Button>
        <Button variant="outline" rightIcon={<ChevronRightIcon />}>
          Next
        </Button>
      </>
    ),
  },
}

export const Pagination: Story = {
  args: {
    attached: true,
    spacing: 'none',
    children: (
      <>
        <Button variant="outline" size="sm">
          <ChevronLeftIcon />
        </Button>
        <Button variant="outline" size="sm">1</Button>
        <Button variant="primary" size="sm">2</Button>
        <Button variant="outline" size="sm">3</Button>
        <Button variant="outline" size="sm">4</Button>
        <Button variant="outline" size="sm">5</Button>
        <Button variant="outline" size="sm">
          <ChevronRightIcon />
        </Button>
      </>
    ),
  },
}

export const SpacingVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="mb-2 text-sm font-medium">No Spacing</h3>
        <ButtonGroup spacing="none">
          <Button variant="outline">A</Button>
          <Button variant="outline">B</Button>
          <Button variant="outline">C</Button>
        </ButtonGroup>
      </div>
      
      <div>
        <h3 className="mb-2 text-sm font-medium">Small Spacing</h3>
        <ButtonGroup spacing="sm">
          <Button variant="outline">A</Button>
          <Button variant="outline">B</Button>
          <Button variant="outline">C</Button>
        </ButtonGroup>
      </div>
      
      <div>
        <h3 className="mb-2 text-sm font-medium">Medium Spacing (Default)</h3>
        <ButtonGroup spacing="md">
          <Button variant="outline">A</Button>
          <Button variant="outline">B</Button>
          <Button variant="outline">C</Button>
        </ButtonGroup>
      </div>
      
      <div>
        <h3 className="mb-2 text-sm font-medium">Large Spacing</h3>
        <ButtonGroup spacing="lg">
          <Button variant="outline">A</Button>
          <Button variant="outline">B</Button>
          <Button variant="outline">C</Button>
        </ButtonGroup>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
}