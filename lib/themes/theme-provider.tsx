'use client'

import React, { createContext, useContext, useEffect, useRef } from 'react'
import { create } from 'zustand'
import { subscribeWithSelector, devtools, persist, createJSONStorage } from 'zustand/middleware'
import { DesignTokens, defaultTokens } from './tokens'

type Theme = 'light' | 'dark' | 'auto'
type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
  customTokens?: Partial<DesignTokens>
}

// Separate state and actions for better TypeScript support
interface ThemeState {
  theme: Theme
  resolvedTheme: 'light' | 'dark'
  systemTheme: 'light' | 'dark'
  customTokens: Partial<DesignTokens>
  storageKey: string
  isHydrated: boolean
}

interface ThemeActions {
  setTheme: (theme: Theme) => void
  setSystemTheme: (systemTheme: 'light' | 'dark') => void
  setCustomTokens: (tokens: Partial<DesignTokens>) => void
  setHydrated: (hydrated: boolean) => void
  resetTheme: () => void
}

type ThemeStore = ThemeState & ThemeActions

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deepMerge(target: any, source: any): any {
  const result = { ...target }
  
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(
        target[key] || {},
        source[key]
      )
    } else {
      result[key] = source[key]
    }
  }
  
  return result
}

// Default initial state
const DEFAULT_STATE: ThemeState = {
  theme: 'auto',
  resolvedTheme: 'light',
  systemTheme: 'light',
  customTokens: {},
  storageKey: 'trucco-theme',
  isHydrated: false,
}

// Create store factory for SSR safety
const createThemeStore = (initProps?: Partial<ThemeState>) => {
  return create<ThemeStore>()(
    devtools(
      persist(
        subscribeWithSelector((set, get) => ({
          ...DEFAULT_STATE,
          ...initProps,

          // Actions with Flux-inspired pattern
          setTheme: (theme: Theme) => {
            const { systemTheme } = get()
            const resolvedTheme = theme === 'auto' ? systemTheme : theme
            
            // Apply theme to DOM immediately
            if (typeof document !== 'undefined') {
              document.documentElement.classList.toggle('dark', resolvedTheme === 'dark')
              document.documentElement.style.colorScheme = resolvedTheme
            }
            
            set({ theme, resolvedTheme }, false, 'theme/setTheme')
          },

          setSystemTheme: (systemTheme: 'light' | 'dark') => {
            const { theme } = get()
            const resolvedTheme = theme === 'auto' ? systemTheme : theme
            
            // Only update DOM if theme is auto
            if (typeof document !== 'undefined' && theme === 'auto') {
              document.documentElement.classList.toggle('dark', resolvedTheme === 'dark')
              document.documentElement.style.colorScheme = resolvedTheme
            }
            
            set({ systemTheme, resolvedTheme }, false, 'theme/setSystemTheme')
          },

          setCustomTokens: (customTokens: Partial<DesignTokens>) => {
            set({ customTokens }, false, 'theme/setCustomTokens')
          },

          setHydrated: (isHydrated: boolean) => {
            set({ isHydrated }, false, 'theme/setHydrated')
          },

          resetTheme: () => {
            const resetState = { ...DEFAULT_STATE, isHydrated: true }
            
            if (typeof document !== 'undefined') {
              document.documentElement.classList.remove('dark')
              document.documentElement.style.colorScheme = 'light'
            }
            
            set(resetState, false, 'theme/resetTheme')
          },
        })),
        {
          name: 'trucco-theme-storage',
          storage: createJSONStorage(() => localStorage),
          partialize: (state) => ({ 
            theme: state.theme,
            customTokens: state.customTokens,
          }),
          skipHydration: true, // Handle hydration manually for SSR safety
        }
      ),
      { name: 'TruccoThemeStore' }
    )
  )
}

// Context for store sharing
const ThemeStoreContext = createContext<ReturnType<typeof createThemeStore> | null>(null)

export function ThemeProvider({
  children,
  defaultTheme = 'auto',
  storageKey = 'trucco-theme',
  customTokens = {},
}: ThemeProviderProps) {
  const storeRef = useRef<ReturnType<typeof createThemeStore> | null>(null)

  // Create store only once per provider instance
  if (!storeRef.current) {
    storeRef.current = createThemeStore({
      theme: defaultTheme,
      storageKey,
      customTokens,
    })
  }

  return (
    <ThemeStoreContext.Provider value={storeRef.current}>
      <ThemeHydration>
        {children}
      </ThemeHydration>
    </ThemeStoreContext.Provider>
  )
}

// Separate component for hydration logic to prevent re-renders
function ThemeHydration({ children }: { children: React.ReactNode }) {
  const store = useContext(ThemeStoreContext)
  if (!store) throw new Error('ThemeHydration must be used within ThemeProvider')

  const { 
    setSystemTheme, 
    setHydrated, 
    resolvedTheme, 
    customTokens,
    isHydrated 
  } = store()

  // Handle system theme detection and hydration
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => setSystemTheme(mediaQuery.matches ? 'dark' : 'light')

    // Set initial system theme
    handleChange()
    mediaQuery.addEventListener('change', handleChange)

    // Handle persistence rehydration
    store.persist.rehydrate()
    setHydrated(true)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [setSystemTheme, setHydrated, store.persist])

  // Apply CSS custom properties when tokens or theme change
  useEffect(() => {
    if (!isHydrated) return

    const tokens = resolvedTheme === 'dark' 
      ? deepMerge(darkTokens, customTokens)
      : deepMerge(defaultTokens, customTokens)

    // Set CSS custom properties for runtime access
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const setCSSProperty = (obj: any, prefix = '') => {
      for (const [key, value] of Object.entries(obj)) {
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
          setCSSProperty(value, `${prefix}${prefix ? '-' : ''}${key}`)
        } else {
          const cssVar = `--trucco-${prefix}${prefix ? '-' : ''}${key}`
          document.documentElement.style.setProperty(cssVar, String(value))
        }
      }
    }

    setCSSProperty(tokens)
  }, [resolvedTheme, customTokens, isHydrated])

  return <>{children}</>
}

export const useTheme = () => {
  const store = useContext(ThemeStoreContext)
  if (!store) throw new Error('useTheme must be used within a ThemeProvider')

  const { 
    theme, 
    resolvedTheme, 
    customTokens, 
    isHydrated, 
    setTheme, 
    setCustomTokens, 
    resetTheme 
  } = store()

  // Calculate tokens
  const tokens = resolvedTheme === 'dark' 
    ? deepMerge(darkTokens, customTokens)
    : deepMerge(defaultTokens, customTokens)

  return {
    theme,
    resolvedTheme,
    tokens,
    isHydrated,
    setTheme,
    updateTokens: setCustomTokens,
    resetTheme,
  }
}