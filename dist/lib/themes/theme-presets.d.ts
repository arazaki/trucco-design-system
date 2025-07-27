/**
 * Trucco Design System - Theme Presets
 *
 * Beautiful theme presets inspired by popular design systems
 * including Shadcn/ui, Chakra UI, Material Design 3, and others
 */
type ColorScale = {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
};
type SemanticColor = {
    50: string;
    500: string;
    600: string;
    900: string;
};
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
};
export declare const defaultTheme: ThemePreset;
export declare const minimalTheme: ThemePreset;
export declare const vibrantTheme: ThemePreset;
export declare const corporateTheme: ThemePreset;
export declare const darkTheme: ThemePreset;
export declare const themePresets: {
    readonly default: ThemePreset;
    readonly minimal: ThemePreset;
    readonly vibrant: ThemePreset;
    readonly corporate: ThemePreset;
    readonly dark: ThemePreset;
};
export type ThemePresetName = keyof typeof themePresets;
export declare const componentVariations: {
    readonly button: {
        readonly variants: {
            readonly primary: {
                readonly default: {
                    readonly backgroundColor: "var(--primary-500)";
                    readonly color: "white";
                    readonly borderRadius: "var(--radius-base)";
                    readonly padding: "var(--spacing-2) var(--spacing-4)";
                    readonly fontWeight: "var(--font-weight-medium)";
                    readonly boxShadow: "var(--shadow-sm)";
                    readonly border: "none";
                    readonly transition: "all 0.2s ease-in-out";
                };
                readonly hover: {
                    readonly backgroundColor: "var(--primary-600)";
                    readonly boxShadow: "var(--shadow-md)";
                    readonly transform: "translateY(-1px)";
                };
                readonly active: {
                    readonly backgroundColor: "var(--primary-700)";
                    readonly transform: "translateY(0)";
                };
            };
            readonly secondary: {
                readonly default: {
                    readonly backgroundColor: "var(--surface)";
                    readonly color: "var(--neutral-900)";
                    readonly border: "1px solid var(--border)";
                    readonly borderRadius: "var(--radius-base)";
                    readonly padding: "var(--spacing-2) var(--spacing-4)";
                    readonly fontWeight: "var(--font-weight-medium)";
                    readonly transition: "all 0.2s ease-in-out";
                };
                readonly hover: {
                    readonly backgroundColor: "var(--muted)";
                    readonly borderColor: "var(--neutral-400)";
                };
            };
            readonly ghost: {
                readonly default: {
                    readonly backgroundColor: "transparent";
                    readonly color: "var(--neutral-700)";
                    readonly border: "none";
                    readonly borderRadius: "var(--radius-base)";
                    readonly padding: "var(--spacing-2) var(--spacing-4)";
                    readonly fontWeight: "var(--font-weight-medium)";
                    readonly transition: "all 0.2s ease-in-out";
                };
                readonly hover: {
                    readonly backgroundColor: "var(--muted)";
                };
            };
        };
        readonly sizes: {
            readonly sm: {
                readonly padding: "var(--spacing-1) var(--spacing-3)";
                readonly fontSize: "var(--font-size-sm)";
                readonly minHeight: "2rem";
            };
            readonly base: {
                readonly padding: "var(--spacing-2) var(--spacing-4)";
                readonly fontSize: "var(--font-size-base)";
                readonly minHeight: "2.5rem";
            };
            readonly lg: {
                readonly padding: "var(--spacing-3) var(--spacing-6)";
                readonly fontSize: "var(--font-size-lg)";
                readonly minHeight: "3rem";
            };
        };
    };
    readonly card: {
        readonly variants: {
            readonly default: {
                readonly backgroundColor: "var(--surface)";
                readonly borderRadius: "var(--radius-lg)";
                readonly boxShadow: "var(--shadow-base)";
                readonly border: "1px solid var(--border)";
                readonly padding: "var(--spacing-6)";
            };
            readonly elevated: {
                readonly backgroundColor: "var(--surface)";
                readonly borderRadius: "var(--radius-lg)";
                readonly boxShadow: "var(--shadow-lg)";
                readonly padding: "var(--spacing-6)";
            };
            readonly outlined: {
                readonly backgroundColor: "transparent";
                readonly border: "2px solid var(--border)";
                readonly borderRadius: "var(--radius-lg)";
                readonly padding: "var(--spacing-6)";
            };
        };
    };
    readonly input: {
        readonly variants: {
            readonly default: {
                readonly backgroundColor: "var(--background)";
                readonly border: "1px solid var(--border)";
                readonly borderRadius: "var(--radius-base)";
                readonly padding: "var(--spacing-2) var(--spacing-3)";
                readonly fontSize: "var(--font-size-base)";
                readonly color: "var(--neutral-900)";
                readonly transition: "all 0.2s ease-in-out";
                readonly outline: "none";
            };
            readonly filled: {
                readonly backgroundColor: "var(--muted)";
                readonly border: "none";
                readonly borderRadius: "var(--radius-base)";
                readonly padding: "var(--spacing-2) var(--spacing-3)";
                readonly fontSize: "var(--font-size-base)";
                readonly color: "var(--neutral-900)";
                readonly transition: "all 0.2s ease-in-out";
                readonly outline: "none";
            };
        };
        readonly states: {
            readonly focus: {
                readonly borderColor: "var(--primary-500)";
                readonly boxShadow: "0 0 0 3px rgb(from var(--primary-500) r g b / 0.1)";
            };
            readonly error: {
                readonly borderColor: "var(--error-500)";
                readonly boxShadow: "0 0 0 3px rgb(from var(--error-500) r g b / 0.1)";
            };
        };
    };
};
export default themePresets;
