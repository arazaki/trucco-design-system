/**
 * Trucco Design System - Semantic Theme Configuration
 * 
 * Industry best practice: Use semantic tokens that describe purpose, not appearance.
 * Based on Material Design 3, Radix Colors, and modern design system approaches.
 */

export interface SemanticTheme {
  /** Primary brand color for main actions and highlights */
  primary?: string;
  /** Text colors for different hierarchy levels */
  text?: {
    primary?: string;
    secondary?: string;
    onPrimary?: string;
  };
  /** Surface colors for backgrounds and cards */
  surface?: {
    primary?: string;
    secondary?: string;
    tertiary?: string;
  };
  /** Border colors for different emphasis levels */
  border?: {
    default?: string;
    strong?: string;
    interactive?: string;
  };
  /** Design tokens for consistent spacing and styling */
  design?: {
    radius?: 'minimal' | 'standard' | 'rounded' | 'pill';
    shadows?: 'none' | 'subtle' | 'standard' | 'prominent';
  };
}

/**
 * Apply a semantic theme to the document
 * 
 * @example
 * ```tsx
 * // Simple brand color change
 * applySemanticTheme({
 *   primary: '#ff6b35' // Orange brand
 * })
 * 
 * // Complete theme customization
 * applySemanticTheme({
 *   primary: '#8b5cf6', // Purple brand
 *   design: {
 *     radius: 'rounded', // More rounded corners
 *     shadows: 'prominent' // Stronger shadows
 *   }
 * })
 * ```
 */
export function applySemanticTheme(theme: SemanticTheme, target: HTMLElement = document.documentElement): void {
  // Apply primary color and generate harmonious variations
  if (theme.primary) {
    target.style.setProperty('--primary', theme.primary);
    // Generate hover/active states (simplified - in production use color science)
    target.style.setProperty('--primary-hover', darken(theme.primary, 0.1));
    target.style.setProperty('--primary-active', darken(theme.primary, 0.2));
    target.style.setProperty('--primary-subtle', lighten(theme.primary, 0.9));
    target.style.setProperty('--primary-muted', lighten(theme.primary, 0.8));
    target.style.setProperty('--primary-emphasis', darken(theme.primary, 0.15));
    
    // Update interactive states to match primary
    target.style.setProperty('--interactive', theme.primary);
    target.style.setProperty('--interactive-hover', darken(theme.primary, 0.1));
    target.style.setProperty('--interactive-active', darken(theme.primary, 0.2));
    target.style.setProperty('--text-link', theme.primary);
    target.style.setProperty('--text-link-hover', darken(theme.primary, 0.1));
    target.style.setProperty('--border-interactive', theme.primary);
  }

  // Apply text colors
  if (theme.text?.primary) {
    target.style.setProperty('--text-primary', theme.text.primary);
  }
  if (theme.text?.secondary) {
    target.style.setProperty('--text-secondary', theme.text.secondary);
  }
  if (theme.text?.onPrimary) {
    target.style.setProperty('--text-on-primary', theme.text.onPrimary);
  }

  // Apply surface colors
  if (theme.surface?.primary) {
    target.style.setProperty('--surface', theme.surface.primary);
  }
  if (theme.surface?.secondary) {
    target.style.setProperty('--surface-secondary', theme.surface.secondary);
  }
  if (theme.surface?.tertiary) {
    target.style.setProperty('--surface-tertiary', theme.surface.tertiary);
  }

  // Apply border colors
  if (theme.border?.default) {
    target.style.setProperty('--border', theme.border.default);
  }
  if (theme.border?.strong) {
    target.style.setProperty('--border-strong', theme.border.strong);
  }
  if (theme.border?.interactive) {
    target.style.setProperty('--border-interactive', theme.border.interactive);
  }

  // Apply design token presets
  if (theme.design?.radius) {
    const radiusPresets = {
      minimal: { sm: '0.125rem', md: '0.125rem', lg: '0.25rem', xl: '0.375rem' },
      standard: { sm: '0.25rem', md: '0.375rem', lg: '0.5rem', xl: '0.75rem' },
      rounded: { sm: '0.5rem', md: '0.75rem', lg: '1rem', xl: '1.25rem' },
      pill: { sm: '0.75rem', md: '1.5rem', lg: '2rem', xl: '3rem' }
    };
    
    const preset = radiusPresets[theme.design.radius];
    Object.entries(preset).forEach(([size, value]) => {
      target.style.setProperty(`--radius-${size}`, value);
    });
  }

  if (theme.design?.shadows) {
    const shadowPresets = {
      none: { sm: 'none', md: 'none', lg: 'none', xl: 'none' },
      subtle: { 
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.03)',
        md: '0 2px 4px 0 rgb(0 0 0 / 0.03)',
        lg: '0 4px 8px 0 rgb(0 0 0 / 0.03)',
        xl: '0 8px 16px 0 rgb(0 0 0 / 0.03)'
      },
      standard: {
        sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
      },
      prominent: {
        sm: '0 2px 8px 0 rgb(0 0 0 / 0.15)',
        md: '0 8px 16px -2px rgb(0 0 0 / 0.15)',
        lg: '0 16px 32px -4px rgb(0 0 0 / 0.15)',
        xl: '0 32px 64px -8px rgb(0 0 0 / 0.2)'
      }
    };

    const preset = shadowPresets[theme.design.shadows];
    Object.entries(preset).forEach(([size, value]) => {
      target.style.setProperty(`--shadow-${size}`, value);
    });
  }

  // Sync with shadcn CSS variables after applying semantic tokens
  // This ensures shadcn components use our updated semantic values
  syncShadcnVariables(target);
}

