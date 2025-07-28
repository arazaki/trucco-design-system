# Component Creation Checklist

Use this checklist when creating new components for the Trucco Design System to ensure consistency and quality.

## Pre-Implementation ✅

- [ ] **Research existing patterns** - Read `components/atoms/button.tsx`, `badge.tsx`, `avatar.tsx`, `switch.tsx`
- [ ] **Check shadcn/ui foundation** - Verify if `components/ui/[component].tsx` exists
- [ ] **Review documentation** - Study `COMPONENT_CREATION_GUIDE.md` and `SHADCN_INTEGRATION.md`
- [ ] **Plan component variants** - Define semantic variants (primary, secondary, success, warning, error)
- [ ] **Identify enhancement opportunities** - Consider form integration, accessibility improvements, etc.

## Component Implementation ✅

### Core Structure
- [ ] **Create component file** - `components/atoms/[component-name].tsx`
- [ ] **Add client directive** - `'use client'` if needed
- [ ] **Import dependencies** - shadcn component, CVA, React, utils
- [ ] **Add JSDoc comment** - Describe component purpose and shadcn foundation

### Variant System
- [ ] **Define CVA variants** - Use `cva()` for variant system
- [ ] **Create variant mapping** - Map Trucco variants to shadcn variants (if needed)
- [ ] **Add size variants** - Typically `sm`, `md`, `lg`
- [ ] **Add theme variants** - `semantic`, `red`, `blue`, `purple`, `green`
- [ ] **Set default variants** - Usually `variant: 'default'`, `size: 'md'`

### TypeScript Interface
- [ ] **Define props interface** - Extend shadcn component props
- [ ] **Handle variant conflicts** - Use `Omit` for conflicting props
- [ ] **Add explicit variant types** - Define union types explicitly
- [ ] **Include component-specific props** - Icons, labels, callbacks, etc.

### Component Logic
- [ ] **Use forwardRef** - Proper ref forwarding to shadcn component
- [ ] **Handle variant logic** - `useTruccoVariant` pattern for conditional styling
- [ ] **Apply CSS variables** - Use `bg-[var(--success)]` for semantic colors
- [ ] **Merge classes properly** - Use `cn()` utility for class merging
- [ ] **Add display name** - Set `Component.displayName = 'Component'`

### Form Integration (if applicable)
- [ ] **Auto-generate IDs** - Use `React.useId()` for unique IDs
- [ ] **Handle labels** - Associate labels with form elements
- [ ] **Add descriptions** - Helper text support
- [ ] **Error state handling** - Error messages with proper ARIA
- [ ] **Required field indicators** - Visual and accessible required markers
- [ ] **ARIA attributes** - `aria-describedby`, `aria-invalid`, `aria-required`

## Export Integration ✅

- [ ] **Export component** - Add to `components/atoms/index.ts`
- [ ] **Export types** - Add TypeScript interfaces to exports
- [ ] **Export variants** - Include CVA variants if needed for external use

## Storybook Documentation ✅

### Story File Setup
- [ ] **Create story file** - `stories/[Component].stories.tsx`
- [ ] **Import dependencies** - Component, Meta, StoryObj types
- [ ] **Define meta object** - Title, component, parameters, argTypes
- [ ] **Add component description** - Mention shadcn foundation and Trucco enhancements
- [ ] **Set tags** - Include `'autodocs'`

### Essential Stories
- [ ] **Default story** - Basic usage with minimal props
- [ ] **AllVariants story** - Display all semantic variants
- [ ] **AllSizes story** - Display all size variants  
- [ ] **ThemeVariants story** - Display all theme colors
- [ ] **Real-world example** - Show component in realistic context

### Story Enhancements
- [ ] **Add story descriptions** - Explain each story's purpose
- [ ] **Use proper controls** - Select controls for variants/themes
- [ ] **Include interactive examples** - Form integration, callbacks, etc.
- [ ] **Show compound usage** - If component supports composition

## Quality Assurance ✅

### Code Quality
- [ ] **Run linting** - `npm run lint` passes without errors
- [ ] **TypeScript compilation** - `npm run build` succeeds
- [ ] **Fix type conflicts** - Resolve any TypeScript interface issues
- [ ] **Remove unused imports** - Clean up import statements

### Accessibility
- [ ] **Keyboard navigation** - Ensure keyboard accessibility
- [ ] **Screen reader support** - Proper ARIA labels and descriptions
- [ ] **Focus management** - Correct focus behavior
- [ ] **Color contrast** - WCAG-compliant color combinations
- [ ] **Semantic HTML** - Use appropriate HTML elements

### Testing
- [ ] **Visual testing** - Check all variants in Storybook
- [ ] **Responsive testing** - Test on different screen sizes
- [ ] **Theme switching** - Verify dark/light mode compatibility
- [ ] **Form integration** - Test label association and error states
- [ ] **Edge cases** - Test with long text, empty states, etc.

## Documentation ✅

- [ ] **Props documentation** - All props documented with descriptions
- [ ] **Usage examples** - Include code examples for common use cases
- [ ] **Variant explanations** - Explain when to use each variant
- [ ] **Accessibility notes** - Document any accessibility considerations
- [ ] **Migration notes** - If replacing existing component

## Final Verification ✅

- [ ] **Component exports properly** - Can import from design system
- [ ] **Stories render correctly** - All Storybook stories work
- [ ] **TypeScript happy** - No type errors in consuming code
- [ ] **Performance check** - No obvious performance issues
- [ ] **Cross-browser testing** - Works in major browsers

## Post-Implementation ✅

- [ ] **Update documentation** - Add component to relevant docs
- [ ] **Create usage examples** - Document integration patterns
- [ ] **Share with team** - Review with other developers
- [ ] **Plan future enhancements** - Note potential improvements

---

## Quick Reference Commands

```bash
# Quality checks
npm run lint
npm run build

# Development
npm run storybook
npm run dev

# Component creation workflow
1. Read existing components for patterns
2. Create component file with CVA variants
3. Add to atoms/index.ts exports
4. Create comprehensive Storybook stories
5. Run quality checks
6. Update documentation
```

## Common Patterns

### Variant Mapping
```typescript
const variantMapping = {
  primary: 'default',
  secondary: 'secondary', 
  success: 'default', // Uses CSS override
  error: 'destructive',
} as const
```

### CSS Variable Integration
```typescript
success: 'bg-[var(--success)] text-white',
warning: 'bg-[var(--warning)] text-white',
```

### TypeScript Conflict Resolution
```typescript
export interface ComponentProps
  extends Omit<React.ComponentProps<typeof ShadcnComponent>, 'variant'>,
    Omit<VariantProps<typeof truccoVariants>, 'truccoVariant'> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
}
```

This checklist ensures every component follows Trucco Design System standards while maintaining shadcn/ui's accessibility foundation.