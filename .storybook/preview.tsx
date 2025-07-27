import type { Preview } from '@storybook/nextjs'
import React, { useEffect } from 'react'
import '../app/globals.css'
import { 
  themePresets, 
  type ThemePresetName,
  defaultTheme,
  minimalTheme,
  vibrantTheme,
  corporateTheme,
  darkTheme
} from '../lib/themes/theme-presets'

// Helper function to apply theme tokens to DOM
function applyThemeToDOM(theme: typeof defaultTheme) {
  const root = document.documentElement
  
  // Apply primary colors
  Object.entries(theme.colors.primary).forEach(([key, value]) => {
    root.style.setProperty(`--primary-${key}`, value)
  })
  
  // Apply neutral colors
  Object.entries(theme.colors.neutral).forEach(([key, value]) => {
    root.style.setProperty(`--neutral-${key}`, value)
  })
  
  // Apply surface colors
  root.style.setProperty('--background', theme.colors.background)
  root.style.setProperty('--surface', theme.colors.surface)
  root.style.setProperty('--muted', theme.colors.muted)
  root.style.setProperty('--border', theme.colors.border)
  
  // Apply semantic colors
  root.style.setProperty('--success-500', theme.colors.success[500])
  root.style.setProperty('--warning-500', theme.colors.warning[500])
  root.style.setProperty('--error-500', theme.colors.error[500])
  
  // Apply typography
  root.style.setProperty('--font-sans', theme.typography.fontFamily.sans.join(', '))
  root.style.setProperty('--font-mono', theme.typography.fontFamily.mono.join(', '))
  
  // Apply font sizes
  Object.entries(theme.typography.fontSize).forEach(([key, value]) => {
    root.style.setProperty(`--font-size-${key}`, value)
  })
  
  // Apply font weights
  Object.entries(theme.typography.fontWeight).forEach(([key, value]) => {
    root.style.setProperty(`--font-weight-${key}`, value)
  })
  
  // Apply spacing
  Object.entries(theme.spacing).forEach(([key, value]) => {
    root.style.setProperty(`--spacing-${key}`, value)
  })
  
  // Apply border radius
  Object.entries(theme.borderRadius).forEach(([key, value]) => {
    root.style.setProperty(`--radius-${key}`, value)
  })
  
  // Apply shadows
  Object.entries(theme.shadows).forEach(([key, value]) => {
    root.style.setProperty(`--shadow-${key}`, value)
  })
  
  // Handle dark theme
  if (theme.name === 'Dark') {
    root.classList.add('dark')
    root.style.colorScheme = 'dark'
  } else {
    root.classList.remove('dark')
    root.style.colorScheme = 'light'
  }
}

// Theme decorator component
function ThemeDecorator({ children, theme }: { children: React.ReactNode, theme: ThemePresetName }) {
  useEffect(() => {
    const selectedTheme = themePresets[theme]
    applyThemeToDOM(selectedTheme)
  }, [theme])

  const selectedTheme = themePresets[theme]
  const isDark = theme === 'dark'
  
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

const preview: Preview = {
  parameters: {
    docs: {
      toc: true,
    },
    backgrounds: {
      disable: true, // Disable default backgrounds since we're using themes
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Design system theme',
      defaultValue: 'default',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'default', title: 'Default', left: '🔵' },
          { value: 'minimal', title: 'Minimal', left: '⚪' },
          { value: 'vibrant', title: 'Vibrant', left: '🟣' },
          { value: 'corporate', title: 'Corporate', left: '🔷' },
          { value: 'dark', title: 'Dark', left: '⚫' },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme as ThemePresetName || 'default'
      
      return React.createElement(
        ThemeDecorator,
        { theme },
        React.createElement(Story)
      )
    },
  ],
}

export default preview