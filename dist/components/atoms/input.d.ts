import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
declare const inputVariants: (props?: ({
    variant?: "ghost" | "success" | "warning" | "error" | "default" | null | undefined;
    size?: "sm" | "md" | "lg" | "xl" | null | undefined;
    radius?: "sm" | "md" | "lg" | "xl" | "none" | "full" | null | undefined;
    shadow?: "sm" | "md" | "lg" | "none" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof inputVariants> {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    label?: string;
    helperText?: string;
    error?: string;
    fullWidth?: boolean;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
declare const textareaVariants: (props?: ({
    variant?: "ghost" | "success" | "warning" | "error" | "default" | null | undefined;
    size?: "sm" | "md" | "lg" | "xl" | null | undefined;
    radius?: "sm" | "md" | "lg" | "xl" | "none" | "full" | null | undefined;
    shadow?: "sm" | "md" | "lg" | "none" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>, VariantProps<typeof textareaVariants> {
    label?: string;
    helperText?: string;
    error?: string;
    fullWidth?: boolean;
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export { Input, inputVariants, Textarea, textareaVariants };
