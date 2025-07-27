// Trucco Design System - Organized by Atomic Design principles

// Atoms - Basic building blocks
export * from './atoms'

// Molecules - Simple functional units
export * from './molecules'  

// Organisms - Complex interface sections
export * from './organisms'

// Templates - Layout structures
export * from './templates'

// Design tokens and theme presets (stateless)
export type { 
  DesignTokens, 
  ThemeColors, 
  SpacingTokens, 
  TypographyTokens, 
  RadiusTokens, 
  ShadowTokens,
  ThemePreset,
  ThemePresetName
} from '../lib/themes/tokens'
export { 
  defaultTokens,
  themePresets,
  defaultTheme,
  minimalTheme,
  vibrantTheme,
  corporateTheme,
  darkTheme,
  componentVariations
} from '../lib/themes/tokens'

// Utilities
export { cn } from '../lib/utils/cn'
export { cva, type VariantProps } from '../lib/utils/variants'