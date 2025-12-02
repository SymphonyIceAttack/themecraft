# Agents Guide for ThemeCraft

This document provides essential information for AI agents working on the ThemeCraft codebase - a Next.js application for creating and exporting code editor themes.

## Project Overview

**ThemeCraft** is a Next.js application that allows users to create, customize, and export themes for multiple code editors (VSCode, Cursor, Zed, Neovim, Helix). It features a live preview system, theme editor, and export functionality.

## Essential Commands

### Development
```bash
pnpm run dev          # Start development server (http://localhost:3000)
pnpm run build        # Build for production
pnpm run start        # Start production server
pnpm run lint         # Run Biome linter
pnpm run format       # Format code with Biome
```

### CI/CD
- **Code Quality Check**: Automatic Biome linting on push/PR (`.github/workflows/code-quality.yml`)
- **Deployment**: Vercel platform integration

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode enabled)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4 + Custom CSS Variables
- **UI Components**: shadcn/ui + Radix UI primitives
- **Linting/Formatting**: Biome (not ESLint/Prettier)
- **CMS**: Directus (for blog content)
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics

## Code Organization & Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Homepage (theme editor)
│   ├── posts/             # Blog section
│   ├── api/               # API routes
│   └── globals.css        # Global styles + CSS variables
├── components/            # React components
│   ├── ui/               # shadcn/ui base components
│   ├── blog/             # Blog-specific components
│   ├── theme-editor.tsx  # Main theme editor
│   ├── code-preview.tsx  # Theme preview component
│   └── export-dialog.tsx # Theme export dialog
├── lib/                   # Utility libraries
│   ├── utils.ts          # cn() utility (clsx + tailwind-merge)
│   ├── color-utils.ts    # Color normalization utilities
│   ├── directus.ts       # Directus CMS client
│   └── theme-converters.ts # Theme format converters
├── types/                 # TypeScript type definitions
│   └── theme.ts          # VSCode theme types
├── public/               # Static assets
└── .github/workflows/    # CI/CD configurations
```

## Key Conventions & Patterns

### TypeScript Configuration
- **Strict mode**: Enabled in `tsconfig.json`
- **Path aliases**: `@/*` maps to `./` (root)
- **Module resolution**: `bundler` (for Next.js)
- **JSX**: `react-jsx` transform

### Import Patterns
```typescript
// Absolute imports with @ alias
import { Button } from "@/components/ui/button";
import type { VSCodeTheme } from "@/types/theme";
import { cn } from "@/lib/utils";

// Relative imports for local components
import { ThemeEditor } from "./theme-editor";
```

### Component Patterns

#### Client Components
```typescript
"use client";

import { useState } from "react";
// Component logic here
```

#### shadcn/ui Component Structure
```typescript
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const componentVariants = cva("base-classes", {
  variants: {
    variant: {
      default: "variant-classes",
      secondary: "secondary-classes"
    },
    size: {
      default: "size-classes",
      sm: "small-classes"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});

function Component({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof componentVariants>) {
  return (
    <div
      className={cn(componentVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Component, componentVariants };
```

### Styling Patterns

#### CSS Variables (Tailwind CSS 4)
```css
/* In globals.css */
:root {
  --background: oklch(0.98 0.01 280);
  --foreground: oklch(0.15 0.02 280);
  --primary: oklch(0.55 0.25 280);
  /* ... */
}

.dark {
  /* Dark mode overrides */
}
```

#### Utility Classes
```typescript
// Use Tailwind's arbitrary properties for oklch colors
className="bg-[oklch(0.55_0.25_280)]"
```

### Theme System

#### VSCode Theme Type
```typescript
export interface VSCodeTheme {
  name: string;
  type: string;
  colors: Record<string, string>;
  tokenColors: TokenColor[];
}

