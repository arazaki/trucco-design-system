import * as React from 'react';
import { Text } from '../atoms/text';
export interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    label?: string;
    labelProps?: React.ComponentProps<typeof Text>;
    helperText?: string;
    helperTextProps?: React.ComponentProps<typeof Text>;
    error?: string;
    errorProps?: React.ComponentProps<typeof Text>;
    required?: boolean;
    children: React.ReactNode;
    spacing?: 'sm' | 'md' | 'lg';
}
declare const FormGroup: React.ForwardRefExoticComponent<FormGroupProps & React.RefAttributes<HTMLDivElement>>;
export { FormGroup };
