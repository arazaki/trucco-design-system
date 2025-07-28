/**
 * Trucco Design System - Theme Configuration Utility
 * 
 * This utility makes it easy for projects to configure their own themes
 * by setting CSS custom properties programmatically.
 */

export interface ThemeColors {
  primary?: {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500: string; // Required - main brand color
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    950?: string;
  };
  secondary?: {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    950?: string;
  };
  tertiary?: {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    950?: string;
  };
  neutral?: {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    950?: string;
  };
}

export interface ThemeDesignTokens {
  borderRadius?: {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    full?: string;
  };
  shadows?: {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
  fonts?: {
    sans?: string;
    mono?: string;
  };
}

export interface TruccoThemeConfig {
  colors?: ThemeColors;
  designTokens?: ThemeDesignTokens;
}

/**
 * Apply theme configuration to the document
 * 
 * @example
 * ```ts
 * // Simple brand color override
 * applyTheme({
 *   colors: {
 *     primary: {
 *       500: '#ff6b35', // Your brand orange
 *     }
 *   }
 * })
 * 
 * // Complete theme customization
 * applyTheme({
 *   colors: {
 *     primary: {
 *       50: '#fef7ee',
 *       100: '#fdecdc',
 *       200: '#fbd4b4',
 *       300: '#f8b583',
 *       400: '#f58c4f',
 *       500: '#ff6b35', // Main brand
 *       600: '#e8551d',
 *       700: '#c13d15',
 *       800: '#9a3117',
 *       900: '#7c2916',
 *       950: '#431309'
 *     },
 *     secondary: {
 *       500: '#6366f1' // Purple accent
 *     }
 *   },
 *   designTokens: {
 *     borderRadius: {
 *       sm: '0.25rem',
 *       md: '0.5rem',
 *       lg: '1rem',
 *       xl: '1.5rem'
 *     },
 *     fonts: {
 *       sans: 'Poppins, system-ui, sans-serif'
 *     }
 *   }
 * })
 * ```
 */
export function applyTheme(config: TruccoThemeConfig, target: HTMLElement = document.documentElement): void {
  const { colors, designTokens } = config;

  // Apply color overrides
  if (colors?.primary) {
    Object.entries(colors.primary).forEach(([shade, value]) => {
      target.style.setProperty(`--color-primary-${shade}`, value);
    });
  }

  if (colors?.secondary) {
    Object.entries(colors.secondary).forEach(([shade, value]) => {
      target.style.setProperty(`--color-secondary-${shade}`, value);
    });
  }

  if (colors?.tertiary) {
    Object.entries(colors.tertiary).forEach(([shade, value]) => {
      target.style.setProperty(`--color-tertiary-${shade}`, value);
    });
  }

  if (colors?.neutral) {
    Object.entries(colors.neutral).forEach(([shade, value]) => {
      target.style.setProperty(`--color-neutral-${shade}`, value);
    });
  }

  // Apply design token overrides
  if (designTokens?.borderRadius) {
    Object.entries(designTokens.borderRadius).forEach(([size, value]) => {
      target.style.setProperty(`--radius-${size}`, value);
    });
  }

  if (designTokens?.shadows) {
    Object.entries(designTokens.shadows).forEach(([size, value]) => {
      target.style.setProperty(`--shadow-${size}`, value);
    });
  }

  if (designTokens?.fonts) {
    Object.entries(designTokens.fonts).forEach(([family, value]) => {
      target.style.setProperty(`--font-${family}`, value);
    });
  }
}

/**
 * Generate a complete color scale from a single color
 * Uses a simple tint/shade algorithm - projects can use tools like
 * Radix Colors, Tailwind Palette Generator, or HSL math for better results
 */
export function generateColorScale(baseColor: string): Record<string, string> {
  // This is a simple implementation - in a real project you'd want
  // to use proper color science or tools like Radix Colors
  return {
    50: lighten(baseColor, 0.95),
    100: lighten(baseColor, 0.9),
    200: lighten(baseColor, 0.8),
    300: lighten(baseColor, 0.6),
    400: lighten(baseColor, 0.3),
    500: baseColor, // Base color
    600: darken(baseColor, 0.1),
    700: darken(baseColor, 0.2),
    800: darken(baseColor, 0.3),
    900: darken(baseColor, 0.4),
    950: darken(baseColor, 0.5),
  };
}

// Simple color manipulation helpers
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function lighten(color: string, _amount: number): string {
  // Simplified - in production use a proper color manipulation library
  return color; // Return original for now
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function darken(color: string, _amount: number): string {
  // Simplified - in production use a proper color manipulation library
  return color; // Return original for now
}

/**
 * Example theme configurations that projects can use as starting points
 */
export const exampleThemes = {
  // Minimal grayscale theme
  minimal: {
    colors: {
      primary: {
        500: '#6b7280', // Gray as primary
      }
    },
    designTokens: {
      borderRadius: {
        sm: '0.125rem',
        md: '0.125rem',
        lg: '0.25rem',
        xl: '0.375rem'
      }
    }
  } as TruccoThemeConfig,

  // Vibrant purple theme
  vibrant: {
    colors: {
      primary: {
        500: '#a855f7', // Electric purple
      }
    },
    designTokens: {
      borderRadius: {
        sm: '0.75rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem'
      }
    }
  } as TruccoThemeConfig,

  // Corporate green theme
  corporate: {
    colors: {
      primary: {
        500: '#22c55e', // Professional green
      }
    }
  } as TruccoThemeConfig,
} as const;

export default applyTheme;