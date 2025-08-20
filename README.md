# @7sikandar/af-nav

A comprehensive React component library built for API Freaks projects, featuring navigation components, icons, utilities, and theme management with server-safe and client-only entry points. Designed specifically for Next.js 15+ with React 19+ and Turbopack compatibility.

## Features

- 🚀 **Server-Safe Components** - Navigation components optimized for Next.js Server Components (RSC)
- 🎨 **Dark Mode Support** - Built-in theme provider with system preference detection
- 📱 **Mobile-First Navigation** - Responsive navigation with mobile hamburger menu
- 🔍 **Search Integration** - Search bar components with customizable functionality
- 🎯 **Rich Icon Library** - 50+ SVG icons for various use cases
- 🎨 **Pre-built Styles** - Multiple CSS bundles for different page types
- 📦 **TypeScript Support** - Full TypeScript definitions included
- 🔧 **Modular Exports** - Split entry points to prevent server/client conflicts

## Installation

```bash
npm install @7sikandar/af-nav
```

## Setup

Import the compiled CSS in your application (layout or app entry):

```tsx
// In your app root (app/layout.tsx or _app.tsx)
import "@7sikandar/af-nav/styles";
```

### Available Style Imports

```tsx
// Main styles bundle (recommended)
import "@7sikandar/af-nav/styles";

// Individual style bundles
import "@7sikandar/af-nav/styles/globals.css";    // Global styles
import "@7sikandar/af-nav/styles/blog.css";       // Blog page styles
import "@7sikandar/af-nav/styles/public-pages.css"; // Public page styles
import "@7sikandar/af-nav/styles/jsoneditor.css"; // JSON editor styles
```

## Architecture & Entry Points

This package exposes two main entrypoints to prevent server components from accidentally importing client-only code:

- **`@7sikandar/af-nav`** — Server-safe exports (Footer, NavbarGlobal, icons, utils, types)
- **`@7sikandar/af-nav/client`** — Client-only exports (hooks, context, interactive components)

### Server-Safe Components

Components that can be imported and used in Next.js Server Components:

- `Footer` - Complete footer component with social links
- `NavbarGlobal` - Main navigation bar (accepts client components as props)
- `SiteSearchBarComponent` - Server-rendered search bar wrapper
- `NotFound` - 404 error page component
- `NoPrefetchLink` - Link component without prefetching
- All icons (50+ SVG components)
- Utility functions and types

### Client-Only Components

Components that require `"use client"` and must be imported from `/client`:

- `ThemeProvider` - Dark/light mode context provider
- `DarkModeToggle` - Theme switching button
- `DropDownMenu` - Interactive dropdown menu
- `MobileNavigation` - Mobile hamburger menu
- `SiteSearchBar` - Interactive search input
- `useTheme` hook - Theme management hook

## Component Documentation

### Navigation Components

#### NavbarGlobal
Main navigation component that accepts client components as props for server-side composition.

```tsx
// Server Component usage
import { NavbarGlobal, SiteSearchBarComponent } from "@7sikandar/af-nav";

<NavbarGlobal SiteSearchBarComponent={SiteSearchBarComponent} />
```

#### Footer
Complete footer with social media links and company information.

```tsx
import { Footer } from "@7sikandar/af-nav";

<Footer />
```

#### MobileNavigation (Client-only)
Responsive mobile navigation with hamburger menu.

```tsx
"use client";
import { MobileNavigation } from "@7sikandar/af-nav/client";

<MobileNavigation />
```

### Theme Components

#### ThemeProvider (Client-only)
Provides theme context for dark/light mode switching.

```tsx
"use client";
import { ThemeProvider } from "@7sikandar/af-nav/client";

export default function App({ children }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
```

#### DarkModeToggle (Client-only)
Button component for switching between themes.

```tsx
"use client";
import { DarkModeToggle } from "@7sikandar/af-nav/client";

<DarkModeToggle />
```

### Search Components

#### SiteSearchBar (Client-only)
Interactive search input with keyboard shortcuts and autocomplete.

```tsx
"use client";
import { SiteSearchBar } from "@7sikandar/af-nav/client";

<SiteSearchBar placeholder="Search..." />
```

### Interactive Components

#### DropDownMenu (Client-only)
Customizable dropdown menu with keyboard navigation.

```tsx
"use client";
import { DropDownMenu } from "@7sikandar/af-nav/client";

const menuItems = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Contact', link: '/contact' }
];

<DropDownMenu title="Menu" items={menuItems} />
```

### Icon Library

The package includes 50+ SVG icons optimized for web use:

#### Social Media Icons
- `FacebookIcon`
- `TwitterIcon`
- `LinkedinIcon`
- `GithubIcon`