/**
 * Syncs Trucco semantic tokens with shadcn CSS variables
 * This function is called after semantic theme changes to ensure
 * shadcn components reflect the new theme values
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function syncShadcnVariables(_target: HTMLElement = document.documentElement): void {
  // shadcn variables are already mapped to semantic tokens in CSS
  // but we can force refresh any computed values if needed
  
  // Since our CSS has: --primary-foreground: var(--text-on-primary)
  // We just need to ensure the CSS cascade works properly
  // The CSS mapping handles this automatically
}

/**
 * Pre-made semantic themes for common use cases
 */
export const semanticThemes = {
  // Blue - Professional and trustworthy
  blue: {
    primary: '#3b82f6',
    design: { radius: 'standard', shadows: 'standard' }
  } as SemanticTheme,

  // Gray - Minimal and clean
  minimal: {
    primary: '#6b7280',
    design: { radius: 'minimal', shadows: 'subtle' }
  } as SemanticTheme,

  // Purple - Creative and modern
  vibrant: {
    primary: '#a855f7',
    design: { radius: 'rounded', shadows: 'prominent' }
  } as SemanticTheme,

  // Green - Growth and success
  nature: {
    primary: '#22c55e',
    design: { radius: 'standard', shadows: 'standard' }
  } as SemanticTheme,

  // Orange - Energy and enthusiasm
  warm: {
    primary: '#f97316',
    design: { radius: 'rounded', shadows: 'standard' }
  } as SemanticTheme,
} as const;

// Simple color manipulation helpers (simplified - use proper color library in production)
function darken(color: string, amount: number): string {
  // Convert hex to RGB, darken, convert back
  // This is simplified - in production use libraries like chroma.js or color2k
  if (color.startsWith('#')) {
    const hex = color.slice(1);
    const num = parseInt(hex, 16);
    const r = Math.max(0, (num >> 16) - Math.round(255 * amount));
    const g = Math.max(0, ((num >> 8) & 0x00FF) - Math.round(255 * amount));
    const b = Math.max(0, (num & 0x0000FF) - Math.round(255 * amount));
    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
  }
  return color;
}

function lighten(color: string, amount: number): string {
  // Convert hex to RGB, lighten, convert back
  // This is simplified - in production use libraries like chroma.js or color2k
  if (color.startsWith('#')) {
    const hex = color.slice(1);
    const num = parseInt(hex, 16);
    const r = Math.min(255, (num >> 16) + Math.round(255 * amount));
    const g = Math.min(255, ((num >> 8) & 0x00FF) + Math.round(255 * amount));
    const b = Math.min(255, (num & 0x0000FF) + Math.round(255 * amount));
    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
  }
  return color;
}

export default applySemanticTheme;