# Storybook Implementation Guide for Claude

## Overview and Purpose

Storybook is a frontend workshop for building UI components and pages in isolation. For the Trucco design system, it serves as both a development tool and living documentation platform that allows developers to:

- **Explore components** interactively with different props and states
- **Document component APIs** automatically through TypeScript integration
- **Test component behavior** across different scenarios
- **Maintain design consistency** through visual regression testing
- **Share components** with team members and stakeholders

## Next.js Integration Architecture

### Framework Configuration

The Trucco design system uses `@storybook/nextjs` which provides seamless integration with Next.js features:

```typescript
// .storybook/main.ts
export default {
  framework: '@storybook/nextjs',
  features: {
    appDirectory: true, // Enable App Router support
  },
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds',
  ],
}
```

**Key Benefits for Design Systems:**
- **Automatic TypeScript extraction**: Component props become interactive controls
- **Next.js compatibility**: Works with Next.js Image, fonts, and routing
- **CSS support**: Handles Tailwind CSS and custom stylesheets
- **Import resolution**: Supports absolute imports and path mapping

### Trucco-Specific Setup

```typescript
// .storybook/preview.ts
import '../app/globals.css' // Tailwind + design tokens
import { ThemeProvider } from '../components'

const preview = {
  decorators: [
    (Story, context) => (
      <ThemeProvider 
        defaultTheme={context.globals.theme || 'light'}
        customTokens={context.parameters.customTokens}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#111827' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Design system theme',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
          { value: 'auto', title: 'Auto' },
        ],
      },
    },
  },
}

export default preview
```

## Story Writing Patterns and Best Practices

### Component Story Format (CSF) Structure

For Trucco components, follow this consistent pattern:

```typescript
import type { Meta, StoryObj } from '@storybook/nextjs'
import { Button } from '../components/ui/button'

// Meta configuration defines component-level settings
const meta = {
  title: 'Components/Button', // Hierarchical organization
  component: Button,
  parameters: {
    layout: 'centered', // Center component in canvas
    docs: {
      description: {
        component: 'A versatile button component with multiple variants, sizes, and interaction states. Part of the Trucco design system.',
      },
    },
  },
  tags: ['autodocs'], // Enable automatic documentation
  argTypes: {
    // Define interactive controls
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'outline', 'ghost', 'link'],
      description: 'Visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'icon'],
      description: 'Size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button when true',
    },
    loading: {
      control: 'boolean',
      description: 'Shows loading spinner when true',
    },
  },
  args: {
    // Default arguments for all stories
    children: 'Button',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// Individual stories demonstrate specific use cases
export const Primary: Story = {
  args: {
    variant: 'primary',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available button variants displayed together for comparison.',
      },
    },
  },
}
```

### Naming Conventions for Design Systems

**File Organization:**
```
stories/
├── Button.stories.ts          # Core UI components
├── Input.stories.ts
├── Foundations/               # Design tokens and foundations
│   ├── Colors.stories.ts
│   ├── Typography.stories.ts
│   └── Spacing.stories.ts
└── Examples/                  # Real-world usage examples
    ├── LoginForm.stories.ts
    └── Dashboard.stories.ts
```

**Story Naming Patterns:**
- **Primary/Secondary/Tertiary**: For main variants
- **Small/Medium/Large**: For size variations
- **Default/Loading/Disabled**: For states
- **WithIcon/WithLabel**: For composition patterns
- **AllVariants/Showcase**: For comprehensive displays

## Args and Controls Configuration

### TypeScript-Driven Controls

Storybook automatically generates controls from TypeScript interfaces:

```typescript
// Component interface (Enhanced with shadcn/ui integration)
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost' | 'link' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'icon'
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  children: React.ReactNode
  className?: string
  asChild?: boolean // shadcn/ui Slot support
}

// Storybook automatically creates:
// - Select control for variant (from union type)
// - Select control for size (from union type)  
// - Boolean controls for disabled/loading
// - Text control for children
```

### Custom Control Configuration

For design system components, enhance controls with better UX:

```typescript
const meta = {
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'outline', 'ghost', 'link'],
      description: 'Visual style variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'radio', // Better UX for limited options
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Button size',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for customization',
    },
    leftIcon: {
      control: false, // Disable control for complex props
      description: 'Icon component to display on the left',
    },
  },
}
```

### Conditional Controls

For advanced component APIs:

```typescript
const meta = {
  component: Input,
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
      description: 'Input type',
    },
    error: {
      control: 'text',
      description: 'Error message (overrides variant)',
      if: { arg: 'variant', neq: 'success' }, // Conditional display
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below input',
      if: { arg: 'error', exists: false }, // Show only when no error
    },
  },
}
```

