# Trucco Design System - Installation & Setup Guide

## Quick Start

### 1. Installation

```bash
npm install git+https://github.com/arazaki/trucco-design-system.git
```

### 2. Install Dependencies

```bash
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge
```

### 3. Setup ThemeProvider

```tsx
// app/layout.tsx
import { ThemeProvider } from 'trucco-design-system'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider defaultTheme="auto">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

### 4. Add Styles

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* SHADCN BRIDGE - Automatic mapping between Trucco and shadcn variables */
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

### 5. Configure Tailwind

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/trucco-design-system/**/*.{js,ts,jsx,tsx}', // Include Trucco components
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
}
```

## Complete Setup Example

Here's a complete example of setting up Trucco in a Next.js 15 project:

### Project Structure

```
my-app/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
├── lib/
│   └── utils.ts
├── package.json
└── tailwind.config.js
```

### File Contents

#### `app/layout.tsx`

```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'trucco-design-system'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My App with Trucco',
  description: 'Built with Trucco Design System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          defaultTheme="auto"
          customTokens={{
            colors: {
              primary: {
                500: '#3b82f6', // Custom brand blue
                600: '#2563eb',
                700: '#1d4ed8',
              }
            }
          }}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

#### `app/page.tsx`

```tsx
import { Button, Input, Text } from 'trucco-design-system'
import { PlusIcon, SearchIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <main className="container mx-auto p-8 space-y-8">
      <div className="space-y-4">
        <Text variant="h1">Welcome to Trucco</Text>
        <Text variant="body">
          A modern design system with shadcn/ui integration
        </Text>
      </div>

      <div className="space-y-4 max-w-md">
        <Input
          label="Email"
          placeholder="Enter your email"
          leftIcon={<SearchIcon className="w-4 h-4" />}
          helperText="We'll never share your email"
        />
        
        <Input
          label="Password"
          type="password"
          placeholder="Enter password"
          error="Password is required"
        />
        
        <div className="flex gap-2">
          <Button
            variant="primary"
            leftIcon={<PlusIcon className="w-4 h-4" />}
          >
            Create Account
          </Button>
          
          <Button variant="outline">
            Cancel
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button variant="success" fullWidth>Success</Button>
        <Button variant="warning" fullWidth>Warning</Button>
        <Button variant="error" fullWidth>Error</Button>
      </div>
    </main>
  )
}
```

#### `lib/utils.ts`

```ts
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

#### `package.json`

```json
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@heroicons/react": "^2.1.1",
    "@radix-ui/react-slot": "^1.0.2",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "next": "15.4.4",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "tailwind-merge": "^2.2.1",
    "trucco-design-system": "git+https://github.com/arazaki/trucco-design-system.git"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "15.4.4",
    "postcss": "^8",
    "tailwindcss": "4.0.0",
    "typescript": "^5"
  }
}
```

## Advanced Configuration

### Custom Theme Tokens

```tsx
// app/layout.tsx
import { ThemeProvider } from 'trucco-design-system'

const customTokens = {
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      500: '#3b82f6', // Your brand color
      600: '#2563eb',
      900: '#1e3a8a',
      950: '#172554',
    },
    secondary: {
      50: '#fdf4ff',
      500: '#d946ef', // Your secondary color
      900: '#701a75',
    }
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider 
          defaultTheme="auto"
          customTokens={customTokens}
          storageKey="my-app-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

### Theme Toggle Component

```tsx
'use client'
import { useTheme } from 'trucco-design-system'
import { Button } from 'trucco-design-system'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
```

### Form Example with Validation

```tsx
'use client'
import { useState } from 'react'
import { Button, Input } from 'trucco-design-system'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Validation
    const newErrors: Record<string, string> = {}
    if (!formData.name) newErrors.name = 'Name is required'
    if (!formData.email) newErrors.email = 'Email is required'
    if (!formData.message) newErrors.message = 'Message is required'
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setLoading(false)
      return
    }
    
    // Submit logic here
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setLoading(false)
    setFormData({ name: '', email: '', message: '' })
    setErrors({})
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <Input
        label="Name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
        error={errors.name}
        variant={errors.name ? 'error' : 'default'}
      />
      
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        error={errors.email}
        variant={errors.email ? 'error' : 'default'}
      />
      
      <Input
        label="Message"
        placeholder="Enter your message"
        value={formData.message}
        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
        error={errors.message}
        variant={errors.message ? 'error' : 'default'}
      />
      
      <Button
        type="submit"
        variant="primary"
        fullWidth
        loading={loading}
      >
        Send Message
      </Button>
    </form>
  )
}
```

## Troubleshooting

### Common Issues

#### 1. Styles Not Loading
- Ensure `globals.css` includes the CSS bridge
- Check Tailwind config includes Trucco components
- Verify ThemeProvider is wrapping your app

#### 2. TypeScript Errors
```bash
npm install @types/react @types/react-dom --save-dev
```

#### 3. Theme Not Switching
```tsx
// Check if ThemeProvider is properly configured
import { useTheme } from 'trucco-design-system'

function DebugTheme() {
  const { theme, resolvedTheme, isHydrated } = useTheme()
  console.log({ theme, resolvedTheme, isHydrated })
  return null
}
```

#### 4. Build Errors
```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['trucco-design-system'],
  experimental: {
    optimizePackageImports: ['trucco-design-system']
  }
}

module.exports = nextConfig
```

### Environment Setup

#### Development
```bash
npm run dev
```

#### Production Build
```bash
npm run build
npm run start
```

#### Storybook (for component development)
```bash
npm run storybook
```

## Next Steps

1. **Explore Components**: Check out all available components in Storybook
2. **Customize Themes**: Create your own design tokens
3. **Build Layouts**: Use PageLayout and ContentLayout templates
4. **Add Forms**: Leverage FormGroup and validation patterns
5. **Enhance Accessibility**: Utilize built-in ARIA patterns

## Support

- **Documentation**: Check `/docs` folder for detailed guides
- **Examples**: See example implementations in the repository
- **Issues**: Report bugs on GitHub Issues
- **Community**: Join discussions for help and feedback

The Trucco Design System is now ready to use in your Next.js application with full shadcn/ui integration and enhanced accessibility!