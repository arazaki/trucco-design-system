/**
 * Trucco Design System - Theme Presets
 * 
 * Beautiful theme presets inspired by popular design systems
 * including Shadcn/ui, Chakra UI, Material Design 3, and others
 */

// Color scale type for consistent color palettes
type ColorScale = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string; // Main color
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
}

// Semantic color type for success, warning, error
type SemanticColor = {
  50: string;
  500: string;
  600: string;
  900: string;
}

// Complete theme type definition
export type ThemePreset = {
  name: string;
  colors: {
    primary: ColorScale;
    neutral: ColorScale;
    secondary?: ColorScale;
    accent?: ColorScale;
    success: SemanticColor;
    warning: SemanticColor;
    error: SemanticColor;
    background: string;
    surface: string;
    muted: string;
    border: string;
  };
  typography: {
    fontFamily: {
      sans: string[];
      mono: string[];
    };
    fontSize: Record<string, string>;
    lineHeight: Record<string, string>;
    fontWeight: Record<string, string>;
  };
  spacing: Record<string | number, string>;
  borderRadius: Record<string, string>;
  shadows: Record<string, string>;
}

// 1. Default Theme - Modern, versatile, professional
export const defaultTheme: ThemePreset = {
  name: 'Default',
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe', 
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6', // Main primary
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554'
    },
    neutral: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
      950: '#09090b'
    },
    success: {
      50: '#f0fdf4',
      500: '#22c55e',
      600: '#16a34a',
      900: '#14532d'
    },
    warning: {
      50: '#fefce8',
      500: '#eab308',
      600: '#ca8a04',
      900: '#713f12'
    },
    error: {
      50: '#fef2f2',
      500: '#ef4444',
      600: '#dc2626',
      900: '#7f1d1d'
    },
    background: '#ffffff',
    surface: '#ffffff',
    muted: '#f4f4f5',
    border: '#e4e4e7'
  },
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'Consolas', 'monospace']
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
      '6xl': '3.75rem'  // 60px
    },
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75'
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    }
  },
  spacing: {
    0: '0',
    1: '0.25rem',  // 4px
    2: '0.5rem',   // 8px
    3: '0.75rem',  // 12px
    4: '1rem',     // 16px
    5: '1.25rem',  // 20px
    6: '1.5rem',   // 24px
    8: '2rem',     // 32px
    10: '2.5rem',  // 40px
    12: '3rem',    // 48px
    16: '4rem',    // 64px
    20: '5rem',    // 80px
    24: '6rem'     // 96px
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',   // 2px
    base: '0.25rem',  // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    full: '9999px'
  },
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)'
  }
} as const

// 2. Minimal Theme - Clean, subtle, refined
export const minimalTheme: ThemePreset = {
  name: 'Minimal',
  colors: {
    primary: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b', // Muted primary
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617'
    },
    neutral: {
      50: '#fefefe',
      100: '#fdfdfd',
      200: '#fafafa',
      300: '#f4f4f4',
      400: '#e5e5e5',
      500: '#a3a3a3',
      600: '#737373',
      700: '#525252',
      800: '#404040',
      900: '#262626',
      950: '#171717'
    },
    success: {
      50: '#f7fdf7',
      500: '#4ade80',
      600: '#22c55e',
      900: '#14532d'
    },
    warning: {
      50: '#fffdf7',
      500: '#f59e0b',
      600: '#d97706',
      900: '#78350f'
    },
    error: {
      50: '#fef7f7',
      500: '#f87171',
      600: '#ef4444',
      900: '#7f1d1d'
    },
    background: '#ffffff',
    surface: '#fefefe',
    muted: '#fafafa',
    border: '#e5e5e5'
  },
  typography: {
    fontFamily: {
      sans: ['SF Pro Display', 'system-ui', 'sans-serif'],
      mono: ['SF Mono', 'Monaco', 'monospace']
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem'
    },
    lineHeight: {
      tight: '1.2',
      normal: '1.4',
      relaxed: '1.6'
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    }
  },
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem'
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',  // Minimal rounded corners
    base: '0.25rem',
    md: '0.25rem',   // Keep consistent
    lg: '0.375rem',
    xl: '0.5rem',
    '2xl': '0.75rem',
    full: '9999px'
  },
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.03)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.1)'
  }
} as const

