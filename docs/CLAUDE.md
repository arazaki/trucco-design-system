# Trucco Design System - Claude Documentation

## Overview

Trucco is a flexible, theme-driven design system built on Next.js and Tailwind CSS. It provides reusable components with consistent design patterns, configurable theming, and runtime theme switching capabilities.

## Technology Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Component Variants**: class-variance-authority (CVA)
- **Utilities**: clsx + tailwind-merge for class merging
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

### Button Component (`/components/ui/button.tsx`)

**Props Interface**:
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost' | 'link' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'icon'
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  fullWidth?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  asChild?: boolean  // Renders as Slot for composition
  className?: string // Override/extend styles
}
```

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

### Input Component (`/components/ui/input.tsx`)

**Props Interface**:
```typescript
interface InputProps {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  shadow?: 'none' | 'sm' | 'md' | 'lg'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  label?: string
  helperText?: string
  error?: string
  fullWidth?: boolean
  className?: string
}

interface TextareaProps extends InputProps {
  // Similar props but for textarea element
}
```

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