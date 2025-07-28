# shadcn/ui Integration Guide for Trucco Design System

## Overview

This guide details how Trucco Design System integrates with shadcn/ui to provide enhanced components with proven accessibility patterns while maintaining Trucco's superior design token architecture and semantic theming capabilities.

## Architecture

### Integration Strategy

Trucco uses a **wrapper approach** to integrate with shadcn/ui:

1. **Foundation Layer**: shadcn/ui components provide the accessibility and interaction foundation
2. **Enhancement Layer**: Trucco adds semantic theming, enhanced APIs, and design system integration
3. **Bridge Layer**: CSS variables automatically map between Trucco tokens and shadcn variables

```
┌─────────────────────────────────────┐
│           Trucco Components         │
│    (Enhanced APIs + Theming)        │
├─────────────────────────────────────┤
│           CSS Bridge Layer          │
│     (Automatic Variable Mapping)    │
├─────────────────────────────────────┤
│           shadcn/ui Layer           │
│   (Accessibility + Interactions)    │
├─────────────────────────────────────┤
│            Radix UI Layer           │
│     (Primitive Components)          │
└─────────────────────────────────────┘
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge
```

### 2. CSS Bridge Configuration

Add this to your `globals.css` to enable automatic variable mapping:

```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* SHADCN BRIDGE - Maps Trucco semantic tokens to shadcn variables */
:root {
  /* Core semantic mappings */
  --background: var(--surface);
  --foreground: var(--text-primary);
  --card: var(--surface);
  --card-foreground: var(--text-primary);
  --popover: var(--surface);
  --popover-foreground: var(--text-primary);
  
  /* Primary color mappings */
  --primary: var(--primary-600);
  --primary-foreground: var(--text-on-primary);
  
  /* Secondary color mappings */
  --secondary: var(--secondary-100);
  --secondary-foreground: var(--secondary-900);
  
  /* Utility color mappings */
  --muted: var(--neutral-100);
  --muted-foreground: var(--neutral-500);
  --accent: var(--neutral-100);
  --accent-foreground: var(--neutral-900);
  
  /* Semantic state mappings */
  --destructive: var(--error);
  --destructive-foreground: var(--text-on-error);
  
  /* Interactive element mappings */
  --border: var(--border-primary);
  --input: var(--border-primary);
  --ring: var(--primary-500);
  --radius: 0.5rem;
}

.dark {
  --background: var(--surface);
  --foreground: var(--text-primary);
  --card: var(--surface);
  --card-foreground: var(--text-primary);
  --popover: var(--surface);
  --popover-foreground: var(--text-primary);
  
  --primary: var(--primary-500);
  --primary-foreground: var(--text-on-primary);
  
  --secondary: var(--secondary-800);
  --secondary-foreground: var(--secondary-100);
  
  --muted: var(--neutral-800);
  --muted-foreground: var(--neutral-400);
  --accent: var(--neutral-800);
  --accent-foreground: var(--neutral-100);
  
  --destructive: var(--error);
  --destructive-foreground: var(--text-on-error);
  
  --border: var(--border-primary);
  --input: var(--border-primary);
  --ring: var(--primary-500);
}
```

### 3. Component Structure

Trucco components follow this pattern:

```typescript
// components/atoms/button.tsx
'use client'
import * as React from 'react'
import { Button as ShadcnButton } from '@/components/ui/button'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

// Enhanced variants with Trucco semantic colors
const truccoButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        tertiary: 'bg-muted text-muted-foreground hover:bg-muted/80',
        // Semantic variants unique to Trucco
        success: 'bg-green-600 text-white shadow hover:bg-green-700',
        warning: 'bg-yellow-600 text-white shadow hover:bg-yellow-700',
        error: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        // Standard shadcn variants
        outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-8 rounded-md px-3 text-xs',
        md: 'h-9 px-4 py-2',
        lg: 'h-10 rounded-md px-8',
        xl: 'h-12 rounded-md px-10 text-base',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

// Variant mapping for shadcn compatibility
const variantMapping = {
  primary: 'default',
  secondary: 'secondary',
  tertiary: 'outline',
  success: 'default', // Will use theme override
  warning: 'default', // Will use theme override
  error: 'destructive',
  outline: 'outline',
  ghost: 'ghost',
  link: 'link',
} as const

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof truccoButtonVariants> {
  asChild?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, loading, leftIcon, rightIcon, fullWidth, children, ...props }, ref) => {
    return (
      <ShadcnButton
        className={cn(
          truccoButtonVariants({ variant, size }),
          fullWidth && 'w-full',
          className
        )}
        ref={ref}
        variant={variantMapping[variant] || 'default'}
        size={size === 'md' ? 'default' : size === 'xl' ? 'lg' : size}
        asChild={asChild}
        disabled={loading}
        {...props}
      >
        {loading ? (
          <>
            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            Loading...
          </>
        ) : (
          <>
            {leftIcon && <span className="mr-1">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-1">{rightIcon}</span>}
          </>
        )}
      </ShadcnButton>
    )
  }
)
Button.displayName = 'Button'

export { Button, truccoButtonVariants }
```