#### Navigation Icons
- `HamburgerIcon`
- `CrossIcon`
- `DropDownIcon`
- `LeftArrowIcon`

#### UI Icons
- `UserIcon`
- `LockIcon`
- `MailIcon`
- `HomeIcon`
- `SearchIcon`

#### Status Icons
- `TickIcon`
- `ErrorIcon`
- `DeleteIcon`
- `EditIcon`

#### Specialized Icons
- `DNSIcon`
- `SSLIcon`
- `CurrencyExchangeIcon`
- `DomainIcon`

#### Icon Usage

All icons accept `width` and `height` props:

```tsx
import { FacebookIcon, GithubIcon, HeartIcon } from "@7sikandar/af-nav";

function SocialLinks() {
  return (
    <div className="flex gap-4">
      <FacebookIcon width="24px" height="24px" />
      <GithubIcon width="24px" height="24px" />
      <HeartIcon width="24px" height="24px" />
    </div>
  );
}
```

## TypeScript Support

### Available Types

```tsx
import type {
  IconSizeProps,
  ThemeContextType,
  THEME,
  SearchBarPage,
  APIDocumentationItem,
  ProductCategory
} from "@7sikandar/af-nav";

// Theme enum
enum THEME {
  Light = 'light',
  Dark = 'dark',
  System = 'system'
}

// Icon props
type IconSizeProps = {
  width?: string;
  height?: string;
};
```

## Usage Examples

### 1. Basic Server Component Setup

Use server-safe components in a Server Component (no `"use client"` needed):

```tsx
// app/page.tsx (Next.js Server Component)
import { Footer, NavbarGlobal, SiteSearchBarComponent } from "@7sikandar/af-nav";

export default function Page() {
  return (
    <div>
      <NavbarGlobal SiteSearchBarComponent={SiteSearchBarComponent} />
      <main>{/* server-rendered content */}</main>
      <Footer />
    </div>
  );
}
```

### 2. Client Component Integration

Use client-only components inside a Client Component:

```tsx
// components/HeaderClient.tsx
"use client";
import {
  DropDownMenu,
  DarkModeToggle,
  ThemeProvider,
  MobileNavigation
} from "@7sikandar/af-nav/client";

const navigationItems = [
  { title: 'Home', link: '/' },
  { title: 'API Docs', link: '/docs' },
  { title: 'Pricing', link: '/pricing' }
];

export default function HeaderClient() {
  return (
    <ThemeProvider>
      <header className="flex items-center justify-between p-4">
        <DropDownMenu title="Navigation" items={navigationItems} />
        <div className="flex items-center gap-4">
          <DarkModeToggle />
          <MobileNavigation />
        </div>
      </header>
    </ThemeProvider>
  );
}
```

### 3. Icon Usage Examples

Icons can be imported from the server entry and used in either environment:

```tsx
import {
  FacebookIcon,
  GithubIcon,
  TwitterIcon,
  HeartIcon,
  UserIcon,
  MailIcon
} from "@7sikandar/af-nav";

function SocialFooter() {
  return (
    <footer className="flex items-center justify-center gap-6 p-8">
      <a href="https://facebook.com" aria-label="Facebook">
        <FacebookIcon width="32px" height="32px" />
      </a>
      <a href="https://github.com" aria-label="GitHub">
        <GithubIcon width="32px" height="32px" />
      </a>
      <a href="https://twitter.com" aria-label="Twitter">
        <TwitterIcon width="32px" height="32px" />
      </a>
      <span className="flex items-center gap-2">
        Made with <HeartIcon width="20px" height="20px" /> by API Freaks
      </span>
    </footer>
  );
}
```

### 4. Complete App Layout Example

```tsx
// app/layout.tsx (Server Component)
import { NavbarGlobal, SiteSearchBarComponent, Footer } from "@7sikandar/af-nav";
import "@7sikandar/af-nav/styles";
import ClientProviders from "./components/ClientProviders";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NavbarGlobal SiteSearchBarComponent={SiteSearchBarComponent} />
        <ClientProviders>
          <main className="min-h-screen">
            {children}
          </main>
        </ClientProviders>
        <Footer />
      </body>
    </html>
  );
}
```

```tsx
// components/ClientProviders.tsx
"use client";
import { ThemeProvider } from "@7sikandar/af-nav/client";

export default function ClientProviders({ children }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
```

### 5. Theme Management

