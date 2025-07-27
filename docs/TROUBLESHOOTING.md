# Troubleshooting Guide for Trucco Design System

## Overview

This document provides detailed analysis of issues encountered during the development of the Trucco design system and concrete steps to prevent similar problems in the future. Each issue includes root cause analysis, immediate solutions, and preventive measures.

## Issue Analysis: Storybook Configuration and JSX Parsing Errors

### Problem Summary

During Storybook setup, we encountered multiple configuration and parsing errors that prevented the development server from starting correctly. These issues highlight common pitfalls when setting up Storybook with Next.js and modern tooling.

### Root Cause Analysis

#### 1. SWC Parser Issues with JSX in TypeScript Files

**Issue**: Inline SVG elements in `.stories.ts` files caused SWC compilation errors.

**Root Cause**: 
- Storybook's SWC compiler couldn't parse JSX syntax in TypeScript files (`.ts` extension)
- Inline SVG elements with attributes like `viewBox` triggered parser errors
- The SWC configuration wasn't properly set up to handle mixed JSX/TypeScript content

**Error Pattern**:
```
Error: × Expected '>', got 'viewBox'
```

**Immediate Solution**:
- Extracted SVG elements into separate icon components
- Converted story files from `.ts` to `.tsx` extension
- Used proper JSX syntax with React.createElement for complex cases

**Prevention Strategy**:
1. **Always use `.tsx` extension** for files containing JSX syntax
2. **Create reusable components** instead of inline complex JSX
3. **Test parser compatibility** early in the setup process

#### 2. Storybook 9.0 Package Structure Changes

**Issue**: Individual addon packages (`@storybook/addon-controls`, etc.) no longer exist in Storybook 9.0.

**Root Cause**:
- Storybook 9.0 restructured addon packages into bundled essentials
- Documentation and examples still referenced old package structure
- Version mismatch between Storybook core and addon expectations

**Error Pattern**:
```
Error: Your Storybook project is referring to package @storybook/addon-controls, which no longer exists in Storybook 9.0 and above
```

**Immediate Solution**:
- Removed individual addon packages
- Used built-in functionality instead of external packages
- Simplified configuration to use only essential addons

**Prevention Strategy**:
1. **Check version compatibility** before installing packages
2. **Read migration guides** when upgrading major versions
3. **Use official documentation** for the specific version being used
4. **Verify package existence** before adding to configuration

#### 3. MDX File Parsing Issues

**Issue**: Default Storybook MDX files contained JSX that couldn't be parsed properly.

**Root Cause**:
- Auto-generated MDX files used JSX syntax incompatible with our build setup
- Webpack loaders weren't configured for mixed content types
- Template files contained modern JSX patterns not supported by our parser version

**Error Pattern**:
```
Module parse failed: Unexpected token (19:32)
You may need an appropriate loader to handle this file type
```

**Immediate Solution**:
- Removed problematic MDX files
- Focused on component stories rather than template documentation
- Used minimal configuration approach

**Prevention Strategy**:
1. **Remove unnecessary template files** during initial setup
2. **Test each file type** individually during configuration
3. **Use incremental setup** - add complexity gradually
4. **Configure loaders properly** for each content type

## Preventive Measures and Best Practices

### 1. Storybook Setup Checklist

**Before Starting**:
- [ ] Check Storybook version compatibility with your framework
- [ ] Read the migration guide for your Storybook version
- [ ] Verify Node.js and npm/yarn versions
- [ ] Ensure TypeScript configuration is compatible

**During Setup**:
- [ ] Start with minimal configuration
- [ ] Test basic functionality before adding features
- [ ] Use `.tsx` extensions for files with JSX
- [ ] Create component abstractions for complex JSX
- [ ] Remove auto-generated template files that aren't needed

**After Setup**:
- [ ] Test all story files individually
- [ ] Verify all addons are loading correctly
- [ ] Check browser console for warnings
- [ ] Test build process, not just development server

### 2. File Organization Best Practices

**Story Files**:
```typescript
// ✅ Good: Use .tsx for JSX content
Button.stories.tsx

// ❌ Bad: JSX in .ts files
Button.stories.ts (with JSX content)
```

**Component Structure**:
```typescript
// ✅ Good: Extract complex JSX into components
// icons.tsx
export function SearchIcon() {
  return <svg>...</svg>
}

// Button.stories.tsx
import { SearchIcon } from '../components/icons'
export const WithIcon: Story = {
  args: { leftIcon: <SearchIcon /> }
}

// ❌ Bad: Inline complex JSX
export const WithIcon: Story = {
  args: { 
    leftIcon: <svg viewBox="0 0 20 20">...</svg> 
  }
}
```

