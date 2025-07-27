import * as React from 'react';
export interface ContentLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    subtitle?: string;
    breadcrumb?: React.ReactNode;
    actions?: React.ReactNode;
    children: React.ReactNode;
    maxWidth?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
    padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    spacing?: 'sm' | 'md' | 'lg' | 'xl';
}
declare const ContentLayout: React.ForwardRefExoticComponent<ContentLayoutProps & React.RefAttributes<HTMLDivElement>>;
export { ContentLayout };
