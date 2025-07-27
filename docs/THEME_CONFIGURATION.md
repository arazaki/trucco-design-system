# Theme Configuration Guide

## Overview

The Trucco Design System now includes 5 beautiful, pre-configured theme presets inspired by popular design systems. Each theme provides a complete design token system including colors, typography, spacing, border radius, and shadows.

## Available Theme Presets

### 1. **Default Theme** 
*Modern, versatile, professional*

```typescript
import { defaultTheme } from 'trucco-design-system'
```

- **Primary Color**: Blue (#3b82f6)
- **Font**: Inter
- **Style**: Clean, modern, versatile
- **Use Case**: General purpose applications, dashboards, admin interfaces
- **Inspiration**: Tailwind UI, Headless UI

### 2. **Minimal Theme**
*Clean, subtle, refined*

```typescript
import { minimalTheme } from 'trucco-design-system'
```

- **Primary Color**: Muted Slate (#64748b)
- **Font**: SF Pro Display
- **Style**: Ultra-clean with subtle shadows and minimal borders
- **Use Case**: Content-focused apps, blogs, documentation sites
- **Inspiration**: Apple Design System, Linear

### 3. **Vibrant Theme**
*Bold, energetic, creative*

```typescript
import { vibrantTheme } from 'trucco-design-system'
```

- **Primary Color**: Magenta (#d946ef)
- **Secondary Color**: Teal (#14b8a6)
- **Accent Color**: Orange (#f97316)
- **Font**: Poppins
- **Style**: Bold colors, pronounced rounded corners, colorful shadows
- **Use Case**: Creative platforms, social media apps, entertainment
- **Inspiration**: Dribbble, Behance, Creative portfolios

### 4. **Corporate Theme**
*Professional, trustworthy, reliable*

```typescript
import { corporateTheme } from 'trucco-design-system'
```

- **Primary Color**: Professional Blue (#0ea5e9)
- **Secondary Color**: Gray (#64748b)
- **Accent Color**: Green (#22c55e)
- **Font**: Roboto
- **Style**: Conservative design with professional color palette
- **Use Case**: Enterprise applications, financial software, B2B platforms
- **Inspiration**: Material Design, IBM Carbon, Microsoft Fluent

### 5. **Dark Theme**
*Modern dark mode with proper contrast*

```typescript
import { darkTheme } from 'trucco-design-system'
```

- **Primary Color**: Bright Indigo (#6366f1)
- **Background**: Near-black (#09090b)
- **Font**: Inter
- **Style**: High contrast dark theme with proper accessibility
- **Use Case**: Developer tools, code editors, night mode interfaces
- **Inspiration**: GitHub Dark, VS Code Dark, Discord

## Using Theme Presets

### Basic Usage

```typescript
// Import the theme preset you want
import { vibrantTheme, type ThemePreset } from 'trucco-design-system'

// Use in your theme provider
const MyApp = () => {
  return (
    <ThemeProvider theme={vibrantTheme}>
      {/* Your app */}
    </ThemeProvider>
  )
}
```

### All Available Presets

```typescript
import { 
  themePresets,
  defaultTheme,
  minimalTheme,
  vibrantTheme,
  corporateTheme,
  darkTheme,
  type ThemePresetName
} from 'trucco-design-system'

// Access all themes
const allThemes = themePresets

// Get theme by name
const selectedTheme = themePresets['vibrant']

// Type-safe theme names
const themeName: ThemePresetName = 'corporate'
```

## Theme Structure

Each theme preset includes the following token categories:

### Colors

```typescript
colors: {
  // Primary color scale (50-950)
  primary: {
    50: '#eff6ff',   // Lightest
    500: '#3b82f6',  // Main color
    950: '#172554'   // Darkest
  },
  
  // Neutral/Gray scale
  neutral: { /* 50-950 */ },
  
  // Some themes include secondary & accent colors
  secondary?: { /* 50-950 */ },
  accent?: { /* 50-950 */ },
  
  // Semantic colors
  success: { 50, 500, 600, 900 },
  warning: { 50, 500, 600, 900 },
  error: { 50, 500, 600, 900 },
  
  // Surface colors
  background: '#ffffff',  // Main background
  surface: '#ffffff',     // Card/modal backgrounds
  muted: '#f4f4f5',      // Muted backgrounds
  border: '#e4e4e7'      // Border color
}
```

### Typography

```typescript
typography: {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'Consolas', 'monospace']
  },
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem'  // 60px
  },
  lineHeight: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75'
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700'
  }
}
```

### Spacing

```typescript
spacing: {
  0: '0',
  1: '0.25rem',  // 4px
  2: '0.5rem',   // 8px
  3: '0.75rem',  // 12px
  4: '1rem',     // 16px
  5: '1.25rem',  // 20px
  6: '1.5rem',   // 24px
  8: '2rem',     // 32px
  10: '2.5rem',  // 40px
  12: '3rem',    // 48px
  16: '4rem',    // 64px
  20: '5rem',    // 80px
  24: '6rem'     // 96px
}
```

### Border Radius

```typescript
borderRadius: {
  none: '0',
  sm: '0.125rem',   // 2px
  base: '0.25rem',  // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  full: '9999px'    // Fully rounded
}
```

### Shadows

```typescript
shadows: {
  none: 'none',
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)'
}
```

## Applying Themes in Client Applications

### Step 1: Choose Your Theme

Pick a theme that matches your application's personality:

```typescript
// For a professional dashboard
import { corporateTheme } from 'trucco-design-system'

// For a creative platform
import { vibrantTheme } from 'trucco-design-system'

// For a minimal blog
import { minimalTheme } from 'trucco-design-system'
```

### Step 2: Apply Theme Tokens as CSS Variables

In your client application's theme provider:

```typescript
// client-app/src/lib/theme-provider.tsx
'use client'

import { corporateTheme } from 'trucco-design-system'

export function ThemeProvider({ children }) {
  useEffect(() => {
    const theme = corporateTheme
    const root = document.documentElement
    
    // Apply color tokens
    root.style.setProperty('--primary-50', theme.colors.primary[50])
    root.style.setProperty('--primary-500', theme.colors.primary[500])
    root.style.setProperty('--primary-600', theme.colors.primary[600])
    // ... apply all tokens
    
    // Apply typography
    root.style.setProperty('--font-sans', theme.typography.fontFamily.sans.join(', '))
    root.style.setProperty('--font-size-base', theme.typography.fontSize.base)
    
    // Apply spacing
    root.style.setProperty('--spacing-4', theme.spacing[4])
    
    // Apply border radius
    root.style.setProperty('--radius-base', theme.borderRadius.base)
    
    // Apply shadows
    root.style.setProperty('--shadow-md', theme.shadows.md)
  }, [])

  return <>{children}</>
}
```

### Step 3: Helper Function for Theme Application

Create a utility to apply all theme tokens:

```typescript
// utils/apply-theme.ts
import { type ThemePreset } from 'trucco-design-system'

export function applyThemeToDOM(theme: ThemePreset) {
  const root = document.documentElement
  
  // Colors
  Object.entries(theme.colors.primary).forEach(([key, value]) => {
    root.style.setProperty(`--primary-${key}`, value)
  })
  
  Object.entries(theme.colors.neutral).forEach(([key, value]) => {
    root.style.setProperty(`--neutral-${key}`, value)
  })
  
  // Surface colors
  root.style.setProperty('--background', theme.colors.background)
  root.style.setProperty('--surface', theme.colors.surface)
  root.style.setProperty('--muted', theme.colors.muted)
  root.style.setProperty('--border', theme.colors.border)
  
  // Typography
  root.style.setProperty('--font-sans', theme.typography.fontFamily.sans.join(', '))
  root.style.setProperty('--font-mono', theme.typography.fontFamily.mono.join(', '))
  
  Object.entries(theme.typography.fontSize).forEach(([key, value]) => {
    root.style.setProperty(`--font-size-${key}`, value)
  })
  
  Object.entries(theme.typography.fontWeight).forEach(([key, value]) => {
    root.style.setProperty(`--font-weight-${key}`, value)
  })
  
  // Spacing
  Object.entries(theme.spacing).forEach(([key, value]) => {
    root.style.setProperty(`--spacing-${key}`, value)
  })
  
  // Border radius
  Object.entries(theme.borderRadius).forEach(([key, value]) => {
    root.style.setProperty(`--radius-${key}`, value)
  })
  
  // Shadows
  Object.entries(theme.shadows).forEach(([key, value]) => {
    root.style.setProperty(`--shadow-${key}`, value)
  })
}

// Usage in your theme provider
export function ThemeProvider({ children, themeName = 'default' }) {
  const theme = themePresets[themeName]
  
  useEffect(() => {
    applyThemeToDOM(theme)
  }, [theme])
  
  return <>{children}</>
}
```

## Dynamic Theme Switching

Create a theme switcher for your application:

```typescript
// components/theme-selector.tsx
'use client'

import { useState } from 'react'
import { 
  themePresets, 
  type ThemePresetName,
  Button 
} from 'trucco-design-system'
import { useTheme } from '../lib/theme-provider'

export function ThemeSelector() {
  const { currentTheme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  
  const themes: { name: ThemePresetName; label: string; description: string }[] = [
    { name: 'default', label: 'Default', description: 'Modern and versatile' },
    { name: 'minimal', label: 'Minimal', description: 'Clean and subtle' },
    { name: 'vibrant', label: 'Vibrant', description: 'Bold and creative' },
    { name: 'corporate', label: 'Corporate', description: 'Professional and reliable' },
    { name: 'dark', label: 'Dark', description: 'High contrast dark mode' }
  ]
  
  return (
    <div className="relative">
      <Button 
        variant="outline" 
        onClick={() => setIsOpen(!isOpen)}
      >
        Theme: {themePresets[currentTheme].name}
      </Button>
      
      {isOpen && (
        <div className="absolute top-full mt-2 bg-white border rounded-lg shadow-lg p-2 min-w-64">
          {themes.map((theme) => (
            <button
              key={theme.name}
              onClick={() => {
                setTheme(theme.name)
                setIsOpen(false)
              }}
              className="w-full text-left p-3 rounded hover:bg-gray-100 transition-colors"
            >
              <div className="font-medium">{theme.label}</div>
              <div className="text-sm text-gray-600">{theme.description}</div>
              {/* Color preview */}
              <div className="flex gap-1 mt-2">
                <div 
                  className="w-4 h-4 rounded-full border"
                  style={{ backgroundColor: themePresets[theme.name].colors.primary[500] }}
                />
                <div 
                  className="w-4 h-4 rounded-full border"
                  style={{ backgroundColor: themePresets[theme.name].colors.neutral[400] }}
                />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
```

## Customizing Themes

### Extending Existing Themes

```typescript
import { vibrantTheme, type ThemePreset } from 'trucco-design-system'

// Create a custom theme based on vibrant
const myCustomTheme: ThemePreset = {
  ...vibrantTheme,
  name: 'My Custom Theme',
  colors: {
    ...vibrantTheme.colors,
    primary: {
      ...vibrantTheme.colors.primary,
      500: '#ff6b6b', // Custom primary color
      600: '#e74c3c'
    }
  },
  borderRadius: {
    ...vibrantTheme.borderRadius,
    base: '0.75rem', // More rounded corners
    lg: '1.25rem'
  }
}
```

### Creating New Themes

```typescript
import { type ThemePreset } from 'trucco-design-system'

const retroTheme: ThemePreset = {
  name: 'Retro',
  colors: {
    primary: {
      50: '#fff5f5',
      100: '#ffe3e3',
      200: '#ffcdcd',
      300: '#ffabab',
      400: '#ff7979',
      500: '#ff6b6b', // Retro red
      600: '#e74c3c',
      700: '#c0392b',
      800: '#a93226',
      900: '#922b21',
      950: '#7f1d1d'
    },
    // ... define all required colors
    neutral: { /* ... */ },
    success: { /* ... */ },
    warning: { /* ... */ },
    error: { /* ... */ },
    background: '#fdf6e3', // Retro cream
    surface: '#ffffff',
    muted: '#f7f1e3',
    border: '#e8dcc6'
  },
  typography: {
    fontFamily: {
      sans: ['Courier New', 'monospace'], // Retro typewriter font
      mono: ['Courier New', 'monospace']
    },
    // ... rest of typography config
  },
  // ... rest of theme config
}
```

## Best Practices

### 1. Choose the Right Theme

- **Default**: General purpose applications
- **Minimal**: Content-heavy applications, documentation
- **Vibrant**: Creative platforms, social media
- **Corporate**: Enterprise software, financial apps  
- **Dark**: Developer tools, code editors

### 2. Consistency

- Stick to one theme throughout your application
- Use theme tokens consistently rather than hardcoded values
- Test themes across all components and pages

### 3. Accessibility

- All themes include proper color contrast ratios
- Dark theme is carefully designed for accessibility
- Test with screen readers and keyboard navigation

### 4. Performance

- Apply theme tokens as CSS custom properties once
- Avoid recalculating theme values on every render
- Use the provided helper functions for theme application

### 5. Customization

- Extend existing themes rather than creating from scratch
- Maintain the token structure for consistency
- Test custom themes thoroughly across all components

## Component Integration

The design system components automatically use theme tokens through CSS custom properties:

```css
/* Components use CSS variables that map to theme tokens */
.button-primary {
  background-color: var(--primary-500);
  color: white;
  border-radius: var(--radius-base);
  padding: var(--spacing-2) var(--spacing-4);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  box-shadow: var(--shadow-sm);
}

.button-primary:hover {
  background-color: var(--primary-600);
  box-shadow: var(--shadow-md);
}
```

This ensures that changing themes automatically updates all components throughout your application.

## Conclusion

The Trucco Design System's theme presets provide a solid foundation for creating beautiful, consistent user interfaces. Each theme has been carefully crafted with proper color relationships, typography scales, and spacing systems that work harmoniously together.

Choose the theme that best fits your application's personality, apply it using the provided utilities, and enjoy having a professionally designed interface that's ready to use out of the box!