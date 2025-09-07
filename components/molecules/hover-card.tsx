'use client'
import * as React from 'react'
import {
  HoverCard as ShadcnHoverCard,
  HoverCardContent as ShadcnHoverCardContent,
  HoverCardTrigger as ShadcnHoverCardTrigger,
} from '@/components/ui/hover-card'
import { cn } from '@/lib/utils'

/**
 * Trucco Enhanced Hover Card Component
 * 
 * Wraps shadcn/ui Hover Card with Trucco's semantic theming system and additional features.
 * Provides enhanced hover card variants and semantic theming while leveraging
 * shadcn's accessibility foundation and Radix UI primitives.
 */

export interface HoverCardProps extends React.ComponentProps<typeof ShadcnHoverCard> {}

export interface HoverCardTriggerProps extends React.ComponentProps<typeof ShadcnHoverCardTrigger> {}

export interface HoverCardContentProps extends React.ComponentProps<typeof ShadcnHoverCardContent> {}

// Enhanced Hover Card with integrated trigger and content
export interface EnhancedHoverCardProps extends HoverCardProps {
  trigger: React.ReactNode
  content: React.ReactNode
  className?: string
  triggerClassName?: string
  contentClassName?: string
}

const HoverCard = ShadcnHoverCard
const HoverCardTrigger = ShadcnHoverCardTrigger

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof ShadcnHoverCardContent>,
  HoverCardContentProps
>(
  ({ className, ...props }, ref) => {
    return (
      <ShadcnHoverCardContent
        ref={ref}
        className={cn('', className)}
        {...props}
      />
    )
  }
)
HoverCardContent.displayName = 'HoverCardContent'

// Enhanced Hover Card with integrated trigger and content
const EnhancedHoverCard = ({ 
  trigger,
  content,
  triggerClassName,
  contentClassName,
  ...props 
}: EnhancedHoverCardProps) => {
  return (
    <HoverCard {...props}>
      <HoverCardTrigger className={cn('', triggerClassName)}>
        {trigger}
      </HoverCardTrigger>
      <HoverCardContent className={cn('', contentClassName)}>
        {content}
      </HoverCardContent>
    </HoverCard>
  )
}

export { 
  HoverCard, 
  HoverCardContent, 
  HoverCardTrigger, 
  EnhancedHoverCard 
}