## Advanced Component Wrapper Patterns

### Pattern 1: Variant Mapping with Semantic Enhancement

**Badge Component Example**:
```typescript
// components/atoms/badge.tsx
import { Badge as ShadcnBadge } from '@/components/ui/badge'

// Map Trucco semantic variants to shadcn variants
const variantMapping = {
  primary: 'default',
  secondary: 'secondary',
  tertiary: 'outline',
  success: 'default', // Will use theme override
  warning: 'default', // Will use theme override
  error: 'destructive',
} as const

// Enhanced variants that extend shadcn with semantic theming
const truccoBadgeVariants = cva('', {
  variants: {
    truccoVariant: {
      primary: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
      success: 'bg-[var(--success)] text-white',
      warning: 'bg-[var(--warning)] text-white',
      error: 'bg-destructive text-destructive-foreground',
    }
  }
})

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'primary', className, ...props }, ref) => {
    const useTruccoVariant = variant && !['default', 'destructive'].includes(variant)
    const mappedVariant = variantMapping[variant] || 'default'

    return (
      <ShadcnBadge
        ref={ref}
        className={cn(
          // Apply Trucco variants if using semantic variants
          useTruccoVariant && truccoBadgeVariants({ 
            truccoVariant: variant
          }),
          className
        )}
        variant={mappedVariant}
        {...props}
      />
    )
  }
)
```

### Pattern 2: Compound Components with Enhanced Features

**Avatar Component Example**:
```typescript
// components/atoms/avatar.tsx
import { Avatar as ShadcnAvatar, AvatarImage as ShadcnAvatarImage, AvatarFallback as ShadcnAvatarFallback } from '@/components/ui/avatar'

// Size variants for the main avatar container
const truccoAvatarVariants = cva('relative inline-flex', {
  variants: {
    size: {
      xs: 'h-6 w-6 text-xs',
      sm: 'h-8 w-8 text-sm',
      md: 'h-10 w-10 text-base',
      lg: 'h-12 w-12 text-lg',
      xl: 'h-16 w-16 text-xl',
      '2xl': 'h-20 w-20 text-2xl',
    },
    shape: {
      circle: 'rounded-full',
      square: 'rounded-none',
      rounded: 'rounded-lg',
    },
  },
})

// Status indicator positioning variants
const statusVariants = cva('absolute rounded-full border-2 border-background', {
  variants: {
    size: {
      xs: 'h-2 w-2 -bottom-0.5 -right-0.5',
      sm: 'h-2.5 w-2.5 -bottom-0.5 -right-0.5',
      md: 'h-3 w-3 -bottom-0.5 -right-0.5',
      lg: 'h-3.5 w-3.5 -bottom-1 -right-1',
      xl: 'h-4 w-4 -bottom-1 -right-1',
      '2xl': 'h-5 w-5 -bottom-1 -right-1',
    },
    status: {
      online: 'bg-green-500',
      offline: 'bg-gray-400',
      busy: 'bg-red-500',
      away: 'bg-yellow-500',
    },
  },
})

// Main Avatar component with auto-generated initials
const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ 
    size = 'sm',
    shape = 'circle',
    src,
    alt,
    fallback,
    status,
    showStatus = false,
    children,
    ...props 
  }, ref) => {
    // Auto-generate initials from alt text
    const initials = React.useMemo(() => {
      if (fallback) return fallback
      if (alt) {
        return alt
          .split(' ')
          .map(name => name.charAt(0).toUpperCase())
          .slice(0, 2)
          .join('')
      }
      return '?'
    }, [fallback, alt])

    return (
      <ShadcnAvatar
        ref={ref}
        className={cn(truccoAvatarVariants({ size, shape }))}
        {...props}
      >
        {src && <AvatarImage src={src} alt={alt} />}
        <AvatarFallback theme={theme}>
          {children || initials}
        </AvatarFallback>
        
        {/* Enhanced status indicator */}
        {showStatus && status && (
          <div className={cn(statusVariants({ size, status }))} />
        )}
      </ShadcnAvatar>
    )
  }
)

// Enhanced compound components
const AvatarFallback = React.forwardRef<HTMLDivElement, AvatarFallbackProps>(
  ({ theme = 'default', className, ...props }, ref) => {
    return (
      <ShadcnAvatarFallback
        ref={ref}
        className={cn(
          'flex size-full items-center justify-center font-medium',
          theme === 'primary' && 'bg-primary text-primary-foreground',
          theme === 'secondary' && 'bg-secondary text-secondary-foreground',
          theme === 'success' && 'bg-[var(--success)] text-white',
          className
        )}
        {...props}
      />
    )
  }
)
```