export interface TokenColor {
  scope: string[];
  settings: {
    foreground: string;
    fontStyle?: string;
  };
}
```

#### Color Utilities
- `normalizeColor()`: Converts various color formats to hex
- `isValidColor()`: Validates color format for CSS

### State Management
- **Local State**: React hooks (`useState`, `useEffect`)
- **No Global State**: Context or external stores not used
- **Theme State**: Managed in page components, passed down via props

## Linting & Formatting Rules (Biome)

### Configuration
- **Formatter**: 2-space indentation, spaces (not tabs)
- **Linter**: Recommended rules + Next.js/React specific rules
- **File Inclusion**: All files except `node_modules`, `.next`, `dist`, `build`

### Custom Rules
```json
{
  "correctness": {
    "useExhaustiveDependencies": "off"
  },
  "suspicious": {
    "noUnknownAtRules": "off",
    "noArrayIndexKey": "off"
  },
  "security": {
    "noDangerouslySetInnerHtml": "off"
  },
  "a11y": {
    "noSvgWithoutTitle": "off"
  }
}
```

### Common Biome Commands
```bash
biome check .              # Lint all files
biome format --write .     # Format all files
biome lint --write .       # Fix lint issues
biome lsp-proxy            # Start Biome LSP server (stdio mode)
```

## Dependencies

### Core Dependencies
- **next**: ^16.0.1
- **react**: ^19.2.0
- **react-dom**: ^19.2.0
- **typescript**: ^5

### UI Dependencies
- **@radix-ui/***: Various Radix UI primitives
- **@radix-ui/themes**: ^3.2.1
- **@vercel/analytics**: ^1.5.0
- **class-variance-authority**: ^0.7.1 (CVA for variants)
- **clsx**: ^2.1.1 (Conditional classes)
- **lucide-react**: ^0.552.0 (Icons)
- **tailwind-merge**: ^3.3.1 (Tailwind class merging)

### Development Dependencies
- **@biomejs/biome**: 2.2.4 (Linter/Formatter)
- **tailwindcss**: ^4 (Tailwind CSS 4)
- **@tailwindcss/postcss**: ^4

### Special Dependencies
- **@directus/sdk**: ^20.1.0 (CMS integration)
- **shiki**: ^3.14.0 (Syntax highlighting)
- **streamdown**: ^1.4.0 (Markdown processing)
- **tw-animate-css**: ^1.4.0 (Animations)

## Important Gotchas

### Next.js Specific
1. **Client Components**: Must explicitly use `"use client"` directive
2. **Server Components**: Default for app directory (no directive needed)
3. **Static Assets**: Place in `public/` directory
4. **Images**: Next.js Image component with custom domain config in `next.config.ts`

### TypeScript Specific
1. **Path Aliases**: Use `@/` for absolute imports (configured in `tsconfig.json`)
2. **Strict Mode**: Enabled, requires explicit type annotations
3. **React 19**: Uses new JSX transform, may need type updates

### Styling Specific
1. **Tailwind CSS 4**: Uses `@import "tailwindcss"` syntax
2. **oklch Colors**: Project uses OKLCH color space extensively
3. **CSS Variables**: Defined in `globals.css`, used throughout
4. **Dark Mode**: Uses `:is(.dark *)` variant pattern

### Performance Considerations
1. **Vercel Analytics**: Integrated in layout component
2. **Image Optimization**: Disabled for some domains (`images.unoptimized = true`)
3. **Font Loading**: Uses `next/font/google` for Geist fonts

### Environment Variables
- `NEXT_PUBLIC_DIRECTUS_URL`: Directus CMS URL
- `DIRECTUS_ACCESS_TOKEN`: Directus access token
- `.env*` files are gitignored

### CMS Integration
- **Directus**: Used for blog content management
- **Schema**: Defines `posts` collection with rich content structure
- **Authentication**: Uses static token authentication

## Testing & Quality Assurance

### Current Testing Setup
- **No test framework configured**: No Jest, Vitest, or testing library
- **Linting**: Biome provides code quality checks
- **CI**: GitHub Actions runs Biome on push/PR

### Recommended Additions
Consider adding:
- **Testing Library**: For component testing
- **E2E Testing**: For user workflows
- **Storybook**: For component documentation

## Development Environment

### Required Tools
- **Node.js**: Latest LTS version
- **npm**: Package manager
- **Git**: Version control

### Setup Process
1. Clone repository
2. Install dependencies: `npm install`
3. Set up environment variables (if using CMS features)
4. Run development server: `npm run dev`

### IDE Configuration
- **TypeScript**: Automatic via Next.js plugin
- **Biome**: Install Biome LSP for IDE integration
- **Tailwind CSS**: IntelliSense available

## Common Tasks & Patterns

### Adding New UI Components
1. Use shadcn/ui CLI or copy existing patterns
2. Implement with CVA variants
3. Add to appropriate directory (`components/ui/` for base components)

### Adding New Theme Formats
1. Extend `VSCodeTheme` type in `types/theme.ts`
2. Implement converter in `lib/theme-converters.ts`
3. Add to export dialog options

### Modifying Styling
1. **Global styles**: Edit `app/globals.css`
2. **Component styles**: Use Tailwind classes + CSS variables
3. **Theme colors**: Modify CSS custom properties

### Working with CMS
1. Directus client configured in `lib/directus.ts`
2. Types defined for blog post structure
3. Environment variables required for access

## Troubleshooting

### Common Issues
1. **Biome errors**: Run `biome check .` to identify issues
2. **Import errors**: Ensure path aliases are configured
3. **Type errors**: Check TypeScript strict mode compliance
4. **Build failures**: Verify all dependencies are installed

### Performance Issues
1. Check for unnecessary client components
2. Optimize images with Next.js Image component
3. Use React.memo for expensive components

This guide should provide all necessary context for agents to effectively work with the ThemeCraft codebase.

## LSP (Language Server Protocol) Configuration

The project includes comprehensive LSP setup for enhanced IDE support:

### Configured LSP Servers
- **TypeScript**: `typescript-language-server` (`.ts/.tsx` files)
- **Biome**: `biome lsp-proxy` (linting and formatting)
- **Go**: `gopls` (`.go` files) 
- **Nix**: `nil` (`.nix` files)

### Configuration Location
LSP configuration is stored in `.crush.json`:

```json
"lsp": {
  "typescript": {
    "command": "typescript-language-server",
    "args": ["--stdio"],
    "filetypes": ["ts", "tsx"]
  },
  "biome": {
    "command": "biome",
    "args": ["lsp-proxy"],
    "filetypes": ["ts", "tsx"]
  }
}
```

### Available LSP Features
- **Symbol References**: Find all usages of functions/variables
- **Diagnostics**: Real-time error detection
- **Code Completion**: Intelligent suggestions
- **Hover Information**: Type information on hover
- **Go to Definition**: Jump to symbol definitions

### Testing LSP
```bash
# Test TypeScript LSP
echo "Testing TypeScript features..."

