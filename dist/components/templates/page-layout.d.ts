import * as React from 'react';
export interface PageLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    header?: React.ReactNode;
    sidebar?: React.ReactNode;
    main: React.ReactNode;
    footer?: React.ReactNode;
    sidebarWidth?: 'sm' | 'md' | 'lg' | 'xl';
    sidebarPosition?: 'left' | 'right';
    stickyHeader?: boolean;
    stickyFooter?: boolean;
    fullHeight?: boolean;
}
declare const PageLayout: React.ForwardRefExoticComponent<PageLayoutProps & React.RefAttributes<HTMLDivElement>>;
export { PageLayout };
