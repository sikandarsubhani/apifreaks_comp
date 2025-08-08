# @7sikanadar/apifreaks-components

A React component library featuring the APIFreaks Footer component and related UI elements, built with Next.js, TypeScript, and Tailwind CSS.

## Installation

```bash
npm install @7sikanadar/apifreaks-components
```

## Setup

**Important:** To use the components with their styles, you need to import the CSS file in your application. The components are designed to work standalone, whether your host app uses Tailwind CSS or not.

```tsx
// In your main app file (e.g., _app.tsx, layout.tsx, or main.tsx)
import "@7sikanadar/apifreaks-components/styles";
```

Or you can import the specific CSS file:

```tsx
import "@7sikanadar/apifreaks-components/styles/af-components.css";
```

## Components

### Footer Versions

This package provides two Footer component versions:

1. **Default Footer (`Footer`)** - Uses container queries for responsive design.

```tsx
import { Footer } from "@7sikanadar/apifreaks-components";

function App() {
  return (
    <div className="@container">
      <Footer />
    </div>
  );
}
```

2. **Modern Footer (`ModernFooter`)** - Uses standard Tailwind responsive classes (Recommended for better compatibility).

```tsx
import { ModernFooter } from "@7sikanadar/apifreaks-components";

function App() {
  return <ModernFooter logoSrc="/path/to/logo.jpg" logoAlt="Company Logo" />;
}
```

### ModernFooter Props

The ModernFooter component accepts the following props:

```tsx
interface ModernFooterProps {
  logoSrc?: string;      // Default: '/img/logo-black-bg-small.jpg'
  logoAlt?: string;      // Default: 'APIFreaks'
  logoWidth?: number;    // Default: 120
  logoHeight?: number;   // Default: 120
}
```

### Footer

The main APIFreaks footer component with social media links, navigation sections, and company information.

#### Original Footer (with Container Queries)

The original Footer component uses container queries and custom utility classes.

```tsx
import { Footer } from "@7sikanadar/apifreaks-components";

function App() {
  return (
    <div className="@container">
      {/* Your app content */}
      <Footer />
    </div>
  );
}
```

#### Modern Footer (Standard Tailwind) - Recommended

The modern version uses standard Tailwind CSS classes for better compatibility.

```tsx
import { ModernFooter } from "@7sikanadar/apifreaks-components";

function App() {
  return (
    <div>
      {/* Your app content */}
      <ModernFooter logoSrc="/your-logo.png" logoAlt="Your Company" />
    </div>
  );
}
```

### Icons

Individual icon components used in the Footer:

```tsx
import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  HeartIcon,
} from "@7sikanadar/apifreaks-components";

function SocialLinks() {
  return (
    <div>
      <FacebookIcon width="24px" height="24px" />
      <LinkedinIcon width="24px" height="24px" />
      <TwitterIcon width="24px" height="24px" />
      <HeartIcon width="24px" height="24px" />
    </div>
  );
}
```

### NoPrefetchLink

A Next.js Link component wrapper that disables prefetching:

```tsx
import { NoPrefetchLink } from "@7sikanadar/apifreaks-components";

function Navigation() {
  return (
    <NoPrefetchLink href="/about" className="nav-link">
      About Us
    </NoPrefetchLink>
  );
}
```

## Styling

**The package is now standalone!** You don't need to configure Tailwind CSS in your host application. Just import the CSS file and the components will work with their own compiled styles.

```tsx
// This is all you need!
import "@7sikanadar/apifreaks-components/styles";
import { ModernFooter } from "@7sikanadar/apifreaks-components";
```

### If you want to extend styles (Optional)

If you're using Tailwind CSS in your project and want to extend the component styles, you can include the package in your Tailwind config:

```js
module.exports = {
  content: [
    // ... your content
    "./node_modules/@7sikanadar/apifreaks-components/**/*.{js,ts,jsx,tsx}",
  ],
  // ... rest of config
};
```

## Key Features

- ✅ **Standalone Components**: Works without requiring Tailwind CSS in your host app
- ✅ **Two Footer Variants**: Choose between container queries or standard responsive design
- ✅ **Compiled CSS**: All utilities and custom styles are pre-compiled
- ✅ **TypeScript Support**: Full type definitions included
- ✅ **Customizable**: Props for logo and other customizations
- ✅ **Modern Build**: Built with latest Next.js 15 and React 19

## TypeScript Support

The package includes full TypeScript support with type definitions.

## Dependencies

- React 19+
- Next.js 15+
- Tailwind CSS (for styling)

## License

MIT

## Author

sikanadar

# apifreaks_comp

# apifreaks_comp
