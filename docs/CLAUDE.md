# Trucco Design System - Claude Documentation

## Overview

Trucco is a flexible, theme-driven design system built on Next.js and Tailwind CSS with shadcn/ui integration. It provides reusable components with consistent design patterns, configurable theming, runtime theme switching capabilities, and enhanced accessibility through proven shadcn/ui patterns.

## Technology Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Component Foundation**: shadcn/ui components with Trucco enhancements
- **Component Variants**: class-variance-authority (CVA)
- **Utilities**: clsx + tailwind-merge for class merging
- **Accessibility**: Radix UI primitives via shadcn/ui
- **Icons**: @radix-ui/react-slot for flexible composition
- **Documentation**: Storybook for component showcase

## Architecture

### Design Token System

The design system uses a comprehensive token system defined in `/lib/themes/tokens.ts`:

```typescript
interface DesignTokens {
  colors: ThemeColors;      // Primary, secondary, tertiary + semantic colors
  spacing: SpacingTokens;   // xs, sm, md, lg, xl, 2xl, 3xl, 4xl
  typography: TypographyTokens; // Font families, sizes, weights
  radius: RadiusTokens;     // Border radius variants
  shadows: ShadowTokens;    // Shadow depth levels
}
```

### Color Hierarchy

The system implements a three-level color hierarchy:
- **Primary**: Main brand color (blue scale)
- **Secondary**: Supporting brand color (purple scale)
- **Tertiary**: Accent color (green scale)

Each color has an 11-step scale (50-950) from lightest to darkest.

### Theme System

**Runtime Theme Switching**: Supports light/dark mode with auto-detection:
```tsx
import { ThemeProvider, useTheme } from '@/components'

// Wrap your app
<ThemeProvider defaultTheme="auto" customTokens={yourTokens}>
  {children}
</ThemeProvider>

// Use in components
const { theme, setTheme, tokens } = useTheme()
```

**CSS Variables**: All tokens are exposed as CSS custom properties:
```css
--color-primary-500: #3b82f6;
--spacing-md: 1rem;
--radius-lg: 0.5rem;
```

## Available Components

### Button Component (`/components/atoms/button.tsx`)

**shadcn/ui Enhanced Button**: Wraps shadcn Button with Trucco's design system enhancements.

**Props Interface**:
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost' | 'link' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'icon'
  fullWidth?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  asChild?: boolean  // Renders as Slot for composition
  className?: string // Override/extend styles
}
```

**Architecture**: 
- Built on shadcn/ui Button foundation for proven accessibility and performance
- Variant mapping system translates Trucco variants to shadcn variants
- Enhanced with Trucco's semantic color system and loading states
- Maintains full shadcn/ui API compatibility

**Usage Examples**:
```tsx
// Basic usage
<Button variant="primary" size="md">Click me</Button>

// With icons
<Button leftIcon={<PlusIcon />} rightIcon={<ArrowIcon />}>
  Add Item
</Button>

// Loading state
<Button loading>Saving...</Button>

// Custom styling
<Button className="custom-override">Custom Button</Button>

// As different element
<Button asChild>
  <a href="/link">Link Button</a>
</Button>
```

**Variant Behavior**:
- **primary/secondary/tertiary**: Colored backgrounds with white text
- **outline**: Transparent with colored border
- **ghost**: Transparent with hover background
- **link**: Text-only with underline
- **success/warning/error**: Semantic color variants

### Input Component (`/components/atoms/input.tsx`)

**shadcn/ui Enhanced Input**: Wraps shadcn Input with Trucco's enhanced features and semantic theming.

**Props Interface**:
```typescript
interface InputProps {
  variant?: 'default' | 'success' | 'warning' | 'error'
  theme?: 'semantic' | 'red' | 'blue' | 'purple' | 'green'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  label?: string
  helperText?: string
  error?: string
  fullWidth?: boolean
  className?: string
}

interface TextareaProps {
  variant?: 'default' | 'success' | 'warning' | 'error'
  theme?: 'semantic' | 'red' | 'blue' | 'purple' | 'green'
  label?: string
  helperText?: string
  error?: string
  fullWidth?: boolean
  className?: string
}
```

**Architecture**:
- Built on shadcn/ui Input foundation with enhanced wrapper
- Automatic label, helper text, and error message handling
- Icon support with proper positioning and accessibility
- Semantic theme variants for different contexts
- Auto-generated IDs for proper label association

**Usage Examples**:
```tsx
// Basic input
<Input placeholder="Enter text..." />

// With label and helper text
<Input 
  label="Email" 
  placeholder="Enter email"
  helperText="We'll never share your email"
/>

// Error state (automatically sets variant to 'error')
<Input 
  label="Password"
  error="Password is required"
  type="password"
