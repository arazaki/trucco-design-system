import type { Meta, StoryObj } from '@storybook/nextjs'
import { Text } from '../components/atoms/text'

const meta = {
  title: 'Atoms/Text',
  component: Text,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible text component with multiple typography variants, alignment options, and semantic HTML element selection.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body', 'bodySmall', 'caption', 'label', 'helper', 'error', 'success', 'warning', 'link', 'muted'],
      description: 'The typography variant',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: 'Text alignment',
    },
    weight: {
      control: 'select',
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
      description: 'Font weight',
    },
    as: {
      control: 'select',
      options: ['p', 'span', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label'],
      description: 'HTML element to render as',
    },
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Body: Story = {
  args: {
    children: 'This is body text with the default styling.',
  },
}

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'This is a large heading',
  },
}

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'This is a section heading',
  },
}

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'This is a subsection heading',
  },
}

export const Label: Story = {
  args: {
    variant: 'label',
    children: 'Form Label',
  },
}

export const HelperText: Story = {
  args: {
    variant: 'helper',
    children: 'This is helper text to provide additional context.',
  },
}

export const ErrorText: Story = {
  args: {
    variant: 'error',
    children: 'This field is required.',
  },
}

export const SuccessText: Story = {
  args: {
    variant: 'success',
    children: 'Form submitted successfully!',
  },
}

export const WarningText: Story = {
  args: {
    variant: 'warning',
    children: 'Please verify your information.',
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'This is a text link',
  },
}

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Small caption text for images or additional details.',
  },
}

export const Muted: Story = {
  args: {
    variant: 'muted',
    children: 'Muted text for less important information.',
  },
}

export const AllHeadings: Story = {
  render: () => (
    <div className="space-y-4">
      <Text variant="h1">Heading 1 - Main Title</Text>
      <Text variant="h2">Heading 2 - Section Title</Text>
      <Text variant="h3">Heading 3 - Subsection Title</Text>
      <Text variant="h4">Heading 4 - Minor Heading</Text>
      <Text variant="h5">Heading 5 - Small Heading</Text>
      <Text variant="h6">Heading 6 - Smallest Heading</Text>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-3 max-w-lg">
      <Text variant="h2">Typography Variants</Text>
      <Text variant="body">Body text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      <Text variant="bodySmall">Small body text - Used for secondary information.</Text>
      <Text variant="caption">Caption text - Very small text for image captions.</Text>
      <Text variant="label">Label text - For form labels</Text>
      <Text variant="helper">Helper text - Additional context for forms</Text>
      <Text variant="error">Error text - Something went wrong</Text>
      <Text variant="success">Success text - Action completed successfully</Text>
      <Text variant="warning">Warning text - Please pay attention</Text>
      <Text variant="link">Link text - Clickable text link</Text>
      <Text variant="muted">Muted text - Less prominent information</Text>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
}

export const TextAlignment: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Text align="left">Left aligned text (default)</Text>
      <Text align="center">Center aligned text</Text>
      <Text align="right">Right aligned text</Text>
      <Text align="justify">Justified text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
}

export const FontWeights: Story = {
  render: () => (
    <div className="space-y-2">
      <Text weight="light">Light weight text</Text>
      <Text weight="normal">Normal weight text (default)</Text>
      <Text weight="medium">Medium weight text</Text>
      <Text weight="semibold">Semibold weight text</Text>
      <Text weight="bold">Bold weight text</Text>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
}