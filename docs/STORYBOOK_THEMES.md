# Storybook Theme Integration

## Overview

The Trucco Design System's Storybook now includes **interactive theme switching** allowing you to explore how all components look with different theme presets in real-time.

## How to Use Theme Switching

### 1. Access the Theme Toolbar

1. Start Storybook: `npm run storybook`
2. Open http://localhost:6006
3. Look for the **🎨 Theme** dropdown in the toolbar at the top
4. Select any theme to see all components update instantly

### 2. Available Themes

The theme selector includes 5 carefully crafted presets:

| Theme | Icon | Description | Best For |
|-------|------|-------------|----------|
| **Default** | 🔵 | Modern, versatile, professional | General applications, dashboards |
| **Minimal** | ⚪ | Clean, subtle, refined | Content-focused apps, documentation |
| **Vibrant** | 🟣 | Bold, energetic, creative | Creative platforms, social media |
| **Corporate** | 🔷 | Professional, trustworthy, reliable | Enterprise software, B2B |
| **Dark** | ⚫ | Modern dark mode with proper contrast | Developer tools, night mode |

### 3. Special Theme Stories

Navigate to **"Themes/Showcase"** to see dedicated stories that demonstrate:

#### **All Components Story**
- Complete overview of how every component looks with the selected theme
- Typography variations
- Button variants and states
- Form elements
- Color palette visualization
- Shadow and border radius examples

#### **Button Showcase Story**
- Focused view of all button variants with the current theme
- Perfect for comparing button styles across themes

#### **Form Showcase Story**
- Form elements and their theme adaptations
- Input styles, focus states, and typography

#### **Typography Showcase Story**
- Complete typography hierarchy
- Font family, size, and color variations
- Demonstrates reading experience with each theme

## Theme Implementation Details

### How It Works

The Storybook integration uses a custom decorator that:

1. **Applies CSS Custom Properties**: Sets all theme tokens as CSS variables
2. **Updates DOM Classes**: Handles dark mode class application
3. **Real-time Updates**: Changes themes instantly without page reload
4. **SSR Safe**: Prevents hydration mismatches

### Theme Decorator

```typescript
// .storybook/preview.tsx
function ThemeDecorator({ children, theme }) {
  useEffect(() => {
    const selectedTheme = themePresets[theme]
    applyThemeToDOM(selectedTheme)
  }, [theme])

  return (
    <div 
      className={`min-h-[200px] p-6 transition-colors ${isDark ? 'dark' : ''}`}
      style={{
        backgroundColor: selectedTheme.colors.background,
        color: selectedTheme.colors.neutral[isDark ? 100 : 900],
        fontFamily: selectedTheme.typography.fontFamily.sans.join(', ')
      }}
    >
      {children}
    </div>
  )
}
```

### CSS Custom Properties Applied

When you switch themes, these CSS variables are automatically updated:

```css
/* Color variables */
--primary-50, --primary-100, ... --primary-950
--neutral-50, --neutral-100, ... --neutral-950
--background, --surface, --muted, --border
--success-500, --warning-500, --error-500

/* Typography variables */
--font-sans, --font-mono
--font-size-xs, --font-size-sm, ... --font-size-6xl
--font-weight-normal, --font-weight-medium, etc.

/* Spacing variables */
--spacing-0, --spacing-1, ... --spacing-24

/* Border radius variables */
--radius-none, --radius-sm, ... --radius-full

/* Shadow variables */
--shadow-none, --shadow-sm, ... --shadow-2xl
```

## Creating Theme-Aware Stories

### Basic Story with Theme Support

```typescript
// Your component story
export const MyComponent: Story = {
  render: () => (
    <div className="space-y-4">
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Input label="Email" placeholder="Enter email" />
    </div>
  ),
}
```

**That's it!** The theme decorator automatically applies the selected theme to your story.

### Advanced Theme-Aware Story

