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
  
  // Memoize customTokens to prevent unnecessary re-renders
  const stableCustomTokens = useMemo(() => customTokens, [JSON.stringify(customTokens)])
  
  const [tokens, setTokens] = useState<DesignTokens>(() => 
    deepMerge(defaultTokens, stableCustomTokens)
  )

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')

    let effectiveTheme = theme
    if (theme === 'auto') {
      effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    }

    root.classList.add(effectiveTheme)

    // Update CSS custom properties
    const currentTokens = effectiveTheme === 'dark' 
      ? deepMerge(darkTokens, stableCustomTokens)
      : deepMerge(defaultTokens, stableCustomTokens)
    
    setTokens(currentTokens)
    
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

    setCSSProperty(currentTokens)
  }, [theme, stableCustomTokens])

  useEffect(() => {
    const stored = localStorage.getItem(storageKey) as Theme
    if (stored) {
      setTheme(stored)
    }
  }, [storageKey])

  const value = {
    theme,
    tokens,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
    updateTokens: (newTokens: Partial<DesignTokens>) => {
      const mergedTokens = deepMerge(tokens, newTokens)
      setTokens(mergedTokens)
    },
  }

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