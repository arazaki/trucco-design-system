import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
declare const buttonGroupVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
    spacing?: "sm" | "md" | "lg" | "none" | null | undefined;
    attached?: boolean | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof buttonGroupVariants> {
    children: React.ReactNode;
}
declare const ButtonGroup: React.ForwardRefExoticComponent<ButtonGroupProps & React.RefAttributes<HTMLDivElement>>;
export { ButtonGroup, buttonGroupVariants };