## Documentation and Autodocs Integration

### Automatic Documentation Generation

Enable comprehensive auto-documentation:

```typescript
const meta = {
  component: Button,
  tags: ['autodocs'], // Generates documentation page
  parameters: {
    docs: {
      description: {
        component: `
          The Button component is a fundamental interactive element in the Trucco design system.
          
          ## Features
          - Multiple visual variants following the three-tier color hierarchy
          - Responsive size options with consistent scaling
          - Loading and disabled states
          - Icon support for enhanced UX
          - Full accessibility support with proper ARIA attributes
          
          ## Usage Guidelines
          - Use \`primary\` for main actions
          - Use \`secondary\` for supporting actions  
          - Use \`tertiary\` for subtle actions
          - Use \`outline\` or \`ghost\` for less prominent actions
        `,
      },
      // Control autodocs behavior
      source: {
        type: 'code', // Show source code
      },
    },
  },
}
```

### Custom Documentation Blocks

For design system foundations:

```typescript
// Colors.stories.ts
import type { Meta, StoryObj } from '@storybook/nextjs'
import { defaultTokens } from '../lib/themes/tokens'

const meta = {
  title: 'Design System/Foundations/Colors',
  parameters: {
    docs: {
      description: {
        component: `
          The Trucco color system implements a three-tier hierarchy with semantic variations.
          Each color scale provides 11 shades (50-950) for comprehensive design flexibility.
        `,
      },
    },
  },
} satisfies Meta

