import React from 'react';
import { DesignTokens } from './tokens';
type Theme = 'light' | 'dark' | 'auto';
type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
    customTokens?: Partial<DesignTokens>;
};
interface ThemeProviderState {
    theme: Theme;
    tokens: DesignTokens;
    setTheme: (theme: Theme) => void;
    updateTokens: (tokens: Partial<DesignTokens>) => void;
}
export declare function ThemeProvider({ children, defaultTheme, storageKey, customTokens, ...props }: ThemeProviderProps): React.JSX.Element;
export declare const useTheme: () => ThemeProviderState;
export {};
