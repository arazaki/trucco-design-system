import * as React from 'react';
import { SearchField } from '../molecules/search-field';
export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
    logo?: React.ReactNode;
    title?: string;
    navigation?: React.ReactNode;
    actions?: React.ReactNode;
    searchProps?: React.ComponentProps<typeof SearchField>;
    showSearch?: boolean;
    sticky?: boolean;
    border?: boolean;
}
declare const Header: React.ForwardRefExoticComponent<HeaderProps & React.RefAttributes<HTMLElement>>;
export { Header };