/>

// With icons
<Input 
  leftIcon={<SearchIcon />}
  placeholder="Search..."
/>

// Textarea variant
<Textarea 
  label="Message"
  placeholder="Enter your message..."
  rows={4}
/>
```

**State Management**:
- Error state automatically overrides variant
- Proper ARIA attributes for accessibility
- Auto-generated IDs for label association

## shadcn/ui Integration Architecture

### CSS Variable Bridge System

Trucco maintains compatibility with shadcn/ui through an automatic CSS variable mapping system:

```css
/* Automatic mapping in globals.css */
:root {
  /* shadcn semantic variables mapped to Trucco tokens */
  --background: var(--surface);
  --foreground: var(--text-primary);
  --primary: var(--primary-600);
  --primary-foreground: var(--text-on-primary);
  --secondary: var(--secondary-100);
  --secondary-foreground: var(--secondary-900);
  --muted: var(--neutral-100);
  --muted-foreground: var(--neutral-500);
  --destructive: var(--error);
  --destructive-foreground: var(--text-on-error);
  --border: var(--border-primary);
  --ring: var(--primary-500);
}
```

### Component Wrapping Strategy

**Enhanced Components**: Trucco components wrap shadcn/ui components to provide:
- **Semantic Theming**: Additional theme variants beyond shadcn defaults
- **Enhanced APIs**: More props for common use cases (icons, loading states)
- **Design System Integration**: Automatic integration with Trucco's token system
- **Backward Compatibility**: Full shadcn/ui API preservation

**Example - Button Integration**:
```typescript
// Enhanced Button wraps shadcn Button
import { Button as ShadcnButton } from '@/components/ui/button'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', ...props }, ref) => {
    // Map Trucco variants to shadcn variants
    const variantMapping = {
      primary: 'default',
      secondary: 'secondary',
      tertiary: 'outline',
      success: 'default', // Uses theme override
      warning: 'default', // Uses theme override
      error: 'destructive',
    } as const

    return (
      <ShadcnButton
        ref={ref}
        variant={variantMapping[variant] || 'default'}
        className={cn(truccoButtonVariants({ variant }), className)}
        {...props}
      />
    )
  }
)
```

### Theme System Integration

**Runtime Theme Switching** with shadcn compatibility:
```typescript
// ThemeProvider handles both systems
<ThemeProvider defaultTheme="auto" customTokens={customTokens}>
  {/* Both Trucco and shadcn components work seamlessly */}
  <Button variant="primary">Trucco Button</Button>
  <ShadcnButton variant="default">shadcn Button</ShadcnButton>
</ThemeProvider>
```

### Accessibility Inheritance

All Trucco components inherit shadcn/ui's proven accessibility patterns:
- **Keyboard Navigation**: Full keyboard support via Radix UI primitives
- **Screen Reader Support**: Proper ARIA attributes and semantic HTML
- **Focus Management**: Consistent focus styles and behavior
- **Color Contrast**: WCAG-compliant color combinations

## Tailwind CSS Integration

### Utility-First Approach

Trucco leverages Tailwind's utility-first methodology:

```tsx
// ✅ Compose utilities for custom styling
<Button className="shadow-lg hover:shadow-xl transform hover:scale-105">
  Enhanced Button
</Button>

// ✅ Responsive variants
<Button className="w-full md:w-auto lg:px-8">
  Responsive Button
</Button>

// ✅ State variants
<Button className="hover:bg-primary-600 focus:ring-4 focus:ring-primary-200">
  Interactive Button
</Button>
```

### Theme Customization

**CSS Layer System**:
```css
@layer base {
  /* Base element styles */
}

@layer components {
  /* Reusable component classes */
}

@layer utilities {
  /* Custom utilities */
}
```

**Custom Design Tokens**:
```css
@theme {
  --color-brand-blue: #1e40af;
  --spacing-xs: 0.25rem;
  --radius-button: 0.375rem;
}
```

### Responsive Design Patterns

**Mobile-First Breakpoints**:
- `sm`: 640px
- `md`: 768px  
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

**Usage Pattern**:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Responsive grid */}
</div>
```

### Dark Mode Implementation

**Automatic Detection**:
```tsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Content adapts to theme
</div>
```

**Manual Control**:
```tsx
const { theme, setTheme } = useTheme()

<Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
  Toggle Theme
</Button>
```

## Component Creation Methodology

> **📖 Complete Guide**: See `/docs/COMPONENT_CREATION_GUIDE.md` for comprehensive step-by-step instructions.

### Systematic Component Creation Approach

When creating new components for the Trucco Design System, follow this proven methodology:

