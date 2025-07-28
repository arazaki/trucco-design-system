# Next.js Integration Guide for Trucco Design System

## Overview

This guide provides comprehensive knowledge for creating Next.js-optimized design system components with shadcn/ui integration. It covers architecture patterns, performance optimizations, and framework-specific features that make Trucco components work seamlessly within Next.js applications while leveraging proven shadcn/ui accessibility patterns.

## Next.js Architecture Fundamentals

### App Router Structure for Design Systems

**Recommended Project Organization:**
```
app/
├── _components/              # Private design system components
│   ├── ui/                  # Base UI components (Button, Input, Card)
│   ├── forms/               # Form-specific components
│   ├── layout/              # Layout and container components
│   ├── navigation/          # Navigation and routing components
│   └── feedback/            # Toast, Alert, Modal components
├── (design-system)/         # Route group for component showcase
│   ├── components/          # Component documentation pages
│   └── foundations/         # Design token documentation
├── globals.css              # Global styles, design tokens, Tailwind imports
└── layout.tsx               # Root layout with theme provider
```

**Key Benefits:**
- **Private folders** (`_components`) prevent accidental routing
- **Route groups** `(design-system)` organize without affecting URLs
- **Colocation** keeps related components together
- **Clear separation** between application and design system code

### File Conventions for Design Systems

**Component File Structure:**
```
components/ui/button/
├── button.tsx              # Main component implementation
├── button.stories.tsx      # Storybook stories
├── button.test.tsx         # Component tests
├── button.module.css       # Component-specific styles (if needed)
└── index.ts                # Clean exports
```

**Export Patterns:**
```typescript
// components/ui/button/index.ts
export { Button, buttonVariants } from './button'
export type { ButtonProps } from './button'

// components/ui/index.ts
export * from './button'
export * from './input'
export * from './card'

// components/index.ts (main package export)
export * from './ui'
export * from './themes'
export * from './utils'
```

## Server vs Client Component Strategy

### Decision Framework for Design System Components

**Server Components (Default Choice):**
```typescript
// components/ui/card.tsx
import * as React from 'react'
import { cn } from '@/lib/utils/cn'

// Server component by default - no 'use client' directive
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined'
}

export function Card({ className, variant = 'default', ...props }: CardProps) {
  const variants = {
    default: 'bg-background border border-border',
    elevated: 'bg-background shadow-lg border-0',
    outlined: 'bg-transparent border-2 border-border'
  }

  return (
    <div
      className={cn(
        'rounded-lg p-6 text-foreground',
        variants[variant],
        className
      )}
      {...props}
    />
  )
}
```

**Client Components (When Necessary):**
```typescript
// components/ui/button.tsx
'use client' // Required for interactivity

import * as React from 'react'
import { cn } from '@/lib/utils/cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', loading, leftIcon, rightIcon, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
          'disabled:pointer-events-none disabled:opacity-50',
          {
            primary: 'bg-primary-500 text-white hover:bg-primary-600',
            secondary: 'bg-secondary-100 text-secondary-900 hover:bg-secondary-200',
            outline: 'border border-primary-300 bg-transparent hover:bg-primary-50'
          }[variant],
          className
        )}
        disabled={loading}
        {...props}
      >
        {loading ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Loading...
          </>
        ) : (
          <>
            {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    )
  }
)
Button.displayName = 'Button'
```

### Hybrid Component Patterns

