'use client'

import React, { useEffect } from 'react'
import { create } from 'zustand'
import { DesignTokens, defaultTokens } from './tokens'

type Theme = 'light' | 'dark' | 'auto'
type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
  customTokens?: Partial<DesignTokens>
}

interface ThemeStore {
  theme: Theme
  customTokens: Partial<DesignTokens>
  storageKey: string
  mounted: boolean
  setTheme: (theme: Theme) => void
  setCustomTokens: (tokens: Partial<DesignTokens>) => void
  setMounted: (mounted: boolean) => void
  getEffectiveTheme: () => Theme
  getTokens: () => DesignTokens
}

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

// Create Zustand store
const useThemeStore = create<ThemeStore>((set, get) => ({
  theme: 'auto',
  customTokens: {},
  storageKey: 'trucco-theme',
  mounted: false,
  
  setTheme: (theme: Theme) => {
    const { storageKey } = get()
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, theme)
    }
    set({ theme })
  },
  
  setCustomTokens: (customTokens: Partial<DesignTokens>) => {
    set({ customTokens })
  },
  
  setMounted: (mounted: boolean) => {
    set({ mounted })
  },
  
  getEffectiveTheme: (): Theme => {
    const { theme, mounted } = get()
    if (!mounted || typeof window === 'undefined') return 'light' // SSR safe default
    if (theme === 'auto') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return theme
  },
  
  getTokens: (): DesignTokens => {
    const { customTokens } = get()
    const effectiveTheme = get().getEffectiveTheme()
    const baseTokens = effectiveTheme === 'dark' ? darkTokens : defaultTokens
    return deepMerge(baseTokens, customTokens)
  }
}))

export function ThemeProvider({
  children,
  defaultTheme = 'auto',
  storageKey = 'trucco-theme',
  customTokens = {},
}: ThemeProviderProps) {
  const { 
    theme, 
    mounted, 
    setTheme, 
    setCustomTokens, 
    setMounted, 
    getEffectiveTheme, 
    getTokens 
  } = useThemeStore()

  // Initialize store with props
  useEffect(() => {
    useThemeStore.setState({ 
      theme: defaultTheme, 
      customTokens, 
      storageKey 
    })
  }, []) // Only run once on mount

  // Handle mounting
  useEffect(() => {
    setMounted(true)
    
    // Load theme from localStorage
    const stored = localStorage.getItem(storageKey) as Theme
    if (stored && (stored === 'light' || stored === 'dark' || stored === 'auto')) {
      setTheme(stored)
    }
  }, [storageKey, setTheme, setMounted])

  // Apply theme classes and CSS custom properties
  useEffect(() => {
    if (!mounted) return
    
    const effectiveTheme = getEffectiveTheme()
    const tokens = getTokens()
    
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
  }, [theme, mounted, getEffectiveTheme, getTokens])

  return <>{children}</>
}

export const useTheme = () => {
  const { theme, setTheme, getEffectiveTheme, getTokens } = useThemeStore()
  
  return {
    theme,
    tokens: getTokens(),
    effectiveTheme: getEffectiveTheme(),
    setTheme,
    updateTokens: (newTokens: Partial<DesignTokens>) => {
      useThemeStore.getState().setCustomTokens(newTokens)
    }
  }
}