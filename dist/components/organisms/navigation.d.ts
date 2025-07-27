import * as React from 'react';
export interface NavigationItem {
    id: string;
    label: string;
    href?: string;
    onClick?: () => void;
    active?: boolean;
    disabled?: boolean;
    icon?: React.ReactNode;
    badge?: string | number;
}
export interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
    items: NavigationItem[];
    orientation?: 'horizontal' | 'vertical';
    variant?: 'default' | 'pills' | 'underline' | 'sidebar';
    size?: 'sm' | 'md' | 'lg';
    activeItem?: string;
    onItemClick?: (item: NavigationItem) => void;
}
declare const Navigation: React.ForwardRefExoticComponent<NavigationProps & React.RefAttributes<HTMLElement>>;
export { Navigation };
