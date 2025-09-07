import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Combobox, EnhancedCombobox } from '@/components/organisms'

const meta: Meta<typeof Combobox> = {
  title: 'Organisms/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt.js', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'react', label: 'React' },
  { value: 'angular', label: 'Angular' },
]

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('')
    
    return (
      <div className="w-64">
        <Combobox
          options={frameworks}
          value={value}
          onValueChange={setValue}
          placeholder="Select framework..."
          searchPlaceholder="Search frameworks..."
        />
      </div>
    )
  },
}

export const Enhanced: Story = {
  render: () => {
    const [value, setValue] = useState('')
    
    return (
      <div className="w-64">
        <EnhancedCombobox
          label="Framework"
          description="Choose your preferred frontend framework"
          options={frameworks}
          value={value}
          onValueChange={setValue}
          placeholder="Select framework..."
          searchPlaceholder="Search frameworks..."
          required
        />
      </div>
    )
  },
}

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState('')
    
    return (
      <div className="w-64">
        <EnhancedCombobox
          label="Framework"
          options={frameworks}
          value={value}
          onValueChange={setValue}
          placeholder="Select framework..."
          error="Please select a framework"
          required
        />
      </div>
    )
  },
}

export const Disabled: Story = {
  render: () => (
    <div className="w-64">
      <Combobox
        options={frameworks}
        placeholder="Select framework..."
        disabled
      />
    </div>
  ),
}

const countries = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'mx', label: 'Mexico' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'fr', label: 'France' },
  { value: 'de', label: 'Germany' },
  { value: 'it', label: 'Italy' },
  { value: 'es', label: 'Spain' },
  { value: 'jp', label: 'Japan' },
  { value: 'kr', label: 'South Korea' },
  { value: 'cn', label: 'China' },
  { value: 'au', label: 'Australia' },
  { value: 'br', label: 'Brazil' },
  { value: 'in', label: 'India' },
]

export const LargeList: Story = {
  render: () => {
    const [value, setValue] = useState('')
    
    return (
      <div className="w-64">
        <EnhancedCombobox
          label="Country"
          description="Select your country"
          options={countries}
          value={value}
          onValueChange={setValue}
          placeholder="Select country..."
          searchPlaceholder="Search countries..."
          emptyText="No country found."
        />
      </div>
    )
  },
}