# Component Creation Guide

This guide provides a systematic approach for creating new components in the Trucco Design System, following the established patterns and conventions.

## Overview

The Trucco Design System uses a **wrapper strategy** around shadcn/ui components, enhancing them with:
- Semantic theming system
- Enhanced accessibility
- Additional size and shape variants
- Form integration features
- Comprehensive TypeScript typing

## Component Creation Methodology

### Phase 1: Research & Planning

Before creating a new component, follow this research process:

1. **Examine Existing Components**
   ```bash
   # Read existing atom components to understand patterns
   Read components/atoms/button.tsx
   Read components/atoms/input.tsx
   Read components/atoms/badge.tsx
   ```

2. **Check shadcn/ui Foundation**
   ```bash
   # Verify if shadcn/ui has the base component
   Read components/ui/[component-name].tsx
   ```

3. **Review Documentation**
   ```bash
   # Study the integration patterns
   Read docs/SHADCN_INTEGRATION.md
   Read docs/CLAUDE.md
   ```

### Phase 2: Component Implementation

#### 2.1 File Structure

Create the component file following this pattern:
```
components/atoms/[component-name].tsx
```

#### 2.2 Component Template

Use this template as a starting point:

```typescript
'use client'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { [Component] as Shadcn[Component] } from '@/components/ui/[component]'
import { cn } from '@/lib/utils'

/**
 * Trucco Enhanced [Component] Component
 * 
 * Wraps shadcn/ui [Component] with Trucco's semantic theming system and additional features.
 * Provides enhanced [describe key features] while leveraging
 * shadcn's accessibility foundation and Radix UI primitives.
 */

// Enhanced variants that extend shadcn with semantic theming
const trucco[Component]Variants = cva(
  // Base styles from shadcn
  '',
  {
    variants: {
      // Semantic variants
      variant: {
        default: '', // Use shadcn default
        primary: '[semantic-primary-styles]',
        secondary: '[semantic-secondary-styles]',
        success: 'bg-[var(--success)] text-white',
        warning: 'bg-[var(--warning)] text-white',
        error: 'bg-destructive text-white',
      },
      // Size variants
      size: {
        sm: '[small-size-styles]',
        md: '[medium-size-styles]', // Default shadcn size
        lg: '[large-size-styles]',
      },
      // Theme variants (optional)
      theme: {
        semantic: '', // Uses current semantic tokens from CSS
        red: '[red-theme-styles]',
        blue: '[blue-theme-styles]',
        purple: '[purple-theme-styles]',
        green: '[green-theme-styles]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      theme: 'semantic',
    },
  }
)

export interface [Component]Props
  extends Omit<React.ComponentProps<typeof Shadcn[Component]>, 'variant'>,
    Omit<VariantProps<typeof trucco[Component]Variants>, 'truccoVariant'> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
  theme?: 'semantic' | 'red' | 'blue' | 'purple' | 'green'
  // Add component-specific props here
}

const [Component] = React.forwardRef<
  React.ElementRef<typeof Shadcn[Component]>,
  [Component]Props
>(
  ({ 
    className, 
    variant = 'default',
    size = 'md',
    theme = 'semantic',
    ...props 
  }, ref) => {
    // Determine which variant system to use
    const useTruccoVariant = variant && variant !== 'default'
    
    return (
      <Shadcn[Component]
        ref={ref}
        className={cn(
          // Apply Trucco variants if using semantic variants
          useTruccoVariant && trucco[Component]Variants({ 
            variant, 
            size,
            theme: theme === 'semantic' ? undefined : theme
          }),
          className
        )}
        {...props}
      />
    )
  }
)
[Component].displayName = '[Component]'

export { [Component], trucco[Component]Variants }
```

#### 2.3 Key Implementation Patterns

**Variant Mapping Strategy:**
```typescript
// For components that need to map Trucco variants to shadcn variants
const variantMapping = {
  primary: 'default',
  secondary: 'secondary', 
  tertiary: 'outline',
  success: 'default', // Will use theme override
  warning: 'default', // Will use theme override
  error: 'destructive',
} as const
```

**Conditional Variant Application:**
```typescript
// Only apply Trucco variants when not using shadcn defaults
const useTruccoVariant = variant && !['default', 'destructive'].includes(variant)
```

**CSS Variable Integration:**
```typescript
// Use CSS variables for semantic colors
success: 'bg-[var(--success)] text-white',
warning: 'bg-[var(--warning)] text-white',
```

### Phase 3: Export Integration

