import * as React from 'react';
import { type InputProps } from '../atoms/input';
export interface SearchFieldProps extends Omit<InputProps, 'leftIcon' | 'rightIcon' | 'type'> {
    onSearch?: (value: string) => void;
    onClear?: () => void;
    showClearButton?: boolean;
    value?: string;
    defaultValue?: string;
}
declare const SearchField: React.ForwardRefExoticComponent<SearchFieldProps & React.RefAttributes<HTMLInputElement>>;
export { SearchField };
