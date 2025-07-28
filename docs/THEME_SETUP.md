# Theme Configuration Guide

The Trucco Design System is built to be **easily customizable** for any project. You can configure your brand colors, border radius, shadows, and fonts with just a few lines of code.

## Quick Setup

### Method 1: CSS Custom Properties (Simplest)

Just override the CSS custom properties in your project's CSS:

```css
/* Your project's CSS file */
:root {
  /* Your brand colors */
  --color-primary-500: #ff6b35;  /* Your main brand color */
  --color-secondary-500: #6366f1;  /* Your accent color */
  
  /* Customize design tokens */
  --radius-md: 0.75rem;  /* More rounded corners */
  --shadow-md: 0 8px 16px rgb(0 0 0 / 0.15);  /* Stronger shadows */
  
  /* Your brand fonts */
  --font-sans: 'Poppins', system-ui, sans-serif;
}
```

### Method 2: JavaScript API (Recommended)

Use our theme configuration utility for a complete setup:

```tsx
// app/layout.tsx or your root component
import { applyTheme } from 'trucco-design-system/theme-config'

// Apply your theme when the app loads
useEffect(() => {
  applyTheme({
    colors: {
      primary: {
        500: '#ff6b35', // Your main brand color
        // Optionally provide other shades
        400: '#ff8c5c',
        600: '#e8551d',
      },
      secondary: {
        500: '#6366f1' // Your accent color
      }
    },
    designTokens: {
      borderRadius: {
        md: '0.75rem',  // More rounded
        lg: '1rem',
        xl: '1.5rem'
      },
      fonts: {
        sans: 'Poppins, system-ui, sans-serif'
      }
    }
  })
}, [])
```

## Real-World Examples

### Example: E-commerce Brand (Orange & Blue)

```tsx
import { applyTheme } from 'trucco-design-system/theme-config'

applyTheme({
  colors: {
    primary: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316', // Orange brand color
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
    },
    secondary: {
      500: '#3b82f6' // Blue accent
    }
  },
  designTokens: {
    borderRadius: {
      sm: '0.375rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem'
    }
  }
})
```

### Example: SaaS Product (Purple & Modern)

```tsx
applyTheme({
  colors: {
    primary: {
      500: '#8b5cf6', // Purple brand
    },
    secondary: {
      500: '#06b6d4' // Cyan accent
    }
  },
  designTokens: {
    borderRadius: {
      sm: '0.5rem',
      md: '0.75rem',
      lg: '1rem',
      xl: '1.25rem'
    },
    shadows: {
      sm: '0 2px 4px rgb(139 92 246 / 0.1)',
      md: '0 8px 16px rgb(139 92 246 / 0.15)',
      lg: '0 16px 32px rgb(139 92 246 / 0.2)',
    },
    fonts: {
      sans: 'Inter, system-ui, sans-serif'
    }
  }
})
```

### Example: Minimal Design (Grayscale)

```tsx
applyTheme({
  colors: {
    primary: {
      500: '#6b7280', // Gray as primary for minimal look
    }
  },
  designTokens: {
    borderRadius: {
      sm: '0.125rem',
      md: '0.25rem',
      lg: '0.375rem',
      xl: '0.5rem'
    },
    shadows: {
      sm: '0 1px 2px rgb(0 0 0 / 0.05)',
      md: '0 2px 4px rgb(0 0 0 / 0.05)',
      lg: '0 4px 8px rgb(0 0 0 / 0.05)',
    }
  }
})
```

## What Gets Customized

When you configure a theme, these design system elements automatically adapt:

### Components That Use Primary Color
- ✅ Button `variant="primary"`
- ✅ Input focus states
- ✅ Form validation states
- ✅ Link colors
- ✅ Focus rings

### Components That Use Secondary Color
- ✅ Button `variant="secondary"`
- ✅ Badge variants
- ✅ Progress indicators

### Components That Use Border Radius
- ✅ All Button variants
- ✅ Input fields
- ✅ Cards
- ✅ Modal dialogs
- ✅ Tooltips

### Components That Use Shadows
- ✅ Button hover states
- ✅ Dropdown menus
- ✅ Modal overlays
- ✅ Card elevations

## Pre-made Theme Examples

You can also use our pre-made theme examples as starting points:

```tsx
import { applyTheme, exampleThemes } from 'trucco-design-system/theme-config'

// Use a pre-made theme
applyTheme(exampleThemes.vibrant)

// Or extend a pre-made theme
applyTheme({
  ...exampleThemes.corporate,
  colors: {
    ...exampleThemes.corporate.colors,
    primary: {
      500: '#your-brand-color'
    }
  }
})
```

## Advanced: Runtime Theme Switching

For apps that need multiple themes (like dark mode), you can switch themes dynamically:

```tsx
const themes = {
  light: {
    colors: {
      primary: { 500: '#3b82f6' }
    }
  },
  dark: {
    colors: {
      primary: { 500: '#60a5fa' }
    }
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark')
  const theme = isDark ? themes.light : themes.dark
  
  // Toggle dark mode class
  document.documentElement.classList.toggle('dark')
  
  // Apply theme-specific colors
  applyTheme(theme)
}
```

## Integration with Popular Tools

### With Tailwind CSS Config

If you're using Tailwind CSS in your project, extend your config to use the same variables:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--color-primary-500)',
          secondary: 'var(--color-secondary-500)',
        }
      }
    }
  }
}
```

### With Design Tokens Tools

You can generate themes using tools like:
- **Radix Colors**: For accessible color scales
- **Tailwind Palette Generator**: For automatic shade generation
- **Adobe Color**: For brand color exploration
- **Coolors.co**: For palette inspiration

```tsx
// Example with generated color scale
import { generateColorScale } from 'trucco-design-system/theme-config'

const brandColors = generateColorScale('#ff6b35')

applyTheme({
  colors: {
    primary: brandColors
  }
})
```

## TypeScript Support

All theme configuration is fully typed for great developer experience:

```tsx
import type { TruccoThemeConfig } from 'trucco-design-system/theme-config'

const myTheme: TruccoThemeConfig = {
  colors: {
    primary: {
      500: '#ff6b35' // TypeScript will ensure this is a valid color property
    }
  }
}
```

---

The goal is to make theme configuration **as simple as setting a few CSS variables** while providing **powerful APIs** for complex use cases. Your design system should feel like it was built specifically for your brand!