/**
 * Design Tokens for Trucco Design System
 *
 * This file defines all the design tokens used throughout the system.
 * These tokens can be customized and overridden at runtime.
 */
export interface ColorScale {
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
}
export interface ThemeColors {
    primary: ColorScale;
    secondary: ColorScale;
    tertiary: ColorScale;
    neutral: ColorScale;
    success: ColorScale;
    warning: ColorScale;
    error: ColorScale;
    background: {
        primary: string;
        secondary: string;
        tertiary: string;
    };
    foreground: {
        primary: string;
        secondary: string;
        tertiary: string;
        muted: string;
    };
    border: {
        primary: string;
        secondary: string;
        muted: string;
    };
}
export interface SpacingTokens {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
}
export interface TypographyTokens {
    fontFamily: {
        sans: string[];
        serif: string[];
        mono: string[];
    };
    fontSize: {
        xs: [string, {
            lineHeight: string;
        }];
        sm: [string, {
            lineHeight: string;
        }];
        base: [string, {
            lineHeight: string;
        }];
        lg: [string, {
            lineHeight: string;
        }];
        xl: [string, {
            lineHeight: string;
        }];
        '2xl': [string, {
            lineHeight: string;
        }];
        '3xl': [string, {
            lineHeight: string;
        }];
        '4xl': [string, {
            lineHeight: string;
        }];
    };
    fontWeight: {
        light: string;
        normal: string;
        medium: string;
        semibold: string;
        bold: string;
    };
}
export interface RadiusTokens {
    none: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
}
export interface ShadowTokens {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    none: string;
}
export interface DesignTokens {
    colors: ThemeColors;
    spacing: SpacingTokens;
    typography: TypographyTokens;
    radius: RadiusTokens;
    shadows: ShadowTokens;
}
export declare const defaultTokens: DesignTokens;