export const ColorPalette: StoryObj = {
  render: () => (
    <div className="space-y-8">
      {Object.entries(defaultTokens.colors).map(([name, scale]) => (
        <div key={name}>
          <h3 className="text-lg font-semibold mb-4 capitalize">{name}</h3>
          <div className="grid grid-cols-11 gap-2">
            {typeof scale === 'object' && 'primary' in scale ? (
              // Handle nested color objects
              <div className="col-span-11 text-sm">Complex color structure</div>
            ) : (
              Object.entries(scale as any).map(([shade, color]) => (
                <div key={shade} className="text-center">
                  <div 
                    className="w-12 h-12 rounded mb-2 border"
                    style={{ backgroundColor: color }}
                  />
                  <div className="text-xs">{shade}</div>
                  <div className="text-xs font-mono">{color}</div>
                </div>
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete color palette showing all available colors and shades.',
      },
    },
  },
}

export default meta
```

## Decorators for Consistent Context

### Theme Provider Decorator

Essential for design system components:

```typescript
// Global decorator for all stories
const withTheme = (Story: any, context: any) => {
  const theme = context.globals.theme || 'light'
  const customTokens = context.parameters.customTokens || {}
  
  return (
    <ThemeProvider defaultTheme={theme} customTokens={customTokens}>
      <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
        <Story />
      </div>
    </ThemeProvider>
  )
}

// Component-specific decorator for layout
const withContainer = (Story: any) => (
  <div className="max-w-md mx-auto p-4">
    <Story />
  </div>
)

const meta = {
  component: Card,
  decorators: [withContainer], // Apply to all Card stories
}
```

### Responsive Testing Decorator

For responsive design verification:

```typescript
const withResponsiveWrapper = (Story: any, context: any) => {
  const viewport = context.parameters.viewport
  
  return (
    <div 
      className="border-2 border-dashed border-gray-300 p-4"
      style={{ 
        width: viewport?.width || '100%',
        maxWidth: viewport?.maxWidth || 'none'
      }}
    >
      <Story />
    </div>
  )
}
```

## Advanced Story Patterns

### Play Functions for Interaction Testing

Test component behavior programmatically:

```typescript
import { expect, userEvent, within } from '@storybook/test'

export const InteractionTest: Story = {
  args: {
    variant: 'primary',
    children: 'Click me',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: /click me/i })
    
    // Test initial state
    expect(button).toBeInTheDocument()
    expect(button).not.toBeDisabled()
    
    // Test interaction
    await userEvent.click(button)
    
    // Verify button was clicked (assuming onClick handler)
    // This would be connected to args.onClick in a real scenario
  },
}
```

### Component Composition Stories

Show real-world usage patterns:

```typescript
export const LoginForm: Story = {
  render: () => (
    <form className="space-y-4 max-w-sm mx-auto">
      <Input 
        label="Email" 
        type="email"
        placeholder="Enter your email"
        leftIcon={<MailIcon />}
      />
      <Input 
        label="Password" 
        type="password"
        placeholder="Enter your password"
        leftIcon={<LockIcon />}
      />
      <Button variant="primary" size="lg" fullWidth>
        Sign In
      </Button>
      <Button variant="ghost" size="md" fullWidth>
        Create Account
      </Button>
    </form>
  ),
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'Example login form showing component composition and real-world usage.',
      },
    },
  },
}
```

### Variant Matrix Stories

Comprehensive variant testing:

```typescript
export const VariantMatrix: Story = {
  render: () => {
    const variants = ['primary', 'secondary', 'tertiary', 'outline', 'ghost']
    const sizes = ['sm', 'md', 'lg', 'xl']
    
    return (
      <div className="space-y-6">
        {variants.map(variant => (
          <div key={variant} className="space-y-2">
            <h3 className="text-sm font-semibold capitalize">{variant}</h3>
            <div className="flex items-center gap-4">
              {sizes.map(size => (
                <Button key={size} variant={variant} size={size}>
                  {size.toUpperCase()}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Matrix showing all variant and size combinations for comprehensive testing.',
      },
    },
  },
}
```

## Parameters for Story Configuration

### Layout and Presentation

```typescript
// Component-level parameters
const meta = {
  component: Button,
  parameters: {
    layout: 'centered', // 'centered' | 'fullscreen' | 'padded'
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#111827' },
        { name: 'brand', value: '#3b82f6' },
      ],
    },
    docs: {
      canvas: {
        story: { height: '200px' }, // Custom canvas height
      },
    },
  },
}

// Story-level parameters
export const OnDarkBackground: Story = {
  args: {
    variant: 'primary',
    children: 'Button on Dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}
```

### Custom Theme Testing

```typescript
export const CustomTheme: Story = {
  parameters: {
    customTokens: {
      colors: {
        primary: {
          500: '#ff6b6b', // Custom red primary
          600: '#ee5a52',
          700: '#dc4c47',
        }
      }
    },
  },
  args: {
    variant: 'primary',
    children: 'Custom Themed Button',
  },
}
```

## Testing Integration Patterns

### Accessibility Testing

```typescript
import { expect } from '@storybook/test'

export const AccessibilityTest: Story = {
  args: {
    variant: 'primary',
    children: 'Accessible Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')
    
    // Test accessibility attributes
    expect(button).toHaveAttribute('type', 'button')
    expect(button).not.toHaveAttribute('aria-disabled', 'true')
    
    // Test keyboard navigation
    button.focus()
    expect(button).toHaveFocus()
  },
}
```

### Visual Regression Testing

```typescript
// Configure for visual testing tools
export const VisualRegression: Story = {
  args: {
    variant: 'primary',
    children: 'Visual Test Button',
  },
  parameters: {
    // Configure for Chromatic or other visual testing tools
    chromatic: {
      viewports: [320, 768, 1200], // Test multiple viewports
      delay: 300, // Wait for animations
    },
  },
}
```

## Organization and Maintenance Best Practices

### Story Organization Structure

```
stories/
├── Components/           # Individual components
│   ├── Button.stories.ts
│   ├── Input.stories.ts
│   └── Card.stories.ts
├── Foundations/          # Design tokens
│   ├── Colors.stories.ts
│   ├── Typography.stories.ts
│   └── Spacing.stories.ts
├── Patterns/            # Common patterns
│   ├── Forms.stories.ts
│   └── Navigation.stories.ts
└── Examples/            # Real-world examples
    ├── LoginForm.stories.ts
    └── Dashboard.stories.ts
```

### Maintenance Guidelines

1. **Keep Stories Updated**: Update stories when component APIs change
2. **Test Edge Cases**: Include error states, loading states, and edge cases
3. **Document Variants**: Provide clear descriptions for each variant and use case
4. **Accessibility First**: Test and document accessibility features
5. **Performance**: Monitor story load times and optimize as needed
6. **Consistency**: Maintain consistent naming and organization patterns
7. **Real-world Examples**: Include practical usage examples
8. **Visual Testing**: Implement visual regression testing for consistency

### Integration with Design System Workflow

1. **Component Development**: Create stories during component development
2. **Design Review**: Use Storybook for design system reviews
3. **Documentation**: Maintain Storybook as living documentation
4. **Testing**: Integrate with CI/CD for automated testing
5. **Sharing**: Publish Storybook for team and stakeholder access
6. **Feedback Loop**: Use Storybook for gathering feedback and iteration

This comprehensive approach ensures that Storybook serves as both an effective development tool and comprehensive documentation platform for the Trucco design system, enabling efficient component development and consistent usage across projects.