// 3. Vibrant Theme - Bold, energetic, creative
export const vibrantTheme: ThemePreset = {
  name: 'Vibrant',
  colors: {
    primary: {
      50: '#fdf4ff',
      100: '#fae8ff',
      200: '#f5d0fe',
      300: '#f0abfc',
      400: '#e879f9',
      500: '#d946ef', // Vibrant magenta
      600: '#c026d3',
      700: '#a21caf',
      800: '#86198f',
      900: '#701a75',
      950: '#4a044e'
    },
    secondary: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6', // Vibrant teal
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
      950: '#042f2e'
    },
    accent: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316', // Vibrant orange
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
      950: '#431407'
    },
    neutral: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617'
    },
    success: {
      50: '#ecfdf5',
      500: '#10b981',
      600: '#059669',
      900: '#064e3b'
    },
    warning: {
      50: '#fffbeb',
      500: '#f59e0b',
      600: '#d97706',
      900: '#78350f'
    },
    error: {
      50: '#fef2f2',
      500: '#ef4444',
      600: '#dc2626',
      900: '#7f1d1d'
    },
    background: '#ffffff',
    surface: '#ffffff',
    muted: '#f8fafc',
    border: '#e2e8f0'
  },
  typography: {
    fontFamily: {
      sans: ['Poppins', 'system-ui', 'sans-serif'],
      mono: ['Fira Code', 'Consolas', 'monospace']
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem'
    },
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75'
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    }
  },
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem'
  },
  borderRadius: {
    none: '0',
    sm: '0.25rem',   // More pronounced
    base: '0.5rem',
    md: '0.75rem',
    lg: '1rem',      // Bold rounded corners
    xl: '1.25rem',
    '2xl': '1.5rem',
    full: '9999px'
  },
  shadows: {
    none: 'none',
    sm: '0 2px 4px 0 rgb(236 72 153 / 0.1)',
    base: '0 4px 6px -1px rgb(236 72 153 / 0.1), 0 2px 4px -2px rgb(236 72 153 / 0.1)',
    md: '0 10px 15px -3px rgb(236 72 153 / 0.1), 0 4px 6px -4px rgb(236 72 153 / 0.1)',
    lg: '0 20px 25px -5px rgb(236 72 153 / 0.1), 0 8px 10px -6px rgb(236 72 153 / 0.1)',
    xl: '0 25px 50px -12px rgb(236 72 153 / 0.25), 0 8px 16px -8px rgb(236 72 153 / 0.1)',
    '2xl': '0 50px 100px -20px rgb(236 72 153 / 0.25)'
  }
} as const

// 4. Corporate Theme - Professional, trustworthy, reliable
export const corporateTheme: ThemePreset = {
  name: 'Corporate',
  colors: {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9', // Professional blue
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
      950: '#082f49'
    },
    secondary: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b', // Professional gray
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617'
    },
    accent: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e', // Professional green
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
      950: '#052e16'
    },
    neutral: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
      950: '#09090b'
    },
    success: {
      50: '#f0fdf4',
      500: '#22c55e',
      600: '#16a34a',
      900: '#14532d'
    },
    warning: {
      50: '#fefce8',
      500: '#eab308',
      600: '#ca8a04',
      900: '#713f12'
    },
    error: {
      50: '#fef2f2',
      500: '#ef4444',
      600: '#dc2626',
      900: '#7f1d1d'
    },
    background: '#ffffff',
    surface: '#fafafa',
    muted: '#f4f4f5',
    border: '#e4e4e7'
  },
  typography: {
    fontFamily: {
      sans: ['Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      mono: ['Source Code Pro', 'Consolas', 'monospace']
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem'
    },
    lineHeight: {
      tight: '1.3',
      normal: '1.5',
      relaxed: '1.7'
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    }
  },
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem'
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',  // Conservative rounding
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px'
  },
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.15)'
  }
} as const

// 5. Dark Theme - Modern dark mode with proper contrast
export const darkTheme: ThemePreset = {
  name: 'Dark',
  colors: {
    primary: {
      50: '#1e1b4b',
      100: '#312e81',
      200: '#3730a3',
      300: '#4338ca',
      400: '#4f46e5',
      500: '#6366f1', // Bright primary for dark
      600: '#818cf8',
      700: '#a5b4fc',
      800: '#c7d2fe',
      900: '#e0e7ff',
      950: '#f0f4ff'
    },
    neutral: {
      50: '#09090b',
      100: '#18181b',
      200: '#27272a',
      300: '#3f3f46',
      400: '#52525b',
      500: '#71717a',
      600: '#a1a1aa',
      700: '#d4d4d8',
      800: '#e4e4e7',
      900: '#f4f4f5',
      950: '#fafafa'
    },
    success: {
      50: '#14532d',
      500: '#22c55e',
      600: '#4ade80',
      900: '#dcfce7'
    },
    warning: {
      50: '#713f12',
      500: '#eab308',
      600: '#facc15',
      900: '#fefce8'
    },
    error: {
      50: '#7f1d1d',
      500: '#ef4444',
      600: '#f87171',
      900: '#fef2f2'
    },
    background: '#09090b',
    surface: '#18181b',
    muted: '#27272a',
    border: '#3f3f46'
  },
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'Consolas', 'monospace']
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem'
    },
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75'
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    }
  },
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem'
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px'
  },
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.3)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.4), 0 1px 2px -1px rgb(0 0 0 / 0.4)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.4)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.4)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.4), 0 8px 10px -6px rgb(0 0 0 / 0.4)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.5)'
  }
} as const