**Server Component with Client Interactive Parts:**
```typescript
// components/ui/data-card.tsx (Server Component)
import { fetchData } from '@/lib/api'
import { DataCardActions } from './data-card-actions'

interface DataCardProps {
  id: string
  showActions?: boolean
}

export async function DataCard({ id, showActions = true }: DataCardProps) {
  const data = await fetchData(id) // Server-side data fetching
  
  return (
    <div className="rounded-lg border bg-card p-6">
      <h3 className="text-lg font-semibold">{data.title}</h3>
      <p className="text-muted-foreground">{data.description}</p>
      
      {showActions && (
        <DataCardActions id={id} initialData={data} />
      )}
    </div>
  )
}

// components/ui/data-card-actions.tsx (Client Component)
'use client'
import { useState } from 'react'
import { Button } from './button'

interface DataCardActionsProps {
  id: string
  initialData: any
}

export function DataCardActions({ id, initialData }: DataCardActionsProps) {
  const [liked, setLiked] = useState(initialData.liked)
  const [liking, setLiking] = useState(false)

  const handleLike = async () => {
    setLiking(true)
    try {
      // API call to toggle like
      const response = await fetch(`/api/data/${id}/like`, { method: 'POST' })
      const result = await response.json()
      setLiked(result.liked)
    } finally {
      setLiking(false)
    }
  }

  return (
    <div className="flex gap-2 mt-4">
      <Button 
        variant="outline" 
        size="sm" 
        onClick={handleLike}
        loading={liking}
      >
        {liked ? '❤️' : '🤍'} Like
      </Button>
      <Button variant="outline" size="sm">
        Share
      </Button>
    </div>
  )
}
```

## Styling Integration with Next.js

### Tailwind CSS Configuration for Design Systems

**Enhanced Tailwind Configuration:**
```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx,mdx}', // Include Storybook files
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Trucco design system colors
        primary: {
          50: 'rgb(var(--color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--color-primary-100) / <alpha-value>)',
          // ... rest of primary scale
          500: 'rgb(var(--color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--color-primary-600) / <alpha-value>)',
          950: 'rgb(var(--color-primary-950) / <alpha-value>)',
        },
        // Semantic colors
        background: 'rgb(var(--color-background) / <alpha-value>)',
        foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'Monaco', 'Consolas', 'monospace'],
      },
      spacing: {
        // Design system spacing tokens
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)', 
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
      },
      borderRadius: {
        'xs': 'var(--radius-xs)',
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
      },
      boxShadow: {
        'xs': 'var(--shadow-xs)',
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
```

**Global Styles Integration:**
```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

/* Design system CSS variables */
:root {
  /* Primary colors */
  --color-primary-50: 239 246 255;
  --color-primary-100: 219 234 254;
  --color-primary-500: 59 130 246;
  --color-primary-600: 37 99 235;
  --color-primary-950: 23 37 84;

  /* Semantic colors */
  --color-background: 255 255 255;
  --color-foreground: 17 24 39;
  --color-border: 229 231 235;

  /* Spacing tokens */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;

  /* Border radius tokens */
  --radius-xs: 0.125rem;
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;

  /* Shadow tokens */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.dark {
  --color-background: 17 24 39;
  --color-foreground: 249 250 251;
  --color-border: 55 65 81;
}

/* Base layer customizations */
@layer base {
  body {
    background: rgb(var(--color-background));
    color: rgb(var(--color-foreground));
    font-family: var(--font-inter), system-ui, sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    border-color: rgb(var(--color-border));
  }
}

/* Component layer for reusable patterns */
@layer components {
  .focus-ring {
    @apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2;
  }
  
  .card {
    @apply rounded-lg border bg-background p-6 shadow-sm;
  }
}
```

## Next.js Specific Component Patterns

### Typography with next/font Integration

**Font System for Design System:**
```typescript
// lib/fonts.ts
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

export const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  preload: false, // Only preload primary font
})

export const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  preload: false,
})

// components/ui/typography.tsx
import { cn } from '@/lib/utils/cn'
import { inter, playfair, jetbrains } from '@/lib/fonts'

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption' | 'code'
  as?: keyof JSX.IntrinsicElements
}

export function Typography({ 
  variant, 
  as, 
  className, 
  children, 
  ...props 
}: TypographyProps) {
  const Component = as || (variant.startsWith('h') ? variant : 'p') as keyof JSX.IntrinsicElements

  const variants = {
    h1: `text-4xl font-bold tracking-tight ${playfair.className}`,
    h2: `text-3xl font-semibold tracking-tight ${playfair.className}`,
    h3: `text-2xl font-semibold ${inter.className}`,
    h4: `text-xl font-medium ${inter.className}`,
    body: `text-base ${inter.className}`,
    caption: `text-sm text-muted-foreground ${inter.className}`,
    code: `text-sm font-mono bg-muted px-1.5 py-0.5 rounded ${jetbrains.className}`,
  }

  return (
    <Component 
      className={cn(variants[variant], className)} 
      {...props}
    >
      {children}
    </Component>
  )
}

// app/layout.tsx - Font Variables Setup
import { inter, playfair, jetbrains } from '@/lib/fonts'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}
    >
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
```