#### Phase 1: Research & Planning
1. **Study Existing Patterns**: Read `components/atoms/button.tsx`, `badge.tsx`, `avatar.tsx`, `switch.tsx`
2. **Check shadcn/ui Foundation**: Verify if `components/ui/[component].tsx` exists
3. **Review Documentation**: Study `SHADCN_INTEGRATION.md` and this guide

#### Phase 2: Implementation Strategy

**Core Pattern - shadcn/ui Wrapper Strategy**:
```typescript
'use client'
import { [Component] as Shadcn[Component] } from '@/components/ui/[component]'
import { cva, type VariantProps } from 'class-variance-authority'

// Enhanced variants extending shadcn with Trucco theming
const trucco[Component]Variants = cva('', {
  variants: {
    variant: {
      default: '', // shadcn default
      primary: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-secondary-foreground', 
      success: 'bg-[var(--success)] text-white',
      warning: 'bg-[var(--warning)] text-white',
      error: 'bg-destructive text-white',
    },
    size: {
      sm: '[small-styles]',
      md: '[medium-styles]', // shadcn default
      lg: '[large-styles]',
    },
  },
  defaultVariants: { variant: 'default', size: 'md' },
})

// Type-safe interface with explicit variants
export interface [Component]Props
  extends Omit<React.ComponentProps<typeof Shadcn[Component]>, 'variant'>,
    Omit<VariantProps<typeof trucco[Component]Variants>, 'truccoVariant'> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
  theme?: 'semantic' | 'red' | 'blue' | 'purple' | 'green'
}

const [Component] = React.forwardRef<Element, [Component]Props>(
  ({ variant = 'default', size = 'md', className, ...props }, ref) => {
    const useTruccoVariant = variant && variant !== 'default'
    
    return (
      <Shadcn[Component]
        ref={ref}
        className={cn(
          useTruccoVariant && trucco[Component]Variants({ variant, size }),
          className
        )}
        {...props}
      />
    )
  }
)
```

#### Phase 3: Component Architecture Patterns

**1. Variant Mapping for Complex Components**:
```typescript
// Map Trucco semantic variants to shadcn variants
const variantMapping = {
  primary: 'default',
  secondary: 'secondary',
  tertiary: 'outline',
  success: 'default', // Uses CSS override
  warning: 'default', // Uses CSS override  
  error: 'destructive',
} as const

// Use mapped variant for shadcn, Trucco variant for styling
<ShadcnComponent
  variant={variantMapping[variant] || 'default'}
  className={cn(useTruccoVariant && truccoVariants({ variant }))}
/>
```

**2. CSS Variable Integration**:
```typescript
// Use CSS variables for semantic colors
variants: {
  variant: {
    success: 'bg-[var(--success)] text-white',
    warning: 'bg-[var(--warning)] text-white',
    primary: 'bg-primary text-primary-foreground', // Tailwind semantic
  }
}
```

**3. Form Integration Pattern**:
```typescript
// Enhanced form components with label/description/error
interface FormComponentProps extends BaseProps {
  label?: string
  description?: string
  error?: string
  required?: boolean
}

// Auto-generate IDs and associate labels
const generatedId = React.useId()
const componentId = id || generatedId
const descriptionId = description ? `${componentId}-description` : undefined
const errorId = error ? `${componentId}-error` : undefined

// Proper ARIA attributes
<Component
  id={componentId}
  aria-describedby={cn(descriptionId, errorId)}
  aria-invalid={error ? 'true' : undefined}
  aria-required={required}
/>
```

#### Phase 4: Storybook Documentation Pattern

**Essential Stories Structure**:
```typescript
export const Default: Story = { args: {} }
export const AllVariants: Story = { /* All semantic variants */ }
export const AllSizes: Story = { /* All size variants */ }
export const ThemeVariants: Story = { /* All theme colors */ }
export const RealWorldExample: Story = { /* Contextual usage */ }
```

**Story Template**:
```typescript
const meta: Meta<typeof Component> = {
  title: 'Atoms/Component',
  component: Component,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Description with shadcn/ui foundation and Trucco enhancements.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error'],
    },
    // ... other controls
  },
}
```

#### Phase 5: Quality Assurance Checklist

**Essential Steps**:
1. ✅ **Export Integration**: Add component to `components/atoms/index.ts`
2. ✅ **Type Safety**: Ensure proper TypeScript interfaces with explicit variants
3. ✅ **Accessibility**: Include proper ARIA attributes and keyboard support
4. ✅ **Storybook**: Create comprehensive stories with all variants
5. ✅ **Code Quality**: Run `npm run lint` and `npm run build`
6. ✅ **Real-world Examples**: Include contextual usage stories

#### Recent Implementation Examples

**Badge Component** (`components/atoms/badge.tsx`):
- Wraps shadcn Badge with enhanced variants and icon support
- Includes removable functionality with onRemove callback
- Maps Trucco variants: `primary → default`, `error → destructive`