### 3. Configuration Management

**Storybook Main Configuration**:
```typescript
// ✅ Good: Minimal, tested configuration
const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-docs",
    // Only add what you need and have tested
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  // Start simple, add complexity gradually
}
```

**TypeScript Configuration**:
```typescript
// Ensure SWC can handle your syntax
"swc": {
  "jsc": {
    "parser": {
      "syntax": "typescript",
      "tsx": true,  // Enable JSX in TypeScript
    }
  }
}
```

### 4. Debugging Strategies

**When Encountering Errors**:

1. **Isolate the Problem**:
   - Comment out sections to identify the failing component
   - Test with minimal examples first
   - Check each file individually

2. **Check Version Compatibility**:
   - Verify all package versions are compatible
   - Read migration guides for major version changes
   - Check peer dependency requirements

3. **Simplify Configuration**:
   - Start with minimal setup
   - Add features incrementally
   - Test each addition separately

4. **Use Debugging Tools**:
   - Enable detailed webpack output: `--debug-webpack`
   - Check browser console for detailed errors
   - Use TypeScript compiler directly to test syntax

### 5. Dependency Management

**Package.json Best Practices**:
```json
{
  "devDependencies": {
    // Pin major versions to avoid breaking changes
    "@storybook/nextjs": "^9.0.18",
    // Avoid conflicting versions
    "@storybook/addon-docs": "^9.0.18"
  },
  "peerDependencies": {
    // Specify compatibility ranges clearly
    "react": ">=18.0.0",
    "next": ">=13.0.0"
  }
}
```

**Version Management**:
- Use exact versions for critical dependencies
- Check compatibility matrices before upgrading
- Test upgrades in isolation
- Keep detailed change logs

### 6. Future-Proofing Strategies

**Documentation**:
- Document any custom configurations
- Keep notes on why certain approaches were chosen
- Maintain troubleshooting logs for team reference

**Testing**:
- Create automated tests for critical configurations
- Test build processes in CI/CD pipelines
- Verify compatibility across different environments

**Code Organization**:
- Use consistent file naming conventions
- Extract reusable patterns early
- Maintain clear separation of concerns
- Follow framework conventions closely

## Specific Commands for Quick Resolution

### When Storybook Won't Start:

```bash
# 1. Check for configuration issues
npm run storybook --debug-webpack

# 2. Clear caches
rm -rf node_modules/.cache
rm -rf .storybook/public

# 3. Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# 4. Test minimal configuration
# Temporarily remove all addons except essentials
```

### When JSX Parsing Fails:

```bash
# 1. Check file extensions
find ./stories -name "*.ts" -exec grep -l "jsx\|<.*>" {} \;

# 2. Convert problematic files
mv file.stories.ts file.stories.tsx

# 3. Verify TypeScript configuration
npx tsc --noEmit --jsx react-jsx
```

### When Addon Issues Occur:

```bash
# 1. Check addon compatibility
npm ls @storybook/addon-*

# 2. Remove conflicting packages
npm uninstall @storybook/addon-controls @storybook/addon-actions

# 3. Use built-in essentials
# Update .storybook/main.ts to use minimal addon list
```

## Conclusion

The issues encountered during Storybook setup were primarily due to:

1. **Version compatibility mismatches** between Storybook 9.0 and addon packages
2. **Parser configuration issues** with JSX in TypeScript files
3. **Template file conflicts** with our build setup

The solutions implemented provide a stable foundation:

- ✅ **Minimal configuration** that's easier to debug and maintain
- ✅ **Proper file organization** with correct extensions and abstractions
- ✅ **Compatible package versions** that work together
- ✅ **Clear separation** between JSX components and configuration files

These preventive measures will help avoid similar issues in future development and provide a clear path for troubleshooting when problems do arise.

## Key Takeaways for Claude

When encountering similar issues in the future:

1. **Start minimal** - Use the simplest possible configuration first
2. **Check versions** - Verify compatibility before installing packages
3. **Test incrementally** - Add complexity one piece at a time
4. **Use correct file extensions** - `.tsx` for JSX, `.ts` for pure TypeScript
5. **Extract complexity** - Create reusable components instead of inline JSX
6. **Read migration guides** - Major version changes often break compatibility
7. **Document solutions** - Keep detailed notes for future reference

This approach ensures more reliable development and easier debugging when issues do occur.