### Image Components with Next.js Optimization

**Design System Image Components:**
```typescript
// components/ui/image.tsx
import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { cn } from '@/lib/utils/cn'

interface ImageProps extends Omit<NextImageProps, 'src'> {
  src: string
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
}

export function Image({ 
  src, 
  alt, 
  aspectRatio, 
  rounded = 'md',
  className,
  ...props 
}: ImageProps) {
  const aspectRatios = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]'
  }

  const roundedVariants = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md', 
    lg: 'rounded-lg',
    full: 'rounded-full'
  }

  if (aspectRatio) {
    return (
      <div className={cn(
        'relative overflow-hidden',
        aspectRatios[aspectRatio],
        roundedVariants[rounded],
        className
      )}>
        <NextImage
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          {...props}
        />
      </div>
    )
  }

  return (
    <NextImage
      src={src}
      alt={alt}
      className={cn(roundedVariants[rounded], className)}
      {...props}
    />
  )
}

// Avatar component using optimized Image
interface AvatarProps {
  src?: string
  alt: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  fallback?: string
}

export function Avatar({ src, alt, size = 'md', fallback }: AvatarProps) {
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg'
  }

  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        width={size === 'sm' ? 32 : size === 'md' ? 40 : size === 'lg' ? 48 : 64}
        height={size === 'sm' ? 32 : size === 'md' ? 40 : size === 'lg' ? 48 : 64}
        rounded="full"
        className={sizes[size]}
      />
    )
  }

  return (
    <div className={cn(
      'flex items-center justify-center rounded-full bg-muted text-muted-foreground font-medium',
      sizes[size]
    )}>
      {fallback || alt.charAt(0).toUpperCase()}
    </div>
  )
}
```

### Navigation Components with Next.js Link

**Smart Navigation Components:**
```typescript
// components/ui/nav-link.tsx
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils/cn'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  variant?: 'default' | 'primary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  exact?: boolean
}

export function NavLink({ 
  href, 
  children, 
  variant = 'default',
  size = 'md',
  className,
  exact = false,
  ...props 
}: NavLinkProps) {
  const pathname = usePathname()
  const isActive = exact 
    ? pathname === href 
    : pathname.startsWith(href) && href !== '/'

  const variants = {
    default: 'text-foreground hover:text-primary-600',
    primary: 'text-primary-600 hover:text-primary-700',
    ghost: 'text-muted-foreground hover:text-foreground'
  }

  const sizes = {
    sm: 'text-sm px-2 py-1',
    md: 'text-base px-3 py-2', 
    lg: 'text-lg px-4 py-3'
  }

  const activeStyles = {
    default: 'text-primary-600 font-medium',
    primary: 'text-primary-700 font-semibold',
    ghost: 'text-foreground font-medium bg-muted'
  }

  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center rounded-md transition-colors',
        variants[variant],
        sizes[size],
        isActive && activeStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}

// components/ui/breadcrumb.tsx
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  separator?: React.ReactNode
}

export function Breadcrumb({ items, separator }: BreadcrumbProps) {
  const defaultSeparator = <ChevronRightIcon className="w-4 h-4 text-muted-foreground" />

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center space-x-2">
            {index > 0 && (
              <span aria-hidden="true">
                {separator || defaultSeparator}
              </span>
            )}
            {item.href && index < items.length - 1 ? (
              <Link 
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className={index === items.length - 1 ? 'text-foreground font-medium' : 'text-muted-foreground'}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
```

