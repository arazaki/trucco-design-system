'use client'
import * as React from 'react'
import {
  Breadcrumb as ShadcnBreadcrumb,
  BreadcrumbEllipsis as ShadcnBreadcrumbEllipsis,
  BreadcrumbItem as ShadcnBreadcrumbItem,  
  BreadcrumbLink as ShadcnBreadcrumbLink,
  BreadcrumbList as ShadcnBreadcrumbList,
  BreadcrumbPage as ShadcnBreadcrumbPage,
  BreadcrumbSeparator as ShadcnBreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

/**
 * Trucco Enhanced Breadcrumb Component
 * 
 * Wraps shadcn/ui Breadcrumb with Trucco's semantic theming system.
 * Provides enhanced breadcrumb navigation while leveraging shadcn's accessibility foundation.
 */

export interface BreadcrumbProps extends React.ComponentProps<typeof ShadcnBreadcrumb> {}
export interface BreadcrumbListProps extends React.ComponentProps<typeof ShadcnBreadcrumbList> {}
export interface BreadcrumbItemProps extends React.ComponentProps<typeof ShadcnBreadcrumbItem> {}
export interface BreadcrumbLinkProps extends React.ComponentProps<typeof ShadcnBreadcrumbLink> {}
export interface BreadcrumbPageProps extends React.ComponentProps<typeof ShadcnBreadcrumbPage> {}
export interface BreadcrumbSeparatorProps extends React.ComponentProps<typeof ShadcnBreadcrumbSeparator> {}
export interface BreadcrumbEllipsisProps extends React.ComponentProps<typeof ShadcnBreadcrumbEllipsis> {}

const Breadcrumb = ShadcnBreadcrumb
const BreadcrumbList = ShadcnBreadcrumbList
const BreadcrumbItem = ShadcnBreadcrumbItem
const BreadcrumbLink = ShadcnBreadcrumbLink
const BreadcrumbPage = ShadcnBreadcrumbPage
const BreadcrumbSeparator = ShadcnBreadcrumbSeparator
const BreadcrumbEllipsis = ShadcnBreadcrumbEllipsis

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
}