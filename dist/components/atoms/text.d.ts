import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
declare const textVariants: (props?: ({
    variant?: "link" | "success" | "warning" | "error" | "label" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body" | "bodySmall" | "caption" | "helper" | "muted" | null | undefined;
    align?: "left" | "center" | "right" | "justify" | null | undefined;
    weight?: "bold" | "light" | "normal" | "medium" | "semibold" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface TextProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof textVariants> {
    as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label';
    children: React.ReactNode;
}
declare const Text: React.ForwardRefExoticComponent<TextProps & React.RefAttributes<any>>;
export { Text, textVariants };