```tsx
"use client";
import { useTheme, THEME } from "@7sikandar/af-nav/client";

function ThemeControls() {
  const { theme, setTheme, toggleTheme } = useTheme();

  return (
    <div className="flex gap-2">
      <button onClick={() => setTheme(THEME.Light)}>
        Light Mode
      </button>
      <button onClick={() => setTheme(THEME.Dark)}>
        Dark Mode
      </button>
      <button onClick={() => setTheme(THEME.System)}>
        System
      </button>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
      <span>Current: {theme}</span>
    </div>
  );
}
```

## Important Implementation Notes

### Client-Only Features

- `ThemeProvider`, `DarkModeToggle`, hooks (e.g. `useTheme`), `DropDownMenu`, `MobileNavigation`, and `SiteSearchBar` are client-only and must be imported from `@7sikandar/af-nav/client` inside a component that starts with `"use client"`.
- This split prevents server-side evaluation of client-only APIs like `createContext` and avoids Next.js/Turbopack compilation errors.

### Troubleshooting Common Issues

#### "Attempted import error: 'MobileNavigation' is not exported"
#### "Identifier 'ThemeProvider' has already been declared"

**Root cause:** Importing client-only exports (like `ThemeProvider`, `MobileNavigation`, `SiteSearchBar`) directly from a Server Component (e.g. `app/layout.tsx` without `"use client"`) will cause Next.js to attempt to evaluate client-only modules during server compilation, or will result in duplicate symbol declarations when both server and client entrypoints export the same symbol name in different bundles.

**Fix pattern:** Keep server components importing only from the server entry (`@7sikandar/af-nav`) and import client-only pieces from `@7sikandar/af-nav/client` inside a component that uses `"use client"`.

### Recommended Layout Approach

Use Server Components + small Client wrapper pattern:

1. **Keep your root layout as a Server Component** and import `NavbarGlobal` and `SiteSearchBarComponent` from the server entry.

2. **Create a small client component** that imports and wraps any client-only providers or components from `@7sikandar/af-nav/client` (for example `ThemeProvider`, `MobileNavigation`, `SiteSearchBar`, `DropDownMenu`).

3. **Use the client wrapper inside your layout** where a client boundary is needed:

```tsx
// app/layout.tsx (Server Component)
import { NavbarGlobal, SiteSearchBarComponent } from "@7sikandar/af-nav";
import ClientProviders from "./components/ClientProviders";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <NavbarGlobal SiteSearchBarComponent={SiteSearchBarComponent} />
        {/* mount client-only providers in a client boundary */}
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
```

```tsx
// components/ClientProviders.tsx
"use client";
import { ThemeProvider } from "@7sikandar/af-nav/client";

export default function ClientProviders({ children }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
```

If you continue to see missing export errors, ensure your host app has installed the package version that includes the client entry (rebuild & pack locally with `npm run build:package && npm pack`).

## Compatibility

- React 19+
- Next.js 15+

## Development & Building

### Building the Package

If you develop locally, run the build for the package and publish or pack:

```bash
npm run build:package  # Builds components and styles
npm pack              # Creates 7sikandar-af-nav-0.1.0.tgz
```

### Local Testing

Install the tarball in consuming apps for local testing:

```bash
npm i /path/to/7sikandar-af-nav-0.1.0.tgz
```

### Available Scripts

```bash
npm run dev              # Start development server with Turbopack
npm run build            # Build Next.js application
npm run lint             # Run ESLint
npm run build:css        # Build CSS bundles
npm run build:package    # Build package for distribution
npm run clean            # Remove dist directory
```

## Package Structure

```
@7sikandar/af-nav/
├── dist/                          # Built package
│   ├── exports-server.mjs         # Server-safe entry point
│   ├── exports-client.mjs         # Client-only entry point
│   ├── af-components.css          # Main styles bundle
│   ├── globals.css               # Global styles
│   ├── blog.css                  # Blog-specific styles
│   ├── public-pages.css          # Public page styles
│   └── jsoneditor.css            # JSON editor styles
├── src/
│   ├── library/
│   │   ├── components/           # React components
│   │   │   ├── navigation/       # Nav, Footer, Search
│   │   │   ├── dark-mode/        # Theme components
│   │   │   └── common/           # Shared components
│   │   ├── icons/                # SVG icon components
│   │   ├── hooks/                # Custom React hooks
│   │   ├── styles/               # CSS source files
│   │   ├── types/                # TypeScript definitions
│   │   ├── utils/                # Utility functions
│   │   └── assets/               # Static assets
│   ├── exports-server.ts         # Server entry exports
│   └── exports-client.ts         # Client entry exports
└── package.json                  # Package configuration
```

## License

MIT

## Repository

[GitHub Repository](https://github.com/sikandarsubhani/apifreaks_comp)

## Author

**Sikandar Subhani**
API Freaks Components
