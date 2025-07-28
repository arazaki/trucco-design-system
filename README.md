# Trucco Design System

A flexible, theme-driven design system built on Next.js and Tailwind CSS with shadcn/ui integration, implementing Component Driven Development principles with atomic design methodology.

## ✨ Features

- 🎨 **Complete Design Token System** - Comprehensive color palettes, typography, spacing, and semantic tokens
- 🧱 **Atomic Design Architecture** - Organized components from atoms to templates
- 🌙 **Advanced Theme System** - Runtime light/dark mode switching with auto-detection and custom token support
- 📱 **Responsive Design** - Mobile-first approach with consistent breakpoints
- ♿ **Accessibility First** - WCAG compliant with proper ARIA attributes and shadcn/ui accessibility patterns
- 🔧 **TypeScript Support** - Full type safety with intelligent autocomplete
- 📚 **Storybook Documentation** - Interactive component playground and documentation
- ⚡ **Next.js Optimized** - Built specifically for Next.js applications
- 🎯 **shadcn/ui Integration** - Enhanced components built on proven shadcn/ui foundation
- 🚀 **Modern Architecture** - Uses Radix UI primitives, CVA for variants, and advanced CSS bridging

## 🚀 Quick Start

### Installation

```bash
npm install git+https://github.com/arazaki/trucco-design-system.git
```

### Setup

1. **Install peer dependencies:**

```bash
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge
```

2. **Configure your app with ThemeProvider:**

```tsx
// app/layout.tsx
import { ThemeProvider } from 'trucco-design-system'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider defaultTheme="auto">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

3. **Add Trucco styles to your CSS:**

```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* SHADCN BRIDGE - Automatic mapping between Trucco and shadcn variables */
:root {
  /* shadcn semantic variables mapped to Trucco tokens */
  --background: var(--surface);
  --foreground: var(--text-primary);
  --primary: var(--primary-600);
  --primary-foreground: var(--text-on-primary);
  --secondary: var(--secondary-100);
  --secondary-foreground: var(--secondary-900);
  --muted: var(--neutral-100);
  --muted-foreground: var(--neutral-500);
  --accent: var(--neutral-100);
  --accent-foreground: var(--neutral-900);
  --destructive: var(--error);
  --destructive-foreground: var(--text-on-error);
  --border: var(--border-primary);
  --input: var(--border-primary);
  --ring: var(--primary-500);
  --radius: 0.5rem;
}

.dark {
  --background: var(--surface);
  --foreground: var(--text-primary);
  --primary: var(--primary-500);
  --primary-foreground: var(--text-on-primary);
  --secondary: var(--secondary-800);
  --secondary-foreground: var(--secondary-100);
  --muted: var(--neutral-800);
  --muted-foreground: var(--neutral-400);
  --accent: var(--neutral-800);
  --accent-foreground: var(--neutral-100);
  --destructive: var(--error);
  --destructive-foreground: var(--text-on-error);
  --border: var(--border-primary);
  --input: var(--border-primary);
  --ring: var(--primary-500);
}
```

### Basic Usage

```tsx
import { 
  Button, 
  Input, 
  Text, 
  Header, 
  Navigation,
  PageLayout 
} from 'trucco-design-system'

export default function MyPage() {
  return (
    <PageLayout
      header={
        <Header
          title="My App"
          navigation={
            <Navigation
              items={[
                { id: 'home', label: 'Home', active: true },
                { id: 'about', label: 'About' },
              ]}
            />
          }
        />
      }
      main={
        <div className="p-8">
          <Text variant="h1">Welcome to My App</Text>
          <Text variant="body" className="mb-6">
            Built with Trucco Design System
          </Text>
          
          <div className="space-y-4">
            <Input 
              label="Email" 
              placeholder="Enter your email" 
              type="email" 
            />
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </div>
        </div>
      }
    />
  )
}
```

## 📦 Component Library

### Atoms (Basic Elements)
- **Button** - Enhanced shadcn Button with Trucco variants and semantic colors
- **Input** - Advanced input wrapper with label, helper text, and error states
- **Textarea** - Multi-line text input with consistent API
- **Text** - Typography system with semantic variants
- **Icons** - Consistent icon library

### Molecules (Simple Compositions)
- **SearchField** - Input with built-in search icon and clear functionality
- **FormGroup** - Label, input, helper text, and error message composition
- **ButtonGroup** - Grouped buttons with consistent spacing

### Organisms (Complex Sections)
- **Header** - Complete header with logo, navigation, search, and actions
- **Navigation** - Flexible navigation with multiple display variants

### Templates (Layout Structures)
- **PageLayout** - Full page layout with header, sidebar, main, and footer
- **ContentLayout** - Content area with title, breadcrumb, and actions

### Enhanced Features
- **shadcn/ui Integration** - All components built on proven shadcn/ui foundation
- **Advanced Theming** - CSS variable bridge for seamless theme switching
- **TypeScript-First** - Full type safety with intelligent autocomplete
- **Accessibility Built-in** - WCAG compliant with proper ARIA patterns

## 🎨 Design System

### Color System
- **Primary, Secondary, Tertiary** - Brand color hierarchies
- **Semantic Colors** - Success, warning, error states
- **Neutral Palette** - Comprehensive grayscale system
- **Background & Foreground** - Contextual color assignments

### Typography Scale
- **Headings** - H1 through H6 with consistent hierarchy
- **Body Text** - Multiple sizes for different contexts
- **Specialized Text** - Labels, captions, error messages

### Component Variants
All components support systematic variation through props:
- `variant` - Visual style (primary, secondary, tertiary, outline, ghost, etc.)
- `size` - Sizing scale (sm, md, lg, xl)
- `theme` - Semantic theme variants (semantic, red, blue, purple, green)
- Semantic states - Success, warning, error variants automatically applied

### shadcn/ui Bridge
Trucco seamlessly integrates with shadcn/ui through:
- **CSS Variable Mapping** - Automatic translation between Trucco tokens and shadcn variables
- **Component Wrapping** - Enhanced shadcn components with Trucco's design system
- **Theme Compatibility** - Full light/dark mode support with both systems
- **Accessibility Inheritance** - All shadcn accessibility patterns preserved

## 🔧 Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup Development Environment

```bash
# Clone the repository
git clone https://github.com/arazaki/trucco-design-system.git
cd trucco-design-system

# Install dependencies
npm install

# Start Storybook
npm run storybook

# Build the library
npm run build:lib
```

### Available Scripts

- `npm run dev` - Start Next.js development server
- `npm run storybook` - Launch Storybook documentation
- `npm run build:lib` - Build distributable library
- `npm run lint` - Run ESLint

## 📚 Documentation

- **Storybook**: Interactive component documentation with live examples
- **Claude Documentation**: Comprehensive usage guide in `/docs/CLAUDE.md`
- **Component Driven Development**: CDD methodology guide in `/docs/COMPONENT-DRIVEN-DEVELOPMENT.md`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)
- Component architecture inspired by [Atomic Design](https://atomicdesign.bradfrost.com/)
- Icons provided by [Heroicons](https://heroicons.com/)
- Development tools: [Storybook](https://storybook.js.org/), [TypeScript](https://www.typescriptlang.org/)

---

**Trucco Design System** - Building consistent, accessible, and scalable user interfaces. 🚀