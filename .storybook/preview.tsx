import type { Preview } from '@storybook/nextjs'
import React, { useEffect } from 'react'
import '../app/globals.css'
import { applySemanticTheme, semanticThemes } from '../lib/theme'

type DemoTheme = 'blue' | 'minimal' | 'vibrant' | 'nature' | 'dark'

// Demo themes using the new semantic approach
const demoThemes = {
  blue: semanticThemes.blue,
  minimal: semanticThemes.minimal,
  vibrant: semanticThemes.vibrant,
  nature: semanticThemes.nature,
  dark: {
    primary: '#6366f1', // Purple for dark mode
    design: { radius: 'standard', shadows: 'standard' }
  }
}

// Theme decorator component that applies demo themes
function ThemeDecorator({ children, theme }: { children: React.ReactNode, theme: DemoTheme }) {
  useEffect(() => {
    const themeConfig = demoThemes[theme]
    
    // Apply the semantic theme configuration
    applySemanticTheme(themeConfig)
    
    // Handle dark mode
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      document.documentElement.style.colorScheme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.style.colorScheme = 'light'
    }
  }, [theme])

  const isDark = theme === 'dark'
  
  return (
    <div className={`min-h-[200px] p-6 transition-colors ${isDark ? 'dark' : ''}`}>
      {children}
    </div>
  )
}

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: '🎨 Theme',
        icon: 'circlehollow',
        items: [
          { value: 'blue', title: 'Blue', right: '🔵' },
          { value: 'minimal', title: 'Minimal', right: '⚪' },
          { value: 'vibrant', title: 'Vibrant', right: '🟣' },
          { value: 'nature', title: 'Nature', right: '🟢' },
          { value: 'dark', title: 'Dark', right: '⚫' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'blue',
  },
  parameters: {
    docs: {
      toc: true,
    },
    backgrounds: {
      disable: true, // Disable default backgrounds since we're using themes
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme as DemoTheme || 'blue'
      
      return React.createElement(
        ThemeDecorator,
        { theme },
        React.createElement(Story)
      )
    },
  ],
}

export default preview