### Pattern 3: Form Integration with Enhanced Accessibility

**Switch Component Example**:
```typescript
// components/atoms/switch.tsx
import { Switch as ShadcnSwitch } from '@/components/ui/switch'

const Switch = React.forwardRef<React.ElementRef<typeof ShadcnSwitch>, SwitchProps>(
  ({ 
    label,
    description,
    error,
    required = false,
    id,
    ...props 
  }, ref) => {
    // Auto-generate IDs for proper accessibility
    const generatedId = React.useId()
    const switchId = id || generatedId
    const descriptionId = description ? `${switchId}-description` : undefined
    const errorId = error ? `${switchId}-error` : undefined

    // Enhanced form integration
    if (label || description || error) {
      return (
        <div className="flex items-start space-x-3">
          <ShadcnSwitch
            ref={ref}
            id={switchId}
            aria-describedby={cn(descriptionId, errorId)}
            aria-invalid={error ? 'true' : undefined}
            {...props}
          />
          
          <div className="flex-1 space-y-1">
            {label && (
              <label
                htmlFor={switchId}
                className={cn(
                  'text-sm font-medium leading-none cursor-pointer',
                  error ? 'text-destructive' : 'text-foreground',
                  props.disabled && 'opacity-50 cursor-not-allowed'
                )}
              >
                {label}
                {required && <span className="text-destructive ml-1">*</span>}
              </label>
            )}
            
            {description && (
              <p 
                id={descriptionId}
                className={cn(
                  'text-sm',
                  error ? 'text-destructive' : 'text-muted-foreground'
                )}
              >
                {description}
              </p>
            )}
            
            {error && (
              <p 
                id={errorId}
                className="text-sm text-destructive"
                role="alert"
              >
                {error}
              </p>
            )}
          </div>
        </div>
      )
    }

    // Simple switch without form integration
    return <ShadcnSwitch ref={ref} id={switchId} {...props} />
  }
)
```

### Pattern 4: TypeScript Interface Design

**Handling Variant Conflicts**:
```typescript
// Use Omit to prevent TypeScript conflicts
export interface ComponentProps
  extends Omit<React.ComponentProps<typeof ShadcnComponent>, 'variant'>,
    Omit<VariantProps<typeof truccoComponentVariants>, 'truccoVariant'> {
  // Explicit variant definitions prevent conflicts
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
  theme?: 'semantic' | 'red' | 'blue' | 'purple' | 'green'
  // Component-specific enhancements
}
```

## Component Examples

### Enhanced Input Component

```typescript
// components/atoms/input.tsx
'use client'
import * as React from 'react'
import { Input as ShadcnInput } from '@/components/ui/input'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const truccoInputVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: '',
        success: 'border-green-500 focus-visible:ring-green-500/20',
        warning: 'border-yellow-500 focus-visible:ring-yellow-500/20',
        error: 'border-destructive focus-visible:ring-destructive/20',
      },
      theme: {
        semantic: '',
        red: '[--ring:theme(colors.red.500)]',
        blue: '[--ring:theme(colors.blue.500)]',
        purple: '[--ring:theme(colors.purple.500)]',
        green: '[--ring:theme(colors.green.500)]',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },
    },
    defaultVariants: {
      variant: 'default',
      theme: 'semantic',
      fullWidth: true,
    },
  }
)

export interface InputProps
  extends React.ComponentProps<typeof ShadcnInput>,
    VariantProps<typeof truccoInputVariants> {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  label?: string
  helperText?: string
  error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = 'default', theme = 'semantic', fullWidth = true, leftIcon, rightIcon, label, helperText, error, id, ...props }, ref) => {
    const generatedId = React.useId()
    const inputId = id || generatedId
    const errorId = error ? `${inputId}-error` : undefined
    const helperTextId = helperText ? `${inputId}-helper` : undefined
    
    const effectiveVariant = error ? 'error' : variant

    return (
      <div className={cn('flex flex-col gap-1', !fullWidth && 'w-auto')}>
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-foreground">
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground [&_svg]:size-4">
              {leftIcon}
            </div>
          )}
          
          <ShadcnInput
            ref={ref}
            id={inputId}
            className={cn(
              truccoInputVariants({ variant: effectiveVariant, theme, fullWidth }),
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              className
            )}
            aria-invalid={error ? 'true' : undefined}
            aria-describedby={cn(errorId, helperTextId)}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground [&_svg]:size-4">
              {rightIcon}
            </div>
          )}
        </div>
        
        {error && (
          <p id={errorId} className="text-sm text-destructive" role="alert">
            {error}
          </p>
        )}
        
        {helperText && !error && (
          <p id={helperTextId} className="text-sm text-muted-foreground">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input, truccoInputVariants }
```

