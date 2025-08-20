# @7sikandar/af-nav

A React component library with server-safe and client-only entry points. Use the server entry for components that must run in Next.js Server Components (RSC) and the `/client` entry for client-only components that use hooks or context.

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

## Exports and usage

This package exposes two main entrypoints so server components don't accidentally import client-only code:

- `@7sikandar/af-nav` — server-safe exports (Footer, icons, utils, types)
- `@7sikandar/af-nav/client` — client-only exports (hooks, context, interactive components)

Examples

1) Use server-safe components in a Server Component (no `"use client"` needed):

```tsx
// app/page.tsx  (Next.js Server Component)
import { Footer } from "@7sikandar/af-nav";

export default function Page() {
  return (
    <div>
      <main>{/* server-rendered content */}</main>
      <Footer />
    </div>
  );
}
```

2) Use client-only components inside a Client Component:

```tsx
// components/HeaderClient.tsx
"use client";
import {
  DropDownMenu,
  DarkModeToggle,
  ThemeProvider,
} from "@7sikandar/af-nav/client";

export default function HeaderClient() {
  return (
    <ThemeProvider>
      <header>
        <DropDownMenu title="Menu" items={[{ title: 'Home', link: '/' }]} />
        <DarkModeToggle />
      </header>
    </ThemeProvider>
  );
}
```

3) Icons and other pure-UI utilities can be imported from the server entry and used in either environment:

```tsx
import { FacebookIcon, HeartIcon } from "@7sikandar/af-nav";

function Social() {
  return (
    <div>
      <FacebookIcon width="24px" height="24px" />
      <HeartIcon width="24px" height="24px" />
    </div>
  );
}
```

## Notes on client-only features

- `ThemeProvider`, `DarkModeToggle`, hooks (e.g. `useTheme`), `DropDownMenu`, and `NoPrefetchLink` are client-only and must be imported from `@7sikandar/af-nav/client` inside a component that starts with `"use client"`.
- This split prevents server-side evaluation of client-only APIs like `createContext` and avoids the Next/Turbopack errors you may have seen.

Troubleshooting: "Attempted import error: 'MobileNavigation' is not exported" / "Identifier 'ThemeProvider' has already been declared"

- Root cause: importing client-only exports (like `ThemeProvider`, `MobileNavigation`, `SiteSearchBar`) directly from a Server Component (e.g. `app/layout.tsx` without `"use client"`) will cause Next to attempt to evaluate client-only modules during server compilation, or will result in duplicate symbol declarations when both server and client entrypoints export the same symbol name in different bundles.
- Fix pattern: keep server components importing only from the server entry (`@7sikandar/af-nav`) and import client-only pieces from `@7sikandar/af-nav/client` inside a component that uses `"use client"`.

Example layout approach (Server Component + small Client wrapper):

1. Keep your root layout as a Server Component and import `NavbarGlobal` and `SiteSearchBarComponent` from the server entry.

2. Create a small client component (see `src/examples/ClientProviders.tsx`) that imports and wraps any client-only providers or components from `@7sikandar/af-nav/client` (for example `ThemeProvider`, `MobileNavigation`, `SiteSearchBar`, `DropDownMenu`).

3. Use the client wrapper inside your layout where a client boundary is needed, for example:

```tsx
// app/layout.tsx (Server Component)
import { NavbarGlobal, SiteSearchBarComponent } from "@7sikandar/af-nav";
import ClientProviders from "@7sikandar/af-nav/src/examples/ClientProviders"; // or your host app copy

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

If you continue to see a missing export error for `MobileNavigation` or `SiteSearchBar`, ensure your host app has installed the package version that includes the client entry (rebuild & pack locally with `npm run build:package && npm pack`).

## Compatibility

- React 19+
- Next.js 15+

## Building & publishing

If you develop locally, run the build for the package and publish or pack:

```bash
npm run build:package
npm pack   # creates 7sikandar-af-nav-0.1.0.tgz
```

Then install the tarball in consuming apps for local testing:

```bash
npm i /path/to/7sikandar-af-nav-0.1.0.tgz
```

## License

MIT

## Author

sikanadar
