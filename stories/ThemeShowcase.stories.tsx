import type { Meta, StoryObj } from '@storybook/nextjs'
import { Button } from '../components/atoms/button'
import { Input, Textarea } from '../components/atoms/input'
import { Text } from '../components/atoms/text'
import { SearchField } from '../components/molecules/search-field'
import { FormGroup } from '../components/molecules/form-group'
import { ButtonGroup } from '../components/molecules/button-group'
import { PlusIcon, SearchIcon, ChevronRightIcon } from '../components/atoms/icons'

const meta = {
  title: 'Themes/Showcase',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Theme Showcase

This story demonstrates how components appear with different theme presets. Use the **Theme** toolbar at the top to switch between:

- 🔵 **Default**: Modern, versatile, professional
- ⚪ **Minimal**: Clean, subtle, refined  
- 🟣 **Vibrant**: Bold, energetic, creative
- 🔷 **Corporate**: Professional, trustworthy, reliable
- ⚫ **Dark**: Modern dark mode with proper contrast

Each theme includes a complete design token system with colors, typography, spacing, and shadows carefully crafted for that aesthetic.
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const AllComponents: Story = {
  render: () => (
    <div className="space-y-8 w-full max-w-4xl">
      {/* Typography Section */}
      <section className="space-y-4">
        <Text variant="h2">Typography Showcase</Text>
        <div className="space-y-2">
          <Text variant="h1">Heading 1 - Main Title</Text>
          <Text variant="h2">Heading 2 - Section Title</Text>
          <Text variant="h3">Heading 3 - Subsection Title</Text>
          <Text variant="body">
            Body text - This demonstrates how the selected theme affects text appearance, 
            font families, and color contrast. Each theme provides a unique typographic personality.
          </Text>
          <Text variant="bodySmall">Small body text for secondary information and captions.</Text>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="space-y-4">
        <Text variant="h3">Button Variants</Text>
        <div className="grid grid-cols-3 gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="error">Error</Button>
        </div>
        
        <div className="space-y-3">
          <Text variant="h4">Button Sizes</Text>
          <div className="flex gap-3 items-end">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>
        </div>
        
        <div className="space-y-3">
          <Text variant="h4">Button States</Text>
          <div className="flex gap-3">
            <Button variant="primary" loading>Loading</Button>
            <Button variant="primary" disabled>Disabled</Button>
            <Button leftIcon={<PlusIcon />}>With Icon</Button>
            <Button variant="outline" rightIcon={<ChevronRightIcon />}>Continue</Button>
          </div>
        </div>
      </section>

      {/* Form Elements Section */}
      <section className="space-y-4">
        <Text variant="h3">Form Elements</Text>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input 
            label="Email Address" 
            placeholder="Enter your email"
            type="email"
          />
          <Input 
            label="Full Name" 
            placeholder="Enter your full name"
          />
        </div>
        <Textarea 
          label="Message" 
          placeholder="Enter your message..."
          rows={3}
        />
        <SearchField 
          placeholder="Search components..."
        />
      </section>

      {/* Complex Components Section */}
      <section className="space-y-4">
        <Text variant="h3">Complex Components</Text>
        
        <FormGroup
          label="Account Settings"
          helperText="Configure your account preferences and notification settings."
        >
          <div className="space-y-4">
            <Input label="Username" placeholder="johndoe" />
            <div className="grid grid-cols-2 gap-4">
              <Input label="First Name" placeholder="John" />
              <Input label="Last Name" placeholder="Doe" />
            </div>
          </div>
        </FormGroup>

        <div className="space-y-3">
          <Text variant="h4">Button Groups</Text>
          <ButtonGroup>
            <Button variant="outline">Left</Button>
            <Button variant="outline">Center</Button>
            <Button variant="outline">Right</Button>
          </ButtonGroup>
        </div>
      </section>

      {/* Color Palette Preview */}
      <section className="space-y-4">
        <Text variant="h3">Color System</Text>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <Text variant="label" className="mb-2 block">Primary & Interactive</Text>
            <div className="space-y-2">
              <div className="flex gap-2 items-center">
                <div
                  className="w-8 h-8 rounded border"
                  style={{ 
                    backgroundColor: 'var(--primary-subtle)',
                    borderColor: 'var(--border)'
                  }}
                />
                <Text variant="bodySmall">Primary Subtle</Text>
              </div>
              <div className="flex gap-2 items-center">
                <div
                  className="w-8 h-8 rounded border"
                  style={{ 
                    backgroundColor: 'var(--primary)',
                    borderColor: 'var(--border)'
                  }}
                />
                <Text variant="bodySmall">Primary</Text>
              </div>
              <div className="flex gap-2 items-center">
                <div
                  className="w-8 h-8 rounded border"
                  style={{ 
                    backgroundColor: 'var(--primary-emphasis)',
                    borderColor: 'var(--border)'
                  }}
                />
                <Text variant="bodySmall">Primary Emphasis</Text>
              </div>
            </div>
          </div>
          
          <div>
            <Text variant="label" className="mb-2 block">Surface & Text</Text>
            <div className="space-y-2">
              <div className="flex gap-2 items-center">
                <div
                  className="w-8 h-8 rounded border bg-background"
                  style={{ 
                    borderColor: 'var(--border)'
                  }}
                />
                <Text variant="bodySmall">Background</Text>
              </div>
              <div className="flex gap-2 items-center">
                <div
                  className="w-8 h-8 rounded border bg-secondary"
                  style={{ 
                    borderColor: 'var(--border)'
                  }}
                />
                <Text variant="bodySmall">Secondary Surface</Text>
              </div>
              <div className="flex gap-2 items-center">
                <div
                  className="w-8 h-8 rounded border bg-accent"
                  style={{ 
                    borderColor: 'var(--border)'
                  }}
                />
                <Text variant="bodySmall">Accent</Text>
              </div>
            </div>
          </div>

          <div>
            <Text variant="label" className="mb-2 block">Semantic Feedback</Text>
            <div className="space-y-2">
              <div className="flex gap-2 items-center">
                <div
                  className="w-8 h-8 rounded border"
                  style={{ 
                    backgroundColor: 'var(--success)',
                    borderColor: 'var(--border)'
                  }}
                />
                <Text variant="bodySmall">Success</Text>
              </div>
              <div className="flex gap-2 items-center">
                <div
                  className="w-8 h-8 rounded border"
                  style={{ 
                    backgroundColor: 'var(--warning)',
                    borderColor: 'var(--border)'
                  }}
                />
                <Text variant="bodySmall">Warning</Text>
              </div>
              <div className="flex gap-2 items-center">
                <div
                  className="w-8 h-8 rounded border bg-destructive"
                  style={{ 
                    borderColor: 'var(--border)'
                  }}
                />
                <Text variant="bodySmall">Error</Text>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shadow & Radius Showcase */}
      <section className="space-y-4">
        <Text variant="h3">Shadows & Border Radius</Text>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div 
            className="p-4 bg-background border text-center"
            style={{ 
              borderColor: 'var(--border)',
              borderRadius: 'var(--radius-sm)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <Text variant="bodySmall">Small Shadow</Text>
          </div>
          <div 
            className="p-4 bg-background border text-center"
            style={{ 
              borderColor: 'var(--border)',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <Text variant="bodySmall">Medium Shadow</Text>
          </div>
          <div 
            className="p-4 bg-background border text-center"
            style={{ 
              borderColor: 'var(--border)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <Text variant="bodySmall">Large Shadow</Text>
          </div>
          <div 
            className="p-4 bg-background border text-center"
            style={{ 
              borderColor: 'var(--border)',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-xl)'
            }}
          >
            <Text variant="bodySmall">XL Shadow</Text>
          </div>
        </div>
      </section>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
}

export const ButtonShowcase: Story = {
  render: () => (
    <div className="space-y-6">
      <Text variant="h2">Button Theme Variations</Text>
      <Text variant="body">
        See how button variants adapt to different themes. Notice the color changes, 
        typography, border radius, and shadow effects.
      </Text>
      
      <div className="grid grid-cols-3 gap-4">
        <Button variant="primary" size="lg">Primary</Button>
        <Button variant="secondary" size="lg">Secondary</Button>
        <Button variant="tertiary" size="lg">Tertiary</Button>
        <Button variant="outline" size="lg">Outline</Button>
        <Button variant="ghost" size="lg">Ghost</Button>
        <Button variant="link" size="lg">Link</Button>
        <Button variant="success" size="lg">Success</Button>
        <Button variant="warning" size="lg">Warning</Button>
        <Button variant="error" size="lg">Error</Button>
      </div>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
}

export const FormShowcase: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-md">
      <Text variant="h2">Form Theme Variations</Text>
      <Text variant="body">
        Form elements adapt their appearance based on the selected theme,
        including input styles, focus states, and typography.
      </Text>
      
      <div className="space-y-4">
        <Input 
          label="Email Address" 
          placeholder="Enter your email"
          type="email"
        />
        <Input 
          label="Password" 
          placeholder="Enter your password"
          type="password"
        />
        <Textarea 
          label="Bio" 
          placeholder="Tell us about yourself..."
          rows={4}
        />
        <SearchField 
          placeholder="Search anything..."
        />
        <div className="flex gap-3">
          <Button variant="primary" fullWidth>Submit</Button>
          <Button variant="outline" fullWidth>Cancel</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
}

export const TypographyShowcase: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-2xl">
      <Text variant="h2">Typography Theme Variations</Text>
      <Text variant="body">
        Each theme includes carefully selected font families, sizes, weights, and colors
        that create a cohesive typographic hierarchy.
      </Text>
      
      <div className="space-y-4">
        <Text variant="h1">The Five Boxing Wizards</Text>
        <Text variant="h2">Jump Quickly Over</Text>
        <Text variant="h3">The Lazy Brown Fox</Text>
        <Text variant="h4">Amazingly Few Discotheques</Text>
        <Text variant="h5">Provide Jukeboxes</Text>
        <Text variant="h6">For Energetic Dancing</Text>
        
        <div className="pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
          <Text variant="body">
            This is body text that demonstrates the reading experience with the current theme.
            The font family, size, line height, and color are all optimized for readability
            and visual hierarchy. Notice how different themes create different moods and personalities.
          </Text>
          <Text variant="bodySmall" className="mt-2">
            This is small body text, perfect for secondary information, captions, and metadata.
          </Text>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
}