## Benefits of Integration

### ✅ Maintained Advantages

1. **Trucco's Superior Token System**
   - Comprehensive color scales (50-950)
   - Semantic color hierarchy (primary, secondary, tertiary)
   - Structured design tokens with TypeScript interfaces

2. **Enhanced Variant System**
   - Multiple variant dimensions (variant, size, theme)
   - Semantic variants (success, warning, error)
   - More comprehensive size options

3. **Runtime Theme Switching**
   - ThemeProvider with useTheme hook
   - TypeScript-first token customization
   - Automatic dark mode detection

### ✅ Gained Benefits

1. **Proven Accessibility**
   - Radix UI primitive foundation
   - WCAG-compliant patterns
   - Screen reader support

2. **Enhanced Developer Experience**
   - Familiar shadcn/ui API patterns
   - Better focus management
   - Consistent interaction behaviors

3. **Performance Optimizations**
   - Optimized bundle sizes
   - Efficient re-renders
   - Better tree-shaking

## Usage Examples

### Basic Usage

```tsx
import { Button, Input } from 'trucco-design-system'

function MyForm() {
  return (
    <div className="space-y-4">
      <Input
        label="Email"
        placeholder="Enter your email"
        leftIcon={<MailIcon />}
        variant="default"
        theme="semantic"
      />
      
      <Button
        variant="primary"
        size="lg"
        fullWidth
        leftIcon={<PlusIcon />}
      >
        Create Account
      </Button>
    </div>
  )
}
```

### Advanced Usage with Semantic Variants

```tsx
function StatusForm() {
  return (
    <div className="space-y-4">
      <Input
        label="Username"
        placeholder="Enter username"
        variant="success"
        helperText="Username is available"
      />
      
      <Input
        label="Password"
        placeholder="Enter password"
        variant="error"
        error="Password is too weak"
      />
      
      <div className="flex gap-2">
        <Button variant="success">Save</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="error">Delete</Button>
      </div>
    </div>
  )
}
```

### Theme Integration

```tsx
import { ThemeProvider, useTheme } from 'trucco-design-system'

function App() {
  return (
    <ThemeProvider defaultTheme="auto">
      <MyComponents />
    </ThemeProvider>
  )
}

function MyComponents() {
  const { theme, setTheme } = useTheme()
  
  return (
    <div>
      <Button 
        variant="outline" 
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        Toggle Theme
      </Button>
      
      {/* Components automatically adapt to theme */}
      <Input theme="blue" label="Themed Input" />
    </div>
  )
}
```

## Migration Guide

### From Pure Trucco to shadcn-Integrated Trucco

Most APIs remain the same, with these enhancements:

1. **Button Component**:
   - Added `asChild` prop for Slot composition
   - Enhanced `loading` state handling
   - New semantic variants: `success`, `warning`, `error`

2. **Input Component**:
   - New `theme` prop for semantic theming
   - Enhanced accessibility with auto-generated IDs
   - Better error state handling

3. **Theme System**:
   - Automatic CSS variable mapping
   - Enhanced dark mode support
   - Better TypeScript integration

### Breaking Changes

None! The integration maintains full backward compatibility while adding new features.

## Troubleshooting

### Common Issues

1. **CSS Variables Not Working**
   - Ensure the CSS bridge is properly configured in globals.css
   - Check that Trucco semantic tokens are defined

2. **Theme Not Switching**
   - Verify ThemeProvider is wrapping your app
   - Check that CSS variables are properly mapped

3. **TypeScript Errors**
   - Update to latest TypeScript version
   - Ensure all peer dependencies are installed

### Debug Tips

```typescript
// Check if CSS variables are properly mapped
const checkCSSVariables = () => {
  const styles = getComputedStyle(document.documentElement)
  console.log('Primary:', styles.getPropertyValue('--primary'))
  console.log('Background:', styles.getPropertyValue('--background'))
}
```

This integration successfully combines the best of both design systems while maintaining Trucco's unique advantages and enhancing the overall developer experience.