// Theme collection for easy access
export const themePresets = {
  default: defaultTheme,
  minimal: minimalTheme,
  vibrant: vibrantTheme,
  corporate: corporateTheme,
  dark: darkTheme
} as const

export type ThemePresetName = keyof typeof themePresets

// Component styling variations for different themes
export const componentVariations = {
  button: {
    variants: {
      primary: {
        default: {
          backgroundColor: 'var(--primary-500)',
          color: 'white',
          borderRadius: 'var(--radius-base)',
          padding: 'var(--spacing-2) var(--spacing-4)',
          fontWeight: 'var(--font-weight-medium)',
          boxShadow: 'var(--shadow-sm)',
          border: 'none',
          transition: 'all 0.2s ease-in-out',
        },
        hover: {
          backgroundColor: 'var(--primary-600)',
          boxShadow: 'var(--shadow-md)',
          transform: 'translateY(-1px)'
        },
        active: {
          backgroundColor: 'var(--primary-700)',
          transform: 'translateY(0)'
        }
      },
      secondary: {
        default: {
          backgroundColor: 'var(--surface)',
          color: 'var(--neutral-900)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-base)',
          padding: 'var(--spacing-2) var(--spacing-4)',
          fontWeight: 'var(--font-weight-medium)',
          transition: 'all 0.2s ease-in-out',
        },
        hover: {
          backgroundColor: 'var(--muted)',
          borderColor: 'var(--neutral-400)'
        }
      },
      ghost: {
        default: {
          backgroundColor: 'transparent',
          color: 'var(--neutral-700)',
          border: 'none',
          borderRadius: 'var(--radius-base)',
          padding: 'var(--spacing-2) var(--spacing-4)',
          fontWeight: 'var(--font-weight-medium)',
          transition: 'all 0.2s ease-in-out',
        },
        hover: {
          backgroundColor: 'var(--muted)'
        }
      }
    },
    sizes: {
      sm: {
        padding: 'var(--spacing-1) var(--spacing-3)',
        fontSize: 'var(--font-size-sm)',
        minHeight: '2rem'
      },
      base: {
        padding: 'var(--spacing-2) var(--spacing-4)',
        fontSize: 'var(--font-size-base)',
        minHeight: '2.5rem'
      },
      lg: {
        padding: 'var(--spacing-3) var(--spacing-6)',
        fontSize: 'var(--font-size-lg)',
        minHeight: '3rem'
      }
    }
  },
  card: {
    variants: {
      default: {
        backgroundColor: 'var(--surface)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-base)',
        border: '1px solid var(--border)',
        padding: 'var(--spacing-6)'
      },
      elevated: {
        backgroundColor: 'var(--surface)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-lg)',
        padding: 'var(--spacing-6)'
      },
      outlined: {
        backgroundColor: 'transparent',
        border: '2px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--spacing-6)'
      }
    }
  },
  input: {
    variants: {
      default: {
        backgroundColor: 'var(--background)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-base)',
        padding: 'var(--spacing-2) var(--spacing-3)',
        fontSize: 'var(--font-size-base)',
        color: 'var(--neutral-900)',
        transition: 'all 0.2s ease-in-out',
        outline: 'none'
      },
      filled: {
        backgroundColor: 'var(--muted)',
        border: 'none',
        borderRadius: 'var(--radius-base)',
        padding: 'var(--spacing-2) var(--spacing-3)',
        fontSize: 'var(--font-size-base)',
        color: 'var(--neutral-900)',
        transition: 'all 0.2s ease-in-out',
        outline: 'none'
      }
    },
    states: {
      focus: {
        borderColor: 'var(--primary-500)',
        boxShadow: '0 0 0 3px rgb(from var(--primary-500) r g b / 0.1)'
      },
      error: {
        borderColor: 'var(--error-500)',
        boxShadow: '0 0 0 3px rgb(from var(--error-500) r g b / 0.1)'
      }
    }
  }
} as const

export default themePresets