# Test Biome LSP (linting server)
echo "Testing Biome linting..."

# Find symbol references
echo "Searching for cn function references..."
```

The LSP services are fully operational and provide excellent IDE integration for this TypeScript/React project.
This guide should help you navigate and contribute to the tide forecast project effectively. Always refer to the actual code when implementing changes, as patterns may evolve over time.

## Chrome DevTools Usage in Crush

When using Chrome DevTools tools in Crush, always set `verbose: false` to get clean, concise output instead of verbose a11y tree structures.

### Basic Usage Pattern

```javascript
// Set verbose: false for clean output
mcp_chrome-devtools_take_snapshot({
  "verbose": false
});

// Simplified page content inspection
mcp_chrome-devtools_evaluate_script({
  "function": "() => document.title"
});
```

### Common Chrome DevTools Commands

```javascript
// 1. Take page snapshot (clean output)
mcp_chrome-devtools_take_snapshot({
  "verbose": false
});

// 2. Click element by UID
mcp_chrome-devtools_click({
  "uid": "element_id_here"
});

// 3. Take screenshot
mcp_chrome-devtools_take_screenshot({
  "fullPage": true
});

// 4. Scroll page
mcp_chrome-devtools_evaluate_script({
  "function": "() => window.scrollTo(0, 1000)"
});

// 5. Get network requests
mcp_chrome-devtools_list_network_requests({
  "pageSize": 10
});

// 6. Get console logs
mcp_chrome-devtools_list_console_messages({
  "pageSize": 10
});
```

### Chrome DevTools Configuration

The Chrome DevTools MCP is configured in `.crush.json`:

```json
{
  "mcp": {
    "chrome-devtools": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "chrome-devtools-mcp@latest"]
    }
  }
}
```

**Note**: Chrome DevTools and Serena are separate tool systems. Chrome DevTools provides browser automation features, while Serena provides code editing capabilities. They cannot be used interchangeably.
