import type { Meta, StoryObj } from '@storybook/nextjs'
import { fn } from 'storybook/test'
import { SearchField } from '../components/molecules/search-field'

const meta = {
  title: 'Molecules/SearchField',
  component: SearchField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A search input field with built-in search icon and optional clear button. Combines Input atom with search-specific functionality.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error', 'ghost'],
      description: 'The visual style variant of the search field',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'The size of the search field',
    },
    showClearButton: {
      control: 'boolean',
      description: 'Show clear button when there is text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the search field when true',
    },
  },
  args: {
    onSearch: fn(),
    onClear: fn(),
  },
} satisfies Meta<typeof SearchField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Search...',
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Search Products',
    placeholder: 'Enter product name...',
  },
}

export const Small: Story = {
  args: {
    placeholder: 'Quick search...',
  },
}

export const Large: Story = {
  args: {
    placeholder: 'Search for anything...',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'default',
    placeholder: 'Search...',
  },
}

export const WithoutClearButton: Story = {
  args: {
    placeholder: 'Search...',
    showClearButton: false,
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Search disabled...',
    disabled: true,
  },
}

export const WithHelperText: Story = {
  args: {
    label: 'Search',
    placeholder: 'Type to search...',
    helperText: 'Search across all products and categories',
  },
}

export const WithValue: Story = {
  args: {
    placeholder: 'Search...',
    defaultValue: 'example search',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <SearchField placeholder="Small search" />
      <SearchField placeholder="Medium search" />
      <SearchField placeholder="Large search" />
      <SearchField placeholder="Extra large search" />
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <SearchField variant="default" placeholder="Default search" />
      <SearchField variant="success" placeholder="Success search" />
      <SearchField variant="warning" placeholder="Warning search" />
      <SearchField variant="error" placeholder="Error search" />
      <SearchField variant="default" placeholder="Default search" />
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
}