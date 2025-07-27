import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
declare const buttonVariants: (props?: ({
    variant?: "primary" | "secondary" | "tertiary" | "outline" | "ghost" | "link" | "success" | "warning" | "error" | null | undefined;
    size?: "sm" | "md" | "lg" | "xl" | "icon" | null | undefined;
    radius?: "sm" | "md" | "lg" | "xl" | "none" | "full" | null | undefined;
    shadow?: "sm" | "md" | "lg" | "xl" | "none" | null | undefined;
    fullWidth?: boolean | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button, buttonVariants };