Update the atoms index file:

```typescript
// In components/atoms/index.ts
export { [Component] } from './[component-name]'
export type { [Component]Props } from './[component-name]'
```

### Phase 4: Storybook Documentation

#### 4.1 Story File Structure

Create comprehensive Storybook stories:
```
stories/[Component].stories.tsx
```

#### 4.2 Story Template

```typescript
import type { Meta, StoryObj } from '@storybook/nextjs'
import { [Component] } from '../components/atoms/[component-name]'

const meta: Meta<typeof [Component]> = {
  title: 'Atoms/[Component]',
  component: [Component],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A [description] component with [key features]. Built on shadcn/ui foundation with Trucco\'s semantic theming system.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error'],
      description: 'The semantic variant of the component',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the component',
    },
    theme: {
      control: 'select',
      options: ['semantic', 'red', 'blue', 'purple', 'green'],
      description: 'The color theme variant',
    },
    // Add component-specific controls
  },
  args: {
    // Default args
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Essential Stories to Include:
export const Default: Story = { args: {} }

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <[Component] variant="primary">Primary</[Component]>
      <[Component] variant="secondary">Secondary</[Component]>
      <[Component] variant="success">Success</[Component]>
      <[Component] variant="warning">Warning</[Component]>
      <[Component] variant="error">Error</[Component]>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <[Component] size="sm">Small</[Component]>
      <[Component] size="md">Medium</[Component]>
      <[Component] size="lg">Large</[Component]>
    </div>
  ),
}

export const ThemeVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <[Component] theme="semantic" variant="primary">Semantic</[Component]>
      <[Component] theme="red" variant="primary">Red</[Component]>
      <[Component] theme="blue" variant="primary">Blue</[Component]>
      <[Component] theme="purple" variant="primary">Purple</[Component]>
      <[Component] theme="green" variant="primary">Green</[Component]>
    </div>
  ),
}

// Add real-world usage examples
export const RealWorldExample: Story = {
  render: () => (
    // Show component in realistic context
  ),
}
```

### Phase 5: Quality Assurance

Run these commands to ensure quality:

```bash
# Check linting
npm run lint

# Verify TypeScript compilation
npm run build

# Test Storybook (optional)
npm run storybook
```

## Component Categories

### Atoms
Basic building blocks that cannot be broken down further:
- Buttons, inputs, badges, avatars, switches
- Icons, typography, loading indicators

### Molecules  
Simple combinations of atoms:
- Form fields, search bars, navigation items
- Cards, modals, tooltips

### Organisms
Complex UI components:
- Headers, footers, forms, data tables
- Navigation menus, content sections

## Best Practices

### 1. TypeScript Patterns

**Use Omit for Conflicting Props:**
```typescript
extends Omit<React.ComponentProps<typeof ShadcnComponent>, 'variant'>
```

**Explicit Type Definitions:**
```typescript
variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
```

### 2. Accessibility

- Always forward refs properly
- Use semantic HTML elements
- Include proper ARIA attributes
- Support keyboard navigation

### 3. Form Integration

For form components, include:
- Label, description, and error support
- Required field indicators
- Proper field association with IDs

### 4. CSS Variables

Use CSS variables for semantic colors:
```css
--success: theme('colors.green.500')
--warning: theme('colors.yellow.500')
--error: theme('colors.red.500')
```

### 5. Documentation

- Include comprehensive JSDoc comments
- Provide real-world usage examples in Storybook
- Document all props and variants clearly

## Troubleshooting

### Common Issues

1. **TypeScript Variant Conflicts**
   - Use `Omit` to exclude conflicting props
   - Define explicit union types for variants

2. **CSS Variable Not Working**
   - Ensure variables are defined in globals.css
   - Use `[var(--variable-name)]` syntax

3. **Storybook Import Errors**
   - Check component exports in index files
   - Verify icon imports (use lucide-react, not heroicons)

4. **Build Failures**
   - Run lint first to catch obvious issues
   - Check for unused imports or variables

## Component Checklist

Use this checklist to ensure completeness:

- [ ] Component implementation with semantic variants
- [ ] Proper TypeScript interfaces and types
- [ ] forwardRef implementation
- [ ] Export in atoms/index.ts
- [ ] Comprehensive Storybook stories
- [ ] All variants documented
- [ ] Real-world usage examples
- [ ] Lint and build passing
- [ ] Accessibility considerations addressed
- [ ] Form integration (if applicable)

This systematic approach ensures consistency, quality, and maintainability across all Trucco Design System components.