**Avatar Component** (`components/atoms/avatar.tsx`):
- Compound component pattern with Avatar.Image and Avatar.Fallback
- Status indicator system with size-responsive positioning
- Auto-generated initials from alt text with custom fallback override

**Switch Component** (`components/atoms/switch.tsx`):
- Form integration with label, description, and error support
- Enhanced with semantic theming and size variants
- Proper accessibility with auto-generated IDs and ARIA attributes

### Key Success Patterns

1. **Wrapper Strategy**: Always wrap shadcn/ui components, never replace
2. **Semantic Enhancement**: Add Trucco's semantic variants while preserving shadcn defaults
3. **Type Safety**: Use `Omit` to handle variant conflicts in TypeScript interfaces
4. **Accessibility First**: Leverage shadcn's Radix UI foundation and enhance with proper ARIA
5. **Documentation Driven**: Create comprehensive Storybook stories for all variants
6. **Quality Gates**: Always run lint and build to ensure code quality

## Development Patterns

### Component Creation

**1. Define Variants with CVA**:
```typescript
const componentVariants = cva(
  "base-classes", // Base styles
  {
    variants: {
      variant: {
        primary: "variant-specific-classes",
        secondary: "other-variant-classes"
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
)
```

**2. Create Props Interface**:
```typescript
interface ComponentProps 
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof componentVariants> {
  // Additional props
}
```

**3. Implement with forwardRef**:
```typescript
const Component = React.forwardRef<HTMLElement, ComponentProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <element
        className={cn(componentVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
```

### Styling Conventions

**Class Merging**:
```typescript
import { cn } from '@/lib/utils/cn'

// Combines classes properly, handling conflicts
const classes = cn(
  "base-classes",
  variant && variantClasses[variant],
  className // User overrides
)
```

**Conditional Styling**:
```typescript
className={cn(
  "base-classes",
  {
    "success-classes": variant === 'success',
    "error-classes": hasError,
  },
  className
)}
```

## Best Practices

### Component Design

1. **Composition over Configuration**: Use `asChild` prop for flexible rendering
2. **Prop-based Styling**: Primary styling through variants, `className` for overrides
3. **Accessibility First**: Proper ARIA attributes and semantic HTML
4. **TypeScript Integration**: Full type safety for props and variants

### Styling Guidelines

1. **Use Design Tokens**: Reference theme variables instead of hardcoded values
2. **Maintain Hierarchy**: Follow primary/secondary/tertiary color system  
3. **Responsive Patterns**: Design mobile-first with progressive enhancement
4. **State Management**: Consistent interaction patterns across components

### Theme Management

1. **Token-Driven**: All styling decisions should reference design tokens
2. **Runtime Flexibility**: Support theme switching without rebuilds
3. **Semantic Colors**: Use success/warning/error for appropriate contexts
4. **Consistent Spacing**: Use spacing scale for margins, padding, gaps

## Storybook Integration

Each component includes comprehensive Storybook stories:

```typescript
// Button.stories.ts
export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
    </div>
  )
}
```

**Run Storybook**: `npm run storybook`

## Project Structure

```
trucco/
├── components/
│   ├── ui/                 # Core UI components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   └── index.ts
│   └── index.ts           # Main export file
├── lib/
│   ├── themes/
│   │   ├── tokens.ts      # Design token definitions
│   │   └── theme-provider.tsx
│   └── utils/
│       ├── cn.ts          # Class name utility
│       └── variants.ts    # CVA utilities
├── stories/               # Storybook stories
├── docs/                  # Documentation
└── app/                   # Next.js app directory
```

## Usage in Other Projects

**Installation** (when published):
```bash
npm install trucco-design-system
```

**Setup**:
```tsx
// app/layout.tsx
import { ThemeProvider } from 'trucco-design-system'
import 'trucco-design-system/styles.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

**Component Usage**:
```tsx
import { Button, Input } from 'trucco-design-system'

export function MyForm() {
  return (
    <form className="space-y-4">
      <Input 
        label="Name" 
        placeholder="Enter your name" 
      />
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </form>
  )
}
```

## Customization

**Theme Override**:
```tsx
const customTokens = {
  colors: {
    primary: {
      500: '#your-brand-color',
      // ... other shades
    }
  }
}

<ThemeProvider customTokens={customTokens}>
  {children}
</ThemeProvider>
```

**Component Extension**:
```tsx
// Extend existing components
const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <Button 
      className={cn("your-custom-classes", className)}
      ref={ref}
      {...props}
    />
  )
)
```

This design system provides a solid foundation for building consistent, accessible, and themeable user interfaces with the flexibility to adapt to different brand requirements while maintaining design system integrity.