```typescript
export const ThemeAwareComponent: Story = {
  render: () => (
    <div 
      className="p-6 rounded-lg border"
      style={{
        backgroundColor: 'var(--surface)',
        borderColor: 'var(--border)'
      }}
    >
      <Text variant="h3" style={{ color: 'var(--primary-600)' }}>
        This adapts to the theme!
      </Text>
      <div className="mt-4 flex gap-2">
        {[100, 300, 500, 700, 900].map((shade) => (
          <div
            key={shade}
            className="w-8 h-8 rounded"
            style={{ backgroundColor: `var(--primary-${shade})` }}
          />
        ))}
      </div>
    </div>
  ),
}
```

### Story with Theme-Specific Content

```typescript
export const ConditionalContent: Story = {
  render: (_, context) => {
    const theme = context.globals.theme as ThemePresetName
    const isDark = theme === 'dark'
    
    return (
      <div className="space-y-4">
        <Text variant="h3">Current Theme: {themePresets[theme].name}</Text>
        <Text variant="body">
          {isDark 
            ? "This content is optimized for dark mode viewing" 
            : "This content is designed for light themes"
          }
        </Text>
        <Button variant={isDark ? "outline" : "primary"}>
          {isDark ? "Dark Mode Button" : "Light Mode Button"}
        </Button>
      </div>
    )
  },
}
```

## Best Practices

### 1. Test All Themes

Always test your components with all 5 theme presets:
- Ensure readability in both light and dark themes
- Check color contrast and accessibility
- Verify that spacing and sizing work across themes

### 2. Use Theme Variables

Instead of hardcoded colors, use CSS custom properties:

```typescript
// ❌ Don't do this
<div style={{ color: '#3b82f6' }}>

// ✅ Do this
<div style={{ color: 'var(--primary-500)' }}>
```

### 3. Consider Theme Personality

Different themes have different personalities:
- **Default**: Clean and professional
- **Minimal**: Subtle and refined
- **Vibrant**: Bold and energetic
- **Corporate**: Conservative and trustworthy
- **Dark**: Modern and focused

### 4. Document Theme Behavior

When creating stories, document how your component behaves with different themes:

```typescript
export const MyComponent: Story = {
  parameters: {
    docs: {
      description: {
        story: `
This component adapts its appearance based on the selected theme:
- **Default/Corporate**: Uses professional blue colors
- **Minimal**: Subtle gray tones with minimal shadows
- **Vibrant**: Bold colors with pronounced shadows
- **Dark**: High contrast with proper accessibility
        `,
      },
    },
  },
}
```

## Troubleshooting

### Theme Not Applying

1. **Check CSS Variables**: Ensure your component uses `var(--primary-500)` instead of hardcoded colors
2. **Refresh Page**: Sometimes a hard refresh helps if the theme seems stuck
3. **Check Console**: Look for any CSS or JavaScript errors

### Dark Theme Issues

1. **Text Contrast**: Ensure text is readable in dark mode
2. **Border Colors**: Use `var(--border)` for theme-appropriate borders
3. **Background Colors**: Use `var(--background)` or `var(--surface)`

### Custom Theme Variables

If you need custom theme-aware properties:

```typescript
// In your story or component
const customStyles = {
  borderColor: theme === 'vibrant' ? 'var(--primary-500)' : 'var(--border)',
  boxShadow: theme === 'minimal' ? 'var(--shadow-sm)' : 'var(--shadow-md)',
}
```

## Performance Notes

- **Theme switching is instant** - no page reloads required
- **CSS variables update globally** - all components update simultaneously
- **Minimal performance impact** - only CSS custom properties are changed
- **Memory efficient** - themes are statically defined

## Conclusion

The Storybook theme integration provides a powerful way to:

✅ **Visualize** how components look across different themes  
✅ **Test** theme compatibility during development  
✅ **Demonstrate** theme versatility to stakeholders  
✅ **Debug** theme-specific issues quickly  
✅ **Document** component behavior across themes  

Start Storybook (`npm run storybook`) and explore the **"Themes/Showcase"** section to see the full power of the Trucco Design System's theming capabilities!