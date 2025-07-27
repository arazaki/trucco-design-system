'use client'

import React, { createContext, useContext, useEffect, useState, useMemo } from 'react'
import { DesignTokens, defaultTokens } from './tokens'

type Theme = 'light' | 'dark' | 'auto'
type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
  customTokens?: Partial<DesignTokens>
}

interface ThemeProviderState {
  theme: Theme
  tokens: DesignTokens
  setTheme: (theme: Theme) => void
  updateTokens: (tokens: Partial<DesignTokens>) => void
}

const initialState: ThemeProviderState = {
  theme: 'auto',
  tokens: defaultTokens,
  setTheme: () => null,
  updateTokens: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

// Dark theme tokens - modified version of default tokens
const darkTokens: DesignTokens = {
  ...defaultTokens,
  colors: {
    ...defaultTokens.colors,
    background: {
      primary: '#111827',
      secondary: '#1f2937',
      tertiary: '#374151',
    },
    foreground: {
      primary: '#f9fafb',
      secondary: '#e5e7eb',
      tertiary: '#d1d5db',
      muted: '#9ca3af',
    },
    border: {
      primary: '#374151',
      secondary: '#4b5563',
      muted: '#1f2937',
    },
  },
}

function deepMerge(target: any, source: any): any {
  const result = { ...target }
  
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(target[key] || {}, source[key])
    } else {
      result[key] = source[key]
    }
  }
  
  return result
}

export function ThemeProvider({
  children,
  defaultTheme = 'auto',
  storageKey = 'trucco-theme',
  customTokens = {},
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [mounted, setMounted] = useState(false)
  
  // Stable reference for customTokens
  const stableCustomTokens = useMemo(() => customTokens, [JSON.stringify(customTokens)])
  
  // Calculate effective theme
  const effectiveTheme = useMemo(() => {
    if (!mounted) return 'light' // SSR safe default
    if (theme === 'auto') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return theme
  }, [theme, mounted])
  
  // Calculate current tokens based on effective theme
  const tokens = useMemo(() => {
    const baseTokens = effectiveTheme === 'dark' ? darkTokens : defaultTokens
    return deepMerge(baseTokens, stableCustomTokens)
  }, [effectiveTheme, stableCustomTokens])

  // Handle mounting to avoid SSR hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  // Load theme from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(storageKey) as Theme
    if (stored && (stored === 'light' || stored === 'dark' || stored === 'auto')) {
      setTheme(stored)
    }
  }, [storageKey])

  // Apply theme classes and CSS custom properties
  useEffect(() => {
    if (!mounted) return
    
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(effectiveTheme)
    
    // Set CSS custom properties for runtime access
    const setCSSProperty = (obj: any, prefix = '') => {
      for (const [key, value] of Object.entries(obj)) {
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
          setCSSProperty(value, `${prefix}${prefix ? '-' : ''}${key}`)
        } else {
          const cssVar = `--trucco-${prefix}${prefix ? '-' : ''}${key}`
          root.style.setProperty(cssVar, String(value))
        }
      }
    }

    setCSSProperty(tokens)
  }, [effectiveTheme, tokens, mounted])

  const value = useMemo(() => ({
    theme,
    tokens,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme)
      setTheme(newTheme)
    },
    updateTokens: (newTokens: Partial<DesignTokens>) => {
      // This would require additional state management for user-defined token overrides
      // For now, this is a no-op since tokens are computed from theme + customTokens
      console.warn('updateTokens is not yet implemented for runtime token updates')
    },
  }), [theme, tokens, storageKey])

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}