## Form Components with Server Actions

### Advanced Form System Integration

**Form Components with Next.js Integration:**
```typescript
// components/ui/form.tsx
'use server'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

// Server action for form handling
export async function submitForm(prevState: any, formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string

  // Validation
  if (!name || !email) {
    return {
      error: 'Name and email are required',
      fields: { name, email }
    }
  }

  try {
    // Process form data
    await processFormData({ name, email })
    
    // Revalidate and redirect
    revalidatePath('/dashboard')
    redirect('/dashboard?success=true')
  } catch (error) {
    return {
      error: 'Failed to submit form',
      fields: { name, email }
    }
  }
}

// components/ui/form-components.tsx
'use client'
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { submitForm } from './form-actions'
import { Button } from './button'
import { Input } from './input'

function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus()
  
  return (
    <Button 
      type="submit" 
      loading={pending}
      disabled={pending}
    >
      {children}
    </Button>
  )
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitForm, null)

  return (
    <form action={formAction} className="space-y-4">
      <Input
        name="name"
        label="Name"
        placeholder="Enter your name"
        defaultValue={state?.fields?.name}
        error={state?.error && !state.fields?.name ? 'Name is required' : undefined}
        required
      />
      
      <Input
        name="email"
        type="email"
        label="Email"
        placeholder="Enter your email"
        defaultValue={state?.fields?.email}
        error={state?.error && !state.fields?.email ? 'Email is required' : undefined}
        required
      />

      {state?.error && (
        <div className="rounded-md bg-red-50 p-4 text-sm text-red-700">
          {state.error}
        </div>
      )}

      <SubmitButton>
        Submit Form
      </SubmitButton>
    </form>
  )
}
```

## Performance Optimization Strategies

### Bundle Optimization for Design Systems

**Tree-Shaking Friendly Exports:**
```typescript
// ❌ Avoid barrel exports that prevent tree-shaking
export * from './components'

// ✅ Individual exports for better tree-shaking
export { Button } from './button'
export { Input } from './input'
export { Card } from './card'

// ✅ Consumer imports only what they need
import { Button, Input } from 'trucco-design-system'
```

**Dynamic Imports for Heavy Components:**
```typescript
// components/ui/chart.tsx
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('./chart-component'), {
  loading: () => (
    <div className="flex items-center justify-center h-64 bg-muted rounded-lg">
      <div className="animate-spin h-6 w-6 border-2 border-primary-500 border-t-transparent rounded-full" />
    </div>
  ),
  ssr: false, // Chart libraries often don't work on server
})

export function DashboardChart({ data }: { data: any[] }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Analytics</h3>
      <Chart data={data} />
    </div>
  )
}
```

### Image Optimization Strategies

**Responsive Image Patterns:**
```typescript
// components/ui/responsive-image.tsx
import NextImage from 'next/image'

interface ResponsiveImageProps {
  src: string
  alt: string
  priority?: boolean
  quality?: number
}

export function ResponsiveImage({ 
  src, 
  alt, 
  priority = false, 
  quality = 75 
}: ResponsiveImageProps) {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={800}
      height={600}
      priority={priority}
      quality={quality}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="w-full h-auto"
    />
  )
}
```

## TypeScript Integration Best Practices

### Component Props with Strict Typing

**Enhanced TypeScript Patterns:**
```typescript
// types/component-props.ts
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface VariantComponentProps<T extends string> extends BaseComponentProps {
  variant?: T
  size?: 'sm' | 'md' | 'lg'
}

// components/ui/alert.tsx
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'

const alertVariants = cva(
  "relative w-full rounded-lg border p-4",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-red-500/50 text-red-700 [&>svg]:text-red-600",
        success: "border-green-500/50 text-green-700 [&>svg]:text-green-600",
        warning: "border-yellow-500/50 text-yellow-700 [&>svg]:text-yellow-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: React.ReactNode
}

export function Alert({ 
  className, 
  variant, 
  icon, 
  children, 
  ...props 
}: AlertProps) {
  return (
    <div
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {icon && <div className="flex-shrink-0 mr-3">{icon}</div>}
      <div className="flex-1">{children}</div>
    </div>
  )
}

// Usage with full type safety
<Alert variant="success" icon={<CheckIcon />}>
  Your changes have been saved successfully.
</Alert>
```

