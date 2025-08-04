'use client'
import * as React from 'react'
import { AspectRatio as ShadcnAspectRatio } from '@/components/ui/aspect-ratio'
import { cn } from '@/lib/utils'

/**
 * Trucco Enhanced Aspect Ratio Component
 * 
 * Wraps shadcn/ui Aspect Ratio with Trucco's semantic theming system and additional features.
 * Provides predefined aspect ratios commonly used in design systems.
 */

export interface AspectRatioProps extends React.ComponentProps<typeof ShadcnAspectRatio> {
  preset?: 'square' | 'video' | 'portrait' | 'landscape' | 'wide' | 'ultrawide'
}

// Common aspect ratio presets
const aspectRatioPresets = {
  square: 1,        // 1:1
  video: 16 / 9,    // 16:9
  portrait: 3 / 4,  // 3:4
  landscape: 4 / 3, // 4:3
  wide: 21 / 9,     // 21:9
  ultrawide: 32 / 9 // 32:9
}

const AspectRatio = React.forwardRef<
  React.ElementRef<typeof ShadcnAspectRatio>,
  AspectRatioProps
>(
  ({ className, preset, ratio, ...props }, ref) => {
    const effectiveRatio = preset ? aspectRatioPresets[preset] : ratio

    return (
      <ShadcnAspectRatio
        ref={ref}
        ratio={effectiveRatio}
        className={cn('', className)}
        {...props}
      />
    )
  }
)
AspectRatio.displayName = 'AspectRatio'

export { AspectRatio, aspectRatioPresets }