# Trucco Design System

A flexible, theme-driven design system built on Next.js and Tailwind CSS, implementing Component Driven Development principles with atomic design methodology.

## ✨ Features

- 🎨 **Complete Design Token System** - Comprehensive color palettes, typography, spacing, and semantic tokens
- 🧱 **Atomic Design Architecture** - Organized components from atoms to templates
- 🌙 **Theme System** - Runtime light/dark mode switching with auto-detection
- 📱 **Responsive Design** - Mobile-first approach with consistent breakpoints
- ♿ **Accessibility First** - WCAG compliant with proper ARIA attributes
- 🔧 **TypeScript Support** - Full type safety with intelligent autocomplete
- 📚 **Storybook Documentation** - Interactive component playground and documentation
- ⚡ **Next.js Optimized** - Built specifically for Next.js applications

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

3. **Add Trucco design tokens to your CSS:**

```css
/* globals.css */
@import "tailwindcss";

:root {
  /* Trucco design tokens will be injected here */
  --color-primary-500: #3b82f6;
  --color-secondary-500: #d946ef;
  /* ... etc */
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
- **Button** - Multiple variants, sizes, states, and icon support
- **Input** - Text inputs and textareas with validation states
- **Text** - Typography system with semantic variants
- **Icons** - Consistent icon library

### Molecules (Simple Compositions)
- **SearchField** - Input with search icon and clear functionality
- **FormGroup** - Label, input, helper text, and error message composition
- **ButtonGroup** - Grouped buttons with consistent spacing

### Organisms (Complex Sections)
- **Header** - Complete header with logo, navigation, search, and actions
- **Navigation** - Flexible navigation with multiple display variants

### Templates (Layout Structures)
- **PageLayout** - Full page layout with header, sidebar, main, and footer
- **ContentLayout** - Content area with title, breadcrumb, and actions

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
- `variant` - Visual style (primary, secondary, outline, ghost, etc.)
- `size` - Sizing scale (sm, md, lg, xl)
- `radius` - Border radius options
- `shadow` - Drop shadow intensities

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