### Generic Component Patterns

**Flexible Generic Components:**
```typescript
// components/ui/list.tsx
interface ListProps<T> {
  items: T[]
  renderItem: (item: T, index: number) => React.ReactNode
  keyExtractor?: (item: T, index: number) => string | number
  className?: string
  emptyMessage?: string
}

export function List<T>({ 
  items, 
  renderItem, 
  keyExtractor = (_, index) => index,
  className,
  emptyMessage = 'No items found'
}: ListProps<T>) {
  if (items.length === 0) {
    return (
      <div className={cn('text-center py-8 text-muted-foreground', className)}>
        {emptyMessage}
      </div>
    )
  }

  return (
    <ul className={cn('space-y-2', className)}>
      {items.map((item, index) => (
        <li key={keyExtractor(item, index)}>
          {renderItem(item, index)}
        </li>
      ))}
    </ul>
  )
}

// Usage with type inference
interface User {
  id: string
  name: string
  email: string
}

<List<User>
  items={users}
  keyExtractor={(user) => user.id}
  renderItem={(user) => (
    <div className="flex items-center space-x-3 p-3 rounded-lg border">
      <Avatar src={user.avatar} alt={user.name} />
      <div>
        <p className="font-medium">{user.name}</p>
        <p className="text-sm text-muted-foreground">{user.email}</p>
      </div>
    </div>
  )}
  emptyMessage="No users found"
/>
```

## Development Best Practices

### Component Testing Patterns

**Jest and React Testing Library Integration:**
```typescript
// components/ui/__tests__/button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '../button'

describe('Button Component', () => {
  it('renders with correct variant styles', () => {
    render(<Button variant="primary">Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toHaveClass('bg-primary-500')
  })

  it('handles loading state correctly', () => {
    render(<Button loading>Submit</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

### Hot Reload Optimization

**Development Experience Enhancements:**
```typescript
// utils/dev-helpers.ts
export function getDisplayName(Component: React.ComponentType) {
  return Component.displayName || Component.name || 'Component'
}

// Enhanced component definition for better debugging
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ className, variant, size, ...props }, ref) {
    // Component implementation
    return <button ref={ref} {...props} />
  }
)

// Set display name for better debugging
Button.displayName = 'Button'
```

## Package Configuration for Next.js

### Next.js Compatibility Configuration

**Package.json Configuration:**
```json
{
  "name": "trucco-design-system",
  "version": "0.1.0",
  "description": "A flexible, theme-driven design system for Next.js",
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.esm.js",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./styles": {
      "import": "./dist/styles.css",
      "require": "./dist/styles.css"
    }
  },
  "files": [
    "dist",
    "README.md"
  ],
  "peerDependencies": {
    "react": ">=18.0.0",
    "react-dom": ">=18.0.0",
    "next": ">=13.0.0",
    "tailwindcss": ">=3.0.0"
  },
  "devDependencies": {
    "next": "15.4.4",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "tailwindcss": "^4"
  }
}
```

**Next.js Configuration for Design System Development:**
```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Enable turbopack for faster development
    turbopack: true,
    // Optimize package imports for better tree-shaking
    optimizePackageImports: ['@heroicons/react', 'lucide-react'],
  },
  // Ensure proper transpilation of design system components
  transpilePackages: ['trucco-design-system'],
  // Image optimization configuration
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  // Enable strict mode for better development experience
  reactStrictMode: true,
}

module.exports = nextConfig
```

This comprehensive guide ensures that Trucco design system components are optimized for Next.js applications, providing excellent performance, developer experience, and full compatibility with Next.js features and patterns.